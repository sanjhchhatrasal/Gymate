import React from 'react'
import "./TopImage.scss"
import banner from '../../assets/images/banner.jpg'

function TopImage(prop) {
  return (
    <div className='main-TopImage'>
      <img src={banner} alt="" />
      <h1>{prop.title}</h1>
    </div>
  )
}

export default TopImage
