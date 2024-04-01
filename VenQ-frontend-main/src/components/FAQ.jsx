import React, { useState } from 'react';
import { useMediaQuery } from '@mui/material';

import './FAQ.css';

const FAQ = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const faqData = [
    { question: 'How does VenQ stand out in real estate investing?', answer: "VenQ distinguishes itself by being India's first platform enabling real estate investments with a low entry of ₹10,000." },
    { question: 'What property options are on VenQ, and can I choose my investments?', answer: "VenQ offers various property options, including residential, plots, and rental-focused properties. You have the freedom to choose investments that align with your preferences." },
    { question: 'What is the minimum investment to start on VenQ?', answer: "The minimum investment to start on VenQ is just ₹10,000, making real estate accessible to a broader audience." },
    { question: 'How does VenQ ensure investment security and transparency?', answer: "VenQ ensures investment security and transparency through Compulsory Convertible Debentures (CCDs), aligning investor interests with the property's success." },
    { question: 'Can I sell or exit my investment before property sale on VenQ?', answer: "Yes, you can sell or exit your investment before the property sale by listing and trading your CCDs on the VenQ platform, providing flexibility and liquidity."},
  ];

  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className={`faq-section ${isSmallScreen ? 'small-screen' : ''}`}>
      <div className="left-section">
        <h2 className="faq-heading">STILL HAVE QUESTIONS?</h2>
        <p className="faq-paragraph">We have the answers.</p>
      </div>

      <div className={`right-section ${isSmallScreen ? 'small-screen' : ''}`}>
        {faqData.map((faq, index) => (
          <div key={index} className={`faq-item ${openDropdown === index ? 'open' : ''}`}>
            <button className="dropdown-button arro" onClick={() => toggleDropdown(index)}>
              {faq.question}
            </button>
            <div className="dropdown-content">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
