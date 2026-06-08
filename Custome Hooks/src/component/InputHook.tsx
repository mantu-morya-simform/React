import useInput from "../hooks/useInput";

const InputHook = () => {
  const name = useInput();
  const email = useInput();
  const age = useInput();

  return (
    <div>
      <div>
        <input type="text" value={name.value} onChange={name.onChange} />
        <p>Name Value: {name.value}</p>
        <button onClick={name.reset}>Reset Name</button>
      </div>
      <div>
        <input type="text" value={email.value} onChange={email.onChange} />
        <p>Email Value: {email.value}</p>
        <button onClick={email.reset}>Email Email</button>
      </div>
      <div>
        <input type="text" value={age.value} onChange={age.onChange} />
        <p>Age Value: {age.value}</p>
        <button onClick={age.reset}>Reset Age</button>
      </div>
    </div>
  );
};

export default InputHook;
