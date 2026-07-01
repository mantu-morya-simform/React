import { createSlice } from "@reduxjs/toolkit";
import todoThunk from "./todothunk";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    data: [],
    err: "",
    isLoading: false,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(todoThunk.fulfilled, (state, action) => {
      state.data = action.payload;
      state.err = "";
      state.isLoading = false;
    });

    builder.addCase(todoThunk.rejected, (state, action) => {
      state.err = action.payload.message;
      state.isLoading = false;
    });

    builder.addCase(todoThunk.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export const {} = counterSlice.actions;

export default counterSlice.reducer;
