import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
  try {
    const todoData = await fetch("https://f1api.dev/api/drivers");
    return todoData.json();
  } catch (error) {
    throw new Error("Err", error);
  }
});

const thunkTodoSlice = createSlice({
  name: "thunktodo",
  initialState: {
    isLoading: false,
    data: null,
    isErr: false,
  },
  reducers: {
    clearData: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });

    builder.addCase(fetchTodos.rejected, (state, action) => {
      console.log("Err :", action.payload);
      state.isLoading = false;
      state.isErr = true;
    });
  },
});

export const { clearData } = thunkTodoSlice.actions;

export default thunkTodoSlice.reducer;
