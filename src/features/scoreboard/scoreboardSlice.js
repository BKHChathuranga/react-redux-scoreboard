import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  runs: 0,
  wickets: 0,
  oversBowled: 0,
};
export const scoreboardSlice= createSlice({
  name: "scoreboard",
  initialState,
  reducers: {
    runScored: (state) => {
      state.runs += 1;
    },
    wicketTaken: (state) => {
      state.wickets += 1;
    },
    overFinished: (state) => {
      state.oversBowled += 1;
    },
  },
});

export const { runScored, wicketTaken, overFinished } = scoreboardSlice.actions;

export default scoreboardSlice.reducer;
