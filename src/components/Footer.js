import React from 'react'
import "./FooterStyle.css"
import {FaHome,FaSnapchatSquare  } from "react-icons/fa"
import {AiFillPhone,AiFillMail,AiFillInstagram,AiFillLinkedin} from "react-icons/ai"


const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome  size={20} style={{color:'white', marginRight:"2rem"}} />
                    <p>Hanuman Nagar, Odisha , </p>
                    <p>India</p>
                </div>
                <div className=' phone'>
                    <h4><AiFillPhone  size={20}  style={{color:"white" , marginRight:"2rem" }}/>
                    8144726224</h4>
                </div>
                <div className='mail'>
                    <h4><AiFillMail size={20}  style={{color:"white" , marginRight:"2rem" }}/>
                    swagatsahu8050@gmail.com</h4>
                </div>
            </div>
            <div className='right'> 
            <h4>About the company</h4>
            <p>This is me Aniket sahu. Studying in VIT-AP.
                 I enjoy discussing new projects and design challenges.</p>
            <div className='social-media'>
                <AiFillLinkedin
                size = {20}
                style = {{color:"white",marginRight:"2rem"}}
                />
                <AiFillInstagram
                size = {20}
                style = {{color:"white",marginRight:"2rem"}}
                />
                <FaSnapchatSquare 
                size = {20}
                style = {{color:"white",marginRight:"2rem"}}
                />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer