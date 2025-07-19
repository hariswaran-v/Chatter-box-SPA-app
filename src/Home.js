import { useOutletContext } from "react-router-dom";
import Feed from "./Feed";

const Home = () => {
  const { posts } = useOutletContext();

  return (
    <main className="min-h-screen bg-gray-100 p-4 rounded">
      {posts.length ? (
        <Feed posts={posts} />
      ) : (
        <p className="text-center mt-20 text-gray-500 text-lg font-semibold">
          No posts to display
        </p>
      )}
    </main>
  );
};

export default Home;
