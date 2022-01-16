import React from 'react';
import { Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
        <div className='home-page'>
            <Navbar bg="" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav " className='me-end'>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>

                        </Nav>
                        <Navbar.Brand href="#home">registration</Navbar.Brand>
                        <Navbar.Brand href="#home">login</Navbar.Brand>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div>
                <Container>
                    <Row>

                        <Col>
                            <img className='img-pata' src="https://i.ibb.co/CMWJm9Z/mint-png-2.png" alt="" />
                            <h2 className='banner-container'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo?</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quae ipsum ab optio.</p>

                            <div>
                                <input type="text" className='input-box' /> <button className='button'>Find</button>
                            </div>
                            <div>
                                <img className='img-pata' src="https://i.ibb.co/CMWJm9Z/mint-png-2.png" alt="" />
                                <img className='img-pata' src="https://i.ibb.co/CMWJm9Z/mint-png-2.png" alt="" />
                            </div>
                        </Col>
                        <Col xs={5}>
                            <img className='images' src="https://i.ibb.co/g3Km7t5/joshua-ryder-I51a7-Yy7m-QA-unsplash-2.jpg" alt="" />
                        </Col>

                    </Row>

                </Container>
            </div>
        </div>


    );
};

export default Header;