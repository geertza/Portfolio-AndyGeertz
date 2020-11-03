import React from 'react';

import avatar from '../../visuals/avatar5.webp'

export default function about() {
  
  return (
        <div className='intro' >
          <div className="clouds" >
          <img src={avatar}  alt=''className='avatar'/>
            <div className='about'>
              <h1 className='hello'>Hello! I'm Andy,</h1>
              <h2  className='meet'> Nice to meet you!</h2>
              <h3 className='aboutText'>
              I'm an aspiring web-developer fresh out of boot camp. I've always had a fixation for unraveling technical issues, growing up I was often glued to a keyboard.
               I spent five years as an Electronics tech doing everything from circuit boards to radio towers. This experience taught me how important communication,
                strict troubleshooting, and strong teamwork are to complete any goal. Working as a painter, I fine tuned my ability to pay attention to detail, color design,
                 and coordinating a motley crew. Coding has been a natural transition, creating a "rabbit hole" of passionate interest. I look forward to all the wonders to 
                 come, plus all the wicked cool websites and apps, I'll help create.
               </h3>
              {/* <!-- hitwebcounter Code START --> */}
<a href="https://www.hitwebcounter.com" target="_blank" rel="noopener noreferrer">
<img src="https://hitwebcounter.com/counter/counter.php?page=7695895&style=0049&nbdigits=3&type=page&initCount=0" title="Total Website Hits" alt="web hits"   border="0" className='counter'/></a>          
              </div>
          </div>
        </div>
              
          
      
  );
}
