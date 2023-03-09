import React from 'react';
import './Feedbacks.scss';


export const FeedbacksProfile = ({photo, profileName, post}) => {
  return (
    <div className="feedbacks__profile">
        <img className="feedbacks__profile-photo" src={photo} alt="user photo"/>
        <div className="feedbacks__profile-text">
            <p className="feedbacks__profile-user">
                <span className="feedbacks__profile-name">{profileName}</span>
                <span className="feedbacks__profile-post"> {post}</span>
            </p>
                <p className="feedbacks__profile-description">Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </div>
  )
}
