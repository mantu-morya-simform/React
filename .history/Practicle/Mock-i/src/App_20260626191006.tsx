import "./App.css";
import useLocalStorage from "./hook/useLocalStorage";
import useLocalStorage2 from "./hook/useLocalStorage2";

const initialValue = {
  count: 5,
};

function App() {
  const [state, setState] = useLocalStorage2("KEY", 5);
  console.log(state);
  return (
    <>
      <p>{state?.count}</p>
      <button onClick={() => setState((pre) => ({ count: pre.count + 1 }))}>
        Set
      </button>
    </>
  );
}

export default App;
