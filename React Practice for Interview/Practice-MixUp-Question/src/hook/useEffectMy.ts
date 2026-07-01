import { useEffect, useRef } from "react";

const useEffectMy = (callback, dependencies) => {
  const ref = useRef(true);

  useEffect(() => {
    if (ref.current) {
      ref.current = false;
      return;
    }
    return callback();
  }, dependencies);
};

export default useEffectMy;
