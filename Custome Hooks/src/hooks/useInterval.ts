import { useEffect } from "react";

const useInterval = (callback: () => void, delay: number) => {
  useEffect(() => {
    const timer = setInterval(() => {
      callback();
    }, delay);
    return () => {
      clearInterval(timer);
    };
  }, [callback, delay]);
};

export default useInterval;
