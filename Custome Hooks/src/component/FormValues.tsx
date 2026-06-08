import useForm from "../hooks/useForm";

const FormValues = () => {
  function submit(values) {
    console.log(values);
  }

  function validate(values) {
    const errors = {};
    if (!values.name.trim()) {
      errors["name"] = "Name is required";
    }

    if (!values.email.includes("@")) {
      errors["email"] = "Valid email required";
    }

    return errors;
  }

  const { values, error, handleChange, handleSubmit, reset, setValues } =
    useForm({ name: "", email: "" }, validate, submit);

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={values.name}
        onChange={handleChange}
      />
      {error.name && <p>{error.name}</p>}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
      />
      {error.email && <p>{error.email}</p>}
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default FormValues;
