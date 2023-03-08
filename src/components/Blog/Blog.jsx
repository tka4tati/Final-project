import React from 'react';
import './Blog.scss';
import { BlogNews } from './BlogNews';
import InteriorImage1 from '../../assets/images/interior-image4.png';
import InteriorImage2 from '../../assets/images/interior-image5.png';


export const Blog = () => {
  return (
    <div  className="blog">
      <div  id="blog" className='blog__container'>
        <h5 className='blog__subtitle'>LETEST NEWS</h5>
        <h1 className='blog__title'>From Our Blog</h1>
        <div className='blog__news'>
            <BlogNews image={InteriorImage1} title={"2020 Interior Design Trends"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua."}/>
            <BlogNews image={InteriorImage2} title={"28 Notable Product at ARC Interior Design"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua."}/>
        </div>
      </div>
    </div>
  )
}
