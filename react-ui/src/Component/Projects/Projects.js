import React from 'react';
import ProCarousal from './carousal/ProjectCarousal'
import {Col,Row} from 'react-bootstrap'
//---------images------------

function Projects() {
   
     return (
        <div className='proBg'>
            <div className='projects '> 
                <h3  className='proTitle ' >Projects</h3>
                 <div className='proSlide' >
                    <ProCarousal />
                
                </div>
                <h2 className='skills'>Skillz</h2>
                <div  className='skillBar'>
                <Row>
                <Col  sm={4}>
                    <p><strong>Browser Based Technologies</strong><br/>
                    • HTML<br/>
                    • CSS<br/>
                    • JavaScript<br/>
                    • jQuery<br/>
                    • Responsive Design<br/>
                    • Bootstrap<br/>
                    • Handlebars<br/>
                    • OOP (Object Oriented Programming)<br/>
                    • Local Storage, Session Storage, IndexedDB<br/>
                    • React.js</p>
                    <p><strong>Deployment</strong><br/>
                    • Heroku<br/>
                    • Git</p>
                     <p><strong>Graphics Tools</strong></p>
                    • Sketch-up<br/>
                    • Gimp<br/>
                    • Blender<br/>
                    </Col>
                    <Col sm={4}>
                    
                    <p><strong>JavaScript Methods</strong><br/>
                    • OOP (Object Oriented Programming)<br/>
                    • TDD (Test Driven-Development)<br/>
                    </p>
                    <p><strong>Databases</strong><br/>
                    • MySQL<br/>
                    • MongoDB<br/>
                    • FireStore</p>
                  
                    <p><strong>Agile Development</strong><br/>
                    • Kanban, Project Management<br/>
                    • Issues<br/>
                    • User Stories<br/>
                    • Sprints<br/>
                    • Standup<br/>
                    • Retros</p>
                    </Col>
                    <Col sm={4}>
                    <p><strong>Quality and Performance</strong><br/>
                    • Unit Testing<br/>
                    • Google Lighthouse<br/>
                    • Webpack<br/>
                    • PWAs (Progressive Web Apps)<br/>
                    • Lazy Loading<br/>
                    • Service Workers</p>
                      <p><strong>Server-Side Development</strong><br/>
                    • Node<br/>
                    • Express<br/>
                    • User Authentication<br/>
                    • Sequelize<br/>
                    • Mongoose<br/>
                    • API fetch<br/>
                    • MVC Paradigm<br/>
                    • MERN Stack (MongoDB, Express.js, React.js, Node.js)<br/>
                    • Google FireBase
                    </p> 
                   <br /><br /><br /><br /><br /><br />
                   
                    </Col>
            </Row>
        </div>
            </div>
        </div>
    )
    
}

export default Projects;