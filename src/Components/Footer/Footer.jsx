import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import './Footer.scss';
import {footerLogo} from '../Images/index';


function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <div className='main-footer'>
      <div className="elem1">
        <img className='logo-img' src={footerLogo} alt="" />
        <p>Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.</p>
        <div className="social-icons">
            <div className="facebook">
                <FaFacebookF className='facebook-icon'/>
            </div>
            <div className="twitter">
                <FaTwitter className='twitter-icon'/>
            </div>
            <div className="pinterest">
                <FaPinterestP className='pinterest-icon'/>
            </div>
            <div className="youtube">
                <FaYoutube className='youtube-icon'/>
            </div>
        </div>
        <h6>Privacy Policy | © {currentYear} Gymate <br />
            Design by RadiusTheme</h6>
      </div>
      <div className="elem2">
        <h1><span>Our </span>Classes</h1>
        <h6>Fitness Classes</h6>
        <h6>Aerobics Classes</h6>
        <h6>Power Yoga</h6>
        <h6>Learn Machines</h6>
        <h6>Full-body Strength</h6>
      </div>
      <div className="elem3">
        <h1>Working Hours</h1>
        <h5>Monday - Friday: </h5>
        <h6>7:00am - 21:00pm</h6>
        <h5>Saturday:</h5>
        <h6>7:00am - 19:00pm</h6>
        <h5>Sunday - Closed</h5>
      </div>
    </div>
  )
}

export default Footer
