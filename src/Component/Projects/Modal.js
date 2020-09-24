import React from 'react';
import {Modal, Button, Col,Row} from 'react-bootstrap';
import projectInfo from "./ProjectInfo"
import nerd from "../../visuals/nerdverse.png"
import "../../flicker.css"

class MyVerticallyCenteredModal extends React.Component {
  constructor() {
    super()

    this.state = {
      displayTitle:'',
      displayP1:'',
      displayP2:'',
      displayImg:'',
      lName:'',
      email:'',
    };
  }
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.title !== prevProps.title) {
      let x = this.props.title
      const {title,p1,p2,img}=projectInfo[x]
      this.setState({
        displayTitle: title, 
        displayP1:p1,
        displayP2:p2,
        displayImg:`url(${nerd})`  
     });
    }
  } 
  render(){     
    return (
       <div   >
         
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      
      >
        <Modal.Header   
        style={{
            background:"grey",
            paddingLeft: "30%",
            height:"50px"
        }}
         closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h2
                className="flicker"
               style={{
                textAlign:"center",
                fontSize:"45px",
                lineHeight:"25px"
            }}
            >{this.state.displayTitle}</h2>
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
                    {this.state.displayP1}
                    </p>
                    <h4>Technical Discription</h4>
                    <p style={{color:'white'}}>
                       {this.state.displayP2}
                    </p>
                </Col>
                <Col>
                
                <div 
                style={{
                width:'100%',
                height:'80%',
                backgroundImage: `${this.state.displayImg}`,
                backgroundSize:'contain',
                backgroundRepeat:'no-repeat'
                }}
                />
                <div style={{margin:" 0 10%",marginTop:"-5%"}}>
                <Button onClick={this.props.onHide} variant="secondary" style={{backgroundColor:'rgb(146, 146, 30)',color:"black",margin:"0 6%"}} >Live Demo</Button>
                <Button onClick={this.props.onHide} variant="secondary" style={{backgroundColor:'rgb(146, 146, 30)',color:"black",margin:"0 6%"}} >GitHub Code</Button>
                </div>
                </Col>
        </Row>
        </Modal.Body>
        <Modal.Footer
        style={{
            background:"grey"
        }}
        >
          <Button onClick={this.props.onHide} variant='secondary' >Close</Button>
        </Modal.Footer>
      </Modal>
        

        </div>

    );
  }
}

  
  export default MyVerticallyCenteredModal;