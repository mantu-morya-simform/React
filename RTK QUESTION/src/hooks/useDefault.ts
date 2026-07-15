import { useState } from "react";

const useDefault = <T>(initialValue: T, defaultValue: T) => {
  const [state, setState] = useState<T | null | undefined>(initialValue);

  return [
    state === null || state === undefined ? defaultValue : state,
    setState,
  ] as const;
};

export default useDefault;
