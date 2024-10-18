// src/Modal.js
import axios from 'axios';
import React, { useState } from 'react';

const AcceptPayment = () => {
  const [showModal, setShowModal] = useState(false);
  const [accountId, setAccountId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [bill, setBill] = useState([]);
  
  const renderData = [];
  const getBills = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:7222/auth/getCustomerBills', {
        token: sessionStorage.getItem('3c469e9d6c5875d37a43f353d4f88e61fcf812c66eee3457465a40b0da4153e0'),
        customerId: accountId
      });
      setLoading(false);
      setBill(response.data);
      console.log(response);
      let i = 0;
      while (i < bill.length) {
        renderData.push(
          <div className='grid grid-cols-1 gap-6 mt-8 md:grid-cols-5'>
            <div>{bill[i].billId}</div>
            <div>{bill[i].name}</div>
            <div>{bill[i].stat}</div>
            <div>{bill[i].planName}</div>
            <div>{bill[i].ammount}</div>
          </div>
        )
        console.log(bill[i].name)
        i++;
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}>
        Accept Payment
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Accept Payment
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form onSubmit={getBills}>
                    <label>Enter Account Number
                      <input value={accountId} onChange={(e) => { setAccountId(e.target.value); console.log(e.target.value) }} type="text" />
                    </label>
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                      >
                        Search
                      </button>
                    </div>
                  </form>
                  {/*add bills here */}
                  {loading ?
                    <div>loading....</div>
                    : renderData.length >= 0 ? (
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
