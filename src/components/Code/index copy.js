import React, {useState} from "react"
import "./style.css"
import getgrowing from "../assets/img/gardenapp_sq.png"
import restaurantfinder from "../assets/img/restaurantfinder_sq.png"
import flamegame from "../assets/img/flamegame_sq.png"
import codequiz from "../assets/img/codequiz_sq.png"
import eatdaburger from "../assets/img/eatdaburger_sq.png"
import workdayscheduler from "../assets/img/workdayscheduler_sq.png"
import weatherdashboard from "../assets/img/weathedashboard_sq.png"
import { Container, Dropdown} from "react-bootstrap";
import Project from "../Project"

// Array of Projects 

const CODE_DATA = [

  {name: "Get Growing",
  image: getgrowing,
  desc: "A social platform that allows you to track your garden and share it with the world, using NoSQL & React.",
  date: "2020-11-21",
  vlink: "https://murmuring-dawn-18632.herokuapp.com/",
  glink: "https://github.com/ryanbrowne360/GardenAppProject"},

  {name: "Flame Game",
  image: flamegame,
  desc: "An online e-commerce website with functioning add to cart and checkout features, using mySQL & Express.",
  date: "2020-09-29",
  vlink: "https://tranquil-temple-78360.herokuapp.com/",
  glink: "https://github.com/SSamoridny/Project-2-Flame-Game"},

  {name: "What's for Dinner?",
  image: restaurantfinder,
  desc: "An web application to help figure out life's most important question, using the Yelp and Edamam APIs.",
  date: "2020-09-29",
  vlink: "https://ryanbrowne360.github.io/Project1/",
  glink: "https://github.com/ryanbrowne360/Project1"},

  {name: "Code Quiz",
  image: codequiz,
  desc: "An interactive timed coding quiz to test your skills, with a highscores page & built using Jquery and local storage.",
  date: "2020-09-22",
  vlink: "https://nfereidooni.github.io/nf_code_quiz/",
  glink: "https://github.com/nfereidooni/nf_code_quiz"},

  {name: "Eat-Da-Burger",
  image: eatdaburger,
  desc: "A burger-eating app where you can add and eat custom burgers, using mySQL and Express Handlebars.",
  date: "2020-10-11",
  vlink: "https://infinite-scrubland-34308.herokuapp.com/",
  glink: "https://github.com/nfereidooni/nf_node_express_handlebars"},

  {name: "Workday Scheduler",
  image: workdayscheduler,
  desc: "A web application to help schedule your workday using Moment.js to display the current time and local storage.",
  date: "2020-10-06",
  vlink: "https://nfereidooni.github.io/nf_workday_scheduler/",
  glink: "https://github.com/nfereidooni/nf_workday_scheduler"},

  {name: "Weather Dashboard",
  image: weatherdashboard,
  desc: "A weather dashboard that uses OpenWeather API to retrieve weather data for cities and maintains a search history.",
  date: "2020-11-10",
  vlink: "https://nfereidooni.github.io/nf_weather_dashboard/Assets/index.html",
  glink: "https://github.com/nfereidooni/nf_weather_dashboard"}
]

// Sorting Functions

// Sort by Date Ascending Function

function sortbyDateAsc() {

    const items = CODE_DATA.sort((a,b) => {
      return new Date(b.date) - new Date(a.date);
    });
}

// Sort by Date Descending Function

function sortbyDateDesc() {

    const items = CODE_DATA.sort((a,b) => {
      return new Date(a.date) - new Date(b.date);
    });
}

// Sort by Name Ascending Function

function sortbyNameAsc() {

  const items = CODE_DATA.sort((a,b) => {
    if (b.name < a.name) {
      return 1;
    }
    if (b.name > a.name) {
      return -1;
    }
    return 0;
  });

  console.log('The link was clicked.');
}

// Sort by Name Descending Function

function sortbyNameDesc() {

  const items = CODE_DATA.sort((a,b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  
  console.log(items)

}

// Page Render Function

function Code(props) {
  const [sortFunction, setSortFunction] = useState([])

  const handleChange=(event)=>{
    if (event.target.value === "name-asc") {
      setSortFunction(sortbyNameAsc());
    } else if (event.target.value === "name-desc") {
      setSortFunction(sortbyNameDesc());
    } else if (event.target.value === "date-asc") {
      setSortFunction(sortbyDateAsc());
    } else if (event.target.value === "date-desc") {
      setSortFunction(sortbyDateDesc());
    }
    }
  // Render Projects

  const renderProjects = () =>   {
    const sortedProjects = CODE_DATA.sort(
      // sort compare
    )
    
    console.log(sortFunction)

    return(
      sortedProjects.map(function(project){
      return <div className="col-xs-12 col-md-6 col-lg-4">
                <Project 
                name={project.name}
                image={project.image}
                desc={project.desc}
                date={project.date}
                vlink={project.vlink}
                glink={project.glink}
                />
              </div>;
              })
          )}


    
// Page HTML

  return(
    <div className="bg">
    <Container>

        <h1 className="pageTitle text-center"><b>Code</b></h1>
        
    <select className="sortDropdown" id="sort-dropdown" onChange={handleChange}>
        <option value="">--Sort by--</option>
        <option value="name-asc">Name &darr;</option>
        <option value="date-asc">Date &darr;</option>
        <option value="name-desc">Name &uarr;</option>
        <option value="date-desc">Date &uarr;</option>
    </select>

        <div className="row portfolioContainer">
        
        {sortFunction}
        
        {renderProjects()}
          
        </div>
    </Container>
    </div>
  );
}

export default Code;

        {/* <Dropdown className="sortDropdown" onSelect={handleSelect}>
        <Dropdown.Toggle variant="dark" id="sort-dropdown">
          Sort by
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>Name &darr;</Dropdown.Item>
          <Dropdown.Item>Date Created &darr;</Dropdown.Item>
          <Dropdown.Item>Name &uarr;</Dropdown.Item>
          <Dropdown.Item>Date Created &uarr;</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown> */}
