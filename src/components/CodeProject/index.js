import React, {useState} from "react";
import "./style.css";
import { Card, Button, Modal, Image } from "react-bootstrap";


function CodeProject(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(

      <>
        <Card className="text-center justify-content-center" id="portfolioCard" onClick={handleShow}>
          <div className="imageContainer">
            <Card.Img variant="top" src={props.sqimage} id="porfolioImg"/>
          </div>
          <div className="overlayContainer">
            <Card.ImgOverlay />
          </div>
        </Card>


        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{props.name}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className="projectdesc mb-4">
              <i>Date Created: {props.date}</i>
              <br/>
              <br/>
              {props.desc}

              <br/>
              <br/>

              <Image className="img-responsive w-100" src={props.image} />

              <br/>
              <br/>

              <Button variant="dark" className="linkBtn" href={props.vlink} target="_blank">View App</Button>
              <Button variant="dark" className="linkBtn" href={props.glink} target="_blank">View Github</Button>

              

            </div>
            



          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

      </>

  );
}


export default CodeProject;