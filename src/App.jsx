import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Admin from './pages/Admin';
import Staff from './pages/Staff';
import Index from './pages/Index';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/admin/*" element={sessionStorage.getItem('token') != null ? <Admin /> : <Navigate replace to="/" />} />
        <Route path="/staff/*" element={sessionStorage.getItem('token') != null ? <Staff /> : <Navigate replace to="/" />} />
        <Route path="/*" element={<Index />} />
      </Routes>
    </div>
  );
}

export default App;
