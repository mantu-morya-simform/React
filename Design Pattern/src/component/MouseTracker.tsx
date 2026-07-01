import { useEffect, useState } from "react";

const MouseTracker = ({ render }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseHover = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseHover);

    return () => window.removeEventListener("mousemove", handleMouseHover);
  }, []);

  return render(position);
};

export default MouseTracker;
