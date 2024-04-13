import React, { useState } from 'react'
import './Gallery.scss'
import TopImage from '../TopImage/TopImage'

import {Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6, Gallery7, Gallery8, Gallery9, girlGymnastic, girlLifting,Gallery10,  girlRope} from '../Images/index';

function Gallery() {
  const [activePage, setActivePage] = useState(1); // Initialize activePage as 1

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <div className='main-gallery'>
      <TopImage title="Gallery" />
      <div className="images">
       <div className={`page page1 ${activePage === 1 ? 'active' : ''}`}>
        <div className="image">
        <div className="img">
        <img src={girlGymnastic} alt="" />
        </div>
        <div className="img">
        <img src={Gallery2} alt="" />
        </div>
        <div className="img">
        <img src={Gallery4} alt="" />
        </div>
        <div className="img">
        <img src={Gallery3} alt="" />
        </div>
        <div className="img">
        <img src={Gallery5} alt="" />
        </div>
        <div className="img">
        <img src={Gallery6} alt="" />
        </div>
        <div className="img">
        <img src={Gallery7} alt="" />
        </div>
        <div className="img">
        <img src={Gallery9} alt="" />
        </div>
        </div>
        
        </div>
        <div className={`page page2 ${activePage === 2 ? 'active' : ''}`}>
       <div className="image">
       <div className="img">
        <img src={Gallery8} alt="" />
        </div>
        <div className="img">
        <img src={girlLifting} alt="" />
        </div>
        <div className="img">
        <img src={Gallery10} alt="" />
        </div>
        <div className="img">
        <img src={girlRope} alt="" />
        </div>
       </div>
        </div>

       <div className="button">
       <button onClick={() => handlePageChange(1)} className={`btn ${activePage === 1 ? 'active' : ''}`}>1</button>
        <button onClick={() => handlePageChange(2)} className={`btn ${activePage === 2 ? 'active' : ''}`}>2</button>
       </div>
      </div>
    </div>
  )
}

export default Gallery
