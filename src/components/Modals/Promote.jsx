import React, { useState, useEffect } from "react";
import axios from "axios";

const Promote = ({ user_id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const closeModal = () => setIsOpen(false);

  const loadPosition = async () => {
    try {
      const response = await axios.get("http://localhost:7222/auth/getPositions", {
        token: sessionStorage.getItem(
          "3c469e9d6c5875d37a43f353d4f88e61fcf812c66eee3457465a40b0da4153e0"
        ),
      });
      setPosition(response.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadPosition();
  }, []);

  const renderData = [];
  let i = 0;
  while (i != position.length) {
    renderData.push(
      <option key={i} value={position[i].restriction_id}>
        {position[i].position}
      </option>
    );
    i++;
  };

  const submitForm = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      "http://localhost:7222/auth/updatePosition",
      {
        authorizationToken: sessionStorage.getItem(sessionStorage.getItem("3c469e9d6c5875d37a43f353d4f88e61fcf812c66eee3457465a40b0da4153e0")),
        authKey: adminPassword,
        position: selectedOption,
        emp_id: user_id
      });
    console.log(response);
  }

  return (
    <div>
      <button
        onClick={() => {
          setIsOpen(true);
          //handleClick(staffMember.id);
        }}
        className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        type="button"
      >
        <span>Promote</span>
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 w-96 relative rounded-lg shadow-lg">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 px-3 py-2 text-gray-700 rounded-full focus:outline-none"
            >
              ✕
            </button>
            <h2 className="text-lg font-semibold mb-4 text-center text-gray-700">
              Promote Staff Member
            </h2>
            <label
              className="block text-sm text-left font-medium mb-1 text-gray-600"
              htmlFor="options"
            >
              Select an Option:
            </label>
            <select
              id="options"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Choose an option</option>
              {loading ? (<option value="">Loading...</option>) :
                renderData.length > 0 ? (renderData) : (
                  <option value="">error nothing to render</option>
                )}
            </select>
            <label
              className="block text-sm font-medium mb-1 text-left text-gray-700"
              htmlFor="adminPassword"
            >
              Admin Password:
            </label>
            <input
              type="password"
              id="adminPassword"
              placeholder="Enter admin password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex justify-end">
              <button
                onClick={submitForm}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Promote;
