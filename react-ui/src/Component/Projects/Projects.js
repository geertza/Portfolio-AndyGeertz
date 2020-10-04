import React from 'react';
import {Button} from 'react-bootstrap';



import MyVerticallyCenteredModal from './Modal'

//---------images------------
import Nerd from '../../visuals/NVcrest.png'
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
                         {/* -------------Emp---------------------- */}
                         <div className='ProCluster emp ' >
                            <div className='clusterTitle empTitle'  >
                            <div id='emp' >The Emp List</div>
                            <div id='emp'  >(Api Employee Directory)</div>
                            </div>
                            <Button variant="warning" className='probutton empButton'
                                onClick={() =>{ 
                                setTitle('emp')
                                setModalShow(true)}}>
                                Take a look
                            </Button>
                         </div>

                     
                    </div>
                   
             
                       
                    </div>
      )
    
}

export default Projects;