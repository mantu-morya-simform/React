import { useSelector } from "react-redux";
import "../App.css";
import type { StoreType } from "../Redux/store";

const Counter = () => {
  const count = useSelector((state: StoreType) => state.count.count);
  return (
    <div className="count__cont">
      <p>Counter : {count}</p>
    </div>
  );
};

export default Counter;
