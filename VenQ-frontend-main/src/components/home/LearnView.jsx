// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   InputBase,
//   IconButton,
//   Grid,
//   AvatarGroup,
//   Container,
//   Menu,
//   MenuItem,
// } from "@mui/material";
// import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
// import { Search as SearchIcon, Menu as MenuIcon } from "@mui/icons-material";
// import { Facebook, Twitter, LinkedIn } from "@mui/icons-material";
// import { Avatar } from "@mui/material";
// import CardContent from "@mui/material/CardContent";
// import Card from "@mui/material/Card";
// import { Link, useNavigate } from "react-router-dom";
// import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined"; // Add this import
// import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

// const typoStyle = {
//   color: "#fff",
//   marginTop: "5%",
//   fontFamily: "Bebas Neue,sans-serif",
//   fontSize: "3rem",
// };

// const questions = [
//   {
//     question: "What is VENQ?",
//     answer:
//       "VENQ is a groundbreaking real estate investment platform that allows individuals to invest in prime properties with just Rs.50,000. We specialize in fractionalized investing, enabling users to own a share of lucrative real estate opportunities.",
//   },
//   {
//     question: "Who can invest in VENQ?",
//     answer:
//       "VENQ is open to all Indian residents above 18 years of age. Whether you're a seasoned investor or a first-timer, our platform is designed to cater to a diverse range of users.",
//   },
//   {
//     question: "How do I get started?",
//     answer:
//       "Getting started with VENQ is simple! Sign up on our platform, and explore a curated selection of real estate listings. Choose the property you wish to invest in and become a fractional owner with just a few clicks. And E-signing a few documents which takes less than 3 minutes.",
//   },
//   {
//     question: "How does it work?",
//     answer:
//       "VENQ employs a sophisticated process to make fractionalized investing accessible and secure. Special Purpose Vehicle (SPV), Ownership Structure, Management Contract, Voting Rights.",
//   },
//   {
//     question: "What are VENQ's services?",
//     answer:
//       "VENQ offers a comprehensive platform for fractionalized investing in real estate. Our services encompass meticulous property selection, expert investment management, and a streamlined investment experience. Backed by tangible assets, VENQ ensures a secure and rewarding journey into the realm of real estate ownership.",
//   },
//   {
//     question: "Is VENQ a long-term investment?",
//     answer:
//       "Yes, VENQ is designed for both short-term and long-term investors. Users can choose their investment horizon based on their financial goals. And we suggest a holding period of 3-5 years.",
//   },
//   {
//     question: "What are VENQ's fees?",
//     answer:
//       "At VENQ, we believe in transparency and aligning our success with yours. Here's an overview of our fee structure: VENQ Fees (3%), Transaction Costs, Performance Fees (10%). Our commitment to transparency ensures that investors have a clear understanding of the associated costs, empowering you to make informed decisions about your investments with VENQ.",
//   },
//   {
//     question: "What are transaction costs?",
//     answer:
//       "Transaction costs cover charges related to property acquisition, legal processes, and administrative overheads. These costs are proportionately distributed among investors.",
//   },
//   {
//     question: "How are properties selected on VENQ?",
//     answer:
//       "Properties listed on VENQ undergo a meticulous selection process, with our team meticulously evaluating factors such as location, market trends, and growth potential. This ensures a diverse and promising portfolio, aligning with our commitment to providing investors with high-quality real estate opportunities.",
//   },
//   {
//     question: "What is a proof of address document (POA)?",
//     answer:
//       "A proof of address document (POA) is a document that verifies your residential address. It can be an Aadhar card, a passport, or any government-issued document that confirms your place of residence. This is a standard requirement for user verification and compliance purposes.",
//   },
//   // Add the new questions and answers here
// ];

// const LearnView = () => {
//   const navigate = useNavigate(); // Initialize useNavigate
//   const [openDropdown, setOpenDropdown] = useState(null);

//   const handleGoToVenQ = () => {
//     // Redirect to the home page
//     navigate("/");
//   };

//   const toggleDropdown = (index) => {
//     setOpenDropdown(openDropdown === index ? null : index);
//   };
//   return (
//     <>
//       <div style={{ backgroundColor: "#1b527b", padding: "40px 0px 20px" }}>
//         <Container maxWidth="lg">
//           <AppBar position="static" color="transparent">
//             <Toolbar>
//               {/* Logo on the left */}
//               <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//                 <img
//                   src="images/VENQ_BOLD_small1.png"
//                   alt="Logo"
//                   style={{ maxWidth: "100%" }}
//                 />
//               </Typography>

//               {/* Tool icons on the right */}
//               <IconButton
//                 color="inherit"
//                 onClick={handleGoToVenQ}
//                 sx={{ color: "#fff", fontSize: "20px" }}
//               >
//                 Go to venQ
//               </IconButton>
//             </Toolbar>
//           </AppBar>
//         </Container>

//         {/* Text input box */}
//         <Container maxWidth="lg" sx={{ marginTop: "5%" }}>
//           <InputBase
//             placeholder="Search..."
//             inputProps={{ "aria-label": "search" }}
//             fullWidth
//             startAdornment={<SearchIcon style={{ color: "#888888" }} />}
//             sx={{
//               backgroundColor: "rgba(255, 255, 255, 0.8)",
//               borderRadius: "10px",
//               padding: "15px",
//               marginTop: "10px",
//             }}
//           />
//         </Container>
//       </div>

//       <Container
//         style={{
//           height: "auto",
//           padding: "20px 0",
//           marginTop: "100px",
//           border: "1px solid #ddd",
//           borderRadius: "10px",
//         }}
//       >
//         {/* Questions Container */}
//         <Container maxWidth="md" sx={{ marginTop: "40px" }}>
//           {questions.map((item, index) => (
//             <div
//               key={index}
//               onClick={() => toggleDropdown(index)}
//               style={{
//                 position: "relative",
//                 marginBottom: "10px", // Add margin-bottom to create space between questions
//               }}
//             >
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "row",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                   padding: "15px",
//                   backgroundColor: "rgba(255, 255, 255, 0.8)",
//                   borderRadius: "10px",
//                   cursor: "pointer",
//                   "&:hover": {
//                     backgroundColor: "black",
//                   },
//                 }}
//               >
//                 <Typography
//                   style={{ fontSize: "1.25rem", marginRight: "10px" }}
//                 >
//                   {item.question}
//                 </Typography>
//                 {openDropdown === index ? (
//                   <KeyboardArrowDownOutlinedIcon
//                     style={{ fontSize: "20px", color: "#000" }}
//                   />
//                 ) : (
//                   <ChevronRightOutlinedIcon
//                     style={{ fontSize: "20px", color: "#000" }}
//                   />
//                 )}
//               </div>
//               {openDropdown === index && (
//                 <div
//                   style={{
//                     backgroundColor: "#fff",
//                     padding: "10px",
//                     borderRadius: "5px",
//                     marginTop: "5px", // Add margin-top for space between question and dropdown
//                     top: "100%", // Position below the question
//                     left: 0,
//                     width: "100%",
//                     zIndex: 1,
//                   }}
//                 >
//                   <Typography>{item.answer}</Typography>
//                 </div>
//               )}
//             </div>
//           ))}
//         </Container>
//       </Container>

//       <Container
//         style={{
//           height: "auto",
//           padding: "20px 0",
//           marginTop: "100px",
//         }}
//       >
//         {/* Top Div with Logo */}
//         <div style={{ textAlign: "center", marginBottom: "20px" }}>
//           <img
//             src="images/VENQ_BOLD_Big.png"
//             alt="Logo"
//             style={{ width: "150px" }}
//           />
//         </div>

//         {/* Bottom Div with Social Icons */}
//         <div style={{ textAlign: "center" }}>
//           {/* Add your social icons here */}
//           <IconButton color="inherit" style={{ margin: "0 10px" }}>
//             <Facebook />
//           </IconButton>
//           <IconButton color="inherit" style={{ margin: "0 10px" }}>
//             <Twitter />
//           </IconButton>
//           <IconButton color="inherit" style={{ margin: "0 10px" }}>
//             <LinkedIn />
//           </IconButton>
//         </div>
//       </Container>
//     </>
//   );
// };

// export default LearnView;


import React, { useState } from "react";
import {
  Typography,
  InputBase,
  IconButton,
  Container,
  Box,
  styled,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { Facebook, Twitter, LinkedIn } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: "100%",
  "& .MuiInputBase-input": {
    padding: "15px 45px 15px 45px",
    backgroundColor: "white",
    border: "1px solid rgba(20, 33, 43, 0.2)",
    borderRadius: "8px",
    color: "rgb(20, 33, 43)",
    fontSize: "1rem",
    transition: "all 0.3s ease",
    "&::placeholder": {
      color: "rgba(20, 33, 43, 0.6)",
    },
    "&:focus": {
      borderColor: "rgb(20, 33, 43)",
      boxShadow: "0 0 0 1px rgba(20, 33, 43, 0.1)",
    },
  },
}));

const QuestionContainer = styled(Box)({
  marginBottom: "12px",
  borderRadius: "10px",
  overflow: "hidden",
  backgroundColor: "white",
  transition: "all 0.3s ease",
  border: "1px solid rgba(20, 33, 43, 0.15)",
  "&:hover": {
    boxShadow: "0 4px 20px rgba(20, 33, 43, 0.1)",
    transform: "translateY(-2px)",
  },
});

const QuestionHeader = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "20px 24px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: "rgba(20, 33, 43, 0.02)",
  },
});

const AnswerContainer = styled(Box)({
  padding: "20px 24px",
  backgroundColor: "rgba(20, 33, 43, 0.02)",
  borderTop: "1px solid rgba(20, 33, 43, 0.15)",
});
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
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <Box
      sx={{ bgcolor: "white", minHeight: "100vh", color: "rgb(20, 33, 43)" }}
    >
      {/* Header Section */}
      <Box
        sx={{
          bgcolor: "rgb(20, 33, 43)",
          py: 6,
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Logo and Navigation */}
          <Box
            sx={{
              width: "100%",
              maxWidth: "600px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 4,
            }}
          >
            <img
              src="images/VENQ_BOLD_small1.png"
              alt="Logo"
              style={{ height: "35px", width: "auto" }}
            />
            <Typography
              onClick={() => navigate("/")}
              sx={{
                color: "rgb(20, 33, 43)",
                backgroundColor: "white",
                cursor: "pointer",
                fontWeight: 500,
                fontSize: "0.95rem",
                padding: "8px 20px",
                borderRadius: "6px",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  transform: "translateY(-1px)",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                },
                "&:active": {
                  transform: "translateY(0)",
                },
              }}
            >
              Go to VENQ
            </Typography>
          </Box>

          {/* Search Bar */}
          <Box
            sx={{
              width: "100%",
              maxWidth: "600px",
              position: "relative",
            }}
          >
            <SearchIcon
              sx={{
                position: "absolute",
                left: "16px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "rgb(20, 33, 43, 0.6)",
                zIndex: 1,
              }}
            />
            <StyledInputBase placeholder="Search..." />
          </Box>
        </Container>
      </Box>

      {/* Questions Section */}
      <Container
        maxWidth="lg"
        sx={{
          mt: 8,
          mb: 8,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box
          sx={{
            maxWidth: "800px",
            mx: "auto",
          }}
        >
          {questions.map((item, index) => (
            <QuestionContainer key={index}>
              <QuestionHeader onClick={() => toggleDropdown(index)}>
                <Typography
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.1rem" },
                    fontWeight: 500,
                    color: "rgb(20, 33, 43)",
                    flex: 1,
                    pr: 2,
                  }}
                >
                  {item.question}
                </Typography>
                {openDropdown === index ? (
                  <KeyboardArrowDownOutlinedIcon
                    sx={{ color: "rgb(20, 33, 43)", fontSize: 24 }}
                  />
                ) : (
                  <ChevronRightOutlinedIcon
                    sx={{ color: "rgb(20, 33, 43)", fontSize: 24 }}
                  />
                )}
              </QuestionHeader>
              {openDropdown === index && (
                <AnswerContainer>
                  <Typography
                    sx={{
                      color: "rgb(20, 33, 43, 2.8)",
                      lineHeight: 1.7,
                      fontSize: { xs: "0.9rem", sm: "0.95rem" },
                      letterSpacing: "0.2px",
                    }}
                  >
                    {item.answer}
                  </Typography>
                </AnswerContainer>
              )}
            </QuestionContainer>
          ))}
        </Box>
      </Container>

      {/* Footer Section */}
      <Box
        component="footer"
        sx={{
          py: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            mb: 3,
          }}
        >
          <img
            src="images/VENQ_BOLD_Big.png"
            alt="VENQ Logo"
            style={{
              width: "150px",
              height: "auto",
              margin: "0 auto",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <IconButton color="inherit" sx={{ mx: 1 }}>
            <Facebook />
          </IconButton>
          <IconButton color="inherit" sx={{ mx: 1 }}>
            <Twitter />
          </IconButton>
          <IconButton color="inherit" sx={{ mx: 1 }}>
            <LinkedIn />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default LearnView;
