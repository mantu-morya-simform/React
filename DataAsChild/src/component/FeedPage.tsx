import { useState } from "react";

import PostCard from "./PostCard";
import LikeButton from "./LikeButton";

const FeedPage = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <PostCard title={"Child Data"}>
        <LikeButton count={count} setCount={setCount} />
      </PostCard>
    </div>
  );
};

export default FeedPage;
