import React from "react";
import "./style.css";
import { Container } from "react-bootstrap";


function Footer(props) {
  return (
    <Container>
      <div className="container-sm">
        <div className="row">
          <footer className="col-12 py-4 mt-5 text-light fixed-bottom bg-danger justify-content-center text-center">
            <p>&#169; Copyright 2021, Created by Niki Fereidooni using React</p>
          </footer>
        </div>
      </div>
    </Container>
  );
}

export default Footer;