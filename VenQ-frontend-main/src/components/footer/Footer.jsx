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
      <MainContainer>
        <LeftContainer>
          <img
            src="images\VENQ_BOLD_Big.png"
            alt="logo"
            className="footerLogo"
          />
          <div className="socialIcons">
            <InstagramIcon className="socialIcon" />
            <LinkedInIcon className="socialIcon" />
            <CallIcon className="socialIcon" />
            <EmailIcon className="socialIcon" />
          </div>
          <Rights>Phone no: 9205553696</Rights>
          <RightContainer style={{ marginTop: "-20px", marginLeft:"5px" }}>
            Address : Bisht Bhawan Compound, Near Kirlani Cottage, Nainital, Uttarakhand-263001
          </RightContainer>
          <Rights>Copyright &copy; {year}</Rights>
          <Rights>All Rights Reserved.</Rights>
        </LeftContainer>

        <RightContainer sx={{ flexGrow: 1 }}>
          <GridContainer container spacing={3}>
            <Grid item xs sx={{ margin: "0px" }}>
              {" "}
              {/* Adjust the margin as needed */}
              <Investors>
                <Heading>FOR INVESTORS</Heading>
                <Link to="/terms" className="footer-link">
                  <SubHeading>Terms & Conditions</SubHeading>
                </Link>
                <Link to="/privacy" className="footer-link">
                  <SubHeading>Privacy Policy</SubHeading>
                </Link>
                <Link to="/risks" className="footer-link">
                  <SubHeading>Risks Involved</SubHeading>
                </Link>
                <Link to="/refund" className="footer-link">
                  <SubHeading>Refund Policy</SubHeading>
                </Link>
              </Investors>
            </Grid>

            <Grid item xs sx={{ margin: "0px" }}>
              <Startup>
                <Heading>FOR DEVELOPERS</Heading>
                <a href="#why-raise" className="footer-link">
                  <SubHeading>Why Raise?</SubHeading>
                </a>
                <a href="#learn" className="footer-link">
                  <SubHeading>Learn</SubHeading>
                </a>
                <a href="#instruments" className="footer-link">
                  <SubHeading>Instruments</SubHeading>
                </a>
              </Startup>
            </Grid>

            <Grid item xs sx={{ margin: "0px" }}>
              <Company>
                <Heading>COMPANY</Heading>
                <a href="#about" className="footer-link">
                  <SubHeading>About</SubHeading>
                </a>
                <a href="#blog" className="footer-link">
                  <SubHeading>Blog</SubHeading>
                </a>
                <Link to="contactUs" className="footer-link">
                  <SubHeading>Contact Us</SubHeading>
                </Link>
                <a href="#hiring" className="footer-link">
                  <Extra>We're Hiring</Extra>
                </a>
              </Company>
            </Grid>
          </GridContainer>
        </RightContainer>
      </MainContainer>
    </div>
  );
};

export default Footer;
