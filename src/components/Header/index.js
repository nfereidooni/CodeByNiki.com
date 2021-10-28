import React, {useState} from "react";
import "./style.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";


function Header(props) {

  const [expanded, setExpanded] = useState(false);

  return (
    <Container>
      <Navbar className="Navbar-main"
        collapseOnSelect
        expand="sm"
        bg="light"
        variant="light"
        fixed="top"
        expanded={expanded}
      >
        <Navbar.Brand href="http://www.codebyniki.com" className="logo">
          code by niki
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto mt-1 mt-lg-0">
            <NavLink className="navLink" to="/" onClick={() => setExpanded(false)}>Home</NavLink> &nbsp; &nbsp;
            <NavLink className="navLink" to="/code" onClick={() => setExpanded(false)}>Code</NavLink> &nbsp; &nbsp;
            <NavLink className="navLink" to="/design" onClick={() => setExpanded(false)}>Design</NavLink> &nbsp; &nbsp;
            <NavLink className="navLink" to="/about" onClick={() => setExpanded(false)}>About</NavLink> &nbsp; &nbsp;
            <NavLink className="navLink" to="/contact" onClick={() => setExpanded(false)}>Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default Header;