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
  Avatar
} from "@mui/material";
import React, { useState, useEffect } from "react";
import MenuElement from './MenuElement'
import "./Navbar.css";
import jwtDecode from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
const NavbarComponent = styled(AppBar)`
  color: white;
  box-shadow: none;
  /* padding: 15px; */
  background-color: ${(props) => (props.st ? props.st.backgroundColor : "transparent")};
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
  background-color: ${(props) => (props.st ? props.st.backgroundColor : "transparent")};
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
  padding-top: 1.5%;
  padding-left: 0;
  // /* padding-right: 17%; */
`;
const NewContainer=styled(Toolbar)`
  display:flex;
  padding-top: 1.5%;

`;

const Text = styled(Typography)`
  font-family: Gilroy-Bold;
  font-size: 17px;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  cursor: pointer;
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

  const handleLearnClick = ()=>{
    
    navigate("/learn")
  }
  const handleLoginClick = ()=>{
    
    navigate("/login")
  }
  const handleSignupClick = ()=>{
    
    navigate("/login")
  }
  const handleDashboard=()=>{
    
    navigate("/dashboard");
  }
  const handleClicklearn = (event) => {

    // console.log('click hua h');
    // console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };
  // console.log(name);
  var namearr;
  if(token){
    if(token.name){

      namearr=token.name.split(" ");
    }
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      {!isMobile && <>
        <NavbarComponent>
        {isMobile ? (
          <Container>
            <div className="imageContainer">
              <img
                src="images/VENQ_BOLD_PNG.png"
                alt="logo"
                width="80"
              />
            </div>
            <div>
              <FontAwesomeIcon
                icon={isMenuIconClicked ? faTimes : faBars}
                style={{ color: "white" }}
                onClick={handleNavToggle}
              />
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
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={()=>{
            navigate("/blog");
        }}>
          
          Blog
        </MenuItem>
        <Divider />
        <MenuItem onClick={()=>{
            navigate("/learn");
        }}>
          Faq's
        </MenuItem>
      </Menu>
                  <div className="mobileItem"  onClick={handleClicklearn}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}>
                 
                    Learn
                  </div>  
            
                  {token && 
                   <div style={{
                    width:'345px',
                    padding:'10px',
                    display:'flex',
                    alignItems:'flex-start',
                    flexDirection:isMobile?'column':'row',
                    justifyContent:'flex-start',
                    gap:'10px', 
                    height:'fit-content'
                   }} className="account-container">
                    {/* <span>Proof of address missing</span> */}
                    {token && namearr &&  namearr.length>0 &&
                      <div>
                        <MenuElement name={namearr[0]}/ >
                      </div>
                    }
                    
                      </div>
                   
                  }
                  {!token && 
                <>
                        <div className="buttonContainer">
              <button className="loginButton">
                <Link to="/login">Login</Link>
              </button>
              <button className="SignupButton">
                <Link to="/login">Signup</Link>
              </button>
            </div>
                </>
                  
                  }
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
            <div style={{
              display:'flex',
              width:'100%',
              marginLeft:'5px',
              marginRight:'10px',
              // backgroundColor:'red',
              alignItems:'center',
              justifyContent:'space-between'
            }}>
            <div >
            <div className="LinkContainer">
              <div style={{
                display:'flex',
                justifyContent:'space-evenly',
                width:'400px'
              }}>
              <Text onClick={handleClick}>Invest</Text>
              <Text>List Property</Text>
              <Text  
                 onClick={handleClicklearn}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                Learn</Text>





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
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={()=>{
            navigate("/blog");
        }}>
          
          Blog
        </MenuItem>
        <Divider />
        <MenuItem onClick={()=>{
            navigate("/learn");
        }}>
          Faq's
        </MenuItem>
      </Menu>




             
              </div>
            </div>
            </div>
            
            {token && 
                   <div style={{
                    width:'345px',
                    padding:'10px',
                    display:'flex',
                    justifyContent:'flex-start',
                    gap:'10px'
                    
                   }} className="account-container">
                    {/* <span>Proof of address missing</span> */}
                    {token && namearr &&  namearr.length>0 &&
                      <>
                      <MenuElement name={namearr[0]}/ >
                      {/* <Text>Complete onboarding</Text>
                     
                      
                     <Heading style={{ fontSize: "16px",marginRight:'10%'}}>{namearr[0]}</Heading>
                      <img style={{
                        height:'30px',
                        borderRadius:'40%',
                        marginRight:'50%',
                        cursor:'pointer',
                      }} src="images/user.png" alt="fsdf" onClick={toggleVisibility} /> */}
                    
                     {/* <Text onClick={handleDashboard}>Dashboard</Text> */}
                   </>
                    }
                    
                      </div>
                   
                  }
                  {!token && 
                  <>
                        <div className="buttonContainer">
              <button className="loginButton">
                <Link to="/login">Login</Link>
              </button>
              <button className="SignupButton">
                <Link to="/login">Signup</Link>
              </button>
            </div>

                  </>
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
      </NavbarComponent>
    
    </>}
    {isMobile && <>
      <NavbarComponentSmall>
      {isMobile ? (
        <Container>
          <div className="imageContainer">
            <img
              src="images/VENQ_BOLD_PNG.png"
              alt="logo"
              width="80"
            />
          </div>
          <div>
            <FontAwesomeIcon
              icon={isMenuIconClicked ? faTimes : faBars}
              style={{ color: "white",height:'20px' }}
              onClick={handleNavToggle}
            />
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
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem onClick={()=>{
          navigate("/blog");
      }}>
        
        Blog
      </MenuItem>
      <Divider />
      <MenuItem onClick={()=>{
          navigate("/learn");
      }}>
        Faq's
      </MenuItem>
    </Menu>
                <div className="mobileItem"  onClick={handleClicklearn}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}>
               
                  Learn
                </div>  
          
                {token && 
                 <div style={{
                  width:'345px',
                  padding:'10px',
                  display:'flex',
                  alignItems:'flex-start',
                  flexDirection:isMobile?'column':'row',
                  justifyContent:'flex-start',
                  gap:'10px', 
                  height:'fit-content'
                 }} className="account-container">
                  {/* <span>Proof of address missing</span> */}
                  {token && namearr &&  namearr.length>0 &&
                    <div>
                      <MenuElement name={namearr[0]}/ >
                    </div>
                  }
                  
                    </div>
                 
                }
                {!token && 
              <>
                      <div className="buttonContainer">
            <button className="loginButton">
              <Link to="/login">Login</Link>
            </button>
            <button className="SignupButton">
              <Link to="/login">Signup</Link>
            </button>
          </div>
              </>
                
                }
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
          <div style={{
            display:'flex',
            width:'100%',
            marginLeft:'5px',
            marginRight:'10px',
            // backgroundColor:'red',
            alignItems:'center',
            justifyContent:'space-between'
          }}>
          <div >
          <div className="LinkContainer">
            <div style={{
              display:'flex',
              justifyContent:'space-evenly',
              width:'400px'
            }}>
            <Text onClick={handleClick}>Invest</Text>
            <Text>List Property</Text>
            <Text  
               onClick={handleClicklearn}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              Learn</Text>





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
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem onClick={()=>{
          navigate("/blog");
      }}>
        
        Blog
      </MenuItem>
      <Divider />
      <MenuItem onClick={()=>{
          navigate("/learn");
      }}>
        Faq's
      </MenuItem>
    </Menu>




           
            </div>
          </div>
          </div>
          
          {token && 
                 <div style={{
                  width:'345px',
                  padding:'10px',
                  display:'flex',
                  justifyContent:'flex-start',
                  gap:'10px'
                  
                 }} className="account-container">
                  {/* <span>Proof of address missing</span> */}
                  {token && namearr &&  namearr.length>0 &&
                    <>
                    <MenuElement name={namearr[0]}/ >
                    {/* <Text>Complete onboarding</Text>
                   
                    
                   <Heading style={{ fontSize: "16px",marginRight:'10%'}}>{namearr[0]}</Heading>
                    <img style={{
                      height:'30px',
                      borderRadius:'40%',
                      marginRight:'50%',
                      cursor:'pointer',
                    }} src="images/user.png" alt="fsdf" onClick={toggleVisibility} /> */}
                  
                   {/* <Text onClick={handleDashboard}>Dashboard</Text> */}
                 </>
                  }
                  
                    </div>
                 
                }
                {!token && 
                <>
                      <div className="buttonContainer">
            <button className="loginButton">
              <Link to="/login">Login</Link>
            </button>
            <button className="SignupButton">
              <Link to="/login">Signup</Link>
            </button>
          </div>

                </>
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
      </>}
    
     
    </Box>
  );
};

export default Navbar;
