import { Button, Typography, styled, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Slider from "../slider/Slider";
import Services from "../sections/Services";
import Carousel from "../Carousel";
import Income from "../Income";
import Testi from "../Testimonial";
import Partners from "../Partners/Partners";
import FAQ from "../FAQ";
import axios from "axios";
import config from "../../config";
import PartnerSlider from "../Partners/PartnerSlider";
import sample from "../../hero-section/hero-section-video.mp4";
import { useNavigate } from "react-router-dom";
const Heading = styled(Typography)`
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 500;
  font-size: 3.2em;
  line-height: 55px;
  display: flex;
  align-items: flex-end;
  text-transform: uppercase;
  color: white;
  margin-bottom: 10px;
  justify-content: center;
`;
const HeadingBig = styled(Typography)`
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 4.4em;
  line-height: 70px;
  display: flex;
  align-items: flex-end;
  text-transform: uppercase;
  color: white;
  justify-content: center;
  margin-top: -10px;
`;
const HeadingSmallone = styled(Typography)`
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 2.8em;
  margin-block-start: 0px;
  margin-block-end: 0px;
  display: flex;
  align-items: flex-end;
  text-transform: uppercase;
  color: white;
  justify-content: center;
  margin-top: -10px;
`;
const HeadingSmall = styled(Typography)`
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 2.8em;
  margin-block-start: 0px;
  margin-block-end: 0px;
  display: flex;
  align-items: flex-end;
  text-transform: uppercase;
  color: white;
  justify-content: center;
`;

const SubHeading = styled(Typography)`
  font-family: "Bebas Neue";
  font-weight: 500;
  font-size: 18px;
  color: white;
  line-height: 26px;
  margin-bottom: 30px;
  padding-right: 15%;
`;
const SubHeadingSmall = styled(Typography)`
  font-family: "Bebas Neue";
  font-weight: 500;
  font-size: 18px;
  color: white;
  line-height: 26px;
  margin-bottom: 30px;
  margin-block-end: 0px;
`;

const MainButton = styled(Button)`
  border-radius: 8px;
  background-color: #1b527b;
  color: white;
  font-size: 22px;
  font-weight: 700;
  line-height: 24px;
  text-transform: none;
  margin-top: 2rem;
  margin-right: 100px;
  padding: 13px 25px;
  cursor: pointer;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;

  :hover {
    background-color: #0170dc;
    color: white;
  }

  @media (max-width: 768px) {
    width: 60%;
    padding: 2.5%;
  }
`;
const InvestButton = styled(Button)`
  background-color: white;
  color: black;
  border: 1px solid black;
  border-radius: 8px;
  font-size: 16px; /* Adjust the font size */
  font-weight: 700;
  line-height: 20px;
  text-transform: none;
  margin: 5px; /* Adjust the margin */
  padding: 10px 40px; /* Adjust the padding */
  cursor: pointer;
  /* margin-left: 0; */

  :hover {
    background-color: white;
    color: black;
  }
`;
const InvestButtonSmall = styled(Button)`
  background-color: #3547f8;
  color: white;
  border-radius: 8px;
  font-size: 16px; /* Adjust the font size */
  font-weight: 700;
  line-height: 20px;
  text-transform: none;
  margin: 5px; /* Adjust the margin */
  padding: 10px 40px; /* Adjust the padding */
  cursor: pointer;
  /* margin-left: 0; */

  :hover {
    background-color: white;
    color: black;
  }
`;

const SellButton = styled(Button)`
  border: 2px solid #0170dc;
  border-radius: 8px;
  background-color: #4393c6;
  color: white;
  font-size: 16px; /* Adjust the font size */
  font-weight: 700;
  line-height: 20px;
  text-transform: none;
  margin: 5px; /* Adjust the margin */
  padding: 10px 40px; /* Adjust the padding */
  cursor: pointer;
  /* margin-left: 0; */

  :hover {
    background-color: #0170dc;
    color: white;
  }

  @media (max-width: 768px) {
    background-color: #395e7b;
  }
`;
const SellButtonSmall = styled(Button)`
  border: 2px solid #3547f8;
  border-radius: 8px;
  color: black;
  font-size: 16px; /* Adjust the font size */
  font-weight: 700;
  line-height: 20px;
  text-transform: none;
  margin: 5px; /* Adjust the margin */
  padding: 10px 40px; /* Adjust the padding */
  cursor: pointer;
  /* margin-left: 0; */

  :hover {
    background-color: #0170dc;
    color: white;
  }
`;

const SubSection = styled(Typography)`
  /* font-family: "Bebas Neue"; */
  font-style: normal;
  font-weight: 450;
  font-size: 25px;
  line-height: 43px;
  letter-spacing: 0.05em;
  text-align: left;
  /* margin-left: 0px; */
  @media (max-width: 768px) {
    font-size: 1.15rem;
    line-height: 2rem;
    text-align: center;
  }
`;
<script
  type="text/javascript"
  id="hs-script-loader"
  async
  defer
  src="//js.hs-scripts.com/45720526.js"
></script>;

const Home = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const URL = config.URL;
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("userinfo"));
  useEffect(() => {
    if (token) {
      setLoggedIn(true);
    }
    const head = document.querySelector("head");
    const script = document.createElement("script");

    script.setAttribute("type", "text/javascript");
    script.setAttribute(
      "src",
      "https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js"
    );
    script.setAttribute("id", "aisensy-wa-widget");
    script.setAttribute("widget-id", "LKoMcZ");
    head.appendChild(script);
    console.log(script);

    return () => {
      head.removeChild(script);
    };
  }, []);

  return (
    <>
      {!isSmallScreen && (
        <>
          <div
            dangerouslySetInnerHTML={{
              __html: `
        <video class="videoTag" playsinline autoplay loop muted>
            <source src=${sample} type="video/mp4"/>
        </video>`,
            }}
          />
          {/* <video className="videoTag" autoPlay playsInline loop muted preload="metadata">
            <source src={sample} type="video/mp4" />
          </video> */}
          <Navbar isLoggedIn={isLoggedIn} />
          <div className="main-section">
            <div className="image-container">
              <div className="text-container">
                <Heading style={{ fontSize: "40px" }}>
                  JOIN THE REVOLUTION OF SMART PROPERTY INVESTMENT.
                </Heading>
                <SubHeading>
                  Shape your portfolio with industry-leading properties,
                  starting as low as ₹5,000.
                </SubHeading>
                <MainButton
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Get Started
                </MainButton>
              </div>
            </div>
          </div>

          <div className="sub-section">
            <div className="contents">
              <SubSection>Looking for opportunities in real estate?</SubSection>
              <div className="buttons">
                <InvestButton
                  onClick={() => {
                    navigate("/properties");
                  }}
                >
                  Invest
                </InvestButton>
                <SellButton>List Property</SellButton>
              </div>
            </div>
            <div class="banner">
              <p style={{ fontSize: "16px", fontFamily: "sans-serif" }}>
                <span
                  style={{
                    marginBottom: "36px",
                  }}
                >
                  See our <span class="bold-text">30</span> reviews on{" "}
                </span>

                {/* <span class="trustpilot-text">Trustpilot</span> */}
                <span
                  style={{
                    marginBottom: "20px",
                  }}
                >
                  <img
                    src="images/Trustpilot-logo.png"
                    style={{
                      height: "22px",
                      width: "auto",
                      marginBottom: "-4px",
                    }}
                  />
                </span>
              </p>
            </div>
          </div>
        </>
      )}
      {isSmallScreen && (
        <>
          <Navbar isLoggedIn={isLoggedIn} />
          {/* <div className="main-section-small"> */}
          <div className="text-container-small">
            <HeadingSmall>START INVESTING IN</HeadingSmall>
            <HeadingBig>REAL ESTATE</HeadingBig>
            <HeadingSmallone>WITH JUST RS. 5000</HeadingSmallone>

            <SubHeadingSmall>
              Shape your portfolio with industry-leading properties, starting as
              low as ₹5,000.
            </SubHeadingSmall>
            {/* <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10px",
              }}
            > */}
            <button
              style={{
                backgroundColor: "#85E380",
                color: "black",
                cursor: "pointer",
                paddingRight: "20px",
                paddingLeft: "20px",
                marginTop: "10px",
              }}
              onClick={() => {
                navigate("/login");
              }}
            >
              Start Investing
            </button>
            {/* <Link to="/login">Start Investing</Link>
             */}

            <img
              style={{
                // position: "absolute",
                // position: "center",
                overflow: "hidden",
                objectFit: "cover",
                bottom: "10px",
                marginLeft: "-20px",
              }}
              height={300}
              src="images/homebg.png"
              alt="error"
            />

            {/* </div> */}
            {/* </div> */}
          </div>
          <div className="sub-section">
            <div className="contents">
              <SubSection>Looking for opportunities in real estate?</SubSection>
              <div className="buttons">
                <InvestButtonSmall
                  onClick={() => {
                    navigate("/properties");
                  }}
                >
                  Invest
                </InvestButtonSmall>
                <SellButtonSmall>List Property</SellButtonSmall>
              </div>
            </div>
            <div class="banner">
              <p style={{ fontSize: "16px", fontFamily: "sans-serif" }}>
                <span
                  style={{
                    marginBottom: "36px",
                  }}
                >
                  See our <span class="bold-text">30</span> reviews on{" "}
                </span>

                {/* <span class="trustpilot-text">Trustpilot</span> */}
                <span
                  style={{
                    marginBottom: "20px",
                  }}
                >
                  <img
                    src="images/Trustpilot-logo.png"
                    style={{
                      height: "22px",
                      width: "auto",
                      marginBottom: "-4px",
                    }}
                  />
                </span>
              </p>
            </div>
          </div>
        </>
      )}

      <Carousel />
      <Slider />
      <Income />
      {/* <Testi /> */}
      <PartnerSlider />
      <Services />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;
