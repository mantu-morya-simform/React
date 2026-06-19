import React, { useState } from "react";

const Track = ({ render }) => {
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
      {render(pos)}
    </div>
  );
};

export default Track;
