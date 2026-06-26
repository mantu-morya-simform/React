import "./App.css";
import useLocalStorage from "./hook/useLocalStorage";
import useLocalStorage2 from "./hook/useLocalStorage2";
import usePrev from "./hook/usePrev";

function App() {
  const [state, setState] = useLocalStorage("KEY", 5);
  const prev = usePrev(state);
  console.log(state);

  console.log(prev);
  return (
    <>
      <p>Prev{!prev ? state - 1 : prev}</p>
      <p>current{state}</p>
      <button onClick={() => setState((prev) => prev + 1)}>Set</button>
    </>
  );
}

export default App;
