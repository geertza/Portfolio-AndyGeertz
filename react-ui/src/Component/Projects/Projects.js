import React from 'react';
import {Button} from 'react-bootstrap';
import MyVerticallyCenteredModal from './Modal'

//---------images------------
import Nerd from '../../visuals/NVcrest.webp'
import burgerIcon from '../../visuals/burgerIcon.webp'

function Projects() {
    // -------------states for models---------------
    const [modalShow, setModalShow] = React.useState(false);
    const [title, setTitle] = React.useState('nerd');
     return (
        <div className='proBg'>
            <div className='projects '> 
                <h2  className='proTitle ' >Projects</h2>
                {/* feed modal props */}
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
                        <div id='nerd' >Nerd Verse </div>
                        <div id='nerd'  >(Trivia Game)</div>
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
                        <h4 id='emp' >The Emp List</h4>
                        <h4 id='emp'  >(Api Employee Directory)</h4>
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
        </div>
    )
    
}

export default Projects;