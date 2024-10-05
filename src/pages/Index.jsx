import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import pages
import Navbar from '../components/IndexNavigation';
import Plans from '../components/index/Plans';
import Login from '../components/index/Login';
import ContactUs from '../components/index/Inquire';
import About from '../components/index/About';

function Index() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Plans/>}/>
        <Route path="/plans" element={<Plans />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default Index;