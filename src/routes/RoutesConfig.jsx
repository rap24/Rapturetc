import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ServiceInnerPage from '../pages/ServiceInnerPage';
import AboutInnerPage from '../pages/AboutInnerPage';
import ContactInnerPage from '../pages/ContactInnerPage';

const RoutesConfig = (props) => {
    return (
        <Routes>
            <Route path="/" element={<Home />} /> {/* Default route */}
            <Route path="/ourservices" element={<ServiceInnerPage />} />
            <Route path="/aboutus" element={<AboutInnerPage />} />
            <Route path="/contact" element={<ContactInnerPage />} />
        </Routes>
    );
};

export default RoutesConfig;
