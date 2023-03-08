import React from 'react';
import './Infographics.scss';

export const Infographics = () => {
  return (
    <div  className="infographics">
        <div  id="projects" className="infographics__container">
            <div className="infographics__text">
                <h1>3000+ Completed Work</h1>
                <h1>Which WE have Successfully Done</h1>
                
            </div>
            <div className="infographics__block">
                <div className="infographics__block-up">
                    <div className="infographics__box">
                        <h1 className="infographics__box-number">980</h1>
                        <p className="infographics__box-description">Project</p>
                    </div>
                </div>
                <div className="infographics__block-down">
                    <div className="infographics__box">
                        <h1 className="infographics__box-number">520</h1>
                        <p className="infographics__box-description">Happy Client</p>
                    </div>
                </div>
                <div className="infographics__block-up">
                    <div className="infographics__box">
                        <h1 className="infographics__box-number">330</h1>
                        <p className="infographics__box-description">Winners</p>
                    </div>
                </div>
                <div className="infographics__block-down">
                    <div className="infographics__box">
                        <h1 className="infographics__box-number">120</h1>
                        <p className="infographics__box-description">Recoment</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
