import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice.ts";

const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

export default store;

export type StoreType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
