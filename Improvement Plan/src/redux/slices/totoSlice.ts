import { createSlice } from "@reduxjs/toolkit";
import type { TodoState } from "../../component/RTK";

const initialState: TodoState = {
  todos: [
    { id: 1, title: "Learn Context API", completed: true },
    { id: 2, title: "Learn useReducer", completed: false },
  ],
};
const totoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Math.random(),
        title: action.payload.title,
        completed: false,
      });
    },
    deleteTodo: (state, action) => {
      console.log(action);
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    updateTodo: (state, action) => {
      state.todos.forEach((todo) => {
        if (todo.id === action.payload.id) {
          todo.title = action.payload.title;
        }
      });
    },
    toggleTodo: (state, action) => {
      console.log(action);
      state.todos.forEach((todo) => {
        if (todo.id === action.payload.id) {
          todo.completed = !todo.completed;
        }
      });
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, toggleTodo } =
  totoSlice.actions;

export default totoSlice.reducer;
