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
        bg="danger"
        variant="dark"
        fixed="top"
      >
        <Navbar.Brand href="/">
          <b>Niki Fereidooni</b> &nbsp; &nbsp; Full-Stack Web Developer
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto mt-2 mt-lg-0">
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/">About</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default Header;