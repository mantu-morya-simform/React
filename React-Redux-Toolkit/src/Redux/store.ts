import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./slices/countSlice";
import thunkTodoSlice from "./slices/thunkTodoSlice";

export const store = configureStore({
  reducer: {
    count: countReducer,
    thunktodo: thunkTodoSlice,
  },
});

export type StoreType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
