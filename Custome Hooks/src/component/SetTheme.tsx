import useLocalStorage from "../hooks/useLocalStorage";

const SetTheme = () => {
  const { theme, setTheme } = useLocalStorage("dark");
  function handleToggleTheme() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }
  return (
    <div>
      <p>Curr Theme {theme}</p>
      <button onClick={handleToggleTheme}>Toggle-Theme</button>
    </div>
  );
};

export default SetTheme;
