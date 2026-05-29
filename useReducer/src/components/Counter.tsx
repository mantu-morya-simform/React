import { useReducer } from "react";

const initialState = 0;

const reduce = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    case "reset":
      return initialState;

    default:
      return state;
  }
};

function Counter() {
  const [count, dispatch] = useReducer(reduce, initialState);
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => dispatch("increment")}>Increment+1</button>
      <button onClick={() => dispatch("decrement")}>Decrement+1</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
}

export default Counter;
