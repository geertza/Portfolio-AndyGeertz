import React from 'react';
import ProCarousal from './carousal/ProjectCarousal'

//---------images------------

function Projects() {
   
     return (
        <div className='proBg'>
            <div className='projects '> 
                <h3  className='proTitle ' >Projects</h3>
                 <div className='proSlide' >
                    <ProCarousal />
                
                </div>
            </div>
        </div>
    )
    
}

export default Projects;