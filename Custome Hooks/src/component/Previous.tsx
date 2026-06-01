import { useState } from "react";
import usePrevious from "../hooks/usePrevious";

const Previous = () => {
  const [count, setCount] = useState(0);

  const previousCount = usePrevious(count);

  return (
    <div>
      <h2>Current Value: {count}</h2>
      <h2>Previous Value: {previousCount ?? "No previous value"}</h2>

      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
};

export default Previous;
