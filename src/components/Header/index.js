import React from "react";
import "./style.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <Container>
      <Navbar
        collapseOnSelect
        expand="sm"
        bg="light"
        variant="light"
        fixed="top"
      >
        <Navbar.Brand href="#">
          <b>Code by Niki</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto mt-2 mt-lg-0">
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