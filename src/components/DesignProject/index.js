import React, {useState} from "react"
import "./style.css";
import { Carousel, Card, Modal, Button } from "react-bootstrap";


function DesignProject(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return(

    <>
          <Card className="text-center justify-content-center" id="portfolioCardDes" onClick={handleShow}>
            <div className="imageContainer">
              <Card.Img variant="top" src={props.image} id="porfolioImg"/>
            </div>
            <div className="overlayContainer">
              <Card.ImgOverlay />
            </div>
          </Card>

          
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{props.name}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <div className="projectdesc mb-4">
                <i>Date Created: {props.date}</i>
                <br/>
                <br/>
                {props.desc}
              </div>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={props.img1}
                    alt="Portfolio 1"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={props.img2}
                    alt="Portfolio 2"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={props.img3}
                    alt="Portfolio 3"
                  />
                </Carousel.Item>
              </Carousel>


            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

  </>
  );
}

export default DesignProject;