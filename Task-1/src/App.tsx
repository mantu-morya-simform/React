import { useState } from "react";
import "./App.css";
import GymAttendenceChart from "./component/GymAttendenceChart";

function App() {
  const [currWindow, setCurrentWindow] = useState(0);

  return (
    <>
      <GymAttendenceChart
        attendence={[3, 2, 3, 4, 5, 0, 1, 4, 6, 5, 1]}
        currWindow={currWindow}
        setCurrentWindow={setCurrentWindow}
      />
    </>
  );
}

export default App;
