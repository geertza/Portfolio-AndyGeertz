import React from 'react';

import avatar from '../../visuals/avatar5.webp'

export default function about() {
  
  return (
        <div >
          <div className="clouds" >
            <div className='about'>
              <img src={avatar}  alt=''className='avatar'/>
              <h1 className='m-auto hello'>Hello! I'm Andy,</h1>
              <h2  className='meet'> Nice to meet you!</h2>
              <h3 className='aboutText'>Currently I'm an aspiring web-developer fresh out of fullstack bootcamp. I've always had a fixation for unraveling technical issues and tweaking computer images. So it comes natural for me to pursue a career coding.</h3>
              
              </div>
          </div>
        </div>
              
          
      
  );
}
