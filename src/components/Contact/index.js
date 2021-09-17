import React from "react";
import "./style.css"
import { Container } from "react-bootstrap";


function Contact(props) {
  return (
    <div className="bg">
    <Container>

      <h1 className="pageTitle text-center"><b>Contact</b></h1>
      
      <p className="contactBody text-center"><b>Email:</b> nikifereidooni@gmail.com</p>
      
      <p className="contactBody text-center"><b>Phone Number:</b> 416-735-6928</p>

    </Container>
    </div>
  );
}

export default Contact;