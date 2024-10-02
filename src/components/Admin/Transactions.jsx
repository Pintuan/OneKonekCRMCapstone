import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Transactions = () => {
    const [plans, setPlans] = useState([]); // Initial state as an array
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data from the backend
    const fetchData = async () => {
        try {
            const response = await axios.post('http://localhost:7222/auth/getTransactions', {
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

    console.log(plans);
    while (i < plans.length) {
        renderData.push(
            <tr key={plans[i].paymentId}>
                <td>{plans[i].paymentId}</td>
                <td>{plans[i].name}</td>
                <td>{plans[i].planName}</td>
                <td>{plans[i].billingDate}</td>
                <td>{plans[i].paymentDate}</td>
                <td>{plans[i].Rebate}</td>
                <td>{plans[i].totalPaid}</td>
            </tr>
        );
        i++;
    }

    return (
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
                                        <th>Transaction Number</th>
                                        <th>Name</th>
                                        <th>Plan Name</th>
                                        <th>Billing Date</th>
                                        <th>Date Paid</th>
                                        <th>Prorated</th>
                                        <th>Total Paid</th>
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
    );
};

export default Transactions;
