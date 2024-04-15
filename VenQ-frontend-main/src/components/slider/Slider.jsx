import React, { useEffect, useState } from "react";
import { Typography, styled, useMediaQuery } from "@mui/material";
import LeftSide from "./LeftSide";
import "./Slider.css";
import { useScrollPercentage } from "react-scroll-percentage";
const Heading = styled(Typography)`
  font-family: "BEBAS NEUE";
  font-size: 3.1em;
  font-weight: 500;
  line-height: 77px;
  letter-spacing: 0.05em;
  text-align: center;
  padding: 20px;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    margin: 0;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.00938em;
    font-family: "BEBAS NEUE";
    font-size: 3rem;
    line-height: 77px;
    text-align: center;
  }
`;

const SubHeading = styled(Typography)`
  font-size: 22px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: center;

  @media (max-width: 600px) {
    margin: 0;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: 0.00938em;
    font-size: 1.25rem;
    letter-spacing: 0em;
    text-align: center;
    width: 90%;
  }
`;

const Slider = () => {
  const tarr = ["EXPLORE", "INVEST", "TRACK", "EXIT"];
  const carr = ["green", "red", "blue", "yellow"];
  const expstyle = {
    height: "175px",
    width: "100%",
    backgroundColor: "#4FB183",
    color: "white",
    fontSize: "36px",
    fontWeight: "bold",
    fontFamily: "Gilroy-Bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const investstyle = {
    height: "175px",
    width: "100%",
    backgroundColor: "#E66464",
    color: "white",
    fontSize: "36px",
    fontWeight: "bold",
    fontFamily: "Gilroy-Bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const trackstyle = {
    height: "175px",
    width: "100%",
    backgroundColor: "#4393C6",
    color: "white",
    fontSize: "36px",
    fontWeight: "bold",
    fontFamily: "Gilroy-Bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const exitstyle = {
    height: "175px",
    width: "100%",
    backgroundColor: "#F9C847",
    color: "white",
    fontSize: "36px",
    fontFamily: "Gilroy-Bold",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const [shownext, setShowNext] = useState(false);
  const [obj, setObj] = useState({
    position: "absolute",
    transform: "translate(0px)",
    width: "fit-content",
    left: "20%",
  });
  const originalstyle = {
    position: "absolute",
    transition: "transform 0.5s ease-in-out",
    transform: "translate(0)",
    width: "fit-content",
    left: "20%",
    willChange: "transform",
  };
  const changedstyle = {
    position: "absolute",
    transition: "transform 0.5s ease-in-out",
    transform: "translate(0)",
    width: "fit-content",
    left: "20%",
    willChange: "transform",
  };
  const [ref, percentage] = useScrollPercentage({
    /* Optional options */
    threshold: 0,
  });

  return (
    <>
      <div className="supremecontainer " ref={ref}>
        {isSmallScreen && (
          <div>
            <div className="text">
              <Heading>HOW TO INVEST?</Heading>
            </div>
            <div style={expstyle}>EXPLORE</div>
            <div style={investstyle}>INVEST</div>
            <div style={trackstyle}>TRACK</div>
            <div style={exitstyle}>EXIT</div>
            <div className="imgcntnr">
              {percentage.toPrecision(2) < 0.46 && (
                <img
                  src="images/phoneimg.png"
                  alt="message"
                  height={400}
                  style={{
                    marginTop: "10%",
                    marginLeft: "22%",
                  }}
                />
              )}
              {percentage.toPrecision(2) >= 0.46 &&
                percentage.toPrecision(3) < 0.545 && (
                  <img
                    src="images/phoneimg2.png"
                    alt="message"
                    height={400}
                    style={{
                      marginTop: "10%",
                      marginLeft: "22%",
                    }}
                  />
                )}
              {percentage.toPrecision(3) >= 0.545 &&
                percentage.toPrecision(3) < 0.623 && (
                  <img
                    src="images/phoneimg3.png"
                    alt="message"
                    height={400}
                    style={{
                      marginTop: "10%",
                      marginLeft: "22%",
                    }}
                  />
                )}
              {percentage.toPrecision(3) >= 0.623 && (
                <img
                  src="images/phoneimg4.png"
                  alt="message"
                  height={400}
                  style={{
                    marginTop: "10%",
                    marginLeft: "22%",
                  }}
                />
              )}
            </div>
          </div>
        )}
        {/* badi screen  */}

        {!isSmallScreen && (
          <div className="main-container" ref={ref}>
            <div className="stickypart">
              <div className="text">
                <Heading>HOW TO INVEST?</Heading>
                <div
                  style={
                    (percentage.toPrecision(2) >= 0.29 &&
                      percentage.toPrecision(2) < 0.45) ||
                    percentage.toPrecision(2) >= 0.55
                      ? changedstyle
                      : originalstyle
                  }
                >
                  {!isSmallScreen && (
                    <>
                      {percentage.toPrecision(2) < 0.29 && (
                        <img
                          src="images/phoneimg.png"
                          alt="message"
                          height={400}
                        />
                      )}
                      {percentage.toPrecision(2) >= 0.29 &&
                        percentage.toPrecision(3) < 0.415 && (
                          <img
                            src="images/phoneimg2.png"
                            alt="message"
                            height={400}
                          />
                        )}
                      {percentage.toPrecision(3) >= 0.415 &&
                        percentage.toPrecision(2) < 0.55 && (
                          <img
                            src="images/phoneimg3.png"
                            alt="message"
                            height={400}
                          />
                        )}
                      {percentage.toPrecision(2) >= 0.55 && (
                        <img
                          src="images/phoneimg4.png"
                          alt="message"
                          height={400}
                        />
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="mycards">
              <div
                className="oddnumbercard1"
                style={
                  percentage.toPrecision(2) >= 0.3
                    ? {
                        opacity: "0",
                      }
                    : {
                        opacity: "1",
                      }
                }
                // hidden={(percentage.toPrecision(2)>=0.45)}
              >
                <div className="card-text">
                  <h3 className="card-title1">Explore</h3>
                  <p className="card-para1">
                    Register within 3 minutes and delve into our handpicked
                    property selection.
                  </p>
                </div>
              </div>
              <div
                className="evennumbercard2"
                style={
                  percentage.toPrecision(2) >= 0.3 &&
                  percentage.toPrecision(2) < 0.415
                    ? {
                        opacity: "1",
                      }
                    : {
                        opacity: "0",
                      }
                }
              >
                <div className="card-text">
                  <h3 className="card-title2">Acquire</h3>
                  <p className="card-para2">
                    Secure a share in properties that resonate with you.
                  </p>
                </div>
              </div>
              <div
                className="oddnumbercard3"
                style={
                  percentage.toPrecision(2) >= 0.42 &&
                  percentage.toPrecision(2) < 0.55
                    ? {
                        opacity: "1",
                      }
                    : {
                        opacity: "0",
                      }
                }
              >
                <div className="card-text3">
                  <h3 className="card-title3">Manage</h3>
                  <p className="card-para3">
                    Monitor your income and investments effortlessly through our
                    online platform.
                  </p>
                </div>
              </div>
              <div
                className="evennumbercard4"
                // hidden={!(percentage.toPrecision(2)>=0.65)}
                style={
                  percentage.toPrecision(2) < 0.55
                    ? {
                        opacity: "0",
                      }
                    : {
                        opacity: "1",
                      }
                }
              >
                <div className="card-text4">
                  <h3 className="card-title4">Exit</h3>
                  <p className="card-para4">
                    A flexible exit strategy, allowing investors to exit at the
                    maturity of the CCDs.
                  </p>
                </div>
              </div>
            </div>
            {/* <div
          className="oddnumbercard3"
          >
            <div className="card-text">
              <h3 className="card-title">Capital Appreciation</h3>
              <p className="card-para">
                Experience long-term wealth creation as real estate values
                increase over time
              </p>
            </div>
          </div>
         */}
            {/* <div
        className={`left-side ${
          isSmallScreen ? "flex-column" : "flex-row"
        }`}
      >
        <LeftSide />
      </div> */}
            {/* <div className="right-side">
        {/* {isSmallScreen && (
          <img
            src="images/right-arrow 2.png"
            className="slider-arrow-smallscreen"
          />
        )} */}
            {/* <div className="imagecontainer"> */}
            {/* {
            isSmallScreen && <>
              <div id="imgbanner">
              </div>
          <img
            src="images/Phone_Border.png"
            alt="message"
            id="sliderimage2"
          />
            </>
          } */}
            {/* <img src="images/Site.png" alt="message" id='sliderimage3' /> */}
            {/* </div> */}
            {/* {isSmallScreen && (
          <img
            src="images/right-arrow 1.png"
            className="slider-arrow-smallscreen"
          />
        )} */}
            {/* </div> */} */
          </div>
        )}
      </div>
    </>
  );
};

export default Slider;
