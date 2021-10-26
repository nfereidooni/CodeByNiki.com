import React from "react";
import "./style.css"
import { Container, Button } from "react-bootstrap";


function Contact(props) {
  return (
    <div className="bg">
    <Container>

      <h1 className="pageTitle text-center"><b>Contact</b></h1>
      
      <p className="contactBody text-center"><b>Email:</b> nikifereidooni@gmail.com</p>
      
      <p className="contactBody text-center"><b>Phone Number:</b> 416-735-6928</p>


      <div className="button-group row">
        <Button className="button1 text-center" href="https://github.com/nfereidooni" target="_blank"><i class="fab fa-github"></i>  Github</Button>
        <Button className="button1 text-center" href="https://www.linkedin.com/in/nfereidooni/" target="_blank"><i class="fab fa-linkedin"></i>  LinkedIn</Button>
      </div>
      
    </Container>
    </div>
  );
}

export default Contact;