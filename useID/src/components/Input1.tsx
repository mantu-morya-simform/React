import { useId } from "react";
import "../App.css";

function Input1() {
  const id = useId();
  return (
    <div>
      <label htmlFor={`${id}`}>Email</label>
      <input type="email" id={`${id}`} />
    </div>
  );
}

export default Input1;
