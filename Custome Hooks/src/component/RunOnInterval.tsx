import useInterval from "../hooks/useInterval";

const RunOnInterval = () => {
  useInterval(() => console.log("Api Call"), 1000);
  return <div>RunOnInterval</div>;
};

export default RunOnInterval;
