import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  btnClicked: 0,
};

const countSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementByOne: (state) => {
      state.count += 1;
    },
    decrementByOne: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    btnClicked: (state) => {
      state.btnClicked += 1;
    },
  },
});

export const { incrementByOne, decrementByOne, reset, btnClicked } =
  countSlice.actions;

export default countSlice.reducer;
