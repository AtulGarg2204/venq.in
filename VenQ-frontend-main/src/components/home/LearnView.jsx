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
    question: "What is VENQ?",
    answer:
      "VENQ is a groundbreaking real estate investment platform that allows individuals to invest in prime properties with just Rs.50,000. We specialize in fractionalized investing, enabling users to own a share of lucrative real estate opportunities.",
  },
  {
    question: "Who can invest in VENQ?",
    answer:
      "VENQ is open to all Indian residents above 18 years of age. Whether you're a seasoned investor or a first-timer, our platform is designed to cater to a diverse range of users.",
  },
  {
    question: "How do I get started?",
    answer:
      "Getting started with VENQ is simple! Sign up on our platform, and explore a curated selection of real estate listings. Choose the property you wish to invest in and become a fractional owner with just a few clicks. And E-signing a few documents which takes less than 3 minutes.",
  },
  {
    question: "How does it work?",
    answer:
      "VENQ employs a sophisticated process to make fractionalized investing accessible and secure. Special Purpose Vehicle (SPV), Ownership Structure, Management Contract, Voting Rights.",
  },
  {
    question: "What are VENQ's services?",
    answer:
      "VENQ offers a comprehensive platform for fractionalized investing in real estate. Our services encompass meticulous property selection, expert investment management, and a streamlined investment experience. Backed by tangible assets, VENQ ensures a secure and rewarding journey into the realm of real estate ownership.",
  },
  {
    question: "Is VENQ a long-term investment?",
    answer:
      "Yes, VENQ is designed for both short-term and long-term investors. Users can choose their investment horizon based on their financial goals. And we suggest a holding period of 3-5 years.",
  },
  {
    question: "What are VENQ's fees?",
    answer:
      "At VENQ, we believe in transparency and aligning our success with yours. Here's an overview of our fee structure: VENQ Fees (3%), Transaction Costs, Performance Fees (10%). Our commitment to transparency ensures that investors have a clear understanding of the associated costs, empowering you to make informed decisions about your investments with VENQ.",
  },
  {
    question: "What are transaction costs?",
    answer:
      "Transaction costs cover charges related to property acquisition, legal processes, and administrative overheads. These costs are proportionately distributed among investors.",
  },
  {
    question: "How are properties selected on VENQ?",
    answer:
      "Properties listed on VENQ undergo a meticulous selection process, with our team meticulously evaluating factors such as location, market trends, and growth potential. This ensures a diverse and promising portfolio, aligning with our commitment to providing investors with high-quality real estate opportunities.",
  },
  {
    question: "What is a proof of address document (POA)?",
    answer:
      "A proof of address document (POA) is a document that verifies your residential address. It can be an Aadhar card, a passport, or any government-issued document that confirms your place of residence. This is a standard requirement for user verification and compliance purposes.",
  },
  // Add the new questions and answers here
];

const LearnView = () => {
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

export default LearnView;
