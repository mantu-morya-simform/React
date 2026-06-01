import useToggle from "../hooks/useToggle";

const Toggle = () => {
  const { value, toggle } = useToggle(false);
  function handleToggleState() {
    toggle();
  }
  return (
    <div>
      <p>Curr State {value ? "True" : "False"}</p>
      <button onClick={handleToggleState}>Toggle State</button>
    </div>
  );
};

export default Toggle;
