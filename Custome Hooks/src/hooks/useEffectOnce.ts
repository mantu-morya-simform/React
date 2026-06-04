import { useEffect, useRef } from "react";

type StopFunction = () => void;

type EffectCallback = (stop: StopFunction) => void;

function useEffectOnce(
  callback: EffectCallback,
  dependencies: React.DependencyList = [],
) {
  const stopped = useRef(false);
  let count = 1;

  useEffect(() => {
    if (stopped.current) return;

    const stop = () => {
      stopped.current = true;
    };

    count++;

    console.log(count);

    callback(stop);
  }, dependencies);
}

export default useEffectOnce;
