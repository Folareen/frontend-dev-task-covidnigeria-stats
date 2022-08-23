import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const covidNigeriaApiUrl = "https://covidnigeria.herokuapp.com/api";

const initialState = {
  covidData: [],
  loading: true,
};

export const getCovidData = createAsyncThunk("covidData/getcovidData", () => {
  return fetch(covidNigeriaApiUrl)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
});

const covidDataSlice = createSlice({
  name: "covidData",
  initialState,
  extraReducers: {
    [getCovidData.pending]: (state) => {
      state.loading = true;
    },
    [getCovidData.fulfilled]: (state, action) => {
      state.loading = false;
      state.covidData = action.payload;
    },
    [getCovidData.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default covidDataSlice.reducer;
