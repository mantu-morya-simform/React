import useCounter from "../hooks/useCounter";

function Counter() {
  const { count, increment, decrement } = useCounter(10);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default Counter;
