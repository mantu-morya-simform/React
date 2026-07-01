import { useCallback, useRef } from "react";

const useThrottle = (callback: () => void, delay: number) => {
  let lastRef = useRef(0);

  let throttledFunction = useCallback(() => {
    let now = Date.now();
    if (now - lastRef.current >= delay) {
      callback();
      lastRef.current = Date.now();
    }
  }, [callback, delay]);

  return throttledFunction;
};

export default useThrottle;
