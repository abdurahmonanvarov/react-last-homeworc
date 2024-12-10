import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-5">
      {/* Error Image */}
      <div className="mb-5">
        <img
          src="https://i.imgur.com/qIufhof.png"
          alt="404 Not Found"
          className="w-64"
        />
      </div>

      {/* Error Message */}
      <h1 className="text-4xl font-bold text-gray-800 mb-3">
        Oops! Page Not Found
      </h1>
      <p className="text-lg text-gray-600 mb-5">
        The page you’re looking for doesn’t exist. It might have been removed or
        the URL might be incorrect.
      </p>

      {/* Navigation Buttons */}
      <div className="flex gap-5">
        <Link
          to="/"
          className="px-6 py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition"
        >
          Go to Home
        </Link>
        <Link
          to="/contact"
          className="px-6 py-3 bg-gray-200 text-gray-700 font-medium rounded-md hover:bg-gray-300 transition"
        >
          Contact Support
        </Link>
      </div>
    </div>
  );
}

export default Error;
