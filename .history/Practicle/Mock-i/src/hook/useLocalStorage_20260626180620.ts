import { useEffect, useState } from "react";

const useLocalStorage = (key: string, value: { count: number }) => {
  const [state, setState] = useState(() => {
    const storageCount = localStorage.getItem(key);
    if (!storageCount) {
      return { count: value };
    }
    return JSON.parse(storageCount);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
};

export default useLocalStorage;
