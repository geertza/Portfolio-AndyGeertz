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
                <div className='proGrid '>
                    {/* ---------------------nerdverse------------------- */}
                    <div className='ProCluster' >
                        <div className='clusterTitle' >Nerd Verse (Trivia Game)</div>
                        <div className='proImage nerd'/>
                        <Button variant="warning" className='probutton nerdButton'
                            onClick={() =>{ 
                            setTitle('nerdverse')
                            setModalShow(true)}}>
                            Take a look
                        </Button>
                        </div>

                        {/* -------------sloshed--------- */}
                        <div className='ProCluster pcRight' >
                        <div className='clusterTitle' >(Pub Locator App)</div>
                        <div className='proImage sloshed'>
                        <div id='sloshed' >The Sloshed Guide</div> 
                        </div>
                        <Button variant="warning" className='probutton sloshedButton'
                            onClick={() =>{ 
                            setTitle('sloshed')
                            setModalShow(true)}}>
                            Take a look
                        </Button>
                        </div>
                        {/* ---------burger------------------------- */}
                        <div className='ProCluster  ' >
                        <div className='clusterTitle' >(Make a burger app)</div>
                        <div className='proImage burger'/>
                        <Button variant="warning" className='probutton '
                            onClick={() =>{ 
                            setTitle('burger')
                            setModalShow(true)}}>
                            Take a look
                        </Button>
                        </div>
                        {/* -------------Emp---------------------- */}
                        <div className='ProCluster pcRight' >
                        <div className='clusterTitle' >(Employee directory )</div>
                        <div className='proImage emp'> 
                        <div id='emp'>Emp List</div>
                        </div>
                        <Button variant="warning" className='probutton '
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