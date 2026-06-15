import { useState } from "react";

const BikeTracker = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        height: "100vh",
        backgroundColor: "#fffff",
        color: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "24px",
        fontFamily: "sans-serif",
      }}
    >
      <h1>
        🚴 Bike is At ({pos.x}, {pos.y})
      </h1>
    </div>
  );
};

export default BikeTracker;
