import React from 'react'
import NavBar from './NavBar'
import './ContactInnerPage.css'
import GMap from './GMap'
import Footer from './Footer'
import ContactForm from './ContactForm'

const ContactInnerPage = () => {
  return (
    <>
    <NavBar />
      <div className="contact-inner-container">
      <h2 className="main-text">Contact Us</h2>
      <p className="sub-text">Home / <span className='text-warning'>Contact</span></p>
    </div>
    <ContactForm />
    <GMap />
    <Footer />
    </>
  )
}

export default ContactInnerPage
