import "./App.css";
import GymAttendanceChart from "./component/GymAttendanceChart";

function App() {
  return (
    <div className="main__grid">
      <GymAttendanceChart
        attendance={[3, 2, 3, 4, 5, 0, 1, 4, 6, 5, 1, 7]}
        col={7}
      />
    </div>
  );
}

export default App;
