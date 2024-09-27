import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import pages
import Navbar from '../components/IndexNavigation';
import Plans from '../components/index/Plans';
import Login from '../components/index/Login';
import ContactUs from '../components/index/Inquire';

function Index() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/plans" element={<Plans />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default Index;