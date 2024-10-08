import React, { useEffect, useState } from "react";
import axios from "axios";

const Staff = () => {
  const [plans, setPlans] = useState([]); // Initial state as an array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from the backend
  const fetchData = async () => {
    try {
      const response = await axios.post("http://localhost:7222/auth/getStaff", {
        token: sessionStorage.getItem(
          "3c469e9d6c5875d37a43f353d4f88e61fcf812c66eee3457465a40b0da4153e0"
        ),
      });
      setPlans(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="container px-4 mx-auto">
      <div className="flex items-center gap-x-3">
      <div className="flex justify-end items-end">
          <h1 className="font-bold mx-10 pt-5 text-2xl font-lg text-gray-800 dark:text-white">
            Staff
          </h1>
        </div>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8 text-center">
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 rounded-lg shadow-md">
              <table className="min-w-full">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="py-3.5 px-4 text-sm font-normal text-center text-gray-500 dark:text-gray-400">
                      Name
                    </th>
                    <th className="py-3.5 px-4 text-sm font-normal text-center text-gray-500 dark:text-gray-400">
                      Email
                    </th>
                    <th className="py-3.5 px-4 text-sm font-normal text-center text-gray-500 dark:text-gray-400">
                      Contact Number
                    </th>
                    <th className="py-3.5 px-4 text-sm font-normal text-center text-gray-500 dark:text-gray-400">
                      Position
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="4" className="text-center py-4">
                        Loading...
                      </td>
                    </tr>
                  ) : error ? (
                    <tr>
                      <td colSpan="4" className="text-center text-red-600 py-4">
                        {error}
                      </td>
                    </tr>
                  ) : plans.length > 0 ? (
                    plans.map((plan) => (
                      <tr
                        key={plan.userId}
                        className="hover:bg-gray-300 dark:hover:bg-gray-800 transition-colors duration-300 ease-in-out"
                      >
                        <td className="px-4 py-4 font-nunito border-b dark:border-gray-700">
                          {plan.name}
                        </td>
                        <td className="px-4 py-4 font-nunito border-b dark:border-gray-700">
                          {plan.email}
                        </td>
                        <td className="px-4 py-4 font-nunito border-b dark:border-gray-700">
                          {plan.contact}
                        </td>
                        <td className="px-4 py-4 font-nunito border-b dark:border-gray-700">
                          {plan.position}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-center py-4">
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

export default Staff;
