import "../App.css";

type GymAttendanceChartDataProp = {
  attendance: number[];
  currWindow: number;
  setCurrentWindow: React.Dispatch<React.SetStateAction<number>>;
};

const GymAttendanceChart = ({
  attendance,
  currWindow,
  setCurrentWindow,
}: GymAttendanceChartDataProp) => {
  return (
    <div className="main__grid__comp">
      <div className="chart">
        {attendance.slice(currWindow, currWindow + 7).map((data) => {
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
          disabled={attendance.length - currWindow > 6 ? false : true}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default GymAttendanceChart;
