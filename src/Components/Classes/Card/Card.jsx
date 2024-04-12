import React from 'react'
import './Card.scss';
import { IoTimeOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { FaArrowRight} from "react-icons/fa";

function Card(prop) {
  return (
    <div className='card-main'>
      <img src={prop.img} alt="" />
      <div className="text">
        <h6>{prop.title}</h6>
        <div className="line"></div>
        <div className="time">
            <div className="left">
                <IoPersonOutline className='icon'/>
                <p>{prop.name}</p>
            </div>
            <div className="right">
            <IoTimeOutline className='icon'/>
            <p>{prop.time}</p>
            </div>
        </div>
      </div>
      <div className="btn">
            <button className='box'></button>
            <button className='main-btn'>JOIN NOW <FaArrowRight className='arrow'/></button>
          </div>
    </div>
  )
}

export default Card
