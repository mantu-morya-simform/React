import { useForm } from "react-hook-form";
import "./App.css";
import { z } from "zod";
import { useSelector } from "react-redux";
import type { StoreType } from "./redux/store";
import { useGetTodosQuery } from "./redux/slices/todoSlice";
import Other from "./Other";

const schema = z.object({
  email: z.string().min(1, "Email is Required").email("Invalid Email Address"),
  password: z.string().min(6, "Password must be at least 6 char"),
});
type FormData = z.infer<typeof schema>;

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
  };

  const { data, error, isLoading } = useGetTodosQuery();

  console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <input type="submit" />
      </form>

      <Other />
    </div>
  );
}

export default App;
