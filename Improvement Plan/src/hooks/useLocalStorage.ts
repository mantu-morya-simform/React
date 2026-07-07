import { useState } from "react";

const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [value, setValue] = useState<T>(() => {
    let storageData = localStorage.getItem(key);
    if (storageData !== null) {
      return JSON.parse(storageData);
    }

    localStorage.setItem(key, JSON.stringify(initialValue));
    return initialValue;
  });

  function setStoredValue(newValue: T | ((prevValue: T) => T)) {
    const newValToStore =
      newValue instanceof Function ? newValue(value) : newValue;

    setValue(newValToStore);
    localStorage.setItem(key, JSON.stringify(newValToStore));
  }

  return { value, setStoredValue };
};

export default useLocalStorage;
