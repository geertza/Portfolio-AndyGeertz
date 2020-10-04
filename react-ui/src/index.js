import React from 'react';
import ReactDOM from 'react-dom';

import Mod from './Component/Projects/Modal'
////////////components
import Header from './Component/Header/Header'
import Project from './Component/Projects/Projects'
import About from './Component/Intro/Intro'
import Contact from './Component/Contact/Contact'
// css
import './index.css';
import './effects.css'
ReactDOM.render(
  <React.Fragment>
   <Mod />
    <Header />
    <About />
    <Project />
    <Contact />
    </React.Fragment>,
  document.getElementById('root')
);


