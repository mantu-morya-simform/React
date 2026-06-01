import { useState } from "react";
import useThrottle from "../hooks/useThrottle";

function ClickBtnThrottle() {
  const [data, setData] = useState("");

  const throttledClick = useThrottle(() => {
    setData("Fetched Data");
    console.log("API Called");
  }, 2000);

  return (
    <div>
      <button onClick={throttledClick}>Fetch Data</button>

      <h1>{data}</h1>
    </div>
  );
}

export default ClickBtnThrottle;
