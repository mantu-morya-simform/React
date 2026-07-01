import { createPortal } from "react-dom";

const Other = () => {
  return createPortal(
    <h1>Hello from Portal</h1>,
    document.getElementById("portal-root"),
  );
};

export default Other;
