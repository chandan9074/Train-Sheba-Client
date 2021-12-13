import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {
  Link
} from "react-router-dom";

import './navigation.css';


const Navigation = () => {
    return (  
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home"><p className="text-base font-extrabold flex items-center m-0"><i class="fas fa-subway text-yellow-500 mr-1"></i> <span className="text-gray-600">TRAIN</span><span className="text-gray-400">SHEBA</span></p></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features"><Link to="/" className="nav-btn">Home</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to="/dashboard" className="nav-btn">Dashboard</Link></Nav.Link>
            <Nav.Link href=""><Link to="/tickets" className="nav-btn">Booking</Link></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}
 
export default Navigation;