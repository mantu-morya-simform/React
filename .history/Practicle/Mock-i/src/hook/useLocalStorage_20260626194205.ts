import { useState } from "react";

const useLocalStorage = <T>(key: string, value: T) => {
  const [state, setState] = useState(() => {
    let storageCount = localStorage.getItem(key);
    if (!storageCount) {
      localStorage.setItem(key, JSON.stringify(value));
      storageCount = localStorage.getItem(key); // this addition i have made
    }
    return JSON.parse(storageCount);
  });

  function setValue(value: T | ((value: T) => T)) {
    if (value instanceof Function) {
      const temp = value(state);
      setState(temp);
    } else {
      setState(value);
    }
  }

  return [state, setValue];
};

export default useLocalStorage;
