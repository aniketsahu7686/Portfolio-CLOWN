import React from 'react'
import "./AboutContentStyle.css"
import {Link} from 'react-router-dom'

import React1 from "../images/react1.jpg"
import React2 from "../images/react2.webp"

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>
                Who am I ?
            </h1>
            <p>I am a react font-end developer.I create responsive secure websites.</p>
            <Link  to="/contact">
                <button className='btn'>Contact</button> 
             </Link>
        </div>
        <div className='right'>
          <div className='img-container'>
          <div className='img-stack top'>
                  <img src = {React1} className='img' alt='reactimg1'/> 
                 </div>
                 <div className='img-stack bottom'>
                  <img src = {React2} className='img' alt='reactimg2'/> 
                 </div>
          </div>
        </div>
    </div>
  )
}

export default AboutContent