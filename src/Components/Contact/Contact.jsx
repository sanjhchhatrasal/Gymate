import React from 'react'
import './Contact.scss'
import TopImage from '../TopImage/TopImage'

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <div className='main-contact'>
      <TopImage title="Contact Us" />
      <div id="content">
        <div id="top">
        <div id="left">
          <h1>We are here for help you! To Shape Your Body.</h1>
          <p>At Gymate, we are dedicated to helping you achieve the body of your dreams. Our expert trainers and nutritionists will work with you to create a personalized fitness and nutrition plan that helps you reach your specific goals.</p>
          <div className="elems">
            <div className="elem1 elem">
             <h6> New York City, USA</h6>
             <div className="line"></div>
             <p>85 Briston Mint Street, London, e1 8LG , USA</p>
            </div>

            <div className="elem elem2">
              <h6>Opening Hours</h6>
              <div className="line">
              <div className="p-tag">
              <p>Mon to Fri: 7:30 am — 1:00 am </p>
              </div>
              </div>
            </div>

            <div className="elem elem3">
              <h6>Information</h6>
              <div className="line"></div>
              <p>+800-123-4567 gymate@email.com</p>
            </div>

            <div className="elem elem4">
              <h6>Follow Us On</h6>
              <div className="line"></div>
              <div className="social-icons">
              <div className="icons">
                <FaFacebookF />
              </div>
              <div className="icons">
                <FaTwitter />
              </div>
              <div className="icons">
                <FaInstagram />
              </div>
              <div className="icons">
                <FaPinterestP />
              </div>
              </div>
            </div>
          </div>
        </div>
        <div id="right">
          <div className="form">
            <h1>Leave Us Your Info</h1>
            <div className="line"></div>
           <input type="text" placeholder='Full Name*' className='name'/>
            <input type="text" placeholder='Email Address*' className='email'/>
            <select name="classSelect" id="classSelect" defaultValue="Select value" className='select'>
              <option disabled  value="Select value">Select value</option>
              <option value="Body Building">Body Building</option>
              <option value="Body Building">Boxing</option>
              <option value="Body Building">Running</option>
              <option value="Body Building">Fitness</option>
              <option value="Body Building">Yoga</option>
              <option value="Body Building">Workout</option>
              <option value="Body Building">Karate</option>
              <option value="Body Building">Meditation</option>
              <option value="Body Building">Cycling</option>
            </select>
            <textarea className='textarea' name="" id="" cols="30" rows="10" placeholder='Comment'></textarea>

            <button>SUBMIT NOW</button>
          </div>
        </div>
        
        </div>
        <div id="bottom"></div>
      </div>
    </div>
  )
}

export default Contact
