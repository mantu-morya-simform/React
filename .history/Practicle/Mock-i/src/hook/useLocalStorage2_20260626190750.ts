import { useEffect, useState } from "react";

type Props<T> = {
    key:string,
    initValue : T
}

const useLocalStorage2 = <T>({key,initValue}:Props<T>) => {
  const [state, setState] = useState(() => {
    let storageCount = localStorage.getItem(key);
    if (!storageCount) {
      localStorage.setItem(key, JSON.stringify(initValue));
      storageCount = localStorage.getItem(key); // this addition i have made
    }
    return JSON.parse(storageCount);
  });

  function setValue(value : T | (value : T)=>T)
  {
    if(typeof value === 'function')
    {
      const v = value()
      setState(v)
    }
    else 
    {
      setState(value)
    }
  }

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
};

export default useLocalStorage2;
