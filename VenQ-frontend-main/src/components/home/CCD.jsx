import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Grid,
  AvatarGroup,
  Container,
  Menu,
  MenuItem,
} from "@mui/material";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import { Search as SearchIcon, Menu as MenuIcon } from "@mui/icons-material";
import { Facebook, Twitter, LinkedIn } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import { Link, useNavigate } from "react-router-dom";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined"; // Add this import
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const typoStyle = {
  color: "#fff",
  marginTop: "5%",
  fontFamily: "Bebas Neue,sans-serif",
  fontSize: "3rem",
};

const questions = [
  {
    question: "What are CCDs (Convertible Debentures)?",
    answer:
      "Convertible Debentures (CCDs) are financial instruments that can be converted into equity shares at a later date. VENQ issues CCDs as a way for investors to participate in the potential returns of a real estate investment.",
  },
  {
    question: "How does the issuance of CCDs work on VENQ?",
    answer:
      "Upon a successful fundraise, VENQ initiates a private placement offer for CCDs to those who invested. The issuance follows the rules and regulations outlined in the Companies Act 2013.",
  },
  {
    question: "What legal protections do CCDs provide to investors?",
    answer:
      "CCD holders have the right to convert their debentures into equity shares, thereby becoming shareholders in the underlying real estate asset. Legal provisions within the issuance agreement protect the rights of CCD holders.",
  },
  {
    question: "Is VENQ regulated by SEBI (Securities and Exchange Board of India)?",
    answer:
      "VENQ issues CCDs through private placement, targeting a select group of investors. As this falls outside the public offering domain, SEBI regulations related to public issues do not apply directly. However, we operate within the broader framework of financial regulations.",
  },
  {
    question: "How are CCDs different from traditional real estate investments?",
    answer:
      "CCDs offer a unique investment avenue by providing a stake in a real estate asset without the need for full ownership. Investors benefit from potential appreciation while having the flexibility to convert their debentures into equity shares at the date of sale.",
  },
  {
    question: "What happens if an investor wants to exit their investment before conversion?",
    answer:
      "Investors looking to exit their investment before the conversion period ends may explore secondary market options if available. VENQ is actively working on introducing a secondary market to facilitate such transactions.",
  },
  {
    question: "What legal documentation is involved in CCD issuance?",
    answer:
      "CCD issuance is governed by legal agreements, including the agreement to sell, private placement offer, and other relevant documents. These agreements outline the terms, rights, and obligations of the parties involved.",
  },
  {
    question: "How does VENQ ensure compliance with company laws during CCD issuance?",
    answer:
      "VENQ adheres to the provisions of the Companies Act 2013 during the issuance of CCDs, ensuring legal compliance and transparency in the process. Our legal team oversees the entire process to safeguard the interests of both VENQ and investors.",
  },
];


const CCD = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleGoToVenQ = () => {
    // Redirect to the home page
    navigate("/");
  };

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };
  return (
    <>
      <div style={{ backgroundColor: "#152532", padding: "40px 0px 20px" }}>
        <Container maxWidth="lg">
          <AppBar position="static" color="transparent">
            <Toolbar>
              {/* Logo on the left */}
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <img
                  src="images/VENQ_BOLD_small1.png"
                  alt="Logo"
                  style={{ maxWidth: "100%" }}
                />
              </Typography>

              {/* Tool icons on the right */}
              <IconButton
                color="inherit"
                onClick={handleGoToVenQ}
                sx={{ color: "#fff", fontSize: "20px" }}
              >
                Go to venQ
              </IconButton>
            </Toolbar>
          </AppBar>
        </Container>

        {/* Text input box */}
        <Container maxWidth="lg" sx={{ marginTop: "5%" }}>
          <InputBase
            placeholder="Search..."
            inputProps={{ "aria-label": "search" }}
            fullWidth
            startAdornment={<SearchIcon style={{ color: "#888888" }} />}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              borderRadius: "10px",
              padding: "15px",
              marginTop: "10px",
            }}
          />
        </Container>
      </div>

      <Container
        style={{
          height: "auto",
          padding: "20px 0",
          marginTop: "100px",
          border: "1px solid #ddd",
          borderRadius: "10px",
        }}
      >
        {/* Questions Container */}
        <Container maxWidth="md" sx={{ marginTop: "40px" }}>
          {questions.map((item, index) => (
            <div
              key={index}
              onClick={() => toggleDropdown(index)}
              style={{
                position: "relative",
                marginBottom: "10px", // Add margin-bottom to create space between questions
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "15px",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  borderRadius: "10px",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "black",
                  },
                }}
              >
                <Typography
                  style={{ fontSize: "1.25rem", marginRight: "10px" }}
                >
                  {item.question}
                </Typography>
                {openDropdown === index ? (
                  <KeyboardArrowDownOutlinedIcon
                    style={{ fontSize: "20px", color: "#000" }}
                  />
                ) : (
                  <ChevronRightOutlinedIcon
                    style={{ fontSize: "20px", color: "#000" }}
                  />
                )}
              </div>
              {openDropdown === index && (
                <div
                  style={{
                    backgroundColor: "#fff",
                    padding: "10px",
                    borderRadius: "5px",
                    marginTop: "5px", // Add margin-top for space between question and dropdown
                    top: "100%", // Position below the question
                    left: 0,
                    width: "100%",
                    zIndex: 1,
                  }}
                >
                  <Typography>{item.answer}</Typography>
                </div>
              )}
            </div>
          ))}
        </Container>
      </Container>

      <Container
        style={{
          height: "auto",
          padding: "20px 0",
          marginTop: "100px",
        }}
      >
        {/* Top Div with Logo */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <img
            src="images/VENQ_BOLD_Big.png"
            alt="Logo"
            style={{ width: "150px" }}
          />
        </div>

        {/* Bottom Div with Social Icons */}
        <div style={{ textAlign: "center" }}>
          {/* Add your social icons here */}
          <IconButton color="inherit" style={{ margin: "0 10px" }}>
            <Facebook />
          </IconButton>
          <IconButton color="inherit" style={{ margin: "0 10px" }}>
            <Twitter />
          </IconButton>
          <IconButton color="inherit" style={{ margin: "0 10px" }}>
            <LinkedIn />
          </IconButton>
        </div>
      </Container>
    </>
  );
};

export default CCD;
