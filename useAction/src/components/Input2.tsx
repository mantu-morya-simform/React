import "../App.css";

function Input2() {
  const id = Math.random() * 100;
  return (
    <div>
      <label htmlFor={`${id}`}>Email</label>
      <input type="email" id={`${id}`} />
    </div>
  );
}

export default Input2;
