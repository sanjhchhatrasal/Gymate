import React from 'react'
import './Home.scss'
import RunningGirl from '../RunningGirl/RunningGirl'
import hero from '../../assets/images/heroimg.jpg'
import titleBg from '../../assets/images/bg-title.svg'
import { FaArrowRight } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import bgimg from '../../assets/images/background.jpg';
import cardimg from '../../assets/images/card-bg.jpg';
import timer from '../../assets/images/timer.png';
import workout from '../../assets/images/workout.png';
import nutritions from '../../assets/images/nutritions.png';
import cycle from '../../assets/images/cycle.png';
import girlcycling from '../../assets/images/girl-cycling.jpg';
import karate from '../../assets/images/karate.png';
import girlkarate from '../../assets/images/girl-karate.jpg';
import power from '../../assets/images/power.png';
import boypower from '../../assets/images/boy-power.jpg';
import meditation from '../../assets/images/meditation.png';
import girlmeditation from '../../assets/images/girl-meditation.jpg';
import martialArt from '../../assets/images/martial-arts.png';
import boyMartialArts from '../../assets/images/boy-martial-arts.jpg';
import workoutGirl from '../../assets/images/workout-girl.png';
import boyWorkout from '../../assets/images/boy-workout.jpg';
import cycleColor from '../../assets/images/cycle-color.png';
import karateColor from '../../assets/images/karate-color.png';
import powerColor from '../../assets/images/power-color.png';
import meditationColor from '../../assets/images/me.png';
import martialArtsColor from '../../assets/images/martial-arts-color.png';
import workoutGirlColor from '../../assets/images/workout-girl-color.png';
import chooseBg from '../../assets/images/choose-bg.jpg';
import ctaBg from '../../assets/images/cta-bg.png';
import fitness from '../../assets/images/fitness.png';
import gymEquipment from '../../assets/images/gym-equipment.png';
import gymMachines from '../../assets/images/gym-machines.png';
import bottle from '../../assets/images/bottle-water.png';
import mainImgBoy from '../../assets/images/main-img-boy.png';
import play from '../../assets/images/play.png';



function Home() {
  return (
    <div className='main-home'>
      <div id="page1">
        <img className='main-img' src={hero} alt="" />
        <div className="right-text">
          <div className="title">
          <img className='title-bg' src={titleBg} alt="" />
          <h2>FIND YOUR ENERGY</h2>
          </div>
          <h1>MAKE YOUR BODY</h1>
          <h2>FIT & PERFECT</h2>
          <div className="btn">
            <button className='box'></button>
            <button className='main-btn'>OUR CLASSES <FaArrowRight className='arrow'/></button>
          </div>
        </div>
        <div className="social-icons">
          <p>SHARE</p>
          <div className="line"></div>
          <div className="icons">
          <FaLinkedinIn className='linkedin' />
          <FaTwitter className='twitter' />
          <FaFacebook className='facebook'/>
          </div>
          
        </div>
      </div>
      <div id="page2">
        <img className='bg-img' src={bgimg} alt="" />
        <div className="content">
        <div id="top">
          <div className="card card1">
            <img className='card-img' src={cardimg} alt="" />
            <div className="card-content">
              <img className='small-img' src={timer} alt="" />
              <h6>PROGRESSION</h6>
              <p>Our team of experts will work with you to create a customized plan that helps you achieve success one step at a time.</p>
            </div>
          </div>
          <div className="card card2">
          <img className='card-img' src={cardimg} alt="" />
          <div className="card-content">
              <img className='small-img' src={workout} alt="" />
              <h6>WORKOUT</h6>
              <p>With a variety of workouts to choose from, you'll have everything you need to get into the best shape of your life.</p>
            </div>
          </div>
          <div className="card card3">
          <img className='card-img' src={cardimg} alt="" />
          <div className="card-content">
              <img className='small-img' src={nutritions} alt="" />
              <h6>NUTRITIONS</h6>
              <p>Our team will work with you to create a personalized meal plan that helps you reach your specific health goals.</p>
            </div>
          </div>
        </div>
        <div id="bottom">
         <RunningGirl withMidClass={true}/>
        </div>
        </div>
      </div>
      <div id="page3">
          <div className="title">
          <img className='title-bg-img' src={titleBg} alt="" />
          <h6>OUR FEATURED CLASS</h6>
          </div>
          <h5>We Are Offering Best Flexible Classes</h5>
          <div className="classes-elem">
            <div className="class-elem class-elem1">
              <img className='bg-img' src={girlcycling} alt="" />
              <div className="text-container">
                <h6>Cycling</h6>
                <div className="time">
                  <p>Wednesday: 9:00am-10:00am</p>
                </div>
              </div>
              <div className="side-icon">
                <img className='side-icon-img' src={cycle} alt="" />
                <img className='side-icon-img-color' src={cycleColor} alt="" />
              </div>
            </div>
            <div className=" class-elem class-elem2">
            <img className='bg-img' src={girlkarate} alt="" />
              <div className="text-container">
                <h6>Karate</h6>
                <div className="time">
                  <p>Friday: 10:00am-11:00am</p>
                </div>
              </div>
              <div className="side-icon">
                <img className='side-icon-img' src={karate} alt="" />
                <img className='side-icon-img-color' src={karateColor} alt="" />
              </div>
            </div>
            <div className="class-elem class-elem3">
            <img  className='bg-img'src={boypower} alt="" />
              <div className="text-container">
                <h6>Power</h6>
                <div className="time">
                  <p>Saturday: 9:00am-10:00am</p>
                </div>
              </div>
              <div className="side-icon">
                <img className='side-icon-img' src={power} alt="" />
                <img className='side-icon-img-color' src={powerColor} alt="" />
              </div>
            </div>
            <div className="class-elem class-elem4">
            <img className='bg-img' src={girlmeditation} alt="" />
              <div className="text-container">
                <h6>Meditation</h6>
                <div className="time">
                  <p>Friday: 1:00pm-2:00pm</p>
                </div>
              </div>
              <div className="side-icon">
                <img className='side-icon-img' src={meditation} alt="" />
                <img className='side-icon-img-color' src={meditationColor} alt="" />
              </div>
            </div>
            <div className="class-elem class-elem5">
            <img className='bg-img' src={boyMartialArts} alt="" />
              <div className="text-container">
                <h6>Martial Arts</h6>
                <div className="time">
                  <p>Sunday: 6:00pm-7:00pm</p>
                </div>
              </div>
              <div className="side-icon">
                <img className='side-icon-img' src={martialArt} alt="" />
                <img className='side-icon-img-color' src={martialArtsColor} alt="" />
              </div>
            </div>
            <div className="class-elem class-elem6">
            <img className='bg-img' src={boyWorkout} alt="" />
              <div className="text-container">
                <h6>Workout</h6>
                <div className="time">
                  <p>Monday: 4:00pm-5:00pm</p>
                </div>
              </div>
              <div className="side-icon">
                <img className='side-icon-img' src={workoutGirl} alt="" />
                <img className='side-icon-img-color' src={workoutGirlColor} alt="" />
              </div>
            </div>
          </div>
      </div>

      <div id="page4">
        <div id="page4-top">
          <img className='bg-img-top' src={ctaBg} alt="" />
          <h1>We Are Always Providing Best Fitness Service For You</h1>
          <div className="btn">
            <button className='box'></button>
            <button className='main-btn'>JOIN WITH US <FaArrowRight className='arrow'/></button>
          </div>
        </div>
        <div id="page4-btm">
          <img className='bg-img-btm' src={chooseBg} alt="" />
          <div className="page4-content">
            <div className="left-content">
              <img className='main-boy-img' src={mainImgBoy} alt="" />
              <div className="play">
                <img className='play-btn' src={play} alt="" />
              </div>
              <div className="line1"></div>
              <div className="line2"></div>
            </div>
            <div className="right-content">
              <div className="title">
             <img className='title-bg-img' src={titleBg} alt="" />
             <h6>WHY CHOOSE US</h6>
              </div>
              <h1>We Can Give A Shape Of Your Body Here!</h1>
              <p>At Gymate, we are dedicated to helping you achieve the body of your dreams. Our expert trainers and nutritionists will work with you to create a personalized fitness and nutrition plan that helps you reach your specific goals.</p>
              <div className="btn">
            <button className='box'></button>
            <button className='main-btn'>OUR CLASSES <FaArrowRight className='arrow'/></button>
          </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Home
