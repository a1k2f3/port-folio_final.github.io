import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
// import NavBar from "../Nav/NavBar";

const Home = () => {
  const navigate = useNavigate();
 
  const [message, setMessage] = useState('');
  
  const showMessage = () => {
    setMessage('Thank you for visiting our website!');
  };
  
  const routeToContact = () => {
      navigate('/contact');
    };
    const routeToabout = () => {
      navigate('/about');
    };
    const routeToservices = () => {
      navigate('/services');
    };
  return (
    <>
         <Navbar className="position-sticky mt-0 mb-0" bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Shop Online</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link onClick={routeToContact}>Contact</Nav.Link>
            <Nav.Link onClick={routeToabout}>About</Nav.Link>
            <Nav.Link onClick={routeToservices}>Services</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <div className="container mt-4">
        <div className="d-flex flex-column align-items-center">
          <h1 className="text-primary">Software Development Company</h1>
      
          <p className="text-center">
            Our company is dedicated to building innovative websites that will help you grow your business online and
            streamline your operations through digitization. Join us on a journey to enhance your online presence and engage
            with your customers more effectively. We specialize in developing user-friendly and interactive projects tailored
            to meet your specific business needs. Let us help you take your business to the next level with cutting-edge
            technology and design solutions that drive success.
          </p>
          <Button variant="success" onClick={showMessage}>
            Click Me
          </Button>
          {message && (
            <div className="alert alert-info mt-3">
              {message}
            </div>
          )}
        </div>
      </div>

      <div className="container mt-5">
        <h2 className="text-primary text-center mb-4">Our Projects</h2>
        <div className="d-flex flex-wrap justify-content-between gap-3">
          <Card className="w-100 w-md-45">
            <Card.Header>
              <Nav variant="tabs" defaultActiveKey="#first">
                <Nav.Item>
                  <Nav.Link href="#link"> Website Link</Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body>
              <Card.Title>Check it out</Card.Title>
              <Card.Text>
                In this site, you can shop your favorite products easily, and we deliver them quickly within a day. We deal in
                all things you like.
              </Card.Text>
              <Button variant="primary">Check it out</Button>
            </Card.Body>
          </Card>

          <Card className="w-100 w-md-45">
            <Card.Header>
              <Nav variant="tabs" defaultActiveKey="#first">
                <Nav.Item>
                  <Nav.Link href="#link"> Website Link</Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body>
              <Card.Title>Chat App</Card.Title>
              <Card.Text>
                In this web application, you can chat with everyone securely.
              </Card.Text>
              <Button variant="primary">Check it out</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};
export default Home;