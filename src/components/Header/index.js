import React from "react";
import "./style.css";
import { Container, Navbar, Nav } from "react-bootstrap";


function Header(props) {
  return (
    <Container>
      <Navbar collapseOnSelect expand="sm" bg="danger" variant="dark" fixed="top">
        <Navbar.Brand href="/nf_react_portfolio/"><b>Niki Fereidooni</b> &nbsp; &nbsp; Full-Stack Web Developer</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto mt-2 mt-lg-0">
            <Nav.Link href="/nf-react-portfolio/contact/">Contact</Nav.Link>
            <Nav.Link href="/nf-react-portfolio/portfolio/">Portfolio</Nav.Link>
            <Nav.Link href="/nf-react-portfolio/">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default Header;