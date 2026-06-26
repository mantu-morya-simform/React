import { useEffect } from "react";

const useClickOutSide = (ref, callback) => {
  useEffect(() => {
    function clickDetect(e) {
      if (ref.current && ref.current.contains(e.target)) {
        callback();
      } else {
        alert("click OutSide");
      }
    }

    document.addEventListener("click", clickDetect);

    return () => document.removeEventListener("click", clickDetect);
  }, [ref, callback]);
};

export default useClickOutSide;
