import React from 'react';
import ReactDOM from 'react-dom';
import ReactPageScroller from "react-page-scroller";
////////////components
import Header from './Component/Header/Header'
import Project from './Component/Projects/Projects'
import About from './Component/Intro/Intro'
import Contact from './Component/Contact/Contact'

// css
import './index.css';

ReactDOM.render(
    <div>
       <React.Fragment>
        <Header />
        <ReactPageScroller>
          <About />
          <Project />
          <Contact />
        </ReactPageScroller>
      </React.Fragment>
    </div>,
  document.getElementById("root"),
);
    
