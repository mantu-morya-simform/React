import useCycle from "../hooks/useCycle";

const UseCycleDemo = () => {
  const [mode, cycle] = useCycle("low", "medium", "high"); // hook that cycle through values.// mode: current value// cycle: function that changes the current value to the next in the sequence, or the first if current value is last
  return (
    <div>
      <p>Current Mode: {mode}</p>
      <button onClick={cycle}>Change Mode</button>
    </div>
  );
};

export default UseCycleDemo;
