import { useEffect, useRef, useState } from "react";

export const useProgress = (exitTime: number) => {
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(0);

  useEffect(() => {
    if (progress === 100) return;
    timerRef.current = setTimeout(() => {
      setProgress((prev) => prev + 1);
    }, exitTime / 100);

    return () => clearTimeout(timerRef.current);
  }, [progress, exitTime]);

  return { progress, setProgress };
};
