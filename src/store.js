import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/cartReducers.js";

import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["regions"],
};
const trackingConfig = {
  key: "region",
  storage,
  blacklist: ["regionList", "selectedRegion", "searchList", "byCode"],
};

const rootReducer = combineReducers({
  regions: persistReducer(trackingConfig, counterReducer),
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
