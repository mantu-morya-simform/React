import { useEffect, useState } from "react";

const useLocalStorage = <T>(key: string, value: T) => {
  const [state, setState] = useState(() => {
    let storageCount = localStorage.getItem(key);
    if (!storageCount) {
      localStorage.setItem(key, JSON.stringify(value));
      storageCount = localStorage.getItem(key); // this addition i have made
    }
    return JSON.parse(storageCount);
  });

  // useEffect(() => {
  //   localStorage.setItem(key, JSON.stringify(state));
  // }, [state]);

  function setValue(value : T | ()) {}

  return [state, setState];
};

export default useLocalStorage;
