import React, { useState } from 'react';

const Select_Plan = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [selectedSpeed, setSelectedSpeed] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Plan: ${selectedPlan}, Speed: ${selectedSpeed}, Price: ${selectedPrice}`);
    setIsModalOpen(false);  // Close the modal after submission
  };

  return (
    <div>
      {/* Button to open modal */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
      >
        Select Plan
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-70 flex items-center justify-center">
          <div className="bg-white p-4 w-96 relative rounded-lg shadow-lg">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-600 text-xl"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>

            <h2 className="text-lg font-semibold mb-4 text-center text-gray-700">Select Plan</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="plan" className="block text-left text-sm font-medium text-gray-600 mb-2">
                  Choose a plan:
                </label>
                <select
                  id="plan"
                  name="plan"
                  value={selectedPlan}
                  onChange={(e) => setSelectedPlan(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="Basic">Basic</option>
                  <option value="Standard">Standard</option>
                  <option value="Premium">Premium</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="speed" className="block text-left text-sm font-medium text-gray-600 mb-2">
                  Choose Speed:
                </label>
                <select
                  id="speed"
                  name="speed"
                  value={selectedSpeed}
                  onChange={(e) => setSelectedSpeed(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="10Mbps">10 Mbps</option>
                  <option value="50Mbps">50 Mbps</option>
                  <option value="100Mbps">100 Mbps</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="price" className="block text-left text-sm font-medium text-gray-600 mb-2">
                  Choose Price:
                </label>
                <select
                  id="price"
                  name="price"
                  value={selectedPrice}
                  onChange={(e) => setSelectedPrice(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="₱10">Basic - ₱10</option>
                  <option value="₱20">Standard - ₱20</option>
                  <option value="₱30">Premium - ₱\₱30</option>
                </select>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Select_Plan;
