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
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const typoStyle = {
  color: "#fff",
  marginTop: "5%",
  fontFamily: "Bebas Neue,sans-serif",
  fontSize: "3rem",
};

const questions = [
  {
    question:
      "How does VENQ comply with the Real Estate (Regulation and Development) Act, 2016 (RERA)?",
    answer:
      "VENQ facilitates fundraising for real estate properties and does not engage in property development. As a result, VENQ operates outside the scope of RERA, which primarily regulates developers and real estate projects.",
  },
  {
    question:
      "Are there any restrictions on international investors participating in VENQ?",
    answer:
      "International investors, including Non-Resident Indians (NRIs), are welcome to participate in VENQ. However, the investment structure and regulatory requirements may vary for international investors, and compliance with the Foreign Exchange Management Act (FEMA) is crucial.",
  },
  {
    question:
      "How does VENQ handle compliance with the Securities and Exchange Board of India (SEBI)?",
    answer:
      "VENQ issues convertible debentures through private placements, catering to a select group of investors. This approach aligns with SEBI provisions, as the offering is not made to the public, and the debentures are converted into equity shares.",
  },
  {
    question:
      "What steps does VENQ take to ensure data protection and privacy?",
    answer:
      "VENQ prioritizes the confidentiality and security of user data. Stringent data protection measures, including encryption and secure storage, are implemented to comply with applicable data protection laws.",
  },
  {
    question:
      "Does VENQ adhere to the guidelines set by the Reserve Bank of India (RBI)?",
    answer:
      "VENQ follows regulations set by the RBI, especially in cases where investments involve Non-Resident Indians (NRIs). Compliance with FEMA regulations is crucial for transactions with international investors.",
  },
];

const additionalQuestions = [
  {
    question: "Why am I asked for personal details and documents?",
    answer:
      "Collecting personal details and documents is a regulatory requirement aimed at ensuring compliance with anti-money laundering (AML) and know your customer (KYC) regulations. It helps verify the identity of investors and protect against potential fraudulent activities.",
  },
  {
    question:
      "If VENQ were to go bankrupt, what are the measures in place to protect my investments?",
    answer:
      "VENQ operates within a legal framework to safeguard investor interests. In the event of bankruptcy, the assets held in Special Purpose Vehicles (SPVs) are legally distinct and protected, providing a level of insulation for investors' holdings.",
  },
  {
    question:
      "Must I update VENQ if my personal details or circumstances change?",
    answer:
      "Yes, it is essential to keep your personal details updated with VENQ. Changes in circumstances, such as address or contact information, should be promptly communicated to ensure accurate records and compliance with regulatory requirements.",
  },
  {
    question: "What is a Professional Client?",
    answer:
      "A Professional Client is a category of investor defined by regulatory authorities. These investors typically have a higher level of financial knowledge and experience. Certain regulatory exemptions and opportunities may be available to Professional Clients.",
  },
  {
    question: "Are taxes applicable to investments at VENQ?",
    answer:
      "Yes, taxes may be applicable to investment returns. The tax implications can vary based on individual circumstances and jurisdictions. It is recommended to seek advice from a tax professional to understand the specific tax obligations related to your investments.",
  },
];

// {
//     question: "Please note that these FAQs provide general information and do not constitute legal advice. For specific legal queries, it is advisable to consult with our team at team@venq.in",
//     answer: "",
//   },

const Regulations = () => {
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
          border: "1px solid #ddd",
          borderRadius: "10px",
        }}
      >
        {/* Questions Container */}
        <Container maxWidth="md" sx={{ marginTop: "40px" }}>
          {additionalQuestions.map((item, index) => (
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
          marginTop: "20px",
          textAlign: "center",
        //   backgroundColor: "#152532",
        //   color: "#fff",
          borderRadius: "10px",
        }}
      >
        <Typography>
          Please note that these FAQs provide general information and do not constitute legal advice. For specific legal queries, it is advisable to consult with our team at team@venq.in.
        </Typography>
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

export default Regulations;
