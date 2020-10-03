
import React from 'react';

import {Form,Row,Col,InputGroup,FormControl,Button} from 'react-bootstrap'
import './contact.css'

class Contact extends React.Component {
  constructor() {
    super()

    this.state = {
      text:'',
      phone:'',
      ext:'',
      fName:'',
      lName:'',
      email:'',
      message: {
         body: ''
      }
    };

    this.onHandleChange = this.onHandleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onHandleChange(event) {
    const name = event.target.getAttribute('name');
    
    this.setState({
       [name]: event.target.value 
   
    });
     this.setState({
      message: { ...this.state.message, body: 
       `name ${this.state.fName}  ${this.state.lName}
       email ${this.state.email}
       phone ${this.state.phone}  ${this.state.ext}
       text  ${this.state.text}` 
      }
    })
   
  }

  handleSubmit(event) {
     event.preventDefault();
   
  
 
    this.setState({ submitting: true });
    fetch('/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.message)
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          this.setState({
            error: false,
            submitting: false,
            message: {
              body: ''
            }
          });
        } else {
          this.setState({
            error: true,
            submitting: false
          });
        }
      });
  }
  render() {
      return (
        <div className='cutoff'>
           
            <div className='curve' >
                <div className='bg'>
                
                    <div className="contact " >
                        <br />
                        <h2 style={{textAlign:'center',color:'gold',fontSize:'xxx-large'}}>Contact</h2>
                        <h4 style={{textAlign:'center',color:'gold'}}>Feedback is always appreciated!</h4>
                        <Row>
                            <Col sm={6} className="contactMe"  >
                            
                                <br /><br />
                                
                                <a href="tel:1-406-539-1218">1-(406)539-1218</a>
                                <br /><br />
                                
                                <a href="mailto:webmaster@example.com">Geertza@gmail.com</a>
                            </Col>
                            <Col sm={6} className='contactCard'>
                                <Form className='contactForm'
                                 onSubmit={this.handleSubmit}
                                >
                                <Form.Row>
                                    <Form.Group   as={Col} controlId="formGridName" className='mr-auto'>
                                        <Form.Label style={{color:'gold'}} > First Name</Form.Label>
                                        <Form.Control placeholder="John" onChange={this.onHandleChange} name='fName' />
                                    </Form.Group>
                                    
                                    <Form.Group  as={Col} controlId="formGridName"   className='mr-auto'>
                                        <Form.Label style={{color:'gold'}}> Last Name</Form.Label>
                                        <Form.Control   placeholder="Smith" name='lName' onChange={this.onHandleChange}/>
                                    </Form.Group>
                                </Form.Row>
                                
                                <Form.Row>
                                    <Form.Group  controlId="formGridEmail" className='m-auto' style={{width:'70%'}}>
                                        <Form.Label style={{color:'gold'}}>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" onChange={this.onHandleChange} name='email'  />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridEmail"  className='mr-auto'>
                                        <Form.Label style={{color:'gold'}}>Phone #</Form.Label>
                                        <Form.Control type='tel' placeholder='(000)000-0000'  onChange={this.onHandleChange} name='phone'/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label style={{color:'gold'}}>Ext</Form.Label>
                                        <Form.Control type="text" onChange={this.onHandleChange} name='ext'/>
                                    </Form.Group>
                                </Form.Row>
                                                        
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                        
                                        </InputGroup.Prepend>
                                        <FormControl 
                                          as="textarea"
                                           aria-label="With textarea"
                                            style={{height:"20vh",overflow:'scroll',marginBottom:'5px'}}
                                            name="text"
                                             onChange={this.onHandleChange}
                                            />
                                    </InputGroup  >
                                    <Button variant="secondary" type="submit" style={{width:'100%',color:'gold'}} >
                                        Submit
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }

  export default Contact 


