/** 
Practical 1. Auto Focus Input
(Estimated time: 20 to 30 minutes)
 
Requirements:
Focus the first input when the page loads.
Add a button to focus the input again.
Expected concepts:
DOM references
useRef

*/

import { useEffect, useRef } from "react";

const AutoFocus = () => {
  const firstInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    firstInputRef.current?.focus();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "200px",
        gap: "10px",
        padding: "20px",
        border: "1px solid black",
        marginBottom: "20px",
      }}
    >
      <input type="text" placeholder="Name" ref={firstInputRef} />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Phone" />
      <input type="text" placeholder="Post Code" />

      <button onClick={() => firstInputRef.current?.focus()}>Focus</button>
    </div>
  );
};

export default AutoFocus;
