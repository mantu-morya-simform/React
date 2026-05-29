import "../App.css";
import { useState } from "react";

function Input1() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const List_Size = 10000;

  function handleChange(e) {
    setInput(e.target.value);
    const l = [];
    for (let i = 0; i < List_Size; i++) {
      l.push(e.target.value);
    }
    setList(l);
  }
  return (
    <div>
      <input
        className="input"
        type="text"
        value={input}
        onChange={(e) => handleChange(e)}
      />
      <h2>All Input Data</h2>
      {list.map((listItem) => {
        return (
          <>
            <p>{listItem}</p>
          </>
        );
      })}
    </div>
  );
}

export default Input1;
