import Counter from "./component/Counter";
import "./App.css";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Counter />
      <div className="btn__cont">
        <button onClick={() => dispatch({ type: "INCREMENT_ONE" })}>+1</button>
        <button onClick={() => dispatch({ type: "DECREMENT_ONE" })}>-1</button>
        <button onClick={() => dispatch({ type: "INCREMENT_TEN" })}>+10</button>
      </div>
    </div>
  );
};

export default App;
