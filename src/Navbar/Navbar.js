import React from 'react';
import {Container,Nav,Navbar} from 'react-bootstrap';
import {Link,BrowserRouter,Routes,Route } from "react-router-dom";
import Homepage from '../homepage';
import "./style.css";

const Topbar=()=> {
  return (
    <BrowserRouter >
    <div className='m-2 rounded'>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand style={{paddingLeft: '0px'}} className="nav-link urban" as={Link} to="/" ><img style={{height: '3.5rem'}}
        src='logo.png' alt='...'/>&nbsp;EVCharge</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/"><button className='btn rounded-pill'>Book your slot</button></Nav.Link>
            <Nav.Link as={Link} to="/"><button className='btn rounded-pill'>Login</button></Nav.Link>
            <Nav.Link as={Link} to="/"><button className='btn rounded-pill'>About Us</button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    <div>
    <Routes>
      <Route exact path="/" element={<Homepage />} />
    </Routes>
  </div>
    </BrowserRouter>
  );
}

export default Topbar;