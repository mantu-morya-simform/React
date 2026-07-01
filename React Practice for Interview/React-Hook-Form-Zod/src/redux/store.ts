import { configureStore } from "@reduxjs/toolkit";
import myApi from "./slices/todoSlice";

const store = configureStore({
  reducer: {
    [myApi.reducerPath]: myApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(myApi.middleware);
  },
});

export default store;

export type StoreType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
