import React, { useState } from 'react'
import './Home.scss'
import RunningGirl from '../RunningGirl/RunningGirl';
import { FaArrowRight, FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoIosArrowUp } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

import { hero, titleBg, bgimg, cardimg, timer, workout, nutritions, cycle, girlcycling, karate, girlkarate, power, boypower, meditation, girlmeditation, martialArt, boyMartialArts, workoutGirl, boyWorkout, cycleColor, karateColor, powerColor, meditationColor, martialArtsColor, workoutGirlColor, chooseBg, ctaBg, fitness, gymEquipment, gymBag, bottle, mainImgBoy, play , anaJune, atrleticClub, boyAbs, colon, fitnessClub, girlBoxing, girlGymnastic, girlLifting, girlRope, gymClub, johnLewis, jonathanDoe, mountainsArrow, muscle, page5Bg, page5BgDumble, page6BoyRope, powerLifting, testimonialGirl, testimonialShape, trainHard, trainerBg  , page8Bg } from '../Images/index';
import PricingComponent from '../PricingComponent/PricingComponent';

function Home() {

  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState('');
  const [status, setStatus] = useState('');

  // Function to calculate BMI and status
  const calculateBMI = () => {
      const heightMeters = height / 100; // Convert height from cm to meters
      const bmiValue = weight / (heightMeters * heightMeters);
      setBMI(bmiValue.toFixed(1)); // Round BMI to one decimal place

      if (bmiValue < 18.5) {
          setStatus('Underweight');
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
          setStatus('Normal');
      } else {
          setStatus('Overweight');
      }
  };

  return (
    <div className='main-home'>
      <div id="page1">
        <img className='main-img'  src={hero} alt="" />
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
         <RunningGirl withMidClass1={true}/>
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
              <div className="four-elems">
                <div className="elem elem1">
                  <div className="img-div">
                    <img className='images' src={fitness} alt="" />
                    <h6>Free Fitness Training</h6>
                  </div>
                </div>
                <div className="elem elem2">
                <div className="img-div">
                    <img className='images' src={gymEquipment} alt="" />
                    <h6>Modern Gym Equipments</h6>
                  </div>
                </div>
                <div className="elem elem3">
                <div className="img-div">
                    <img className='images' src={gymBag} alt="" />
                    <h6>Gym Bag Equipments</h6>
                  </div>
                </div>
                <div className="elem elem4">
                <div className="img-div">
                    <img className='images' src={bottle} alt="" />
                    <h6>Fresh Bottle Water</h6>
                  </div>
                </div>
              </div>
              <div className="btn">
            <button className='box'></button>
            <button className='main-btn'>OUR CLASSES <FaArrowRight className='arrow'/></button>
          </div>
            </div>
          </div>
        </div>
      </div>

      <div id="page5">
         <div id="page5-top">
          <img className='bg-img' src={page5Bg} alt="" />
          <img className='small-bg-img' src={page5BgDumble} alt="" />
          <div className="top-up">
          <div className="title">
             <img className='title-bg-img' src={titleBg} alt="" />
             <h6>GYM TRAINERS</h6>
              </div>
            <h1>Team Of Expert Coaches</h1>
            <p>Expert team of coaches helps you succeed in any goal,
              personalized guidance and motivation provided!</p>
          </div>
          <div className="top-down">
            <div className="cards">
              <div className="card card1">
                <div className="card-top">
                  <img className='trainer-bg' src={trainerBg} alt="" />
                  <img className='trainer' src={johnLewis} alt="" />
                </div>
                <div className="card-btm">
                <div className="arrow-div">
                  <img className='arrow' src={mountainsArrow} alt="" />
                  <IoIosArrowUp  className='arrow-up'/>
                  </div>
                  <h6>John Lewis</h6>
                  <p>Yoga Trainer</p>
                  <div className="icons">
                    <FaFacebookF/>
                    <FaTwitter />
                    <FaInstagram />
                    <CiMail />
                  </div>
                  <div className="line line1"></div>
                  <div className="line line2"></div>
                </div>
              </div>
              <div className="card card2">
              <div className="card-top">
                  <img className='trainer-bg' src={trainerBg} alt="" />
                  <img className='trainer' src={jonathanDoe} alt="" />
                </div>
                <div className="card-btm">
                  <div className="arrow-div">
                  <img className='arrow' src={mountainsArrow} alt="" />
                  <IoIosArrowUp  className='arrow-up'/>
                  </div>
                  <h6>Jonathan Doe</h6>
                  <p>Crossfit Trainer</p>
                  <div className="icons">
                    <FaFacebookF />
                    <FaTwitter />
                    <FaInstagram />
                    <CiMail />
                  </div>
                  <div className="line line1"></div>
                  <div className="line line2"></div>
                </div>
              </div>
              <div className="card card3">
              <div className="card-top">
                  <img className='trainer-bg' src={trainerBg} alt="" />
                  <img className='trainer' src={anaJune} alt="" />
                </div>
                <div className="card-btm">
                <div className="arrow-div">
                  <img className='arrow' src={mountainsArrow} alt="" />
                  <IoIosArrowUp  className='arrow-up'/>
                  </div>
                  <h6>Ana June</h6>
                  <p>Personal Trainer</p>
                  <div className="icons">
                    <FaFacebookF />
                    <FaTwitter />
                    <FaInstagram />
                    <CiMail />
                  </div>
                  <div className="line line1"></div>
                  <div className="line line2"></div>
                </div>
              </div>
            </div>
          </div>
         </div>
         <div id="page5-btm">
         <div className="title">
             <img className='title-bg-img' src={titleBg} alt="" />
             <h6>TESTIMONIALS</h6>
              </div>
              <div className="box">
                <div className="box-left">
                  <div className="blue-box">
                    <img src={testimonialGirl} alt="" />
                  </div>
                </div>
                <div className="box-right">
                  <img className='colon' src={colon} alt="" />
                  <p>“I've been a member of Gymate for the past 6 months and it has been an amazing experience. The trainers are knowledgeable and supportive, the equipment is top-notch, and the community of members is friendly and encouraging.”</p>
                  <h6>Harry Potter</h6>
                  <h5>CEO of Hogwarts</h5>
                  <img className='machine' src={testimonialShape} alt="" />
                  <div  className="arrow">
                    <div className="arrow1">
                    <FaArrowLeftLong className='arrows'/>
                    </div>
                    <div className="arrow2">
                    <FaArrowRightLong className='arrows'/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="club">
                <img src={atrleticClub} alt="" />
                <img src={fitnessClub} alt="" />
                <img src={gymClub} alt="" />
                <img src={muscle} alt="" />
                <img src={powerLifting} alt="" />
              </div>
         </div>
      </div>

      <div id="page6">
        <div id="page6-top">
          <img className='train-hard' src={trainHard} alt="" />
        <div className="title">
             <img className='title-bg-img' src={titleBg} alt="" />
             <h6>GYMAT GALLERY</h6>
              </div>

              <h2>Our Workplace Gallery</h2>
              <p>Our Workplace Gallery features modern office, team collaboration, and fun culture.
                Attracts talents and showcases company's work atmosphere.</p>

                <div className="images">
                  <div className="img img1">
                    <img src={girlBoxing} alt="" />
                  </div>
                  <div className="img img2">
                    <img src={girlLifting} alt="" />
                  </div>
                  <div className="img img3">
                    <img src={girlRope} alt="" />
                  </div>
                  <div className="img img4">
                    <img src={boyAbs} alt="" />
                  </div>
                  <div className="img img5">
                    <img src={girlGymnastic} alt="" />
                  </div>
                </div>
        </div>
        <div id="page6-btm">
          <div className="btm-left">
            <h1>Let's Calculate Your <span>BMI</span></h1>
            <p>Easily determine your body mass index with our accurate calculation tool.</p>
            <div className="input">
              <div className="weight">
                <input
                 type="text" 
                placeholder='Weight / kg' 
                value={weight}
                 onChange={(e) => setWeight(e.target.value)}/>
                <h6>Your BMI is: <span>{bmi}</span></h6>
              </div>
              <div className="height">
                <input
                 type="text"
                 placeholder='Height / cm' 
                value={height}
                onChange={(e) => setHeight(e.target.value)}/>
                <h6>Your weight is: <span>{status}</span></h6>
              </div>
            </div>
            <button onClick={calculateBMI}>CALCULATE</button>
          </div>
          <div className="btm-right">
            <img src={page6BoyRope} alt="" />
          </div>
        </div>
      </div>

    
    <PricingComponent />

    <div id="page8">
      <div id="page8-top">
      <div className="title">
             <img className='title-bg-img' src={titleBg} alt="" />
             <h6>LATEST BLOG</h6>
              </div>
              <h1>Our Recent News</h1>
              <p>Gymat an unknown printer took a galley of type and scrambled make a type specimen book.</p>

              <div className="cards">
                <div className="card card1">
                  <button className='date'>22.03.2022 </button>
                  <h6>Yoga For Everyone in 2023</h6>
                  <p>This is program designed to make the practice of yoga beneficial for people of all ages, abilities, and backgrounds.</p>
                  <button className='btn'>READ MORE <FaArrowRight className='arrow'/></button>
                </div>
                <div className="card card2">
                <button className='date'> 13.09.2022</button>
                  <h6>Getting Back Into CrossFit After Vacation</h6>
                  <p>Learn how to ease back into your CrossFit routine after a vacation with tips and strategies for success.</p>
                  <button className='btn'>READ MORE <FaArrowRight className='arrow'/></button>
                </div>
                <div className="card card3">
                <button className='date'>28.06.2022 </button>
                  <h6>Meet Fitness Ambassador Grace</h6>
                  <p>Get to know Grace, a fitness enthusiast and dedicated ambassador who is passionate about helping others reach their fitness goals.</p>
                  <button className='btn'>READ MORE <FaArrowRight className='arrow'/></button>
                </div>
              </div>
      </div>
      <div id="page8-btm">
        <img src={page8Bg} alt="" />
        <h1>Need a Fitness Trainer?</h1>
        <h2><span>Call:</span> +123-456789</h2>
        <div className="btn">
            <button className='box'></button>
            <button className='main-btn'>PURCHASE NOW</button>
          </div>
      </div>
    </div>
   

    </div>
  )
}

export default Home
