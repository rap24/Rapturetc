import React, { useState } from 'react';
import './ApntButton.css';

const ApntButton = () => {
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    place: '',
    number: '',
    appointmentDate: ''
  });

  const toggleAppointmentForm = () => {
    setShowAppointmentForm(!showAppointmentForm);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const defaultHeading = 'Appointment Booking';
    // Format the message with the form data
    const message = `${defaultHeading}%0A%0AName: ${formData.name}, Place: ${formData.place}, Contact Number: ${formData.number}, Appointment Date: ${formData.appointmentDate}`;
    // Construct the WhatsApp URL with the message
    const whatsappURL = `https://wa.me/+917902709974?text=${encodeURIComponent(message)}`;
    // Open the WhatsApp URL in a new window
    window.open(whatsappURL, '_blank');
  };

  return (
    <div>
      <button className='HomeStickyButton' onClick={toggleAppointmentForm}>
        <i className="ri-whatsapp-line"></i>
      </button>

      {showAppointmentForm && (
        <div className="appointment-form-container">
          <div className="close-button" onClick={toggleAppointmentForm}>
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
      )}
    </div>
  );
}

export default ApntButton;
