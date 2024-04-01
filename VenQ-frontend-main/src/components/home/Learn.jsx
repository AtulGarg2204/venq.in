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
  Box,
  useMediaQuery,
  styled
} from "@mui/material";




import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import RoofingOutlinedIcon from "@mui/icons-material/RoofingOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { Search as SearchIcon, Menu as MenuIcon } from "@mui/icons-material";
import { Facebook, Twitter, LinkedIn } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import { Link, useNavigate } from "react-router-dom";

const UpperPart = styled(Box)(({ theme }) => ({
  width: "100%",
  textAlign: "center",
  position: "absolute",
  top: "0%",
  height: '250px',
  backgroundColor: "#121c30",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    height:'25%',
    marginBottom:  "20px"
    
  },
}));



const SubText = styled(Typography)`
  display:flex;
  font-size: 12px;
  font-weight: 500;
  line-height: 24px;
  font-family: "Bebes Neue";
  font-style: normal;
  text-align:left;
`;

const typoStyle = {
  color: "#fff",
  marginTop: "5%",
  fontFamily: "Bebas Neue,sans-serif",
  fontSize: "3rem",
};

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
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleGoToVenQ = () => {
    // Redirect to the home page
    navigate("/");
  };

  const handleLanguageChange = (language) => {
    // Handle language change logic
    console.log(`Selected language: ${language}`);
  };

  const createHandleMenuClick = (menuItem) => {
    return () => {
      console.log(`Clicked on ${menuItem}`);
    };
  };

  return (
    <>
      <div style={{ backgroundColor: "#152532", padding: "40px 0px 20px" }}>
        {/* <Container maxWidth="lg">
          <AppBar position="static" color="transparent">
            <Toolbar> */}
              {/* Logo on the left */}
              {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <img
                  src="images/VENQ_BOLD_small1.png"
                  alt="Logo"
                  style={{ maxWidth: "100%" }}
                />
              </Typography> */}

              {/* Tool icons on the right */}
              {/* <IconButton
                color="inherit"
                onClick={handleGoToVenQ}
                sx={{ color: "#fff", fontSize: "20px" }}
              >
                Go to venQ
              </IconButton> */}

              {/* Language dropdown */}
              {/* <Menu
                anchorEl={null}
                open={false}
                onClose={() => {}}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
              >
                <MenuItem onClick={() => handleLanguageChange("English")}>
                  English
                </MenuItem>
                <MenuItem onClick={() => handleLanguageChange("Spanish")}>
                  Spanish
                </MenuItem> */}
                {/* Add more languages as needed */}
              {/* </Menu>
            </Toolbar>
          </AppBar>
        </Container> */}

        {/* Text input box */}
        {/* <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="div"
            gutterBottom
            sx={{ flexGrow: 1, marginTop: "20px" }}
            style={typoStyle}
          >
            Advice and answers from the venQ Team
          </Typography>
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
        </Container> */}

<UpperPart>
      <div style={{
         width:isSmallScreen?'80%':'610px',
        display:'flex',
        flexDirection:'column',
      }}>
        <div style={{
          display:'flex',
          justifyContent:'space-between'
        }}>
          <img src="images/VENQ_BOLD_small1.png" alt="notfound" height={30} style={{
            marginTop:isSmallScreen?'8px':'0px'
          }} />
          <p style={{
            fontFamily:'Gilroy-Medium',
            cursor:'pointer'
          }} onClick={()=>{
            navigate('/')
          }} >Go To VenQ</p>
        </div>
      <div style={{
        display:'flex',
        flexDirection:'column'
      }}>
      <SubText>
               <h2 style={{
                width:isSmallScreen?'80%':'600px' , 
                fontFamily:'Inter',
                display:'flex',
               }}> Advice and answers from the venQ Team</h2>
              </SubText>
      </div>
      </div>
              <input style={{
                width:isSmallScreen?'80%':'600px',
                
              }} placeholder='Search..' type="text" />
      
              
              
            </UpperPart>
      </div>
      <Container sx={{ marginTop: isSmallScreen?"200px":"260px" }}>
        <Grid container spacing={2}>
          {topics.map((topic, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{ marginBottom: "2%" }}
            >
              <Link
                to={topic.route}
                component="div"
                style={{ textDecoration: "none",
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
               }}
              >
                <Card
                  sx={{
                    width: '345px',
                    paddingBottom: "5%",
                    height: "175px",
                    "&:hover": {
                      border: "1px solid black",
                      transition: "border 0.3s ease-in-out",
                    },
                  }}
                  className="hoverCard"
                >
                  <div
                    style={{
                      margin: "10px 10px",
                    }}
                  >
                    {topic.icon}
                  </div>

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {topic.heading}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {topic.paragraph}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
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

export default Learn;

