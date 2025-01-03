import React, { useEffect, useState } from "react";
import Properties from "./property/Properties";
import Portfolio from "./contents/Portfolio";
import Avatar from "@mui/material/Avatar";
import Navbar from '../../Navbar';
import "./Dashboard.css";
import Profile from "./account/Profile";
import image from "./user.png";
import Bookmarks from "./account/Bookmarks";
import Rewards from "./rewards/Rewards";
import Addlisting from "./rewards/AdminDashboard";
import BrokerDashboard from "./BrokerDashboard/BrokerDashboard";
import Tier from "./rewards/Tier";
import Referrals from "./rewards/Referrals";
import Cart from "./cart/Cart";
import Wallet from "./contents/Wallet";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import InsightsIcon from "@mui/icons-material/Insights";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PropertyInterests from "./UserInterests/PropertyInterests";
import { FiMenu } from "react-icons/fi";
import {
  Box,
  Divider,
  IconButton,
  List,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
  Popover,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import config from "../../config";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import PropertyItem from "./property/PropertyItem";
import Photos from "./property/Photos";
import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/user";
import axios from "axios";
import AdminDashboard from "./rewards/AdminDashboard";
import UserInterests from "./UserInterests/UserInterests";
import PendingKyc from "./investors/PendingKyc";
import Allinvestorslist from "./listings/Allinvestorslist";
import Kyc_details from "./UserInterests/Kyc_details";

const drawerWidth = 250;
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const Options = styled(Link)`
  padding: 10px;
  display: flex;
  align-items: center;
  font-size: 12px;
  border-radius: 10px;
  margin-bottom: 10px;
  text-decoration: none;
  background-color: ${({ selected }) =>
    selected ? "#fff" : "transparent"};
  color: ${({ selected }) => (selected ? "black" : "#eeeeee")};
  &:hover {
    background-color: ${({ selected }) =>
    selected ? "#fff" : "#fff"};
    color: black;
    
  }
`;
const UpperItems = styled(Box)`
  padding: 5px 10px 10px 10px;
`;
const LowerItems = styled(Box)`
  padding: 5px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const PropertyIcon = styled(HomeOutlinedIcon)`
  font-size: 25px;
  margin-right: 10px;
  color: ${({ selected }) => (selected ? "#0170dc" : "")};
`;
const WalletIcon = styled(AccountBalanceWalletOutlinedIcon)`
  font-size: 25px;
  margin-right: 10px;
  color: ${({ selected }) => (selected ? "#0170dc" : "")};
`;
const PortfolioIcon = styled(InsightsIcon)`
  font-size: 25px;
  margin-right: 10px;
  color: ${({ selected }) => (selected ? "#0170dc" : "")};
`;
const RewardIcon = styled(StarOutlineRoundedIcon)`
  font-size: 25px;
  margin-right: 10px;
  color: ${({ selected }) => (selected ? "#0170dc" : "")};
`;
const CartIcon = styled(ShoppingCartOutlinedIcon)`
  font-size: 25px;
  margin-right: 10px;
  color: ${({ selected }) => (selected ? "#0170dc" : "")};
`;
const BrokerIcon = styled(PersonOutlineOutlinedIcon)`
  font-size: 25px;
  margin-right: 10px;
  color: ${({ selected }) => (selected ? "#0170dc" : "")};
`;
const HelpIcon = styled(ChatBubbleOutlineRoundedIcon)`
  font-size: 25px;
  margin-right: 10px;
  color: ${({ selected }) => (selected ? "#0170dc" : "")};
`;
const UserIcon = styled(PersonOutlineOutlinedIcon)`
  font-size: 25px;
  margin-right: 10px;
  color: ${({ selected }) => (selected ? "#0170dc" : "")};
`;
const BookmarkIcon = styled(BookmarkBorderOutlinedIcon)`
  font-size: 25px;
  margin-right: 10px;
  color: ${({ selected }) => (selected ? "#0170dc" : "")};
`;
const LogoutIcon = styled(LogoutOutlinedIcon)`
  font-size: 25px;
  margin-right: 10px;
  color: ${({ selected }) => (selected ? "#0170dc" : "")};
`;
const Heading = styled(Typography)`
  text-decoration: none;
  font-family: Inter;
  font-size: 15px;
`;
const SubHeading = styled(Typography)`
  font-family: Inter;
  font-size: 18px;
`;
const NestedListContainer = styled(Box)`
  position: absolute;
  left: ${drawerWidth}px;
  top: 75%;
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 10px;
  width: 250px;
    box-shadow: 0 1px 2px 1px black;
  z-index: 9;
  overflow: hidden;

  @media (max-width: 600px) {
    // Set your preferred max-width for mobile
    width: 100vw; // Make it occupy the whole width of the viewport
    left: 0;
    top: 8%;
    border-radius: 0;
    height: 100%;
  }
`;

const NestedList = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: white;

  @media (max-width: 600px) {
    // Set your preferred max-width for mobile
    width: 100%; // Make it occupy the whole width of the parent container
  }
`;

const NestedLink = styled(Link)`
  width: 100%;
  text-decoration: none;
  padding: 4px 10px;
  display: flex;
  color: black;
  &:hover {
    background-color: lightgrey;
  }
`;
const Logout = styled(Link)`
  width: 100%;
  text-decoration: none;
  padding: 4px 10px;
  display: flex;
  color: red;
  &:hover {
    background-color: red;
    color: white;
  }
`;
<script
  type="text/javascript"
  id="hs-script-loader"
  async
  defer
  src="//js.hs-scripts.com/45720526.js"
></script>;

const Dashboard = () => {
  // const [open] = useState(true);
  const token = JSON.parse(localStorage.getItem("userinfo"));
  const URL = config.URL;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(!isMobile);
  const [isAdmin, setAdmin] = useState(false);
  const [isBroker, setBroker] = useState(false);

  // var sc = document.getElementById("aisensy-wa-widget");
  useEffect(() => {
    // console.log(sc);
    // if (sc && isMobile) {
    //   console.log("removed");
    //   console.log(sc);
    //   sc?.parentNode?.removeChild(sc);
    //   window.location.reload();
    // }
    const script = document.createElement("script");
    script.setAttribute("id", "aisensy-wa-widget");
    document.body.appendChild(script);

    // Immediately remove the widget after adding it
    const widget = document.getElementById("aisensy-wa-widget");
    if (widget) {
      widget.remove();
      // console.log("Aisensy widget removed.");
    }
    // console.log("widget", widget);
    if (token && token.isAdmin) {
      setAdmin(true);
    }
    if (token && token.isBroker) {
      setBroker(true);
    }
  }, []);
  // window.location.reload();
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(!open);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };
  const [step, setStep] = useState(1);
  const [clicked, setClicked] = useState(false);
  const [nestedListVisible, setNestedListVisible] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  var name;
  if (token) {
    if (token.name) {
      name = token.name;
    }
  }
  var namearr;
  if (name) {
    namearr = name.split(" ");
  }
  const handleAccountClick = () => {
    setNestedListVisible(!nestedListVisible);
  };
  const handleStepChange = (newStep) => {
    setStep(newStep);
    setNestedListVisible(false);
  };
  const handleBuyProperties = () => {
    setStep(1); // Set the step to 1 when "Buy Properties" is clicked
    setNestedListVisible(false);
    navigate("/dashboard/properties"); // Navigate to the Properties component
  };
  const handleBalance = () => {
    setStep(2); // Set the step to 1 when "Buy Properties" is clicked
    setNestedListVisible(false);
    navigate("/dashboard/wallet"); // Navigate to the Properties component
  };
  const handleCart = () => {
    setStep(5); // Set the step to 1 when "Buy Properties" is clicked
    setNestedListVisible(false);
    navigate("/dashboard/cart"); // Navigate to the Properties component
  };
  const handleLogOut = () => {
    localStorage.removeItem("userinfo");
    // console.log('yaha par hun');
    dispatch(logout(token));
    // console.log('next line pe');
    navigate("/");
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  console.log(isAdmin);
  console.log(isBroker);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row", // Set flex direction based on screen size
        height: "100vh",
      }}
    >
      {isMobile && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
            backgroundColor: "transparent", // Semi-transparent background
            backdropFilter: "blur(10px)", // Apply blur effect
            WebkitBackdropFilter: "blur(10px)", // For Safari support
            borderRadius: "8px", // Optional: add rounded corners
          }}
        >
          <Link to="/">
            <img
              src="/images/VENQ_BOLD_Big.png"
              alt="logo"
              style={{
                paddingRight: "15px",
                paddingLeft: "15px",
                cursor: "pointer",
                width: "120px",
                height: "auto",
              }}
            />
          </Link>
          <div style={{ display: "flex", justifyItems: "center", alignItems: "center" }}>
            {name && (
              // <Avatar
              //   sx={{
              //     width: 32,
              //     height: 32,
              //     backgroundColor: "#5ECE8F",
              //     marginRight: "20px",
              //   }}
              // >
              //   <img
              //     style={{ width: 17 }}
              //     src={image}
              //     onClick={handleAccountClick}
              //     onMouseDown={handleClose}
              //   />
              // </Avatar>
              <Options style={{ marginBottom: "0px", marginRight:"10px"}} onMouseDown={handleClose}>
                <HelpIcon onClick={() => {
                  window.location.href = `https://api.whatsapp.com/send?phone=919205553696&text=Invest`;
                }} style={{ color: "#080808", width:"22px",marginTop:"3px" }} />
                {/* <Heading
                  style={{ color: "black" }}
                  onClick={() => {
                    window.location.href = `https://api.whatsapp.com/send?phone=919205553696&text=Invest`;
                  }}
                >
                  Help and Support{" "}
                </Heading> */}
              </Options>
              // <Options onClick={handleAccountClick}>
              //   <img style={{
              //           height:'30px',
              //           borderRadius:'40%',
              //           cursor:'pointer',
              //         }} src={image} alt="fsdf"/>
              // </Options>
            )}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleMenuClick}
              edge="start"
              style={{ marginTop: "0px" }}
            >
              <FiMenu />
            </IconButton>
          </div>
        </div>
        // <div
        //   style={{
        //     display: "flex",
        //     justifyContent: "space-between",
        //     background: "#15242F",
        //   }}
        // >
        //   <Link to="/">
        //     <img
        //       src="/images/VENQ_BOLD_PNG.png"
        //       alt="logo"
        //       style={{
        //         paddingTop: "20px",
        //         paddingRight: "15px",
        //         paddingLeft: "15px",
        //         cursor: "pointer",
        //         width: "65px",
        //         height: "auto",
        //       }}
        //     />
        //   </Link>
        //   <div style={{ display: "flex" }}>
        //     {name && (
        //       <Avatar
        //         sx={{
        //           width: 32,
        //           height: 32,
        //           backgroundColor: "#5ECE8F",
        //           marginTop: "15px",
        //           marginRight: "10px",
        //         }}
        //       >
        //         <img
        //           style={{ width: 17 }}
        //           src={image}
        //           onClick={handleAccountClick}
        //           onMouseDown={handleClose}
        //         />
        //       </Avatar>
        //       // <Options onClick={handleAccountClick}>
        //       //   <img style={{
        //       //           height:'30px',
        //       //           borderRadius:'40%',
        //       //           cursor:'pointer',
        //       //         }} src={image} alt="fsdf"/>
        //       // </Options>
        //     )}
        //     <IconButton
        //       color="inherit"
        //       aria-label="open drawer"
        //       onClick={handleMenuClick}
        //       edge="start"
        //       style={{ marginTop: "0px" }}
        //     >
        //       <img
        //         src="/images/menu.png"
        //         alt="logo"
        //         style={{
        //           padding: "10px",
        //           cursor: "pointer",
        //           width: "30px",
        //           height: "30px",
        //         }}
        //       />
        //     </IconButton>
        //   </div>
        // </div>
      )}

      <Popover
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <List component="nav">
          <UpperItems
          >
            <Options
              to="/dashboard/properties"
              selected={step === 1}
              onClick={() => handleStepChange(1)}
              onMouseDown={handleClose} // Close the popover on mouse down
            >
              <PropertyIcon style={{ color: "#0170DC" }} selected={step === 1} />
              <Heading style={{ color: "black" }} selected={step === 1}>Properties </Heading>
            </Options>

            <Options
              to="/dashboard/wallet"
              selected={step === 2}
              onClick={() => handleStepChange(2)}
              onMouseDown={handleClose}
            >
              <WalletIcon style={{ color: "#0170DC" }} selected={step === 2} />
              <Heading style={{ color: "black" }} selected={step === 2}> Wallet</Heading>
            </Options>

            <Options
              to="/dashboard/portfolio"
              selected={step === 3}
              onClick={() => handleStepChange(3)}
              onMouseDown={handleClose}
            >
              <PortfolioIcon style={{ color: "#0170DC" }} selected={step === 3} />
              <Heading style={{ color: "black" }} selected={step === 3}>Portfolio</Heading>
            </Options>

            <Options
              to="/dashboard/rewards"
              selected={step === 4}
              onClick={() => handleStepChange(4)}
              onMouseDown={handleClose}
            >
              <RewardIcon style={{ color: "#0170DC" }} selected={step === 4} />
              <Heading style={{ color: "black" }} selected={step === 4}>Rewards</Heading>
            </Options>

            <Options
              to="/dashboard/cart"
              selected={step === 5}
              onClick={() => handleStepChange(5)}
              onMouseDown={handleClose}
            >
              <CartIcon style={{ color: "#0170DC" }} selected={step === 5} />
              <Heading style={{ color: "black" }} selected={step === 5}>Cart</Heading>
            </Options>

            {isAdmin && (
              <div>
                <Options
                  to="/dashboard/alinvestors"
                  selected={step === 6}
                  onClick={() => handleStepChange(6)}
                  onMouseDown={handleClose}
                >
                  <CartIcon style={{ color: "#0170DC" }} selected={step === 6} />
                  <Heading style={{ color: "black" }} selected={step === 6}>Users</Heading>
                </Options>
                <Options
                  to="/listings/add"
                  selected={step === 7}
                  onClick={() => handleStepChange(7)}
                  onMouseDown={handleClose}
                >
                  <CartIcon style={{ color: "#0170DC" }} selected={step === 7} />
                  <Heading style={{ color: "black" }} selected={step === 7}>Listing</Heading>
                </Options>
              </div>
            )}
            {isBroker && (
              <div>
              <Options
              to="/dashboard/brokerdashboard"
              selected={step === 10}
              onClick={() => handleStepChange(10)}
              onMouseDown={handleClose}
            >
              <BrokerIcon style={{ color: "#0170DC" }} selected={step === 10} />
              <Heading style={{ color: "black" }} selected={step === 10}>Brokers</Heading>
            </Options>
                
              </div>
            )}
          </UpperItems>
          <Divider sx={{ my: 1 }} />

          <LowerItems>
            {/* <Options style={{ marginBottom: "0px" }} onMouseDown={handleClose}>
              <Avatar
                sx={{
                  width: 32,
                  height: 32,
                  backgroundColor: "#5ECE8F",
                  marginRight: "20px",
                }}
              >
                <img
                  style={{ width: 17 }}
                  src={image}
                  onClick={handleAccountClick}
                  onMouseDown={handleClose}
                />
              </Avatar>
              <Heading
                style={{ color: "black" }}
                onClick={handleAccountClick}
                onMouseDown={handleClose}
              >
                Profile{" "}
              </Heading>
            </Options> */}
            <Options
              to="/dashboard/profile"
              selected={step === 8}
              onClick={() => handleStepChange(8)}
            >
              <UserIcon style={{ color: "#0170DC" }} selected={step === 7} />
              <Heading style={{ color: "black" }} selected={step === 7}>My Profile</Heading>
            </Options>
            <Options
              to="/" onClick={handleLogOut}
            >
              <LogoutIcon style={{ color: "red" }} selected={step === 7} />
              <Heading style={{ color: "red" }} selected={step === 7}>Logout</Heading>
            </Options>

            {/* <Options style={{ marginBottom: "0px" }} onMouseDown={handleClose}>
              <HelpIcon style={{ color: "#0170DC" }} />
              <Heading
                style={{ color: "black" }}
                onClick={() => {
                  window.location.href = `https://api.whatsapp.com/send?phone=919205553696&text=Invest`;
                }}
              >
                Help and Support{" "}
              </Heading>
            </Options> */}
          </LowerItems>
        </List>
      </Popover>

      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={drawerOpen}
        onClose={isMobile ? handleDrawerToggle : undefined}
        sx={{
          // padding: "10px",
        }}
      >
        <div style={{
          padding: "10px",
          height: "100%",
          backgroundColor: "#F5F5F5"

        }} className="">
          {/* <Toolbar
          sx={{
            width:"100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: [1],
            backgroundColor:"#14212B",
            borderRadius:"10px",
            marginBottom:"10px",
            paddingLeft:"10px",
          }}
        >
          
        </Toolbar> */}

          {/* <Divider /> */}

          <List
            component="nav"
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              // alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#14212b",
              padding: "5px",
              borderRadius: "10px",
            }}
          >
            <UpperItems>
              <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }} className="">
                <Link to="/">
                  <img
                    src="/images/VENQ_BOLD_PNG.png"
                    alt="logo"
                    style={{ padding: "10px", cursor: "pointer", width: "80%", height: "auto", }}
                  />
                </Link>
              </div>
              <Options
                to="/dashboard/properties"
                style={{ marginBottom: "5px", marginTop: "5px" }}
                selected={step === 1}
                onClick={() => handleStepChange(1)}
              >
                <PropertyIcon selected={step === 1} />
                <Heading selected={step === 1}>Properties</Heading>
              </Options>

              <Options
                to="/dashboard/wallet"
                style={{ marginBottom: "5px", marginTop: "5px" }}
                selected={step === 2}
                onClick={() => handleStepChange(2)}
              >
                <WalletIcon selected={step === 2} />
                <Heading selected={step === 2}> Wallet</Heading>
              </Options>

              <Options
                to="/dashboard/portfolio"
                style={{ marginBottom: "5px", marginTop: "5px" }}
                selected={step === 3}
                onClick={() => handleStepChange(3)}
              >
                <PortfolioIcon selected={step === 3} />
                <Heading selected={step === 3}>Portfolio</Heading>
              </Options>

              <Options
                to="/dashboard/rewards"
                style={{ marginBottom: "5px", marginTop: "5px" }}
                selected={step === 4}
                onClick={() => handleStepChange(4)}
              >
                <RewardIcon selected={step === 4} />
                <Heading selected={step === 4}>Rewards</Heading>
              </Options>

              <Options
                to="/dashboard/cart"
                style={{ marginBottom: "5px", marginTop: "5px" }}
                selected={step === 5}
                onClick={() => handleStepChange(5)}
              >
                <CartIcon selected={step === 5} />
                <Heading selected={step === 5}>Cart</Heading>
              </Options>
              {isAdmin && (
                <div>
                  <Options
                    to="/dashboard/allinvestors"
                    style={{ marginBottom: "0px", marginTop: "0px" }}
                    selected={step === 6}
                    onClick={() => handleStepChange(6)}
                    onMouseDown={handleClose}
                  >
                    <CartIcon selected={step === 6} />
                    <Heading selected={step === 6}>Users</Heading>
                  </Options>
                  <Options
                    to="/dashboard/addlisting"
                    style={{ marginBottom: "0px" }}
                    selected={step === 7}
                    onClick={() => handleStepChange(7)}
                    onMouseDown={handleClose}
                  >
                    <CartIcon selected={step === 7} />
                    <Heading selected={step === 7}>Listing</Heading>
                  </Options>
                  <Options
                    to="/dashboard/allpropertyinterests"
                    style={{ marginBottom: "0px" }}
                    selected={step === 8}
                    onClick={() => handleStepChange(8)}
                    onMouseDown={handleClose}
                  >
                    <CartIcon selected={step === 8} />
                    <Heading selected={step === 8}>Management</Heading>
                  </Options>

                  <Options
                    to="/dashboard/allinvestorslist"
                    style={{ marginBottom: "0px" }}
                    selected={step === 9}
                    onClick={() => handleStepChange(9)}
                    onMouseDown={handleClose}
                  >
                    <CartIcon selected={step === 9} />
                    <Heading selected={step === 9}>All Investors</Heading>
                  </Options>
                </div>
              )}
              {isBroker && (
                <div>
                  <Options
                    to="/dashboard/brokerdashboard"
                    style={{ marginBottom: "0px" }}
                    selected={step === 10}
                    onClick={() => handleStepChange(7)}
                    onMouseDown={handleClose}
                  >
                    <BrokerIcon selected={step === 10} />
                    <Heading selected={step === 10}>Brokers</Heading>
                  </Options>
                </div>
              )}
            </UpperItems>

            <LowerItems>
              <Options style={{}}>
                <HelpIcon />
                <Heading
                  onClick={() => {
                    window.location.href = `https://api.whatsapp.com/send?phone=919205553696&text=Invest`;
                  }}
                >
                  Help and Support{" "}
                </Heading>
              </Options>
              <Divider sx={{ my: 1 }} />

              <Options
                onClick={handleAccountClick}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  backgroundColor: "white",
                  color: "black",
                  transition: "all 0.3s ease", // Smooth transition for the hover effect
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#e5e5e5";
                  e.currentTarget.style.color = "e5e5e5";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "white";
                  e.currentTarget.style.color = "black";
                }}
              >
                <div className="account-container">
                  <Avatar
                    sx={{
                      marginRight: "10px",
                      width: 32,
                      height: 32,
                      backgroundColor: "#5ECE8F",
                    }}
                  >
                    <img style={{ width: 17 }} src={image} />
                  </Avatar>
                  <Heading style={{ fontSize: "16px" }}>
                    {name.split(" ")[0]}
                  </Heading>
                </div>
                <ChevronRightIcon />
              </Options>

              {/* <NestedList style={{
                backgroundColor: "#F5F5F5"
              }} className="nested-list">
                <NestedLink
                  to="/dashboard/profile"
                  selected={step === 8}
                  onClick={() => handleStepChange(8)}
                >
                  <UserIcon selected={step === 8} />
                  <SubHeading selected={step === 8}>My Profile </SubHeading>
                </NestedLink>

                <NestedLink
                  to="/dashboard/bookmarks"
                  selected={step === 9}
                  onClick={() => handleStepChange(9)}
                >
                  <BookmarkIcon selected={step === 9} />
                  <SubHeading selected={step === 9}>Bookmarks</SubHeading>
                </NestedLink>

                <Divider sx={{ my: 1 }} style={{ height: "2px", width: "100%" }} />

                <Logout to="/" onClick={handleLogOut}>
                  <LogoutIcon />
                  <SubHeading>Logout</SubHeading>
                </Logout>
              </NestedList> */}
            </LowerItems>
          </List>
        </div>
      </Drawer>
      {nestedListVisible && (
        <NestedListContainer>
          <NestedList style={{
            backgroundColor: "#F5F5F5"
          }} className="nested-list">
            <NestedLink
              to="/dashboard/profile"
              selected={step === 8}
              onClick={() => handleStepChange(8)}
            >
              <UserIcon selected={step === 8} />
              <SubHeading selected={step === 8}>My Profile </SubHeading>
            </NestedLink>

            <NestedLink
              to="/dashboard/bookmarks"
              selected={step === 9}
              onClick={() => handleStepChange(9)}
            >
              <BookmarkIcon selected={step === 9} />
              <SubHeading selected={step === 9}>Bookmarks</SubHeading>
            </NestedLink>

            <Divider sx={{ my: 1 }} style={{ height: "2px", width: "100%" }} />

            <Logout to="/" onClick={handleLogOut}>
              <LogoutIcon />
              <SubHeading>Logout</SubHeading>
            </Logout>
          </NestedList>
        </NestedListContainer>
      )}

      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
        onClick={() => {
          setNestedListVisible(false);
        }}
      >
        <Routes>
          <Route path="properties" element={<Properties />} />

          <Route
            path="properties/view/:id"
            element={
              <PropertyItem
                handleCart={handleCart}
                clicked={clicked}
                setClicked={setClicked}
              />
            }
          />
          <Route
            path="properties/view/photos/:id"
            element={<Photos clicked={clicked} setClicked={setClicked} />}
          />
          <Route path="wallet" element={<Wallet />} />
          <Route
            path="portfolio"
            element={<Portfolio handleBuyProperties={handleBuyProperties} />}
          />
          <Route
            path="rewards"
            element={<Rewards handleBalance={handleBalance} />}
          />
          <Route
            path="cart"
            element={<Cart handleBuyProperties={handleBuyProperties} />}
          />
          <Route
            path="brokerdashboard"
            element={<BrokerDashboard />}
          />
          <Route path="addlisting" element={<AdminDashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="bookmarks" element={<Bookmarks />} />
          <Route path="rewards/tier" element={<Tier />} />
          <Route path="rewards/referrals" element={<Referrals />} />
          <Route
            path="allpropertyinterests/userinterests/:propertyid"
            element={<UserInterests />}
          />
          <Route
            path="allpropertyinterests/userinterests/:propertyid/dashboard/kyc-details"
            element={<Kyc_details />}
          />
          <Route path="allpropertyinterests" element={<PropertyInterests />} />
          <Route path="allinvestors" element={<PendingKyc />} />
          <Route path="allinvestorslist" element={<Allinvestorslist />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default Dashboard;
