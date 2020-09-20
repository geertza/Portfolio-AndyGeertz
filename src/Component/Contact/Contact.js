
import React from 'react';

import {Form,Row,Col,InputGroup,FormControl,Button} from 'react-bootstrap'
import './contact.css'
import sat from '../../visuals/sat.png'
export default function Contact() {
    
      return (
        <div className='cutoff'>
            <img   src={sat} alt='' className='sat'></img>
            <div className='bottom'>
                
                <div className="contact " >
                    
                    <h1 style={{textAlign:'center',color:'gold'}}>Contact</h1>
                    <Row>
                        <Col sm={6} className="contactMe"  >
                        
                            <br /><br />
                            <h3 >Phone:</h3>
                            <a href="tel:1-406-539-1218">(406)539-1218</a>
                            <br /><br />
                            <h3>Email:</h3>
                            <a href="mailto:webmaster@example.com">Geertza@gmail.com</a>
                        </Col>
                        <Col sm={6} >
                            <Form className='contactForm' >
                            <Form.Row>
                                <Form.Group   as={Col} controlId="formGridName" className='mr-auto'>
                                    <Form.Label style={{color:'gold'}} > First Name</Form.Label>
                                    <Form.Control name="firstName" placeholder="John" />
                                </Form.Group>
                                
                                <Form.Group  as={Col} controlId="formGridName"   className='mr-auto'>
                                    <Form.Label style={{color:'gold'}}> Last Name</Form.Label>
                                    <Form.Control  name='lastName' placeholder="Smith" />
                                </Form.Group>
                            </Form.Row>
                            
                            <Form.Row>
                                <Form.Group  controlId="formGridEmail" className='mr-auto'>
                                    <Form.Label style={{color:'gold'}}>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email"  />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail"  className='mr-auto'>
                                    <Form.Label style={{color:'gold'}}>Phone #</Form.Label>
                                    <Form.Control type='tel' placeholder='(000)000-0000'  />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label style={{color:'gold'}}>Ext</Form.Label>
                                    <Form.Control type="text"  />
                                </Form.Group>
                            </Form.Row>
                                                    
                                <InputGroup>
                                    <InputGroup.Prepend>
                                    
                                    </InputGroup.Prepend>
                                    <FormControl as="textarea" aria-label="With textarea" style={{height:"20vh",overflow:'scroll'}} />
                                </InputGroup>
                                <Button variant="secondary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>
            
                </div>
            </div>
        </div>
    );
}
