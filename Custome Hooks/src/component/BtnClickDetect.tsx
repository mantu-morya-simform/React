import { useRef } from "react";
import useClickOutSide from "../hooks/useClickOutSide";

const BtnClickDetect = () => {
  const ref = useRef(null);
  useClickOutSide(ref, () => alert("Click Inside"));
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
    >
      <button
        style={{
          padding: "20px 40px",
          border: "1px solid black",
          cursor: "pointer",
        }}
        ref={ref}
      >
        Toggle
      </button>
    </div>
  );
};

export default BtnClickDetect;
