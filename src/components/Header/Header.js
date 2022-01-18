import React from 'react';
import { Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
        <div className='home-page'>
            <Navbar bg="" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">ETANAN</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav " className='me-end'>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>

                        </Nav>
                        <Navbar.Brand href="#home">English</Navbar.Brand>
                        <Navbar.Brand href="#home"><button className='bg-warning rounded'>sign In</button></Navbar.Brand>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className='banner-section'>
                <div className='leaf-1 leaf'></div>
                <div className='leaf-2 leaf'></div>
                <div className='leaf-3 leaf'></div>
                <div className='leaf-4 leaf'></div>
                <div className='leaf-5 leaf'></div>
                <Container>
                    <Row>

                        <Col>
                            <div>

                                <div className='banner-container' style={{ textAlign: 'left', marginLeft: '150px' }}>
                                    <h2 className=''>YOUR FAVOURITE FOOD </h2>           <br />
                                    <h2 className='mb-3'>DELIVERED TO YOU</h2>
                                </div>
                            </div>
                            <div style={{ textAlign: 'left', marginLeft: '150px' }}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Aspernatur quae ipsum ab optio  </p>
                                <p>.</p>
                            </div>

                            <div>
                                {/* <input type="text" className='input-box' /> <button className='button'>Find</button> */}
                                <input className='p-3 bg-white border-0' type="text" /> <button className='p-3  m-2 bg-black text-white border-0 rounded'>Find</button>
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