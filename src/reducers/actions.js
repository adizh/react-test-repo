import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRegionsList = createAsyncThunk(
  "region/getRegionsList",
  async ({ region, name }, { rejectWithValue }) => {
    try {
      let jsonRes = await fetch(
        `https://restcountries.com/v3.1/region/${region}`
      ).then((res) => res.json());
      return { jsonRes, name };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getSearchList = createAsyncThunk(
  "region/getSearchList",
  async (name) => {
    try {
      let jsonRes = await fetch(
        `https://restcountries.com/v3.1/name/${name}`
      ).then((res) => res.json());
      return jsonRes;
    } catch (error) {
      return error;
    }
  }
);
export const getByCode = createAsyncThunk("region/getByCode", async (code) => {
  try {
    let jsonRes = await fetch(
      `https://restcountries.com/v3.1/alpha/${code}`
    ).then((res) => res.json());
    return jsonRes;
  } catch (error) {
    return error;
  }
});
