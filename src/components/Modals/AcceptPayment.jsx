// src/Modal.js
import axios from "axios";
import React, { useState } from "react";

const AcceptPayment = () => {
  const [showModal, setShowModal] = useState(false);
  const [accountId, setAccountId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [bill, setBill] = useState([]);

  const renderData = [];
  const getBills = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:7222/auth/getCustomerBills",
        {
          token: sessionStorage.getItem(
            "3c469e9d6c5875d37a43f353d4f88e61fcf812c66eee3457465a40b0da4153e0"
          ),
          customerId: accountId,
        }
      );
      setLoading(false);
      setBill(response.data);
      console.log(response);
      let i = 0;
      while (i < bill.length) {
        renderData.push(
          <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-5">
            <div>{bill[i].billId}</div>
            <div>{bill[i].name}</div>
            <div>{bill[i].stat}</div>
            <div>{bill[i].planName}</div>
            <div>{bill[i].ammount}</div>
          </div>
        );
        console.log(bill[i].name);
        i++;
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <button
        className="px-4 py-3 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Accept Payment
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-50">
            <div className="relative w-full max-w-lg mx-auto my-6">
              {/* Content */}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-gray-800 outline-none focus:outline-none">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 rounded-t">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                    Accept Payment
                  </h3>
                  <button
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-150"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="p-6">
                  <form onSubmit={getBills}>
                    <label className="block text-gray-600 dark:text-gray-300">
                      Enter Account Number
                      <input
                        value={accountId}
                        onChange={(e) => {
                          setAccountId(e.target.value);
                          console.log(e.target.value);
                        }}
                        type="text"
                        className="mt-2 w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-800"
                        placeholder="Account ID"
                      />
                    </label>
                    <div className="flex items-center justify-end p-6 border-t border-gray-200 dark:border-gray-700 rounded-b space-x-2">
                      <button
                        className="text-red-500 hover:bg-red-100 dark:hover:bg-red-500 dark:hover:text-white font-bold uppercase px-6 py-2 text-sm rounded transition duration-150 ease-in-out"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button
                        className="bg-emerald-500 text-white hover:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition duration-150 ease-in-out"
                        type="submit"
                      >
                        Search
                      </button>
                    </div>
                  </form>
                  {/*add bills here */}
                  {loading ? (
                    <div>loading....</div>
                  ) : renderData.length >= 0 ? (
                    <div>{renderData}</div>
                  ) : (
                    <div>Enter Account ID to search account Biils</div>
                  )}
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
