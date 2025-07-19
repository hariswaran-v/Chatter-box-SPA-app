import { useState } from "react";
import Posts from "./Posts";

const PostPage = () => {
  const [showPosts, setShowPosts] = useState(false);

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h4 className="text-xl font-bold text-slate-800 mb-4">
        Welcome to Post Page!
      </h4>

      <button
        onClick={() => setShowPosts(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Show Posts
      </button>

      {showPosts && (
        <div className="mt-6">
          <Posts />
        </div>
      )}
    </div>
  );
};

export default PostPage;
