import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DashboardCard06 from '../../partials/dashboard/DashboardCard06';

<<<<<<< Updated upstream
function Plans() {
=======
const Plans = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
>>>>>>> Stashed changes

    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    // Fetch data from the backend
    const fetchData = async () => {
        try {
            const response = await axios.post('http://localhost:7222/auth/getPlans', {
                token: sessionStorage.getItem('3c469e9d6c5875d37a43f353d4f88e61fcf812c66eee3457465a40b0da4153e0')
            });
            setPlans(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }

    };
    useEffect(() => { fetchData(); }, []);
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
<<<<<<< Updated upstream



    return (
        <main className="grow">
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                {/* Dashboard actions */}
                <div className="sm:flex sm:justify-between sm:items-center mb-8">

                    {/* Left: Title */}
                    <div className="mb-4 sm:mb-0">
                        <h1 className="mx-10 pt-2 text-lg font-lg text-gray-800 dark:text-white font-bold">Plans</h1>

                        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

                            {/* Cards */}
                            <div className="grid grid-cols-12 gap-6">

                            {/* Cards */}
                            <div className="grid grid-cols-1">

                                {/* Line chart (Acme Plus) */}
                                <DashboardCard01 />
                                {/* Line chart (Acme Advanced) */}
                                <DashboardCard02 />
                                {/* Line chart (Acme Professional) */}
                                <DashboardCard03 />
                                {/* Bar chart (Direct vs Indirect) */}
                                <DashboardCard04 />
                                {/* Line chart (Real Time Value) */}
                                <DashboardCard05 />
                                {/* Line chart (Acme Plus) */}
                                <DashboardCard06 title="Subscriber per Plan" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex h-screen overflow-hidden">
                    <section className="container px-4 mx-auto">
                        <div className="flex items-center gap-x-3">
                            <h2 className="text-lg font-medium text-gray-800 dark:text-white">Transactions</h2>
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
                                                        <td colSpan="7" className="text-center">Loading...</td>
                                                    </tr>
                                                ) : error ? (
                                                    <tr>
                                                        <td colSpan="7" className="text-center text-red-600">{error}</td>
                                                    </tr>
                                                ) : renderData.length > 0 ? (
                                                    renderData
                                                ) : (
                                                    <tr>
                                                        <td colSpan="7" className="text-center">Nothing to Show</td>
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
        </main>
    );
}
=======
  };
  useEffect(() => {
    fetchData();
  }, []);
  let i = 0;
  const renderData = [];
  while (i < plans.length) {
    renderData.push(
      <tr
        key={plans[i].planId}
        className="hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300 ease-in-out"
      >
        <td
          scope="col"
          className="px-4 py-4 font-nunito border-b dark:border-gray-700"
        ></td>
        <td
          scope="col"
          className="px-4 py-4 font-nunito border-b dark:border-gray-700"
        >
          {plans[i].planName}
        </td>
        <td
          scope="col"
          className="px-4 py-4 font-nunito border-b dark:border-gray-700"
        >
          {plans[i].planSpeed}
        </td>
        <td
          scope="col"
          className="px-4 py-4 font-nunito border-b dark:border-gray-700"
        >
          {plans[i].planPrice}
        </td>
        <td
          scope="col"
          className="px-4 py-4 font-nunito border-b dark:border-gray-700"
        >
          <div className="flex justify-center space-x-2">
            <button className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-900 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              Edit
            </button>
            {plans[i].stat === "16340" ? (
              <button className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Activate
              </button>
            ) : (
              <button className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Deactivate
              </button>
            )}
          </div>
        </td>
      </tr>
    );
    i++;
  }

  return (
    <section className="container mx-auto px-4">
      <div className="flex items-center gap-x-3">
        <div className="flex justify-end items-end">
          <h1 className="font-bold mx-10 pt-5 text-2xl font-lg text-gray-800 dark:text-white">
            Plans
          </h1>
        </div>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8 text-center">
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table className="min-w-full">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-center text-gray-500 dark:text-gray-400"
                    >
                      <span>Subscriber Count</span>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-center text-gray-500 dark:text-gray-400"
                    >
                      <span>Plan Name</span>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-center text-gray-500 dark:text-gray-400"
                    >
                      <span>Speed</span>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-center text-gray-500 dark:text-gray-400"
                    >
                      <span>Price</span>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-center text-gray-500 dark:text-gray-400"
                    >
                      <span>Action</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="5" className="text-center py-4">
                        Loading...
                      </td>
                    </tr>
                  ) : error ? (
                    <tr>
                      <td colSpan="5" className="text-center text-red-600 py-4">
                        {error}
                      </td>
                    </tr>
                  ) : renderData.length > 0 ? (
                    renderData
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center py-4">
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
  );
};
>>>>>>> Stashed changes

export default Plans;