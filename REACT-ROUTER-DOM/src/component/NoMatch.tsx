import { useNavigate } from "react-router-dom";

const NoMatch = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        404 - Page Not Found
      </h1>

      <p className="text-gray-600 mb-6">
        The page you are looking for doesn’t exist.
      </p>

      <button
        onClick={() => navigate("/")}
        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
      >
        Go to Home
      </button>
    </div>
  );
};

export default NoMatch;
