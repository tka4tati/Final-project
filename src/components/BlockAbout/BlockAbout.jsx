import React from 'react';
import './BlockAbout.scss';
import InteriorImage from '../../assets/images/interior-image2.png';
import { Button } from '../Button';

export const BlockAbout = () => {
  return (
    <div id="about" className="about__container">
        <img className="about__image" src={InteriorImage} alt="interior photo"  />
        <div className="about__text">
            <h5 className="about__text-subtitle">ABOUT US</h5>
            <h1 className="about__text-title">Interioris The Will of An Epoch Mextreo</h1>
            <p className="about__text-description">There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form injected
                humour, or randomised words which don't look even slightly
                believable.If you are going to use a passage of Lorem Ipsum,
                sure there isn't anything embarrassing hidden the middleof text.
                All the Lorem Ipsum generators on the Internettend to repeat
                predefined chunks as necessary,making this the first true
                generator on the Internet.</p>
            <Button text={"LEARN MORE"}/>
        </div>
    </div>
  )
}
