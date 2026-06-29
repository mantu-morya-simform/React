import { useEffect, useState } from "react";
import type { TrafficLightDataType } from "../App";
import "../App.css";

const TrafficLight = ({
  trafficLightData,
}: {
  trafficLightData: TrafficLightDataType;
}) => {
  const [currlightToShowIndex, setCurrlightToShowIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (trafficLightData[currlightToShowIndex].next === "") {
        setCurrlightToShowIndex(0);
        return;
      }
      const nextColorIndex = trafficLightData.findIndex(
        (data) => data.color === trafficLightData[currlightToShowIndex].next,
      );
      console.log(nextColorIndex);
      setCurrlightToShowIndex(nextColorIndex);
    }, trafficLightData[currlightToShowIndex].duration * 1000);

    () => clearTimeout(timer);
  }, [currlightToShowIndex]);

  return (
    <div>
      <div className="light__poal">
        {trafficLightData.map((_, index) => (
          <div
            key={crypto.randomUUID()}
            className={`light ${index}`}
            style={{
              backgroundColor:
                index === currlightToShowIndex
                  ? trafficLightData[currlightToShowIndex].color
                  : "",
            }}
          ></div>
        ))}
      </div>
      <div className="poal__stick"></div>
    </div>
  );
};

export default TrafficLight;
