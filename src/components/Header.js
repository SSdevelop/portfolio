import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
const Header = () => {
    return (
        <Navbar bg="dark" expand="lg" sticky="top" variant="dark" className="py-4" collapseOnSelect>
            <Container fluid="md">
                <Navbar.Brand href="/portfolio" style={{fontSize:"26px", borderRight:"2px solid grey", padding:"0 10px"}}>Srijan Srivastava</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{padding: "0 10px"}}
                        navbarScroll
                    >
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                    </Nav>
                    <Button 
                        href="#contact" 
                        className="d-flex" 
                        variant="outline-success" 
                        size="md"
                        style={{margin: "0 10px", maxWidth: "25vw", justifyContent: "center"}}
                    >
                        Contact Me
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;