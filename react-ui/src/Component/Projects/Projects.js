import React from 'react';
import {Figure, Button} from 'react-bootstrap';
import FigureCaption from 'react-bootstrap/FigureCaption'


import MyVerticallyCenteredModal from './Modal'

//---------images------------
import Nerd from '../../visuals/NVcrest.png'
import Sloshed from '../../visuals/sloshed.png'
import burgerIcon from '../../visuals/burgerIcon.png'


function Projects() {
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
                        <div className='ProCluster nerd ' >
                            <div className='clusterTitle nerdTitle'  >
                            <h3 >Nerd Verse </h3>
                            <h3  >(Trivia Game)</h3>
                            </div>
                            <img src={Nerd} alt="" className='proImage nerdImage' />
                            <Button variant="warning" className='probutton nerdButton'
                                onClick={() =>{ 
                                setTitle('nerdverse')
                                setModalShow(true)}}>
                                Take a look
                            </Button>
                         </div>

                         {/* -------------sloshed--------- */}
                         <div className='ProCluster sloshed ' >
                            <div className='clusterTitle sloshedTitle'  >
                            <div id='sloshed' >The Sloshed Guide</div>
                            <div id='sloshed'  >(Pub Guide)</div>
                            </div>
                            <Button variant="warning" className='probutton sloshedButton'
                                onClick={() =>{ 
                                setTitle('sloshed')
                                setModalShow(true)}}>
                                Take a look
                            </Button>
                         </div>
                         {/* ---------burger------------------------- */}
                         <div className='ProCluster burger ' >
                           
                            <img src={burgerIcon} alt="" className='proImage burgerImage' />
                            <Button variant="warning" className='probutton burgerButton'
                                onClick={() =>{ 
                                setTitle('burger')
                                setModalShow(true)}}>
                                Take a look
                            </Button>
                         </div>


                       
                          
                        {/* -----------------burger-------------- */}
                        {/* <Figure className='ProCluster' >
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
                        </Figure> */}
                     
                    </div>
                   
             
                       
                    </div>
      )
    
}

export default Projects;