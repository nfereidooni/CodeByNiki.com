import React from "react";
import "./style.css";
import portrait from "../assets/img/IMG_Niki.jpg"
import resume from "../assets/nf_resume.pdf"
import { Container, Button, Image } from "react-bootstrap";


function About(props) {
  return(
    <div className="bg">
        <Container>
            <h1 className="pageTitle text-center"><b>About Me</b></h1>

                <div className="media">
                    <Image className="headshotr" width="250" alt="Portrait of Niki Fereidooni" src={portrait} />
                    
                    <div className="media-body">
                    
                        <p className="media-p1">
                            <b>Located in Toronto, Canada</b>
                            <br/>
                            <br/>
                            Hi, I'm Niki. 
                            <br/>
                            I'm a Frontend Web Developer, with a love for learning, good coffee, and code! 
                            <br/>
                            I have gone through a transformative year, with a major career change, working on health and fitness goals, and practicing mindfulness.
                            <br/>
                            I value honesty and authenticity - these are qualities I admire in the people closest to me, as well as managers and colleagues. I try to live as authentically as I can.
                            <br/>
                            Being both creative and analytical, I believe frontend web development is a wonderful mesh of my passions, creating beautifully-designed and functional websites.
                        </p>
                        <br/>
                    </div>

                    </div> 

        </Container>
    </div>
  );
}

export default About;