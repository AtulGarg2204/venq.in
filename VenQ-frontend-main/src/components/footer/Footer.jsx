import React from "react";
import "./Footer.css";
import { Box, Grid, Typography, styled } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

const MainContainer = styled(Box)`
  background-color: #f6f7f9;
  display: flex;

  align-items: center; /* Center content in the column layout */
  z-index: 0;
  margin-top: 20px;
  @media (max-width: 768px) {
    padding-left: 20px;
    align-items: flex-start;
    flex-direction: column;
  }
`;

const LeftContainer = styled(Box)`
  padding: 9%;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center content in the column layout */

  .socialIcons {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 10%;
    margin-top: 20%;
  }

  .socialIcon {
    margin: 0 5px;
  }

  @media (max-width: 768px) {
    padding: 0; /* Adjust padding for smaller screens */
    align-items: flex-start;
    margin: 20px 0;

    .socialIcons {
      flex-wrap: wrap; /* Allow icons to wrap to the next line on smaller screens */
      margin-bottom: 5%; /* Adjust margin for smaller screens */
      margin-top: 10%;
      align-items: flex-start;
    }
    .footerLogo {
      width: 150px;
      height: auto;
    }
  }
`;

const RightContainer = styled(Box)`
  color: black;
  padding: 9% 20px; /* Reduced padding for smaller screens */
  margin-left: 0; /* Reset margin for smaller screens */
  margin-top: 20px;
  margin-right: 50px;
  width: 100%; /* Full width for smaller screens */
  align-content: center;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    padding: 5% 0; /* Adjust padding for smaller screens */

    & > div {
      flex-direction: column;
      align-content: flex-start;
    }
  }
`;

const Investors = styled(Box)`
  color: black;
  text-align: center; /* Center text for smaller screens */
`;

const Startup = styled(Box)`
  color: black;
  text-align: center; /* Center text for smaller screens */
`;

const Company = styled(Box)`
  color: black;
  text-align: center; /* Center text for smaller screens */
  @media (max-width: 768px) {
    text-align: left;
  }
`;

const GridContainer = styled(Grid)`
  justify-content: center; /* Center grid content for smaller screens */
`;

const Rights = styled(Typography)`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 25px;
  letter-spacing: 0.05em;
  padding: 10px;
  @media (max-width: 768px) {
    margin-top: 5px;
    letter-spacing: 0.005em;

    align-items: flex-start;
    padding: 0;
  }
`;

const Heading = styled(Typography)`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 35px;
  display: flex;
  justify-content: center;
  text-align: center;
  color: #353535;
  padding-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 20px;
    display: flex;
    justify-content: left;
    text-align: start;
  }
`;

const SubHeading = styled(Typography)`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 23px;
  line-height: 26px;
  text-align: center; /* Center text for smaller screens */
  letter-spacing: 0.05em;
  color: #000000;
  padding-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 17px;
    line-height: 17px;
    display: flex;
    text-align: start;
  }
`;

const Extra = styled(Typography)`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  line-height: 26px;
  display: flex;
  justify-content: center;
  text-align: center; /* Center text for smaller screens */
  letter-spacing: 0.05em;
  color: #000000;
  padding-top: 10%; /* Adjust padding for smaller screens */
  @media (max-width: 768px) {
    font-size: 17px;
    line-height: 17px;
    display: flex;
    justify-content: left;
    text-align: left;
    margin-top: 5px;
    letter-spacing: 0.005em;
    /* padding: 0; */
  }
`;

const Footer = (addTopMargin) => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div>
      <div className="rotated-button-container">
        <h2 className="rotated-heading">SO, WHAT ARE YOU WAITING FOR?</h2>
        <div className="rotated-buttons-container">
          <button className="rotated-invest-button">Invest</button>
          <button className="rotated-sell-button">List Property</button>
        </div>
      </div>

      <div className="home_footer_main">
        <div className="home_footer_logo">
          <img src="images\VENQ_BOLD_Big.png" alt="" />
        </div>
        <div className="home_footer_content_container_main">
          <div className="home_footer_content_container_partone">
            <div className="home_footer_content_container_one">
              <h1>INVESTORS</h1>
              <Link to="/terms" className="footer-link">
                <p style={{ color: "rgb(83, 83, 83)", fontWeight: "600" }}>
                  Terms & Conditions
                </p>
              </Link>
              <Link to="/privacy" className="footer-link">
                <p style={{ color: "rgb(83, 83, 83)", fontWeight: "600" }}>
                  Privacy Policy
                </p>
              </Link>
              <Link to="/risks" className="footer-link">
                <p style={{ color: "rgb(83, 83, 83)", fontWeight: "600" }}>
                  Risks Involved
                </p>
              </Link>
              <Link to="/refund" className="footer-link">
                <p style={{ color: "rgb(83, 83, 83)", fontWeight: "600" }}>
                  Refund Policy
                </p>
              </Link>
            </div>
            <div className="home_footer_content_container_two">
              <h1>COMPANY</h1>
              <Link to="blog" className="footer-link">
                <p style={{ color: "rgb(83, 83, 83)", fontWeight: "600"   }}>
                  Blog
                </p>
              </Link>
              <Link to="contactUs" className="footer-link">
                <p style={{ color: "rgb(83, 83, 83)", fontWeight: "600" , } } className="contact">
                  Contact Us
                </p>
              </Link>
            </div>
            <div className="home_footer_content_container_three">
              <h1>DEVELOPERS</h1>
              <Link to="" className="footer-link">
                <p style={{ color: "rgb(83, 83, 83)", fontWeight: "600" }}>
                  {/* Why Raise? */}
                </p>
              </Link>
              <Link to="/learn" className="footer-link">
                <p style={{ color: "rgb(83, 83, 83)", fontWeight: "600" }}>
                  Learn
                </p>
              </Link>
              <a href="#instruments" className="footer-link">
                <p style={{ color: "rgb(83, 83, 83)", fontWeight: "600" }}>
                  Instruments
                </p>
              </a>
            </div>
          </div>

          <div className="home_footer_content_container_parttwo">
            <div className="home_footer_content_container_four">
              <h1>CONTACT US</h1>
              <p>team@venq.in</p>
              <p>+91-92055 53696</p>
            </div>
            <div className="home_footer_content_container_five">
              <h1>REGISTERED OFFICE</h1>
              <p>
                Bisht Bhawan Compound, Near Kirlani Cottage, Nainital,
                Uttarakhand-263001
              </p>
            </div>
          </div>
        </div>
        <div className="home_footer_socialIcons_main">
          <h1>Follow Us</h1>
          <div>
            <InstagramIcon className="socialIcon" />
            <LinkedInIcon className="socialIcon" />
            <CallIcon className="socialIcon" />
            <EmailIcon className="socialIcon" />
          </div>
        </div>
        <div className="home_footer_allrights_main">
          <div className="home_footer_allrights_container_one"></div>
          <div className="home_footer_allrights_container_two">
            <h2 className="copyright">Copyright © 2024 | All Rights Reserved.</h2>
          </div>
        </div>

        <div className="home_footer_disclaimer_main">
          <h2>Disclaimer:</h2>
          <p>
            All trademarks and logos or registered trademarks and logos found on
            this site or mentioned herein belong to their respective owners and
            are solely being used for informational purposes. Information
            provided herein has been gathered from public sources. VENQ
            Technologies Pvt Ltd disclaims any and all responsibility in
            connection with veracity of this data. Information presented on this
            website is for educational purposes only and should not be treated
            as legal, financial , or any other form of advice. VENQ Technologies
            Pvt Ltd is not liable for financial or any other form of loss
            incurred by the user or any affiliated party on the basis of
            information provided herein. VENQ Technologies Pvt Ltd is neither a
            stock exchange nor does it intend to get recognized as a stock
            exchange under the Securities Contracts Regulation Act, 1956. VENQ
            Technologies Pvt Ltd has not been authorized by the capital markets
            regulator to solicit investments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
