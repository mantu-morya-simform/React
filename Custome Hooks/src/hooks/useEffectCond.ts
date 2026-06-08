import { useEffect, useRef } from "react";

type StopFunction = () => void;

type EffectCallback = (stop: StopFunction) => void;

function useEffectCond(
  callback: EffectCallback,
  dependencies: React.DependencyList = [],
) {
  const stopped = useRef(false);

  useEffect(() => {
    if (stopped.current) return;

    const stop = () => {
      stopped.current = true;
    };

    return callback(stop);
  }, [...dependencies]);
}

export default useEffectCond;
