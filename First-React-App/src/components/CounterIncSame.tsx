import { useState } from "react";

function CounterIncSame() {
  const [count, setCount] = useState(0);

  function setState() {
    setCount((prev) => prev + 1);
  }

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={setState}>{count}</button>
      <button onClick={setState}>{count}</button>
    </div>
  );
}

export default CounterIncSame;
