import { useEffect, useState } from "react";

type ScrollWindowType = {
  x: number;
  y: number;
};

function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState<ScrollWindowType>({
    x: window.scrollX,
    y: window.screenY,
  });

  useEffect(() => {
    const handleScrollPosition = () => {
      setScrollPosition({
        x: window.scrollX,
        y: window.scrollY,
      });
    };

    window.addEventListener("scroll", handleScrollPosition);

    return () => window.removeEventListener("scroll", handleScrollPosition);
  }, []);

  return scrollPosition;
}

export default useScrollPosition;
