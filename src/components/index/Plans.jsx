import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "/light_mode.png";

const Plans = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from the backend
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:7222/getPLans"); // Node.js server URL
      setData(response.data);
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
  while (i < data.length) {
    renderData.push(
      <div
  key={data[i].planId}
  className="w-full max-w-sm overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 dark:bg-gray-800"
>
  <img
    className="w-full h-48 object-cover max-w-full"
    src="plans.png"
    alt={data[i].planName}
  />

  <div className="p-6 space-y-4">
    <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full dark:text-blue-400 dark:bg-blue-900">
      &#8369; {data[i].planPrice}
    </span>

    {/* Flex container for plan name and speed */}
    <div className="flex justify-between items-center">
      {/* Plan name */}
      <a
        href={`/ContactUs?plan=${data[i].planId}`}
        className="block text-xl font-bold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
        tabIndex={i}
        role="link"
      >
        {data[i].planName}
      </a>

      {/* Plan speed */}
      <p className="text-lg text-gray-600 dark:text-gray-300 ml-4">
        {data[i].planSpeed} Mbps
      </p>
    </div>
  </div>
</div>

    );
    i++;
  }

  return (
    <div className="w-full mx-auto px-4 mb-4 flex flex-col items-center mt-2 p-2 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <div className="w-full">
        <div className="w-full max-w-7xl mx-auto my-4">
          <div className="text-left mb-6">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
              Choose the Perfect Plan for You!
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Our flexible and affordable plans ensure you have the best
              internet experience for your home or business. Explore our options
              and pick the one that suits your needs today!
            </p>
          </div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {loading ? (
              <p className="col-span-4 text-center">Loading...</p>
            ) : (
              renderData
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
