import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    message: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, contactNumber, message } = formData;
    if (name && contactNumber && message) {
      const defaultHeading = '<b><u>Enquiry Form</u></b>';
      const messageText = `${defaultHeading}%0A%0AName: ${name}%0AContact Number: ${contactNumber}%0AMessage: ${message}`;
      window.open(`https://wa.me/+917902709974?text=${messageText}`);
      setErrorMessage('');
      setFormData({ name: '', contactNumber: '', message: '' });
    } else {
      setErrorMessage('All fields are required.');
    }
  };

  return (
    <>
      <div className='pt-5'>
        <h2 style={{ color: '#3d878a', fontWeight: 'bold', textAlign: 'center' }}>- Feel Free To Connect With Us -</h2>
      </div>
      <Container>
        <div className="row pt-5 pb-4">
          <div className="col-md-6">
          <Card className="shadow">
              <Card.Body>
                <h5 className="card-title"><i class="ri-map-pin-line" style={{color:'#3d878a'}}></i> Address</h5>
                <p className="card-text">
                #1704, Sree Narayana sankeerna, 2nd floor, 1st Phase, 5th Stage, BEML Layout, 
                Rajarajeshwari Nagar, Bangalore, Karnataka - 560098
                </p>
              </Card.Body>
            </Card>
            <Card className="shadow mt-4">
              <Card.Body>
              <h5 className="card-title"><i class="ri-phone-line" style={{color:'#3d878a'}}></i> Phone</h5>
                <p className="card-text"><a href='tel:+917902709974' style={{textDecoration:'none',color:'black'}}>+91 7902 709 974</a></p>
              </Card.Body>
            </Card>
            <Card className="shadow mt-4">
              <Card.Body>
              <h5 className="card-title"><i class="ri-mail-line" style={{color:'#3d878a'}}></i> Email</h5>
                <p className="card-text"><a href='mailto:rapturetherapy24@gmail.com' style={{textDecoration:'none',color:'black'}} target='_blank'>rapturetherapy24@gmail.com</a></p>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-6 pt-3">
            {/* Right Side: Form */}
            <Card>
              <Card.Body>
                <Form style={{ padding: '10px' }} onSubmit={handleSubmit}>
                  <h4 className='text-center'>Enquiry Form</h4>
                  <Form.Group controlId="formName">
                    <Form.Label style={{ fontWeight: 'normal', padding: '8px' }}>Name</Form.Label>
                    <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
                  </Form.Group>
                  <Form.Group controlId="formContactNumber">
                    <Form.Label style={{ fontWeight: 'normal', padding: '8px' }}>Contact Number</Form.Label>
                    <Form.Control type="number" name="contactNumber" value={formData.contactNumber} onChange={handleChange} placeholder="Enter your contact number" />
                  </Form.Group>
                  <Form.Group controlId="formMessage">
                    <Form.Label style={{ fontWeight: 'normal', padding: '8px' }}>Message</Form.Label>
                    <Form.Control as="textarea" name="message" value={formData.message} onChange={handleChange} rows={3} placeholder="Enter your message" style={{ resize: 'none' }} />
                  </Form.Group>
                  {errorMessage && <div className="text-danger">{errorMessage}</div>}
                  <div className="d-grid gap-2 pt-3">
                    <Button type="submit" style={{ width: '100%', backgroundColor: '#3d878a', color: 'white', padding: '8px' }}>Submit</Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ContactForm;
