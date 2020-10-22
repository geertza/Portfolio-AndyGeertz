import React from 'react';

import avatar from '../../visuals/avatar5.webp'

export default function about() {
  
  return (
        <div className='intro' >
          <div className="clouds" >
          <img src={avatar}  alt=''className='avatar'/>
            <div className='about'>
              <h1 className='m-auto hello'>Hello! I'm Andy,</h1>
              <h2  className='meet'> Nice to meet you!</h2>
              <h3 className='aboutText'>Currently I'm an aspiring web-developer fresh out of fullstack bootcamp. I've always had a fixation for unraveling technical issues and tweaking computer images. So it comes natural for me to pursue a career coding.</h3>
              {/* <!-- hitwebcounter Code START --> */}
<a href="https://www.hitwebcounter.com" target="_blank" rel="noopener noreferrer">
<img src="https://hitwebcounter.com/counter/counter.php?page=7695895&style=0049&nbdigits=3&type=page&initCount=0" title="Total Website Hits" alt="web hits"   border="0" className='counter'/></a>          
              </div>
          </div>
        </div>
              
          
      
  );
}
