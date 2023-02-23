import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "gatsby";

import Logo from "../../src/images/icon.png";

import "./topNav.css";

const Topnav = () => {

  const [ navBorder, setNavBorder ] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 50 ? setNavBorder(true) : setNavBorder(false);
    }
  };

  return (
    <Navbar expand="md" className={navBorder ? "nav-style nav-style-border" : "nav-style"} fixed="top">
      <Container className="nav-text py-1">
        <Navbar.Brand aria-label="home">
          <Link to="/" aria-label="Go to homepage">
            <img src={Logo} width="141.7" height="37.2" className="d-inline-block align-top" alt=""/>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto dropdown-border">
            <Link className="nav-link" to="/contact-us">Contact Us</Link>
            <Link className="nav-link" to="/support">Support</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Topnav;