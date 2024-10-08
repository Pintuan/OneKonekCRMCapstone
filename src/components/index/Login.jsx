import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (!username || !password) {
      setError(
        "Please enter both username and password. not connecting to  authenticator"
      );
      return;
    }

    try {
      const response = await axios.post("http://localhost:7222/auth/login", {
        username,
        password,
      });
      if (
        response != null ||
        localStorage.getItem(
          "3c469e9d6c5875d37a43f353d4f88e61fcf812c66eee3457465a40b0da4153e0"
        ) == null
      ) {
        let data = response.data.zhas2chasT;
        const path = await axios.post("http://localhost:7222/auth/redirect", {
          data,
        });
        sessionStorage.setItem(
          "3c469e9d6c5875d37a43f353d4f88e61fcf812c66eee3457465a40b0da4153e0",
          response.data.token
        );
        sessionStorage.setItem(
          sessionStorage.getItem(
            "3c469e9d6c5875d37a43f353d4f88e61fcf812c66eee3457465a40b0da4153e0"
          ),
          response.data.auth
        );
        sessionStorage.setItem(
          "a0af9f865bf637e6736817f4ce552e4cdf7b8c36ea75bc254c1d1f0af744b5bf",
          path.data.path
        );
        const authorizationToken = sessionStorage.getItem(
          sessionStorage.getItem(
            "3c469e9d6c5875d37a43f353d4f88e61fcf812c66eee3457465a40b0da4153e0"
          )
        );
        const resp = await axios.post(
          "http://localhost:7222/auth/fgbjmndo234bnkjcslknsqewrSADqwebnSFasq",
          { authorizationToken }
        );
        let metadata = resp.data.rawData[0];
        Object.entries(metadata).forEach(([key, value]) => {
          sessionStorage.setItem(key, value);
        });
        sessionStorage.setItem("image", resp.data.image);
        sessionStorage.setItem("username", username);
        window.location.href = path.data.path;
      }
    } catch (err) {
      console.log(err);
      setError(err.response?.data?.error || "Login failed");
    }
  };
  return (
    <div className="flex justify-center items-center bg-gray-100 dark:bg-gray-900 mt-4">
     <div className="relative w-full max-w-sm p-8 bg-gray-200 shadow-[0_20px_30px_-5px_rgba(0,0,0,0.7)] rounded-lg dark:bg-gray-800 mt-16 ml-8">

        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img
            className="w-32 h-32 rounded-full border-2 border-gray-500 shadow-lg"
            src="profile.png"
          />
        </div>
        <div>{error && <p className="text-red-500 mb-4">{error}</p>}</div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-2">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="block w-full px-4 py-3 mt-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-300 focus:outline-none transition-colors duration-300"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-3 mt-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-300 focus:outline-none transition-colors duration-300"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="mt-4 w-full max-w-xs px-4 py-3 text-sm font-medium tracking-wide text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 transition-colors duration-300 transform hover:scale-105">
              Sign In
            </button>
          </div>
          <div className="text-left">
            <a
              href="#"
              className="text-xs text-gray-600 dark:text-gray-400 hover:underline">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
