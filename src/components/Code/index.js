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


function Code(props) {
  return(
    <Container>
      <div className="main">
        <div className="row">
          <div className="col-1"></div>
          <h1><b>Portfolio</b></h1>
        </div>
        <div className="row portfolioContainer">

        <div className="col-xs-12 col-md-6 col-lg-4">
          <Project 
          name="Get Growing"
          image={getgrowing}
          desc="A social platform that allows you to track your garden and share it with the world, using NoSQL & React."
          vlink="https://murmuring-dawn-18632.herokuapp.com/"
          glink="https://github.com/ryanbrowne360/GardenAppProject"
          />
        </div>

        <div className="col-xs-12 col-md-6 col-lg-4">
          <Project 
          name="Flame Game"
          image={flamegame}
          desc="An online e-commerce website with functioning add to cart and checkout features, using mySQL & Express."
          vlink="https://tranquil-temple-78360.herokuapp.com/"
          glink="https://github.com/SSamoridny/Project-2-Flame-Game"
          />
        </div>

        <div className="col-xs-12 col-md-6 col-lg-4">
          <Project 
          name="What's for Dinner?"
          image={restaurantfinder}
          desc="An web application to help figure out life's most important question, using the Yelp and Edamam APIs."
          vlink="https://ryanbrowne360.github.io/Project1/"
          glink="https://github.com/ryanbrowne360/Project1"
          />
        </div>

        <div className="col-xs-12 col-md-6 col-lg-4">
          <Project 
          name="Code Quiz"
          image={codequiz}
          desc="An interactive timed coding quiz to test your skills, with a highscores page & built using Jquery and local storage."
          vlink="https://nfereidooni.github.io/nf_code_quiz/"
          glink="https://github.com/nfereidooni/nf_code_quiz"
          />
        </div>

        <div className="col-xs-12 col-md-6 col-lg-4">
          <Project 
          name="Eat-Da-Burger"
          image={eatdaburger}
          desc="A burger-eating app where you can add and eat custom burgers, using mySQL and Express Handlebars."
          vlink="https://infinite-scrubland-34308.herokuapp.com/"
          glink="https://github.com/nfereidooni/nf_node_express_handlebars"
          />
        </div>

        <div className="col-xs-12 col-md-6 col-lg-4">
          <Project 
          name="Workday Scheduler"
          image={workdayscheduler}
          desc="A web application to help schedule your workday using Moment.js to display the current time and local storage."
          vlink="https://nfereidooni.github.io/nf_workday_scheduler/"
          glink="https://github.com/nfereidooni/nf_workday_scheduler"
          />
        </div>

        <div className="col-xs-12 col-md-6 col-lg-4">
          <Project 
          name="Weather Dashboard"
          image={weatherdashboard}
          desc="A weather dashboard that uses OpenWeather API to retrieve weather data for cities and maintains a search history."
          vlink="https://nfereidooni.github.io/nf_weather_dashboard/Assets/index.html"
          glink="https://github.com/nfereidooni/nf_weather_dashboard"
          />
        </div>
          
      </div>
      </div>

    </Container>
  );
}

export default Code;