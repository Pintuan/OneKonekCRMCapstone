import React, { useState, useEffect } from "react";
import axios from "axios";
import DashboardCard06 from "../../partials/dashboard/DashboardCard06";

function Plans() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Fetch data from the backend
  const fetchData = async () => {
    try {
      const response = await axios.post("http://localhost:7222/auth/getPlans", {
        token: sessionStorage.getItem(
          "3c469e9d6c5875d37a43f353d4f88e61fcf812c66eee3457465a40b0da4153e0"
        ),
      });
      setPlans(response.data);
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
  while (i < plans.length) {
    renderData.push(
      <tr key={plans[i].planId}>
        <td></td>
        <td>{plans[i].planName}</td>
        <td>{plans[i].planSpeed}</td>
        <td>{plans[i].planPrice}</td>
        <td>
          <button className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-yellow-300 rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            Edit
          </button>
          {plans[i].stat == 16340 ? (
            <button className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-700 rounded-lg hover:bg-red-800 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              Deactivate
            </button>
          ) : (
            <button className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              Activate
            </button>
          )}
        </td>
      </tr>
    );
    i++;
  }

  return (
    <main className="grow">
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
        {/* Dashboard actions */}
        <div className="sm:flex sm:justify-between sm:items-center mb-8">
          {/* Left: Title */}
          <div className="mb-4 sm:mb-0">
            <h1 className="mx-10 pt-2 text-lg font-lg text-gray-800 dark:text-white font-bold">
              Plans
            </h1>

            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
              {/* Cards */}
              <div className="grid grid-cols-12 gap-6">
              </div>
            </div>
          </div>
          <div className="flex h-screen overflow-hidden">
            <section className="container px-4 mx-auto">
              <div className="flex items-center gap-x-3">
                <h2 className="text-lg font-medium text-gray-800 dark:text-white">
                  Transactions
                </h2>
              </div>

              <div className="flex flex-col mt-6">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                      <table className="min-w-full">
                        <thead>
                          <tr>
                            <th>Subscriber Count</th>
                            <th>Plan Name</th>
                            <th>Speed</th>
                            <th>Price</th>
                            <th></th>
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
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Plans;
