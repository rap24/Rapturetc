import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './navbar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    place: '',
    contact: '',
    date: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleClose = () => {
    setShowModal(false);
    setFormData({ name: '', place: '', contact: '', date: '' });
    setErrorMessage('');
  };

  const handleShow = () => setShowModal(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBookAppointment = () => {
    // Check if all fields are filled
    const { name, place, contact, date } = formData;
    if (name && place && contact && date) {
      const defaultHeading = '*Appointment Booking*';
      const message = `${defaultHeading}\nName: ${name}%0APlace: ${place}%0AContact Number: ${contact}%0AAppointment Date: ${date}`;
      window.open(`https://wa.me/+917902709974?text=${message}`);
      handleClose();
    } else {
      // Display error message if any field is empty
      setErrorMessage('Please fill all fields.');
    }
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-white sticky-top">
        <Container>
          <Navbar.Brand href="#home">
            <img src='/rlogo.jpg' height={50} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            </Nav>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/ourservices">Services</Nav.Link>
              <Nav.Link as={Link} to="/aboutus">About</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
            <Button onClick={handleShow} className="PcBookAppointment ms-3 d-none d-lg-block" style={{ backgroundColor: '#3d878a' }}>
              Book Appointment <i className="ri-stethoscope-line"></i>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Schedule Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="place" className="form-label">Place</label>
              <input type="text" className="form-control" id="place" name="place" value={formData.place} onChange={handleInputChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="contact" className="form-label">Contact Number</label>
              <input type="text" className="form-control" id="contact" name="contact" value={formData.contact} onChange={handleInputChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="date" className="form-label">Appointment Date</label>
              <input type="date" className="form-control" id="date" name="date" value={formData.date} onChange={handleInputChange} required />
            </div>
            {errorMessage && <div className="text-danger">{errorMessage}</div>}
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleBookAppointment}>
            Book Appointment
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NavBar;
