import { useEffect, useRef } from "react";

const usePrev = (val) => {
  const prev = useRef(null);

  useEffect(() => {
    prev;
  }, [val]);
};

export default usePrev;
