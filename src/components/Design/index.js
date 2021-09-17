import React from "react";
import "./style.css"
import getgrowing from "../assets/img/gardenapp.png"
import restaurantfinder from "../assets/img/restaurantfinder.PNG"
import flamegame from "../assets/img/flamegame.PNG"
import codequiz from "../assets/img/codequiz.PNG"
import eatdaburger from "../assets/img/eatdaburger.PNG"
import workdayscheduler from "../assets/img/workdayscheduler.PNG"
import weatherdashboard from "../assets/img/weathedashboard.PNG"
import { Container } from "react-bootstrap";
import Project from "../Project"


function Design(props) {
  return(
    <div className="bg">
    <Container>

      <h1 className="pageTitle text-center"><b>Design</b></h1>
      
      <p className="comingSoon text-center"><b><i>Coming Soon</i></b></p>
      

    </Container>
    </div>
  );
}

export default Design;