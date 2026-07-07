import { useEffect, useRef, useState } from "react";

const useDebounce = <T>(value: T, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  const timeref = useRef(null);

  useEffect(() => {
    timeref.current = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeref.current);
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
