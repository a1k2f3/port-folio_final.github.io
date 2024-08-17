import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    subject: "",
    email: "",
    message: ""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Your message was sent to the author");
 
    const { subject, email, message } = formData;
    if (!subject || !email || !message) {
      setError("Please fill out the required fields");
      return;
    }
    const formPayload = {
      email,
      subject,
      message
    };
    try {
      const response = await fetch("http://localhost:3000/send-email", {
        method: "POST",
        body: JSON.stringify(formPayload),
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      });
      if (response.ok) {
               setFormData({ subject: "", email: "", message: "" });
        setError("");
      } else {
        throw new Error('Network response was not ok');
      }
    } catch(error) {
      console.error("Error sending your message:", error);
      setError("There was an error sending your message. Please try again later.");
    }
  };

  return (
    <>
      <Navbar className="position-sticky mt-0 mb-0" bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Shop Online</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
            <Nav.Link>Contact</Nav.Link>
            <Nav.Link onClick={() => navigate('/about')}>About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-5">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="name@example.com"
              onChange={handleChange}
              value={formData.email}
            />
            <Form.Label>Your Subject</Form.Label>
            <Form.Control
              type="text"
              name="subject"
              placeholder="Enter your subject"
              onChange={handleChange}
              value={formData.subject}
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formMessage">
            <Form.Label>Enter Your Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="message"
              onChange={handleChange}
              value={formData.message}
            />
          </Form.Group>

          {error && <div className="text-danger mb-3">{error}</div>}

          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};
export default ContactForm;
