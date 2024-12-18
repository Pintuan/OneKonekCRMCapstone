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
      const response = await axios.post("http://localhost:7222/auth/login", { username, password });
      if (response != null || localStorage.getItem("3c469e9d6c5875d37a43f353d4f88e61fcf812c66eee3457465a40b0da4153e0") == null) {
        let data = response.data.zhas2chasT;
        const path = await axios.post("http://localhost:7222/auth/redirect", { data });
        sessionStorage.setItem("3c469e9d6c5875d37a43f353d4f88e61fcf812c66eee3457465a40b0da4153e0", response.data.token);
        sessionStorage.setItem(sessionStorage.getItem("3c469e9d6c5875d37a43f353d4f88e61fcf812c66eee3457465a40b0da4153e0"), response.data.auth);
        sessionStorage.setItem("a0af9f865bf637e6736817f4ce552e4cdf7b8c36ea75bc254c1d1f0af744b5bf", path.data.path);
        const authorizationToken = sessionStorage.getItem(sessionStorage.getItem("3c469e9d6c5875d37a43f353d4f88e61fcf812c66eee3457465a40b0da4153e0"));
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
        console.log(path.data.path);
      }
    } catch (err) {
      console.log(err);
      setError(err.response?.data?.error || "Login failed");
    }
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[48%_52%] min-h-screen bg-gray-100 dark:bg-gray-900 gap-x-4 overflow-hidden">
      {/* Left Image Section */}
      <div className="hidden lg:flex items-center justify-center lg:pr-2">
        {" "}
        {/* Changed justify-end to justify-center */}
        <img
          src="login_side.png"
          alt="Login Side Image"
          className="h-4/6 max-w-full rounded-lg object-contain"
        />
      </div>

      {/* Right Login Section */}
      <div className="flex items-center justify-start px-6 py-12 lg:pl-10">

        <div className="relative w-full max-w-md p-8 bg-white rounded-lg shadow-lg dark:bg-gray-800">
          {/* Profile Icon */}
          <div className="absolute inset-x-0 top-[-3rem] flex justify-center">
            <div className="w-36 h-36 rounded-full bg-gray-100 dark:bg-gray-700 border-4 border-gray-300 dark:border-gray-500 flex items-center justify-center">
              <img
                className="brightness-90 w-32 h-32 rounded-full"
                src="profile_icon.png"
                alt="User Profile"
              />
            </div>
          </div>

          {/* Error Message */}
          <div className="pt-12">
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="mt-6">
            {/* Username Input */}
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-base font-medium text-gray-800 dark:text-gray-200"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 focus:ring focus:ring-blue-300 focus:outline-none focus:ring-opacity-50"
                required
                aria-label="Username"
              />
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-base font-medium text-gray-800 dark:text-gray-200"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 focus:ring focus:ring-blue-300 focus:outline-none focus:ring-opacity-50"
                required
                aria-label="Password"
              />
            </div>

            {/* Submit Button */}
            <div className="mb-4">
              <button
                type="submit"
                className="w-full px-6 py-3 text-base font-semibold text-white bg-gray-700 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 transition-colors duration-300 transform"
              >
                Sign In
              </button>
            </div>

            {/* Forgot Password Link */}
            <div className="text-center">
              <a
                href="#"
                className="text-sm text-gray-600 dark:text-gray-400 hover:underline"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
