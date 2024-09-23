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
      if (response != null || localStorage.getItem('token') == null) {
        localStorage.setItem('token', response.data.token); // save token to local storage for future use.
        window.location.href = '/Admin';
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
    }
  };
  return (
    <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="flex justify-center mx-auto">
        <img className="w-auto" src="./onekonek.svg" alt="Logo" />
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
            onChange={(e) => { setUsername(e.target.value); console.log(e.target.value) }}
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
