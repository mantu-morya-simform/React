import "./App.css";
import useLocalStorage from "./hook/useLocalStorage";

const initialValue = {
  count: 5,
};

function App() {
  const [state, setState] = useLocalStorage("KEY", initialValue);
  console.log(state);
  return (
    <>
      <p>{state?.count}</p>
      <button
        onClick={() =>
          setState((pre) => {
            return { count: pre.count + 1 };
          })
        }
      >
        Set
      </button>
    </>
  );
}

export default App;
