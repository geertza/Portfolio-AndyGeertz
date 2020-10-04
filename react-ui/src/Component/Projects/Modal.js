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
      lang:[],
      git:'',
      demo:'',
      img:'sunLogo.png'
    };
  }
  
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.title !== prevProps.title) {
      let x = this.props.title
      const {title,p1,p2,img,lang,git,demo}=projectInfo[x]
      this.setState({
        displayTitle: title, 
        displayP1:p1,
        displayP2:p2,
        lang:lang,
        git: git,
        demo: demo,
        img: img  
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
            height:"auto"
           
        }}
         closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h2
               
               style={{
                textAlign:"center",
                fontSize:"45px",
                lineHeight:"25px",
                width:"100%",
                position:"relative",
                left:'-10%'
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
                  <Col md={8}>
                  <img src={require(`../../visuals/${this.state.img}`)} alt=''
                style={{
                width:'100%',
                height:'auto',
                  
                }}
                />
                </Col>
                <Col md={4}> 
                <Button onClick={this.props.onHide} variant="secondary" style={{backgroundColor:'rgb(146, 146, 30)',color:"black",margin:"4% 6%",textShadow:"grey .5px .5px"}} href={this.state.git}>GitHub Code</Button>
                <Button onClick={this.props.onHide} variant="secondary" style={{backgroundColor:'rgb(146, 146, 30)',color:"black",margin:"4% 6%",textShadow:"grey .5px .5px"}} href={this.state.demo}>Live Demo</Button>
                </Col>
                </Row>


            <Row>
                <Col>
                    <h5>Basic Description</h5>
                    <p style={{color:'white'}}>
                    {this.state.displayP1}
                    </p>
                    <h5>Technical Description</h5>
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