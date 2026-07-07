import React, { createContext, useContext, useReducer, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import store, { type StoreType } from "../redux/store";
import {
  addTodo,
  deleteTodo,
  toggleTodo,
  updateTodo,
} from "../redux/slices/totoSlice";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export type TodoState = {
  todos: Todo[];
};

// type TodoAction =
//   | { type: "ADD_TODO"; payload: { title: string } }
//   | { type: "TOGGLE_TODO"; payload: { id: number } }
//   | { type: "DELETE_TODO"; payload: { id: number } }
//   | { type: "UPDATE_TODO"; payload: { id: number; title: string } };

// function todoReducer(state: TodoState, action: TodoAction): TodoState {
//   // reducer state
// }

// type TodoContextValue = {
//   state: TodoState;
//   dispatch: React.Dispatch<TodoAction>;
// };

// const TodoContext = createContext<TodoContextValue | null>(null);

// function TodoProvider({ children }: { children: React.ReactNode }) {
//   const [state, dispatch] = useReducer(todoReducer, initialState);

//   return (
//     <TodoContext.Provider value={{ state, dispatch }}>
//       {children}
//     </TodoContext.Provider>
//   );
// }

// function useTodos() {
//   const context = useContext(TodoContext);

//   if (!context) {
//     throw new Error("useTodos must be used inside TodoProvider");
//   }

//   return context;
// }

function AddTodo() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  function handleAdd() {
    const trimmedTitle = title.trim();

    if (!trimmedTitle) return;

    dispatch(addTodo({ title: trimmedTitle }));

    setTitle("");
  }

  return (
    <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
      <input
        value={title}
        placeholder="Add a todo..."
        onChange={(event) => setTitle(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleAdd();
          }
        }}
      />

      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

function TodoItem({ todo }: { todo: Todo }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);

  function saveTitle() {
    const trimmedTitle = title.trim();

    if (!trimmedTitle) return;

    dispatch(
      updateTodo({
        id: todo.id,
        title: trimmedTitle,
      }),
    );

    setIsEditing(false);
  }

  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "8px 0",
      }}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo({ id: todo.id }))}
      />

      {isEditing ? (
        <>
          <input
            autoFocus
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") saveTitle();
              if (event.key === "Escape") {
                setTitle(todo.title);
                setIsEditing(false);
              }
            }}
          />

          <button onClick={saveTitle}>Save</button>
          <button
            onClick={() => {
              setTitle(todo.title);
              setIsEditing(false);
            }}
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <span
            style={{
              flex: 1,
              textDecoration: todo.completed ? "line-through" : "none",
              opacity: todo.completed ? 0.55 : 1,
            }}
          >
            {todo.title}
          </span>

          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}

      <button onClick={() => dispatch(deleteTodo({ id: todo.id }))}>
        Delete
      </button>
    </li>
  );
}

function TodoList() {
  const state = useSelector((store: StoreType) => store.todo);

  if (state.todos.length === 0) {
    return <p>No todos yet.</p>;
  }

  return (
    <ul style={{ padding: 0, listStyle: "none" }}>
      {state.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

function TodoStats() {
  const state = useSelector((store: StoreType) => store.todo);

  const completedCount = state.todos.filter((todo) => todo.completed).length;

  return (
    <p style={{ color: "#666" }}>
      Completed: {completedCount} / {state.todos.length}
    </p>
  );
}

function TodoApp() {
  return (
    <div
      style={{
        maxWidth: 520,
        margin: "40px auto",
        padding: 24,
        border: "1px solid #ddd",
        borderRadius: 10,
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2>Todo App</h2>

      <AddTodo />
      <TodoStats />
      <TodoList />
    </div>
  );
}

export default function RTK() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}
