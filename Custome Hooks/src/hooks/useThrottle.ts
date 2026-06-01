import { useCallback, useRef } from "react";

const useThrottle = (callback: () => void, delay: number) => {
  const lastExecuted = useRef(0);

  const throttledFunction = useCallback(() => {
    const now = Date.now();

    if (now - lastExecuted.current >= delay) {
      callback();
      lastExecuted.current = now;
    }
  }, [callback, delay]);

  return throttledFunction;
};

export default useThrottle;
