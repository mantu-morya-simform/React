import useForm1 from "../hooks/useForm1";

type FormDataType = {
  name: string;
  email: string;
  password: string;
};

const Form = () => {
  const initialValue: FormDataType = {
    name: "",
    email: "",
    password: "",
  };

  function onSubmit(data: FormDataType) {
    alert(`Submit Detail ${data.name}`);
  }

  function onValidate(value: FormDataType) {
    const errors: FormDataType = {
      name: "",
      email: "",
      password: "",
    };

    if (!value.name.trim()) {
      errors.name = "Name is Required";
    }

    if (!value.email.includes("@")) {
      errors.email = "Invalid Email";
    }

    if (value.password.length < 6) {
      errors.password = "Minimum 6 characters required";
    }

    return errors;
  }

  const { data, handleChange, handleSubmit, reset, err } = useForm1(
    initialValue,
    onValidate,
    onSubmit,
  );

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
        <h1 className="mb-6 text-center text-2xl font-bold">
          Registration Form
        </h1>

        {/* name */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full rounded-md border p-3 outline-none focus:ring-2"
          />
          <p className="text-red-500 text-sm">{err?.name}</p>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full rounded-md border p-3 outline-none focus:ring-2"
          />
          <p className="text-red-500 text-sm">{err?.email}</p>
        </div>

        {/* password */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full rounded-md border p-3 outline-none focus:ring-2"
          />
          <p className="text-red-500 text-sm">{err?.password}</p>
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-black p-3 text-white transition hover:opacity-90"
          onClick={handleSubmit}
        >
          Submit
        </button>

        <button
          type="submit"
          className="w-full rounded-md bg-red p-3 text-red-700 transition hover:opacity-90"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Form;
