import { useState } from "react";

const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(false);
  function toggleAvailable() {
    setIsOnline((prev) => !prev);
  }
  return { isOnline, toggleAvailable };
};

export default useOnlineStatus;
