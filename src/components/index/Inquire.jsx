import React, { useState } from "react";
import axios from "axios";

function Inquire() {
  const queryParameters = new URLSearchParams(window.location.search);
  const plan = queryParameters.get("plan");
  const [error, setError] = useState("");
  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [lname, setLname] = useState("");
  const [contactNum, setContactNum] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [mothersMaidenName, setMothersMaidenName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      "http://localhost:7222/auth/hjgsahdghasgdhgdahsgdSAKNB",
      {
        fname,
        mname,
        lname,
        contactNum,
        address,
        email,
        birthday,
        mothersMaidenName,
        plan,
      }
    );
    setError(response.data.message);
  };
  return (
    <div>
      <section className="bg-blen-darker-white dark:bg-gray-900">
        <div className="flex justify-center min-h-screen">
          <div className="flex items-center w-full max-w-5xl p-12 mx-auto lg:px-12 lg:w-3/5">
            {" "}
            {/* Changed max-w-3xl to max-w-5xl and increased padding */}
            <div className="w-full">
              <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                Get your free account now.
              </h1>
              <div>{error}</div>
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-6 mt-2 md:grid-cols-1"
              >
                <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3">
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="John"
                      value={fname}
                      onChange={(e) => setFname(e.target.value)}
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Middle Name
                    </label>
                    <input
                      type="text"
                      placeholder="Fitzgerald"
                      value={mname}
                      onChange={(e) => setMname(e.target.value)}
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Snow"
                      value={lname}
                      onChange={(e) => setLname(e.target.value)}
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Mother's Maiden Name
                  </label>
                  <input
                    type="text"
                    value={mothersMaidenName}
                    onChange={(e) => setMothersMaidenName(e.target.value)}
                    placeholder=""
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Birthday
                  </label>
                  <input
                    type="date"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Phone number
                  </label>
                  <div className="flex items-center mt-2">
                    <p className="py-2.5 px-3 text-gray-500 bg-gray-100 dark:bg-gray-800 dark:border-gray-700 border border-r-0 rtl:rounded-r-lg rtl:rounded-l-none rtl:border-l-0 rtl:border-r rounded-l-lg">
                      +63
                    </p>
                    <input
                      type="text"
                      placeholder="9XX-XXX-XXXX"
                      value={contactNum}
                      onChange={(e) => setContactNum(e.target.value)}
                      className="block w-full rounded-l-none rtl:rounded-l-lg rtl:rounded-r-none placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Address
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="123 sitio uno San Sebastian, Hagonoy, Bulacan"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Email address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="johnsnow@example.com"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <button className="flex items-center justify-center w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform hover:bg-blue-500 rounded-lg bg-gray-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  <span className="text-center">Sign Up</span>

                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />

                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Inquire;
