import { useEffect, useState, type RefObject } from "react";

const useHover = (ref: RefObject<HTMLElement | null>) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  useEffect(() => {
    const element: HTMLElement = ref.current;
    if (!element) return;

    function mouseEnter() {
      setIsHover(true);
    }

    function mouseOut() {
      setIsHover(false);
    }

    element.addEventListener("mouseenter", mouseEnter);
    element.addEventListener("mouseout", mouseOut);

    return () => {
      element.removeEventListener("mouseenter", mouseEnter);
      element.removeEventListener("mouseout", mouseOut);
    };
  }, [ref]);

  return { isHover };
};

export default useHover;
