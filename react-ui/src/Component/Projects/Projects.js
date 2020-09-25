import React from 'react';
import {Figure, Button} from 'react-bootstrap';
import FigureCaption from 'react-bootstrap/FigureCaption'
import './projects.css'

import MyVerticallyCenteredModal from './Modal'

//---------images------------
import Nerd from '../../visuals/nerdverse.png'
import Sloshed from '../../visuals/sloshed.png'
import Burger from '../../visuals/burger-time.png'


function Intro() {
    const [modalShow, setModalShow] = React.useState(false);
    const [title, setTitle] = React.useState('nerd');

    

  
    return (
        <div className='projects '> 
            <h1  className='Protitle ' style={{fontSize:'8vw'}}>Projects</h1>
                <MyVerticallyCenteredModal
                    title={title}
                    show={modalShow}
                    onHide={() => 
                    setModalShow(false)} />
                    <br />
                    <div className='proGrid '>
                        {/* ---------------------nerdverse------------------- */}
                        <Figure className='ProCluster' >
                            <img src={Nerd} alt="" className='proImage ' />
                            <FigureCaption>
                                <h4 >Nerd Verse</h4>
                                <Button variant="warning" className='probutton'
                                    onClick={() =>{ 
                                    setTitle('nerdverse')
                                    setModalShow(true)}}>
                                    Take a look
                                </Button>
                            </FigureCaption>
                        </Figure>
                           {/* ----------------------Sloshed----------------                  */}
                           <Figure className='ProCluster' >
                            <img src={Sloshed} alt="" className='proImage ' />
                            <FigureCaption>
                                <h4 className="tShadow">The Sloshed Guide</h4>
                               
                                <Button variant="warning" className='probutton'
                                    onClick={() =>{ 
                                    setTitle('sloshed')
                                    setModalShow(true)}}>
                                    Take a look
                                </Button>
                            </FigureCaption>
                        </Figure>
                        {/* -----------------burger-------------- */}
                        <Figure className='ProCluster' >
                            <img src={Burger} alt="" className='proImage ' />
                            <FigureCaption>
                                <h4 className="tShadow">Burger Time 2</h4>
                                <Button variant="warning" className='probutton'
                                    onClick={() =>{ 
                                    setTitle('burger')
                                    setModalShow(true)}}>
                                    Take a look
                                </Button>
                            </FigureCaption>
                        </Figure>
                     
                    </div>
                   
             
                       
                    </div>
      )
    
}

export default Intro;