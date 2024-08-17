
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
const About = () => {
    const navigate = useNavigate();
    const routeHome = () => {
        navigate('/');
      };
      const routeToContact = () => {
        navigate('/contact');
      };
     
  return (
    <>
    <Navbar className="position-sticky mt-0 mb-0" bg="primary" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Shop Online</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link onClick={routeHome}>Home</Nav.Link>
        <Nav.Link onClick={routeToContact}>Contact</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  <Container className="mt-5">
                <Row className="mb-4">
                    <Col>
                        <h1>About Us</h1>
                        <p>
                            Welcome to my wesite, your number one source for all things related to 
                            We're dedicated to giving you the very best of [product category], with a focus on dependability, customer service, and uniqueness.
                        </p>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col md={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Our Story</Card.Title>
                                <Card.Text>
                                    Founded in 2024 by Akif Imran, Shop Online has come a long way from its beginnings in location, e.g., a home office.
                                    When [founder name] first started out, [his/her/their] passion for [passion, e.g., helping others, providing the best equipment] 
                                    drove them to [action, e.g., quit the day job, do tons of research, etc.].
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Our Mission</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, aliquid eveniet fugit quia obcaecati placeat aperiam corrupti mollitia sunt iste accusamus veritatis voluptatibus.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col>
                        <p>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus exercitationem culpa, repellat beatae incidunt quae repudiandae, ratione optio ipsa similique a ex vel mollitia possimus itaque rerum id ipsum dolorum obcaecati deleniti.
                        </p>
                        <Button variant="primary" onClick={routeToContact}>Contact Us</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Sincerely,<br />Akif Imran </p>
                    </Col>
                </Row>
            </Container>
    </>
  )
}

export default About