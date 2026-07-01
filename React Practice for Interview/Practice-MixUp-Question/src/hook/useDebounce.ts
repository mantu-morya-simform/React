import { useEffect, useState } from "react";

const useDebounce = (val: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(val);
    }, delay);

    return () => clearTimeout(timer);
  }, [val]);

  return debouncedValue;
};

export default useDebounce;
