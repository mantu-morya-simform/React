import { useState } from "react";

function useForm(initialValues, validate, submit) {
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState<{ name?: string; email?: string }>({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const reset = () => {
    setValues(initialValues);
    setError({});
  };

  const handleSubmit = () => {
    const validationErr = validate(values);
    setError(validationErr);
    if (Object.keys(validationErr).length === 0) {
      submit(values);
    }
  };

  return { values, error, handleChange, handleSubmit, reset };
}

export default useForm;
