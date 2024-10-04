import React, { useState } from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import Sidebar from '../partials/StaffSidebar';
import Header from '../partials/Header';
import Home from '../components/Staff/Home';
import Analylics from '../components/Staff/Analytics';
import Transactions from '../components/Staff/Transactions';
import Customers from '../components/Staff/Customers';

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
          <Route exact path="/Staff/" element={<Home />} />
          <Route exact path="/Staff/Analylics" element={<Analylics />} />
          <Route exact path="/Staff/Transactions" element={<Transactions />} />
          <Route exact path="/Staff/Setting" element={<Setting />} />
          <Route exact path="/Staff/Customers" element={<Customers />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;