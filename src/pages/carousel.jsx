import React, { useState, useEffect } from 'react';
import './carousel.css'; // Import CSS for styling
import { Modal } from 'react-bootstrap'; // Import Bootstrap modal component

const Carousel = () => {
  // Define images array with URLs
  const images = [
    '/caraousel1.jpg',
    '/carausel2.jpg',
    '/carausel3.png'
  ];

  // State for current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false); // State for modal visibility

  // Function to handle navigation indicator click
  const handleIndicatorClick = (index) => {
    setCurrentImageIndex(index);
  };

  // Custom time interval for changing images (in milliseconds)
  const intervalTime = 5000; // Change the duration as needed

  // Auto scroll interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalTime); // Use the custom interval time

    // Clean up the interval
    return () => clearInterval(interval);
  }, [images.length, intervalTime]); // Re-run effect when the number of images or interval time changes

  // Function to handle modal show
  const handleShowModal = () => {
    setShowModal(true);
  };

  // Function to handle modal close
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const place = formData.get('place');
    const number = formData.get('number');
    const appointmentDate = formData.get('appointmentDate');
    const defaultHeading = '*Appointment Booking*';

    // Format the message with the form data
    const message = `${defaultHeading}\nName: ${name}\nPlace: ${place}\nContact Number: ${number}\nAppointment Date: ${appointmentDate}`;
    
    //WhatsApp URL with the message
    const whatsappURL = `https://wa.me/+917902709974?text=${encodeURIComponent(message)}`;
    
    // Open the WhatsApp URL in a new window
    window.open(whatsappURL, '_blank');

    // Close the modal
    handleCloseModal();
  };

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <div
          key={index}
          className={index === currentImageIndex ? 'slide active' : 'slide'}
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="maincarouseltitle text-overlay">
            <h2>Welcome to<br />Rapture Therapy Centre</h2>
            <button className="button" onClick={handleShowModal}>Book Appointment <i className="ri-stethoscope-line"></i></button>
          </div>
        </div>
      ))}
      {/* Navigation indicators outside the container */}
      <div className="navigation-indicators">
        {/* Map through images array to render navigation indicators */}
        {images.map((image, index) => (
          <div
            key={index}
            className={index === currentImageIndex ? 'indicator active' : 'indicator'}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </div>

      {/* Bootstrap modal for appointment form */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <div className="appointment-form-container">
          <div className="close-button" onClick={handleCloseModal}>
            <i className="ri-close-line"></i>
          </div>
          <div className="appointment-form-header">
            Schedule Appointment <i className="ri-calendar-schedule-line"></i>
          </div>
          <div className='formbackground'>
            <form className="appointment-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" className="form-control" id="name" name="name" required/>
              </div>
              <div className="form-group">
                <label htmlFor="place">Place:</label>
                <input type="text" className="form-control" id="place" name="place" required/>
              </div>
              <div className="form-group">
                <label htmlFor="number">Contact Number:</label>
                <input type="number" className="form-control" id="number" name="number" required/>
              </div>
              <div className="form-group">
                <label htmlFor="appointmentDate">Appointment Date:</label>
                <input type="date" className="form-control" id="appointmentDate" name="appointmentDate" required/>
              </div>
              <button type="submit" className="btn btn-primary"><i className="ri-whatsapp-line"></i> Book Appointment</button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Carousel;
