import React from 'react'
import './RunningGirl.scss'
import text from '../../assets/images/girl-text.png'
import dshape from '../../assets/images/girl-d.svg';
import girl from '../../assets/images/girl.png';
import air from '../../assets/images/girl-air.png';
import titleBg from '../../assets/images/bg-title.svg';
import trainers from '../../assets/images/trainers.png';
import equipments from '../../assets/images/equpments.png';
import machines from '../../assets/images/gym-machines.png';

function RunningGirl({withMidClass}) {
  return (
    <div className={`main-running ${withMidClass ? 'mid1' : ''}`}>
        <div className="left">
          <div className="top">
            <img className='titlebg' src={titleBg} alt="" />
            <h1>WHO WE ARE</h1>
          </div>
          {withMidClass && <div className="mid1">
            <h5>Take Your Health And Body To Next Level</h5>
            <p>Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.</p>
            <div className="elems">
              <div className="elem1 elem">
                <img className='elem-img' src={trainers} alt="" />
                <h6>PROFESSIONAL TRAINERS</h6>
              </div>
              <div className="elem2 elem">
                <img  className='elem-img' src={equipments} alt="" />
                <h6>MODERN EQUIPMENTS</h6>
              </div>
              <div className="elem3 elem">
                <img  className='elem-img' src={machines} alt="" />
                <h6>FANCY GYM MACHINES</h6>
              </div>
            </div>
          </div>}
          <div className="btm">
            <button className='box'></button>
            <button className='main-btn'>TAKE A TOUR</button>
          </div>
        </div>
        <div className="right">
          <div className="elem1">
            <img className='text' src={text} alt="" />
            <img className='d-shape' src={dshape} alt="" />
          </div>
          <div className="elem2">
            <img className='girl' src={girl} alt="" />
            <img className='air' src={air} alt="" />
          </div>
        </div>
      
    </div>
  )
}

export default RunningGirl
