import React from "react";
import "./style.css";
import { Container } from "react-bootstrap";
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
            
            <span className="logo-home text-center">code by niki</span>
            
            <p className="home-p">
            Hi, I'm Niki.
            <br/>I’m a Frontend Web Developer, specializing in React and Wordpress.
            <br/>I'm also a Certified ScrumMaster and former project manager.

            <br/>It’s been <span className="duration">{quitYears}</span> year, <span className="duration">{quitMonths}</span> months, and <span className="duration">{quitDays}</span> days since I quit my job to study coding!

            </p>

      </div>

    </Container>
    </div>
  );
}

export default Home;