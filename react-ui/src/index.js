import React from 'react';
import ReactDOM from 'react-dom';
import AwesomeSlider from 'react-awesome-slider';


////////////components
import Header from './Component/Header/Header'
import Project from './Component/Projects/Projects'
import About from './Component/Intro/Intro'
import Contact from './Component/Contact/Contact'

// css

// import 'react-awesome-slider/dist/styles.css';
import animationStyles from 'react-awesome-slider/src/styled/cube-animation/cube-animation.scss';
// import coreStyles from 'react-awesome-slider/src/core/styles.scss';
import './sliderStyle.css';
// import 'react-awesome-slider/dist/custom-animations/fall-animation.css';
import './index.css';
// import Skills from './Component/Skills/skills';

ReactDOM.render(
    <div >
       <React.Fragment>
        <Header />
        {/* <Skills /> */}
        <AwesomeSlider
    animation="cubeAnimation"
    cssModule={[ animationStyles]}
  >
          <div><About /></div>
          <div><Project /></div>
          <div><Contact /></div>
          
        </AwesomeSlider>
      </React.Fragment>
    </div>,
  document.getElementById("root"),
);
    
