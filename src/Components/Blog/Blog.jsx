import React, { useState } from 'react'
import './Blog.scss';
import TopImage from '../TopImage/TopImage'
import LeftBlog from './LeftBlog/LeftBlog'
import { IoSearch } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

import {yogaBig, yogaSmall, meditationBig, meditationSmall, girlsLegBig, girlBoxingBig, girlBoxingSmall, girlBoyBoxing, fitnessAmbassadarBig, fitnessAmbassadarSmall, boyLiftingSmall, crossfit, sideBar} from '../Images/index';

function Blog() {
  const [searchValue, setSearchValue] = useState('')

  const handleChange = (e) =>{
    setSearchValue(e.target.value)
  }

  const clearSearch = () =>{
    setSearchValue('')
  }

  return (
    <div className='main-blog'>
      <TopImage title="Blog"/>
      <div id="content">
        <div id="left">
          <LeftBlog className="left-blog" title="Yoga For Everyone in 2022" img={yogaBig}/>
          <LeftBlog className="left-blog" title="Getting Back Into CrossFit After Vacation" img={crossfit}/>
          <LeftBlog className="left-blog" title="Meet Fitness Ambassador Grace" img={fitnessAmbassadarBig}/>
          <LeftBlog className="left-blog" title="The Best are European Materls Direct" img={meditationBig}/>
          <LeftBlog className="left-blog" title="Give your Fitness a Boost with our Gym" img={girlBoxingBig}/>
          <LeftBlog className="left-blog" title="How to Get Fit Your Kids Moving Throughout The Summer" img={girlsLegBig}/>
          <LeftBlog className="left-blog" title="Give your fitness a boost with our new gym challenge" img={girlBoyBoxing}/>
        </div>
        <div id="right">
          <div className="elem1">
              <div className="top">
              <div className='search-bar'>
              <input 
              type="text" 
              placeholder='Search...'
              value={searchValue}
              onChange={handleChange}
              />
             {searchValue.length > 0 && (
                <span className='clear-search' onClick={clearSearch}>&#10006;</span>
              )}
              </div>
              <button className='search-icon'><IoSearch /></button>
              </div>

              <div className="btm">
                <h6>Categories</h6>
                <div className="line"></div>
                <div className="categories">
                  <IoIosArrowForward className='arrow-right'/>
                  <p>Body Building</p>
                  <p className='four'>(4)</p>
                </div>
                <div className="categories">
                  <IoIosArrowForward className='arrow-right'/>
                  <p>Boxing</p>
                  <p className='four'>(4)</p>
                </div>
                <div className="categories">
                  <IoIosArrowForward className='arrow-right'/>
                  <p>Crossfit</p>
                  <p className='four'>(4)</p>
                </div>
                <div className="categories">
                  <IoIosArrowForward className='arrow-right'/>
                  <p>Fitness</p>
                  <p className='four'>(4)</p>
                </div>
                <div className="categories">
                  <IoIosArrowForward className='arrow-right'/>
                  <p>Meditation</p>
                  <p className='four'>(4)</p>
                </div>
                <div className="categories">
                  <IoIosArrowForward className='arrow-right'/>
                  <p>Yoga</p>
                  <p className='four'>(4)</p>
                </div>
              </div>
          </div>
          <div className="elem2">
            <h6>Recent Posts</h6>
            <div className="line"></div>
            <div className="posts">
              <div className="img">
                <img src={yogaSmall} alt="" />
              </div>
              <div className="text">
                <p>March22, 2024</p>
                <h6>Yoga For Everyone in 2024</h6>
              </div>
            </div>
            <div className="posts">
              <div className="img">
                <img src={boyLiftingSmall} alt="" />
              </div>
              <div className="text">
                <p>March22, 2024</p>
                <h6>Getting back into crossFit</h6>
              </div>
            </div>
            <div className="posts">
              <div className="img">
                <img src={fitnessAmbassadarSmall} alt="" />
              </div>
              <div className="text">
                <p>March22, 2024</p>
                <h6>Meet fitness ambassadar Grace</h6>
              </div>
            </div>
            <div className="posts">
              <div className="img">
                <img src={meditationSmall} alt="" />
              </div>
              <div className="text">
                <p>March22, 2024</p>
                <h6>The best are european meditation practitioner</h6>
              </div>
            </div>
            <div className="posts">
              <div className="img">
                <img src={girlBoxingSmall} alt="" />
              </div>
              <div className="text">
                <p>March22, 2024</p>
                <h6>Learn boxing with our trainer john</h6>
              </div>
            </div>
            <div className="posts">
              <div className="img">
                <img src={girlsLegBig} alt="" />
              </div>
              <div className="text">
                <p>March22, 2024</p>
                <h6>how to get lean for the summer</h6>
              </div>
            </div>
          </div>
          <div className="elem3">
            <div className="top">
              <h6>Popular Tags</h6>
              <div className="line"></div>
              <div className="btn">
                <button>#Crossfit</button>
                <button>#Fitness</button>
                <button>#Gym</button>
                <button>#Meditation</button>
                <button>#Running</button>
                <button>#Workout</button>
                <button>#Yoga</button>
                <button>#Boxing</button>
              </div>
            </div>

            <div className="btm">
              <img src={sideBar} alt="" />
              <div className="box">
                <h1>GYMAT</h1>
              </div>
              <h6>34%</h6>
              <p>Flat Discount</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
