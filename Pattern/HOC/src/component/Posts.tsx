const Posts = ({ posts }) => {
  return (
    <div>
      {posts?.map((post) => (
        <div>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
