import "./App.css";
import useLocalStorage from "./hook/useLocalStorage";
import usePrev from "./hook/usePrev";

function App() {
  const [state, setValue] = useLocalStorage("KEY", 5);
  const prev = usePrev(state);
  console.log(state);

  console.log(prev);
  return (
    <>
      <p>Prev: {!prev ? state - 1 : prev}</p>
      <p>current: {state}</p>
      <button onClick={() => setValue((prev) => prev + 1)}>Set</button>
    </>
  );
}

export default App;
