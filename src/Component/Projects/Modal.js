import React from 'react';
import {Modal, Button, Col,Row} from 'react-bootstrap';

import nerdverse from "../../visuals/nerdverse.png"
import "../../flicker.css"


function MyVerticallyCenteredModal(props) {
    const modalShow = React.useState(true);
    return (
       <div   >
      <Modal
     show={modalShow}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      
      >
        <Modal.Header   
        style={{
            background:"grey",
            paddingLeft: "30%",
            height:"6vw"
        }}
         closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h2
                className="flicker"
               style={{
                textAlign:"center",
                fontSize:"4vw"
            }}
            >Nerd Verse</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
        style={{
            background:"black"
        }}
        >
            <Row>
                <Col>
                    <h4>Basic Discription</h4>
                    <p style={{color:'white'}}>
                    Basic trivia game about popular science-fiction tv-shows and movies.
                    Starts out with a dialogue introduction then asks multiply choice questions.
                    </p>
                    <h4>Technical Discription</h4>
                    <p style={{color:'white'}}>
                        Timed code quiz with multiple-choice questions. Featuring dynamically updated
                         HTML and CSS powered by JavaScript code, with a clean, polished, and responsive user interface.
                    </p>
                </Col>
                <Col>
                {/* <div style={{
                   width:'20vw',
                   height:'100%',
                   overflow:'hidden'

                }} /> */}
                <div 
                style={{
                width:'100%',
                height:'80%',
                backgroundImage:`url(${nerdverse})`,
                backgroundSize:'contain',
                backgroundRepeat:'no-repeat'
                }}
                />
                <div style={{margin:" 0 10%",marginTop:"-5%"}}>
                <Button onClick={props.onHide} variant="secondary" style={{backgroundColor:'rgb(146, 146, 30)',color:"black",margin:"0 6%"}} >Live Demo</Button>
                <Button onClick={props.onHide} variant="secondary" style={{backgroundColor:'rgb(146, 146, 30)',color:"black",margin:"0 6%"}} >GitHub Code</Button>
                </div>
                </Col>
        </Row>
        </Modal.Body>
        <Modal.Footer
        style={{
            background:"grey"
        }}
        >
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>


        </div>

    );
  }
  

  
  export default MyVerticallyCenteredModal;