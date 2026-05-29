import { useState } from "react";

function CountButton() {
  const [count, setCount] = useState(0);

  function setState() {
    setCount((prev) => prev + 1);
  }

  return (
    <div>
      <button onClick={setState}>{count}</button>
    </div>
  );
}

export default CountButton;
