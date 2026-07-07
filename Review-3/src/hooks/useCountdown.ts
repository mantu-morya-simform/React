import { useEffect, useRef, useState } from "react";

const useCountdown = (initialCountDown) => {
  const [timeLeft, settimeLeft] = useState(initialCountDown);
  const [isRunning, setisRunning] = useState(false);
  const [isFinished, setisFinished] = useState(false);
  const timeRef = useRef(null);
  function start() {
    setisRunning(true);
    timeRef.current = setInterval(() => {
      settimeLeft((prev) => prev - 1);
    }, 1000);
  }
  function pause() {
    clearInterval(timeRef.current);
    timeRef.current = null;
    setisRunning(false);
  }
  function resume() {
    start();
  }
  function reset() {
    pause();
    settimeLeft(initialCountDown);
    setisRunning(false);
    setisFinished(false);
    timeRef.current = null;
  }

  useEffect(() => {
    if (timeLeft === 0) {
      setisFinished(true);
      pause();
    }
  }, [timeLeft]);

  return { timeLeft, isRunning, isFinished, start, pause, resume, reset };
};

export default useCountdown;
