import React from "react";
import "./kycsteps.css";
import { useState } from "react";

const KycSteps = () => {
  const [progress, setProgress] = useState(1);

  const handleButtonClick = () => {
    setProgress((prevProgress) => (prevProgress < 3 ? prevProgress + 1 : 1));
  };

  return (
    <div className="rectangle-box">
      <div className="left-box">KYC</div>
      <div className="progress-container">
        <div className="step-labels">
          <span className={`step-label ${progress >= 1 ? 'active-not-started' : ''}`}>Not Started</span>
          <span className={`step-label ${progress >= 2 ? 'active-pending' : ''}`}>Pending</span>
          <span className={`step-label ${progress >= 3 ? 'active-completed' : ''}`}>Completed</span>
        </div>
        <div className="step-progress-bar">
          <div className={`progress-bar progress-${progress}`}></div>
          <div className="step-circles">
            <div className={`circle ${progress >= 1 ? 'active' : ''}`}></div>
            <div className={`circle ${progress >= 2 ? 'active' : ''}`}></div>
            <div className={`circle ${progress >= 3 ? 'active' : ''}`}></div>
          </div>
        </div>
      </div>
      <button className="progress-button" onClick={handleButtonClick}>
        Next
      </button>
    </div>
  );
};

export default KycSteps;
