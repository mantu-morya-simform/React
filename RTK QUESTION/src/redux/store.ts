import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./slices/countSlice";
import userSlice from "./slices/userSlice";
const store = configureStore({
  reducer: {
    counter: countSlice,
    user: userSlice,
  },
});

export default store;

export type StoreType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
