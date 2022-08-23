import { configureStore } from "@reduxjs/toolkit";
import covidDataReducer from "./features/covidDataSlice";

export const store = configureStore({
  reducer: {
    covidData: covidDataReducer,
  },
});
