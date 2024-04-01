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
    question: "How do returns work?",
    answer:
      "Returns are generated through the appreciation of the property's value and potential rental income. Upon a successful exit or completion of the Investment Term, investors receive returns proportionate to their ownership.",
  },
  {
    question: "How will I earn my return on VENQ?",
    answer:
      "Returns are earned through the increase in the property's value and any rental income generated. Upon the sale of the property or at the end of the Investment Term, investors realize returns on their stake.",
  },
  {
    question: "What returns can I expect?",
    answer:
      "Expected returns vary depending on the specific property and market conditions. Each investment campaign outlines the projected returns, providing transparency to investors.",
  },
  {
    question: "How will I know what my investment is worth?",
    answer:
      "The value of your investment is reflected in the appreciation of the property and any potential rental income. Regular updates and performance reports are provided to keep investors informed about the status of their investment. You can also use your portfolio to track your investments.",
  },
  {
    question: "Do I earn any interest on the available balance in my wallet?",
    answer:
      "VENQ does not offer interest on the wallet balance. The wallet is primarily used for the convenience of investors in managing their transactions on the platform.",
  },
  {
    question: "What are Material Changes?",
    answer:
      "Material Changes refer to significant alterations or updates related to an ongoing investment campaign. These could include changes in project details, investment terms, or other crucial information. Investors are promptly informed about Material Changes, and their consent is sought before proceeding.",
  },
];



const Returns = () => {
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

export default Returns;
