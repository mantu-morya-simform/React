import { useState } from "react";

const useClipboard = () => {
  const [copied, setCopy] = useState(false);

  function copy(val) {
    navigator.clipboard
      .writeText(val)
      .then(() => {
        setCopy(true);
        alert("Value Copied");
      })
      .catch(() => {
        setCopy(false);
      });
  }

  return { copied, copy };
};

export default useClipboard;
