import { useState } from "react";

const useToggle = () => {
  const [toggleValue, setToggleValue] = useState(false);

  function toggle() {
    setToggleValue((prev) => !prev);
  }

  return { toggleValue, toggle };
};

export default useToggle;
