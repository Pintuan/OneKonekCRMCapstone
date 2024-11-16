// src/Modal.js
import axios from "axios";
import React, { useState } from "react";

const AcceptPayment = ({ id, name }) => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [bill, setBill] = useState([]);
  let ammount = 0;
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
          {bill[i].due_date ? bill[i].due_date : "today"}
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
      </tr>
    );
    ammount += bill[i].ammount;
    i++;
  }

  return (
    <>
      <button
        className="px-4 py-2 tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-800 rounded-lg hover:bg-green-900 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80"
        onClick={() => {
          getBills();
          setShowModal(true);
        }}
      >
        View Billing Record
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-50">
            <div className="relative w-full max-w-6xl mx-4">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-gray-800 outline-none focus:outline-none">
                <button
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  onClick={() => setShowModal(false)}
                >
                  ✕
                </button>
                <div className="p-4 border-b border-gray-200 dark:border-gray-700 rounded-t">
                  <h2 className="font-bold text-lg text-gray-800 dark:text-white">
                    Bill History
                  </h2>
                </div>
                <div className="p-6">
                  <h1 className="truncate text-xl font-bold ml-4 text-gray-800 dark:text-gray-200">
                    {name}
                  </h1>
                  <div className="flex flex-col mt-2 p-4">
                    <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                      <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-y-auto h-[400px] border border-gray-400 dark:border-gray-700 md:rounded-lg">
                          <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                              <thead className="bg-gray-300 dark:bg-gray-700">
                                <tr>
                                  <th className="px-4 py-4 text-sm text-gray-800 dark:text-gray-300 whitespace-nowrap">
                                    Bill ID
                                  </th>
                                  <th className="px-4 py-4 text-sm text-gray-800 dark:text-gray-300 whitespace-nowrap">
                                    Bill Amount
                                  </th>
                                  <th className="px-4 py-4 text-sm text-gray-800 dark:text-gray-300 whitespace-nowrap">
                                    Due Date
                                  </th>
                                  <th className="px-4 py-4 text-sm text-gray-800 dark:text-gray-300 whitespace-nowrap">
                                    Plan Billed
                                  </th>
                                  <th className="px-4 py-4 text-sm text-gray-800 dark:text-gray-300 whitespace-nowrap">
                                    Payment Status
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {loading ? (
                                  <tr>
                                    <td colSpan="5" className="text-center">
                                      Loading...
                                    </td>
                                  </tr>
                                ) : error ? (
                                  <tr>
                                    <td
                                      colSpan="5"
                                      className="text-center text-red-600"
                                    >
                                      {error}
                                    </td>
                                  </tr>
                                ) : renderData.length > 0 ? (
                                  renderData
                                ) : (
                                  <tr>
                                    <td colSpan="5" className="text-center">
                                      Nothing to Show
                                    </td>
                                  </tr>
                                )}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="">Total Ammount to Pay: {ammount} </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default AcceptPayment;
