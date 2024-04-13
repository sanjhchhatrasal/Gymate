import React, { useEffect, useState } from 'react'
import './Navbar.scss'
import { IoPersonOutline } from "react-icons/io5";
import { RiMenu2Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';


function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
      <img className='logo-img' src="https://gymate-iota.vercel.app/static/media/logo.c5ac0791c9f959f36051cff4c1188c2c.svg" alt="" />
      <div className="h6-group">
        <NavLink className='navlink' to="/">Home</NavLink>
        <NavLink className='navlink' to="/about">About</NavLink>
        <NavLink className='navlink' to="/gallery">Gallery</NavLink>
        <NavLink className='navlink' to="/schedule">Schedule</NavLink>
        <NavLink className='navlink' to="/blog">Blog</NavLink>
        <NavLink className='navlink' to="/pricing">Pricing</NavLink>
        <NavLink className='navlink' to="/classes">Classes</NavLink>
        <NavLink className='navlink' to="/contact">Contact</NavLink>
      </div>
      <div className="right-group">
        <IoPersonOutline className='profile'/>
        <RiMenu2Line className='menu'/>
        <button> <div className='plus'><FaPlus className='plus-sign'/></div>Join Class now</button>
      </div>
    </div>
  )
}

export default Navbar
