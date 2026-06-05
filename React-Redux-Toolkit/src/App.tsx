import Counter from "./component/Counter";
import "./App.css";
import { useDispatch } from "react-redux";
import {
  decrementByOne,
  incrementByOne,
  incrementByTen,
} from "./Redux/slices/countSlice";

const App = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Counter />
      <div className="btn__cont">
        <button onClick={() => dispatch(incrementByOne())}>+1</button>
        <button onClick={() => dispatch(decrementByOne())}>-1</button>
        <button onClick={() => dispatch(incrementByTen())}>+10</button>
      </div>
    </div>
  );
};

export default App;
