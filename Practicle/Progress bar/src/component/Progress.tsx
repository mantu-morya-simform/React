import { useProgress } from "../hook/useProgress";

const Progress = () => {
  const { progress, setProgress } = useProgress(2000);
  return (
    <div className="main__search">
      <div className="progress__parent">
        <p className="progress__comp" style={{ width: `${progress}%` }}>
          {progress}%
        </p>
      </div>
      <button
        className="search__btn"
        onClick={() => {
          setProgress(0);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Progress;
