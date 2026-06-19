const Analysis = ({ posts }) => {
  return (
    <div>
      {posts?.map((post) => (
        <div>
          <p>{post.id}</p>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Analysis;
