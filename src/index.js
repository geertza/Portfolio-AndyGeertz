import React from 'react';
import ReactDOM from 'react-dom';


import About from './Component/Intro.js/Intro'
import Header from './Component/Header/Header'
import Project from './Component/Projects/Projects'
ReactDOM.render(
  <React.Fragment>
    <Header />
    <About />
    <Project />
    {/* <Footer /> */}
    </React.Fragment>,
  document.getElementById('root')
);


