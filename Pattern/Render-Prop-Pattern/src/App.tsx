import "./App.css";
import CarTracker from "./messy/CarTracker";
import BikeTracker from "./messy/BikeTracker";
import Track from "./RenderProp/Track";
import ScreenSize from "./RenderProp/ScreenSize";

function App() {
  return (
    <>
      {/* <CarTracker />
      <BikeTracker /> */}

      <Track
        render={(pos) => (
          <h1>
            🚗 Car is At {pos.x}, {pos.y}
          </h1>
        )}
      />

      <Track
        render={(pos) => (
          <h1>
            🚴 Bike is At {pos.x}, {pos.y}
          </h1>
        )}
      />

      <ScreenSize
        render={(size) => (
          <h1>
            height:{size.height} width:{size.width}
          </h1>
        )}
      />
    </>
  );
}

export default App;
