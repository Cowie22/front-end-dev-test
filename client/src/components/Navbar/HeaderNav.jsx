import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import './NavbarStyles/HeaderNav.scss';

const HeaderNav = (props) => {
  return (
    <div>
      <Navbar className="navbar fixed-top">
        <Navbar.Brand
          // onClick={() => this.props.handleScroll(this.props.homeRef)}
        >
        Rooster Grin
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              // onClick={() => this.props.handleScroll(this.props.homeRef)}
            >
            Home
            </Nav.Link>
            <Nav.Link>About Us</Nav.Link>
            <Nav.Link>Appointments</Nav.Link>
            <Nav.Link>Contact</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default HeaderNav