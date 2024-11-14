// src/Modal.js
import axios from "axios";
import React, { useState } from "react";

const AcceptPayment = ({ id, name }) => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [bill, setBill] = useState([]);
  const getBills = async () => {
    try {
      const response = await axios.post(
        "http://localhost:7222/auth/getCustomerBills",
        {
          authorizationToken: sessionStorage.getItem(
            "3c469e9d6c5875d37a43f353d4f88e61fcf812c66eee3457465a40b0da4153e0"
          ),
          customerId: id,
        }
      );
      setBill(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const renderData = [];
  let i = 0;
  while (i < bill.length) {
    renderData.push(
      <tr>
        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          {bill[i].bill_id}
        </td>
        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          {bill[i].ammount}
        </td>
        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          {bill[i].due_date}
        </td>
        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          {bill[i].plan_name}
        </td>
        <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
          <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

            <h2 className="text-sm font-normal text-emerald-500">
              {bill[i].stat == "76522" ? "Active" : "Over Due"}
            </h2>
          </div>
        </td>
        <td>
          <button className="px-4 py-3 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            type="button">Pay</button>
        </td>
      </tr>
    );
    i++;
  }

  return (
    <>
      <button
        className="px-4 py-3 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        type="button"
        onClick={() => { getBills(); setShowModal(true); }}
      >
        View Billing Record
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-50">
            <div className="relative w-full max-w-6xl mx-4">
              {/* Content */}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-gray-800 outline-none focus:outline-none">
                {/* Header */}
                <button
                  className="text-blue-700 hover:text-white-600 dark:hover:text-white-300 transition-all duration-150"
                  onClick={() => setShowModal(false)}
                >
                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
                <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 rounded-t">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                    Customer Details
                  </h3>
                </div>
                {/*body*/}
                <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                  <div className="mt-6 min-w-0 flex-1 sm:hidden md:block">
                    <h1 className="truncate text-2xl font-bold text-blue-300">{name}</h1>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                      <table>
                        <thead>
                          <tr>
                            <th className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                              Bill ID
                            </th>
                            <th className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                              Bill Amount
                            </th>
                            <th className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                              Due Date
                            </th>
                            <th className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                              Plan Billed
                            </th>
                            <th className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                              Payment Status
                            </th>
                            <th className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            </th>
                          </tr>
                        </thead>
                        <tbody>
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
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default AcceptPayment;
