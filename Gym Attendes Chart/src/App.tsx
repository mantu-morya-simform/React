import { useState } from "react";
import "./App.css";
import GymAttendanceChart from "./component/GymAttendanceChart";

function App() {
  const [currWindow, setCurrentWindow] = useState<number>(0);
  const attend: number[] = [3, 2, 3, 4, 5, 0, 1, 4, 6, 5, 1];
  return (
    <div className="main__grid">
      <GymAttendanceChart
        attendance={attend}
        currWindow={currWindow}
        setCurrentWindow={setCurrentWindow}
      />
    </div>
  );
}

export default App;
