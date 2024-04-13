import React from 'react'
import './LeftBlog.scss';
import { FaLayerGroup, FaArrowRight } from "react-icons/fa";

function LeftBlog(prop) {
  return (
    <div className='main-left-blog'>
      <div className="img">
        <img src={prop.img} alt="" />
      </div>
      <div className="img-btm-text">
      <FaLayerGroup className='layer'/>
      <p>By <strong>Admin</strong></p>
      <p>March 11, 2022</p>
      <p>Yoga</p>
      </div>
      <h1>{prop.title}</h1>
      <p>Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually transform integrated results vis-a-vis multidisciplinary manufacture Appropriately foster fullresearched innovation rather than backend supply. when an unknown printer took a galley.</p>
      <div className="btn">
            <button className='box'></button>
            <button className='main-btn'>PURCHASE NOW <FaArrowRight className='arrow'/></button>
          </div>
    </div>
  )
}

export default LeftBlog
