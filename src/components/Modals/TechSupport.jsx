import axios from 'axios';
import React, { useState } from 'react';

const TechSupport = () => {
  const [showModal, setShowModal] = useState(false);
  const [idNumber, setIdNumber] = useState("");
  const [contactNum, setContactNum] = useState("");
  const [time, setTime] = useState({ hour: "", minute: "", period: "AM" });
  const [tech, setTech] = useState("");
  const [server, setServer] = useState("");
  const [maps, setMaps] = useState("");
  const [plans, setPlans] = useState("");
  const [pppoe, setPPPEO] = useState("");
  const [nap, setNap] = useState("");
  const [napPort, setNapPort] = useState("");
  const [napReading, setNapReading] = useState("");
  const [insideReading, setInsideReading] = useState("");
  const [comment, setComment] = useState("");
  const [tl, setTL] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTime((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`Selected time: ${time.hour}:${time.minute} ${time.period}`);
    
    try {
      const response = await axios.post(
        "http://localhost:7222/auth/hjgsahdghasgdhgdahsgdSAKNB",
        {
          idNumber,
          contactNum,
          time,
          tech,
          server,
          maps,
          plans,
          pppoe,
          nap,
          napPort,
          napReading,
          insideReading,
          comment,
          tl,
          status
        }
      );
      setShowModal(false); // Close modal on successful submission
    } catch (err) {
      setError("Failed to submit form: " + err.message);
    }
  };

  return (
    <>
      <button
        className="px-4 py-3 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        type="button"
        onClick={() => setShowModal(true)}>
        Tech Support
      </button>
      {showModal ? (
  <>
    <div 
      className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50"
      onClick={() => setShowModal(false)} // Optional: Close modal when clicking outside
    >
      <div 
        className="relative p-6 bg-white rounded-md shadow-md dark:bg-gray-800 max-w-6xl w-full mx-4"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <div className="flex items-center mt-6">
          <div className="flex justify-end items-end">
            <h2 className="font-bold mx-8 pt-5 text-lg font-lg text-gray-800 dark:text-white mb-4">
              Technician
                </h2>
            </div>
          </div>
          <div className="ml-2 max-w-6xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-4">
            <div className="flex justify-start items-end">
              <h2 className="font-bold mx-6 pt-5 text-lg font-lg text-gray-800 dark:text-gray-300 mb-4">
                Fill up/ Completion
              </h2>
            </div>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-6 mt-2 md:grid-cols-1"
            >
            <div>
              <label className="block text-sm text-gray-600 dark:text-gray-200">
                Status
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              >
                <option value="" disabled>
                  Status
                </option>
                <option value="Stat1">Completed</option>
                <option value="Stat2">Re-Schedule</option>
              </select>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3">
              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  ID Number
                </label>
                <input
                  type="text"
                  placeholder=""
                  value={idNumber}
                  onChange={(e) => setIdNumber(e.target.value)}
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Team Leader
                </label>
                <select
                  value={tl}
                  onChange={(e) => setTL(e.target.value)}
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                >
                  <option value="" disabled>
                    Select Team Leader
                  </option>
                  <option value="TL2">RAUL GONZALES</option>
                  <option value="TL3">JAKE JARELLE CARLOS</option>
                  <option value="TL4">ARMAN PEÑARANDA</option>
                  <option value="TL5">CHRISTOPHER ALFONSO</option>
                  <option value="TL6">Other:</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Technician
                </label>
                <select
                  value={tech}
                  onChange={(e) => setTech(e.target.value)}
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                >
                  <option value="" disabled>
                    Select Tech
                  </option>
                  <option value="Tech1">JOEL FELIPE</option>
                  <option value="Tech2">JAKE JARELLE CARLOS</option>
                  <option value="Tech3">JAIME LUMPAYAO</option>
                  <option value="Tech4">RAMON SOL CRUZ</option>
                  <option value="Tech5">JOBERT VILLAFAÑA</option>
                  <option value="Tech6">Other: </option>
                </select>
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                Server
              </label>
              <select
                value={server}
                onChange={(e) => setServer(e.target.value)}
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              >
                <option value="" disabled>
                  Select Server
                </option>
                <option value="Server1">
                  MAIN (SANTA ELENA, SAGRADA, SAN PABLO, SAN PEDRO, SAN AGUSTIN)
                </option>
                <option value="Server2">
                  SAN SEBASTIAN (SAN NICOLAS, SAN SEBASTIAN, MERCADO, SAN JOSE,
                  SANTA MONICA, STO. NIÑO)
                </option>
                <option value="Server3">
                  SAN ISIDRO (TAMPOK, SAN ISIDRO, PANDUCOT)
                </option>
                <option value="Server4">
                  PALAPAT (IBA, CARILLO, PALAPAT, SAN MIGUEL, SAN JUAN, SAN
                  ISIDRO, PANDUCOT)
                </option>
              </select>
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                Maps Location
              </label>
              <input
                type="text"
                placeholder=""
                value={maps}
                onChange={(e) => setMaps(e.target.value)}
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                Phone number
              </label>
              <div className="flex items-center mt-2">
                <p className="py-2.5 px-3 text-gray-500 bg-gray-100 dark:bg-gray-800 dark:border-gray-700 border border-r-0 rtl:rounded-r-lg rtl:rounded-l-none rtl:border-l-0 rtl:border-r rounded-l-lg">
                  +63
                </p>
                <input
                  type="text"
                  placeholder="9XX-XXX-XXXX"
                  value={contactNum}
                  onChange={(e) => setContactNum(e.target.value)}
                  className="block w-full rounded-l-none rtl:rounded-l-lg rtl:rounded-r-none placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                Plan
              </label>
              <select
                value={plans}
                onChange={(e) => setPlans(e.target.value)}
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              >
                <option value="" disabled>
                  Select Plan
                </option>
                <option value="Plan1">Plan 1</option>
                <option value="Plan2">Plan 2</option>
                <option value="Plan3">Plan 3</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                PPPOE
              </label>
              <input
                type="email"
                value={pppoe}
                onChange={(e) => setPPPEO(e.target.value)}
                placeholder=""
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  NAP
                </label>
                <input
                  type="text"
                  value={nap}
                  onChange={(e) => setNap(e.target.value)}
                  placeholder=""
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  NAP PORT
                </label>
                <input
                  type="text"
                  value={napPort}
                  onChange={(e) => setNapPort(e.target.value)}
                  placeholder=""
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  NAP Reading
                </label>
                <input
                  type="text"
                  value={napReading}
                  onChange={(e) => setNapReading(e.target.value)}
                  placeholder=""
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>
            <div>
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                Inside Reading
              </label>
              <input
                type="email"
                value={insideReading}
                onChange={(e) => setInsideReading(e.target.value)}
                placeholder=""
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Time of Installation 1
                </label>
                <div className="flex items-center">
                  <select
                    name="hour"
                    value={time.hour}
                    onChange={handleChange}
                    className="mr-2 px-3 py-2 border rounded w-40 bg-gray-800 text-white"
                  >
                    <option value="" disabled>
                      Select Hour
                    </option>
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((hour) => (
                      <option key={hour} value={hour}>
                        {hour}
                      </option>
                    ))}
                  </select>

                  <select
                    name="minute"
                    value={time.minute}
                    onChange={handleChange}
                    className="mr-2 px-3 py-2 border rounded w-40 bg-gray-800 text-white"
                  >
                    <option value="" disabled>
                      Select Minute
                    </option>
                    {Array.from({ length: 60 }, (_, i) => i).map((minute) => (
                      <option key={minute} value={minute}>
                        {minute < 10 ? `0${minute}` : minute}
                      </option>
                    ))}
                  </select>

                  <select
                    name="period"
                    value={time.period}
                    onChange={handleChange}
                    className="mr-2 px-3 py-2 border rounded w-40 bg-gray-800 text-white"
                  >
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  End of Installation
                </label>
                <div className="flex items-center">
                  <select
                    name="hour"
                    value={time.hour}
                    onChange={handleChange}
                    className="mr-2 px-3 py-2 border rounded w-40 bg-gray-800 text-white"
                  >
                    <option value="" disabled>
                      Select Hour
                    </option>
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((hour) => (
                      <option key={hour} value={hour}>
                        {hour}
                      </option>
                    ))}
                  </select>

                  <select
                    name="minute"
                    value={time.minute}
                    onChange={handleChange}
                    className="mr-2 px-3 py-2 border rounded w-40 bg-gray-800 text-white"
                  >
                    <option value="" disabled>
                      Select Minute
                    </option>
                    {Array.from({ length: 60 }, (_, i) => i).map((minute) => (
                      <option key={minute} value={minute}>
                        {minute < 10 ? `0${minute}` : minute}
                      </option>
                    ))}
                  </select>

                  <select
                    name="period"
                    value={time.period}
                    onChange={handleChange}
                    className="mr-2 px-3 py-2 border rounded w-40 bg-gray-800 text-white"
                  >
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Comments
                </label>
                <input
                  type="text"
                  placeholder=""
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <button className="flex items-center justify-center w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform hover:bg-blue-500 rounded-lg bg-gray-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                <span className="text-center">Submit</span>
              </button>

              {error && (
                <p className="mt-4 text-red-600 dark:text-red-400">
                  {error}
                </p>
              )}
            </form>
          </div>
          </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default TechSupport;