import "../App.css";

const GymAttendenceChart = ({ attendence, currWindow, setCurrentWindow }) => {
  console.log(currWindow);

  return (
    <div className="main__grid__comp">
      {/* <div className="main__grid">
        <div className="child__grid__1">
          <p className="done" style={{ height: `${attendence[0] * 10}%` }}></p>
          {attendence.slice(currWindow, currWindow + 7)[0]}
        </div>
        <div className="child__grid__1">
          {" "}
          <p className="done" style={{ height: `${attendence[1] * 10}%` }}></p>
          {attendence.slice(currWindow, currWindow + 7)[1]}
        </div>
        <div className="child__grid__1">
          {" "}
          <p className="done" style={{ height: `${attendence[2] * 10}%` }}></p>
          {attendence.slice(currWindow, currWindow + 7)[2]}
        </div>
        <div className="child__grid__1">
          {" "}
          <p className="done" style={{ height: `${attendence[3] * 10}%` }}></p>
          {attendence.slice(currWindow, currWindow + 7)[3]}
        </div>
        <div className="child__grid__1">
          {" "}
          <p className="done" style={{ height: `${attendence[4] * 10}%` }}></p>
          {attendence.slice(currWindow, currWindow + 7)[4]}
        </div>
        <div className="child__grid__1">
          {" "}
          <p className="done" style={{ height: `${attendence[5] * 10}%` }}></p>
          {attendence.slice(currWindow, currWindow + 7)[5]}
        </div>
        <div className="child__grid__1">
          {" "}
          <p className="done" style={{ height: `${attendence[6] * 10}%` }}></p>
          {attendence.slice(currWindow, currWindow + 7)[6]}
        </div>
      </div> */}

      {attendence.slice(currWindow, currWindow + 7).map((data) => {
        return (
          <div className="child__grid__1">
            <p className="done" style={{ height: `${data * 10}%` }}></p>
            {data}
          </div>
        );
      })}

      <button onClick={() => setCurrentWindow((prev) => prev - 1)}>Prev</button>
      <button onClick={() => setCurrentWindow((prev) => prev + 1)}>Next</button>
    </div>
  );
};

export default GymAttendenceChart;
