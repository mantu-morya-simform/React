import { useEffect, useRef } from "react";

const usePrevious = <T>(value: T) => {
  const ref = useRef<T | undefined>(undefined);

  const previous = ref.current;

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return previous;
};

export default usePrevious;
