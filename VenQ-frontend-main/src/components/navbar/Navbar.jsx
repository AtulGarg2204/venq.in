import {
  AppBar,
  Box,
  Divider,
  Toolbar,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
  Menu,
  MenuItem,
  List,
  Avatar,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import venqLogo from "../NewHome/assets/venq_logo.png";
import faqIcon from "./chat.png";
import blogIcon from "./blog.png";
import React, { useState, useEffect } from "react";
import MenuElement from "./MenuElement";
import "./Navbar.css";
import jwtDecode from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
const NavbarComponent = styled(AppBar)`
  color: white;
  box-shadow: none;
  /* padding: 15px; */
  background-color: ${(props) =>
    props.st ? props.st.backgroundColor : "transparent"};
  position: relative; // Change this to 'relative' from 'fixed'
  z-index: 1; // Ensure the Navbar stays above other content
  @media (max-width: 768px) {
    margin-bottom: 5%;
  }
`;
const NavbarComponentSmall = styled(AppBar)`
  color: white;
  box-shadow: none;
  /* padding: 15px; */
  background-color: ${(props) =>
    props.st ? props.st.backgroundColor : "transparent"};
  position: relative; // Change this to 'relative' from 'fixed'
`;

const Heading = styled(Typography)`
  text-decoration: none;
  font-family: Inter;
  font-size: 18px;
`;

const Container = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2%;
  padding-inline: 3%;
  // /* padding-right: 17%; */
`;
const NewContainer = styled(Toolbar)`
  display: flex;
  padding-top: 1.5%;
`;

const Text = styled(Typography)`
  font-family: Gilroy-Bold;
  font-size: 17px;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  cursor: pointer;
   @media (max-width: 769px) {
    font-size: 16px;
  }
`;
const Options = styled(Link)`
  padding: 5px;
  display: flex;
  align-items: flex-start;
  font-size: 16px;
  border-radius: 10px;
  margin-bottom: 5px;
`;

const Navbar = (props) => {
  console.log(props.st);
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const navigate = useNavigate();

  const [showNavItems, setShowNavItems] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [isMenuIconClicked, setMenuIconClicked] = useState(false);

  const breakpoint = 768;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const token = JSON.parse(localStorage.getItem("userinfo"));
  console.log(token);
  // console.log(localStorage.getItem("userinfo"));

  const handleNavToggle = () => {
    setShowNavItems(!showNavItems);
    setMenuIconClicked(!isMenuIconClicked);
  };

  const handleClick = () => {
    navigate("/properties");
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLearnClick = () => {
    navigate("/learn");
  };
  const handleLoginClick = () => {
    navigate("/login");
  };
  const handleSignupClick = () => {
    navigate("/signup");
  };
  const handleDashboard = () => {
    navigate("/dashboard/properties");
  };
  const handleClicklearn = (event) => {
    // console.log('click hua h');
    // console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };
  // console.log(name);
  var namearr;
  if (token) {
    if (token.name) {
      namearr = token.name.split(" ");
    }
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      {!isMobile && (
        <>
          <NavbarComponent>
            {isMobile ? (
              <Container>
                <div className="imageContainer">
                  <Link to="/">
                    {" "}
                    <img
                      src="images/VENQ_BOLD_small.png"
                      alt="logo"
                      width="80"
                    />
                  </Link>
                </div>
                <div>
                  <div className="menu_icon">
                    <FontAwesomeIcon
                      className="menu_icon"
                      icon={isMenuIconClicked ? faTimes : faBars}
                      color="black"
                      style={{ color: "black" }}
                      onClick={handleNavToggle}
                    />
                  </div>
                  {/* <div>
                    <MenuIcon className="menu_icon" onClick={handleNavToggle} />
                  </div> */}

                  {isMobile && showNavItems && (
                    <div className="mobileNavItems">
                      <div className="mobileItem" onClick={handleClick}>
                        Invest
                      </div>
                      <div className="mobileItem">List Property</div>

                      <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        // sx={{
                        //   backgroundColor:'black'
                        // }}
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        PaperProps={{
                          elevation: 0,
                          sx: {
                            overflow: "visible",
                            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                            mt: 1.5,
                            "& .MuiAvatar-root": {
                              width: 32,
                              height: 32,
                              ml: -0.5,
                              mr: 1,
                            },
                            "&::before": {
                              content: '""',
                              display: "block",
                              position: "absolute",
                              top: 0,
                              right: 14,
                              width: 10,
                              height: 10,
                              bgcolor: "background.paper",
                              transform: "translateY(-50%) rotate(45deg)",
                              zIndex: 0,
                            },
                          },
                        }}
                        transformOrigin={{
                          horizontal: "right",
                          vertical: "top",
                        }}
                        anchorOrigin={{
                          horizontal: "right",
                          vertical: "bottom",
                        }}
                      >
                        <MenuItem
                          onClick={() => {
                            navigate("/blog");
                          }}
                        >
                          Blog
                        </MenuItem>
                        <Divider />
                        <MenuItem
                          onClick={() => {
                            navigate("/learn");
                          }}
                        >
                          Faq's
                        </MenuItem>
                      </Menu>
                      <div
                        className="mobileItem"
                        onClick={handleClicklearn}
                        aria-controls={open ? "account-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                      >
                        Learn
                      </div>

                      {token && (
                        <div
                          style={{
                            width: "345px",
                            padding: "10px",
                            display: "flex",
                            alignItems: "flex-start",
                            flexDirection: isMobile ? "column" : "row",
                            justifyContent: "flex-start",
                            gap: "10px",
                            height: "fit-content",
                          }}
                          className="account-container"
                        >
                          {/* <span>Proof of address missing</span> */}
                          {token && namearr && namearr.length > 0 && (
                            <>
                              <div>
                                <MenuElement name={namearr[0]} />
                              </div>
                            </>
                          )}
                        </div>
                      )}
                      {!token && (
                        <>
                          <div className="buttonContainer">
                            <Link to="/login">
                              <button className="loginButton">Login</button>
                            </Link>{" "}
                            <Link to="/signup">
                              <button className="SignupButton">Signup</button>
                            </Link>
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </Container>
            ) : (
              <NewContainer>
                <div className="imageContainer">
                  <Link to="/">
                    <img src={venqLogo} alt="logo" width="140" height="auto" />
                  </Link>
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    marginLeft: "5px",
                    marginRight: "10px",
                    // backgroundColor:'red',
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div className="LinkContainer">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                          width: "400px",
                        }}
                      >
                        <Text onClick={handleClick}>Invest</Text>
                        <Text data-tally-open="3qR2Ed">List Property </Text>

                        <Text
                          onClick={handleClicklearn}
                          aria-controls={open ? "account-menu" : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? "true" : undefined}
                        >
                          Learn
                        </Text>

                        {/* <Menu
                          anchorEl={anchorEl}
                          id="account-menu"
                          // sx={{
                          //   backgroundColor:'black'
                          // }}
                          open={open}
                          onClose={handleClose}
                          onClick={handleClose}
                          PaperProps={{
                            elevation: 0,
                            sx: {
                              overflow: "visible",
                              filter:
                                "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                              mt: 1.5,
                              "& .MuiAvatar-root": {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                              },
                              "&::before": {
                                content: '""',
                                display: "block",
                                position: "absolute",
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: "background.paper",
                                transform: "translateY(-50%) rotate(45deg)",
                                zIndex: 0,
                              },
                            },
                          }}
                          transformOrigin={{
                            horizontal: "right",
                            vertical: "top",
                          }}
                          anchorOrigin={{
                            horizontal: "right",
                            vertical: "bottom",
                          }}
                        >
                          <MenuItem
                            onClick={() => {
                              navigate("/blog");
                            }}
                          >
                            Blog1
                          </MenuItem>
                          <Divider />
                          <MenuItem
                            onClick={() => {
                              navigate("/learn");
                            }}
                          >
                            Faq's
                          </MenuItem>
                        </Menu> */}

                        <Menu
                          anchorEl={anchorEl}
                          id="account-menu"
                          open={open}
                          onClose={handleClose}
                          onClick={handleClose}
                          PaperProps={{
                            elevation: 0,
                            sx: {
                              display: "flex",
                              justifyContent: "center",
                              overflow: "visible",
                              filter:
                                "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                              mt: 1.5,
                              "&::before": {
                                content: '""',
                                display: "block",
                                position: "absolute",
                                top: 0,
                                left: "50%",
                                transform:
                                  "translateX(-50%) translateY(-50%) rotate(45deg)",
                                width: 10,
                                height: 10,
                                bgcolor: "background.paper",
                                zIndex: 0,
                              },
                            },
                          }}
                          transformOrigin={{
                            horizontal: "center",
                            vertical: "top",
                          }}
                          anchorOrigin={{
                            horizontal: "center",
                            vertical: "bottom",
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                          >
                            <MenuItem
                              onClick={() => {
                                navigate("/blog");
                              }}
                            >
                              <img
                                src={blogIcon}
                                style={{ marginRight: "5px" }}
                              ></img>
                              Blog 
                            </MenuItem>
                            <Divider orientation="vertical" flexItem />
                            <MenuItem
                              onClick={() => {
                                navigate("/learn");
                              }}
                            >
                              <img
                                src={faqIcon}
                                style={{
                                  marginRight: "5px",
                                }}
                              ></img>
                              Faq's
                            </MenuItem>
                          </Box>
                        </Menu>
                      </div>
                    </div>
                  </div>

                  {token && (
                    <div
                      style={{
                        width: "345px",
                        padding: "10px",
                        display: "flex",
                        justifyContent: "flex-start",
                        gap: "10px",
                      }}
                      className="account-container"
                    >
                      {/* <span>Proof of address missing</span> */}
                      {token && namearr && namearr.length > 0 && (
                        <>
                          <MenuElement name={namearr[0]} />
                        </>
                      )}
                    </div>
                  )}
                  {!token && (
                    <>
                      <div className="buttonContainer">
                        <Link to="/login">
                          <button className="loginButton">Login</button>
                        </Link>
                        <Link to="/signup">
                          <button className="SignupButton">Signup</button>
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              </NewContainer>
            )}
          </NavbarComponent>
        </>
      )}
      {isMobile && (
        <>
          <NavbarComponentSmall>
            {isMobile ? (
              <Container>
                <div className="imageContainer">
                  <Link to="/">
                    {" "}
                    <img
                      src="http://res.cloudinary.com/dos2aqlca/image/upload/v1723364817/ramimg/yobqyvnhejpzu7vvxchj.png"
                      alt="logoof mobile"
                      width="80"
                    />
                  </Link>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={isMenuIconClicked ? faTimes : faBars}
                    style={{ color: "black", height: "20px" }}
                    onClick={handleNavToggle}
                  />
                  {isMobile && showNavItems && (
                    <div className="mobileNavItems">
                      <div className="mobileItem" onClick={handleClick}>
                        Invest
                      </div>
                      <div className="mobileItem" data-tally-open="3qR2Ed">
                        List Property
                      </div>
                      <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        // sx={{
                        //   backgroundColor:'black'
                        // }}
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        PaperProps={{
                          elevation: 0,
                          sx: {
                            overflow: "visible",
                            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                            mt: 1.5,
                            "& .MuiAvatar-root": {
                              width: 32,
                              height: 32,
                              ml: -0.5,
                              mr: 1,
                            },
                            "&::before": {
                              content: '""',
                              display: "block",
                              position: "absolute",
                              top: 0,
                              right: 14,
                              width: 10,
                              height: 10,
                              bgcolor: "background.paper",
                              transform: "translateY(-50%) rotate(45deg)",
                              zIndex: 0,
                            },
                          },
                        }}
                        transformOrigin={{
                          horizontal: "right",
                          vertical: "top",
                        }}
                        anchorOrigin={{
                          horizontal: "right",
                          vertical: "bottom",
                        }}
                      >
                        <MenuItem
                          onClick={() => {
                            navigate("/blog");
                          }}
                        >
                          Blog
                        </MenuItem>
                        <Divider />
                        <MenuItem
                          onClick={() => {
                            navigate("/learn");
                          }}
                        >
                          Faq's 1
                        </MenuItem>
                      </Menu>
                      <div
                        className="mobileItem"
                        onClick={handleClicklearn}
                        aria-controls={open ? "account-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                      >
                        Learn
                      </div>

                      {token && (
                        <div
                          style={{
                            width: "345px",
                            padding: "10px",
                            display: "flex",
                            alignItems: "flex-start",
                            flexDirection: isMobile ? "column" : "row",
                            justifyContent: "flex-start",
                            gap: "10px",
                            height: "fit-content",
                          }}
                          className="account-container"
                        >
                          {/* <span>Proof of address missing</span> */}
                          {token && namearr && namearr.length > 0 && (
                            <>
                              {" "}
                              <div>
                                <MenuElement name={namearr[0]} />
                              </div>
                              {/* <Link to="/dashboard">
                                <button className="dashboard-mobile-screen">
                                  Dashboard
                                </button>
                              </Link> */}
                            </>
                          )}
                        </div>
                      )}
                      {!token && (
                        <>
                          <div className="buttonContainer">
                            <button className="loginButton">
                              <Link to="/login">Login</Link>
                            </button>
                            <button className="SignupButton">
                              <Link to="/signup">Signup</Link>
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </Container>
            ) : (
              <NewContainer>
                <div className="imageContainer">
                  <img
                    src="images/VENQ_BOLD_small1.png"
                    alt="logo"
                    width="87"
                    height="32"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    marginLeft: "5px",
                    marginRight: "10px",
                    // backgroundColor:'red',
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div className="LinkContainer">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                          width: "400px",
                        }}
                      >
                        <Text onClick={handleClick}>Invest</Text>
                        <Text>List Property</Text>

                        <Text
                          onClick={handleClicklearn}
                          aria-controls={open ? "account-menu" : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? "true" : undefined}
                        >
                          Learn
                        </Text>

                        <Menu
                          anchorEl={anchorEl}
                          id="account-menu"
                          // sx={{
                          //   backgroundColor:'black'
                          // }}
                          open={open}
                          onClose={handleClose}
                          onClick={handleClose}
                          PaperProps={{
                            elevation: 0,
                            sx: {
                              overflow: "visible",
                              filter:
                                "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                              mt: 1.5,
                              "& .MuiAvatar-root": {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                              },
                              "&::before": {
                                content: '""',
                                display: "block",
                                position: "absolute",
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: "background.paper",
                                transform: "translateY(-50%) rotate(45deg)",
                                zIndex: 0,
                              },
                            },
                          }}
                          transformOrigin={{
                            horizontal: "right",
                            vertical: "top",
                          }}
                          anchorOrigin={{
                            horizontal: "right",
                            vertical: "bottom",
                          }}
                        >
                          <MenuItem
                            onClick={() => {
                              navigate("/blog");
                            }}
                          >
                            Blog
                          </MenuItem>
                          <Divider />
                          <MenuItem
                            onClick={() => {
                              navigate("/learn");
                            }}
                          >
                            <img src={faqIcon}></img>
                            Faq's
                          </MenuItem>
                        </Menu>
                      </div>
                    </div>
                  </div>

                  {token && (
                    <div
                      style={{
                        width: "345px",
                        padding: "10px",
                        display: "flex",
                        justifyContent: "flex-start",
                        gap: "10px",
                      }}
                      className="account-container"
                    >
                      {/* <span>Proof of address missing</span> */}
                      {token && namearr && namearr.length > 0 && (
                        <>
                          <MenuElement name={namearr[0]} />
                          {/* <Text>Complete onboarding</Text>
                   
                    
                   <Heading style={{ fontSize: "16px",marginRight:'10%'}}>{namearr[0]}</Heading>
                    <img style={{
                      height:'30px',
                      borderRadius:'40%',
                      marginRight:'50%',
                      cursor:'pointer',
                    }} src="images/user.png" alt="fsdf" onClick={toggleVisibility} /> */}
                        </>
                      )}
                    </div>
                  )}
                  {
                    !token && (
                      <>
                        <div className="buttonContainer">
                          <button className="loginButton">
                            <Link to="/login">Login</Link>
                          </button>
                          <button className="SignupButton">
                            <Link to="/signup">Signup</Link>
                          </button>
                        </div>
                      </>
                    )
                    // <>
                    //   <div className="mobileItem">
                    //     <Link to="/login">Login</Link>
                    //   </div>
                    // <div className="mobileItem">
                    //   <Link to="/login">Signup</Link>
                    // </div>
                    // </>
                  }
                </div>
              </NewContainer>
            )}
          </NavbarComponentSmall>
        </>
      )}
    </Box>
  );
};

const MenuIcon = ({ className = "" }) => {
  return (
    <svg
      style={{ color: "black" }}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 24 24"
    >
      <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"></path>
    </svg>
  );
};

export default Navbar;
