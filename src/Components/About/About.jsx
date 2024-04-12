import React from 'react'
import './About.scss';
import RunningGirl from '../RunningGirl/RunningGirl';
import TopImage from '../TopImage/TopImage'
import {bgimg, about1, about2, history1, history2} from '../Images/index';

function About() {
  return (
    <div className='main-about'>    
     <div id="page1">
     <TopImage title="About Us"/>
     </div>
      
      <div className="content">
         <img className='bg-img' src={bgimg} alt="" /> 

        <div id="page2">
        <RunningGirl className="running-girl" withMidClass2={true}/>
        </div>

        <div id="page3">
          <div className="top">
          <div className="text">
            <img className='history1 history' src={history1} alt="" />
            <h1>Our History</h1>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit Exercitation veniam consequat.</p>
          </div>
            <div className="image">
              <img className='about' src={about1} alt="" />
            </div>
          </div>
          <div className="btm">

          <div className="image">
              <img className='about' src={about2} alt="" />
            </div>
          <div className="text">
          <img className='history2 history' src={history2} alt="" />
          <h1>Our History</h1>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit Exercitation veniam consequat.</p>
          </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
