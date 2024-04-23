// import React, { useEffect, useState } from "react";
// import Properties from "./property/Properties";
// import Portfolio from "./contents/Portfolio";
// import Avatar from "@mui/material/Avatar";
// import "./Dashboard.css";
// import Profile from "./account/Profile";
// import image from "./user.png";
// import Bookmarks from "./account/Bookmarks";
// import Rewards from "./rewards/Rewards";
// import Addlisting from "./rewards/AdminDashboard";
// import Tier from "./rewards/Tier";
// import Referrals from "./rewards/Referrals";
// import Cart from "./cart/Cart";
// import Wallet from "./contents/Wallet";
// import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
// import InsightsIcon from "@mui/icons-material/Insights";
// import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
// import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
// import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
// import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import PropertyInterests from "./UserInterests/PropertyInterests";

// import Allinvestorslist from "./listings/Allinvestorslist";
// import {
//   Box,
//   Divider,
//   IconButton,
//   List,
//   MenuItem,
//   Toolbar,
//   Typography,
//   useMediaQuery,
//   Popover,
//   useTheme,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import MuiDrawer from "@mui/material/Drawer";
// import { styled } from "@mui/material/styles";
// import config from "../../config";
// import { Link, Route, Routes, useNavigate } from "react-router-dom";
// import PropertyItem from "./property/PropertyItem";
// import Photos from "./property/Photos";
// import jwtDecode from "jwt-decode";
// import { useDispatch } from "react-redux";
// import { logout } from "../../redux/actions/user";
// import axios from "axios";
// import AdminDashboard from "./rewards/AdminDashboard";
// import UserInterests from "./UserInterests/UserInterests";
// import PendingKyc from "./investors/PendingKyc";

// const drawerWidth = 250;
// const Drawer = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   "& .MuiDrawer-paper": {
//     position: "relative",
//     whiteSpace: "nowrap",
//     width: drawerWidth,
//     transition: theme.transitions.create("width", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     boxSizing: "border-box",
//     ...(!open && {
//       overflowX: "hidden",
//       transition: theme.transitions.create("width", {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//       }),
//       width: theme.spacing(7),
//       [theme.breakpoints.up("sm")]: {
//         width: theme.spacing(9),
//       },
//     }),
//   },
// }));

// const Options = styled(Link)`
//   padding: 10px;
//   display: flex;
//   align-items: center;
//   font-size: 14px;
//   border-radius: 10px;
//   margin-bottom: 10px;
//   text-decoration: none;
//   background-color: ${({ selected }) =>
//     selected ? "#cbe5ffb9" : "transparent"};
//   color: ${({ selected }) => (selected ? "black" : "rgb(112,111,111)")};
//   &:hover {
//     background-color: ${({ selected }) =>
//       selected ? "#cbe5ffb9" : "#cbe5ffb9"};
//     color: black;
//   }
// `;
// const UpperItems = styled(Box)`
//   padding: 5px 10px 10px 10px;
// `;
// const LowerItems = styled(Box)`
//   padding: 5px 10px 10px 10px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   height: 38vh;
// `;
// const PropertyIcon = styled(HomeOutlinedIcon)`
//   font-size: 25px;
//   margin-right: 10px;
//   color: ${({ selected }) => (selected ? "#0170dc" : "")};
// `;
// const WalletIcon = styled(AccountBalanceWalletOutlinedIcon)`
//   font-size: 25px;
//   margin-right: 10px;
//   color: ${({ selected }) => (selected ? "#0170dc" : "")};
// `;
// const PortfolioIcon = styled(InsightsIcon)`
//   font-size: 25px;
//   margin-right: 10px;
//   color: ${({ selected }) => (selected ? "#0170dc" : "")};
// `;
// const RewardIcon = styled(StarOutlineRoundedIcon)`
//   font-size: 25px;
//   margin-right: 10px;
//   color: ${({ selected }) => (selected ? "#0170dc" : "")};
// `;
// const CartIcon = styled(ShoppingCartOutlinedIcon)`
//   font-size: 25px;
//   margin-right: 10px;
//   color: ${({ selected }) => (selected ? "#0170dc" : "")};
// `;
// const HelpIcon = styled(ChatBubbleOutlineRoundedIcon)`
//   font-size: 25px;
//   margin-right: 10px;
//   color: ${({ selected }) => (selected ? "#0170dc" : "")};
// `;
// const UserIcon = styled(PersonOutlineOutlinedIcon)`
//   font-size: 25px;
//   margin-right: 10px;
//   color: ${({ selected }) => (selected ? "#0170dc" : "")};
// `;
// const BookmarkIcon = styled(BookmarkBorderOutlinedIcon)`
//   font-size: 25px;
//   margin-right: 10px;
//   color: ${({ selected }) => (selected ? "#0170dc" : "")};
// `;
// const LogoutIcon = styled(LogoutOutlinedIcon)`
//   font-size: 25px;
//   margin-right: 10px;
//   color: ${({ selected }) => (selected ? "#0170dc" : "")};
// `;
// const Heading = styled(Typography)`
//   text-decoration: none;
//   font-family: Inter;
//   font-size: 16px;
// `;
// const SubHeading = styled(Typography)`
//   font-family: Inter;
//   font-size: 18px;
// `;
// const NestedListContainer = styled(Box)`
//   position: absolute;
//   left: ${drawerWidth}px;
//   top: 60vh;
//   background-color: white;
//   border-radius: 10px;
//   padding: 10px;
//   width: 250px;
//   box-shadow: 0 1px 2px 1px black;
//   z-index: 9;

//   @media (max-width: 600px) {
//     // Set your preferred max-width for mobile
//     width: 100vw; // Make it occupy the whole width of the viewport
//     left: 0;
//     top: 8%;
//     border-radius: 0;
//     height: 100%;
//   }
// `;

// const NestedList = styled(Box)`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   background-color: white;

//   @media (max-width: 600px) {
//     // Set your preferred max-width for mobile
//     width: 100%; // Make it occupy the whole width of the parent container
//   }
// `;

// const NestedLink = styled(Link)`
//   width: 100%;
//   text-decoration: none;
//   padding: 4px 10px;
//   display: flex;
//   color: black;
//   &:hover {
//     background-color: lightgrey;
//   }
// `;
// const Logout = styled(Link)`
//   width: 100%;
//   text-decoration: none;
//   padding: 4px 10px;
//   display: flex;
//   color: red;
//   &:hover {
//     background-color: red;
//     color: white;
//   }
// `;

// const Dashboard = () => {
//   // const [open] = useState(true);
//   const token = JSON.parse(localStorage.getItem("userinfo"));
//   const URL = config.URL;
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
//   const [drawerOpen, setDrawerOpen] = useState(!isMobile);
//   const [isAdmin, setAdmin] = useState(false);

//   var sc = document.getElementById("aisensy-wa-widget");
//   useEffect(() => {
//     console.log(sc);
//     if (sc && isMobile) {
//       console.log("removed");
//       console.log(sc);
//       sc?.parentNode?.removeChild(sc);
//       window.location.reload();
//     }
//     if (token && token.isAdmin) {
//       setAdmin(true);
//     }
//   }, []);
//   // window.location.reload();
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [open, setOpen] = useState(false);
//   const handleMenuClick = (event) => {
//     setAnchorEl(event.currentTarget);
//     setOpen(!open);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//     setOpen(false);
//   };
//   const [step, setStep] = useState(1);
//   const [clicked, setClicked] = useState(false);
//   const [nestedListVisible, setNestedListVisible] = useState(false);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   var name;
//   if (token) {
//     if (token.name) {
//       name = token.name;
//     }
//   }
//   var namearr;
//   if (name) {
//     namearr = name.split(" ");
//   }
//   const handleAccountClick = () => {
//     setNestedListVisible(!nestedListVisible);
//   };
//   const handleStepChange = (newStep) => {
//     setStep(newStep);
//     setNestedListVisible(false);
//   };
//   const handleBuyProperties = () => {
//     setStep(1); // Set the step to 1 when "Buy Properties" is clicked
//     setNestedListVisible(false);
//     navigate("/dashboard/properties"); // Navigate to the Properties component
//   };

//   const handleBalance = () => {
//     setStep(2); // Set the step to 1 when "Buy Properties" is clicked
//     setNestedListVisible(false);
//     navigate("/dashboard/wallet"); // Navigate to the Properties component
//   };
//   const handleCart = () => {
//     setStep(5); // Set the step to 1 when "Buy Properties" is clicked
//     setNestedListVisible(false);
//     navigate("/dashboard/cart"); // Navigate to the Properties component
//   };
//   const handleLogOut = () => {
//     localStorage.removeItem("userinfo");
//     // console.log('yaha par hun');
//     dispatch(logout(token));
//     // console.log('next line pe');
//     navigate("/");
//   };

//   const handleDrawerToggle = () => {
//     setDrawerOpen(!drawerOpen);
//   };
//   console.log(isAdmin);
//   <script
//     type="text/javascript"
//     id="hs-script-loader"
//     async
//     defer
//     src="//js.hs-scripts.com/45720526.js"
//   ></script>;
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: isMobile ? "column" : "row", // Set flex direction based on screen size
//         height: "100vh",
//       }}
//     >
//       {isMobile && (
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             background: "#15242F",
//           }}
//         >
//           <Link to="/">
//             <img
//               src="/images/VENQ_BOLD_PNG.png"
//               alt="logo"
//               style={{
//                 paddingTop: "17px",
//                 paddingRight: "15px",
//                 paddingLeft: "15px",
//                 cursor: "pointer",
//                 width: "65px",
//                 height: "auto",
//               }}
//             />
//           </Link>
//           <div style={{ display: "flex" }}>
//             {name && (
//               <Avatar
//                 sx={{
//                   width: 32,
//                   height: 32,
//                   backgroundColor: "#5ECE8F",
//                   marginTop: "15px",
//                   marginRight: "10px",
//                 }}
//               >
//                 <img
//                   style={{ width: 17 }}
//                   src={image}
//                   onClick={handleAccountClick}
//                   onMouseDown={handleClose}
//                 />
//               </Avatar>
//               // <Options onClick={handleAccountClick}>
//               //   <img style={{
//               //           height:'30px',
//               //           borderRadius:'40%',
//               //           cursor:'pointer',
//               //         }} src={image} alt="fsdf"/>
//               // </Options>
//             )}
//             <IconButton
//               color="inherit"
//               aria-label="open drawer"
//               onClick={handleMenuClick}
//               edge="start"
//               style={{ marginTop: "0px" }}
//             >
//               <img
//                 src="/images/menu.png"
//                 alt="logo"
//                 style={{
//                   padding: "10px",
//                   cursor: "pointer",
//                   width: "30px",
//                   height: "30px",
//                 }}
//               />
//             </IconButton>
//           </div>
//         </div>
//       )}

//       <Popover
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         anchorOrigin={{
//           vertical: "bottom",
//           horizontal: "left",
//         }}
//         transformOrigin={{
//           vertical: "top",
//           horizontal: "left",
//         }}
//       >
//         <List component="nav">
//           <UpperItems>
//             <Options
//               to="/dashboard/properties"
//               selected={step === 1}
//               onClick={() => handleStepChange(1)}
//               onMouseDown={handleClose} // Close the popover on mouse down
//             >
//               <PropertyIcon selected={step === 1} />
//               <Heading selected={step === 1}>Properties</Heading>
//             </Options>

//             <Options
//               to="/dashboard/wallet"
//               selected={step === 2}
//               onClick={() => handleStepChange(2)}
//               onMouseDown={handleClose}
//             >
//               <WalletIcon selected={step === 2} />
//               <Heading selected={step === 2}> Wallet</Heading>
//             </Options>

//             <Options
//               to="/dashboard/portfolio"
//               selected={step === 3}
//               onClick={() => handleStepChange(3)}
//               onMouseDown={handleClose}
//             >
//               <PortfolioIcon selected={step === 3} />
//               <Heading selected={step === 3}>Portfolio</Heading>
//             </Options>

//             <Options
//               to="/dashboard/rewards"
//               selected={step === 4}
//               onClick={() => handleStepChange(4)}
//               onMouseDown={handleClose}
//             >
//               <RewardIcon selected={step === 4} />
//               <Heading selected={step === 4}>Rewards</Heading>
//             </Options>

//             <Options
//               to="/dashboard/cart"
//               style={{ marginBottom: "0px" }}
//               selected={step === 5}
//               onClick={() => handleStepChange(5)}
//               onMouseDown={handleClose}
//             >
//               <CartIcon selected={step === 5} />
//               <Heading selected={step === 5}>Cart</Heading>
//             </Options>
//             {isAdmin && (
//               <div>
//                 <Options
//                   to="/dashboard/alinvestors"
//                   style={{ marginBottom: "0px" }}
//                   selected={step === 6}
//                   onClick={() => handleStepChange(6)}
//                   onMouseDown={handleClose}
//                 >
//                   <CartIcon selected={step === 6} />
//                   <Heading selected={step === 6}>Investors</Heading>
//                 </Options>
//                 <Options
//                   to="/listings/add"
//                   style={{ marginBottom: "0px" }}
//                   selected={step === 7}
//                   onClick={() => handleStepChange(7)}
//                   onMouseDown={handleClose}
//                 >
//                   <CartIcon selected={step === 7} />
//                   <Heading selected={step === 7}>Listing</Heading>
//                 </Options>
//               </div>
//             )}
//           </UpperItems>

//           <Divider sx={{ my: 1 }} />

//           <LowerItems>
//             {/* <Options
//               onClick={handleAccountClick}
//               style={{ display: "flex", justifyContent: "space-between" }}
//               onMouseDown={handleClose}
//             >
//               <div className="account-container"> */}
//             {/* <div className="circle">{name.slice(0, 2).toUpperCase()}</div> */}
//             {/* <Avatar sx={{
//                 width: 32, height: 32,backgroundColor:'#5ECE8F' }}>

//                 <img style={{ width: 17 }} src={image} />
//               </Avatar> */}
//             {/* <img style={{
//                           height:'30px',
//                           borderRadius:'40%',
//                           cursor:'pointer',
//                           backgroundColor:'#5ECE8F'
//                         }} src={image} alt="fsdf"/> */}
//             {/* <Heading style={{ fontSize: "16px" }}>{name}</Heading>
//               </div>
//               <ChevronRightIcon />
//             </Options> */}

//             <Options style={{ marginBottom: "0px" }} onMouseDown={handleClose}>
//               <HelpIcon />
//               <Heading>Help and Support</Heading>
//             </Options>
//           </LowerItems>
//         </List>
//       </Popover>

//       <Drawer
//         variant={isMobile ? "temporary" : "permanent"}
//         open={drawerOpen}
//         onClose={isMobile ? handleDrawerToggle : undefined}
//       >
//         <Toolbar
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "flex-start",
//             px: [1],
//           }}
//         >
//           <Link to="/">
//             <img
//               src="/images/VENQ_BOLD_small.png"
//               alt="logo"
//               style={{ padding: "10px", cursor: "pointer" }}
//             />
//           </Link>
//         </Toolbar>

//         <Divider />

//         <List
//           component="nav"
//           sx={
//             {
//               // backgroundColor:'red'
//             }
//           }
//         >
//           <UpperItems>
//             <Options
//               to="/dashboard/properties"
//               selected={step === 1}
//               onClick={() => handleStepChange(1)}
//             >
//               <PropertyIcon selected={step === 1} />
//               <Heading selected={step === 1}>Properties</Heading>
//             </Options>

//             <Options
//               to="/dashboard/wallet"
//               selected={step === 2}
//               onClick={() => handleStepChange(2)}
//             >
//               <WalletIcon selected={step === 2} />
//               <Heading selected={step === 2}> Wallet</Heading>
//             </Options>

//             <Options
//               to="/dashboard/portfolio"
//               selected={step === 3}
//               onClick={() => handleStepChange(3)}
//             >
//               <PortfolioIcon selected={step === 3} />
//               <Heading selected={step === 3}>Portfolio</Heading>
//             </Options>

//             <Options
//               to="/dashboard/rewards"
//               selected={step === 4}
//               onClick={() => handleStepChange(4)}
//             >
//               <RewardIcon selected={step === 4} />
//               <Heading selected={step === 4}>Rewards</Heading>
//             </Options>

//             <Options
//               to="/dashboard/cart"
//               style={{ marginBottom: "0px" }}
//               selected={step === 5}
//               onClick={() => handleStepChange(5)}
//             >
//               <CartIcon selected={step === 5} />
//               <Heading selected={step === 5}>Cart</Heading>
//             </Options>
//             {isAdmin && (
//               <div>
//                 <Options
//                   to="/dashboard/allinvestors"
//                   style={{ marginBottom: "0px" }}
//                   selected={step === 6}
//                   onClick={() => handleStepChange(6)}
//                   onMouseDown={handleClose}
//                 >
//                   <CartIcon selected={step === 6} />
//                   <Heading selected={step === 6}>Investors</Heading>
//                 </Options>
//                 <Options
//                   to="/dashboard/addlisting"
//                   style={{ marginBottom: "0px" }}
//                   selected={step === 7}
//                   onClick={() => handleStepChange(7)}
//                   onMouseDown={handleClose}
//                 >
//                   <CartIcon selected={step === 7} />
//                   <Heading selected={step === 7}>Listing</Heading>
//                 </Options>
//                 <Options
//                   to="/dashboard/allpropertyinterests"
//                   style={{ marginBottom: "0px" }}
//                   selected={step === 8}
//                   onClick={() => handleStepChange(8)}
//                   onMouseDown={handleClose}
//                 >
//                   <CartIcon selected={step === 8} />
//                   <Heading selected={step === 8}>Management</Heading>
//                 </Options>
//               </div>
//             )}
//           </UpperItems>

//           <Divider sx={{ my: 1 }} />

//           <LowerItems>
//             <Options
//               onClick={handleAccountClick}
//               style={{ display: "flex", justifyContent: "space-between" }}
//             >
//               <div className="account-container">
//                 {/* <div className="circle">{name.slice(0, 2).toUpperCase()}</div> */}
//                 {/* <img style={{
//                         height:'30px',
//                         borderRadius:'40%',
//                         cursor:'pointer',
//                         backgroundColor:'#5ECE8F'
//                       }} src={image} alt="fsdf"/> */}
//                 <Avatar
//                   sx={{
//                     marginRight: "10px",
//                     width: 32,
//                     height: 32,
//                     backgroundColor: "#5ECE8F",
//                   }}
//                 >
//                   <img style={{ width: 17 }} src={image} />
//                 </Avatar>
//                 <Heading style={{ fontSize: "16px" }}>{name}</Heading>
//               </div>
//               <ChevronRightIcon />
//             </Options>

//             <Options style={{ marginBottom: "0px" }}>
//               <HelpIcon />
//               <Heading>Help and Support</Heading>
//             </Options>
//           </LowerItems>
//         </List>
//       </Drawer>
//       {nestedListVisible && (
//         <NestedListContainer>
//           <NestedList>
//             <NestedLink
//               to="/dashboard/profile"
//               selected={step === 8}
//               onClick={() => handleStepChange(8)}
//             >
//               <UserIcon selected={step === 8} />
//               <SubHeading selected={step === 8}>My Profile</SubHeading>
//             </NestedLink>

//             <NestedLink
//               to="/dashboard/bookmarks"
//               selected={step === 9}
//               onClick={() => handleStepChange(9)}
//             >
//               <BookmarkIcon selected={step === 9} />
//               <SubHeading selected={step === 9}>Bookmarks</SubHeading>
//             </NestedLink>

//             <Divider sx={{ my: 1 }} style={{ height: "2px", width: "100%" }} />

//             <Logout to="/" onClick={handleLogOut}>
//               <LogoutIcon />
//               <SubHeading>Logout</SubHeading>
//             </Logout>
//           </NestedList>
//         </NestedListContainer>
//       )}

//       <Box
//         component="main"
//         sx={{
//           backgroundColor: (theme) =>
//             theme.palette.mode === "light"
//               ? theme.palette.grey[100]
//               : theme.palette.grey[900],
//           flexGrow: 1,
//           height: "100vh",
//           overflow: "auto",
//         }}
//         onClick={() => {
//           setNestedListVisible(false);
//         }}
//       >
//         <Routes>
//           <Route path="properties" element={<Properties />} />

//           <Route
//             path="properties/view/:id"
//             element={
//               <PropertyItem
//                 handleCart={handleCart}
//                 clicked={clicked}
//                 setClicked={setClicked}
//               />
//             }
//           />
//           <Route
//             path="properties/view/photos/:id"
//             element={<Photos clicked={clicked} setClicked={setClicked} />}
//           />
//           <Route path="wallet" element={<Wallet />} />
//           <Route
//             path="portfolio"
//             element={<Portfolio handleBuyProperties={handleBuyProperties} />}
//           />
//           <Route
//             path="rewards"
//             element={<Rewards handleBalance={handleBalance} />}
//           />
//           <Route
//             path="cart"
//             element={<Cart handleBuyProperties={handleBuyProperties} />}
//           />
//           <Route path="addlisting" element={<AdminDashboard />} />
//           <Route path="profile" element={<Profile />} />
//           <Route path="bookmarks" element={<Bookmarks />} />
//           <Route path="rewards/tier" element={<Tier />} />
//           <Route path="rewards/referrals" element={<Referrals />} />
//           <Route
//             path="allpropertyinterests/userinterests/:propertyid"
//             element={<UserInterests />}
//           />
//           <Route path="allpropertyinterests" element={<PropertyInterests />} />
//           <Route path="allinvestors" element={<PendingKyc />} />
//         </Routes>
//       </Box>
//     </Box>
//   );
// };

// export default Dashboard;

import React, { useEffect, useState } from "react";
import Properties from "./property/Properties";
import Portfolio from "./contents/Portfolio";
import Avatar from "@mui/material/Avatar";
import "./Dashboard.css";
import Profile from "./account/Profile";
import image from "./user.png";
import Bookmarks from "./account/Bookmarks";
import Rewards from "./rewards/Rewards";
import Addlisting from "./rewards/AdminDashboard";
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
  font-size: 14px;
  border-radius: 10px;
  margin-bottom: 10px;
  text-decoration: none;
  background-color: ${({ selected }) =>
    selected ? "#cbe5ffb9" : "transparent"};
  color: ${({ selected }) => (selected ? "black" : "rgb(112,111,111)")};
  &:hover {
    background-color: ${({ selected }) =>
    selected ? "#cbe5ffb9" : "#cbe5ffb9"};
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
  height: 38vh;
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
  font-size: 16px;
`;
const SubHeading = styled(Typography)`
  font-family: Inter;
  font-size: 18px;
`;
const NestedListContainer = styled(Box)`
  position: absolute;
  left: ${drawerWidth}px;
  top: 60vh;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  width: 250px;
  box-shadow: 0 1px 2px 1px black;
  z-index: 9;
  overflow:hidden;

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

const Dashboard = () => {
  // const [open] = useState(true);
  const token = JSON.parse(localStorage.getItem("userinfo"));
  const URL = config.URL;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(!isMobile);
  const [isAdmin, setAdmin] = useState(false);

  var sc = document.getElementById("aisensy-wa-widget");
  useEffect(() => {
    console.log(sc);
    if (sc && isMobile) {
      console.log("removed");
      console.log(sc);
      sc?.parentNode?.removeChild(sc);
      window.location.reload();
    }
    if (token && token.isAdmin) {
      setAdmin(true);
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
            background: "#15242F",
          }}
        >
          <Link to="/">
            <img
              src="/images/VENQ_BOLD_PNG.png"
              alt="logo"
              style={{
                paddingTop: "17px",
                paddingRight: "15px",
                paddingLeft: "15px",
                cursor: "pointer",
                width: "65px",
                height: "auto",
              }}
            />
          </Link>
          <div style={{ display: "flex" }}>
            {name && (
              <Avatar
                sx={{
                  width: 32,
                  height: 32,
                  backgroundColor: "#5ECE8F",
                  marginTop: "15px",
                  marginRight: "10px",
                }}
              >
                <img
                  style={{ width: 17 }}
                  src={image}
                  onClick={handleAccountClick}
                  onMouseDown={handleClose}
                />
              </Avatar>
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
              <img
                src="/images/menu.png"
                alt="logo"
                style={{
                  padding: "10px",
                  cursor: "pointer",
                  width: "30px",
                  height: "30px",
                }}
              />
            </IconButton>
          </div>
        </div>
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
          <UpperItems>
            <Options
              to="/dashboard/properties"
              selected={step === 1}
              onClick={() => handleStepChange(1)}
              onMouseDown={handleClose} // Close the popover on mouse down
            >
              <PropertyIcon selected={step === 1} />
              <Heading selected={step === 1}>Properties</Heading>
            </Options>

            <Options
              to="/dashboard/wallet"
              selected={step === 2}
              onClick={() => handleStepChange(2)}
              onMouseDown={handleClose}
            >
              <WalletIcon selected={step === 2} />
              <Heading selected={step === 2}> Wallet</Heading>
            </Options>

            <Options
              to="/dashboard/portfolio"
              selected={step === 3}
              onClick={() => handleStepChange(3)}
              onMouseDown={handleClose}
            >
              <PortfolioIcon selected={step === 3} />
              <Heading selected={step === 3}>Portfolio</Heading>
            </Options>

            <Options
              to="/dashboard/rewards"
              selected={step === 4}
              onClick={() => handleStepChange(4)}
              onMouseDown={handleClose}
            >
              <RewardIcon selected={step === 4} />
              <Heading selected={step === 4}>Rewards</Heading>
            </Options>

            <Options
              to="/dashboard/cart"
              style={{ marginBottom: "0px" }}
              selected={step === 5}
              onClick={() => handleStepChange(5)}
              onMouseDown={handleClose}
            >
              <CartIcon selected={step === 5} />
              <Heading selected={step === 5}>Cart</Heading>
            </Options>
            {isAdmin && (
              <div>
                <Options
                  to="/dashboard/alinvestors"
                  style={{ marginBottom: "0px" }}
                  selected={step === 6}
                  onClick={() => handleStepChange(6)}
                  onMouseDown={handleClose}
                >
                  <CartIcon selected={step === 6} />
                  <Heading selected={step === 6}>Users</Heading>
                </Options>
                <Options
                  to="/listings/add"
                  style={{ marginBottom: "0px" }}
                  selected={step === 7}
                  onClick={() => handleStepChange(7)}
                  onMouseDown={handleClose}
                >
                  <CartIcon selected={step === 7} />
                  <Heading selected={step === 7}>Listing</Heading>
                </Options>
              </div>
            )}
          </UpperItems>

          <Divider sx={{ my: 1 }} />

          <LowerItems>
            {/* <Options
              onClick={handleAccountClick}
              style={{ display: "flex", justifyContent: "space-between" }}
              onMouseDown={handleClose}
            >
              <div className="account-container"> */}
            {/* <div className="circle">{name.slice(0, 2).toUpperCase()}</div> */}
            {/* <Avatar sx={{ 
                width: 32, height: 32,backgroundColor:'#5ECE8F' }}>

                <img style={{ width: 17 }} src={image} />
              </Avatar> */}
            {/* <img style={{
                          height:'30px',
                          borderRadius:'40%',
                          cursor:'pointer',
                          backgroundColor:'#5ECE8F'
                        }} src={image} alt="fsdf"/> */}
            {/* <Heading style={{ fontSize: "16px" }}>{name}</Heading>
              </div>
              <ChevronRightIcon />
            </Options> */}

            <Options style={{ marginBottom: "0px" }} onMouseDown={handleClose}>
              <HelpIcon />
              <Heading>Help and Support</Heading>
            </Options>
          </LowerItems>
        </List>
      </Popover>

      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={drawerOpen}
        onClose={isMobile ? handleDrawerToggle : undefined}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            px: [1],
          }}
        >
          <Link to="/">
            <img
              src="/images/VENQ_BOLD_small.png"
              alt="logo"
              style={{ padding: "10px", cursor: "pointer" }}
            />
          </Link>
        </Toolbar>

        <Divider />

        <List
          component="nav"
          sx={
            {
              // backgroundColor:'red'
            }
          }
        >
          <UpperItems>
            <Options
              to="/dashboard/properties"
              selected={step === 1}
              onClick={() => handleStepChange(1)}
            >
              <PropertyIcon selected={step === 1} />
              <Heading selected={step === 1}>Properties</Heading>
            </Options>

            <Options
              to="/dashboard/wallet"
              selected={step === 2}
              onClick={() => handleStepChange(2)}
            >
              <WalletIcon selected={step === 2} />
              <Heading selected={step === 2}> Wallet</Heading>
            </Options>

            <Options
              to="/dashboard/portfolio"
              selected={step === 3}
              onClick={() => handleStepChange(3)}
            >
              <PortfolioIcon selected={step === 3} />
              <Heading selected={step === 3}>Portfolio</Heading>
            </Options>

            <Options
              to="/dashboard/rewards"
              selected={step === 4}
              onClick={() => handleStepChange(4)}
            >
              <RewardIcon selected={step === 4} />
              <Heading selected={step === 4}>Rewards</Heading>
            </Options>

            <Options
              to="/dashboard/cart"
              style={{ marginBottom: "0px" }}
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
                  style={{ marginBottom: "0px" }}
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
          </UpperItems>

          <Divider sx={{ my: 1 }} />

          <LowerItems>
            <Options
              onClick={handleAccountClick}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div className="account-container">
                {/* <div className="circle">{name.slice(0, 2).toUpperCase()}</div> */}
                {/* <img style={{
                        height:'30px',
                        borderRadius:'40%',
                        cursor:'pointer',
                        backgroundColor:'#5ECE8F'
                      }} src={image} alt="fsdf"/> */}
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
                <Heading style={{ fontSize: "16px" }}>{name}</Heading>
              </div>
              <ChevronRightIcon />
            </Options>

            <Options style={{ marginBottom: "0px" }}>
              <HelpIcon />
              <Heading>Help and Support</Heading>
            </Options>
          </LowerItems>
        </List>
      </Drawer>
      {nestedListVisible && (
        <NestedListContainer>
          <NestedList className="nested-list">
            <NestedLink
              to="/dashboard/profile"
              selected={step === 8}
              onClick={() => handleStepChange(8)}
            >
              <UserIcon selected={step === 8} />
              <SubHeading selected={step === 8}>My Profile</SubHeading>
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
          <Route path="addlisting" element={<AdminDashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="bookmarks" element={<Bookmarks />} />
          <Route path="rewards/tier" element={<Tier />} />
          <Route path="rewards/referrals" element={<Referrals />} />
          <Route
            path="allpropertyinterests/userinterests/:propertyid"
            element={<UserInterests />}
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
