import React from "react";
import "./style.css";
import portrait from "../assets/img/IMG_Niki.jpg"
import resume from "../assets/nf_resume.pdf"
import { Container, Button, Image } from "react-bootstrap";


function About(props) {
  return(
    <Container>
      <div className="main">

        <div className="row">

            <div className="col-1"></div>

            <h1><b>About Me</b></h1>
            <div className="media">

                <div className="col-md-1"></div>

                <div className="col-xs-10 col-md-7">

                <Image className="headshot float-left" width="250" alt="Portrait of Niki Fereidooni" src={portrait} roundedCircle fluid />
                
                <div className="media-body">
                  
                    <p className="media-p1">
                        <b>[Currently Located in Toronto, Canada]</b>
                        <br/>
                        <br/>
                        Niki is Full Stack Web Developer, with a love for learning, good coffee, and code! Niki began her coding journey very early on (MySpace days) in the mid-2000s. She was also very interested in photography, film, and graphic design - and decided to pursue her Bachelor's Degree at Ryerson University in Toronto, studying Graphic Communications Management. In this program, she had the opportunity to learn about the graphic design, commercial printing, and packaging industries. She also took a couple of courses during this time to brush up on her coding skills (HTML/CSS/JS).
                    </p>
                    <p className="media-p2">
                        Since starting university, Niki has worked on several freelance projects for both companies and personal brands, including services such as brand development, print design, ebook design, web design and social media management.
                    </p>
                    <p className="media-p3">
                        Her first job in the industry was as a Project Coordinator Intern at Jar Creative in Toronto, at that time it was primarly a web development agency, where she was exposed to small agency structure (many hats, yay!) as well as the project management side. Following this, she spent 3 years working for Schawk (a division of SGK) as a Client Coordinator, managing graphic design and prepress projects for the packaging and advertising industries. This opportunity allowed her to further pursue her interests in project management and client relations by acting as a gate keeper between the client and production.
                    </p>
                    <p className="media-p4">
                        In 2017, Niki joined the Loblaw Brands team as Assistant Packaging Manager, where she was responsible for data integrity around the company's product and packaging line. She also had an opportunity to work with printers managing the Loblaw Brand Printer program, as well as collaborating with the sourcing and procurement teams. During her last year at Loblaw, she joined the PLM (Product Lifecycle Management Team) where she was involved in the UX and development of a new system to manage the product lifecycle from conception to production launch.
                    </p>
                    <p className="media-p5">
                        In 2020, Niki decided to pursue her interests in web development by earning a certificate in full stack web development from the University of Toronto, where she developed new skills such as Javascript, CSS, Node.js, React.js, mySQL and NoSQL. She is eager to leverage her graphic arts and technical background to build beautifully designed websites and applications.
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

export default About;