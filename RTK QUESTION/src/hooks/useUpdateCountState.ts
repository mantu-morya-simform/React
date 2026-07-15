import { useRef, useState } from "react";

const useUpdateCountState = <T>(initialState: T) => {
  const [state, setState] = useState(initialState);
  const count = useRef(0);

  function setUpdateState(newVal: T | ((prev: T) => T)) {
    if (typeof newVal === "function") {
      setState((prev) => (newVal as (prev: T) => T)(prev));
    } else {
      setState(newVal);
    }
    count.current += 1;
  }

  return [state, setUpdateState, count.current] as const;
};

export default useUpdateCountState;
