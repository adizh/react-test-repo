import { createSlice } from "@reduxjs/toolkit";
import { getRegionsList, getSearchList, getByCode } from "./actions.js";
export const counterSlice = createSlice({
  name: "regions",
  initialState: {
    regionList: [],
    searchList: [],
    byCode: [],
    favourites: [],
    selectedRegion: "",
    errMsg: "",
  },
  reducers: {
    addToFavourites: (state, { payload }) => {
      let isFound = state.favourites.find(
        (e) => e.name.common === payload.name.common
      );
      if (!isFound) {
        state.favourites = [...state.favourites, payload];
      }
      return;
    },
    removeFav: (state, { payload }) => {
      state.favourites = state.favourites.filter(
        (e) => e.name.common !== payload.name.common
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRegionsList.fulfilled, (state, { payload }) => {
      state.regionList = payload.jsonRes;
      state.selectedRegion = payload.name;
    });
    builder.addCase(getRegionsList.rejected, (state, { payload }) => {
      state.errMsg = payload;
    });
    builder.addCase(getSearchList.fulfilled, (state, { payload }) => {
      state.searchList = payload;
    });
    builder.addCase(getByCode.fulfilled, (state, { payload }) => {
      state.byCode = payload;
    });
  },
});
export const { increment, addToFavourites, removeFav } = counterSlice.actions;
export default counterSlice.reducer;
