import useWindowSize from "../hooks/useWindowSize";

const CurrentWindowSIze = () => {
  const { width, height } = useWindowSize();
  return (
    <div>
      <p>Curr Window width: {width}</p>
      <p>Curr Window height: {height}</p>
    </div>
  );
};

export default CurrentWindowSIze;
