import { useDispatch, useSelector } from "react-redux";
import type { DispatchType, StoreType } from "../redux/store";
import {
  btnClicked,
  decrementByOne,
  incrementByOne,
  reset,
} from "../redux/slices/countSlice";

const Counter = () => {
  const state = useSelector((store: StoreType) => store.counter);
  const dispatch: DispatchType = useDispatch();
  return (
    <div>
      <p>Count: {state.count} </p>
      <p>Button Clicked {state.btnClicked} Time</p>
      <button
        onClick={() => {
          dispatch(incrementByOne());
          dispatch(btnClicked());
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          dispatch(decrementByOne());
          dispatch(btnClicked());
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          dispatch(reset());
          dispatch(btnClicked());
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
