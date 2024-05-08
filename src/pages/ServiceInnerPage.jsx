import React from 'react';
import './ServiceInnerPage.css'; // Import your external CSS file for additional styling
import NavBar from './NavBar';
import Services from './Services';
import MeetandGreet from './MeetandGreet';
import WhatisOcc from './WhatisOcc';
import Specialized from './Specialized';
import Footer from './Footer';
import ApntButton from './ApntButton';

const ServiceInnerPage = () => {
  return (
    <>
    <ApntButton />
    <NavBar />
    <div className="service-inner-container">
      <h2 className="main-text">Our Services</h2>
      <p className="sub-text">Home / <span className='text-warning'>Services</span></p>
    </div>
    <Services />
    <MeetandGreet />
    <WhatisOcc />
    <Specialized />
    <Footer />
    </>
  );
}

export default ServiceInnerPage;
