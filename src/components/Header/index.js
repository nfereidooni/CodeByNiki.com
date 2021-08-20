import React from "react";
import "./style.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";


function Header(props) {
  return (
    <Container>
      <Navbar className="Navbar-main"
        collapseOnSelect
        expand="sm"
        bg="light"
        variant="light"
        fixed="top"
      >
        <Navbar.Brand href="http://www.codebyniki.com">
          <p className="logo">code by niki</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto mt-1 mt-lg-0">
            <NavLink className="navLink" to="/">Home</NavLink> &nbsp; &nbsp;
            <NavLink className="navLink" to="/code">Code</NavLink> &nbsp; &nbsp;
            <NavLink className="navLink" to="/design">Design</NavLink> &nbsp; &nbsp;
            <NavLink className="navLink" to="/about">About</NavLink> &nbsp; &nbsp;
            <NavLink className="navLink" to="/contact">Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default Header;