import React from 'react'
import introimg from "../images/intro-bg.jpg"
import {Link} from "react-router-dom"
import "./HeroimgStyle.css"


const Heroimg = () => {
  return (
    <div className='hero-section'>
        <div className='img-adjust'>
            <img className='hero-img'  src={introimg} alt='introimg' />
        </div>
        <div className='content'>
            <p>
                HI,THIS IS ANIKET
            </p>
            <h1>React Developer</h1>
        <div>
            <Link to="/project" className='btn'>Projects</Link>
            <Link to="/contact" className='btn btn-light'>contact</Link>
        </div>
        </div>
    </div>
  )
}

export default Heroimg