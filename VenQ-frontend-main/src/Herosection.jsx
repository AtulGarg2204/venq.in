import React, { useRef, useState, useEffect } from 'react';
import Body from './Herosection/Body';
import DailyFinance from './Herosection/DailyFinance';
import Cards from './Herosection/Cards';
import WorkTimeline from './Herosection/WorkTimeline';
import Showcase from './Herosection/Showcase';
import CardFunction from './Herosection/CardFunction';
import Investment from './Herosection/Investment';
import Crypto from './Herosection/Crypto';
import CryptoAssets from './Herosection/CryptoAssets';
import Advantage from './Herosection/Advantage';
import Prices from './Herosection/Prices';
import Footer from './Herosection/Footer';
import Testimonial from './Herosection/Testimonial';
import FAQ from './Herosection/FAQ';
import './herosection.css' 

const Herosection = () => {
  const workTimelineRef = useRef(null); // Ref for WorkTimeline
  const [isLoggedIn, setLoggedIn] = useState(false);
  const token = JSON.parse(localStorage.getItem("userinfo"));

  useEffect(() => {
    if (token) {
      setLoggedIn(true);
    }

    // Only add the widget if not on a small screen
  }, [token]);

  return (
    <div className="overflow-hidden">
      <Body workTimelineRef={workTimelineRef} /> {/* Pass the ref to Body */}
      <DailyFinance />
      <Cards />
      <CardFunction />
      <CryptoAssets />
      <div ref={workTimelineRef}>
        <WorkTimeline />
      </div>
      <Prices />
      <Investment />
      <Testimonial />
      <Advantage />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Herosection;
