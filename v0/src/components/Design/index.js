import React, {useState} from "react"
import "./style.css"
import informphysio from "../assets/img/inform_website_sq.png"
import lmconsulting from "../assets/img/lmc_website_sq.png"
import votenh from "../assets/img/nh_postcard_sq.png"
import perimatthew from "../assets/img/perimatthew_website_sq.png"
import { Container } from "react-bootstrap";
import DesignProject from "../DesignProject"

// Import gallery images

import inform1 from "../assets/img/inform_website.PNG"
import inform2 from "../assets/img/inform_website2.PNG"
import inform3 from "../assets/img/inform_website3.PNG"
import nh1 from "../assets/img/nh_website.PNG"
import nh2 from "../assets/img/nh_bookletp1.PNG"
import nh3 from "../assets/img/nh_postcard.PNG"
import lm1 from "../assets/img/lmc_website.png"
import lm2 from "../assets/img/lmc_website2.PNG"
import lm3 from "../assets/img/lmc_website3.PNG"
import pm1 from "../assets/img/perimatthew_website.PNG"
import pm2 from "../assets/img/perimatthew_website2.PNG"
import pm3 from "../assets/img/perimatthew_website3.PNG"

// Array of Projects 

const DESIGN_DATA = [

  {name: "Inform Physio",
  image: informphysio,
  desc: "Website design and custom photography for a physiotherapy clinic in Vaughan.",
  date: "2013-05-01",
  img1: inform1,
  img2: inform2,
  img3: inform3},

  {name: "Elect Natalie Hart",
  image: votenh,
  desc: "Website, postcard, and brochure design for Mississauga municipal election candidate Natalie Hart.",
  date: "2018-09-01",
  img1: nh1,
  img2: nh2,
  img3: nh3},

  {name: "Laval Martin Consulting",
  image: lmconsulting,
  desc: "Website design for a burnout prevention consulting services company.",
  date: "2021-08-01",
  img1: lm1,
  img2: lm2,
  img3: lm3},

  {name: "Peri Matthew, Author",
  image: perimatthew,
  desc: "Website design, eBook and 3D renderings for author Peri Matthew.",
  date: "2020-05-01",
  img1: pm1,
  img2: pm2,
  img3: pm3}
]

// Page Render Function

function Design(props) {

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

const sortedData = DESIGN_DATA.sort(sortFunction)

    return(
  
    <div className="bg">
    <Container>

      <h1 className="pageTitle text-center"><b>Design</b></h1>
        
      <select className="sortDropdown" id="sort-dropdown" onChange={(e) => setSortType(e.target.value)}>
          <option value="name-asc">&darr; Name</option>
          <option value="date-asc">&darr; Date</option>
          <option value="name-desc">&uarr; Name</option>
          <option value="date-desc">&uarr; Date</option>
      </select>

        <div className="row portfolioContainer">
        
        {sortedData.map(project => (
       <div className="col-xs-12 col-md-6 col-lg-4">
                <DesignProject 
                name={project.name}
                image={project.image}
                desc={project.desc}
                date={project.date}
                img1={project.img1}
                img2={project.img2}
                img3={project.img3}
                />
        </div>
        ))}
          
        </div>

    </Container>
    </div>
  );
}

export default Design;