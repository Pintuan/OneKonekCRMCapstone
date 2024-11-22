import React, { useState } from "react";
import Assign from "../Modals/Assign";

function Customers() {
  const queryParameters = new URLSearchParams(window.location.search);
  const plan = queryParameters.get("plan");
  const [error, setError] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [contactNum, setContactNum] = useState("");
  const [time, setTime] = useState({ hour: "", minute: "", period: "AM" });
  const [tech, setTech] = useState("");
  const [server, setServer] = useState("");
  const [maps, setMaps] = useState("");
  const [plans, setPlans] = useState("");
  const [pppoe, setPPPEO] = useState("");
  const [nap, setNap] = useState("");
  const [napPort, setNapPort] = useState("");
  const [napReading, setNapReading] = useState("");
  const [insideReading, setInsideReading] = useState("");
  const [comment, setComment] = useState("");
  const [tl, setTL] = useState("");
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTime((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(`Selected time: ${time.hour}:${time.minute} ${time.period}`);
    event.preventDefault();
    const response = await axios.post(
      window.host + "/auth/hjgsahdghasgdhgdahsgdSAKNB",
      {
        idNumber,
        contactNum,
        time,
        tech,
        server,
        maps,
        plans,
        pppoe,
        nap,
        napPort,
        napReading,
        insideReading,
        comment,
        tl,
      }
    );
    setError(response.data.message);
  };
  return (
    <div className="flex h-screen">
      <section className="container px-4 mx-auto">
        <div className="flex items-center gap-x-3">
          <div className="flex justify-end items-end">
            <h2 className="font-bold mx-10 pt-5 text-lg font-lg text-gray-800 dark:text-white">
              Tickets
            </h2>
            <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
              100 users
            </span>
          </div>
        </div>

        <div className="flex flex-col mt-6 place-items-center w-full">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 w-full">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8 text-center">
              <div className="overflow-x-auto border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full w-full">
                  <thead className="text-center bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Name
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Email address
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="mx-6 bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    <tr>
                      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div className="inline-flex items-center gap-x-3">
                          <div className="flex items-center gap-x-2">
                            <img
                              className="object-cover w-10 h-10 rounded-full"
                              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                              alt=""
                            />
                            <div>
                              <h2 className="font-medium text-gray-800 dark:text-white ">
                                Arthur Melo
                              </h2>
                              <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                                @authurmelo
                              </p>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                          <h2 className="text-sm font-normal text-emerald-500">
                            Active
                          </h2>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        authurmelo@example.com
                      </td>

                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex justify-center items-center">
                          <Assign />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-6">
          <a
            href="#"
            className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5 rtl:-scale-x-100"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>

            <span>previous</span>
          </a>

          <div className="items-center hidden lg:flex gap-x-3">
            <a
              href="#"
              className="px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60"
            >
              1
            </a>
            <a
              href="#"
              className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
            >
              2
            </a>
            <a
              href="#"
              className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
            >
              3
            </a>
            <a
              href="#"
              className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
            >
              ...
            </a>
            <a
              href="#"
              className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
            >
              12
            </a>
            <a
              href="#"
              className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
            >
              13
            </a>
            <a
              href="#"
              className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
            >
              14
            </a>
          </div>

          <a
            href="#"
            className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            <span>Next</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5 rtl:-scale-x-100"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
export default Customers;
