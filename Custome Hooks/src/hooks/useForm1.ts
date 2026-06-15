import { useState } from "react";

type FormDataType = {
  name: string;
  email: string;
  password: string;
};

const useForm1 = (
  initialValue: FormDataType,
  onValidate: (data: FormDataType) => FormDataType,
  onSubmit: (data: FormDataType) => void,
) => {
  const [data, setData] = useState<FormDataType>(initialValue);
  const [err, setErr] = useState<FormDataType | null>(initialValue);

  function handleChange(e) {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit() {
    const errors = onValidate(data);
    setErr(errors);

    const hasError = Object.values(errors).some((e) => e);

    if (!hasError) {
      onSubmit(data);
    }
  }

  function reset() {
    setData(initialValue);
    setErr(initialValue);
  }

  return {
    data,
    handleChange,
    err,
    setErr,
    handleSubmit,
    reset,
  };
};

export default useForm1;
