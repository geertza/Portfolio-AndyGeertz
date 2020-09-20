
import React from 'react';

import {Form,Row,Col,InputGroup,FormControl} from 'react-bootstrap'
import './contact.css'

export default function Contact() {
    
      return (
  
        <div className="contact " >
            <h1 style={{textAlign:'center'}}>Contact</h1>
            <Row>
                <Col sm={6} >
                    <h2>Andy Geertz</h2>
                    <h3>Phone: (406)539-1218</h3>
                    <h3>Email: Geertza@gmail.com</h3>
                </Col>
                <Col sm={6} >
                    <Form style={{align:'left'}}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label  > First Name</Form.Label>
                            <Form.Control name="firstName" placeholder="John" />
                        </Form.Group>
                            <Form.Group as={Col} controlId="formGridName">
                            <Form.Label> Last Name</Form.Label>
                        <Form.Control  name='lastName' placeholder="Smith" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail" style={{alignItems:'left'}}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Phone #</Form.Label>
                        <Form.Control type='tel' placeholder='(000)000-0000' />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Ext</Form.Label>
                            <Form.Control type="number"  />
                        </Form.Group>
                    </Form.Row>
                                            
                        <InputGroup>
                            <InputGroup.Prepend>
                            
                            </InputGroup.Prepend>
                            <FormControl as="textarea" aria-label="With textarea" />
                        </InputGroup>
                    </Form>
                </Col>
            </Row>
     
        </div>
      );
    }
