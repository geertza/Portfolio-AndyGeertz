import React from 'react';

import avatar from '../../visuals/avatar5.webp'

export default function about() {
  
  return (
        <div >
          <div className="stars " >
          <div className="twinkling " >
          <div className="clouds" >
          <div className='about'>
              <h2 style={{fontSize:'7vw'}}> Nice to meet you!</h2>
              <div className='intro'>
              <img src={avatar}  alt=''className='avatar'/>
              <h3 className='aboutText'>Currently I'm an aspiring web-developer fresh out of fullstack bootcamp. I've always had a fixation for unravaling technical issues, so it comes natural for me to pursue a career coding. Currently seeking a team to help develop my skills, while creating amazing websites. Is your team the one I seek? </h3>
              </div>
              </div>  
              </div></div></div>
          </div>
      
  );
}
