import React from 'react';
import './experience.css';

const Experience = () => {
    return (
        <div className="experience-container">
            <div className="exp-div">
                <a href="https://lastfarewells.com" target="_blank">
                    <div className="exp-img-container">
                        <img
                            src={require('../../assets/experience/lastfarewells.png')}
                            className="exp-img"
                        />
                    </div>
                </a>
            </div>
            <div className="exp-div">
                <a href="https://thankyouspot.com" target="_blank">
                    <div className="exp-img-container">
                        <img
                            src={require('../../assets/experience/thankyouspot.png')}
                            className="exp-img"
                        />
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Experience;
