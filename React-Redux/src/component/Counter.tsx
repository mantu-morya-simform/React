import { useSelector } from "react-redux";
import "../App.css";
const Counter = () => {
  const countState = useSelector((state: { count: number }) => state);
  return (
    <div className="count__cont">
      <p>Counter : {countState.count}</p>
    </div>
  );
};

export default Counter;
