import React from "react";
import "./style.css"
import resumepdf from "../assets/Niki_Resume_Oct_2021.pdf"
import resumedoc from "../assets/Niki_Resume_Oct_2021_Simple.docx"
import { Container, Button } from "react-bootstrap";


function Resume(props) {
  return (
    <div className="bg">
    <Container>

      <h1 className="pageTitle text-center"><b>Resume</b></h1>

      <div className="button-group row">
        <Button className="buttonResume text-center" href={resumepdf}><i class="far fa-2x fa-file-pdf"></i> &nbsp; &nbsp;PDF Resume</Button>
        <Button className="buttonResume text-center" href={resumedoc}><i class="far fa-2x fa-file-word"></i> &nbsp; &nbsp;Simple Resume</Button>
      </div>
      
    </Container>
    </div>
  );
}

export default Resume;