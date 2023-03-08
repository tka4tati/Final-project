import React from 'react';
import './ServiceBlock.scss';

export const ServiceBox = ({icon, title, description, filter}) => {
  
  return (
    <div className={`service__directions-container ${filter === "architecture" ? "architecture" : ""}`}>
        <div className="service__directions-box">
            <img src={icon}/>
            <div>
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
        </div>
    </div>
  )
}
