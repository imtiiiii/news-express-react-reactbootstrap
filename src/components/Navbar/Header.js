import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" >
                <Container>
                    <Navbar.Brand href="#home">News Express</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#features" className="text-light"  >Features</Nav.Link>
                            <Nav.Link href="#pricing" className="text-light" >Pricing</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div>
                <h1>Latest news:</h1>
            </div>
            <div className="outline mx-auto">
            </div>
        </div>
    );
};

export default Header;