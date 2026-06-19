import { useState, type ChangeEvent } from "react";

const Input = (prop) => {
  const [value, setValue] = useState<string>("");
  function handleClick(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <div>
      <input type="text" onChange={handleClick} />
      <br />
      {prop.renderTextBelow(value)}
    </div>
  );
};

export default Input;
