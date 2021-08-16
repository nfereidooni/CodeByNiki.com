import React from "react";
import "./style.css";
import { Container, Row, Image } from "react-bootstrap";
import portrait from "../assets/img/IMG_Niki.jpg"
import moment from "moment";

const QUIT_DAY = moment("2020-09-04");

function Home(props) {
  const difference = moment().diff(QUIT_DAY)
  const duration = moment.duration(difference);
  const quitDays = duration.days()
  const quitMonths = duration.months()
  const quitYears = duration.years()

  return(
    <div className="bg">
    <Container>
      <div className="main-home">               
            
            <Row className="justify-content-md-center">
            <Image className="headshot-home" width="150" alt="Portrait of Niki Fereidooni" src={portrait} roundedCircle fluid />
            </Row>
            <h1 className="home-h1">Software Development</h1>
            <p className="home-p">
            I’m a frontend web developer, specializing in React and Wordpress.
            <br/>I'm also a Certified ScrumMaster and former project manager.

            <br/>It’s been <span className="duration">{quitYears}</span> years, <span className="duration">{quitMonths}</span> months, and <span className="duration">{quitDays}</span> days since I quit my job to study coding!

            </p>



        

  
      </div>

    </Container>
    </div>
  );
}

export default Home;