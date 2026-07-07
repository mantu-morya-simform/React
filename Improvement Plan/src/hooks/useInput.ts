import { useState } from "react";

const useInput = (initialVaue = "") => {
  const [value, setValue] = useState(initialVaue);

  function onChange(e) {
    setValue(e.target.value);
  }

  function reset() {
    setValue(initialVaue);
  }

  return { value, onChange, setValue, reset };
};

export default useInput;
