
import React from 'react';
import {Form,Row,InputGroup,FormControl,Button} from 'react-bootstrap'

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
      
        
        <div className="contact " >
          <br /><br />
          <h2 className='love'>Love to hear your thoughts..</h2>
          
          <Row  className="contactMe"  >
            <a className='conMe'  href="tel:1-406-539-1218">1-(406)539-1218</a>
            <a className='conMe' href="mailto:webmaster@example.com">Geertza@gmail.com</a>
          </Row>
          <div className='bg'>
          <div  className='contactCard'>
            <Form className='contactForm'
              onSubmit={this.handleSubmit}
            >
            <Form.Row>
              <Form.Group    controlId="formGridfirstName" className='mr-auto' >
                First Name
                <Form.Control placeholder="John" onChange={this.onHandleChange} name='fName' />
              </Form.Group>
              <Form.Group   controlId="formGridLastName"   className='mr-auto'>
                Last Name
                <Form.Control   placeholder="Smith" name='lName' onChange={this.onHandleChange}/>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group  controlId="formGridEmail" className='mr-auto' >
                <Form.Label >Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={this.onHandleChange} name='email'  />
              </Form.Group>
             
              <Form.Group controlId="formGridPhone"  className='mr-auto'>
                <Form.Label >Phone #</Form.Label>
                <Form.Control type='tel' placeholder='(000)000-0000'  onChange={this.onHandleChange} name='phone'/>
              </Form.Group>
              
            </Form.Row>
             <InputGroup>
                <InputGroup.Prepend>
                </InputGroup.Prepend>
                <FormControl 
                  as="textarea"
                  aria-label="With textarea"
                  name="text"
                  onChange={this.onHandleChange}
                  className="text"
                />
              </InputGroup  >
              <Button  type="submit"  variant="secondary" className='submit'  >
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
        
      );
    }
  }

  export default Contact 


