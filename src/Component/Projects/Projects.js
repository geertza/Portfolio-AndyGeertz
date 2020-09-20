import React  from 'react';
import {Figure, Row,Container,Col,Button} from 'react-bootstrap';
import FigureCaption from 'react-bootstrap/FigureCaption'
import './projects.css'
import Nerd from '../../visuals/nerdverse.png'






class Intro extends React.Component {
   
   
    
    render() {

  
      return (
          <div className='projects '>
                <h1  className='Protitle tShadow  '>Projects</h1>
              <Container >
                    <Row>
                        <Col sm={5} className='ProCluster '  >
                        <Figure >
                                
                                <img src={Nerd} alt="" className='proImage ' />
                                <FigureCaption>
                                    <h5 className="tShadow">Nerd Verse</h5>
                                    <span><h5 className="tShadow">Basic Javascript</h5></span>
                                    <Button variant="warning" className='probutton'>Take a look</Button>
                                </FigureCaption>
                            
                            </Figure>
                            
                        </Col>
                        <Col sm={2}>
                        </Col>
                        <Col sm={5} className='ProCluster  '>
                            
                        <Figure>
                                <img src={Nerd} alt="" className='proImage' />
                                <FigureCaption>
                                    <h5 className="tShadow">Nerd Verse</h5>
                                    <span><h5 className="tShadow">Basic Javascript</h5></span>
                                    <Button variant="warning" className='probutton'>Take a look</Button>
                                    
                                </FigureCaption>
                            </Figure>
                        </Col>
                    </Row>
                    <Row>            <Col sm={5} className='ProCluster ProNerd'  >
                        <Figure >
                                
                                <img src={Nerd} alt="" className='proImage ' />
                                <FigureCaption>
                                    <h5 className="tShadow">Nerd Verse</h5>
                                    <span><h5 className="tShadow">Basic Javascript</h5></span>
                                    <Button variant="warning" className='probutton'>Take a look</Button>
                                </FigureCaption>
                            
                            </Figure>
                            
                        </Col>
                        <Col sm={2}>
                        </Col>
                        <Col sm={5} className='ProCluster  '>
                            
                        <Figure>
                                <img src={Nerd} alt="" className='proImage' />
                                <FigureCaption>
                                    <h5 className="tShadow">Nerd Verse</h5>
                                    <span><h5 className="tShadow">Basic Javascript</h5></span>
                                    <Button variant="warning" className='probutton'>Take a look</Button>
                                    
                                </FigureCaption>
                            </Figure>
                        </Col>
                    </Row>
                   </Container>                         
                       
                    </div>
      )
    }
}

export default Intro;