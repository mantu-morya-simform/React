import { useActionState, useId } from "react";
import "../App.css";

type FormState = {
  error: string;
  success: string;
};

function Input1() {
  const [data, action, isPending] = useActionState<FormState, FormData>(
    saveEmail,
    {
      error: "",
      success: "",
    },
  );

  const id = useId();

  return (
    <form action={action}>
      <label htmlFor={id}>Email</label>
      <input type="email" id={id} name="email" />
      <input disabled={isPending} type="submit" />

      {data.error && <span style={{ color: "red" }}>{data.error}</span>}
      {data.success && <span style={{ color: "green" }}>{data.success}</span>}
    </form>
  );
}

export default Input1;

async function saveEmail(
  prevState: FormState,
  formdata: FormData,
): Promise<FormState> {
  const email = formdata.get("email") as string;

  await wait(1000);

  if (!email) {
    return { error: "Email is required", success: "" };
  }

  return { success: "Email saved", error: "" };
}

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
