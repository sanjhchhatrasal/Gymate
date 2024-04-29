import React, { useEffect, useState } from 'react'
import './Navbar.scss'
import { IoPersonOutline } from "react-icons/io5";
import { FaChartBar } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import {Gallery6, boyAbs, footerLogo, girlBoxingSmall, girlGymnastic, girlLifting, girlRope, navbarLogo} from '../Images/index';


function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [sidePage, setSidePage] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const toggle = () =>{
    setSidePage(!sidePage)
  }

  const handleClear = () =>{
      setSidePage('')
  }

  const toggleNav = () =>{
    setNavbar(!navbar)
  }

  const handleNavlinkClick = () =>{
    setNavbar(false)
  }

  /* const handleNavClear =() =>{
      setNavbar(false)
  } */

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50; // Adjust the scroll threshold as needed
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`main-nav ${scrolled ? 'scrolled' : ''}`}>
      <img className='logo-img' src={navbarLogo} alt="" />
      <div className="h6-group">
        <NavLink className='navlink' to="/">Home</NavLink>
        <NavLink className='navlink' to="/about">About</NavLink>
        <NavLink className='navlink' to="/gallery">Gallery</NavLink>
        <NavLink className='navlink' to="/schedule">Schedule</NavLink>
        <NavLink className='navlink' to="/blog">Blog</NavLink>
        <NavLink className='navlink' to="/pricing">Pricing</NavLink>
        <NavLink className='navlink' to="/classes">Classes</NavLink>
        <NavLink className='navlink' to="/contact">Contact</NavLink>
        <NavLink className='navlink' to="/dashboard">Dashboard</NavLink>
      </div>
      <div className="right-group">
        <FaBars className='menu-bars' onClick={toggleNav}/>
        <NavLink to='/signup'><IoPersonOutline className='profile'/></NavLink>
        <FaChartBar className='menu' onClick={toggle}/>
        {/*sidebar menu */}
        {sidePage && (
          <div className={`sidebar-menu ${sidePage ? 'open' : 'close'}`}>
            <img className='logo-img' src={footerLogo} alt="" />
            <RxCross2 onClick={handleClear} className='cross'/>
            <div className="about">
              <h6>About Us</h6>
              <p>Find out who we are and what makes us unique. We are a community-driven gym committed to providing personalized fitness experiences for all levels of fitness enthusiasts in a welcoming and supportive environment.</p>
            </div>
            <div className="gallery">
              <h6>Gallery</h6>
              <div className="img">
                <img src={girlLifting} alt="" />
              </div>
              <div className="img">
                <img src={Gallery6} alt="" />
              </div>
              <div className="img">
                <img src={boyAbs} alt="" />
              </div>
              <div className="img">
                <img src={girlGymnastic} alt="" />
              </div>
              <div className="img">
                <img src={girlRope} alt="" />
              </div>
              <div className="img">
                <img src={girlBoxingSmall} alt="" />
              </div>
            </div>
            <div className="contact">
              <h6>Contact Info</h6>
              <div className="location social-icons">
                <FaLocationDot />
                <p>59 Street, House Newyork City</p>
              </div>
              <div className="phone social-icons">
                <FaPhoneAlt />
                <p>+123-678800090</p>
              </div>
              <div className="email social-icons">
                <HiMail />
                <p>gymate@gmail.com</p>
              </div>
            </div>
            <div className="follow">
              <h6>Follow Us</h6>
              <div className="facebook icon">
                <FaFacebookF className='facebook-icon'/>
            </div>
            <div className="twitter icon">
                <FaTwitter className='twitter-icon'/>
            </div>
            <div className="pinterest icon">
                <FaPinterestP className='pinterest-icon'/>
            </div>
            </div>
          </div>
        )}

        {/* responsive navbar */}
        {navbar && (
         <div className={`main-nav-res ${navbar ? 'open' : 'close'}`}>
          <RxCross2 className='cross-nav' onClick={handleNavlinkClick}/>
           <div className="h6-group-res">
          <NavLink className='navlink' to="/" onClick={handleNavlinkClick}>Home</NavLink>
          <NavLink className='navlink' to="/about" onClick={handleNavlinkClick}>About</NavLink>
          <NavLink className='navlink' to="/gallery" onClick={handleNavlinkClick}>Gallery</NavLink>
          <NavLink className='navlink' to="/schedule" onClick={handleNavlinkClick}>Schedule</NavLink>
          <NavLink className='navlink' to="/blog" onClick={handleNavlinkClick}>Blog</NavLink>
          <NavLink className='navlink' to="/pricing" onClick={handleNavlinkClick}>Pricing</NavLink>
          <NavLink className='navlink' to="/classes" onClick={handleNavlinkClick}>Classes</NavLink>
          <NavLink className='navlink' to="/contact" onClick={handleNavlinkClick}>Contact</NavLink>
          <NavLink className='navlink' to="/dashboard" onClick={handleNavlinkClick}>Dashboard</NavLink>
        </div>
         </div>
        )}

       <NavLink to="/contact"> <button> <div className='plus'><FaPlus className='plus-sign'/></div>Join Class now</button></NavLink>
      </div>
    </div>
  )
}

export default Navbar
