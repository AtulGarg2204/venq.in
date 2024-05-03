import React, { useState } from "react";
import "./signupstep.css";

import image1 from "../assets/signupstep-1.jpg";
import image2 from "../assets/signupstep-2.png";
import image3 from "../assets/signupstep-3.png";
import image4 from "../assets/signupstep-4.png";

const Signupstep = () => {
  const [currentImage, setCurrentImage] = useState(image1);
  const [currentDescription, setCurrentDescription] = useState();
  const [descriptions, setDescriptions] = useState({
    heading1: "",
    heading2: "",
    heading3: "",
    heading4: "",
  });

  const changeImage = (imageSrc, description, heading) => {
    setCurrentImage(imageSrc);
    setCurrentDescription(description);
    setDescriptions((prevDescriptions) => ({
      ...prevDescriptions,
      [heading]: description,
    }));
  };

  const clearDescription = () => {
    setDescriptions("");
  };

  return (
    <div className="signup-container">
      <div className="content">
        <div className="left-step">
          <div className="left-heading">
            <h1
              className="heading"
              style={{
              
              }}
            >
              HOW TO SUBCRIBE?
            </h1>
            <p className="left-desc">
              Enjoy the benefits of a completely online and <br /> seamless
              process
            </p>
          </div>
          <div className="signup-step1">
            <span className="step-number">1</span>
            <h2
              className="step-heading1"
              onMouseEnter={() =>
                changeImage(
                  image1,
                  "Register on the platform by entering your mobile number and finishing the OTP authentication process or via Whatsapp",
                  "heading1"
                )
              }
              onMouseLeave={clearDescription}
            >
              Sign up using your number
            </h2>
          </div>
          <p className="step1-desc">{descriptions.heading1}</p>
          <div className="signup-step2">
            <span className="step-number">2</span>
            <h2
              className="step-heading1"
              onMouseEnter={() =>
                changeImage(
                  image2,
                  "Complete your Know Your Customer (KYC) process by providing your PAN (Permanent Account Number) and add your bank account details.",
                  "heading2"
                )
              }
              onMouseLeave={clearDescription}
            >
              Complete KYC
            </h2>
          </div>
          <p className="step1-desc">{descriptions.heading2}</p>
          <div className="signup-step3">
            <span className="step-number">3</span>
            <h2
              className="step-heading1"
              onMouseEnter={() =>
                changeImage(
                  image3,
                  "Browse through the live campaigns and choose the one that is most suitable for you. Once you have selected a campaign, proceed for payment and complete the subscription process",
                  "heading3"
                )
              }
              onMouseLeave={clearDescription}
            >
              Explore
            </h2>
          </div>
          <p className="step1-desc">{descriptions.heading3}</p>
          <div className="signup-step4">
            <span className="step-number">4</span>
            <h2
              className="step-heading1"
              onMouseEnter={() =>
                changeImage(
                  image4,
                  "You can track your subscriptions and get an overview of number of units, current value and expected returns",
                  "heading4"
                )
              }
              onMouseLeave={clearDescription}
            >
              See your Wealth grow
            </h2>
          </div>
          <p className="step1-desc">{descriptions.heading4}</p>
        </div>
        <div className="right-image">
          <img className="step-image" src={currentImage} alt="Main Image" />
        </div>
      </div>
    </div>
  );
};

export default Signupstep;
