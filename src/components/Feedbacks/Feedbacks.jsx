import React from 'react';
import './Feedbacks.scss';
import { FeedbacksProfile } from './FeedbacksProfile';
import ProfilePhoto1 from '../../assets/images/user-photo1.png';
import ProfilePhoto2 from '../../assets/images/user-photo2.png';
import Carousel from 'react-bootstrap/Carousel';

export const Feedbacks = () => {
  return (
    <div className="feedbacks__container">
        <h5 className="feedbacks__subtitle">TESTIMONIALS</h5>
        <h1 className="feedbacks__title">Client says about us</h1>
        
        <Carousel
            interval={null}
            indicators={false}
            nextIcon={
                <div className="feedbacks__carousel-path feedbacks__carousel-path_right">
                    <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5.5L1 10" stroke="#646464" strokeWidth="2"/>
                    </svg>
                </div>
              }
              prevIcon={
                <div className="feedbacks__carousel-path feedbacks__carousel-path_left">
                    <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 1L2 5L6 9" stroke="#646464" strokeWidth="2"/>
                    </svg>
                </div>
              }
        >
            <Carousel.Item>
                <div className="feedbacks__blocks">
                <FeedbacksProfile photo={ProfilePhoto1} profileName={"Louis Saville"} post={"/CEO at Google inc"} />
                <FeedbacksProfile photo={ProfilePhoto2} profileName={"Rekha Varadwaz"} post={"/Manager at Nike inc"} />
                </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="feedbacks__blocks">
                <FeedbacksProfile photo={ProfilePhoto1} profileName={"Louis Saville 2"} post={"/CEO at Google inc"} />
                <FeedbacksProfile photo={ProfilePhoto2} profileName={"Rekha Varadwaz 2"} post={"/Manager at Nike inc"} />
                </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="feedbacks__blocks">
                <FeedbacksProfile photo={ProfilePhoto1} profileName={"Louis Saville 3"} post={"/CEO at Google inc"} />
                <FeedbacksProfile photo={ProfilePhoto2} profileName={"Rekha Varadwaz 3"} post={"/Manager at Nike inc"} />
            </div>
            </Carousel.Item>
        </Carousel>
    </div>
  )
}
