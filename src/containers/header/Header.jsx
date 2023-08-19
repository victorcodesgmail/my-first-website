import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className ="gpt3__header section__padding" id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Lets's Build Something amazing with CODE</h1>
        <p>“Programming today is a race between software engineers striving to 
          build bigger and better idiot-proof programs, and the Universe trying to 
          produce bigger and better idiots. So far, the Universe is winning.” (source)</p>
        <div className='gpt3__header-content__input'>
<input type="email" placeholder="Your Email Address" />
<button type='button'>Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
<img src={people} alt="people"/>
<p>1600 people requested access to visit site in last 24hrs</p>
        </div>
   
      </div>
           <div className='gpt3__header-image'>
<img src={ai} alt="ai" />
        </div>
      </div>
  )
}

export default Header