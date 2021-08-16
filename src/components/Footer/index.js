import React from "react";
import "./style.css";
import { Container, Button } from "react-bootstrap";
import resume from "../assets/nf_resume.pdf"



function Footer(props) {
  return (
    <Container>
      <div className="container-sm">
        <div className="row">
          <footer className="col-12 py-4 mt-5 text-dark fixed-bottom justify-content-center text-center">
            <Button variant="dark" size="lg" className="contactBtn" href={resume}>Resume</Button>
            <Button variant="dark" size="lg" className="contactBtn" href="https://github.com/nfereidooni">GitHub</Button>
            <Button variant="dark" size="lg" className="contactBtn" href="https://www.linkedin.com/in/nfereidooni/">LinkedIn</Button>
            <Button variant="dark" size="lg" className="contactBtn" href="mailto: nikifereidooni@gmail.com">Email</Button>
            <Button variant="dark" size="lg" className="contactBtn" href="tel:4167356928">Call</Button>
          </footer>
        </div>
      </div>
    </Container>
  );
}

export default Footer;