import useKeyboardShortcut from "../hooks/useKeyboardShortcut";

const UseKeyboardShortcutDemo = () => {
  function callback() {
    console.log("Callback Run");
  }
  // hook that fires callback when ctrl+shft+A is pressed.
  useKeyboardShortcut({ key: "A", ctrl: true, shift: true, onKey: callback });
  return <div></div>;
};

export default UseKeyboardShortcutDemo;
