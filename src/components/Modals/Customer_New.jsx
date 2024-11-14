import React, { useState } from "react";

const Customer_New = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    email: "",
    phone: "",
    billingDate: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Customer Details Saved!");
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-800 rounded-lg hover:bg-green-900 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80"
      >
        Change Billing Date
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div
            className="relative p-6 bg-white rounded-md shadow-md dark:bg-gray-800 max-w-lg w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              ✕
            </button>
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-lg text-gray-800 dark:text-white mb-4">
                New Billing Date
              </h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="billingDate"
                  className="block text-left text-gray-700 font-medium mb-2"
                >
                  Billing Date (1-28)
                </label>
                <input
                  type="number"
                  id="billingDate"
                  name="billingDate"
                  min="1"
                  max="28"
                  value={customerDetails.billingDate}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Select Billing Date"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Customer_New;
