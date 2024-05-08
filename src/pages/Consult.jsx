import React, { useState } from 'react';
import './Consult.css'; // Import the external CSS file
import { Modal } from 'react-bootstrap'; // Import Bootstrap modal component

const Consult = () => {
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [formData, setFormData] = useState({
    name: '',
    place: '',
    number: '',
    appointmentDate: ''
  });

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const defaultHeading = '*Appointment Booking*';
    // Format the message with the form data
    const message = `${defaultHeading}\nName: ${formData.name}\n Place: ${formData.place}\n Contact Number: ${formData.number}\n Appointment Date: ${formData.appointmentDate}`;
    // Construct the WhatsApp URL with the message
    const whatsappURL = `https://wa.me/+917902709974?text=${encodeURIComponent(message)}`;
    // Open the WhatsApp URL in a new window
    window.open(whatsappURL, '_blank');
    // Close the modal
    handleCloseModal();
  };

  return (
    <div className="container55">
      <div className="col">
        <div className="rightsideconsult">
          <p className="text">Get your Consultation Today !</p><br></br>
          <button className="button" onClick={handleShowModal}>Book Appointment</button>
        </div>
      </div>
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
                <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="place">Place:</label>
                <input type="text" className="form-control" id="place" name="place" value={formData.place} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="number">Contact Number:</label>
                <input type="number" className="form-control" id="number" name="number" value={formData.number} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="appointmentDate">Appointment Date:</label>
                <input type="date" className="form-control" id="appointmentDate" name="appointmentDate" value={formData.appointmentDate} onChange={handleChange} required />
              </div>
              <button type="submit" className="btn btn-primary"><i className="ri-whatsapp-line"></i> Book Appointment</button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Consult;
