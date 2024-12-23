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
//   Box,
//   useMediaQuery,
//   styled,
// } from "@mui/material";

// import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
// import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
// import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
// import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
// import RoofingOutlinedIcon from "@mui/icons-material/RoofingOutlined";
// import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
// import { Search as SearchIcon, Menu as MenuIcon } from "@mui/icons-material";
// import { Facebook, Twitter, LinkedIn } from "@mui/icons-material";
// import { Avatar } from "@mui/material";
// import CardContent from "@mui/material/CardContent";
// import Card from "@mui/material/Card";
// import { Link, useNavigate } from "react-router-dom";

// const UpperPart = styled(Box)(({ theme }) => ({
//   width: "100%",
//   textAlign: "center",
//   position: "absolute",
//   top: "0%",
//   height: "250px",
//   // backgroundColor: "#121c30",
//   backgroundColor: "#1b527b",
//   color: "white",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   flexDirection: "column",
//   [theme.breakpoints.down("sm")]: {
//     height: "25%",
//     marginBottom: "20px",
//   },
// }));

// const SubText = styled(Typography)`
//   display: flex;
//   font-size: 12px;
//   font-weight: 500;
//   line-height: 24px;
//   font-family: "Bebes Neue";
//   font-style: normal;
//   text-align: left;
// `;

// const typoStyle = {
//   color: "#fff",
//   marginTop: "5%",
//   fontFamily: "Bebas Neue,sans-serif",
//   fontSize: "3rem",
// };

// const topics = [
//   {
//     heading: "VENQ",
//     paragraph: "Learn more about VENQ and how to get started",
//     icon: <RocketLaunchOutlinedIcon fontSize="large" />,
//     route: "/learn-view",
//   },
//   {
//     heading: "VENQ CCDs and Legality",
//     paragraph: "Learn what's CCD and legal terms.",
//     icon: <BusinessOutlinedIcon fontSize="large" />,
//     route: "/ccd",
//   },
//   {
//     heading: "Investing",
//     paragraph: "All your questions about how to invest using VENQ, answered!",
//     icon: <AssessmentOutlinedIcon fontSize="large" />,
//     route: "/investing",
//   },
//   {
//     heading: "Returns",
//     paragraph: "Learn more about expected returns",
//     icon: <AttachMoneyOutlinedIcon fontSize="large" />,
//     route: "/returns",
//   },
//   {
//     heading: "Exit windows",
//     paragraph:
//       "FAQs and informational articles about our property exit windows",
//     icon: <RoofingOutlinedIcon fontSize="large" />,
//     route: "/exitwindow",
//   },
//   {
//     heading: "Regulations",
//     paragraph: "Learn more about the regulatory environment we operate in",
//     icon: <StarBorderOutlinedIcon fontSize="large" />,
//     route: "/regulations",
//   },
// ];

// const Learn = () => {
//   const isSmallScreen = useMediaQuery("(max-width:600px)");
//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleGoToVenQ = () => {
//     // Redirect to the home page
//     navigate("/");
//   };

//   const handleLanguageChange = (language) => {
//     // Handle language change logic
//     console.log(`Selected language: ${language}`);
//   };

//   const createHandleMenuClick = (menuItem) => {
//     return () => {
//       console.log(`Clicked on ${menuItem}`);
//     };
//   };

//   return (
//     <>
//       <div style={{ backgroundColor: "#152532", padding: "40px 0px 20px" }}>
//         {/* <Container maxWidth="lg">
//           <AppBar position="static" color="transparent">
//             <Toolbar> */}
//         {/* Logo on the left */}
//         {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//                 <img
//                   src="images/VENQ_BOLD_small1.png"
//                   alt="Logo"
//                   style={{ maxWidth: "100%" }}
//                 />
//               </Typography> */}

//         {/* Tool icons on the right */}
//         {/* <IconButton
//                 color="inherit"
//                 onClick={handleGoToVenQ}
//                 sx={{ color: "#fff", fontSize: "20px" }}
//               >
//                 Go to venQ
//               </IconButton> */}

//         {/* Language dropdown */}
//         {/* <Menu
//                 anchorEl={null}
//                 open={false}
//                 onClose={() => {}}
//                 anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
//                 transformOrigin={{ vertical: "top", horizontal: "right" }}
//               >
//                 <MenuItem onClick={() => handleLanguageChange("English")}>
//                   English
//                 </MenuItem>
//                 <MenuItem onClick={() => handleLanguageChange("Spanish")}>
//                   Spanish
//                 </MenuItem> */}
//         {/* Add more languages as needed */}
//         {/* </Menu>
//             </Toolbar>
//           </AppBar>
//         </Container> */}

//         {/* Text input box */}
//         {/* <Container maxWidth="lg">
//           <Typography
//             variant="h3"
//             component="div"
//             gutterBottom
//             sx={{ flexGrow: 1, marginTop: "20px" }}
//             style={typoStyle}
//           >
//             Advice and answers from the venQ Team
//           </Typography>
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
//         </Container> */}

//         <UpperPart>
//           <div
//             style={{
//               width: isSmallScreen ? "80%" : "610px",
//               display: "flex",
//               flexDirection: "column",
//             }}
//           >
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//               }}
//             >
//               <img
//                 src="images/VENQ_BOLD_small1.png"
//                 alt="notfound"
//                 height={30}
//                 style={{
//                   marginTop: isSmallScreen ? "8px" : "0px",
//                 }}
//               />
//               <p
//                 style={{
//                   fontFamily: "Gilroy-Medium",
//                   cursor: "pointer",
//                   color: "white",
//                 }}
//                 onClick={() => {
//                   navigate("/");
//                 }}
//               >
//                 Go To VENQ{" "}
//               </p>
//             </div>
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//               }}
//             >
//               <SubText>
//                 <h2
//                   style={{
//                     width: isSmallScreen ? "80%" : "600px",
//                     fontFamily: "Inter",
//                     display: "flex",
//                     color: "white",
//                   }}
//                 >
//                   {" "}
//                   Advice and answers from the venQ Team
//                 </h2>
//               </SubText>
//             </div>
//           </div>
//           <input
//             style={{
//               width: isSmallScreen ? "80%" : "600px",
//             }}
//             placeholder="Search.."
//             type="text"
//           />
//         </UpperPart>
//       </div>
//       <Container sx={{ marginTop: isSmallScreen ? "200px" : "260px" }}>
//         <Grid container spacing={2}>
//           {topics.map((topic, index) => (
//             <Grid
//               item
//               xs={12}
//               sm={6}
//               md={4}
//               key={index}
//               sx={{ marginBottom: "2%" }}
//             >
//               <Link
//                 to={topic.route}
//                 component="div"
//                 style={{
//                   textDecoration: "none",
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 <Card
//                   sx={{
//                     width: "345px",
//                     paddingBottom: "5%",
//                     height: "175px",
//                     "&:hover": {
//                       border: "1px solid black",
//                       transition: "border 0.3s ease-in-out",
//                     },
//                   }}
//                   className="hoverCard"
//                 >
//                   <div
//                     style={{
//                       margin: "10px 10px",
//                     }}
//                   >
//                     {topic.icon}
//                   </div>

//                   <CardContent>
//                     <Typography gutterBottom variant="h5" component="div">
//                       {topic.heading}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       {topic.paragraph}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Link>
//             </Grid>
//           ))}
//         </Grid>
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

// export default Learn;

import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Typography,
  Card,
  CardContent,
  useMediaQuery,
  useTheme,
  styled,
  InputBase,
} from "@mui/material";

import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import RoofingOutlinedIcon from "@mui/icons-material/RoofingOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { Search as SearchIcon } from "@mui/icons-material";
import { Facebook, Twitter, LinkedIn } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

const UpperPart = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "250px",
  backgroundColor: "rgba(20, 33, 43)",
  color: "rgb(20, 33, 43)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: "2rem 1rem",
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    minHeight: "200px",
    padding: "1.5rem 1rem",
  },
}));

const SearchContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: "600px",
  marginTop: "2rem",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "90%",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: "100%",
  "& .MuiInputBase-input": {
    padding: "12px 45px 12px 15px",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: "8px",
    color: "rgb(20, 33, 43)",
    fontSize: "1rem",
    transition: "all 0.3s ease",
    "&::placeholder": {
      color: "rgba(0, 0, 0, 0.6)",
    },
    "&:focus": {
      backgroundColor: "white",
      boxShadow: "0 0 0 2px rgba(255, 255, 255, 0.2)",
    },
  },
}));

const StyledCard = styled(Card)({
  height: "100%",
  backgroundColor: "white",
  transition: "all 0.3s ease",
  border: "1px solid rgba(20, 33, 43, 0.1)",
  boxShadow: "0 4px 12px rgba(20, 33, 43, 0.08)",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 12px 28px rgba(20, 33, 43, 0.15)",
    border: "1px solid rgba(20, 33, 43, 0.2)",
  },
  "& .MuiCardContent-root": {
    padding: "1.5rem",
  },
  "& .icon-container": {
    color: "rgb(20, 33, 43)",
    marginBottom: "1rem",
  },
  "& .MuiTypography-h5": {
    fontSize: "1.25rem",
    fontWeight: 600,
    marginBottom: "0.75rem",
    color: "rgb(20, 33, 43)",
  },
  "& .MuiTypography-body2": {
    color: "rgba(0, 0, 0, 0.7)",
  },
});

const topics = [
  {
    heading: "VENQ",
    paragraph: "Learn more about VENQ and how to get started",
    icon: <RocketLaunchOutlinedIcon fontSize="large" />,
    route: "/learn-view",
  },
  {
    heading: "VENQ CCDs and Legality",
    paragraph: "Learn what's CCD and legal terms.",
    icon: <BusinessOutlinedIcon fontSize="large" />,
    route: "/ccd",
  },
  {
    heading: "Investing",
    paragraph: "All your questions about how to invest using VENQ, answered!",
    icon: <AssessmentOutlinedIcon fontSize="large" />,
    route: "/investing",
  },
  {
    heading: "Returns",
    paragraph: "Learn more about expected returns",
    icon: <AttachMoneyOutlinedIcon fontSize="large" />,
    route: "/returns",
  },
  {
    heading: "Exit windows",
    paragraph:
      "FAQs and informational articles about our property exit windows",
    icon: <RoofingOutlinedIcon fontSize="large" />,
    route: "/exitwindow",
  },
  {
    heading: "Regulations",
    paragraph: "Learn more about the regulatory environment we operate in",
    icon: <StarBorderOutlinedIcon fontSize="large" />,
    route: "/regulations",
  },
];

const Learn = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Box sx={{ bgcolor: "rgba(20, 33, 43, 0.1)", minHeight: "100vh" }}>
      <UpperPart>
        <Box
          sx={{
            width: "100%",
            maxWidth: "610px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <img
              src="images/VENQ_BOLD_small1.png"
              alt="VENQ Logo"
              style={{
                height: isSmallScreen ? "24px" : "30px",
                objectFit: "contain",
              }}
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

          <Typography
            variant="h1"
            sx={{
              fontSize: isSmallScreen ? "1.75rem" : "2.5rem",
              fontWeight: 600,
              mt: 4,
              mb: 3,
              color: "white",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Advice and Answers from the VENQ Team
          </Typography>

          <SearchContainer>
            <StyledInputBase
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
              endAdornment={
                <SearchIcon
                  sx={{
                    position: "absolute",
                    right: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "rgba(0, 0, 0, 0.54)",
                  }}
                />
              }
            />
          </SearchContainer>
        </Box>
      </UpperPart>

      <Container
        maxWidth="lg"
        sx={{
          mt: isSmallScreen ? 4 : 6,
          mb: 8,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Grid container spacing={3}>
          {topics.map((topic, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Link to={topic.route} style={{ textDecoration: "none" }}>
                <StyledCard>
                  <CardContent>
                    <div className="icon-container">{topic.icon}</div>
                    <Typography variant="h5">{topic.heading}</Typography>
                    <Typography variant="body2">{topic.paragraph}</Typography>
                  </CardContent>
                </StyledCard>
              </Link>
            </Grid>
          ))}
        </Grid>
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

export default Learn;
