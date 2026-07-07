import { useState } from "react";

const useCounter = (initialValue: number) => {
  const [count, setCount] = useState<number>(initialValue);

  function increment() {
    setCount((prev) => prev + 1);
  }

  function decrement() {
    setCount((prev) => prev - 1);
  }

  function reset() {
    setCount(initialValue);
  }

  return { count, increment, decrement, reset };
};

export default useCounter;
