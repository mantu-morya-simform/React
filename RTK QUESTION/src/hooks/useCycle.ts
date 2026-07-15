import { useState } from "react";

const useCycle = <T>(...prop: T[]) => {
  const [index, setIndex] = useState(0);
  function cycle() {
    const newIndex = (index + 1) % prop.length;
    setIndex(newIndex);
  }

  return [prop[index], cycle] as const;
};

export default useCycle;
