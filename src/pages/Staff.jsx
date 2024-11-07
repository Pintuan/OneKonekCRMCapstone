import React, { useState } from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import Sidebar from '../partials/StaffSidebar';
import Header from '../partials/Header';
import Home from '../components/Staff/Home';
import Transactions from '../components/Staff/Transactions';
import Customers from '../components/Staff/Customers';
import Settings from '../components/Staff/Settings';
import Tickets from '../components/Staff/Tickets';
<<<<<<< Updated upstream
=======
import Installation from '../components/Staff/Installation';
import Completed from '../components/Staff/Completed.jsx';

>>>>>>> Stashed changes

function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path='/Personal' element={<Settings />} />
          <Route path='/Transactions' element={<Transactions />} />
          <Route path='/Customers' element={<Customers />} />
          <Route path='/Tickets' element={<Tickets />} />
<<<<<<< Updated upstream
=======
          <Route path='/Installation' element={<Installation />} />
          <Route path='/Completed' element={<Completed />} />
>>>>>>> Stashed changes
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;