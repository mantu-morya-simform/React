import { useState } from "react";
import "../App.css";

type GymAttendanceChartDataProp = {
  attendance: number[];
  col: number;
};

const GymAttendanceChart = ({
  attendance,
  col,
}: GymAttendanceChartDataProp) => {
  const [currWindow, setCurrentWindow] = useState<number>(0);
  return (
    <div className="main__grid__comp">
      <div className="chart">
        {attendance.slice(currWindow, currWindow + col).map((data) => {
          return (
            <div className="child__grid__1" key={crypto.randomUUID()}>
              <div className="grid__main">
                {Array.from({ length: data }).map(() => (
                  <p className="done" key={crypto.randomUUID()}></p>
                ))}
              </div>
              <p className="data">{data}</p>
            </div>
          );
        })}
      </div>

      <div className="action__btn">
        <button
          className="prev__btn"
          onClick={() => setCurrentWindow((prev) => prev - 1)}
          disabled={currWindow < 1 ? true : false}
        >
          Prev
        </button>
        <button
          className="next__btn"
          onClick={() => setCurrentWindow((prev) => prev + 1)}
          disabled={attendance.length - currWindow > 7 ? false : true}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default GymAttendanceChart;
