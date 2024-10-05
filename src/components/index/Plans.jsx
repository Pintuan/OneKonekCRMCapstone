import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from '/light_mode.png';


const Plans = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    // Fetch data from the backend
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:7222/getPLans'); // Node.js server URL
            setData(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };
    useEffect(() => { fetchData(); }, []);
    let i = 0;
    const renderData = [];
    while (i < data.length) {
        renderData.push(
            <div key={data[i].planId} className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <img className="object-cover w-full h-64"
                    src="light_mode.png"></img>

                <div className="p-6">
                    <div>
                        <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">&#8369; {data[i].planPrice}</span>
                        <a href={'/ContactUs?plan=' + data[i].planId}
                            className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabIndex={i} role="link">
                            {data[i].planName}
                        </a>
                        <h4>{data[i].planSpeed}Mbps</h4>
                    </div>
                </div>
            </div>
        );
        i++;
    }

    return (
        <div className="flex h-fit place-content-center">
            <div className='mx-10 my-8 grid-cols-4 md:columns-4 gap-10'>
                {loading ? <p>Loading...</p> : renderData}
            </div>
        </div>
    );
}

export default Plans;