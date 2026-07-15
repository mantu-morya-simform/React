import useUpdateCountState from "../hooks/useUpdateCountState";
import UseCycleDemo from "./UseCycleDemo";
import UseDefaultDemo from "./UseDefaultDemo";
import UseKeyboardShortcutDemo from "./UseKeyboardShortcutDemo";

const HooksTest = () => {
  const [state, setUpdateState, count] = useUpdateCountState(20);
  return (
    <>
      <div>
        <p>Count{state}</p>
        <p>Updated: {count} Time</p>
        <button onClick={() => setUpdateState((prev) => prev + 1)}>
          Update
        </button>
      </div>
      <UseDefaultDemo />
      <UseCycleDemo />
      <UseKeyboardShortcutDemo />
    </>
  );
};

export default HooksTest;
