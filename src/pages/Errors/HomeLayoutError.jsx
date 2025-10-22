import React from "react";
import { useRouteError, Link } from "react-router";

const HomeLayoutError = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
      <h1 className="text-6xl font-bold text-red-600 mb-4">Oops!</h1>
      <p className="text-xl text-gray-800 font-semibold mb-2">
        Something went wrong
      </p>
      <p className="text-gray-500 mb-6">
        {error?.statusText || error?.message || "Unknown error occurred."}
      </p>

      {error?.status === 404 ? (
        <>
          <div className="text-gray-600 mb-8">
            The page you are looking for could not be found.
          </div>
          <Link
            to="/"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md"
          >
            Go Back Home
          </Link>
        </>
      ) : null}
    </div>
  );
};

export default HomeLayoutError;
