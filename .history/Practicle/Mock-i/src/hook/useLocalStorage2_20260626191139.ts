import { useEffect, useState } from "react";

type Props<T> = {
  key: string;
  initValue: T;
};

const useLocalStorage2 = <T>(key: string, initValue: T) => {
  const [state, setState] = useState(() => {
    let storageCount = localStorage.getItem(key);
    if (!storageCount) {
      localStorage.setItem(key, JSON.stringify(initValue));
      storageCount = localStorage.getItem(key); // this addition i have made
    }
    return JSON.parse(storageCount);
  });

  function setValue(value: T | ((value: T) => T)) {
    // if (typeof value === "function") {
    //   setState(value);
    // } else {
    // }
    setState(value);
    localStorage.setItem(key, JSON.stringify(value));
  }

  // useEffect(() => {
  //   localStorage.setItem(key, JSON.stringify(state));
  // }, [state]);

  return [state, setValue];
};

export default useLocalStorage2;
