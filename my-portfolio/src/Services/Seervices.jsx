import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
const Seervices = () => {
const navigate=useNavigate();
    const routeToContact = () => {
        navigate('/contact');
      };
    const routeTohome = () => {
        navigate('/');
      };
      const routeToabout = () => {
        navigate('/about');
      };
      const routeToservices = () => {
        navigate('/services');
      };
  return (
    <>
    <div>
    <Navbar className="position-sticky t0p-0 start-0" bg="primary" data-bs-theme="dark">
        <Container className="position-sticky t0p-0 start-0" >
          <Navbar.Brand href="#home">Shop Online</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={routeTohome}>Home</Nav.Link>
            <Nav.Link onClick={routeToContact}>Contact</Nav.Link>
            <Nav.Link onClick={routeToabout}>About</Nav.Link>
            <Nav.Link onClick={routeToservices}>Services</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
    <Container className='mt-5  d-flex flex-wrap justify-content-center'>
<Container className=''>

<Card className="w-100 w-md-45">
            <Card.Header>
              <Nav variant="tabs" defaultActiveKey="#first">
                <Nav.Item>
                  <Nav.Link onClick={routeToContact}> Contact us</Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body>
              <Card.Title>web app development</Card.Title>
              <Card.Text>
                we develop web application for you with responsive desgin and user interactive interface by using mongo_bd react exprees node js  our sites help you to grow your company
                if your intersted than contact us 
              </Card.Text>
              <Button onClick={routeTohome}>our projects</Button>
            </Card.Body>
          </Card>
</Container >
<Container>
<Card className="w-100 w-md-45 mt-5">
            <Card.Header>
              <Nav variant="tabs" defaultActiveKey="#first">
                <Nav.Item>
                  <Nav.Link onClick={routeToContact}>OUR PROJECTS</Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body>
              <Card.Title>word press development</Card.Title>
              <Card.Text>
                we devop the custome theeme in word press for you and build the wensite and ecommerce for your business our web site help yout business to boost which help your business to boost
              </Card.Text>
              <Button variant="primary" onClick={routeTohome}>OUR PROJECTS</Button>
            </Card.Body>
          </Card>
    </Container>
    <Container>
<Card className="w-100 w-md-45 mt-5">
            <Card.Header>
              <Nav variant="tabs" defaultActiveKey="#first">
                <Nav.Item>
                  <Nav.Link onClick={routeToContact}>contact link</Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body>
              <Card.Title>word press development</Card.Title>
              <Card.Text>
                In this site, you can shop your favorite products easily, and we deliver them quickly within a day. We deal in
                all things you like.
              </Card.Text>
              <Button variant="primary">Check it out</Button>
            </Card.Body>
          </Card>
    </Container>
    </Container>
    </>
  )
}
export default Seervices