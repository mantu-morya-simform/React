import { startTransition, useOptimistic, useRef, useState } from "react";
import "../App.css";

function getAPIResponse(value: string): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value + "Actual");
      // reject();
    }, 1000);
  });
}
function getAPIResponse2(value: string): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value + "Actual");
      // reject();
    }, 3000);
  });
}

function Input2() {
  const [todo, setTodo] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [optimisticTodo, addOptimisticTodo] = useOptimistic(todo);

  function handleClick() {
    if (!inputRef.current) return;

    const value = inputRef.current.value;
    inputRef.current.value = "";

    startTransition(async () => {
      addOptimisticTodo((prev) => [...prev, value]);

      const res = await getAPIResponse(value);
      setTodo((prev) => [...prev, res]);
    });
    startTransition(async () => {
      addOptimisticTodo((prev) => [...prev, value]);

      const res = await getAPIResponse2(value);
      setTodo((prev) => [...prev, res]);
    });
  }

  console.log("re render");
  return (
    <div>
      <div className="todo__App">
        <label>
          <b>Title</b>
        </label>
        <input className="input" type="text" ref={inputRef} />
        <button onClick={handleClick}>Add Todo</button>
      </div>

      <ul className="List">
        {optimisticTodo.map((data, index) => (
          <li key={index}>{data}</li>
        ))}
      </ul>
    </div>
  );
}

export default Input2;
