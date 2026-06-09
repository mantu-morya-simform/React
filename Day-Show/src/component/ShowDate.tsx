// import dayjs from "dayjs";
// import dayOfYear from "dayjs/plugin/dayOfYear";

// import "../App.css";
// const ShowDate = () => {
//   const allday: number = 365;
//   dayjs.extend(dayOfYear);
//   const currDay = dayjs().dayOfYear();
//   console.log(currDay);
//   return (
//     <div className="main__calender">
//       {Array.from({ length: allday }).map((index: number) => (
//         <p className={`day ${index + 1 < currDay ? "completed" : ""}`}></p>
//       ))}
//     </div>
//   );
// };

// export default ShowDate;

import dayjs from "dayjs";
import dayOfYear from "dayjs/plugin/dayOfYear";

import "../App.css";
const ShowDate = () => {
  dayjs.extend(dayOfYear); //extend to get the current day from year
  const currDay = dayjs().dayOfYear(); // give the current day of curr year
  const currYear = dayjs().year(); // give the curr year
  const isLeapYear: boolean =
    (currYear % 4 === 0 && currYear % 100 !== 0) || currYear % 400 === 0; // function to check leap year
  const allday = isLeapYear ? 367 : 365; // according to year that is leap or not assign all days on it

  return (
    <div>
      <div className="main__calender">
        {Array.from({ length: allday }).map((_, index: number) => (
          <p
            className={`day  ${index + 1 === currDay ? "currDay" : ""} ${index + 1 < currDay ? "completed" : ""}`}
            key={crypto.randomUUID()}
            title={`Day-${index + 1}`}
          ></p>
        ))}
      </div>
      <div className="date__info">
        <p className="day__curr">
          Current Day: {currDay} in Year {currYear}
        </p>
        <p className="day__passed">Day Passed: {currDay - 1}</p>
        <p className="day__remaining">Day Remaining: {allday - currDay}</p>
      </div>
    </div>
  );
};

export default ShowDate;
