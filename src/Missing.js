import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const status = error?.status || 404;
  const statusText = error?.statusText || "Page Not Found";
  const message =
    error?.data || "Sorry, we couldn't find the page you're looking for.";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 px-4 ">
      <div className="bg-blue-500 text-white p-10 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-4xl font-bold mb-4">
          #{status} - {statusText}
        </h1>
        <p className="mb-6">{message}</p>
        <Link
          to="/"
          className="bg-white text-red-500 font-semibold px-5 py-2 rounded hover:bg-gray-100 transition"
        >
          ⬅️ Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
