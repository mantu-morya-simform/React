import { useRef, useState } from "react";
import "../App.css";

function Input1() {
  const [todo, setTodo] = useState([]);
  const inputRef = useRef<HTMLInputElement | null>(null);
  function handleClick() {
    if (inputRef.current) {
      const value = inputRef.current.value;
      setTimeout(() => {
        // suppose that is api that 1 sec to add the todo into the list
        setTodo((prev) => [...prev, value]);
      }, 1000);
      inputRef.current.value = "";
    }
  }
  return (
    <div>
      <div className="todo__App">
        <label htmlFor="title">
          <b>Title</b>
        </label>
        <input className="input" type="text" ref={inputRef} />
        <button onClick={handleClick}>Add Todo</button>
      </div>
      <ul className="List">
        {todo.map((data, index) => {
          return <li key={index}>{data}</li>;
        })}
      </ul>
    </div>
  );
}

export default Input1;
