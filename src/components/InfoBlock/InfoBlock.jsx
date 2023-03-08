import React from 'react';
import './InfoBlock.scss';
import InteriorImage from '../../assets/images/interior-image1.png';
import { Button } from '../Button';

export const InfoBlock = () => {
  return (
    <div id="home" className="info__container">
        <div className="info__block">
            <h5 className="info__block-subtitle">MODERN INTERIOR</h5>
            <h1 className="info__block-title">Create Your Interior Design.</h1>
            <p className="info__block-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            <Button text={"CONTACT"}/>
        </div>
        <img className="info__image" src={InteriorImage} alt="interior photo"/>
    </div>
  )
}
