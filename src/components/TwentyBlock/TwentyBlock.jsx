import React from 'react';
import './TwentyBlock.scss';
import { Button } from '../Button';
import TwentyImage from '../../assets/images/twenty.png';
import InteriorImage from '../../assets/images/interior-image3.png';

export const TwentyBlock = () => {
  return (
    <div className="twenty__container">
        <div className="twenty__block">
            <img className="twenty__block-image" src={TwentyImage} alt="twenty"/>
            <h1>Years Of Successful Working The Market</h1>
            <Button text={"READ MORE"} />
        </div>
        <img className="twenty__image" src={InteriorImage} alt="interior image"/>
    </div>
  )
}
