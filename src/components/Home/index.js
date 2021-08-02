import React from "react";
import "./style.css";
import portrait from "../assets/img/IMG_Niki.jpg"
import resume from "../assets/nf_resume.pdf"
import { Container, Button, Image } from "react-bootstrap";


function Home(props) {
  return(
    <Container>
      <div className="main">

        <div className="row">

            <div className="col-1"></div>

            <h1><b>About Me</b></h1>
            <div className="media">

                <div className="col-md-1"></div>

                <div className="col-xs-10 col-md-7">
                
                <div className="media-body">
                  
                    <p className="media-p1">
                        test 1 2 3
                    </p>
                    <br/>
                    <Button variant="dark" size="lg" className="contactBtn" href={resume}>Resume</Button>
                    <Button variant="dark" size="lg" className="contactBtn" href="https://github.com/nfereidooni">GitHub</Button>
                    <Button variant="dark" size="lg" className="contactBtn" href="https://www.linkedin.com/in/nfereidooni/">LinkedIn</Button>
                    <Button variant="dark" size="lg" className="contactBtn" href="mailto: nikifereidooni@gmail.com">Email</Button>
                    <Button variant="dark" size="lg" className="contactBtn" href="tel:4167356928">Call</Button>
                
                </div>

                </div> 
                
                <div className="col-xs-2 col-md-4"></div> 

            </div>

        </div>
  
    </div>

    </Container>
  );
}

export default Home;