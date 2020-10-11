import React from 'react';
import {Button} from 'react-bootstrap';
import MyVerticallyCenteredModal from './Modal'

//---------images------------

function Projects() {
    // -------------states for models---------------
    const [modalShow, setModalShow] = React.useState(false);
    const [title, setTitle] = React.useState('nerd');
     return (
        <div className='proBg'>
            <div className='projects '> 
                <h3  className='proTitle ' >Projects</h3>
                {/* feed modal props */}
                <MyVerticallyCenteredModal
                    title={title}
                    show={modalShow}
                    onHide={() => 
                    setModalShow(false)} />
                <div className='d-flex justify-content-center'>
                <div className='proGrid '>
                    {/* ---------------------nerdverse------------------- */}
                    <div className='ProCluster' >
                        <div className='proImage nerd' >
                        <div className='clusterTitle' >NerdVerse (Trivia)</div>
                        <Button variant="warning" className='probutton nerdButton'
                            onClick={() =>{ 
                            setTitle('nerdverse')
                            setModalShow(true)}}>
                            Take a look
                        </Button>
                        </div>
                        </div>            
                        {/* -------------sloshed--------- */}
                        <div className='ProCluster pcRight' >
                        <div className='proImage sloshed'>
                        <div className='clusterTitle' >(Pub Locator App)</div>
                        <div id='sloshed' >The Sloshed Guide</div> 
                        
                        <Button variant="warning" className='probutton sloshedButton'
                            onClick={() =>{ 
                            setTitle('sloshed')
                            setModalShow(true)}}>
                            Take a look
                        </Button>
                        </div>
                        </div>
                        {/* ---------burger------------------------- */}
                        <div className='ProCluster  ' >
                        <div className='proImage burger'>
                        <div className='clusterTitle' >(Make a burger)</div>
                        
                        <Button variant="warning" className='probutton '
                            onClick={() =>{ 
                            setTitle('burger')
                            setModalShow(true)}}>
                            Take a look
                        </Button>
                        </div>
                        </div>
                        {/* -------------Emp---------------------- */}
                        <div className='ProCluster pcRight' >
                        <div className='proImage emp'>
                        <div className='clusterTitle' >(Employee directory )</div>
                         <div id='emp'>Emp List</div>
                        <Button variant="warning" className='probutton empButton '
                            onClick={() =>{ 
                            setTitle('emp')
                            setModalShow(true)}}>
                            Take a look
                        </Button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
    
}

export default Projects;