import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const state = useSelector((store) => store);
  const dispatch = useDispatch();
  // console.log(state);
  return (
    <>
      Count : {state.count}{" "}
      <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
    </>
  );
}

export default App;
