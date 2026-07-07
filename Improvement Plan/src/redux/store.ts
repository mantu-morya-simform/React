import { configureStore } from "@reduxjs/toolkit";
import totoSlice from "./slices/totoSlice";
const store = configureStore({
  reducer: {
    todo: totoSlice,
  },
});

export default store;

export type StoreType = ReturnType<typeof store.getState>;
