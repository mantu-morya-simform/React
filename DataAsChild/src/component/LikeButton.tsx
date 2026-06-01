type LikeButtonProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const LikeButton = ({ count, setCount }: LikeButtonProps) => {
  return (
    <div>
      <p>Like Count :{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>
        <span>❤️</span>
      </button>
    </div>
  );
};

export default LikeButton;
