const Posts = ({ post }) => {
  return (
    <article className="bg-white shadow-md rounded-md p-4 mb-4">
      <h2 className="text-xl font-bold text-blue-600">{post.title}</h2>
      <p className="text-sm text-gray-500">{post.datetime}</p>
      <p className="mt-2 text-gray-700">
        {post.body.length <= 100 ? post.body : `${post.body.slice(0, 100)}...`}
      </p>
    </article>
  );
};

export default Posts;
