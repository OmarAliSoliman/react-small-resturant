import React, { Component } from "react";
import {Navbar, Nav, NavDropdown, Form, Button, FormControl} from 'react-bootstrap';
import {NavLink, Link} from 'react-router-dom';

class MyNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar className="navbar" bg="dark" expand="lg">
          <div className="container">
          <Link className="navbarHeadr" to="/">OResturant</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <NavLink activeClassName="active" exact className="NavLinks" to="/">Menu</NavLink>
              <NavLink activeClassName="active" exact className="NavLinks" to="/shopping-cart">Shopping Cart</NavLink>
            </Nav>
          </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default MyNavbar;
