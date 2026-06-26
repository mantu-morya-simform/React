import { useEffect, useState } from "react";

const useLocalStorage = (key: string, value: { count: number }) => {
  const [state, setState] = useState(() => {
    let storageCount = localStorage.getItem(key);
    if (!storageCount) {
      localStorage.setItem(key, JSON.stringify(value));
      storageCount = localStorage.getItem(key); // this addition i have made
    }
    return JSON.parse(storageCount);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
};

export default useLocalStorage;
