import React from 'react'
import NavBar from './NavBar'
import './AboutInnerPage.css';
import Aboutus2 from './Aboutus2';
import GMap from './GMap';
import Footer from './Footer';
import Specialized from './Specialized';
import Consult from './Consult';

const AboutInnerPage = () => {
  return (
    <>
      <NavBar />
    <div className="about-inner-container">
      <h2 className="main-text-about">About Us</h2>
      <p className="sub-text-about">Home / <span className='text-warning'>About Us</span></p>
    </div>
    <Aboutus2 />
    <Specialized />
    <Consult />
    <br></br>
    <GMap />
    <Footer />
    </>
  )
}

export default AboutInnerPage
