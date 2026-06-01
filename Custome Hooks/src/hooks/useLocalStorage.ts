import { useState } from "react";

const useLocalStorage = (initialTheme: string = "dark") => {
  const [theme, setTheme] = useState(initialTheme);
  const currTheme = localStorage.getItem("theme");
  if (!currTheme) {
    setTheme(initialTheme);
    localStorage.setItem("theme", theme);
  }

  function setCurrTheme(val: string) {
    setTheme(val);
    localStorage.setItem("theme", val);
  }

  return { theme, setTheme: setCurrTheme };
};

export default useLocalStorage;
