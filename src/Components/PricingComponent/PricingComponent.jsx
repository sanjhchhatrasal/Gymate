import React from 'react'
import './PricingComponent.scss'
import { FaArrowRight, FaFacebookF } from "react-icons/fa";
import { hero, titleBg, bgimg , page7Bg1 , page7Bg2 , page7Card1 , page7Card2 , page7Card3  } from '../Images/index';


function PricingComponent() {
  return (
    <div>
      <div id="page7">
        <img  className="main-bg" src={bgimg} alt="" />
        <img className='bg1' src={page7Bg1} alt="" />
        <img className='bg2' src={page7Bg2} alt="" />

        <div className="content">
        <div className="title">
             <img className='title-bg-img' src={titleBg} alt="" />
             <h6>PRICING CHART</h6>
              </div>
              <h1>Exclusive Pricing Plan</h1>
              <p>Gymat an unknown printer took a galley of type and scrambled make a type specimen book.</p>

              <div className="cards">
                <div className="card card1">
                  <div className="card-top">
                    <img className='card-bg1' src={page7Card1} alt="" />
                     
                    <div className="box">
                      <h6>Beginners</h6>
                    </div>
                  </div>

                  <div className="card-btm">
                    <div className="plan">
                      <h6>$</h6>
                      <h1>39</h1>
                      <p>p/m</p>
                    </div>
                    <div className="h6">
                      <h6>Free Hand</h6>
                      <h6>Gym Fitness</h6>
                      <h6>Weight Loss</h6>
                      <h6>Personal Trainer</h6>
                      <h6>Cycling</h6>
                    </div>
                    <div className="btn">
            <button className='box'></button>
            <button className='main-btn'>PURCHASE NOW <FaArrowRight className='arrow'/></button>
          </div>
                </div>
                </div>
                <div className="card card2">
                <div className="card-top">
                    <img src={page7Card2} alt="" />
                    
                    <div className="box">
                      <h6>Beginners</h6>
                    </div>
                  </div>
                  <div className="card-btm">
                    <div className="plan">
                      <h6>$</h6>
                      <h1>65</h1>
                      <p>p/m</p>
                    </div>
                    <div className="h6">
                      <h6>Free Hand</h6>
                      <h6>Gym Fitness</h6>
                      <h6>Weight Loss</h6>
                      <h6>Personal Trainer</h6>
                      <h6>Cycling</h6>
                    </div>
                    <div className="btn">
            <button className='box'></button>
            <button className='main-btn'>PURCHASE NOW <FaArrowRight className='arrow'/></button>
          </div>
                </div>
                </div>
                <div className="card card3">
                <div className="card-top">
                    <img src={page7Card3} alt="" />
                    
                    <div className="box">
                      <h6>Beginners</h6>
                    </div>
                  </div>
                  <div className="card-btm">
                    <div className="plan">
                      <h6>$</h6>
                      <h1>100</h1>
                      <p>p/m</p>
                    </div>
                    <div className="h6">
                      <h6>Free Hand</h6>
                      <h6>Gym Fitness</h6>
                      <h6>Weight Loss</h6>
                      <h6>Personal Trainer</h6>
                      <h6>Cycling</h6>
                    </div>
                    <div className="btn">
            <button className='box'></button>
            <button className='main-btn'>PURCHASE NOW <FaArrowRight className='arrow'/></button>
          </div>
                </div>
                </div>
             
        </div>
      </div>
      
    </div>
    </div>
  )
}

export default PricingComponent
