import { useState } from "react";

function useClipboard() {
  const [copied, setCopied] = useState(false);

  function copy(value: string) {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        alert("Copy");
        setCopied(true);
      })
      .catch(() => {
        setCopied(false);
      });
  }

  return { copied, copy };
}

export default useClipboard;
