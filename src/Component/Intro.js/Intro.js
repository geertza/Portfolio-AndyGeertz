import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import Logo from '../../visuals/logo.png';
import "./stars.css";
import Typed from "react-typed";


export default function header() {
  
  return (
        <header  >
        <div className="stars " />
        <div className="twinkling " />
         <div className="clouds" />
         
           
             
              <div className='about container neon'>
             <h1  >Hi! I'm Andy.</h1>
             <h1> Nice to meet you!</h1>
             <p>Currently I'm an aspiring web-developer fresh out of fullstack bootcamp. I've always had a fixation for unravaling technical issues. So it comes natural for me to pursue a career in the coding field. I'm currently seeking a team which can help me to develope my skills, while creating some amazing sites. Is your team the one I seek? </p>
             
            </div>
      

        
  

        </header>
  );
}
