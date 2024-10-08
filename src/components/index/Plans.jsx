import { useState, useEffect } from "react";
import axios from "axios";

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
        className="w-full max-w-lg overflow-hidden bg-white rounded-xl shadow-2xl transition-transform duration-300 hover:shadow-2xl hover:scale-105 transform dark:bg-gray-800" // Added scale on hover
      >
        <img
          className="w-full h-48 object-cover max-w-full"
          src="1.png"
          alt={data[i].planName}
        />

        <div className="p-4 space-y-2">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full dark:text-blue-400 dark:bg-blue-900">
            &#8369; {data[i].planPrice}
          </span>

          <div className="flex justify-between items-center">
            <a
              href={`/ContactUs?plan=${data[i].planId}`}
              className="block mt-1 text-lg font-bold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              tabIndex={i}
              role="link"
            >
              {data[i].planName}
            </a>
            <p className="text-gray-600 dark:text-gray-300 ml-4">
              {data[i].planSpeed} Mbps
            </p>
          </div>
        </div>
      </div>
    );
    i++;
  }
  
  return (
    <div className="flex justify-center items-center bg-gray-100 dark:bg-gray-900 py-4">
  <div className="w-full max-w-7xl mx-4 lg:mx-10 px-2">

    {/* Container for both text and cards */}
    <div className="bg-gray-200 dark:bg-gray-800 p-4 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] rounded-lg">

      {/* Content inside the container */}
      <div className="p-4 lg:p-6">
        <h1 className="text-3xl font-bold tracking-wide text-gray-800 capitalize dark:text-white">
          Choose the Perfect Plan for You!
        </h1>
        <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
          Our flexible and affordable plans ensure you have the best internet experience for your home or business. Explore our options and pick the one that suits your needs today!
        </p>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {loading ? (
          <p className="text-gray-600 dark:text-gray-300">Loading...</p>
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
