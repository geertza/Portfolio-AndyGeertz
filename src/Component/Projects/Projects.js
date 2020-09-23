import React from 'react';
import {Figure, Button} from 'react-bootstrap';
import FigureCaption from 'react-bootstrap/FigureCaption'
import './projects.css'
import Nerd from '../../visuals/nerdverse.png'
import MyVerticallyCenteredModal from './Modal'

const test= "Nerd Verse"



function Intro() {
    const [modalShow, setModalShow] = React.useState(false);
   
    
   

  
      return (
          <div className='projects '>
                <h1  className='Protitle tShadow  '>Projects</h1>
                <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)} />
                  <br />
                  <div className='proGrid '>
                  <Figure  className='ProCluster'>
                                
                                <img src={Nerd} alt="" className='proImage ' />
                                <FigureCaption>
                                    <h2 className="tShadow">Nerd Verse</h2>
                                    <span><h5 className="tShadow">Basic Javascript</h5></span>
                                    <Button variant="warning" className='probutton'>Take a look</Button>
                                </FigureCaption>
                            
                            </Figure>
                            <Figure className='ProCluster' >
                                
                                <img src={Nerd} alt="" className='proImage ' />
                                <FigureCaption>
                                    <h2 className="tShadow">Nerd Verse</h2>
                                    <span><h5 className="tShadow">Basic Javascript</h5></span>
                                    <Button variant="warning" className='probutton'>Take a look</Button>
                                </FigureCaption>
                            
                            </Figure>
                            <Figure className='ProCluster'>
                                
                                <img src={Nerd} alt="" className='proImage ' />
                                <FigureCaption>
                                    <h2 className="tShadow">Nerd Verse</h2>
                                    <span><h5 className="tShadow">Basic Javascript</h5></span>
                                    <Button variant="warning" className='probutton'>Take a look</Button>
                                </FigureCaption>
                            
                            </Figure>
                            <Figure  className='ProCluster'>
                                
                                <img src={Nerd} alt="" className='proImage ' />
                                <FigureCaption>
                                    <h2 className="tShadow">Nerd Verse</h2>
                                    <span><h5 className="tShadow">Basic Javascript</h5></span>
                                    <Button variant="warning" className='probutton'>Take a look</Button>
                                </FigureCaption>
                            
                            </Figure>
                            <Figure className='ProCluster' >
                                
                                <img src={Nerd} alt="" className='proImage ' />
                                <FigureCaption>
                                    <h2 className="tShadow">Nerd Verse</h2>
                                    <span><h5 className="tShadow">Basic Javascript</h5></span>
                                    <Button variant="warning" className='probutton'>Take a look</Button>
                                </FigureCaption>
                            
                            </Figure>
                            <Figure className='ProCluster'>
                                
                                <img src={Nerd} alt="" className='proImage ' />
                                <FigureCaption>
                                    <h2 className="tShadow">Nerd Verse</h2>
                                    <span><h5 className="tShadow">Basic Javascript</h5></span>
                                    <Button variant="warning" className='probutton'>Take a look</Button>
                                </FigureCaption>
                            
                            </Figure>
                            
                  </div>
                   
                   {/* </Container>                          */}
                       
                    </div>
      )
    
}

export default Intro;