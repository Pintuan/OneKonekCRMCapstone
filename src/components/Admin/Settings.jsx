import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {
<<<<<<< Updated upstream

    const [error, setError] = useState('');
    const [fName, setfName] = useState('');
    const [mName, setmName] = useState('');
    const [lName, setlName] = useState('');
    const [contactNum, setcontactNum] = useState('');
    const [email, setemail] = useState('');
    const [profilePic, setprofilePic] = useState('');
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [confPass, setconfPass] = useState('');
    const [passConfirm, setpassConfirm] = useState('');
    const [type, setType] = useState('password');
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (passConfirm) {
            setError(true);
        }
    }


    const getInfo = async () => {

    }
    const toggleInput = () => {
        setType(type === 'password' ? 'text' : 'password')
    }

    return (

        <main className="grow">
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

                {/* Dashboard actions */}
                <div className="sm:flex sm:justify-between sm:items-center mb-8">

                    {/* Left: Title */}
                    <div className="mb-4 sm:mb-0">
                        <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">Personal Information</h1>
                    </div>

  return (
    <main className="min-w-full">
      <div className="sm:flex sm:justify-between sm:items-center">
        <div className="flex justify-end items-end">
          <h1 className="font-bold mx-10 pt-5 text-2xl text-gray-800 dark:text-white">
            Account Settings
          </h1>
        </div>
      </div>
      <div className="w-full px-2 sm:px-6 lg:px-8 py-4">
        <section className="w-full p-6 bg-white dark:bg-gray-800 rounded-md shadow-md">
          <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white mb-6">
            Personal Information
          </h2>
          <form onSubmit={handlePersonalInfoSubmit}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mb-6">
              <div>
                <label
                  className="text-sm font-medium text-gray-700 dark:text-gray-200"
                  htmlFor="profilePic"
                >
                  Profile Photo
                </label>
                <div className="mt-2">
                  <img
                    className="w-32 h-32 rounded-full object-cover"
                    src={`data:image;base64,${sessionStorage.getItem("image")}`}
                    alt="Profile"
                  />
                </div>
<<<<<<< Updated upstream

                {/* Cards */}
                <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Account settings</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
                            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="profilePic">Profile Photo</label>
                                    <img className="w-auto" src={`data:image;base64,${sessionStorage.getItem('image')}`} alt="../onekonek_white.png" />
                                </div>
                                <div>

                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="newProfile">Upload file</label>
                                    <input onChange={(e) => setprofilePic(e.target.value)} id="newProfile" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" type="file" />

                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="FName">First Name</label>
                                    <input onChange={(e) => setfName(e.target.value)} value={sessionStorage.getItem('firstName')} id="FName" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>
                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="MName">Middle Name</label>
                                    <input onChange={(e) => setmName(e.target.value)} value={sessionStorage.getItem('middleName')} id="MName" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>
                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="LName">Last Name</label>
                                    <input onChange={(e) => setlName(e.target.value)} value={sessionStorage.getItem('lastName')} id="LName" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="contactNum">Contact Number</label>
                                <div className="flex items-center mt-2">
                                    <p className="py-2.5 px-3 text-gray-500 bg-gray-100 dark:bg-gray-800 dark:border-gray-700 border border-r-0 rtl:rounded-r-lg rtl:rounded-l-none rtl:border-l-0 rtl:border-r rounded-l-lg">+63</p>
                                    <input onChange={(e) => setcontactNum(e.target.value)} value={sessionStorage.getItem('contactNum')} id="contactNum" type="text" placeholder="9XXXXXXXX" className="block w-full rounded-l-none rtl:rounded-l-lg rtl:rounded-r-none placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                                </div>
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Email Address</label>
                                <input onChange={(e) => setemail(e.target.value)} value={sessionStorage.getItem('email')} id="emailAddress" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Username</label>
                                <input onChange={(e) => setusername(e.target.value)} value={sessionStorage.getItem('username')} id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="password">Password</label>
                                    <div className="relative flex items-center mt-2">
                                        <button className="absolute right-0 focus:outline-none rtl:left-0 rtl:right-auto" onClick={toggleInput}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mx-4 text-gray-400 transition-colors duration-300 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400">
                                                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                                <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                        <input onChange={(e) => setpassword(e.target.value)} id="password" type={type} placeholder="" className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-5 pr-11 rtl:pr-5 rtl:pl-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="confirmPass">Password Confirmation</label>
                                    <div className="relative flex items-center mt-2">
                                        <button className="absolute right-0 focus:outline-none rtl:left-0 rtl:right-auto" onClick={toggleInput}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mx-4 text-gray-400 transition-colors duration-300 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400">
                                                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                                <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                        <input onChange={(e) => setconfPass(e.target.value)} id="confirmPass" type={type} placeholder="" className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-5 pr-11 rtl:pr-5 rtl:pl-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="confirmPass">Confirn using your Current Password</label>
                            <div className="relative flex items-center mt-2">
                                <button className="absolute right-0 focus:outline-none rtl:left-0 rtl:right-auto" onClick={toggleInput}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mx-4 text-gray-400 transition-colors duration-300 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400">
                                        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                        <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                <input onChange={(e) => setpassConfirm(e.target.value)} id="passwordConfirm" type={type} placeholder="" className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-5 pr-11 rtl:pr-5 rtl:pl-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                        </div>
                        <div className="flex justify-end mt-6">
                            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                        </div>
                    </form>
                </section>

=======
              </div>
              <div className="flex flex-col justify-end">
                <label
                  htmlFor="newProfile"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Upload New Profile Photo
                </label>
                <input
                  onChange={(e) => setprofilePic(e.target.value)}
                  id="newProfile"
                  type="file"
                  className="mt-2 block w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600 cursor-pointer"
                />
              </div>
>>>>>>> Stashed changes
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mb-6">
              <div>
                <label
                  htmlFor="FName"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
                >
                  First Name
                </label>
                <input
                  onChange={(e) => setfName(e.target.value)}
                  value={fName}
                  id="FName"
                  type="text"
                  className="mt-1 block w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg shadow focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:outline-none transition duration-150 ease-in-out"
                />
              </div>
              <div>
                <label
                  htmlFor="MName"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
                >
                  Middle Name
                </label>
                <input
                  onChange={(e) => setmName(e.target.value)}
                  value={mName}
                  id="MName"
                  type="text"
                  className="mt-1 block w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg shadow focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:outline-none transition duration-150 ease-in-out"
                />
              </div>
              <div>
                <label
                  htmlFor="LName"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
                >
                  Last Name
                </label>
                <input
                  onChange={(e) => setlName(e.target.value)}
                  value={lName}
                  id="LName"
                  type="text"
                  className="mt-1 block w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg shadow focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:outline-none transition duration-150 ease-in-out"
                />
              </div>
            </div>

            {/* Address Section */}
            <div className="mb-6">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
              >
                Complete Address
              </label>
              <input
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                id="address"
                type="text"
                className="mt-1 block w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg shadow focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:outline-none transition duration-150 ease-in-out"
              />
            </div>

            {/* Contact Number Section */}
            <div className="mb-6">
              <label
                htmlFor="contactNum"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
              >
                Contact Number
              </label>
              <div className="flex mt-1">
                <span className="px-3 py-2 text-gray-500 bg-gray-100 border border-gray-300 rounded-l-lg dark:bg-gray-800 dark:border-gray-600">
                  +63
                </span>
                <input
                  onChange={(e) => setcontactNum(e.target.value)}
                  value={contactNum}
                  id="contactNum"
                  type="text"
                  placeholder="9XXXXXXXX"
                  className="block w-full rounded-r-lg px-4 py-3 text-gray-700 bg-white border border-gray-300 shadow focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:outline-none transition duration-150 ease-in-out"
                />
              </div>
            </div>

            {/* Email Address Section */}
            <div className="mb-6">
              <label
                htmlFor="emailAddress"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
              >
                Email Address
              </label>
              <input
                onChange={(e) => setemail(e.target.value)}
                value={email}
                id="emailAddress"
                type="email"
                className="mt-1 block w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg shadow focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:outline-none transition duration-150 ease-in-out"
              />
            </div>

            {/* Password Confirmation Section */}
            <div className="mb-6">
              <label
                htmlFor="confirmPass"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
              >
                Confirm Using Your Current Password
              </label>
              <div className="relative mt-1">
                <input
                  onChange={(e) => setpassConfirm(e.target.value)}
                  id="passwordPersonalInfoConfirm"
                  type={type}
                  placeholder="********"
                  className="block w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg shadow focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:outline-none transition duration-150 ease-in-out"
                />
                <button
                  type="button"
                  onClick={toggleInput}
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                    <path
                      fillRule="evenodd"
                      d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150 ease-in-out"
              >
                Save
              </button>
            </div>
          </form>
        </section>

        <section className="mt-5 w-full p-6 bg-white dark:bg-gray-800 rounded-md shadow-md">
          <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white mb-6">
            Login
          </h2>

          <form onSubmit={handleLoginInfoSubmit}>
  <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-1">
    {/* Username Field */}
    <div>
      <label
        className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
        htmlFor="username"
      >
        Username
      </label>
      <input
        onChange={(e) => setusername(e.target.value)}
        value={username}
        id="username"
        type="text"
        className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
      />
    </div>

    <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2">
      {/* Password Field */}
      <div>
        <label
          className="block text-sm font-medium text-gray-700 dark:text-gray-200 "
          htmlFor="password"
        >
          Password
        </label>
        <div className="relative flex items-center mt-2">
          <button
            className="absolute inset-y-0 right-0 flex items-center pr-3"
            onClick={toggleInput}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400"
            >
              <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
              <path
                fillRule="evenodd"
                d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <input
            onChange={(e) => setpassword(e.target.value)}
            id="password"
            type={type}
            placeholder=""
            className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-5 pr-11 rtl:pr-5 rtl:pl-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
      </div>

      {/* Password Confirmation Field */}
      <div>
        <label
          className="block text-sm font-medium text-gray-700 dark:text-gray-200 "
          htmlFor="confirmPass"
        >
          Password Confirmation
        </label>
        <div className="relative flex items-center mt-2">
          <button
            className="absolute inset-y-0 right-0 flex items-center pr-3"
            onClick={toggleInput}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400"
            >
              <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
              <path
                fillRule="evenodd"
                d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <input
            onChange={(e) => setconfPass(e.target.value)}
            id="confirmPass"
            type={type}
            placeholder=""
            className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-5 pr-11 rtl:pr-5 rtl:pl-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
      </div>
    </div>

    {/* Confirm using your Current Password Field */}
    <div>
      <label
        className="mt-3 block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
        htmlFor="passwordLoginInfoConfirm">
        Confirm using your Current Password
      </label>
      <div className="relative flex items-center mt-2">
        <button
          className="absolute inset-y-0 right-0 flex items-center pr-3"
          onClick={toggleInput}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400"
          >
            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
            <path
              fillRule="evenodd"
              d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <input
          onChange={(e) => setpassConfirm(e.target.value)}
          id="passwordLoginInfoConfirm"
          type={type}
          placeholder=""
          className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-5 pr-11 rtl:pr-5 rtl:pl-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>
    </div>
  </div>

  <div className="flex justify-end mt-6">
    <button
      type="submit"
      className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150 ease-in-out"
    >
      Save
    </button>
  </div>
</form>

        </section>
      </div>
    </main>
  );
};

export default Home;