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


      <div className="button-group row">
        <a href="https://github.com/nfereidooni" target="_blank">
          <button className="button1 text-center"><i class="fab fa-github"></i>  Github</button>
        </a>
        <a href="https://www.linkedin.com/in/nfereidooni/" target="_blank">
          <button className="button1 text-center"><i class="fab fa-linkedin"></i>  LinkedIn</button>
        </a>
        <a href="mailto: nikifereidooni@gmail.com" target="_blank">
          <button className="button1 text-center"><i class="far fa-envelope"></i>  Email</button>
        </a>
        
      </div>
      
    </Container>
    </div>
  );
}

export default Contact;