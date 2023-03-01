import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "gatsby";

import Logo from "../../src/images/FANTASY_MODS.png";

import "./topNav.css";

const Topnav = () => {

  return (
    <Navbar expand="md" className="nav-style">
      <Container className="nav-text py-1">
        <Navbar.Brand aria-label="home">
          <Link to="/" aria-label="Go to homepage">
            <img src={Logo} width="100" className="d-inline-block align-top" alt=""/>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto dropdown-border">
            <Link className="nav-link text-light" to="/contact-us">Contact Us</Link>
            <Link className="nav-link text-light" to="/support">Support</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Topnav;