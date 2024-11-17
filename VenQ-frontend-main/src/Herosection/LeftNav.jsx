import React from 'react';

const LeftNav = ({ leftNavRef, activeSection, handleSectionClick }) => {
  const sections = [
    "Real Estate Meets the Digital Age",
    "F.I.G. Your Property, Your Investors, Our Support",
    "TimeShare. Invest, Stay, Earn",
    "List, Tokenize, Profit",
    "BrokerConnect | Join the Broker Network, Tap the Retail Investors"
  ];

  return (
    <div ref={leftNavRef} className="left border-l p-10 w-1/4 h-full">
      {sections.map((title, index) => (
        <h1
          key={index}
          className={`mt-4 cursor-pointer ${activeSection === index ? 'text-black font-bold' : 'text-zinc-400'}`}
          onClick={() => handleSectionClick(index)}
        >
          {title}
        </h1>
      ))}
    </div>
  );
};

export default LeftNav;
