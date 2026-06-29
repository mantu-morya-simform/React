import "./App.css";
import TrafficLight from "./component/TrafficLight";

export type TrafficLightDataType = {
  color: string;
  duration: number;
  next: string;
}[];

function App() {
  const trafficLightData: TrafficLightDataType = [
    { color: "red", duration: 2, next: "yellow" },
    { color: "yellow", duration: 2, next: "green" },
    { color: "green", duration: 2, next: "blue" },
    { color: "blue", duration: 2, next: "" },
  ];

  return (
    <div className="app">
      <TrafficLight trafficLightData={trafficLightData} />
    </div>
  );
}

export default App;
