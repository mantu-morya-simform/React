import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "count",
  initialState: { count: 0 },
  reducers: {
    incrementByOne: (state) => {
      state.count = state.count + 1;
    },
    decrementByOne: (state) => {
      state.count = state.count - 1;
    },
    incrementByTen: (state) => {
      state.count = state.count + 10;
    },
  },
});

export const { incrementByOne, incrementByTen, decrementByOne } =
  countSlice.actions;

export default countSlice.reducer;
