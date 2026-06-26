import "./App.css";
import useLocalStorage from "./hook/useLocalStorage";
import useLocalStorage2 from "./hook/useLocalStorage2";
import usePrev from "./hook/usePrev";

function App() {
  const [state, setState] = useLocalStorage("KEY", 5);
  const prev = usePrev(1);
  console.log(state);
  return (
    <>
      <p>Prev{}</p>
      <p>current{state}</p>
      <button onClick={() => setState((prev) => prev + 1)}>Set</button>
    </>
  );
}

export default App;
