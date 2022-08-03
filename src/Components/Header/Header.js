import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='d-flex align-items-center justify-content-center'>
            <Navbar collapseOnSelect expand="lg" sticky='top' className='fs-5 '>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='ms-5'>
                        <Nav>
                            <Nav.Link as={Link} to="/profile" className='text-light mx-3'>Profile</Nav.Link>
                            <Nav.Link as={Link} to="/gallery" className='text-light mx-3'>Gallery</Nav.Link>
                            <Nav.Link as={Link} to="/signin" className='text-light mx-3'>Sign In</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;