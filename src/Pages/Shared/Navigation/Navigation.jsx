import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {
  Link,
  useLocation
} from "react-router-dom";

import './navigation.css';
import useAuth from '../../../hooks/useAuth';


const Navigation = () => {
  const {user, logout} = useAuth();
  const location = useLocation();
    return (  
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home">{location.pathname.includes("dashboard") ? <i class="fas fa-bars border-2 border-gray-200 py-1 px-1.5 rounded text-gray-600 hover:shadow-sm"></i>: <p className="text-base font-extrabold flex items-center m-0"><i class="fas fa-subway text-yellow-500 mr-1"></i> <span className="text-gray-600">TRAIN</span><span className="text-gray-400">SHEBA</span></p>}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features"><Link to="/" className="nav-btn">Home</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to="/dashboard" className="nav-btn">Dashboard</Link></Nav.Link>
            <Nav.Link href=""><Link to="/tickets" className="nav-btn">Booking</Link></Nav.Link>
          </Nav>
          <Nav>
            <Nav  className="md:flex items-center">
              {user.email?<>
              {user.photoURL? <Nav.Link><img src={user.photoURL} alt="" className="w-10 rounded-full" /></Nav.Link>:<i class="fas fa-user"></i>}</>:null}
              <Nav.Link className="text-lg text-black">{user.displayName}</Nav.Link>
              {user.email?
              <Nav.Link>
              <Link to="/" onClick={logout} className='accounts-btn'>
                <span>Logout</span>
              </Link>
              </Nav.Link>:
              <Nav.Link>
              <Link to="/login" className='accounts-btn mr-3'>
                <span>Login</span>
              </Link>
                <Link to="/registration" className='accounts-btn'>
                  <span>Registration</span>
                </Link>
              </Nav.Link>
              }
            </Nav>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}
 
export default Navigation;