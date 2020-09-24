import React from 'react';
import {Modal, Button, Col,Row} from 'react-bootstrap';
import projectInfo from "./ProjectInfo"
import "../../flicker.css"





class MyVerticallyCenteredModal extends React.Component {
  constructor() {
    super()

    this.state = {
      displayTitle:'',
      displayP1:'',
      displayP2:'',
      displayImg:'nerd',
      lang:[]
    };
  }
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.title !== prevProps.title) {
      let x = this.props.title
      const {title,p1,p2,img,lang}=projectInfo[x]
      this.setState({
        displayTitle: title, 
        displayP1:p1,
        displayP2:p2,
        displayImg:img,
        lang:lang  
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
        style={{zIndex:'9999'}}
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
            >{this.props.title}</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
        style={{
            background:"black"
        }}
        >
                <Row>
                  <Col md={8}>
                  <div 
                style={{
                width:'100%',
                height:'35vh',
                backgroundImage: `url(${this.props.image})`,
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat'
                }}
                />
                </Col>
                <Col md={4}> 
                <Button onClick={this.props.onHide} variant="secondary" style={{backgroundColor:'rgb(146, 146, 30)',color:"black",margin:"4% 6%"}} >GitHub Code</Button>
                <Button onClick={this.props.onHide} variant="secondary" style={{backgroundColor:'rgb(146, 146, 30)',color:"black",margin:"4% 6%"}} >Live Demo</Button>
                </Col>
                </Row>


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
          
        </Row>
        </Modal.Body>
        <Modal.Footer
        style={{
            background:"grey"
        }}
        > 
        <div>
      <ul>
          {this.state.lang.map(function (image){
            return <img key={image} src={require(`../../visuals/${image}.png`)} className="img-responsive" alt='' style={{height:'40px'}} />
            })
          }
        </ul>
      </div>
          
          <Button onClick={this.props.onHide} variant='secondary' >Close</Button>
        </Modal.Footer>
      </Modal>
     

        </div>

    );
  }
}

  
  export default MyVerticallyCenteredModal;