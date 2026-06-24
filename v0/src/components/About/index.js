import React from "react";
import "./style.css";
import portrait from "../assets/img/IMG_Niki.jpg"
import { Container, Image } from "react-bootstrap";


function About(props) {
  return(
    <div className="bg">
        <Container>
            <h1 className="pageTitle text-center"><b>About Me</b></h1>

            <div className="media row">
                <Image className="headshot col-12 col-sm-4 col-xs-4" alt="Portrait of Niki" src={portrait} />
                
                <div className="media-body col-12 col-sm-8 col-xs-8">
                
                    <p className="media-p1">
                        <b>Located in Toronto, Canada</b>
                        <br/>
                        <br/>
                        <i>Hi, I'm <b>Niki</b>.</i>
                        <br/>
                        <br/>
                        I'm a Frontend Web Developer, specializing in <b>React</b> and <b>Wordpress</b>. 
                        <br/>
                        <br/>
                        I'm also a Certified ScrumMaster (CSM) and former project manager.
                        <br/>
                        <br/>
                        I'm both creative and analytical, and find frontend web development to be a wonderful mesh of what I love to do. I strive to create beautifully-designed and functional websites.
                        <br/>
                        <br/>
                        I love to learn, meet new people, and sip on good coffee! Some of my hobbies include yoga, playing backgammon and chess, and visiting art museums.
                        <br/>
                        <br/>
                        I value honesty and authenticity - these are qualities I admire in the people closest to me, as well as managers and colleagues. I try to live as authentically as I can.
                    </p>
                    <br/>
                </div>

            </div> 

        </Container>
    </div>
  );
}

export default About;