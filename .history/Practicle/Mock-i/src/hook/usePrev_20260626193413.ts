import { useEffect, useRef } from "react";

const usePrev = (val) => {
  const prev = useRef(null);

  useEffect(() => {
    prev.current = val;
  }, [val]);

  ()
};

export default usePrev;
