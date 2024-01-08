import React from 'react'

import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";


const footer = () => {
  return (
    
    <div className="footer-wrapper">
      <div className="footer-section-one">
      <div className="footer-text-container">
        <p className="primary-subheading1">DELICIEUX</p>
        </div>
        </div>
        <div className = "footer-section-add">

        <div className="footer-icons">
        <a href="https://twitter.com">
        <BsTwitter />
        </a>
        <a href="https://linkedin.com">
        <SiLinkedin />
        </a>
        <a href="https://youtube.com">
        <BsYoutube />
        </a>
        <a href="https://facebook.com">
        <FaFacebookF />
        </a>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Gmail: Deliux123@gmail.com</span>
          <span>Phone Number: 04-6223758</span>
          <span>Whatsapp: 0123574858</span>
          <span>Location: 1,Street Washington</span>
          <span>Operating hours: 10am to 8pm</span>
          
        </div>
        
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
    
  )
}

export default footer