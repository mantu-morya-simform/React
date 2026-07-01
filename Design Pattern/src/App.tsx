import "./App.css";
import Dashboard from "./component/Dashboard";
import MouseTracker from "./component/MouseTracker";
import withAuth from "./component/withAuth";

function App() {
  const ProtectedDashboard = withAuth(Dashboard);
  return (
    <>
      <MouseTracker
        render={(position) => {
          return (
            <div>
              Mouse Position: X:{position.x} Y:{position.y}
            </div>
          );
        }}
      />

      <MouseTracker
        render={(position) => {
          return (
            <div>
              Mouse Position: X:{position.x} Y:{position.y}
            </div>
          );
        }}
      />

      <ProtectedDashboard />
    </>
  );
}

export default App;
