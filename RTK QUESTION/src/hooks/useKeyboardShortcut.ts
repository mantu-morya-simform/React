import { useEffect } from "react";

const useKeyboardShortcut = ({
  key,
  ctrl,
  shift,
  onKey,
}: {
  key: string;
  ctrl: boolean;
  shift: boolean;
  onKey: () => void;
}) => {
  useEffect(() => {
    function checkKeyDown(e: KeyboardEvent) {
      if (e.key === key && e.ctrlKey === ctrl && e.shiftKey === shift) {
        onKey();
      }
    }

    document.addEventListener("keydown", checkKeyDown);

    return () => document.removeEventListener("keydown", checkKeyDown);
  }, []);
};

export default useKeyboardShortcut;
