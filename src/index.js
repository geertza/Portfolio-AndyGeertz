import React from 'react';
import ReactDOM from 'react-dom';


import About from './Component/Intro.js/Intro'
import Header from './Component/Header/Header'
ReactDOM.render(
  <React.Fragment>
    <Header />
    <About />
    {/* <Footer /> */}
    </React.Fragment>,
  document.getElementById('root')
);


