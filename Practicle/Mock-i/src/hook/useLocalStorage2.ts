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
    let temp;
    if (value instanceof Function) {
      temp = value(state);
    } else {
      temp = value;
    }
    setState(temp);
    localStorage.setItem(key, JSON.stringify(temp));
  }

  // useEffect(() => {
  //   localStorage.setItem(key, JSON.stringify(state));
  // }, [state]);

  return [state, setValue];
};

export default useLocalStorage2;
