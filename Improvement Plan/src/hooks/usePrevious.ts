import { useEffect, useRef } from "react";

const usePrevious = <T>(value: T) => {
  const prevRef = useRef<T | null>(null);

  useEffect(() => {
    prevRef.current = value;
  }, [value]);

  return prevRef.current;
};

export default usePrevious;
