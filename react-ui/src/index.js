import React from 'react';
import ReactDOM from 'react-dom';
import AwesomeSlider from 'react-awesome-slider';


////////////components
import Header from './Component/Header/Header'
import Project from './Component/Projects/Projects'
import About from './Component/Intro/Intro'
import Contact from './Component/Contact/Contact'

// css
import './alice.css';

import './sliderStyle.css';
import './index.css';

ReactDOM.render(
    <div >
       <React.Fragment>
        <Header />
        {/* <Skills /> */}
        <AwesomeSlider
    animation="cubeAnimation"
    bullets= {false}
  >
          <div><About /></div>
          <div><Project /></div>
          <div><Contact /></div>
          
        </AwesomeSlider>
      </React.Fragment>
    </div>,
  document.getElementById("root"),
);
    
