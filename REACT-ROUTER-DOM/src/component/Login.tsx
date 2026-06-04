import { useRef } from "react";
import useAuth from "../context/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const auth = useAuth();
  const nameRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const redirectpath = location.state?.path || "/";
  function handleLoginClick() {
    if (!nameRef.current.value) return;
    auth.login(nameRef.current.value);
    navigate(redirectpath, { replace: true });
  }
  return (
    <div className="flex flex-col gap-5 p-10 border w-[600px] justify-center align-middle">
      <div className="flex justify-center">
        <h2 className="text-2xl">Login Page</h2>
      </div>
      <div className="flex gap-5 justify-center align-middle">
        <label htmlFor="userName" className="flex align-middle p-2">
          UserName
        </label>
        <input
          className="border p-2"
          type="text"
          placeholder="Enter UserName"
          ref={nameRef}
        />
        <div className="flex justify-center">
          <button
            className="p-2 bg-blue-600 w-[100px]"
            onClick={handleLoginClick}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
