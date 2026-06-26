import "./App.css";
import useLocalStorage from "./hook/useLocalStorage";
import useLocalStorage2 from "./hook/useLocalStorage2";

function App() {
  const [state, setState] = useLocalStorage("KEY", 5);
  console.log(state);
  return (
    <>
      <p>Prev{}</p>

      <p>{state}</p>
      <button onClick={() => setState((prev) => prev + 1)}>Set</button>
    </>
  );
}

export default App;
