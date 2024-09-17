import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Navbar from './components/IndexNavigation';
import Admin from './pages/Admin/Dashboard';
import Index from './pages/Index';
import Login from './pages/index/Login';
import Plans from './pages/index/Plans';
import About from './pages/index/About';
import Inquire from './pages/index/Inquire';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Plans" element={<Plans />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/ContactUs" element={<Inquire />} />
        <Route exact path="/Admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
