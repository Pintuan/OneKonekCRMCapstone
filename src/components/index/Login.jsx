import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    if (!username || !password) {
      setError('Please enter both username and password. not connecting to  authenticator');
      return;
    }

    try {
      const response = await axios.post('http://localhost:7222/auth/login', { username, password });
      if (response != null || localStorage.getItem('3c469e9d6c5875d37a43f353d4f88e61fcf812c66eee3457465a40b0da4153e0') == null) {
        let data = response.data.zhas2chasT;
        const path = await axios.post('http://localhost:7222/auth/redirect', { data });
        sessionStorage.setItem('3c469e9d6c5875d37a43f353d4f88e61fcf812c66eee3457465a40b0da4153e0', response.data.token);
        sessionStorage.setItem(sessionStorage.getItem('3c469e9d6c5875d37a43f353d4f88e61fcf812c66eee3457465a40b0da4153e0'), response.data.auth);
        sessionStorage.setItem('a0af9f865bf637e6736817f4ce552e4cdf7b8c36ea75bc254c1d1f0af744b5bf', path.data.path);
        const authorizationToken = sessionStorage.getItem(sessionStorage.getItem('3c469e9d6c5875d37a43f353d4f88e61fcf812c66eee3457465a40b0da4153e0'));
        const resp = await axios.post('http://localhost:7222/auth/fgbjmndo234bnkjcslknsqewrSADqwebnSFasq', { authorizationToken });
        let metadata = resp.data.rawData[0];
        Object.entries(metadata).forEach(([key, value]) => {
          sessionStorage.setItem(key, value);
        });
        sessionStorage.setItem('image',resp.data.image);
        sessionStorage.setItem('username',username);
        window.location.href = path.data.path;
      }
    } catch (err) {
      console.log(err);
      setError(err.response?.data?.error || 'Login failed');
    }
  };
  return (
    <div className="w-full max-w-sm p-6 m-auto mx-auto my-5 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="flex justify-center mx-auto">
        <img className="w-auto" src="../onekonek_white.png" alt="Logo" />
      </div>
      <div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
      <form onSubmit={handleSubmit} className="mt-6">
        <div>
          <label htmlFor="username" className="block text-sm text-gray-800 dark:text-gray-200">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm text-gray-800 dark:text-gray-200">
              Password
            </label>

          </div>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div className="mt-6">
          <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
            Sign In
          </button>
        </div>
        <a href="#" className="text-xs text-gray-600 dark:text-gray-400 hover:underline">
          Forget Password?
        </a>
      </form>

    </div>
  );
};

export default LoginForm;
