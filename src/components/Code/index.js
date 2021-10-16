import React, {useState} from "react"
import "./style.css"
// import getgrowing from "../assets/img/gardenapp_sq.png"
import restaurantfinder from "../assets/img/restaurantfinder_sq.png"
import flamegame from "../assets/img/flamegame_sq.png"
import codequiz from "../assets/img/codequiz_sq.png"
import eatdaburger from "../assets/img/eatdaburger_sq.png"
import workdayscheduler from "../assets/img/workdayscheduler_sq.png"
import weatherdashboard from "../assets/img/weathedashboard_sq.png"
import { Container } from "react-bootstrap";
import CodeProject from "../CodeProject"

// Array of Projects 

const CODE_DATA = [

  // {name: "Get Growing",
  // image: getgrowing,
  // desc: "A social platform that allows you to track your garden and share it with the world, using NoSQL & React.",
  // date: "2020-11-21",
  // vlink: "https://murmuring-dawn-18632.herokuapp.com/",
  // glink: "https://github.com/ryanbrowne360/GardenAppProject"},

  {name: "Flame Game",
  image: flamegame,
  desc: "An online e-commerce website with functioning add to cart and checkout features, using mySQL & Express.",
  date: "2020-10-29",
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
  date: "2020-10-26",
  vlink: "https://infinite-scrubland-34308.herokuapp.com/",
  glink: "https://github.com/nfereidooni/nf_node_express_handlebars"},

  {name: "Workday Scheduler",
  image: workdayscheduler,
  desc: "A web application to help schedule your workday using Moment.js to display the current time and local storage.",
  date: "2020-10-15",
  vlink: "https://nfereidooni.github.io/nf_workday_scheduler/",
  glink: "https://github.com/nfereidooni/nf_workday_scheduler"},

  {name: "Weather Dashboard",
  image: weatherdashboard,
  desc: "A weather dashboard that uses OpenWeather API to retrieve weather data for cities and maintains a search history.",
  date: "2020-10-11",
  vlink: "https://nfereidooni.github.io/nf_weather_dashboard/Assets/index.html",
  glink: "https://github.com/nfereidooni/nf_weather_dashboard"}
]

// Page Render Function

function Code(props) {

  const [sortType, setSortType] = useState('name-asc');

  function sortbyDateAsc(a, b) {
      return new Date(a.date) - new Date(b.date);
    };
  
  function sortbyDateDesc(a, b) {
      return new Date(b.date) - new Date(a.date);
    };

  function sortbyNameAsc(a, b) {
      if (b.name < a.name) {
        return 1;
      }
      if (b.name > a.name) {
        return -1;
      }
      return 0; 
    }  

    function sortbyNameDesc(a, b) {
      if (b.name > a.name) {
        return 1;
      }
      if (b.name < a.name) {
        return -1;
      }
      return 0; 
    }  

// Page HTML

let sortFunction;

if (sortType === "name-asc") {
  sortFunction = sortbyNameAsc
      }
else if (sortType === "date-asc") {
  sortFunction = sortbyDateAsc
      }
else if (sortType === "name-desc") {
  sortFunction = sortbyNameDesc
      }
else if (sortType === "date-desc") {
  sortFunction = sortbyDateDesc
      }

const sortedData = CODE_DATA.sort(sortFunction)

    return(
  
    <div className="bg">
    <Container>

      <h1 className="pageTitle text-center"><b>Code</b></h1>
        
      <select className="sortDropdown" id="sort-dropdown" onChange={(e) => setSortType(e.target.value)}>
          <option value="name-asc">&darr; Name</option>
          <option value="date-asc">&darr; Date</option>
          <option value="name-desc">&uarr; Name</option>
          <option value="date-desc">&uarr; Date</option>
      </select>

        <div className="row portfolioContainer">
        
        {sortedData.map(project => (
       <div className="col-xs-12 col-md-6 col-lg-4">
                <CodeProject 
                name={project.name}
                image={project.image}
                desc={project.desc}
                date={project.date}
                vlink={project.vlink}
                glink={project.glink}
                />
        </div>
        ))}
          
        </div>

    </Container>
    </div>
  );
}

export default Code;