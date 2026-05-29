import { useRef, useEffect } from "react";

function Input() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleClick() {
    console.log(inputRef.current.value);
  }
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Get Value</button>
    </div>
  );
}

export default Input;
