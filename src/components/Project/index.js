import React from "react";
import "./style.css";
import { Container, Card, Button } from "react-bootstrap";


function Project(props) {
  return(
    <Container>
          <Card className="text-center justify-content-center" id="portfolioCard">
            <div id="imageContainer">
              <Card.Img variant="top" src={props.image} id="porfolioImg" />
            </div>
            <Card.Body>
              <Card.Title>{props.name}</Card.Title>
              <Card.Text className="card-text">{props.desc}</Card.Text>
              <Button variant="dark" className="linkBtn" href={props.vlink}>View</Button>
              <Button variant="dark" className="linkBtn" href={props.glink}>Github</Button>
            </Card.Body>
          </Card>
    </Container>
  );
}

export default Project;