import React, { useState } from 'react';
import { useMediaQuery } from '@mui/material';
import './Partners.css';

const Partners = () => {
  const partnerArray = ["Landmark", "Whiteland", "Yugen", "Smart homes", "Partner 5", "Partner 6", "Partner 7", "Partner 8", "Partner 9"];

  const [startIndex, setStartIndex] = useState(0);
  const [buttonClicked, setButtonClicked] = useState(null);

  const isSmallScreen = useMediaQuery('(max-width: 600px)');

  const handleLeftClick = () => {
    setStartIndex((prev) => (prev - 1 + partnerArray.length) % partnerArray.length);
    setButtonClicked('button-left-clicked');
  };

  const handleRightClick = () => {
    setStartIndex((prev) => (prev + 1) % partnerArray.length);
    setButtonClicked('button-right-clicked');
  };

  const handleTransitionEnd = () => {
    setButtonClicked(null);
  };

  function getCyclicPartners(startIndex, count) {
    const end = startIndex + count;
    if (end < partnerArray.length) {
      return partnerArray.slice(startIndex, end);
    } else {
      const firstSlice = partnerArray.slice(startIndex);
      const rest = count - firstSlice.length;
      const lastSlice = partnerArray.slice(0, rest);
      return [...firstSlice, ...lastSlice];
    }
  }

  const visiblePartners = getCyclicPartners(startIndex, isSmallScreen ? 3 : 6);

  return (
    <div className='partnerbox'>
    <div className="partners-text">
        <h2 className="partners-heading">OUR PARTNERS</h2>
      </div>
      <div className={`partners-section partners-container ${buttonClicked}`} onTransitionEnd={handleTransitionEnd}>
      

      <div className={`partners-list ${isSmallScreen ? 'small-screen' : ''}`}>
        <img src='images/less-than-solid.svg' onClick={handleLeftClick} />
        {visiblePartners.map((partner, index) => (
          <div key={index} className={`partner partner-${index + 1}`}>
            {partner}
          </div>
        ))}
        <img src='images/greater-than-solid.svg' onClick={handleRightClick} />
      </div>

      
    </div>
    </div>
      
    
  );
};

export default Partners;