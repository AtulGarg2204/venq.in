// Services.jsx
import React from "react";
import "./Services.css"; // Add your CSS file
import { useMediaQuery } from "@mui/material";
import ServiceSlider from "./ServiceSlider";

const Services = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <>
      <div
        className={`custom-services-section ${
          isSmallScreen ? "small-screen" : ""
        }`}
      >
        {/* Conditionally render based on screen size */}
        {isSmallScreen ? (
          <>
            {/* Right Div with Title and Paragraph */}
            <div className="custom-services-right-div">
              <h2
                className={`custom-services-title ${
                  isSmallScreen ? "small-screen-title" : ""
                }`}
              >
                WHY VENQ?
              </h2>
              {/* <p
                className={`custom-services-paragraph ${
                  isSmallScreen ? "small-screen-paragraph" : ""
                }`}
              >
                Venq is India's First platform that makes real estate investment
                accessible with a minimum of just ₹50,000
              </p> */}
              <p className="smallscreenpara">
              Venq is India's First platform that makes real estate investment
                accessible with a minimum of just ₹50,000
              </p>
            </div>
            {/* Left Div with Cards */}
            <div className="custom-services-left-div">
            <div
            className={`custom-services-card card1 ${
              isSmallScreen ? "small-screen-card" : ""
            }`}
            // style={{
            //   marginLeft:'-5px',
            //   height:'250px',
            //   width:'90%',
            //   paddingLeft:'20px'
            // }}
          >
            <img
              src="https://getstake.com/assets/home/modernway/1.svg"
              alt="Card 1 Image"
              className="card-image"
            />
            <div className="card-details">
              <h3 className="card-title">Capital Appreciation</h3>
              <p className="card-paragraph">
                Experience long-term wealth creation as real estate values
                increase over time
              </p>
            </div>
          </div>
          <div
            className={`custom-services-card card2 ${
              isSmallScreen ? "small-screen-card" : ""
            }`}
          >
            <img
              src="https://getstake.com/assets/home/modernway/2.svg"
              alt="Card 2 Image"
              className="card-image"
            />
            <div className="card-details">
              <h3 className="card-title">Passive Income</h3>
              <p className="card-paragraph">
                Receive a steady and reliable monthly rental income from real
                estate
              </p>
            </div>
          </div>
          <div
            className={`custom-services-card card3 ${
              isSmallScreen ? "small-screen-card" : ""
            }`}
          >
            <img
              src="https://getstake.com/assets/home/modernway/3.svg"
              alt="Card 3 Image"
              className="card-image"
            />
            <div className="card-details">
              <h3 className="card-title">Inflation Hedge</h3>
              <p className="card-paragraph">
                Real estate, like gold, serves as a historical and effective
                hedge against inflation.
              </p>
            </div>
          </div>
          <div
            className={`custom-services-card card4 ${
              isSmallScreen ? "small-screen-card" : ""
            }`}
          >
            <img
              src="https://getstake.com/assets/home/modernway/4.svg"
              alt="Card 4 Image"
              className="card-image"
            />
            <div className="card-details">
              <h3 className="card-title">Wealth Storage</h3>
              <p className="card-paragraph">
                Being a tangible asset, serves as a valuable and universally desired store of wealth.
              </p>
            </div>
          </div>
              {/* <ServiceSlider/> */}
            </div>
          </>
        ) : (
          <>
            {/* Left Div with Cards */}
            <div className="custom-services-left-div">
              <div
                className={`custom-services-card card1 ${
                  isSmallScreen ? "small-screen-card" : ""
                }`}
              >
                <img
                  src="https://getstake.com/assets/home/modernway/1.svg"
                  alt="Card 1 Image"
                  className="card-image"
                />
                <div className="card-details">
                  <h3 className="card-title">Capital Appreciation</h3>
                  <p className="card-paragraph">
                    Experience long-term wealth creation as real estate values
                    increase over time
                  </p>
                </div>
              </div>
              <div
                className={`custom-services-card card2 ${
                  isSmallScreen ? "small-screen-card" : ""
                }`}
              >
                <img
                  src="https://getstake.com/assets/home/modernway/2.svg"
                  alt="Card 2 Image"
                  className="card-image"
                />
                <div className="card-details">
                  <h3 className="card-title">Passive Income</h3>
                  <p className="card-paragraph">
                    Receive a steady and reliable monthly rental income from
                    real estate
                  </p>
                </div>
              </div>
              <div
                className={`custom-services-card card3 ${
                  isSmallScreen ? "small-screen-card" : ""
                }`}
              >
                <img
                  src="https://getstake.com/assets/home/modernway/3.svg"
                  alt="Card 3 Image"
                  className="card-image"
                />
                <div className="card-details">
                  <h3 className="card-title">Inflation Hedge</h3>
                  <p className="card-paragraph">
                    Real estate, like gold, serves as a historical and effective
                    hedge against inflation.
                  </p>
                </div>
              </div>
              <div
                className={`custom-services-card card4 ${
                  isSmallScreen ? "small-screen-card" : ""
                }`}
              >
                <img
                  src="https://getstake.com/assets/home/modernway/4.svg"
                  alt="Card 4 Image"
                  className="card-image"
                />
                <div className="card-details">
                  <h3 className="card-title">Wealth Storage</h3>
                  <p className="card-paragraph">
                    Real estate, being a tangible asset, serves as a valuable
                    and universally desired store of wealth.
                  </p>
                </div>
              </div>
            </div>
            {/* Right Div with Title and Paragraph */}
            <div className="custom-services-right-div">
              <h2
                className={`custom-services-title ${
                  isSmallScreen ? "small-screen-title" : ""
                }`}
              >
                WHY VENQ?
              </h2>
              {/* <p
                className={`custom-services-paragraph ${
                  isSmallScreen ? "small-screen-paragraph" : ""
                }`}
              >
                Venq is India's First platform that makes real estate investment
                accessible with a minimum of just ₹50,000
              </p> */}
              <p className="largescreenpara">
              Venq is India's First platform that makes real estate investment
                accessible with a minimum of just ₹50,000
              </p>
            </div>
          </>
        )}
      </div>

      <div className="rotated"></div>
    </>
  );
};

export default Services;
