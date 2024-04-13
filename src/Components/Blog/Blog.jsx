import React from 'react'
import './Blog.scss';
import TopImage from '../TopImage/TopImage'
import LeftBlog from './LeftBlog/LeftBlog'

function Blog() {
  return (
    <div className='main-blog'>
      <TopImage title="Blog"/>
      <div id="content">
        <div id="left">
          <LeftBlog className="left-blog" title="Yoga For Everyone in 2022" img=""/>
          <LeftBlog className="left-blog" title="Getting Back Into CrossFit After Vacation" img=""/>
          <LeftBlog className="left-blog" title="Yoga For Everyone in 2022" img=""/>
          <LeftBlog className="left-blog" title="Getting Back Into CrossFit After Vacation" img=""/>
        </div>
        <div id="right"></div>
      </div>
    </div>
  )
}

export default Blog
