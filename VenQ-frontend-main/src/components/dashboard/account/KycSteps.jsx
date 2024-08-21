import React, { useState, useEffect } from "react";
import "./kycsteps.css";

const KycSteps = ({ onbcomp  }) => {
  // Initialize progress based on onbcomp prop
  const [progress, setProgress] = useState(onbcomp || 0);

  useEffect(() => {
    // Update progress if onbcomp changes
    if (onbcomp !== undefined) {
      setProgress(onbcomp);
    }
  }, [onbcomp]);

  const handleButtonClick = () => {
    setProgress((prevProgress) => (prevProgress < 2 ? prevProgress + 1 : 0));
  };

  return (
    <div className="rectangle-box">
      <div className="left-box">KYC</div>
      <div className="progress-container">
        <div className="step-labels">
          <span className={`step-label ${progress === 0 ? "active-not-started" : ""}`}>Not Started</span>
          <span className={`step-label ${progress === 1 ? "active-pending" : ""}`}>Pending</span>
          <span className={`step-label ${progress === 2 ? "active-completed" : ""}`}>Completed</span>
        </div>
        <div className="step-progress-bar">
          <div className={`progress-bar progress-${progress}`}></div>
          <div className="step-circles">
            <div className={`circle ${progress >= 0 ? "active" : ""}`}></div>
            <div className={`circle ${progress >= 1 ? "active" : ""}`}></div>
            <div className={`circle ${progress >= 2 ? "active" : ""}`}></div>
          </div>
        </div>
      </div>
      <button className="progress-button" >Next</button>
    </div>
  );
};

export default KycSteps;
