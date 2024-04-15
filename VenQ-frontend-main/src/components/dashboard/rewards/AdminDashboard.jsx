import React, { useEffect, useState } from "react";
import Properties from "../property/Properties";
import Portfolio from "../contents/Portfolio";
import "../Dashboard.css";
import Profile from "../account/Profile";
import image from "../user.png";
import Bookmarks from "../account/Bookmarks";
import Rewards from "../rewards/Rewards";
import Addlisting from "../listings/Addlistings";
import Tier from "../rewards/Tier";
import Referrals from "../rewards/Referrals";
import Cart from "../cart/Cart";
import Wallet from "../contents/Wallet";
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
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import PropertyItem from "../property/PropertyItem";
import Photos from "../property/Photos";
import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/actions/user";
import axios from "axios";
import FormUserDetails from "../listings/FormUserDetails";
import FormPersonalDetails from "../listings/FormPersonalDetails";
import ThirdPage from "../listings/ThirdPage";
import FourthPage from "../listings/FourthPage";
import FinalPage from "../listings/LocationPage";
import SecondLastPage from "../listings/secondLastPage";
import config from "../../../config";
import Amenities from "../listings/Amenities";
import Documents from "../listings/Documents";
import ListingDate from "../listings/ListingDate";
const drawerWidth = 280;
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
  font-size: 16px;
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
// const PropertyIcon = styled(AccountBalanceWalletOutlinedIcon)`
//   font-size: 25px;
//   margin-right: 10px;
//   color: ${({ selected }) => (selected ? "#0170dc" : "")};
// `;
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
  font-size: 18px;
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

const AdminDashboard = () => {
  const URL = config.URL;
  const token = JSON.parse(localStorage.getItem("userinfo"));
  const [isAdmin, setAdmin] = useState(false);
  useEffect(() => {
    if (token && token.isAdmin) {
      setAdmin(true);
    }
  }, []);
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
  const [step, setStep] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [nestedListVisible, setNestedListVisible] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const token = localStorage.getItem("details");
  // const decodedToken = jwtDecode(token);
  const name = token.name;
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(!isMobile);
  // console.log(drawerOpen);
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  // const [open] = useState(true);

  const [im, setIm] = useState([]);
  const [sim, setSim] = useState([]);
  const [spo, setSpo] = useState([]);
  const [fundt, setFundt] = useState([]);
  const [amneties, setAmenities] = useState([]);
  const [docs, setDocs] = useState([]);
  const [dlink, setDlink] = useState("");
  const generateRandomId = () => {
    // Generate a random hexadecimal ID
    const randomId = Array.from({ length: 30 }, () =>
      Math.floor(Math.random() * 16).toString(16)
    ).join("");
    return randomId;
  };
  const [formData, setformData] = useState({
    _id: generateRandomId(),
    amenities: [],
    status: "Live",
    propertyName: "",
    tickerCode: "",
    keyPoints: "",
    highlightOne: "",
    highlightTwo: "",
    propertyHighlightHeading: "",
    propertyHighlightDescription: "",
    propertyHighlightTitle: "",
    propertyHighlightSubTitle: "",
    propertyImgUrlOne: "",
    propertyImgUrlTwo: "",
    propertyImgUrlThree: "",
    propertyImgUrlFour: "",
    financialInfoPropertyPrice: "",
    financialInfoPropertyTransactionCost: "",
    financialInfoPropertyGovtFess: "",
    financialInfoPropertyTotalCost: "",
    financialInfoPropertyGrossRent: "",
    financialInfoPropertyRentServiceCharges: "",
    financialInfoPropertyRentMaintenanceCost: "",
    financialInfoPropertyTotalAnnualIncome: "",
    timelineFundingTitle: "",
    timelineFundingDescription: "",
    locationCountryName: "",
    locationCityName: "",
    locationStreet: "",
    documentFile: null,
    listingDate: "",
  });

  const handleSubmit = async () => {
    try {
      const formDataArray = Object.entries(formData).map(([key, value]) => ({
        [key]: value,
      }));

      // const result = await axios.post('YOUR_BACKEND_API_URL', formData);
      // console.log('Submit successful:', result.data);
      // Clear form data afteruccessful submission if needed
      console.log(formDataArray);
      setformData({
        _id: generateRandomId(),
        amenities: [],
        propertyName: "",
        status: "",
        tickerCode: "",
        keyPoints: "",
        highlightOne: "",
        highlightTwo: "",
        propertyHighlightHeading: "",
        propertyHighlightDescription: "",
        propertyHighlightTitle: "",
        propertyHighlightSubTitle: "",
        propertyImgUrlOne: "",
        propertyImgUrlTwo: "",
        propertyImgUrlThree: "",
        propertyImgUrlFour: "",
        financialInfoPropertyPrice: "",
        financialInfoPropertyTransactionCost: "",
        financialInfoPropertyGovtFess: "",
        financialInfoPropertyTotalCost: "",
        financialInfoPropertyGrossRent: "",
        financialInfoPropertyRentServiceCharges: "",
        financialInfoPropertyRentMaintenanceCost: "",
        financialInfoPropertyTotalAnnualIncome: "",
        timelineFundingTitle: "",
        timelineFundingDescription: "",
        locationCountryName: "",
        locationCityName: "",
        locationStreet: "",
        documentFile: "",
        listingDate: "",
      });
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  const FormTitles = [
    "Property Details",
    "Property Highlights",
    "Photos",
    "Financial Information",
    "Timeline",
    "Location",
    "Amenities",
    "Documents",
    "Listing Date",
  ];
  const PageDisplay = () => {
    if (step === 0) {
      return (
        <FormUserDetails fd={formData} sfd={setformData} si={setIm} i={im} />
      );
    } else if (step === 1) {
      return (
        <FormPersonalDetails
          fd={formData}
          sfd={setformData}
          spi={setSim}
          sp={sim}
          fsp={spo}
          sfsp={setSpo}
        />
      );
    } else if (step === 2) {
      return <ThirdPage fd={formData} sfd={setformData} />;
    } else if (step === 3) {
      return <FourthPage fd={formData} sfd={setformData} />;
    } else if (step === 4) {
      return (
        <SecondLastPage
          fd={formData}
          sfd={setformData}
          fo={fundt}
          sfo={setFundt}
        />
      );
    } else if (step === 5) {
      return (
        <FinalPage
          fd={formData}
          sfd={setformData}
          am={amneties}
          sam={setAmenities}
          dc={docs}
          sdc={setDocs}
          dl={dlink}
          sdl={setDlink}
        />
      );
    } else if (step === 6) {
      return <Amenities fd={formData} sfd={setformData} />;
    } else if (step === 7) {
      return <Documents fd={formData} sfd={setformData} />;
    } else if (step === 8) {
      return (
        <ListingDate
          fd={formData}
          sfd={setformData}
          handleSubmit={handleSubmit}
        />
      );
    }
  };
  // const handleSubmit=async ()=>{
  //   try{
  //     const sobj={
  //       images:im,
  //       tourlink:formData.tourlink,
  //       properyheading:formData.propertyheading,
  //       propertydescription:formData.propertydescription,
  //       specs:spo,
  //       propertyprice:formData.propertyprice,
  //       annualizedreturn:formData.annualizedreturn,
  //       annualappreciation:formData.annualappreciation,
  //       grossyield:formData.grossyield,
  //       netyield:formData.netyield,
  //       propertyoverview:formData.propertyoverview,
  //       propertypricen:formData.propertypricen,
  //       transactioncost:formData.transactioncost,
  //       venqfee:formData.venqfee,
  //       projectedgrossrent:formData.projectedgrossrent,
  //       maintainencefee:formData.maintainencefee,
  //       servicecharges:formData.servicecharges,
  //       annualnetincome:formData.annualnetincome,
  //       fundtimeline:fundt,
  //       locationlink:formData.locationlink,
  //       locationdescription:formData.locationdescription,
  //       amenities:amneties,
  //       documents:docs
  //     }
  //     // console.log(sobj);
  //     const result=await axios.post(${URL}/listing/add,sobj);
  //     if(result){
  //       console.log('submit ho gaya');
  //     }else{
  //       console.log('nahi hua submit');
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  console.log(step);
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
          New Listing
          <div style={{ display: "flex" }}>
            {name && (
              <Options onClick={handleAccountClick}>
                <img
                  style={{
                    height: "30px",
                    borderRadius: "40%",
                    cursor: "pointer",
                  }}
                  src={image}
                  alt="fsdf"
                />
              </Options>
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
          {/* <UpperItems>
          <Options
              selected={step === 0}
              onClick={() => handleStepChange(0)}
              onMouseDown={handleClose} // Close the popover on mouse down
            >
              <PropertyIcon selected={step === 0} />
              <Heading selected={step === 0}>Property Details</Heading>
            </Options>

            <Options
              selected={step === 1}
              onClick={() => handleStepChange(1)}
              onMouseDown={handleClose}
            >
              <PropertyIcon selected={step === 1} />
              <Heading selected={step === 1}> Property Highlights</Heading>
            </Options>

            <Options
              selected={step === 2}
              onClick={() => handleStepChange(2)}
              onMouseDown={handleClose}
            >
               <PropertyIcon selected={step ===2} />
              <Heading selected={step === 2}>Photos</Heading>
            </Options>

            <Options
             
              selected={step === 3}
              onClick={() => handleStepChange(3)}
              onMouseDown={handleClose}
            >
             <PropertyIcon selected={step === 3} />
              <Heading selected={step === 3}>Financial Information</Heading>
            </Options>

            <Options
             
              style={{ marginBottom: "0px" }}
              selected={step === 4}
              onClick={() => handleStepChange(4)}
              onMouseDown={handleClose}
            >
              <PropertyIcon selected={step === 4} />
              <Heading selected={step === 4}>Timeline</Heading>
            </Options>
                  <Options
                    
                    style={{ marginBottom: "0px" }}
                    selected={step === 5}
                    onClick={() => handleStepChange(5)}
                    onMouseDown={handleClose}
                  >
                     <PropertyIcon selected={step === 5} />
                 
              <Heading selected={step === 5}>Location</Heading>
            </Options>
            <Options
              
              style={{ marginBottom: "0px" }}
              selected={step === 6}
              onClick={() => handleStepChange(6)}
              onMouseDown={handleClose}
            >
               <PropertyIcon selected={step === 6} />
             
              <Heading selected={step === 6}>Amenities</Heading>
            </Options>
            <Options
             
              style={{ marginBottom: "0px" }}
              selected={step === 7}
              onClick={() => handleStepChange(7)}
              onMouseDown={handleClose}
            >
              
              <PropertyIcon selected={step === 7} />
              <Heading selected={step === 7}>Documents</Heading>
            </Options>
          </UpperItems> */}

          <Divider sx={{ my: 1 }} />

          <LowerItems>
            <Options
              onClick={handleAccountClick}
              style={{ display: "flex", justifyContent: "space-between" }}
              onMouseDown={handleClose}
            >
              <div className="account-container">
                {/* <div className="circle">{name.slice(0, 2).toUpperCase()}</div> */}
                <img
                  style={{
                    height: "30px",
                    borderRadius: "40%",
                    cursor: "pointer",
                  }}
                  src={image}
                  alt="fsdf"
                />
                <Heading style={{ fontSize: "16px" }}>{name}</Heading>
              </div>
              <ChevronRightIcon />
            </Options>

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
            justifyContent: "center",
            px: [1],
          }}
        >
          {/* <Link to="/">
            <img
              src="/images/VENQ_BOLD_small.png"
              alt="logo"
              style={{ padding: "10px", cursor: "pointer" }}
            />
          </Link> */}
          <h1
            style={{
              textAlign: "center",
            }}
          >
            New Listing
          </h1>
        </Toolbar>

        <Divider />

        <List component="nav">
          <UpperItems>
            <Options
              selected={step === 0}
              onClick={() => handleStepChange(0)}
              onMouseDown={handleClose} // Close the popover on mouse down
            >
              <PropertyIcon selected={step === 0} />
              <Heading selected={step === 0}>Property Details</Heading>
            </Options>

            <Options
              selected={step === 1}
              onClick={() => handleStepChange(1)}
              onMouseDown={handleClose}
            >
              <PropertyIcon selected={step === 1} />
              <Heading selected={step === 1}> Property Highlights</Heading>
            </Options>

            <Options
              selected={step === 2}
              onClick={() => handleStepChange(2)}
              onMouseDown={handleClose}
            >
              <PropertyIcon selected={step === 2} />
              <Heading selected={step === 2}>Photos</Heading>
            </Options>

            <Options
              selected={step === 3}
              onClick={() => handleStepChange(3)}
              onMouseDown={handleClose}
            >
              <PropertyIcon selected={step === 3} />
              <Heading selected={step === 3}>Financial Information</Heading>
            </Options>

            <Options
              style={{ marginBottom: "0px" }}
              selected={step === 4}
              onClick={() => handleStepChange(4)}
              onMouseDown={handleClose}
            >
              <PropertyIcon selected={step === 4} />
              <Heading selected={step === 4}>Timeline</Heading>
            </Options>
            <Options
              style={{ marginBottom: "0px" }}
              selected={step === 5}
              onClick={() => handleStepChange(5)}
              onMouseDown={handleClose}
            >
              <PropertyIcon selected={step === 5} />
              {/* <CartIcon selected={step === 6} /> */}
              <Heading selected={step === 5}>Location</Heading>
            </Options>
            <Options
              style={{ marginBottom: "0px" }}
              selected={step === 6}
              onClick={() => handleStepChange(6)}
              onMouseDown={handleClose}
            >
              <PropertyIcon selected={step === 6} />
              {/* <CartIcon selected={step === 7} /> */}
              <Heading selected={step === 6}>Amenities</Heading>
            </Options>
            <Options
              style={{ marginBottom: "0px" }}
              selected={step === 7}
              onClick={() => handleStepChange(7)}
              onMouseDown={handleClose}
            >
              {/* <CartIcon selected={step === 8} /> */}
              <PropertyIcon selected={step === 7} />
              <Heading selected={step === 7}>Documents</Heading>
            </Options>
            <Options
              style={{ marginBottom: "0px" }}
              selected={step === 8}
              onClick={() => handleStepChange(8)}
              onMouseDown={handleClose}
            >
              <PropertyIcon selected={step === 8} />
              {/* <CartIcon selected={step === 7} /> */}
              <Heading selected={step === 8}>Listing Date</Heading>
            </Options>
          </UpperItems>
        </List>
      </Drawer>
      {/* {nestedListVisible && (
        <NestedListContainer>
          <NestedList>
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
      )} */}
      <Box
        component="div"
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
        <div className="myform">
          <div className="progressbar">
            {/* <div
          style={{ width: step === 0 ? "33.3%" : step == 1 ? "66.6%" : "100%" }}
        ></div> */}
          </div>
          <div className="form-container">
            <div className="header">
              <h1>{FormTitles[step]}</h1>
            </div>
            <div className="body">{PageDisplay()}</div>
            {/* {(step === FormTitles.length - 1) && 
          <div className="footer">
          <button
            onClick={() => {
                  handleSubmit();

            }}
          >
            Submit
          </button>
        </div>
        } */}
          </div>
        </div>
        {/* <Addlisting /> */}
      </Box>
    </Box>
  );
};

export default AdminDashboard;
