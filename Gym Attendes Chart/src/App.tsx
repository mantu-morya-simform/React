import { useState } from "react";
import "./App.css";
import GymAttendenceChart from "./component/GymAttendenceChart";

function App() {
  const [currWindow, setCurrentWindow] = useState(0);

  return (
    <div className="main__grid">
      <GymAttendenceChart
        attendence={[3, 2, 3, 4, 5, 0, 1, 4, 6, 5, 1]}
        currWindow={currWindow}
        setCurrentWindow={setCurrentWindow}
      />
    </div>
  );
}

export default App;
