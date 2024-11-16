import React, { useEffect, useState } from "react";
import DashboardCard06 from "../../partials/dashboard/DashboardCard06";
import axios from "axios";
import Customer_New from "../Modals/Customer_New";

function Customers() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (e) => { setSearchTerm(e.target.value); };

  const fetchData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:7222/auth/getCustomers",
        {
          token: sessionStorage.getItem(
            "3c469e9d6c5875d37a43f353d4f88e61fcf812c66eee3457465a40b0da4153e0"
          ),
        }
      );
      setCustomers(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);


  const renderData = [];
  let i = 0;
  while (i < customers.length) {
    renderData.push(
      <tr className="hover:bg-gray-100 dark:hover:bg-gray-800">
        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          {customers[i].account_id}
        </td>
        <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
          <div className="inline-flex items-center gap-x-3">
            <img
              className="object-cover w-10 h-10 rounded-full"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt=""
            />
            <div>
              <h2 className="font-medium text-gray-800 dark:text-white">
                {customers[i].fullName}
              </h2>
            </div>
          </div>
        </td>
        <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
          <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100 dark:bg-gray-800">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            <h2 className="text-sm font-normal text-emerald-500">
              {customers[i].stat == 5522 ? "Active" : "Over Due"}
            </h2>
          </div>
        </td>
        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          {customers[i].email}
        </td>
        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          {customers[i].plan_name}
        </td>
        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          {customers[i].billingDate}
          <Customer_New />
        </td>
        <td className="px-4 py-4 text-sm whitespace-nowrap">
          <div className="flex items-center gap-x-4">
            <button className="text-gray-500 transition-colors duration-200 hover:text-yellow-500 dark:hover:text-yellow-500 dark:text-gray-300 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </button>
          </div>
        </td>
      </tr>
    );
    i++;
  }

  return (
    <main className="grow text-center">
      <div className=" w-full max-w-9xl mx-auto">
        {/* Dashboard actions */}
        <div className="sm:flex sm:justify-between sm:items-center mb-8">
          {/* Left: Title */}
          <div className="container px-4 mx-auto">
            <div className="flex items-center gap-x-3">
              <div className="flex justify-end items-end">
                <h2 className="font-bold mx-10 pt-5 text-lg font-lg text-gray-800 dark:text-white">
                  Customers
                </h2>
              </div>
            </div>
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
              {/* Cards */}
              <div className="grid grid-cols-12 gap-6">
                {/* Line chart (Acme Plus) */}
                <DashboardCard06 title="Subscriber per Server" />
                <DashboardCard06 title="Subscriber per Plan" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-screen overflow-hidden">
          <section className="container px-4 mx-auto">
            <div className="p-2 flex items-center gap-x-3">
              <h2 className="text-lg font-medium text-gray-800 dark:text-white ml-4">
                Customer List
              </h2>
              <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
                {customers.length} user
              </span>
              <div className="flex-grow flex justify-end">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-48 p-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600"
                />
              </div>
            </div>

            <div className="flex flex-col mt-6 p-4">
              <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-y-auto h-[650px] border border-gray-200 dark:border-gray-700 md:rounded-lg">
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-800">
                          <tr>
                            <th
                              scope="col"
                              className="py-3.5 px-4 text-sm font-normal text-center text-gray-500 dark:text-gray-400"
                            >
                              <div className="flex items-center justify-center gap-x-3">
                                <span>Account Number</span>
                              </div>
                            </th>
                            <th
                              scope="col"
                              className="py-3.5 px-4 text-sm font-normal text-center text-gray-500 dark:text-gray-400"
                            >
                              <div className="flex items-center justify-center gap-x-3">
                                <span>Name</span>
                              </div>
                            </th>
                            <th
                              scope="col"
                              className="px-12 py-3.5 text-sm font-normal text-center text-gray-500 dark:text-gray-400"
                            >
                              <button className="flex items-center justify-center gap-x-2">
                                <span>Status</span>
                                <svg
                                  className="h-3"
                                  viewBox="0 0 10 11"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeWidth="0.1"
                                  />
                                  <path
                                    d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeWidth="0.1"
                                  />
                                  <path
                                    d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeWidth="0.3"
                                  />
                                </svg>
                              </button>
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-3.5 text-sm font-normal text-center text-gray-500 dark:text-gray-400"
                            >
                              Email address
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-3.5 text-sm font-normal text-center text-gray-500 dark:text-gray-400"
                            >
                              Current Plan
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-3.5 text-sm font-normal text-center text-gray-500 dark:text-gray-400"
                            >
                              Billing Date
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-3.5 text-sm font-normal text-center text-gray-500 dark:text-gray-400"
                            >
                              <span className="sr-only">Edit</span>
                            </th>
                            <th></th>
                          </tr>
                        </thead>

                        <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                          {loading ? (
                            <tr>
                              <td colSpan="7" className="text-center">
                                Loading...
                              </td>
                            </tr>
                          ) : error ? (
                            <tr>
                              <td
                                colSpan="7"
                                className="text-center text-red-600"
                              >
                                {error}
                              </td>
                            </tr>
                          ) : renderData.length > 0 ? (
                            renderData
                          ) : (
                            <tr>
                              <td colSpan="7" className="text-center">
                                Nothing to Show
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Customers;
