import useDefault from "../hooks/useDefault";

const initalValue = 5;
const defaultValue = 10;

const UseDefaultDemo = () => {
  const [state, setState] = useDefault(initalValue, defaultValue); // works exactly like useState but whenever state is null or undefined, it returns defaultValue instead of null or undefined
  return (
    <div>
      <p>{state}</p>
      <button onClick={() => setState(null)}>Change</button>
    </div>
  );
};

export default UseDefaultDemo;
