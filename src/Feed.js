import Posts from "./Posts";

const Feed = ({ posts }) => {
  return (
    <section className="max-w-2xl mx-auto mt-6">
      {posts.map((post) => (
        <Posts key={post.id} post={post} />
      ))}
    </section>
  );
};

export default Feed;
