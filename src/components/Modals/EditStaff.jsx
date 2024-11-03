import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StaffModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [confPassword, setConfPassword] = useState('');
  const [fname, setFname] = useState('');
  const [mname, setMname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [contactNum, setContactNum] = useState('');
  const [birthday, setBirthday] = useState('');
  const [pos, setPos] = useState('');

  // Function to open the modal
  const openModal = () => {
    setIsOpen(true)
  };

  // Function to close the modal
  const closeModal = () => setIsOpen(false);

  //submits the form and upload the new 
  const submitNewStaff = async (event) => {
    event.preventDefault();

  }
  const fetchData = async () => {
    try {
      const response = await axios.post("http://localhost:7222/auth/getPositions", {
        token: sessionStorage.getItem(
          "3c469e9d6c5875d37a43f353d4f88e61fcf812c66eee3457465a40b0da4153e0"
        ),
      });
      setPosition(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  let i = 0;
  const renderData = [];
  while (i < position.length) {
    renderData.push(
      <option name="" key={i} value={position[i].restrictionId}>{position[i].position}</option>
    );
    i++;
  }
  return (
    <div className="relative flex justify-center">
      {/* Button to open the modal */}
      <button
        onClick={openModal}
        className="px-6 py-2 mx-auto tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
      >
        Add New Staff
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>

            <div className="relative inline-block p-4 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl sm:max-w-sm rounded-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:p-6">
              <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Add new Staff</h2>

                <form>
                  <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">

                    <div className="grid grid-cols-3 gap-6 mt-4 sm:grid-cols-1">
                      <div>
                        <label className="text-gray-700 dark:text-gray-200" for="emailAddress">First Name</label>
                        <input id="fname" type="text"
                          value={fname}
                          onChange={(e) => setFname(e.target.value)}
                          placeholder="" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                      </div>
                      <div>
                        <label className="text-gray-700 dark:text-gray-200" for="emailAddress">Middle Name</label>
                        <input id="mname" type="text"
                          value={mname}
                          onChange={(e) => setMname(e.target.value)}
                          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                      </div>
                      <div>
                        <label className="text-gray-700 dark:text-gray-200" for="emailAddress">Last Name</label>
                        <input id="lname" type="text"
                          value={lname}
                          onChange={(e) => setLname(e.target.value)}
                          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                      </div>
                    </div>
                    <div>
                      <label className="text-gray-700 dark:text-gray-200" for="emailAddress">Email Address</label>
                      <input id="email" type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>
                    <div className="flex items-center mt-2">
                      <label className="text-gray-700 dark:text-gray-200" for="emailAddress">Contact Number</label>
                      <p className="py-2.5 px-3 text-gray-500 bg-gray-100 dark:bg-gray-800 dark:border-gray-700 border border-r-0 rtl:rounded-r-lg rtl:rounded-l-none rtl:border-l-0 rtl:border-r rounded-l-lg">
                        +63
                      </p>
                      <input
                        type="text"
                        value={contactNum}
                        onChange={(e) => setContactNum(e.target.value)}

                        placeholder="9XX-XXX-XXXX"
                        className="block w-full rounded-l-none rtl:rounded-l-lg rtl:rounded-r-none placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                      />
                    </div>
                    <select name=""
                      value={pos}
                      onChange={(e) => setPos(e.target.value)}
                      id="">{loading ? (
                        <option colSpan="7" className="text-center">
                          Loading...
                        </option>
                      ) : error ? (
                        <option colSpan="7" className="text-center text-red-600">
                          {error}
                        </option>
                      ) : renderData.length > 0 ? (
                        renderData
                      ) : (
                        <option colSpan="7" className="text-center">
                          Nothing to Show
                        </option>
                      )}
                    </select>
                    <div>
                      <label className="text-gray-700 dark:text-gray-200" for="emailAddress">Password Confirmation</label>
                      <input id="confPass"
                        value={confPassword}
                        onChange={(e) => setConfPassword(e.target.value)}
                        type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>
                  </div>
                </form>
              </section>
              <div className="mt-4 sm:flex sm:items-center sm:justify-between sm:mt-6 sm:-mx-2">
                <button onClick={closeModal} className="px-4 sm:mx-2 w-full py-2.5 text-sm font-medium dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
                  Cancel
                </button>

                <button className="px-4 sm:mx-2 w-full py-2.5 mt-3 sm:mt-0 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffModal;
