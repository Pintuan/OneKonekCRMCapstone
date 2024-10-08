import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from '../Modals/EditStaff';

const Staff = () => {
    const [staff, setStaff] = useState([]); // Initial state as an array
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [toggle, setToggle] = useState(false);
    const [data, setData] = useState({ title: '', body: '' });
    // Fetch data from the backend
    const fetchData = async () => {
        try {
            const response = await axios.post('http://localhost:7222/auth/getStaff', {
                token: sessionStorage.getItem('3c469e9d6c5875d37a43f353d4f88e61fcf812c66eee3457465a40b0da4153e0')
            });
            setStaff(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }

    };
    const fetchStaffData = async(authorizationToken) => {
        setData(await axios.post('http://localhost:7222/auth/fgbjmndo234bnkjcslknsqewrSADqwebnSFasq',{authorizationToken}));
        setToggle(true);
    };
    const handleSubmit = () => {

    }
    const handleclick = (id) =>{
        fetchStaffData(id);
        setToggle(true);
        
    };
    const closeModal = () =>{
        setToggle(false); 
    }
    useEffect(() => { fetchData(); }, []);
    
    let i = 0;
    const renderData = staff.map(staffMember => (
        <tr key={staffMember.id}>
            <td>{staffMember.name}</td>
            <td>{staffMember.email}</td>
            <td>+63{staffMember.contact}</td>
            <td>{staffMember.position}</td>
            <td>
                <button onClick={() => handleclick(staffMember.id)} className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80" type="button">
                    <span>Edit</span>
                </button>
                <button onClick={() => handleclick(staffMember.id)} className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80" type="button">
                    <span>Deactivate</span>
                </button>
            </td>
        </tr>
    ));

    return (
        <section className="container px-4 mx-auto">
            <div className="flex items-center gap-x-3">
                <h2 className="px-4 sm:px-6 lg:px-8 py-4 w-full max-w-9xl mx-auto">Staff</h2>
            </div>

            <div className="flex flex-col mt-6">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                            <table className="min-w-full">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Contact Number</th>
                                        <th>Position</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody className='content-center'>
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
            <Modal isOpen ={toggle} onClose={closeModal} data={data} onSubmit={handleSubmit}/>
        </section>
        
    );
};

export default Staff;
