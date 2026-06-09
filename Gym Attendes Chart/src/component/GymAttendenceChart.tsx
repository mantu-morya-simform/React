import "../App.css";

const GymAttendenceChart = ({ attendence, currWindow, setCurrentWindow }) => {
  console.log(currWindow);

  return (
    <div className="main__grid__comp">
      <div className="chart">
        {attendence.slice(currWindow, currWindow + 7).map((data) => {
          return (
            <div className="child__grid__1">
              <p className="done" style={{ height: `${data * 10}%` }}></p>
              {data}
            </div>
          );
        })}
      </div>

      <div className="action__btn">
        <button onClick={() => setCurrentWindow((prev) => prev - 1)}>
          Prev
        </button>
        <button onClick={() => setCurrentWindow((prev) => prev + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default GymAttendenceChart;
