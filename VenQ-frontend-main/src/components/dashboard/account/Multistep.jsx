import React, { useState } from 'react';
import './multistep.css'; // Import the CSS styles

const MultiStep = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const updateSteps = (step) => {
    setCurrentStep(step);
  };

  const handleButtonClick = (step) => {
    updateSteps(step);
  };
<script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/45720526.js"></script>
  return (
    <div className="container">
      <div className="steps-container">
        {[1, 2, 3, 4].map((stepNumber) => (
          <span key={stepNumber}>
            {stepNumber > 1 && <div className="line"></div>}
            <span
              className={`step-circle ${stepNumber === currentStep ? 'active' : ''}`}
            >
              {stepNumber}
            </span>
          </span>
        ))}
        <div className="progress-bar-container">
          <span
            className="progress-indicator"
            style={{
              width: `${((currentStep - 1) / 3) * 100}%`,
            }}
          ></span>
        </div>
      </div>
      <div className="action-buttons">
        <button
          id="prev"
          disabled={currentStep === 1}
          onClick={() => handleButtonClick(currentStep - 1)}
        >
          Prev
        </button>
        <button
          id="next"
          disabled={currentStep === 4}
          onClick={() => handleButtonClick(currentStep + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MultiStep;