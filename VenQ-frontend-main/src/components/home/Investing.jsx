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
    question: "How much can I invest?",
    answer:
      "VENQ allows investors to start with a minimum investment of Rs. 50,000, making real estate investment accessible to a broader range of individuals.",
  },
  {
    question: "Why invest in Real Estate?",
    answer:
      "Real estate has historically been a stable and appreciating asset class. Investing in real estate through VENQ provides an opportunity to diversify your investment portfolio and gain exposure to the real estate market.",
  },
  {
    question: "What happens if not enough funds are raised?",
    answer:
      "If the target funds are not raised within the specified timeframe, the investment campaign may be canceled, and the invested amount will be refunded to the investors. And VENQ's commission will be forfeited for the exact amount that you had invested for your next investment.",
  },
  {
    question: "What am I investing in?",
    answer:
      "Investors on VENQ are investing in a specific real estate asset listed on the platform. Each campaign clearly outlines the details of the property, its location, and the investment terms.",
  },
  {
    question: "What is a Special Purpose Vehicle (SPV)?",
    answer:
      "An SPV is a legal entity created for a specific purpose, often to hold and manage a particular real estate asset. In VENQ's context, an SPV is formed to facilitate the fractionalized ownership structure.",
  },
  {
    question: "How many shares will I own?",
    answer:
      "The number of shares an investor owns is proportionate to their investment amount. VENQ issues shares in the form of Convertible Debentures (CCDs), and the conversion ratio is specified in the campaign details.",
  },
  {
    question: "What if I need to sell my stake before the investment term?",
    answer:
      "VENQ is actively working on introducing a secondary market, allowing investors to sell their stakes before the investment term concludes, providing liquidity to investors.",
  },
  {
    question: "What happens at the end of the Investment Term?",
    answer:
      "At the end of the Investment Term, investors have the option to exit or continue their ownership, subject to the terms specified in the investment campaign.",
  },
  {
    question: "Who manages the property? Can I visit?",
    answer:
      "The property is typically managed by a professional property management team. While direct visits may not always be possible, investors will receive regular updates on the property's performance.",
  },
  {
    question: "When will I receive my documents?",
    answer:
      "Upon a successful fundraise, investors will receive their ownership documents, including CCD certificates, within a reasonable timeframe.",
  },
  {
    question: "How can I verify my ownership documents?",
    answer:
      "VENQ ensures transparency, and investors can verify their ownership documents by consulting the details provided in the CCD certificates and associated legal documents.",
  },
];



const Investing = () => {
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

export default Investing;
