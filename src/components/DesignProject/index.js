import React, {useState} from "react"
import "./style.css";
import { Carousel, Card, Modal, Button } from "react-bootstrap";


function DesignProject(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return(

    <>
          <Card className="text-center justify-content-center" id="portfolioCard">
            <div className="imageContainer">
              <Card.Img variant="top" src={props.image} id="porfolioImg" />
            </div>
            <div className="overlayContainer">
              <Card.ImgOverlay>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text className="card-text">{props.desc}</Card.Text>
                <Card.Text className="card-date">Date Created: {props.date}</Card.Text>
                <Button variant="dark" className="linkBtn" onClick={handleShow}>View</Button>
              </Card.ImgOverlay>
            </div>
          </Card>

          
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{props.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>

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

// previous card
// <Container>
// <Card className="text-center justify-content-center" id="portfolioCard">
//   <div id="imageContainer">
//     <Card.Img variant="top" src={props.image} id="porfolioImg" />
//   </div>
//   <Card.Body>
//     <Card.Title>{props.name}</Card.Title>
//     <Card.Text className="card-text">{props.desc}</Card.Text>
//     <Button variant="dark" className="linkBtn" href={props.vlink}>View</Button>
//     <Button variant="dark" className="linkBtn" href={props.glink}>Github</Button>
//   </Card.Body>
// </Card>
// </Container>
export default DesignProject;