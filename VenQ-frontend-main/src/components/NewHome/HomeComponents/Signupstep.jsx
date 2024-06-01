import React, { useState } from "react";
import "./signupstep.css";

import image1 from "../assets/signupstep-1.jpg";
import image2 from "../assets/signupstep-2.png";
import image3 from "../assets/signupstep-3.png";
import image4 from "../assets/signupstep-4.png";

const Signupstep = () => {
  const [currentImage, setCurrentImage] = useState(image2);
  const [currentDescription, setCurrentDescription] = useState();
  const [descriptions, setDescriptions] = useState({
    heading1:
      "Explore a diverse range of investment opportunities, from residential to commercial properties, tailored to your preferences.",
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
              style={
                {
                  // paddingTop: "60px"
                }
              }
            >
              How To Subcribe?
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
                  image2,
                  "Explore a diverse range of investment opportunities, from residential to commercial properties, tailored to your preferences.",
                  "heading1"
                )
              }
              onMouseLeave={clearDescription}
            >
              Browse
            </h2>
          </div>
          <p className="step1-desc">{descriptions.heading1}</p>
          <div className="signup-step2">
            <span className="step-number">2</span>
            <h2
              className="step-heading1"
              onMouseEnter={() =>
                changeImage(
                  image3,
                  "Invest seamlessly by subscribing to fractional ownership in premium properties, with options starting from Rs 5,000.",
                  "heading2"
                )
              }
              onMouseLeave={clearDescription}
            >
              Subscribe
            </h2>
          </div>
          <p className="step1-desc">{descriptions.heading2}</p>
          <div className="signup-step3">
            <span className="step-number">3</span>
            <h2
              className="step-heading1"
              onMouseEnter={() =>
                changeImage(
                  image4,
                  "Monitor your investments in real-time, track performance metrics, and stay updated on property developments through our user-friendly platform.",
                  "heading3"
                )
              }
              onMouseLeave={clearDescription}
            >
              Track
            </h2>
          </div>
          <p className="step1-desc">{descriptions.heading3}</p>
          <div className="signup-step4">
            <span className="step-number">4</span>
            <h2
              className="step-heading1"
              onMouseEnter={() =>
                changeImage(
                  image1,
                  "Enjoy flexible exit options with our platform, allowing you to liquidate investments or exit projects based on your investment strategy and financial goals.",
                  "heading4"
                )
              }
              onMouseLeave={clearDescription}
            >
              Exit
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
