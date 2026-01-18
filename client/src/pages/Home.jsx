import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">GyanMarg</h1>
      <p className="text-gray-600 mb-6">
        Gamified Learning Platform for Class 6–12
      </p>

      <div className="flex gap-4">
        <Link
          to="/login"
          className="px-6 py-2 bg-blue-600 text-white rounded"
        >
          Login
        </Link>

        <Link
          to="/signup"
          className="px-6 py-2 bg-green-600 text-white rounded"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Home;
