type LikeButtonProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const LikeButton = ({ children }: LikeButtonProps) => {
  return (
    <div>
      <p>Like Count :{children.count}</p>
      <button onClick={() => children.setCount((prev) => prev + 1)}>
        <span>❤️</span>
      </button>
    </div>
  );
};

export default LikeButton;
