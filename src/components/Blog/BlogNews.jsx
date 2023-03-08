import React from 'react';
import './Blog.scss';

export const BlogNews = ({image, title, description}) => {
  return (
    <div className="blog__news-item">
        <img src={image} alt="interior image"/>
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="blog__button"> CONTINUE READING....</button>
    </div>
  )
}
