import useScrollPosition from "../hooks/useScrollPosition";
import "../App.css";

const ScrollPosition = () => {
  const { x, y } = useScrollPosition();
  console.log(x, y);

  return (
    <div>
      <h2>Scroll Position</h2>
      <p>X: {x}</p>
      <p>Y: {y}</p>

      <div style={{ height: "200vh", width: "200vw" }}>Scroll down</div>
    </div>
  );
};

export default ScrollPosition;
