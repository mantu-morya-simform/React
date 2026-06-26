import { useEffect, useRef } from "react";

const usePrev = (val) => {
  const ref = useRef(undefined);

  useEffect(() => {
    ref.current = val;
  }, [val]);

  return ref.current;
};

export default usePrev;
