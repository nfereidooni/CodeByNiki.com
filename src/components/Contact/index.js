import React from "react";
import "./style.css";
import { Container, Form } from "react-bootstrap";


function Contact(props) {
  return (
    <Container>
      <div className="main">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <h1><b>Contact</b></h1>

            <Form id="contact-form" name="contact=form" action="mail.php" method="POST">

              <div className="form-group row">
                <label for="colFormLabel" className="col-sm-2 col-form-label col-form-label-lg">Name</label>
                <div className="col-11">
                  <input type="text" className="form-control form-control-lg" id="name" name="name" placeholder="Full Name" />
							  </div>
              </div>

              <div className="form-group row">
                <label for="colFormLabel" className="col-sm-2 col-form-label-lg">Email</label>
                <div className="col-11">
                  <input type="email" className="form-control form-control-lg" id="email" name="email" placeholder="name@example.com" />
                </div>
              </div>

              <div className="form-group row">
                <label for="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Message</label>
                <div className="col-11 message">
                  <textarea type="text" className="form-control form-control-lg" id="message" name="message" row="5" placeholder="Type your message here..."></textarea>
                </div>
              </div>

						</Form>

            <button type="submit" className="btn btn-danger" onclick="validateForm();">Submit</button>
    
			    </div>
        </div>
      </div>

        <div className="row">
          <div className="col-1"></div>
          <div className="col-7">
            <div className="status"></div>
          </div>
        </div>

    </Container>
  );
}

export default Contact;