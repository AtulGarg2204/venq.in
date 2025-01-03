import { Slider as BaseSlider, sliderClasses } from "@mui/base/Slider";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Divider,
  Grid,
  ImageList,
  ImageListItem,
  ThemeProvider,
  Tooltip,
  Typography,
  createTheme,
  styled,
  useMediaQuery,
  Collapse
} from "@mui/material";
import { alpha, borderRadius, color, fontFamily, fontSize, fontWeight, margin, padding, width } from "@mui/system";
import axios from "axios";
import PropTypes from "prop-types";
import React, { useContext, useEffect, useReducer, useState, useMemo, useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Popup from "reactjs-popup";
import config from "../../../config";
import { DataContext } from "../../context/DataContext";
import clock from "./clock.png";
import Period from "./Period";
// import Slider from "react-slick";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
// import { toast } from "react-toastify";
import ProgressBar from "@ramonak/react-progress-bar";
import Terms from "../../common/terms";
import LineChart from "./Linechart";
import "./propertyitem.css";
import Return_cal from "./Return_cal";

import { AppBar, Toolbar } from '@mui/material';
const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const navbarRef = useRef(null); // Ref to access the navbar's toolbar for scroll manipulation
  const sections = [
    'performance',
    'about-project',
    'return-calculator',
    'amenities',
    'documents',
    'rera',
    'financials',
    'layout',
    'funding-timeline',
    'location'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // 50% of the section needs to be visible
    );

    // Observe all sections
    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const activeStyle = {
    borderBottom: '3px solid black',
    paddingBottom: '10px',
  };

  // Scroll to the specific section and adjust the navbar scroll
  const scrollToSection = (sectionId, index) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // Adjust horizontal scroll of the navbar
    const navbarWidth = navbarRef.current.offsetWidth;
    const sectionWidth = 160; // Width of each navbar button (adjust as needed)
    const scrollPosition = sectionWidth * index;

    // Scroll the navbar to the correct position
    navbarRef.current.scrollTo({
      left: scrollPosition,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (activeSection) {
      // Find the index of the active section
      const sectionIndex = sections.indexOf(activeSection);
      if (sectionIndex !== -1) {
        // Scroll the navbar to the active section's button
        const sectionWidth = 160; // Width of each navbar button (adjust as needed)
        const scrollPosition = sectionWidth * sectionIndex;

        navbarRef.current.scrollTo({
          left: scrollPosition,
          behavior: 'smooth',
        });
      }
    }
  }, [activeSection]);

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: 'white',
        borderTop: '1px solid #e9e9eb',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        width: '100%',
        padding: "10px 40px 0px 40px",
      }}
    >
      <Toolbar
        ref={navbarRef}
        sx={{
          display: 'inline-block',
          overflow: 'auto', // Enables horizontal scrolling
          scrollBehavior: 'smooth',
          whiteSpace: 'nowrap',
          gap: '40px', // Adds constant spacing between items
          padding: '10px 20px 0px 20px',
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {['PERFORMANCE','ABOUT PROJECT', 'RETURN CALCULATOR', 'AMENITIES', 'DOCUMENTS', 'RERA', 'FINANCIALS', 'LAYOUT', 'FUNDING TIMELINE', 'LOCATION'].map(
          (label, index) => {
            const sectionId = label.toLowerCase().replace(/\s/g, '-'); // Maps label to section IDs
            return (
              <Button
                key={index}
                color="inherit"
                sx={{
                  textTransform: 'uppercase', // Ensures text is capitalized
                  position: 'relative',
                  whiteSpace: 'nowrap',
                  padding: '0 30px',
                  ...(activeSection === sectionId && activeStyle),
                }}
                onClick={() => scrollToSection(sectionId, index)}
              >
                {label}
              </Button>
            );
          }
        )}
      </Toolbar>
    </AppBar>
  );
};




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
const StyledPopup = styled(Popup)`
  &-overlay {
    height: 50%;
    width: max-content;
    min-width: 400px;
    margin-left: 40%;
    margin-top: 15%;
    background-color: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(5px);
    border: 2px solid black;
    border-radius: 10px;

    @media (max-width: 600px) {
      width: 80%;
      margin-left: 10%;
      margin-top: 25%;
    }
  }

  &-content {
    color: white;
  }
`;

const StyledPopupinv = styled(Popup)`
  &-overlay {
    height: 510px;
    width: max-content;
    min-widt: 400px;
    margin-left: 40%;
    margin-top: 5%;
    background-color: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(5px);
    border: 1px solid #e9e9eb;
    border-radius: 10px;

    @media (max-width: 600px) {
      width: 80%;
      margin-left: 20%;
      margin-top: 25%;
    }
  }

  &-content {
    color: white;
  }
`;
const StyledPopupinvSmall = styled(Popup)`
  &-overlay {
    height: 460px;
    width: 30%;
    margin-left: 33%;
    margin-top: 5%;
    background-color: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(5px);
    border: 1px solid #e9e9eb;
    border-radius: 10px;

    @media (max-width: 700px) {
      height: 530px;
      width: 80%;
      margin-left: 10%;
      margin-top: 25%;
    }
  }

  &-content {
    color: white;
  }
`;
const Label = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
`;
const LabelName = styled(Typography)`
  font-family: "Arial", sans-serif;
  font-size: 18px;
  color: black;
`;
const LabelAmount = styled(Typography)`
  text-align: "center";
  font-family: "Arial", sans-serif;
  align-items: center;
  font-size: 32px;
  font-weight: 600;
  color: black;
`;
const LabelSlider = styled("input")`
  width: 100%;
  cursor: pointer;
  background-color: #0170dc;
  border-radius: 10px;
  height: 10px;
`;

const HelpIcon = styled(ChatBubbleOutlineRoundedIcon)`
  font-size: 25px;
  margin-right: 10px;
  color: ${({ selected }) => (selected ? "#0170dc" : "")};
`;

const Heading = styled(Typography)`
  text-decoration: none;
  font-family: "Arial", sans-serif;
  font-size: 18px;
`;
const arrow = ">";
const PropertyLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin-right: 10px;
  font-weight: 600;
  &:hover {
    text-decoration: underline;
  }
`;
const Bookmark = styled(Button)`
  text-transform: none;
  color: black;
  border: 2px solid black;
  background-color: white;
  padding: 10px 20px;
  border-radius: 10px;
  &:hover {
    color: white;
    background-color: #0170dc;
    border: 2px solid #0170dc;
  }
  &:hover path {
    color: white;
  }
`;
const Extra = styled(Typography)`
  font-family: "Arial", sans-serif;
  font-size: 16px;
`;
const PhotoLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    color: rgb(112, 111, 111);
  }
`;
const SmallBoxes = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
const Details = styled(Box)`
  background-color: white;
  border-radius: 20px;
  padding: 20px;
`;
const Pricing = styled(Box)`
  position: sticky;
  top: 20px;
`;
const CartButton = styled(Button)`
  background-color: #0170dc;
  color: white;
  font-family: "Arial", sans-serif;
  text-transform: none;
  font-size: 14px;
  padding: 7px;
  border-radius: 10px;
  &:hover {
    background-color: #0170dc;
    color: white;
  }
`;
const PriceAddButton = styled(Button)`
  background-color: #cbe5ffb9;
  color: black;
  font-size: 11px;
  width: 32%;
  font-weight: 600;
  border-radius: 10px;
  font-family: "Arial", sans-serif;
  &:hover {
    background-color: #0170dc;
    color: white;
  }
`;
const theme = createTheme({
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: "14px",
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#121c30",
          textAlign: "center",
        },
      },
    },
  },
});
const info = (
  <>
    <p style={{ textAlign: "left", padding: "10px" }}>
      Use this calculator to estimate the potential returns from your real
      estate investment. Simply adjust the sliders to see how the variables will
      impact your estimated returns.
    </p>
    <p style={{ textAlign: "left", padding: "10px" }}>
      All projected values are before any property costs and platform fees, and
      based on a 5-year holding period. We expect the asset value to grow{" "}
      <b>30% over the next 5 years.</b>
    </p>
  </>
);
const info1 = (
  <p style={{ textAlign: "left", padding: "10px" }}>
    This rental income breakdown is based on estimated rental income, deductions
    and fees for the first year of ownership only. Please note that actual
    rental income, deductions, and fees may vary based on market conditions and
    future rental terms.
  </p>
);
const fundingTimeline = [
  {
    fundingtitle: "title",
    fundingsubtitle: "subtitle",
    fundingdescription: "description",
  },
];
const Logo = styled(Box)`
  width: 50px;
  height: 50px;
  padding: 4px 10px;
  margin-right: 10px;
`;
const SubTitle = styled(Typography)`
  color: #44475b;
  font-size: 12px;
  border: 0.2px solid #e9e9eb;
  font-family: "Arial", sans-serif;
  padding: 5px;
  cursor: pointer;
  border-radius: 20px;
`;
const PropertyDetails = styled(Box)`
  display: flex;
  align-items: center;
`;
const PropertyHeading = styled(Typography)`
  font-family: "Arial", sans-serif;
  font-weight: 600;
  font-size: 18px;
`;
const PropertyHeadingSmall = styled(Typography)`
  font-size: 30px;
  marginTop:-5px;
  font-family: "Bebas Neue", sans-serif;
  width: 100%;
  word-wrap: break-word;
`;
const PropertySubHeading = styled(Typography)`
  font-size: 20px;
  font-family: "Bebas Neue", sans-serif;
  color: grey;
`;
const GraphInfo = styled(Box)`
  display: flex;
  align-items: flex-start;
`;
const GraphHeading = styled(Typography)`
  font-size: 15px;
  color: grey;
  font-family: "Arial", sans-serif;
`;
const GraphSubHeading = styled(Typography)`
  font-size: 15px;
  font-weight: 600;
  font-family: "Arial", sans-serif;
`;
const MoreButton = styled(Typography)`
  font-family: "Arial", sans-serif;
  color: #0170dc;
  font-size: 16px;
  text-decoration: none;
  text-transform: none;
  cursor: pointer;
  padding: 0;
  &:hover {
    text-decoration: underline;
    background-color: white;
  }
`;
const FinanceHeading = styled(Typography)`
  font-family: "Arial", sans-serif;
  color: #44475b;
  font-size: 17px;
  font-weight: 600;
`;
const FinanceSubHeading = styled(Typography)`
  color: rgb(112, 111, 111);
  font-family: "Arial", sans-serif;
  font-size: 16px;
`;
const FinanceAmount = styled(Typography)`
  font-family: "Arial", sans-serif;
  font-size: 16px;
  color: #44475b;
  font-weight: 600;
`;
const LocationName = styled(Typography)`
  font-family: "Arial", sans-serif;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  padding-left: 10px;
  &:hover {
    text-decoration: underline;
    color: #0170dc;
  }
`;
const DownloadBox = styled(Box)`
  border: 1px solid #d3d3d3;
  display: flex;
  cursor: pointer;
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
  &:hover {
    background-color: #d3d3d3;
  }
`;
const IconBox = styled(Box)`
  width: 30px;
  height: 30px;
  padding: 3px;
`;
const TitleBox = styled(Box)`
  display: flex;
  padding: 15px;
  align-items: center;
  & > p {
    font-family: "Arial", sans-serif;
    font-size: 15px;
    padding-left: 10px;
  }
`;
const DownloadIcon = styled(Box)`
  padding: 15px;
`;
const MessageButton = styled(Box)`
  border: 1px solid black;
  display: flex;
  width: max-content;
  padding: 10px 20px;
  border-radius: 10px;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    background-color: #121c30;
    color: white;
  }
`;
const Property = styled(Card)`
  background-color: white;
  border-radius: 10px;
  &:hover {
    transform: translateY(-10px);
  }
`;
const Subheader = styled(Box)`
  display: flex;
  & div {
    border: 1px solid lightgray;
    padding: 4px 10px;
    margin-right: 10px;
    border-radius: 6px;
  }
`;
const PriceBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin: 15px 0 10px 0;
  align-items: center;
`;
const ReturnsBox = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  background-color: #f6f7f9;
  font-family: "Arial", sans-serif;
  color: grey;
  > div {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    font-size: 15px;
  }
`;
const Category = styled(Typography)`
  position: absolute;
  width: 100%;
  text-align: center;
  background-color: #0170dc;
  color: white;
  z-index: 2;
  padding: 5px;
  font-family: "Arial", sans-serif;
`;
const Header = styled(Typography)`
  font-size: 20px;
  font-weight: 600;
  font-family: "Arial", sans-serif;
  margin: 10px 0;
`;

function SliderValueLabel({ children }) {
  return <span className="valueLabel">{children}</span>;
}

SliderValueLabel.propTypes = {
  children: PropTypes.element.isRequired,
};

function valuetext(value) {
  return `${value}°C`;
}

const blue = {
  100: "#DAECFF",
  200: "#99CCF3",
  400: "#3399FF",
  300: "#66B2FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B3",
  900: "#003A75",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const Slider = styled(BaseSlider)(
  ({ theme }) => `
    color: ${theme.palette.mode === "light" ? grey[500] : grey[400]};
    height: 6px;
    width: 100%;
    padding: 16px 0;
    display: inline-flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    touch-action: none;
    -webkit-tap-highlight-color: transparent;
  
    &.${sliderClasses.disabled} {
      pointer-events: none;
      cursor: default;
      color: ${theme.palette.mode === "light" ? grey[300] : grey[600]};
      opacity: 0.4;
    }
  
    & .${sliderClasses.rail} {
      display: block;
      position: absolute;
      width: 100%;
      height: 4px;
      border-radius: 6px;
      background-color: currentColor;
      opacity: 0.3;
    }
  
    & .${sliderClasses.track} {
      display: block;
      position: absolute;
      height: 4px;
      border-radius: 6px;
      background-color: currentColor;
    }
  
    & .${sliderClasses.thumb} {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      margin-left: -6px;
      width: 20px;
      height: 20px;
      box-sizing: border-box;
      border-radius: 50%;
      outline: 0;
      background-color: ${theme.palette.mode === "light" ? blue[500] : blue[400]
    };
      transition-property: box-shadow, transform;
      transition-timing-function: ease;
      transition-duration: 120ms;
      transform-origin: center;
  
      &:hover {
        box-shadow: 0 0 0 6px ${alpha(
      theme.palette.mode === "light" ? blue[200] : blue[300],
      0.3
    )};
      }
  
      &.${sliderClasses.focusVisible} {
        box-shadow: 0 0 0 8px ${alpha(
      theme.palette.mode === "light" ? blue[200] : blue[400],
      0.5
    )};
        outline: none;
      }
  
      &.${sliderClasses.active} {
        box-shadow: 0 0 0 8px ${alpha(
      theme.palette.mode === "light" ? blue[200] : blue[400],
      0.5
    )};
        outline: none;
        transform: scale(1.2);
      }
    }
  
    & .${sliderClasses.mark} {
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: 99%;
      background-color: ${theme.palette.mode === "light" ? blue[200] : blue[900]
    };
      transform: translateX(-50%);
    }
  
    & .${sliderClasses.markActive} {
      background-color: ${theme.palette.mode === "light" ? blue[500] : blue[400]
    };
    }
  
    & .${sliderClasses.markLabel} {
      font-family: "Arial", sans-serif;
      font-weight: 600;
      font-size: 12px;
      position: absolute;
      top: 24px;
      transform: translateX(-50%);
      margin-top: 8px;
    }
  `
);

const contentStyle = { background: "#000" };
const overlayStyle = { background: "rgba(0,0,0,0.5)" };

const marks = [
  {
    value: 5000,
    label: "5000",
  },
  {
    value: 35000,
    label: "",
  },
  {
    value: 65000,
    label: "",
  },
  {
    value: 95000,
    label: "",
  },
  {
    value: 125000,
    label: "",
  },
  {
    value: 155000,
    label: "",
  },
  {
    value: 185000,
    label: "",
  },
  {
    value: 215000,
    label: "",
  },
  {
    value: 245000,
    label: "",
  },
  {
    value: 275000,
    label: "",
  },

  {
    value: 305000,
    label: "3L+",
  },
];

const arrowStyle = { color: "#000" }; // style for an svg element

const documents = ["hello", "bye", "noob", "player"];

const perItemCurrency = 5000;

const numberFormat = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(value);

function reducer(state, action) {
  switch (action.type) {
    case "inc":
      const upStockQun = state.stockQun + 1;
      const upTotal = upStockQun * perItemCurrency;
      const upTrans = upStockQun * 750;
      const upTotalCurrency = numberFormat(upTotal);
      const upTransPer = numberFormat(upTrans);
      const upTotalAmt = numberFormat(upTotal + upTrans);
      return {
        stockQun: upStockQun,
        totalCurrency: upTotalCurrency,
        totalAmt: upTotalAmt,
        transPer: upTransPer,
      };
    case "dec":
      if (state.stockQun > 1) {
        const upStockQun = state.stockQun - 1;
        const upTotal = upStockQun * perItemCurrency;
        const upTrans = upStockQun * 750;
        const upTotalCurrency = numberFormat(upTotal);
        const upTransPer = numberFormat(upTrans);
        const upTotalAmt = numberFormat(upTotal + upTrans);
        return {
          stockQun: upStockQun,
          totalCurrency: upTotalCurrency,
          totalAmt: upTotalAmt,
          transPer: upTransPer,
        };
      } else {
        return state;
      }
    default:
      return state;
  }
}

const PropertyItem = ({ handleCart, clicked, setClicked }) => {
  const [totalStock, dispatch] = useReducer(reducer, {
    stockQun: 1,
    totalCurrency: "₹5,000.00",
    totalAmt: "₹5,750.00",
    transPer: "₹750.00",
  });
  let unitPrice = numberFormat(5000);

  const stockHandlerInc = () => {
    dispatch({ type: "inc" });
    setUserInvestOne(totalStock.totalAmt);
  };

  const stockHandlerDec = () => {
    if (totalStock.stockQun > 1) {
      dispatch({ type: "dec" });
    }
  };

  const [selectedValue, setSelectedValue] = useState("");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "size-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  const URL = config.URL;
  const [invtype, setinvtype] = useState(1);
  const location = useLocation();
  // console.log("hello");
  const [totalamount, settotalamount] = useState(0);
  const [count, setcount] = useState(0);
  const [hoveredTerm, setHoveredTerm] = useState(null);

  const [quantity, setQuantity] = useState(2000);
  const [investment, setInvestment] = useState(50000);
  const [propertyValueGrowth, setPropertyValueGrowth] = useState(30);
  const [interestamount, setIntetestAmount] = useState(50000);
  const [rentalYield, setRentalYield] = useState(3);
  const [userinvest, setUserInvest] = useState(5000);
  const [userinvestone, setUserInvestOne] = useState(10000);
  const [showFullContent, setShowFullContent] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [financial, setFinancial] = useState(false);
  const [timeline, setTimeline] = useState(false);
  const [calculator, setCalculator] = useState(false);
  // const []
  const [overview, setOverview] = useState(false);
  const [amenities, setAmenities] = useState(false);
  const [showdocument, setShowdocument] = useState(false);
  const [layout, setLayout] = useState(false);
  const [showlocation, setShowlocation] = useState(false);

  const { id } = useParams();
  const [listing, setListing] = useState({});
  const token = JSON.parse(localStorage.getItem("userinfo"));
  const [content, setContent] = useState("");

  const [couponInput, setCouponInput] = useState("");
  const [message, setMessage] = useState("");
  const [totalAmount, setTotalAmount] = useState(totalStock.totalAmt);
  const maxWords = 50;
  const { setData } = useContext(DataContext);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const [propertyType, setPropertyType] = useState('');
  const [minAmountToInvest, setMinAmountToInvest] = useState('');
  const [fundTimeline, setFundTimeline] = useState([]);
  const [chartData, setChartData] = useState(null);

  const [timeShareDescription, setTimeShareDescription] = useState('');
  const [timeShareOffers, setTimeShareOffers] = useState([]);
  const [timeShareLimitedAvailability, setTimeShareLimitedAvailability] = useState('');
  const [timeShareInvestmentAmount, setTimeShareInvestmentAmount] = useState(0);

  const [truncatedContent, setTruncatedContent] = useState('');
  const [shouldTruncate, setShouldTruncate] = useState(false);

  const [expandedCategories, setExpandedCategories] = useState({
    sports: false,
    convenience: false,
    safety: false,
    leisure: false,
    environment: false,
  });

  const toggleCategory = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  // Categorizing amenities
  const categorizedAmenities = {
    sports: ["Gym", "Swimming Pool"],
    convenience: ["Parking", "Luxury Project"],
    safety: ["24/7 Security"],
    leisure: ["Clubhouse"],
    environment: ["Enviroment friendly"],
  };
  // console.log(location);
  useEffect(() => {
    const fetchListing = async () => {
      try {
        const response = await axios.get(`${URL}/listing/${id}`);
        // console.log(response.data);
        setListing(response.data);

        // Safely destructure timeShare (ensure timeShare exists in response.data)
        const { timeShare } = response.data || {};

        // Set chart data (assuming response.data contains relevant chart data)
        const chartData = response.data?.chartData || null;
        setChartData(chartData);

        // Truncate content logic here if needed

        // console.log("listingData for date", response.data);
        localStorage.setItem("selectedId", id);
      } catch (error) {
        console.error("Error fetching listing:", error);
      }
    };

    // Ensure token exists before accessing token.isAdmin
    if (token) {
      setAdmin(token.isAdmin);
    }

    // Safely process totalAmount if totalStock.totalAmt exists
    if (totalStock.totalAmt) {
      const numericAmount = Number(totalStock.totalAmt.replace(/[^0-9.-]+/g, ""));
      setTotalAmount(numericAmount);
    }

    fetchListing();
  }, []); // Removed totalStock.totalAmt and totalStock.stockQun if not needed



  const handleExpandClick = () => {
    // Toggle between expanded (1) and collapsed (null) on click
    setExpandedIndex(expandedIndex === 1 ? null : 1);
  };

  const validCoupon = "VENQ500";
  const discountAmount = totalStock.stockQun * 500;
  const propertyParts = listing.propertydescription;
  const handleCouponChange = (e) => {
    setCouponInput(e.target.value);
  };
  // console.log(totalAmount, "number");
  // console.log(totalStock.totalAmt, "str");
  const applyCoupon = () => {
    if (couponInput === validCoupon) {
      // Number((totalStock.totalAmt - discountAmount).replace(/[^0-9.-]+/g, ""))
      const money = Number(totalStock.totalAmt.replace(/[^0-9.-]+/g, ""));
      setTotalAmount(money - discountAmount);

      alert(
        `Coupon applied successfully! Discounted amount: Rs. ${discountAmount}`
      );
    } else {
      alert("Invalid coupon code. Please try again.");
    }
  };
  const tableData = { ...listing };
  // console.log(tableData, "my");
  // console.log(userinvest, "myinvest");
  // console.log(userinvestone, "myinvestnew");

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };
  const handleImageClick = () => {
    setIsFullscreen(!isFullscreen);
  };

  const memoizedChartData = useMemo(() => {
    return chartData ? { labels: chartData.labels, data: chartData.data } : null;
  }, [chartData]);

  const mapstylebig = {
    border: 0,
    width: "100%",
    height: "450px",
    borderRadius: "20px",
    marginRight: "20px",
    backgroundColor: "black",
    cursor: "pointer",
  };
  const imagestylebig = {
    border: 0,
    width: "40%",
    height: "180px",
    borderRadius: "5px",

    marginLeft: "40px",
    backgroundColor: "black",
    cursor: "pointer",
  };
  const mapstylesmall = {
    border: 0,
    width: "100%",
    height: `"150px"`,
    borderRadius: "20px",
    backgroundColor: "black",
    cursor: "pointer",
  };
  const fullscreenStyle = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    zIndex: "1000",
  };
  const fullscreenImageStyle = {
    width: "90%",
    height: "auto",
    cursor: "pointer",
  };
  const handleInvestmentChange = (event) => {
    setInvestment(Number(event.target.value));
  };
  const handleUserInvestChange = (event) => {
    setUserInvest(Number(event.target.value));
  };
  const handleUserInvestChangeOne = (event) => {
    setUserInvestOne(Number(event.target.value));
    localStorage.setItem("investmentAmount", Number(event.target.value));
  };
  const handleInterestChange = (event) => {
    setIntetestAmount(Number(event.target.value));
  };
  const handlePropertyValueGrowthChange = (event) => {
    setPropertyValueGrowth(Number(event.target.value));
  };
  const handleRentalYieldChange = (event) => {
    setRentalYield(Number(event.target.value));
  };
  const handleTwo = () => {
    setQuantity(quantity + 2000);
  };
  const cols = [5, 2.5, 2.5, 5];
  const rows = [1];
  const handleInterest = async (e) => {
    e.preventDefault();

    setOpen(false); // Close any modal if applicable
    try {
      // Prepare the data to be sent to the backend
      const data = {
        type: selectedValue === "allotment" ? 0 : 1, // Adjust type based on selection
        name: token.name,
        email: token.email,
        phone: token.phone,
        property: listing.properyheading,
        image: listing.images[0],
        amount: interestamount,
      };

      // Send a POST request to add investment data to the backend
      await axios.post(`${URL}/investment/add`, data);
      console.log("Investment added successfully");

    } catch (error) {
      console.error("Error saving investment:", error);
    }
  };
  const handleRequest = async (tp) => {
    try {
      const data = {
        type: { selectedValue } == "allotment" ? 0 : 1,
        name: token.name,
        email: token.email,
        phone: token.phone,
        property: listing.properyheading,
        image: listing.images[0],
        amount: userinvestone,
      };
      const ans = await axios.post(`${URL}/investment/add`, data);
      if (ans) {
        console.log(ans);
        if (tp == 1) {
          navigate("/cart");
        }

        setTimeout(() => {
          navigate("/dashboard/cart");
        }, 2000);
        setOpenInv(false);
      } else {
        toast.warning("failed response");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleFive = () => {
    setQuantity(quantity + 5000);
  };
  const handleTen = () => {
    setQuantity(quantity + 10000);
  };
  const handleLocation = () => {
    const url = `https://goo.gl/maps/UvmtjH8XZJyCntSF6`; // Specify the latitude and longitude of the location
    window.open(url, "_blank");
  };
  const handleDownload = (fileName, originalFileName) => {
    const link = document.createElement("a");
    link.href = fileName;
    link.setAttribute("download", originalFileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const [isAdmin, setAdmin] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const baseStyle = isFullscreen ? fullscreenImageStyle : imagestylebig;
  const hoverStyle1 = {
    ...baseStyle,
    transition: "transform 0.3s ease",
    transform: isHovered1 ? "scale(1.05)" : "scale(1)",
  };
  const hoverStyle2 = {
    ...baseStyle,
    transition: "transform 0.3s ease",
    transform: isHovered2 ? "scale(1.05)" : "scale(1)",
  };
  const [isEditMode, setIsEditMode] = useState(false);
  const navigate = useNavigate();
  const rowarr = [5, 4, 4, 2.5];
  const colarr = [5, 3, 2, 5];
  const handleEditClick = () => {
    setIsEditMode(true);
    navigate(`/${listing._id}/edit`);
  };
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [showInvestComponent, setShowInvestComponent] = useState(false);
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const [openinv, setOpenInv] = useState(
    location?.state?.clicked ? true : false
  );
  const closeModalinv = () => setOpenInv(false);
  const [phone, setPhone] = useState("");
  const ps = `/dashboard/properties/view/photos/${id}`;
  const handlePopopRequest = () => {
    setShowInvestComponent(true);
    setUserInvestOne(Number(totalStock.totalAmt.replace(/[^0-9.-]+/g, "")));
    localStorage.setItem(
      "portfolioAmount",
      Number(totalStock.totalAmt.replace(/[^0-9.-]+/g, ""))
    );
    localStorage.setItem("units", totalStock.stockQun);
    console.log(
      Number(totalStock.totalAmt.replace(/[^0-9.-]+/g, "")),
      "hello oak"
    );
    setData(Number(totalStock.totalAmt.replace(/[^0-9.-]+/g, "")));
  };
  const closeInvestComponent = () => {
    setShowInvestComponent(false);
  };


  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [activeBoxIndex, setActiveBoxIndex] = useState(null); // Track which box is expanded for the new component
  const [projectoverview, setProjectoverview] = useState("project-overview");
  const [locationTab, setLocationTab] = useState("school");

  const terms = [
    {
      label: "Security type: Common Stock shares",
      description: "Common stock shares represent ownership in the company.",
    },
    {
      label: "Price per share: $7.35",
      description: "The current market price for one share of the stock.",
    },
    {
      label: "Funding goal: $50K / $2.5M / $5M",
      description: "The total amount of funding the project aims to raise.",
    },
    {
      label: "Minimum investment: $500",
      description: "The smallest amount of money you can invest in this deal.",
    },
    {
      label: "Maximum investment: $124K",
      description: "The largest amount of money you can invest in this deal.",
    },
    {
      label: "Deadline: November 9, 2024",
      description: "The last date to invest in this opportunity.",
    },
    {
      label: "How it works",
      description: "An overview of the investment process and terms.",
    },
  ];

  const usdFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',
  });

  if (!listing || !listing.timeShare) {
    return <div>Loading...</div>; // Loading state if listing is not yet available
  }

  const offers = listing.timeShare.offers || []; // Default to an empty array

  const investmentAmount = 5000;

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };



  const toggleBox = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index); // Toggle between open and closed
  };

  return (
    <div
      style={{
        opacity: openinv ? "0.25" : "1.0",
        backgroundColor: "#f5f5f5",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Box style={{ padding: "20px", backgroundColor: "white" }}>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box style={{ display: "flex" }}>
            <PropertyLink to="/dashboard/properties">
              <Typography
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontSize: "15px",
                  fontWeight: "600",
                }}
              >
                Properties
              </Typography>
            </PropertyLink>

            {arrow}
            <Typography
              style={{
                color: "#a3abba",
                marginLeft: "10px",
                fontFamily: "Arial, sans-serif",
                fontSize: "15px",
              }}
            >
              {listing.properyheading}
            </Typography>
          </Box>

          <Box style={{ marginBottom: "20px" }}>
            {!isSmallScreen && (
              <Bookmark onClick={() => setClicked(!clicked)}>
                {clicked === true ? (
                  <BookmarkIcon style={{ color: "#0170dc" }} />
                ) : (
                  <BookmarkBorderIcon />
                )}
                <Typography
                  style={{
                    paddingLeft: "10px",
                    fontFamily: "Arial, sans-serif",
                    fontSize: "18px",
                  }}
                >
                  Bookmark
                </Typography>
              </Bookmark>
            )}
          </Box>
        </Box>
        <Box
  style={{
    display: "flex",
    flexDirection: isSmallScreen ? "column" : "row", // Switch layout based on screen size
    alignItems: "center", // Align items at the start of the container
    justifyContent: "center",
    gap: "20px", // Add spacing between the boxes
    borderRadius: "20px",
    backgroundColor: "white",
  }}
>
  {/* Heading Section */}
  <Box style={{ flex: 1,flexBasis: "50%", marginLeft: "20px" }}>
    <Box>
      <Typography
        style={{
          fontFamily: "Arial, sans-serif",
          fontWeight: 700,
          color: "rgb(70, 59, 59)",
          fontSize: "30px",
          width: "100%",
          paddingBottom: "10px",
        }}
      >
        {listing.properyheading}
      </Typography>
    </Box>
    <Box
      style={{
        display: "flex",
        paddingBottom: "20px",
      }}
    >
      {listing.propertydescription ? (
        listing.propertydescription
          .split("|")
          .map((part, index) => (
            <Box key={index} sx={{
              margin: "0 10px",
              borderRadius: "8px",
              backgroundColor: "grey.200", // Use Material-UI theme palette
            }}>
              <SubTitle>{part.trim()}</SubTitle>
            </Box>
          ))
      ) : (
        <SubTitle>No property description available</SubTitle>
      )}
    </Box>
    <Divider/>
    <Box style={{ padding: "10px 0" }}>
                      {listing && listing.specs && (
                        <Box
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(2, 1fr)", // 2 equal-width columns
                          gridTemplateRows: "repeat(2, 1fr)", // Ensures both rows are of equal height
                          gap: "20px",
                          width: "100%",
                          height: "100%",
                          fontFamily: "Bebas Neue, sans-serif",
                        }}
                      >
                        {listing.specs.map((listing_content, index) => (
                          <Box
                            key={index}
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              backgroundColor: index === 0 ? "#244682" : index === 1 ? "#38814E" : index === 2 ? "#4BAC8A" : "#47A8A3",
                              fontWeight: "bold",
                              borderRadius: "18px",
                              height: "100%", // Ensures the box takes up the full height of the grid cell
                              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                            }}
                          >
                            <Box
                              style={{
                                display: "flex",
                                width: "100%",
                                height: "100%",
                              }}
                            >
                              {/* Text Container (80%) */}
                              <Box
                                style={{
                                  flex: "80%",
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "center",
                                  padding: listing_content.specssubtitle !== "" ? "20px 0px 10px 20px" : "15px 0px 10px 20px" ,
                                }}
                              >
                                  <PropertyHeadingSmall
                                    style={{
                                      textTransform: "uppercase",
                                      color: "#EFEFEF", 
                                      lineHeight: "0.5"
                                    }}
                                  >
                                    {listing_content.specstitle}
                                  </PropertyHeadingSmall>
                                  {listing_content.specssubtitle !== "" && (<PropertySubHeading
                                    style={{
                                      color: "#EFEFEF", 
                                      fontSize: "18px"
                                    }}
                                  >
                                    {listing_content.specssubtitle}
                                  </PropertySubHeading>)}
                              </Box>
                      
                              {/* Logo Container (30%) */}
                              <Box
                                style={{
                                  flex: "20%",
                                  display: "flex",
                                  justifyContent: "center", // Center the logo
                                  alignItems: "center", // Center the logo vertically
                                  paddingRight: "10px", // Optional, adjust spacing
                                }}
                              >
                                <i class="fa-solid fa-location-dot" style={{color: "white", scale: "2.5"}}></i>
                              </Box>
                            </Box>
                          </Box>
                        ))}
                      </Box>                      
                      
                      )}
                    </Box>
                    {!isSmallScreen && (
                      <>
                      <Divider/>
                    <Box style={{ display: "flex",  }}>
              <Box
                style={{
                  textAlign: "center",
                  paddingBottom: "0px",

                  marginLeft: "3%",
                  marginTop: "5%",
                  // marginRight: "3%",
                }}
              >
                <Typography
                  style={{
                    fontSize: "16px",
                    color: "rgb(112,111,111)",
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  Minimum Investment
                </Typography>
                <Typography
                  style={{
                    fontSize: "24px",
                    color: "#0170dc",
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  INR{" "}
                  <b style={{ fontSize: "32px" }}>{listing.propertyprice}</b>
                </Typography>
                <button
                  style={{
                    marginRight: "auto",
                    marginTop: "10%",
                    width: "140px",
                  }}
                  onClick={() => setOpen((o) => !o)}
                >
                  Invest
                </button>
                <Typography style={{
                    fontSize: "16px",
                    color: "rgb(112,111,111)",
                    fontFamily: "Arial, sans-serif",
                    paddingTop: "10px"
                  }}>
                 <p>Apply with only ₹{0.05 * parseInt(listing.propertyprice.replace(/,/g, ''))}</p>
                </Typography>
              </Box>
              <div
                style={{
                  marginTop: "14%",

                  paddingLeft: "8%",
                }}
              >
                <ProgressBar
                  completed={95}
                  isLabelVisible={false}
                  className="wrapper"
                  bgColor="#0170dc"
                  height="0.6rem"
                  width="112%"
                  // labelClassName="label"
                />

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between", // Distribute space between the two items
                    margin: "1.5rem 0",
                    width: "112%",
                  }}
                >
                  <Typography
                    style={{
                      marginRight: "30px",
                      fontSize: "16px",

                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    <span
                      style={{
                        color: "#50B487",
                        fontSize: "18px",

                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      46
                    </span>{" "}
                    investors
                  </Typography>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={clock}
                      style={{ marginRight: "1rem" }}
                      alt="clock"
                    />
                    <span style={{ color: "red" }}>Closed on Sep 7, 2024</span>
                  </div>
                </div>
              </div>
            </Box>
            </>)}
  </Box>

  {/* Images Section */}
  <Box
    style={{
      display: "flex",
      flexBasis: "50%",
      alignItems: isSmallScreen ? "center" : "flex-end",
      justifyContent: "center",
      alignContent: "center",
      flexDirection: "column",
      position: "relative",
      margin: "20px",
      borderRadius: "20px",
    }}
  >
    {isSmallScreen ? (
      <Grid item xs={2} sm={4} md={4}>
        <Property sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia>
              <Carousel showIndicators={false} showThumbs={false}>
                {listing.images &&
                  listing.images.slice(0, 4).map((item, index) => (
                    <img src={item} alt="" height={240} />
                  ))}
              </Carousel>
            </CardMedia>
          </CardActionArea>
        </Property>
      </Grid>
    ) : (
      <ImageList
        sx={{ width: "100%", height: 500 }}
        variant="quilted"
        cols={1}
      >
              <img
                style={{
                  borderRadius: "10px",
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
                }}
                src={`${listing.images[0]}?w=164&h=164&fit=crop&auto=format`}
                alt={""}
                loading="lazy"
              />
      </ImageList>
    )}
    <Box
      style={{
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        margin: "10px 0",
        borderRadius: "50px",
        position: "absolute",
        bottom: -25,
        right: 20,
        border: "0.2px solid #e9e9eb",
      }}
    >
      <PhotoLink to={ps}>
        <SmallBoxes style={{ margin: "0 15px" }}>
          <Box style={{ width: "40px", height: "40px", padding: "7px" }}>
            <svg
              viewBox="0 0 24 24"
              focusable="false"
              className="chakra-icon css-pawapt"
              aria-label="gallery"
            >
              <g
                fill="none"
                stroke="#0170dc"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19.9969 21H4.00293C2.89793 21 2.00293 20.105 2.00293 19V5C2.00293 3.895 2.89793 3 4.00293 3H19.9969C21.1019 3 21.9969 3.895 21.9969 5V19C21.9969 20.105 21.1009 21 19.9969 21Z M9.41422 7.58579C10.1953 8.36684 10.1953 9.63317 9.41422 10.4142C8.63317 11.1953 7.36684 11.1953 6.58579 10.4142C5.80474 9.63317 5.80474 8.36684 6.58579 7.58579C7.36684 6.80474 8.63317 6.80474 9.41422 7.58579 M22 15.9999L17.781 12.6249C17.35 12.2799 16.72 12.3499 16.375 12.7809L13.039 16.9509C12.694 17.3819 12.065 17.4519 11.633 17.1069L9.765 15.6119C9.34 15.2719 8.721 15.3339 8.372 15.7529L4 20.9999"></path>
              </g>
            </svg>
          </Box>
          <Extra>
            {listing.images ? listing.images.length : 8} photos
          </Extra>
        </SmallBoxes>
      </PhotoLink>
      <Divider
        orientation="vertical"
        style={{ backgroundColor: "rgb(112,111,111)" }}
        flexItem
        variant="middle"
      />
      <SmallBoxes style={{ margin: "0 15px 0 5px" }}>
        <Box style={{ width: "40px", height: "40px", padding: "7px" }}>
          <svg
            viewBox="0 0 24 24"
            focusable="false"
            className="chakra-icon css-pawapt"
            aria-label="virtual-tour"
          >
            <g
              fill="none"
              stroke="#0170dc"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 16.0412V7.95921C21 7.24421 20.619 6.58421 20 6.22721L13 2.18621C12.381 1.82921 11.619 1.82921 11 2.18621L4 6.22621C3.381 6.58421 3 7.24421 3 7.95921V16.0422C3 16.7572 3.381 17.4172 4 17.7742L11 21.8152C11.619 22.1722 12.381 22.1722 13 21.8152L20 17.7742C20.619 17.4162 21 16.7562 21 16.0412Z M12 22.08V12 M12 12L20.73 6.95996 M3.26953 6.95996L11.9995 12"></path>
            </g>
          </svg>
        </Box>
        <Extra
          onClick={() => {
            window.location.href = listing.tourlink;
          }}
        >
          Virtual tour
        </Extra>
      </SmallBoxes>
    </Box>
  </Box>
</Box>
        {isSmallScreen && (
          <Grid
            item
            xs={12}
            style={{ position: "relative", marginTop: "20px" }}
          >
            <Pricing>
              <Box
                style={{
                  backgroundColor: "white",
                  borderRadius: "20px",
                  marginTop: "10px",
                  padding: "8px",
                }}
              >
                <Box style={{ textAlign: "center", paddingBottom: "10px" }}>
                  <Typography
                    style={{
                      fontSize: "18px",
                      color: "rgb(112,111,111)",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Property price
                  </Typography>
                  <Typography
                    style={{
                      fontSize: "24px",
                      color: "#44475b",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    INR{" "}
                    <b style={{ fontSize: "32px" }}>{listing.propertyprice}</b>
                  </Typography>
                </Box>

                <Box
                  style={{
                    backgroundColor: "#f6f7f9",
                    padding: "10px",
                    borderRadius: "20px",
                  }}
                >
                  <ReturnsBox style={{ marginTop: "1rem" }}>
                    <Box style={{ display: "flex", justifyContent: "space-between", padding: "1rem 0" }}>
                      {/* Tokens */}
                      <Box style={{ flex: 1, textAlign: "center" }}>
                        <Box style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", color: "#44475B" }}>Tokens</Box>
                        <Box style={{ color: "#00B386", fontWeight: "bold", fontSize: "16px", marginTop: "10px" }}>
                          {listing.tokens || "N/A"} {/* Fallback if data is missing */}
                        </Box>
                      </Box>

                      {/* Vertical Divider */}
                      <Box style={{ width: "1px", backgroundColor: "black", height: "auto", margin: "0 10px" }} />

                      {/* Est. Yields */}
                      <Box style={{ flex: 1, textAlign: "center" }}>
                        <Box style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", color: "#44475B" }}>Est. Yields</Box>
                        <Box style={{ color: "#00B386", fontWeight: "bold", fontSize: "16px", marginTop: "10px" }}>
                          {listing.estimatedYields || "N/A"} {/* Fallback if data is missing */}
                        </Box>
                      </Box>

                      {/* Vertical Divider */}
                      <Box style={{ width: "1px", backgroundColor: "black", height: "auto", margin: "0 10px" }} />

                      {/* Target APR */}
                      <Box style={{ flex: 1, textAlign: "center" }}>
                        <Box style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", color: "#44475B" }}>Target ARR</Box>
                        <Box style={{ color: "#00B386", fontWeight: "bold", fontSize: "16px", marginTop: "10px" }}>
                          {listing.targetAPR || "N/A"} {/* Fallback if data is missing */}
                        </Box>
                      </Box>

                      {/* Vertical Divider */}
                      <Box style={{ width: "1px", backgroundColor: "black", height: "auto", margin: "0 10px" }} />

                      {/* Potential Gain */}
                      <Box style={{ flex: 1, textAlign: "center" }}>
                        <Box style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", color: "#44475B" }}>Est. Gain</Box>
                        <Box style={{ color: "#00B386", fontWeight: "bold", fontSize: "16px", marginTop: "10px" }}>
                          {listing.potentialGain || "N/A"} {/* Fallback if data is missing */}
                        </Box>
                      </Box>
                    </Box>
                  </ReturnsBox>
                </Box>
              </Box>
            </Pricing>
          </Grid>
        )}
        </Box>
        <Navbar/>
        <Box style={{ padding: "20px" }}>
          
        <Box style={{ padding: "10px 0", margin: "10px 0", backgroundColor: "#f5f5f5" }}>
          <Grid container spacing={2}>
          <Grid
      item
      xs={12}
      sm={8}
      style={{
        // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", 
        padding: "16px",
        borderRadius: "8px", 
        // backgroundColor: "#f5f5f5", 
      }}
    >
              {/* property-overview and property-financial buttons */}
                {/* <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    // marginBottom: "20px",
                  }}
                >
                  <Button
                    onClick={() => setActiveTab("overview")}
                    style={{
                      width: "50%",
                      borderBottom:
                        activeTab === "overview" ? "2px solid black" : "none",
                      marginRight: "10px",
                    }}
                  >
                    Property Overview
                  </Button>
                  <Button
                    style={{
                      width: "50%",
                      borderBottom:
                        activeTab === "financial" ? "2px solid black" : "none",
                    }}
                    onClick={() => setActiveTab("financial")}
                  >
                    Property Financial
                  </Button>
                </Box>
                <Divider /> */}
                    <Box id="performance" style={{ paddingBottom: "20px",padding: "20px", backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 5px 8px 0 rgba(224, 224, 224)", }}>
                    <Box
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        justifyContent: "start",
                        marginTop: "20px",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "Arial, sans-serif",
                          fontWeight: 700,
                          color: "#44575B",
                          fontSize: "25px",
                        }}
                      >
                        33.16%
                      </p>
                      <p
                        style={{
                          fontFamily: "Arial, sans-serif",
                          fontWeight: 600,
                          color: "#a1a3ad",
                          fontSize: "13px",
                        }}
                      >
                      5Y annualised
                      </p>
                    </Box>
                    <Box
                      style={{
                        display: "flex",
                        gap: "5px",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "Arial, sans-serif",
                          fontWeight: 600,
                          color: "#50B487",
                          fontSize: "13px",
                        }}
                      >
                        ₹750
                      </p>
                      <p
                        style={{
                          fontFamily: "Arial, sans-serif",
                          fontWeight: 600,
                          color: "#a1a3ad",
                          fontSize: "13px",
                        }}
                      >
                     current price/sqft 
                      </p>
                    </Box>
                    <Box>
                      <div>
                        {/* Other components or JSX here */}
                        {memoizedChartData && <LineChart data={memoizedChartData} />}
                      </div>
                    </Box>
                    </Box>
                    <Box
                    id="about-project"
                    style={{
                      paddingBottom: "20px",
                      marginTop: "15px",
                      padding: "20px",
                      backgroundColor: "#fff",
                      borderRadius: "8px",
                      boxShadow: "0 5px 8px 0 rgba(224, 224, 224)",
                    }}
                  >
                    <Typography
                      style={{
                        fontSize: "18px",
                        fontWeight: 700,
                        color: "rgb(51, 51, 52)",
                        fontFamily: "Arial, sans-serif",
                        paddingBottom: "20px",
                      }}
                    >
                      About {listing.properyheading}
                    </Typography>
                    <Divider />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        marginTop: "20px",
                        gap: "10px",
                      }}
                    >
                      <Box
                        onClick={() => setProjectoverview("project-overview")}
                        style={{
                          padding: "10px 20px 10px 20px",
                          color: projectoverview === "project-overview" ? "white" : "black",
                          backgroundColor: projectoverview === "project-overview" ? "black" : "white",
                          borderRadius: "8px",
                          boxShadow: "0 5px 8px 0 rgba(224, 224, 224)",
                          cursor: "pointer",
                        }}
                      >
                        Project Overview
                      </Box>
                      <Box
                        onClick={() => setProjectoverview("why-invest")}
                        style={{
                          padding: "10px 20px 10px 20px",
                          color: projectoverview === "why-invest" ? "white" : "black",
                          backgroundColor: projectoverview === "why-invest" ? "black" : "#fff",
                          borderRadius: "8px",
                          boxShadow: "0 5px 8px 0 rgba(224, 224, 224)",
                          cursor: "pointer",
                        }}
                      >
                        Why Invest?
                      </Box>
                      <Box
                        onClick={() => setProjectoverview("about-builder")}
                        style={{
                          padding: "10px 20px 10px 20px",
                          color: projectoverview === "about-builder" ? "white" : "black",
                          backgroundColor: projectoverview === "about-builder" ? "black" : "white",
                          borderRadius: "8px",
                          boxShadow: "0 5px 8px 0 rgba(224, 224, 224)",
                          cursor: "pointer",
                        }}
                      >
                        About Builder
                      </Box>
                    </div>
                    <Typography
                      style={{
                        fontFamily: "Arial, sans-serif",
                        fontSize: "14px",
                        color: "rgb(112,111,111)",
                        marginTop: "20px",
                      }}
                    >
                      
                      {projectoverview === "about-builder" && (
                        <>
                        <Box style={{display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "20px"}}>
                        <Box>
                        <img
                            src="https://static.squareyards.com/resources/images/developerlogo/emaar-401.jpg?aio=w-89;h-89;crop;"
                            alt="builder logo"
                            style={{ width: "100px", height: "100px", borderRadius: "50%" }}
                          />
                        </Box>
                        <Box>
                          <Typography style={{fontSize: "12px", color: "#666"}}>Total Projects</Typography>
                          100
                        </Box>
                        <Box>
                            <Typography style={{fontSize: "12px", color: "#666"}}>Experience</Typography>
                            14 years
                        </Box>
                      </Box>
                      <Box style={{paddingTop: "20px"}}>
                      <div  style={{fontFamily: "Arial, sans-serif", color: "#666", fontSize: "14px", lineHeight: "24px" }}>
                          {listing.propertyoverview &&
                            listing.propertyoverview.length > maxWords && (
                              <div style={{ marginBottom: "10px" }}>
                                {listing.propertyoverview
                                  .split(" ")
                                  .slice(0, maxWords)
                                  .join(" ")}
                                <div hidden={!showFullContent}>
                                  {listing.propertyoverview
                                    .split(" ")
                                    .slice(maxWords, listing.propertyoverview.length)
                                    .join(" ")}
                                </div>
                              </div>
                            )}
                            <MoreButton
                        onClick={() => {
                          setShowFullContent(!showFullContent);
                        }}
                      >
                        {showFullContent ? "Show less" : "Show more"}
                      </MoreButton>
                        </div>
                      </Box>
                      </>
                      )}
                      {projectoverview === "project-overview" && (
                        <div  style={{fontFamily: "Arial, sans-serif", color: "#666", fontSize: "14px", lineHeight: "24px" }}>
                          {listing.propertyoverview &&
                            listing.propertyoverview.length > maxWords && (
                              <div style={{ marginBottom: "10px" }}>
                                {listing.propertyoverview
                                  .split(" ")
                                  .slice(0, maxWords)
                                  .join(" ")}
                                <div hidden={!showFullContent}>
                                  {listing.propertyoverview
                                    .split(" ")
                                    .slice(maxWords, listing.propertyoverview.length)
                                    .join(" ")}
                                </div>
                              </div>
                            )}
                            <MoreButton
                        onClick={() => {
                          setShowFullContent(!showFullContent);
                        }}
                      >
                        {showFullContent ? "Show less" : "Show more"}
                      </MoreButton>
                        </div>
                      )}
                      {projectoverview === "why-invest" && (
                        <div>
                        <Typography
                          style={{
                            padding: "0px",
                            fontFamily: "Arial, sans-serif",
                            fontSize: "14px", lineHeight: "24px"
                          }}
                        >
                          <ul>
                            {listing.locationdescription
                              .split(".")
                              .map((sentence, index) =>
                                sentence.trim() ? (
                                  <li key={index} style={{ marginBottom: "10px" }}>
                                    {sentence.trim()}.
                                  </li>
                                ) : null
                              )}
                          </ul>
                        </Typography>
                      </div>
                      )}
                    </Typography>
                  </Box>
                    <Box id="return-calculator" style={{ paddingBottom: "20px",marginTop: "15px",padding: "20px", backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 5px 8px 0 rgba(224, 224, 224)", }}>
                    <Typography
                        style={{
                          fontSize: "18px",
                          fontWeight: 700,
                          color: "rgb(51, 51, 52)",
                          fontFamily: "Arial, sans-serif",
                          paddingBottom: "20px",
                          paddingTop: "20px",
                        }}
                      >
                        Return Calculator
                      </Typography>
                      <Box
                          style={{
                            // backgroundColor: "red",
                            // marginTop: "30px",
                            marginBottom: "10px",
                            paddingTop: "20px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "start",
                            border: "0.2px solid #e9e9eb",
                            borderRadius: "10px",
                            fontFamily: "Arial, sans-serif",
                          }}
                        >
                          <Return_cal minAmountToInvest={listing.minAmountToInvest} />
                        </Box>

                        <Box
                          style={{
                            backgroundColor: "#f6f7f9",
                            padding: "10px",
                            borderRadius: "10px",
                            margin: "0 30px 10px 30px",
                          }}
                        >
                          <ThemeProvider theme={theme}>
                            <Typography
                              style={{
                                fontSize: "14px",
                                fontFamily: "Arial, sans-serif",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              Default values are based on property numbers
                              <Tooltip title={info1} placement="top">
                                <Typography
                                  style={{
                                    border: "1px solid rgb(112,111,111)",
                                    color: "rgb(112,111,111)",
                                    display: "inline",
                                    cursor: "pointer",
                                    padding: "0px 6px",
                                    marginLeft: "5px",
                                    borderRadius: "50%",
                                    fontSize: "10px",
                                  }}
                                >
                                  i
                                </Typography>
                              </Tooltip>
                            </Typography>
                          </ThemeProvider>
                        </Box>
                    </Box>
  <Box
  id="amenities"
  style={{
    paddingBottom: "20px",
    marginTop: "15px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 5px 8px 0 rgba(224, 224, 224)",
  }}
>
  <Typography
    style={{
      fontSize: "18px",
      fontWeight: 700,
      color: "rgb(51, 51, 52)",
      fontFamily: "Arial, sans-serif",
      paddingBottom: "20px",
    }}
  >
    {listing.properyheading} Amenities
  </Typography>
  <Divider />

  {Object.entries(categorizedAmenities).map(([category, items]) => (
    <Box
      key={category}
      style={{
        marginTop: "20px",
        padding: "10px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        border: "1px solid #e9e9eb",
      }}
    >
      <Button
        onClick={() => toggleCategory(category)}
        style={{
          fontSize: "16px",
          fontWeight: "bold",
          textTransform: "none",
          color: "#44475b",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
        endIcon={
          expandedCategories[category] ? (
            <ExpandMoreIcon />
          ) : (
            <ExpandMoreIcon style={{ transform: "rotate(180deg)" }} />
          )
        }
      >
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </Button>
      <Collapse in={expandedCategories[category]}>
        <Box
          style={{
            marginTop: "15px",
            display: "flex",
            flexDirection: isSmallScreen ? "column" : "row",
            flexWrap: "wrap",
            padding: "10px",
          }}
        >
          {items.map((item, index) => (
            <Box
              key={index}
              style={{
                flex: "0 0 50%",
                boxSizing: "border-box",
                padding: "10px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <i
                className={`fa-solid ${
                  item === "Enviroment friendly"
                    ? "fa-seedling"
                    : item === "Luxury Project"
                    ? "fa-crown"
                    : item === "Gym"
                    ? "fa-dumbbell"
                    : item === "Parking"
                    ? "fa-square-parking"
                    : item === "Clubhouse"
                    ? "fa-champagne-glasses"
                    : item === "24/7 Security"
                    ? "fa-user-shield"
                    : item === "Swimming Pool"
                    ? "fa-person-swimming"
                    : ""
                }`}
                style={{
                  fontSize: "20px",
                  marginRight: "10px",
                  color: "#44475b",
                }}
              ></i>
              <Typography
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontSize: "16px",
                  color: "rgb(112,111,111)",
                }}
              >
                {item}
              </Typography>
            </Box>
          ))}
        </Box>
      </Collapse>
    </Box>
  ))}
</Box>


                    <Box id="documents"  style={{ paddingBottom: "20px",marginTop: "15px",padding: "20px", backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 5px 8px 0 rgba(224, 224, 224)", }}>
                      <Typography
                        style={{
                          fontSize: "18px",
                          fontWeight: 700,
                          color: "rgb(51, 51, 52)",
                          fontFamily: "Arial, sans-serif",
                          paddingBottom: "20px"
                        }}
                      >
                        Documents ({listing.documents?.length})
                      </Typography>
                      <Divider/>
                      {listing &&
                        listing.documents &&
                        listing.documents.map((document) => (
                          <Box>
                            <DownloadBox
                              onClick={() =>
                                handleDownload(document.dlink, document.dname)
                              }
                              style={{marginTop: "20px"}}
                            >
                              <TitleBox>
                                <IconBox>
                                  <svg
                                    viewBox="0 0 24 24"
                                    focusable="false"
                                    class="chakra-icon css-768dc"
                                    aria-label="file-excel"
                                  >
                                    <g
                                      fill="none"
                                      fill-rule="nonzero"
                                      stroke="currentColor"
                                      stroke-width="1.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    >
                                      <g>
                                        <path d="M18.414 6.414L15.586 3.586C15.211 3.211 14.702 3 14.172 3H7C5.895 3 5 3.895 5 5V19C5 20.105 5.895 21 7 21H17C18.105 21 19 20.105 19 19V7.828C19 7.298 18.789 6.789 18.414 6.414V6.414Z"></path>
                                        <path d="M9 12H15C15.552 12 16 12.448 16 13V17C16 17.552 15.552 18 15 18H9C8.448 18 8 17.552 8 17V13C8 12.448 8.448 12 9 12Z"></path>
                                        <path d="M16 15H8 M13 12V18 M19 8H15C14.448 8 14 7.552 14 7V3"></path>
                                      </g>
                                    </g>
                                  </svg>
                                </IconBox>

                                <Typography>{document.dname}</Typography>
                              </TitleBox>

                              <DownloadIcon>
                                <FileDownloadOutlinedIcon
                                  style={{ color: "#0170dc" }}
                                />
                              </DownloadIcon>
                            </DownloadBox>
                          </Box>
                        ))}
                    </Box>
                    {listing.rera !== "" && (<Box id="rera"  style={{ paddingBottom: "20px",marginTop: "15px",padding: "20px", backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 5px 8px 0 rgba(224, 224, 224)", }}>
                      <Typography
                        style={{
                          fontSize: "18px",
                          fontWeight: 700,
                          color: "rgb(51, 51, 52)",
                          fontFamily: "Arial, sans-serif",
                          paddingBottom: "20px",
                        }}
                      >
                        Rera Details
                      </Typography>
                      <Divider/>
                          <Box style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-around",
                          flexDirection: "column", // Adjust layout based on screen size
                          marginTop: "20px"
                        }}>
                            <Box style={{ paddingBottom: "20px", padding: "20px", backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 5px 8px 0 rgba(224, 224, 224)", width: "100%" }}>
                              <p style={{fontWeight:700 }}>{listing.rera}</p>
                              <p style={{fontSize: 14}}>Name</p>
                            </Box>
                          </Box>
                    </Box>)}
                    <Box id="financials" style={{ paddingBottom: "20px",marginTop: "15px",padding: "20px", backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 5px 8px 0 rgba(224, 224, 224)", }}>
                    <Typography
                        style={{
                          fontSize: "18px",
                          fontWeight: 700,
                          color: "rgb(51, 51, 52)",
                          fontFamily: "Arial, sans-serif",
                          paddingBottom: "20px",
                          paddingTop: "20px",
                        }}
                      >
                        Financials
                      </Typography>
                    <Box style={{ paddingBottom: "20px" }}>
                        <Grid container spacing={5}>
                          <Grid item xs={12} md={6}>
                            <Box style={{ padding: "10px 0" }}>
                              <FinanceHeading>Property cost</FinanceHeading>

                              <Box>
                                <Box
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "10px 0",
                                  }}
                                >
                                  <FinanceSubHeading>
                                    Property price
                                  </FinanceSubHeading>
                                  <FinanceAmount>
                                    INR {listing.propertypricen}

                                  </FinanceAmount>
                                </Box>

                                <Box
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "5px 0",
                                  }}
                                >
                                  <FinanceSubHeading>
                                    Transaction costs
                                  </FinanceSubHeading>
                                  <FinanceAmount>
                                    INR {listing.transactioncost}
                                  </FinanceAmount>
                                </Box>

                                <Box
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "10px 0",
                                  }}
                                >
                                  <FinanceSubHeading>
                                    Govt. Fees
                                  </FinanceSubHeading>
                                  <FinanceAmount>
                                    INR {listing.venqfee}
                                  </FinanceAmount>
                                </Box>
                              </Box>

                              <Divider />

                              <Box>
                                <Box
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "5px 0",
                                  }}
                                >
                                  <FinanceSubHeading>
                                    Investment cost
                                  </FinanceSubHeading>
                                  <FinanceAmount style={{ color: "#0170dc" }}>
                                  INR {(parseInt(listing.transactioncost.replace(/,/g, '')) +  parseInt(listing.venqfee.replace(/,/g, '')) + parseInt(listing.propertypricen.replace(/,/g, ''))).toLocaleString('en-IN')}
                                  </FinanceAmount>
                                </Box>
                              </Box>
                            </Box>
                          </Grid>

                          <Grid item xs={12} md={6}>
                            <Box style={{ padding: "0px 0" }}>
                              <FinanceHeading>
                                Rental income (Year 1)
                              </FinanceHeading>

                              <Box>
                                <Box
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "10px 0",
                                  }}
                                >
                                  <FinanceSubHeading>
                                    Projected gross rent
                                  </FinanceSubHeading>
                                  <FinanceAmount>
                                    INR {listing.projectedgrossrent}
                                  </FinanceAmount>
                                </Box>

                                <Box
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "10px 0",
                                  }}
                                >
                                  <FinanceSubHeading>
                                    Service charges
                                  </FinanceSubHeading>
                                  <FinanceAmount>
                                    INR {listing.servicecharges}
                                  </FinanceAmount>
                                </Box>

                                <Box
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "10px 0",
                                  }}
                                >
                                  <FinanceSubHeading>
                                    Mgmt. and maintenance
                                  </FinanceSubHeading>
                                  <FinanceAmount>
                                    INR {listing.maintainencefee}
                                  </FinanceAmount>
                                </Box>
                              </Box>

                              <Divider />

                              <Box>
                                <Box
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "10px 0",
                                  }}
                                >
                                  <FinanceSubHeading>
                                    Annual net income
                                  </FinanceSubHeading>
                                  <FinanceAmount style={{ color: "#0170dc" }}>
                                    INR {listing.annualnetincome}
                                  </FinanceAmount>
                                </Box>
                              </Box>

                              <Box
                                style={{
                                  backgroundColor: "#f6f7f9",
                                  padding: "10px",
                                  borderRadius: "10px",
                                }}
                              >
                                <ThemeProvider theme={theme}>
                                  <Typography
                                    style={{
                                      fontSize: "13px",
                                      fontFamily: "Arial, sans-serif",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                    }}
                                  >
                                    This is an estimate for the 1st year of
                                    ownership
                                    <Tooltip title={info1} placement="top">
                                      <Typography
                                        style={{
                                          border: "1px solid rgb(112,111,111)",
                                          color: "rgb(112,111,111)",
                                          display: "inline",
                                          cursor: "pointer",
                                          padding: "0px 6px",
                                          marginLeft: "5px",
                                          borderRadius: "50%",
                                          fontSize: "10px",
                                        }}
                                      >
                                        i
                                      </Typography>
                                    </Tooltip>
                                  </Typography>
                                </ThemeProvider>
                              </Box>
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                    <Box id="layout"  style={{ paddingBottom: "20px",marginTop: "15px",padding: "20px", backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 5px 8px 0 rgba(224, 224, 224)", }}>
                      <Typography
                        style={{
                          fontSize: "18px",
                          fontWeight: 700,
                          color: "rgb(51, 51, 52)",
                          fontFamily: "Arial, sans-serif",
                          paddingBottom: "20px",
                        }}
                      >
                        Layout
                      </Typography>
                        <Divider/>
                      <Box
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-around",
                          flexDirection: isSmallScreen ? "column" : "row", // Adjust layout based on screen size
                          marginTop: "20px"
                        }}
                      >
                        {isSmallScreen && (
                          <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}>
                            <img
                              src={
                                listing.images
                                  ? listing.images[listing.images.length - 1]
                                  : ""
                              }
                              alt="display"
                              style={
                                isFullscreen
                                  ? fullscreenImageStyle
                                  : mapstylesmall
                              }
                              loading="lazy"
                              onClick={handleImageClick}
                            ></img>
                          </div>
                        )}
                        {!isSmallScreen && (
                          <div style={isFullscreen ? fullscreenStyle : { display: "flex", gap: "10px" }}
                          >
                            <img
                              src={
                                listing.images
                                  ? listing.images[listing.images.length - 1]
                                  : ""
                              }
                              alt="display"
                              style={hoverStyle1}
                              loading="lazy"
                              onClick={handleImageClick}
                              onMouseEnter={() => setIsHovered1(true)}
                              onMouseLeave={() => setIsHovered1(false)}
                            ></img>
                            <img
                              src={
                                listing.images
                                  ? listing.images[listing.images.length - 2]
                                  : ""
                              }
                              alt="display"
                              style={hoverStyle2}
                              loading="lazy"
                              onClick={handleImageClick}
                              onMouseEnter={() => setIsHovered2(true)}
                              onMouseLeave={() => setIsHovered2(false)}
                            ></img>
                          </div>
                        )}
                      </Box>
                    </Box>
                    <Box id="funding-timeline" style={{ paddingBottom: "20px",marginTop: "15px",padding: "20px", backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 5px 8px 0 rgba(224, 224, 224)", }}>
                        <Typography
                          style={{
                            fontSize: "18px",
                            fontWeight: 700,
                            color: "rgb(51, 51, 52)",
                            fontFamily: "Arial, sans-serif",
                            padding: "20px 0",
                          }}
                        >
                          Funding timeline
                        </Typography>

                        <Box
                          style={{
                            backgroundColor: "#f6f7f9",
                            padding: "10px 20px",
                            borderRadius: "10px",
                            width: "fit-content",
                          }}
                        >
                          <Typography
                            style={{ fontSize: "12px", fontFamily: "Arial, sans-serif" }}
                          >
                            Each step may occur earlier than the dates below
                          </Typography>
                        </Box>
                        <Period fundt={listing.fundtimeline} />
                    </Box>
                    <Box
                    id="location"
                    style={{
                      paddingBottom: "20px",
                      marginTop: "15px",
                      padding: "20px",
                      backgroundColor: "#fff",
                      borderRadius: "8px",
                      boxShadow: "0 5px 8px 0 rgba(224, 224, 224)",
                    }}
                  >
                    <Typography
                      style={{
                        fontSize: "18px",
                        fontWeight: 700,
                        color: "rgb(51, 51, 52)",
                        fontFamily: "Arial, sans-serif",
                        paddingBottom: "20px",
                      }}
                    >
                      {listing.properyheading} Location Map and Landmarks
                    </Typography>
                    <Divider />

                    {/* Map Section */}
                    <Box style={{ marginTop: "20px" }}>
                      {isSmallScreen ? (
                        <iframe
                          src={listing.locationlink}
                          allowFullScreen=""
                          loading="lazy"
                          title="location"
                          referrerPolicy="no-referrer-when-downgrade"
                          style={mapstylesmall}
                        ></iframe>
                      ) : (
                        <iframe
                          src={listing.locationlink}
                          allowFullScreen=""
                          loading="lazy"
                          title="location"
                          referrerPolicy="no-referrer-when-downgrade"
                          style={mapstylebig}
                        ></iframe>
                      )}
                    </Box>

                    {/* Tabs Section */}
                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        flexWrap: "wrap",
                        marginTop: "20px",
                        gap:"10px"
                      }}
                    >
                      <Box
                        onClick={() => setLocationTab("school")}
                        style={{
                          padding: "10px 20px 10px 20px",
                          color: locationTab === "school" ? "white" : "black",
                          backgroundColor: locationTab === "school" ? "black" : "white",
                          borderRadius: "8px",
                          boxShadow: "0 5px 8px 0 rgba(224, 224, 224)",
                          cursor: "pointer",
                        }}
                      >
                        <i class="fa-solid fa-school" style={{paddingRight: "5px"}}></i> Schools
                      </Box>
                      <Box
                        onClick={() => setLocationTab("hospital")}
                        style={{
                          padding: "10px 20px 10px 20px",
                          color: locationTab === "hospital" ? "white" : "black",
                          backgroundColor: locationTab === "hospital" ? "black" : "white",
                          borderRadius: "8px",
                          boxShadow: "0 5px 8px 0 rgba(224, 224, 224)",
                          cursor: "pointer",
                        }}
                      >
                        <i class="fa-solid fa-hospital" style={{paddingRight: "5px"}}></i>Hospitals
                      </Box>
                      <Box
                        onClick={() => setLocationTab("hotel")}
                        style={{
                          padding: "10px 20px 10px 20px",
                          color: locationTab === "hotel" ? "white" : "black",
                          backgroundColor: locationTab === "hotel" ? "black" : "white",
                          borderRadius: "8px",
                          boxShadow: "0 5px 8px 0 rgba(224, 224, 224)",
                          cursor: "pointer",
                        }}
                      >
                        <i class="fa-solid fa-hotel" style={{paddingRight: "5px"}}></i>Hotels
                      </Box>
                      <Box
                        onClick={() => setLocationTab("additional-info")}
                        style={{
                          padding: "10px 20px 10px 20px",
                          color: locationTab === "additional-info" ? "white" : "black",
                          backgroundColor: locationTab === "additional-info" ? "black" : "white",
                          borderRadius: "8px",
                          boxShadow: "0 5px 8px 0 rgba(224, 224, 224)",
                          cursor: "pointer",
                        }}
                      >
                        <i class="fa-solid fa-circle-info" style={{paddingRight: "5px"}}></i> Additional Info
                      </Box>
                    </Box>

                    {/* Tab Content */}
                    <Box style={{ marginTop: "20px" }}>
                      {locationTab === "school" && (
                        <Box>
                          <Typography
                            style={{
                              fontFamily: "Arial, sans-serif",
                              fontSize: "16px",
                              paddingBottom: "10px",
                              fontWeight: "600",
                              color: "#44475b",
                            }}
                          >
                            Schools nearby {listing.properyheading}
                          </Typography>
                          <ul style={{ paddingLeft: "20px" }}>
                            {/* {listing.landmarks.map((landmark, index) => (
                              <li
                                key={index}
                                style={{
                                  fontFamily: "Arial, sans-serif",
                                  fontSize: "16px",
                                  color: "rgb(112,111,111)",
                                }}
                              >
                                {landmark}
                              </li>
                            ))} */}
                          </ul>
                        </Box>
                      )}

                {locationTab === "hotel" && (
                      <Box>
                        <Typography
                          style={{
                            fontFamily: "Arial, sans-serif",
                            fontSize: "16px",
                            paddingBottom: "10px",
                            fontWeight: "600",
                            color: "#44475b",
                          }}
                        >
                          Hotels nearby {listing.properyheading}
                        </Typography>
                        <ul style={{ paddingLeft: "20px" }}>
                          {/* {listing.landmarks.map((landmark, index) => (
                            <li
                              key={index}
                              style={{
                                fontFamily: "Arial, sans-serif",
                                fontSize: "16px",
                                color: "rgb(112,111,111)",
                              }}
                            >
                              {landmark}
                            </li>
                          ))} */}
                        </ul>
                      </Box>
                    )}

                      {locationTab === "hospital" && (
                        <Box>
                        <Typography
                          style={{
                            fontFamily: "Arial, sans-serif",
                            fontSize: "16px",
                            paddingBottom: "10px",
                            fontWeight: "600",
                            color: "#44475b",
                          }}
                        >
                          Hospitals nearby {listing.properyheading}
                        </Typography>
                      </Box>
                      )}
                      {locationTab === "additional-info" && (
                        <Typography
                          style={{
                            fontFamily: "Arial, sans-serif",
                            fontSize: "16px",
                            color: "rgb(112,111,111)",
                          }}
                        >
                          {listing.locationdescription.split(".").map((sentence, index) =>
                            sentence.trim() ? (
                              <span key={index}>
                                {sentence.trim() + "."}
                                <br />
                              </span>
                            ) : null
                          )}
                        </Typography>
                      )}
                    </Box>
                  </Box>


                    <Box style={{ paddingBottom: "30px" }}>
                      <Typography
                        style={{
                          fontSize: "24px",
                          fontWeight: 600,
                          fontFamily: "Arial, sans-serif",
                          padding: "20px 0",
                          color: "#44475b",
                        }}
                      >
                        Have more questions about this property?
                      </Typography>

                      <Box style={{ display: "flex", height: "15vh" }}>
                        <Box
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-around",
                          }}
                        >
                          <Typography
                            style={{ fontFamily: "Arial, sans-serif", fontSize: "17px" }}
                          >
                            Contact our real estate experts
                          </Typography>

                          <MessageButton>
                            <Box style={{ width: "25px", height: "25px" }}>
                              <svg
                                viewBox="0 0 24 24"
                                focusable="false"
                                class="chakra-icon css-pawapt"
                                aria-label="chat-bubble"
                                aria-hidden="true"
                              >
                                <g
                                  fill="none"
                                  fill-rule="nonzero"
                                  stroke="#0170dc"
                                  stroke-width="2.4000000000000004"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path d="M10.25 19.206L6.599 21.013V17.716C4.42 16.227 3 13.865 3 11.182C3 6.643 7.048 3 12 3C16.952 3 21 6.643 21 11.182C21 15.721 16.952 19.364 12 19.364C11.401 19.364 10.817 19.308 10.25 19.206Z"></path>
                                </g>
                              </svg>
                            </Box>

                            <Typography
                              style={{
                                fontFamily: "Arial, sans-serif",
                                fontSize: "17px",
                                paddingLeft: "10px",
                              }}
                            >
                              Message us
                            </Typography>
                          </MessageButton>
                        </Box>
                      </Box>
                    </Box>
                {activeTab === "financial" && isSmallScreen && (
                  <>
                    <Box
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        justifyContent: "start",
                        marginTop: "20px",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "Arial, sans-serif",
                          fontWeight: 700,
                          color: "#44575B",
                          fontSize: "25px",
                        }}
                      >
                        33.16%
                      </p>
                      <p
                        style={{
                          fontFamily: "Arial, sans-serif",
                          fontWeight: 600,
                          color: "#a1a3ad",
                          fontSize: "13px",
                        }}
                      >
                        3Y annualised
                      </p>
                    </Box>
                    <Box
                      style={{
                        display: "flex",
                        gap: "5px",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "Arial, sans-serif",
                          fontWeight: 600,
                          color: "#50B487",
                          fontSize: "13px",
                        }}
                      >
                        +0.45%
                      </p>
                      <p
                        style={{
                          fontFamily: "Arial, sans-serif",
                          fontWeight: 600,
                          color: "#a1a3ad",
                          fontSize: "13px",
                        }}
                      >
                        1M
                      </p>
                    </Box>
                    <Box>
                      <div>
                        {/* Other components or JSX here */}
                        {memoizedChartData && <LineChart data={memoizedChartData} />}
                      </div>                      <Divider />
                      <SubTitle
                        style={{
                          width: "28px",
                          alignItems: "center",
                          textAlign: "center",
                          marginLeft: "46%",
                          marginTop: "10px",
                        }}
                      >
                        3Y
                      </SubTitle>
                    </Box>
                    <Box onClick={() => setCalculator(!calculator)}>
                      <Typography
                        style={{
                          fontSize: "24px",
                          fontWeight: 600,
                          color: "#44475b",
                          fontFamily: "Arial, sans-serif",
                          paddingBottom: "20px",
                          paddingTop: "20px",

                        }}
                      >
                        Return Calculator
                      </Typography>
                      <Divider />
                    </Box>
                    {calculator && (
                      <>
                        <Box
                          style={{
                            // backgroundColor: "red",
                            marginTop: "30px",
                            marginBottom: "30px",
                            paddingTop: "30px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "start",
                            border: "0.2px solid #e9e9eb",
                            borderRadius: "10px",
                          }}
                        >
                          <Return_cal minAmountToInvest={listing.minAmountToInvest} />
                        </Box>

                        <Box
                          style={{
                            backgroundColor: "#f6f7f9",
                            padding: "10px",
                            borderRadius: "10px",
                            margin: "0 30px 40px 30px",
                          }}
                        >
                          <ThemeProvider theme={theme}>
                            <Typography
                              style={{
                                fontSize: "14px",
                                fontFamily: "Arial, sans-serif",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              Default values are based on property numbers
                              <Tooltip title={info1} placement="top">
                                <Typography
                                  style={{
                                    border: "1px solid rgb(112,111,111)",
                                    color: "rgb(112,111,111)",
                                    display: "inline",
                                    cursor: "pointer",
                                    padding: "0px 6px",
                                    marginLeft: "5px",
                                    borderRadius: "50%",
                                    fontSize: "10px",
                                  }}
                                >
                                  i
                                </Typography>
                              </Tooltip>
                            </Typography>
                          </ThemeProvider>
                        </Box>
                      </>
                    )}
                    <Box onClick={() => setFinancial(!financial)}>
                      <Typography
                        style={{
                          fontSize: "24px",
                          fontWeight: 600,
                          color: "#44475b",
                          fontFamily: "Arial, sans-serif",
                          paddingBottom: "20px",
                          paddingTop: "20px",
                        }}
                      >
                        Financial
                      </Typography>
                      <Divider />
                    </Box>
                    {financial && (
                      <Box style={{ paddingBottom: "20px" }}>
                        <Grid container spacing={5}>
                          <Grid item xs={12} md={6}>
                            <Box style={{ padding: "10px 0" }}>
                              <FinanceHeading>Property cost</FinanceHeading>

                              <Box>
                                <Box
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "10px 0",
                                  }}
                                >
                                  <FinanceSubHeading>
                                    Property price
                                  </FinanceSubHeading>
                                  <FinanceAmount>
                                    INR {listing.propertypricen}

                                  </FinanceAmount>
                                </Box>

                                <Box
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "5px 0",
                                  }}
                                >
                                  <FinanceSubHeading>
                                    Transaction costs
                                  </FinanceSubHeading>
                                  <FinanceAmount>
                                    INR {listing.transactioncost}
                                  </FinanceAmount>
                                </Box>

                                <Box
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "10px 0",
                                  }}
                                >
                                  <FinanceSubHeading>
                                    Govt. Fees
                                  </FinanceSubHeading>
                                  <FinanceAmount>
                                    {listing.venqfee}
                                  </FinanceAmount>
                                </Box>
                              </Box>

                              <Divider />

                              <Box>
                                <Box
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "5px 0",
                                  }}
                                >
                                  <FinanceSubHeading>
                                    Investment cost
                                  </FinanceSubHeading>
                                  <FinanceAmount style={{ color: "#0170dc" }}>
                                    INR {listing.propertyprice}
                                  </FinanceAmount>
                                </Box>
                              </Box>
                            </Box>
                          </Grid>

                          <Grid item xs={12} md={6}>
                            <Box style={{ padding: "10px 0" }}>
                              <FinanceHeading>
                                Rental income (Year 1)
                              </FinanceHeading>

                              <Box>
                                <Box
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "10px 0",
                                  }}
                                >
                                  <FinanceSubHeading>
                                    Projected gross rent
                                  </FinanceSubHeading>
                                  <FinanceAmount>
                                    INR {listing.projectedgrossrent}
                                  </FinanceAmount>
                                </Box>

                                <Box
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "10px 0",
                                  }}
                                >
                                  <FinanceSubHeading>
                                    Service charges
                                  </FinanceSubHeading>
                                  <FinanceAmount>
                                    (INR {listing.servicecharges})
                                  </FinanceAmount>
                                </Box>

                                <Box
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "10px 0",
                                  }}
                                >
                                  <FinanceSubHeading>
                                    Mgmt. and maintenance
                                  </FinanceSubHeading>
                                  <FinanceAmount>
                                    (INR {listing.maintainencefee})
                                  </FinanceAmount>
                                </Box>
                              </Box>

                              <Divider />

                              <Box>
                                <Box
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "10px 0",
                                  }}
                                >
                                  <FinanceSubHeading>
                                    Annual net income
                                  </FinanceSubHeading>
                                  <FinanceAmount style={{ color: "#0170dc" }}>
                                    INR {listing.annualnetincome}
                                  </FinanceAmount>
                                </Box>
                              </Box>

                              <Box
                                style={{
                                  backgroundColor: "#f6f7f9",
                                  padding: "10px",
                                  borderRadius: "10px",
                                }}
                              >
                                <ThemeProvider theme={theme}>
                                  <Typography
                                    style={{
                                      fontSize: "13px",
                                      fontFamily: "Arial, sans-serif",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                    }}
                                  >
                                    This is an estimate for the 1st year of
                                    ownership
                                    <Tooltip title={info1} placement="top">
                                      <Typography
                                        style={{
                                          border: "1px solid rgb(112,111,111)",
                                          color: "rgb(112,111,111)",
                                          display: "inline",
                                          cursor: "pointer",
                                          padding: "0px 6px",
                                          marginLeft: "5px",
                                          borderRadius: "50%",
                                          fontSize: "10px",
                                        }}
                                      >
                                        i
                                      </Typography>
                                    </Tooltip>
                                  </Typography>
                                </ThemeProvider>
                              </Box>
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>
                    )}
                    {/* //this is the working for phone screen new  */}
                    <Box onClick={() => setTimeline(!timeline)}>
                      <Typography
                        style={{
                          fontSize: "24px",
                          fontWeight: 600,
                          color: "#44475b",
                          fontFamily: "Arial, sans-serif",
                          paddingBottom: "20px",
                          paddingTop: "20px",
                        }}
                      >
                        Funding Timeline
                      </Typography>
                      <Divider />
                    </Box>
                    {timeline && (
                      <Box style={{ paddingBottom: "20px" }}>
                        <Box
                          style={{
                            backgroundColor: "#f6f7f9",
                            padding: "10px 20px",
                            borderRadius: "10px",
                            width: "fit-content",
                          }}
                        >
                          <Typography
                            style={{ fontSize: "12px", fontFamily: "Arial, sans-serif" }}
                          >
                            Each step may occur earlier than the dates below
                          </Typography>
                        </Box>
                        <Period />
                      </Box>
                    )}
                    <Box style={{ paddingBottom: "30px" }}>
                      <Typography
                        style={{
                          fontSize: "24px",
                          fontWeight: 600,
                          fontFamily: "Arial, sans-serif",
                          padding: "20px 0",
                          color: "#44475b",
                        }}
                      >
                        Have more questions about this property?
                      </Typography>

                      <Box style={{ display: "flex", height: "15vh" }}>
                        <Box
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-around",
                          }}
                        >
                          <Typography
                            style={{ fontFamily: "Arial, sans-serif", fontSize: "17px" }}
                          >
                            Contact our real estate experts
                          </Typography>

                          <MessageButton>
                            <Box style={{ width: "25px", height: "25px" }}>
                              <svg
                                viewBox="0 0 24 24"
                                focusable="false"
                                class="chakra-icon css-pawapt"
                                aria-label="chat-bubble"
                                aria-hidden="true"
                              >
                                <g
                                  fill="none"
                                  fill-rule="nonzero"
                                  stroke="#0170dc"
                                  stroke-width="2.4000000000000004"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path d="M10.25 19.206L6.599 21.013V17.716C4.42 16.227 3 13.865 3 11.182C3 6.643 7.048 3 12 3C16.952 3 21 6.643 21 11.182C21 15.721 16.952 19.364 12 19.364C11.401 19.364 10.817 19.308 10.25 19.206Z"></path>
                                </g>
                              </svg>
                            </Box>

                            <Typography
                              style={{
                                fontFamily: "Arial, sans-serif",
                                fontSize: "17px",
                                paddingLeft: "10px",
                              }}
                            >
                              Message us
                            </Typography>
                          </MessageButton>
                        </Box>
                      </Box>
                    </Box>
                  </>
                )}
            </Grid>

            {!isSmallScreen && listing?.islive === 3 && (
              <Grid item xs={4} style={{ position: "relative" }}>
                <Pricing>
                  <Box
                    style={{
                      backgroundColor: "white",
                      border: "0.2px solid #e9e9eb",
                      borderRadius: "10px",

                      padding: "10px",
                    }}
                  >
                    <Box style={{ textAlign: "center", paddingBottom: "10px" }}>
                      <Typography
                        style={{
                          fontSize: "18px",
                          color: "rgb(112,111,111)",
                          fontFamily: "Arial, sans-serif",
                        }}
                      >
                        Property price
                      </Typography>
                      <Typography
                        style={{
                          fontSize: "24px",
                          color: "#0170dc",
                          fontFamily: "Arial, sans-serif",
                        }}
                      >
                        INR{" "}
                        <b style={{ fontSize: "32px" }}>
                          {listing.propertyprice}
                        </b>
                      </Typography>
                    </Box>

                    <div>
                      <ProgressBar
                        completed={100}
                        customLabel=""
                        className="wrapper"
                        bgColor="#50B487"
                        labelColor="#50B487"
                        height="0.6rem"
                      // labelClassName="label"
                      />
                      <Typography
                        style={{
                          fontSize: "14px",
                          color: "black",
                          fontFamily: "Arial, sans-serif",
                          marginLeft: "5px",
                        }}
                      >
                        100% funded
                      </Typography>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        margin: "1.5rem 0",
                      }}
                    >
                      <div></div>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <img src={clock} alt="clock" style={{ marginRight: "1rem" }}></img>
                        <span style={{ color: "red" }}>
                          {" "}
                          Closed on Mar 31,2024
                        </span>
                      </div>
                    </div>

                    <Box
                      style={{
                        backgroundColor: "#f6f7f9",
                        padding: "1px",
                        borderRadius: "15px",
                      }}
                    >
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          margin: "1rem 2rem",
                        }}
                      >
                        <span>Yearly investment return</span>
                        <span style={{ fontWeight: 800 }}>9.8%</span>
                      </Box>

                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          margin: "1rem 2rem",
                        }}
                      >
                        <span>Funded date</span>
                        <span style={{ fontWeight: 800 }}>
                          {listing.fundingdate}
                        </span>
                      </Box>

                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          margin: "1rem 2rem",
                        }}
                      >
                        <span>Minimum Investment</span>
                        <span style={{ fontWeight: 800 }}>
                          {listing.mininvestment}
                        </span>
                      </Box>
                    </Box>

                    {listing.islive === 2 && (
                      <Box
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-around",
                          marginTop: "20px",
                          // backgroundColor:'red',
                          padding: "1px",
                        }}
                      >
                        <button
                          onClick={() => {
                            window.location.href =
                              "https://calendly.com/venqtech/15min";
                          }}
                          style={{
                            alignContent: "center",
                            alignItems: "center",
                            color: "#50B487",
                            backgroundColor: "#EBF9F5",
                            borderRadius: "5px",
                          }}
                        >
                          Schedule an E-meet
                        </button>
                        <button
                          onClick={() => setOpen((o) => !o)}
                          style={{
                            alignContent: "center",
                            alignItems: "center",
                            backgroundColor: "#00b386",
                            borderRadius: "5px",
                            padding: "10px",
                          }}
                        >
                          I'm Interested
                        </button>
                      </Box>
                    )}
                    {listing.islive === 1 && (
                      <Box
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-around",
                          marginTop: "20px",
                          // backgroundColor:'red',
                          padding: "1px",
                        }}
                      >
                        <button
                          onClick={() => {
                            window.location.href =
                              "https://calendly.com/venqtech/15min";
                          }}
                          style={{
                            alignContent: "center",
                            alignItems: "center",
                            color: "#50B487",
                            backgroundColor: "#EBF9F5",
                            borderRadius: "5px",
                          }}
                        >
                          Schedule an E-meet
                        </button>
                        <button
                          onClick={() => setOpen((o) => !o)}
                          style={{
                            alignContent: "center",
                            alignItems: "center",
                            backgroundColor: "#00b386",
                            borderRadius: "5px",
                            padding: "10px",
                          }}
                        >
                          Invest
                        </button>
                      </Box>
                    )}

                    {listing.islive === 3 && (
                      <Button
                        sx={{
                          paddingLeft: "65px",
                          paddingRight: "65px",
                          marginLeft: "10px",
                          marginTop: "10px",
                          width: "90%",
                          backgroundColor: "rgb(222, 154, 154)",
                          color: "red",
                        }}
                      >
                        Closed
                      </Button>
                    )}

                    <StyledPopup
                      open={open}
                      closeOnDocumentClick
                      onClose={closeModal}
                    >
                      <div className="modal">
                        <div
                          className="close"
                          onClick={closeModal}
                          style={{
                            cursor: "pointer",
                          }}
                        >
                          &times;
                        </div>

                        <form style={{ padding: "10px 20px" }} onSubmit={handleInterest}>
                          <Box
                            style={{
                              padding: "20px 40px"
                            }}>
                            <Label>
                              <LabelName>Select Amount to invest:</LabelName>
                            </Label>

                            <Label>
                              <LabelAmount>INR {interestamount}</LabelAmount>
                            </Label>

                            <LabelSlider
                              type="range"
                              min="50000"
                              max="300000"
                              step="500"
                              value={interestamount}
                              onChange={handleInterestChange}
                            />
                          </Box>
                          <Button
                            type="submit"
                            variant="contained"
                            style={{ margin: "8px 0" }}
                            color="primary"
                            fullWidth
                          >
                            Show Interest
                          </Button>
                        </form>
                      </div>
                    </StyledPopup>
                    {/* bada version  */}

                    <StyledPopupinv
                      open={openinv}
                      closeOnDocumentClick
                      onClose={closeModalinv}
                    >
                      <div
                        className="modal"
                        style={{
                          height: "100%",
                          // backgroundColor:'red',
                          margin: "0px",
                          marginTop: "-10px",
                          paddingLeft: "18px",
                          paddingRight: "18px",
                        }}
                      >
                        <div
                          className="close"
                          onClick={closeModalinv}
                          style={{
                            cursor: "pointer",
                          }}
                        >
                          &times;
                        </div>

                        <form
                          style={{
                            height: "450px",
                          }}
                          onSubmit={handleInterest}
                        >
                          <Box>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-evenly",
                              }}
                            >
                              {/* <div style={{
          display:'flex',
          justifyContent:'space-evenly'
        }}> */}
                              <nav
                                style={{
                                  width: "100%",
                                }}
                              >
                                <ul
                                  style={{
                                    display: "flex",
                                    listStyle: "none",
                                    paddingInlineStart: "0px",
                                    borderBottom: "1px solid #e9e9eb",
                                    gap: "20px",
                                  }}
                                >
                                  <li
                                    style={{
                                      fontWeight: "bold",
                                      borderBottom:
                                        invtype === 0
                                          ? "2px solid #00b386"
                                          : "none",
                                      marginRight: "12px",
                                      color: invtype === 0 ? "#00b386" : "gray",
                                      cursor: "pointer",
                                      fontSize: "16px",
                                      fontFamily: "Arial, sans-serif",
                                    }}
                                    onClick={() => {
                                      {
                                        !listing.properyheading.includes(
                                          "Dholera"
                                        ) && setinvtype(0);
                                      }
                                    }}
                                  >
                                    Allotment
                                  </li>
                                  <li
                                    style={{
                                      fontWeight: "bold",
                                      borderBottom:
                                        invtype === 1
                                          ? "2px solid #00b386"
                                          : "none",
                                      color: invtype === 1 ? "#00b386" : "gray",
                                      marginRight: "12px",
                                      cursor: "pointer",
                                      fontSize: "16px",
                                      fontFamily: "Arial, sans-serif",
                                    }}
                                    onClick={() => {
                                      setinvtype(1);
                                    }}
                                  >
                                    Invest
                                  </li>
                                </ul>
                              </nav>
                            </div>

                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <Label>
                                <LabelName
                                  sx={{
                                    fontSize: "14px",
                                    marginTop: "14px",
                                  }}
                                >
                                  Investment Amount :
                                </LabelName>
                              </Label>
                              {invtype === 0 && (
                                <input
                                  type="text"
                                  value={userinvest}
                                  onChange={(event) => {
                                    setUserInvest(event.target.value);
                                  }}
                                  style={{
                                    width: "40%",
                                    fontSize: "14px",
                                    backgroundColor: "#EBF9F5",
                                    color: "#50B487",
                                  }}
                                />
                              )}
                              {invtype === 1 && (
                                <input
                                  type="text"
                                  value={userinvestone}
                                  onChange={(event) => {
                                    setUserInvest(event.target.value);
                                  }}
                                  style={{
                                    width: "40%",
                                    fontSize: "14px",
                                    backgroundColor: "#EBF9F5",
                                    color: "#50B487",
                                  }}
                                />
                              )}
                            </div>
                            {invtype === 0 && (
                              <>
                                <Box
                                  sx={{
                                    width: "90%",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginLeft: "16px",
                                  }}
                                >
                                  <Slider
                                    aria-label="Temperature"
                                    defaultValue={5000}
                                    getAriaValueText={valuetext}
                                    min={5000}
                                    max={305000}
                                    step={30000}
                                    marks={marks}
                                    onChange={handleUserInvestChange}
                                  />
                                </Box>
                              </>
                            )}
                            {invtype === 1 && (
                              <>
                                <Box
                                  sx={{
                                    width: "90%",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginLeft: "16px",
                                  }}
                                >
                                  <Slider
                                    aria-label="Temperature"
                                    defaultValue={5000}
                                    getAriaValueText={valuetext}
                                    min={5000}
                                    max={310000}
                                    step={50000}
                                    marks={marks}
                                    onChange={handleUserInvestChangeOne}
                                  />
                                </Box>
                              </>
                            )}
                          </Box>
                          {invtype === 0 && (
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <Label>
                                <LabelName
                                  sx={{
                                    marginTop: "14px",
                                    fontSize: "14px",
                                  }}
                                >
                                  Allotment Fees:
                                </LabelName>
                              </Label>
                              <input
                                type="text"
                                value={`₹ ` + userinvest * 0.05}
                                style={{
                                  width: "40%",
                                  fontSize: "14px",
                                  backgroundColor: "#EBF9F5",
                                  color: "#50B487",
                                }}
                              />
                            </div>
                          )}

                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            {invtype === 0 && (
                              <>
                                <Label>
                                  <LabelName
                                    sx={{
                                      marginTop: "14px",
                                      fontSize: "14px",
                                    }}
                                  >
                                    Allotment date:
                                  </LabelName>
                                </Label>
                                <input
                                  type="text"
                                  value={`1 Mar`}
                                  style={{
                                    width: "40%",
                                    fontSize: "14px",
                                    backgroundColor: "#EBF9F5",
                                    color: "#50B487",
                                  }}
                                />
                              </>
                            )}
                          </div>
                          {invtype === 0 && (
                            <Label
                              style={{
                                textAlign: "center",
                              }}
                              sx={{
                                textAlign: "center",
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: "50px",
                              }}
                            >
                              <LabelName
                                sx={{
                                  textAlign: "center",
                                  fontSize: "8px",
                                  color: "#7c7e8c",
                                }}
                              >
                                This 5% application fees is a reservation only.
                                You will have to pay the whole amount on the
                                date of allotment to know more checkout{" "}
                                <a href="https://www.venq.in/investing">
                                  venq.in/investing
                                </a>
                              </LabelName>
                            </Label>
                          )}
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              gap: "30px",
                              marginTop: invtype === 1 ? "205px" : "0px",
                            }}
                          >
                            <Button
                              type="submit"
                              variant="contained"
                              style={{
                                margin: "8px 0",
                                width: "50%",
                                paddingTop: "10px",
                                paddingBottom: "10px",
                                backgroundColor: "#EBF9F5",
                                borderRadius: "8px",
                                color: "#50B487",
                              }}
                              color="primary"
                              fullWidth
                              onClick={() => {
                                handleRequest(0);
                              }}
                            // disabled={selectedValue==""}
                            >
                              ADD TO CART
                            </Button>
                            {invtype === 0 && (
                              <Button
                                type="submit"
                                variant="contained"
                                style={{
                                  margin: "8px 0",
                                  width: "50%",
                                  backgroundColor: "#00b386",
                                  borderRadius: "8px",
                                }}
                                color="primary"
                                fullWidth
                                onClick={() => {
                                  handleRequest(1);
                                }}
                              // disabled={selectedValue==""}
                              >
                                APPLY
                              </Button>
                            )}
                            {invtype === 1 && (
                              <Button
                                type="submit"
                                variant="contained"
                                style={{
                                  margin: "8px 0",
                                  width: "50%",
                                  backgroundColor: "#00b386",
                                  borderRadius: "8px",
                                }}
                                color="primary"
                                fullWidth
                                onClick={handleRequest}
                              // disabled={selectedValue==""}
                              >
                                INVEST
                              </Button>
                            )}
                          </div>
                        </form>
                      </div>
                    </StyledPopupinv>
                  </Box>
                  <div style={{}}>
                    <div
                      style={{
                        marginTop: "20px",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    ></div>
                  </div>
                  <ToastContainer />

                  <Typography
                    style={{
                      fontFamily: "Arial, sans-serif",
                      textAlign: "center",
                      fontSize: "14px",
                      marginTop: "16px",
                    }}
                  >
                    You won't be charged yet
                  </Typography>

                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "20px",
                      color: "grey",
                      padding: "10px",
                    }}
                  >
                    <AutoAwesomeOutlinedIcon />
                    <Typography
                      style={{
                        fontFamily: "Arial, sans-serif",
                        paddingLeft: "10px",
                        fontSize: "14px",
                      }}
                    >
                      3,987 people viewed this property
                    </Typography>
                  </Box>
                </Pricing>
              </Grid>
            )}

            {!isSmallScreen && listing?.islive === 2 && (
              <Grid item xs={4} style={{ position: "relative" }}>
                <Pricing>
                  <Box
                    style={{
                      backgroundColor: "white",
                      borderRadius: "8px",
                      padding: "20px",
                      paddingBottom: "20px",
                      boxShadow: "0 5px 8px 0 rgba(224, 224, 224)"
                    }}
                  >
                    <Box style={{ textAlign: "center", paddingBottom: "10px" }}>
                      <Typography
                        style={{
                          fontSize: "18px",
                          color: "rgb(112,111,111)",
                          fontFamily: "Arial, sans-serif",
                        }}
                      >
                        Property price
                      </Typography>
                      <Typography
                        style={{
                          fontSize: "24px",
                          color: "#0170dc",
                          fontFamily: "Arial, sans-serif",
                        }}
                      >
                        INR{" "}
                        <b style={{ fontSize: "32px" }}>
                          {listing.propertyprice}
                        </b>
                      </Typography>
                    </Box>

                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        margin: "1rem 2rem",
                      }}
                    ></Box>

                    <ReturnsBox style={{ marginTop: "1rem" }}>
                      <Box style={{ display: "flex", justifyContent: "space-between", padding: "1rem 0" }}>
                        {/* Tokens */}
                        <Box style={{ flex: 1, textAlign: "center" }}>
                          <Box style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", color: "#44475B" }}>Tokens</Box>
                          <Box style={{ color: "#00B386", fontWeight: "bold", fontSize: "16px", marginTop: "10px" }}>
                            {listing.tokens || "N/A"} {/* Fallback if data is missing */}
                          </Box>
                        </Box>

                        {/* Vertical Divider */}
                        <Box style={{ width: "1px", backgroundColor: "black", height: "auto", margin: "0 10px" }} />

                        {/* Est. Yields */}
                        <Box style={{ flex: 1, textAlign: "center" }}>
                          <Box style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", color: "#44475B" }}>Est. Yields</Box>
                          <Box style={{ color: "#00B386", fontWeight: "bold", fontSize: "16px", marginTop: "10px" }}>
                            {listing.estimatedYields || "N/A"} {/* Fallback if data is missing */}
                          </Box>
                        </Box>

                        {/* Vertical Divider */}
                        <Box style={{ width: "1px", backgroundColor: "black", height: "auto", margin: "0 10px" }} />

                        {/* Target APR */}
                        <Box style={{ flex: 1, textAlign: "center" }}>
                          <Box style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", color: "#44475B" }}>Target ARR</Box>
                          <Box style={{ color: "#00B386", fontWeight: "bold", fontSize: "16px", marginTop: "10px" }}>
                            {listing.targetAPR || "N/A"} {/* Fallback if data is missing */}
                          </Box>
                        </Box>

                        {/* Vertical Divider */}
                        <Box style={{ width: "1px", backgroundColor: "black", height: "auto", margin: "0 10px" }} />

                        {/* Potential Gain */}
                        <Box style={{ flex: 1, textAlign: "center" }}>
                          <Box style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", color: "#44475B" }}>Est. Gain</Box>
                          <Box style={{ color: "#00B386", fontWeight: "bold", fontSize: "16px", marginTop: "10px" }}>
                            {listing.potentialGain || "N/A"} {/* Fallback if data is missing */}
                          </Box>
                        </Box>
                      </Box>
                    </ReturnsBox>

                    <Box
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                        marginTop: "20px",
                        // backgroundColor:'red',
                        padding: "1px",
                      }}
                    >
                      <button
                        onClick={() => {
                          window.location.href =
                            "https://calendly.com/venqtech/15min";
                        }}
                        style={{
                          alignContent: "center",
                          alignItems: "center",
                          color: "#50B487",
                          backgroundColor: "#EBF9F5",
                          borderRadius: "5px",
                        }}
                      >
                        Schedule an E-meet
                      </button>
                      {listing.islive === 2 && (
                        <button
                          onClick={() => setOpen((o) => !o)}
                          style={{
                            alignContent: "center",
                            alignItems: "center",
                            backgroundColor: "#00b386",
                            borderRadius: "5px",
                            padding: "10px",
                          }}
                        >
                          I'm Interested
                        </button>
                      )}

                      {listing.islive === 1 && (
                        <button
                          onClick={() => setOpenInv((o) => !o)}
                          style={{
                            alignContent: "center",
                            alignItems: "center",
                            backgroundColor: "#00b386",
                            borderRadius: "5px",
                            paddingTop: "8px",
                            paddingBottom: "8px",
                            paddingLeft: "11%",
                            paddingRight: "11%",
                          }}
                        >
                          Invest{" "}
                        </button>
                      )}

                      <StyledPopup
                        open={open}
                        closeOnDocumentClick
                        onClose={closeModal}
                      >
                        <div className="modal">
                          <div
                            className="close"
                            onClick={closeModal}
                            style={{
                              cursor: "pointer",
                            }}
                          >
                            &times;
                          </div>

                          <form style={{ padding: "10px 20px" }} onSubmit={handleInterest}>
                            <Box
                              style={{
                                padding: "20px 40px"
                              }}>
                              <Label>
                                <LabelName>Select Amount to invest:</LabelName>
                              </Label>

                              <Label>
                                <LabelAmount>INR {interestamount}</LabelAmount>
                              </Label>

                              <LabelSlider
                                type="range"
                                min="50000"
                                max="300000"
                                step="500"
                                value={interestamount}
                                onChange={handleInterestChange}
                              />
                            </Box>
                            <Button
                              type="submit"
                              variant="contained"
                              style={{ margin: "8px 0" }}
                              color="primary"
                              fullWidth
                            >
                              Show Interest
                            </Button>
                          </form>
                        </div>
                      </StyledPopup>
                      {/* bada version  */}

                      <StyledPopupinv
                        open={openinv}
                        closeOnDocumentClick
                        onClose={closeModalinv}
                      >
                        <div
                          className="modal"
                          style={{
                            height: "100%",
                            // backgroundColor:'red',
                            margin: "0px",
                            marginTop: "-10px",
                            paddingLeft: "18px",
                            paddingRight: "18px",
                          }}
                        >
                          <div
                            className="close"
                            onClick={closeModalinv}
                            style={{
                              cursor: "pointer",
                            }}
                          >
                            &times;
                          </div>

                          <form
                            style={{
                              height: "450px",
                            }}
                            onSubmit={handleInterest}
                          >
                            <Box>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-evenly",
                                }}
                              >
                                <nav
                                  style={{
                                    width: "100%",
                                  }}
                                >
                                  <ul
                                    style={{
                                      display: "flex",
                                      listStyle: "none",
                                      paddingInlineStart: "0px",
                                      borderBottom: "1px solid #e9e9eb",
                                      gap: "20px",
                                    }}
                                  >
                                    <li
                                      style={{
                                        fontWeight: "bold",
                                        borderBottom:
                                          invtype === 0
                                            ? "2px solid #00b386"
                                            : "none",
                                        marginRight: "12px",
                                        color:
                                          invtype === 0 ? "#00b386" : "gray",
                                        cursor: "pointer",
                                        fontSize: "16px",
                                        fontFamily: "Arial, sans-serif",
                                      }}
                                      onClick={() => {
                                        {
                                          !listing.properyheading.includes(
                                            "Dholera"
                                          ) && setinvtype(0);
                                        }
                                      }}
                                    >
                                      Allotment
                                    </li>
                                    <li
                                      style={{
                                        fontWeight: "bold",
                                        borderBottom:
                                          invtype === 1
                                            ? "2px solid #00b386"
                                            : "none",
                                        color:
                                          invtype === 1 ? "#00b386" : "gray",
                                        marginRight: "12px",
                                        cursor: "pointer",
                                        fontSize: "16px",
                                        fontFamily: "Arial, sans-serif",
                                      }}
                                      onClick={() => {
                                        setinvtype(1);
                                      }}
                                    >
                                      Invest
                                    </li>
                                  </ul>
                                </nav>
                              </div>

                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                                <Label>
                                  <LabelName
                                    sx={{
                                      fontSize: "14px",
                                      marginTop: "14px",
                                    }}
                                  >
                                    Investment Amount :
                                  </LabelName>
                                </Label>
                                {invtype === 0 && (
                                  <input
                                    type="text"
                                    value={userinvest}
                                    onChange={(event) => {
                                      setUserInvest(event.target.value);
                                    }}
                                    style={{
                                      width: "40%",
                                      fontSize: "14px",
                                      backgroundColor: "#EBF9F5",
                                      color: "#50B487",
                                    }}
                                  />
                                )}
                                {invtype === 1 && (
                                  <input
                                    type="text"
                                    value={userinvestone}
                                    onChange={(event) => {
                                      setUserInvest(event.target.value);
                                    }}
                                    style={{
                                      width: "40%",
                                      fontSize: "14px",
                                      backgroundColor: "#EBF9F5",
                                      color: "#50B487",
                                    }}
                                  />
                                )}
                              </div>
                              {invtype === 0 && (
                                <>
                                  <Box
                                    sx={{
                                      width: "90%",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      marginLeft: "16px",
                                    }}
                                  >
                                    <Slider
                                      aria-label="Temperature"
                                      defaultValue={5000}
                                      getAriaValueText={valuetext}
                                      min={5000}
                                      max={305000}
                                      step={30000}
                                      marks={marks}
                                      onChange={handleUserInvestChange}
                                    />
                                  </Box>
                                </>
                              )}
                              {invtype === 1 && (
                                <>
                                  <Box
                                    sx={{
                                      width: "90%",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      marginLeft: "16px",
                                    }}
                                  >
                                    <Slider
                                      aria-label="Temperature"
                                      defaultValue={5000}
                                      getAriaValueText={valuetext}
                                      min={5000}
                                      max={310000}
                                      step={50000}
                                      marks={marks}
                                      onChange={handleUserInvestChangeOne}
                                    />
                                  </Box>
                                </>
                              )}
                            </Box>
                            {invtype === 0 && (
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                                <Label>
                                  <LabelName
                                    sx={{
                                      marginTop: "14px",
                                      fontSize: "14px",
                                    }}
                                  >
                                    Allotment Fees:
                                  </LabelName>
                                </Label>
                                <input
                                  type="text"
                                  value={`₹ ` + userinvest * 0.05}
                                  style={{
                                    width: "40%",
                                    fontSize: "14px",
                                    backgroundColor: "#EBF9F5",
                                    color: "#50B487",
                                  }}
                                />
                              </div>
                            )}

                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              {invtype === 0 && (
                                <>
                                  <Label>
                                    <LabelName
                                      sx={{
                                        marginTop: "14px",
                                        fontSize: "14px",
                                      }}
                                    >
                                      Allotment date:
                                    </LabelName>
                                  </Label>
                                  <input
                                    type="text"
                                    value={`1 Mar`}
                                    style={{
                                      width: "40%",
                                      fontSize: "14px",
                                      backgroundColor: "#EBF9F5",
                                      color: "#50B487",
                                    }}
                                  />
                                </>
                              )}
                            </div>
                            {invtype === 0 && (
                              <Label
                                style={{
                                  textAlign: "center",
                                }}
                                sx={{
                                  textAlign: "center",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  marginTop: "50px",
                                }}
                              >
                                <LabelName
                                  sx={{
                                    textAlign: "center",
                                    fontSize: "8px",
                                    color: "#7c7e8c",
                                  }}
                                >
                                  This 5% application fees is a reservation
                                  only. You will have to pay the whole amount on
                                  the date of allotment to know more checkout{" "}
                                  <a href="https://www.venq.in/investing">
                                    venq.in/investing
                                  </a>
                                </LabelName>
                              </Label>
                            )}
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                gap: "30px",
                                marginTop: invtype === 1 ? "205px" : "0px",
                              }}
                            >
                              <Button
                                type="submit"
                                variant="contained"
                                style={{
                                  margin: "8px 0",
                                  width: "50%",
                                  paddingTop: "10px",
                                  paddingBottom: "10px",
                                  backgroundColor: "#EBF9F5",
                                  borderRadius: "8px",
                                  color: "#50B487",
                                }}
                                color="primary"
                                fullWidth
                                onClick={() => {
                                  handleRequest(0);
                                }}
                              // disabled={selectedValue==""}
                              >
                                ADD TO CART
                              </Button>
                              {invtype === 0 && (
                                <Button
                                  type="submit"
                                  variant="contained"
                                  style={{
                                    margin: "8px 0",
                                    width: "50%",
                                    backgroundColor: "#00b386",
                                    borderRadius: "8px",
                                  }}
                                  color="primary"
                                  fullWidth
                                  onClick={() => {
                                    handleRequest(1);
                                  }}
                                // disabled={selectedValue==""}
                                >
                                  APPLY
                                </Button>
                              )}
                              {invtype === 1 && (
                                <Button
                                  type="submit"
                                  variant="contained"
                                  style={{
                                    margin: "8px 0",
                                    width: "50%",
                                    backgroundColor: "#00b386",
                                    borderRadius: "8px",
                                  }}
                                  color="primary"
                                  fullWidth
                                  onClick={handleRequest}
                                // disabled={selectedValue==""}
                                >
                                  INVEST
                                </Button>
                              )}
                            </div>
                          </form>
                        </div>
                      </StyledPopupinv>
                    </Box>
                    <div style={{}}>
                      <div
                        style={{
                          marginTop: "20px",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      ></div>
                    </div>
                    <ToastContainer />

                    <Typography
                      style={{
                        fontFamily: "Arial, sans-serif",
                        textAlign: "center",
                        fontSize: "14px",
                        marginTop: "16px",
                      }}
                    >
                      You won't be charged yet
                    </Typography>
                  </Box>
                  {/* <Box
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "20px",
                      color: "grey",
                      padding: "10px",
                    }}
                  >
                    <AutoAwesomeOutlinedIcon />
                    <Typography
                      style={{
                        fontFamily: "Arial, sans-serif",
                        paddingLeft: "10px",
                        fontSize: "14px",
                      }}
                    >
                      3,987 people viewed this property
                    </Typography>
                  </Box> */}

                  <Grid>
                    {/* Deal Terms Box */}
                    <Grid item xs={12} style={{ padding: 0 }}>
                      <Box
                        style={{
                          margin: "20px 0", // Keep only vertical margins
                          padding: "20px 40px",
                          display: "flex",
                          flexDirection: "column",
                          backgroundColor: "white",
                          borderRadius: "8px",
                          // paddingBottom: "20px",
                          boxShadow: "0 5px 8px 0 rgba(224, 224, 224)"
                        }}
                        onClick={() => setExpandedIndex(expandedIndex === 0 ? null : 0)} // Toggle expand on click
                      >
                        <Box display="flex" alignItems="center">
                          <Typography
                            style={{
                              fontFamily: "Arial, sans-serif",
                              fontSize: "22px",
                              fontWeight: 700,
                              marginBottom: "10px", // Adjusted to prevent too much space
                              color: "#44475B",
                              cursor: "pointer", // Show it's clickable
                              flexGrow: 1, // Allow the title to take available space
                            }}
                          >
                            Deal Terms
                          </Typography>
                          <ExpandMoreIcon
                            style={{
                              color: "#44475B",
                              cursor: "pointer", // Show it's clickable
                              transform: expandedIndex === 0 ? 'rotate(180deg)' : 'rotate(0deg)', // Rotate icon based on expanded state
                              transition: 'transform 0.3s ease', // Smooth rotation transition
                            }}
                          />
                        </Box>

                        {expandedIndex === 0 && (
                          <Box
                            style={{
                              overflow: 'hidden', // Hide overflow
                              transition: 'max-height 0.4s ease', // Smooth transition
                              padding: '10px 0', // Padding when expanded
                              backgroundColor: "white",
                              borderRadius: "5px",
                            }}
                          >
                            {listing.dealTerms.map((term, index) => (
                              <div
                                key={index}
                                style={{
                                  marginBottom: "20px",
                                  cursor: "pointer" // Make it obvious that it's hoverable
                                }}
                                onMouseEnter={() => setHoveredTerm(index)} // Track hovered term
                                onMouseLeave={() => setHoveredTerm(null)}  // Reset hovered term on leave
                              >
                                <Typography
                                  style={{
                                    fontFamily: "Arial, sans-serif",
                                    fontSize: "14px",
                                    color: "black",
                                  }}
                                >
                                  {term.label}
                                </Typography>

                                {hoveredTerm === index && ( // Show description on hover
                                  <Box
                                    style={{
                                      padding: '10px 0', // Padding for the description box
                                      transition: 'max-height 0.3s ease', // Smooth slide down
                                      backgroundColor: "white",
                                    }}
                                  >
                                    <Divider style={{ margin: "10px 0" }} />
                                    <Typography
                                      style={{
                                        fontFamily: "Arial, sans-serif",
                                        fontSize: "12px",
                                        color: "black",
                                      }}
                                    >
                                      {term.description}
                                    </Typography>
                                  </Box>
                                )}
                              </div>
                            ))}
                          </Box>
                        )}
                      </Box>
                    </Grid>


                    {/* Timeshare Box */}
                    {listing.propertyType === "TimeShare" && (
                      <Grid item xs={12} style={{ padding: 0 }}>
                        <Box
                          style={{
                            margin: "20px 0",
                            padding: "20px 40px",
                            backgroundColor: "#ffffff",
                            borderRadius: "22px",
                            border: "0.2px solid #e9e9eb",
                            display: "flex",
                            flexDirection: "column",
                            cursor: "pointer" // Add a pointer cursor to indicate it's clickable
                          }}
                          onClick={handleExpandClick} // Click to toggle expand/collapse
                        >
                          <Box display="flex" alignItems="center">
                            <Typography
                              style={{
                                fontFamily: "Arial, sans-serif",
                                fontSize: "22px",
                                fontWeight: 600,
                                marginBottom: "15px",
                                color: "#44475B",
                                cursor: "pointer", // Ensure cursor changes when hovering over the title
                                flexGrow: 1,
                              }}
                            >
                              What is TimeShare?
                            </Typography>
                            <ExpandMoreIcon
                              style={{
                                color: "#44475B",
                                cursor: "pointer",
                                transform: expandedIndex === 1 ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition: 'transform 0.3s ease',
                              }}
                            />
                          </Box>

                          {expandedIndex === 1 && (
                            <Box
                              style={{
                                overflow: 'hidden',
                                transition: 'max-height 0.4s ease',
                                padding: '10px 0',
                                backgroundColor: "white",
                                borderRadius: "5px",
                              }}
                            >
                              <ul
                                style={{
                                  paddingLeft: '20px',
                                  color: "#44475B",
                                  lineHeight: "30px",
                                  fontFamily: "Arial, sans-serif",
                                  fontSize: "14px",
                                }}
                              >
                                {Array.isArray(listing?.timeShare) && listing.timeShare.length > 0 ? (
                                  listing.timeShare.map((timeShare, index) => (
                                    <div key={index}>
                                      {timeShare.label && timeShare.details ? (
                                        <li>
                                          <strong>{timeShare.label}: </strong>
                                          {timeShare.details}
                                        </li>
                                      ) : (
                                        <li>No offers available</li>
                                      )}

                                      <Typography
                                        style={{
                                          fontFamily: "Arial, sans-serif",
                                          fontSize: "14px",
                                          marginTop: "20px",
                                          color: "black",
                                          marginBottom: "25px",
                                        }}
                                      >
                                        {timeShare.limitedAvailability || "No availability info"}
                                      </Typography>

                                      <Button
                                        variant="contained"
                                        color="primary"
                                        style={{
                                          display: "flex",
                                          justifyContent: "center",
                                          alignItems: "center",
                                          width: "100%",
                                          borderRadius: "8px",
                                          fontFamily: "Arial, sans-serif",
                                          fontSize: "18px",
                                          fontWeight: 900,
                                          marginBottom: "30px",
                                          backgroundColor: "#00B386",
                                          padding: "10px 20px",
                                        }}
                                      >
                                        Invest {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(timeShare.investmentAmount || 0)}
                                      </Button>
                                    </div>
                                  ))
                                ) : (
                                  <li>No timeShare data available</li>
                                )}
                              </ul>
                            </Box>
                          )}
                        </Box>
                      </Grid>
                    )}






                  </Grid>





                </Pricing>

              </Grid>
            )}
            {!isSmallScreen && listing?.islive === 1 && (
              <Grid item xs={4} style={{ position: "relative" }}>
                <Pricing>
                  <Box
                    style={{
                      backgroundColor: "white",
                      border: "0.2px solid #e9e9eb",
                      borderRadius: "10px",
                      padding: "10px",
                    }}
                  >
                    <Box style={{ textAlign: "center", paddingBottom: "10px" }}>
                      <Typography
                        style={{
                          fontSize: "18px",
                          color: "rgb(112,111,111)",
                          fontFamily: "Arial, sans-serif",
                        }}
                      >
                        Property price
                      </Typography>
                      <Typography
                        style={{
                          fontSize: "24px",
                          color: "#0170dc",
                          fontFamily: "Arial, sans-serif",
                        }}
                      >
                        INR{" "}
                        <b style={{ fontSize: "32px" }}>
                          {listing.propertyprice}
                        </b>
                      </Typography>
                    </Box>

                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        margin: "1rem 2rem",
                      }}
                    ></Box>

                    <ReturnsBox style={{ marginTop: "1rem" }}>
                      <Box style={{ display: "flex", justifyContent: "space-between", padding: "1rem 0" }}>
                        {/* Tokens */}
                        <Box style={{ flex: 1, textAlign: "center" }}>
                          <Box style={{ fontFamily: "Arial, sans-serif", fontSize: "14px", color: "#44475B" }}>Tokens</Box>
                          <Box style={{ color: "#00B386", fontWeight: "bold", fontSize: "16px", marginTop: "10px" }}>
                            {listing.tokens || "N/A"} {/* Fallback if data is missing */}
                          </Box>
                        </Box>

                        {/* Vertical Divider */}
                        <Box style={{ width: "1px", backgroundColor: "black", height: "auto", margin: "0 10px" }} />

                        {/* Est. Yields */}
                        <Box style={{ flex: 1, textAlign: "center" }}>
                          <Box style={{ fontFamily: "Arial, sans-serif", fontSize: "14px", color: "#44475B" }}>Est. Yields</Box>
                          <Box style={{ color: "#00B386", fontWeight: "bold", fontSize: "16px", marginTop: "10px" }}>
                            {listing.estimatedYields || "N/A"} {/* Fallback if data is missing */}
                          </Box>
                        </Box>

                        {/* Vertical Divider */}
                        <Box style={{ width: "1px", backgroundColor: "black", height: "auto", margin: "0 10px" }} />

                        {/* Target APR */}
                        <Box style={{ flex: 1, textAlign: "center" }}>
                          <Box style={{ fontFamily: "Arial, sans-serif", fontSize: "14px", color: "#44475B" }}>Target APR</Box>
                          <Box style={{ color: "#00B386", fontWeight: "bold", fontSize: "16px", marginTop: "10px" }}>
                            {listing.targetAPR || "N/A"} {/* Fallback if data is missing */}
                          </Box>
                        </Box>

                        {/* Vertical Divider */}
                        <Box style={{ width: "1px", backgroundColor: "black", height: "auto", margin: "0 10px" }} />

                        {/* Potential Gain */}
                        <Box style={{ flex: 1, textAlign: "center" }}>
                          <Box style={{ fontFamily: "Arial, sans-serif", fontSize: "14px", color: "#44475B" }}>Potential Gain</Box>
                          <Box style={{ color: "#00B386", fontWeight: "bold", fontSize: "16px", marginTop: "10px" }}>
                            {listing.potentialGain || "N/A"} {/* Fallback if data is missing */}
                          </Box>
                        </Box>
                      </Box>
                    </ReturnsBox>


                    <Box
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                        marginTop: "20px",
                        // backgroundColor:'red',
                        padding: "1px",
                      }}
                    >
                      <button
                        onClick={() => {
                          window.location.href =
                            "https://calendly.com/venqtech/15min";
                        }}
                        style={{
                          alignContent: "center",
                          alignItems: "center",
                          color: "#50B487",
                          backgroundColor: "#EBF9F5",
                          borderRadius: "5px",
                        }}
                      >
                        Schedule an E-meet
                      </button>
                      {listing.islive === 2 && (
                        <button
                          onClick={() => setOpen((o) => !o)}
                          style={{
                            alignContent: "center",
                            alignItems: "center",
                            backgroundColor: "#00b386",
                            borderRadius: "5px",
                            padding: "10px",
                          }}
                        >
                          I'm Interested
                        </button>
                      )}

                      {listing.islive === 1 && (
                        <button
                          onClick={() => setOpenInv((o) => !o)}
                          style={{
                            alignContent: "center",
                            alignItems: "center",
                            backgroundColor: "#00b386",
                            borderRadius: "5px",
                            paddingTop: "8px",
                            paddingBottom: "8px",
                            paddingLeft: "11%",
                            paddingRight: "11%",
                          }}
                        >
                          Invest{" "}
                        </button>
                      )}

                      <StyledPopup
                        open={open}
                        closeOnDocumentClick
                        onClose={closeModal}
                      >
                        <div className="modal">
                          <div
                            className="close"
                            onClick={closeModal}
                            style={{
                              cursor: "pointer",
                            }}
                          >
                            &times;
                          </div>

                          <form style={{ padding: "10px 20px" }} onSubmit={handleInterest}>
                            <Box>
                              <Label
                                style={{
                                  padding: "20px 40px"
                                }}>
                                <LabelName>Select Amount to invest:</LabelName>
                              </Label>

                              <Label>
                                <LabelAmount>INR {interestamount}</LabelAmount>
                              </Label>

                              <LabelSlider
                                type="range"
                                min="50000"
                                max="300000"
                                step="500"
                                value={interestamount}
                                onChange={handleInterestChange}
                              />
                            </Box>
                            <Button
                              type="submit"
                              variant="contained"
                              style={{ margin: "8px 0" }}
                              color="primary"
                              fullWidth
                            >
                              Show Interest
                            </Button>
                          </form>
                        </div>
                      </StyledPopup>

                      <StyledPopupinv
                        open={openinv}
                        closeOnDocumentClick
                        onClose={closeModalinv}
                      >
                        {showInvestComponent ? (
                          <Terms userinvestone={totalAmount} />
                        ) : (
                          <div
                            style={{
                              height: "100%",
                              margin: "0px",
                              marginTop: "-10px",
                              paddingLeft: "18px",
                              paddingRight: "18px",
                            }}
                          >
                            <div
                              className="close"
                              onClick={closeModalinv}
                              style={{
                                cursor: "pointer",
                              }}
                            >
                              &times;
                            </div>

                            <form
                              style={{
                                height: "450px",
                              }}
                              onSubmit={handleInterest}
                            >
                              <Box>
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-evenly",
                                  }}
                                >
                                  <nav
                                    style={{
                                      width: "100%",
                                    }}
                                  >
                                    <ul
                                      style={{
                                        display: "flex",
                                        listStyle: "none",
                                        paddingInlineStart: "0px",
                                        borderBottom: "1px solid #e9e9eb",
                                        gap: "20px",
                                      }}
                                    >
                                      <li
                                        style={{
                                          fontWeight: "bold",
                                          borderBottom:
                                            invtype === 0
                                              ? "2px solid #00b386"
                                              : "none",
                                          marginRight: "12px",
                                          marginTop: "10px",
                                          color:
                                            invtype === 0 ? "#00b386" : "gray",
                                          cursor: "pointer",
                                          fontSize: "16px",
                                          fontFamily: "Arial, sans-serif",
                                        }}
                                        onClick={() => {
                                          {
                                            !listing.properyheading.includes(
                                              "Dholera"
                                            ) && setinvtype(0);
                                          }
                                        }}
                                      >
                                        Allotment
                                      </li>
                                      <li
                                        style={{
                                          fontWeight: "bold",
                                          borderBottom:
                                            invtype === 1
                                              ? "2px solid #00b386"
                                              : "none",
                                          color:
                                            invtype === 1 ? "#00b386" : "gray",
                                          marginRight: "12px",
                                          marginTop: "10px",
                                          cursor: "pointer",
                                          fontSize: "16px",
                                          fontFamily: "Arial, sans-serif",
                                        }}
                                        onClick={() => {
                                          setinvtype(1);
                                        }}
                                      >
                                        Invest
                                      </li>
                                    </ul>
                                  </nav>
                                </div>

                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  {invtype === 0 && (
                                    <input
                                      type="text"
                                      value={userinvest}
                                      onChange={(event) => {
                                        setUserInvest(event.target.value);
                                      }}
                                      style={{
                                        width: "40%",
                                        fontSize: "14px",
                                        backgroundColor: "#EBF9F5",
                                        color: "#50B487",
                                      }}
                                    />
                                  )}
                                  {invtype === 1 && (
                                    <>
                                      <div class="invest-main-container">
                                        <div className="top-heading gray s-mb-10">
                                          No. of units
                                        </div>
                                        <div
                                          style={{
                                            width: "100%",
                                          }}
                                          className="input-button-container"
                                        >
                                          <button
                                            className="des"
                                            onClick={stockHandlerDec}
                                          >
                                            -
                                          </button>
                                          <input
                                            style={{
                                              fontSize: "1.4rem",
                                              backgroundColor: "#EBF9F5",
                                              marginTop: "0",
                                              maxWidth: "120px",
                                              fontWeight: "600",
                                            }}
                                            className="stk-quantity"
                                            type="text"
                                            value={totalStock.stockQun}
                                            id="stock-quantity"
                                          />
                                          <button
                                            className="asc"
                                            onClick={stockHandlerInc}
                                          >
                                            +
                                          </button>
                                        </div>
                                        <div className="unit-value">
                                          <div className="gray">Unit Value</div>
                                          <div className="price-input-container">
                                            <input
                                              style={{
                                                outline: "none",
                                                border: "none",
                                              }}
                                              className="unit-value-in"
                                              type="text"
                                              value={listing.mininvestment}
                                            />
                                          </div>
                                        </div>
                                        <div className="unit-value">
                                          <div className="gray">
                                            Subscription Value
                                          </div>
                                          <div className="price-input-container">
                                            <input
                                              style={{
                                                outline: "none",
                                                border: "none",
                                              }}
                                              className="unit-value-in"
                                              type="text"
                                              value={totalStock.totalCurrency}
                                            />
                                          </div>
                                        </div>
                                        <div className="unit-value transaction-fee">
                                          <div className="gray">
                                            Transaction Fees
                                          </div>
                                          <div className="price-input-container">
                                            <input
                                              style={{
                                                outline: "none",
                                                border: "none",
                                              }}
                                              className="unit-value-in"
                                              type="text"
                                              value={totalStock.transPer}
                                            />
                                          </div>
                                        </div>
                                        <div
                                          className="couponInput"
                                          style={{
                                            width: "99%",
                                            margin: "auto",
                                            display: "flex",
                                            justifyContent: "space-between",
                                            borderRadius: "5px",
                                            marginBottom: "15px",
                                          }}
                                        >
                                          <input
                                            style={{
                                              width: "53%",
                                              height: "15px",
                                              marginLeft: "-3px",
                                              border:
                                                "1px solid rgb(0, 179, 134)",
                                            }}
                                            type="text"
                                            placeholder="Enter Coupon Code"
                                            value={couponInput}
                                            onChange={handleCouponChange}
                                          />
                                          <button
                                            style={{
                                              backgroundColor:
                                                "rgb(0, 179, 134)",
                                              display: "flex",
                                              alignItems: "center",
                                              justifyContent: "center",
                                              cursor: "pointer",
                                            }}
                                            onClick={applyCoupon}
                                          >
                                            Apply Coupon
                                          </button>
                                        </div>
                                        <div className="unit-value total-fee">
                                          <div>Total</div>
                                          <div className="price-input-container">
                                            <input
                                              style={{
                                                outline: "none",
                                                border: "none",
                                              }}
                                              className="unit-value-in"
                                              type="text"
                                              value={"₹" + totalAmount + ".00"}
                                            />
                                          </div>
                                        </div>
                                        <div
                                          style={{
                                            display: "flex",
                                            gap: "30px",
                                          }}
                                        >
                                          {/* <Button
                                            type="submit"
                                            variant="contained"
                                            style={{
                                              margin: "8px 0",
                                              width: "50%",
                                              backgroundColor: "#EBF9F5",
                                              borderRadius: "8px",
                                              color: "#50B487",
                                            }}
                                            color="primary"
                                            fullWidth
                                            onClick={() => {
                                              handleRequest(0);
                                            }}
                                          >
                                            ADD TO CART disable
                                          </Button> */}
                                          <Button
                                            type="submit"
                                            variant="contained"
                                            style={{
                                              margin: "8px 0",
                                              width: "100%",
                                              backgroundColor: "#00b386",
                                              borderRadius: "8px",
                                            }}
                                            color="primary"
                                            fullWidth
                                            onClick={handlePopopRequest}
                                          >
                                            INVEST
                                          </Button>
                                        </div>
                                      </div>
                                    </>
                                  )}
                                </div>
                                {invtype === 0 && (
                                  <>
                                    <Box
                                      sx={{
                                        width: "90%",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginLeft: "16px",
                                      }}
                                    >
                                      <Slider
                                        aria-label="Temperature"
                                        defaultValue={5000}
                                        getAriaValueText={valuetext}
                                        min={5000}
                                        max={305000}
                                        step={30000}
                                        marks={marks}
                                        onChange={handleUserInvestChange}
                                      />
                                    </Box>
                                  </>
                                )}
                              </Box>
                              {invtype === 0 && (
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <Label>
                                    <LabelName
                                      sx={{
                                        marginTop: "14px",
                                        fontSize: "14px",
                                      }}
                                    >
                                      Allotment Fees:
                                    </LabelName>
                                  </Label>
                                  <input
                                    type="text"
                                    value={`₹ ` + userinvest * 0.05}
                                    style={{
                                      width: "40%",
                                      fontSize: "14px",
                                      backgroundColor: "#EBF9F5",
                                      color: "#50B487",
                                    }}
                                  />
                                </div>
                              )}

                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                                {invtype === 0 && (
                                  <>
                                    <Label>
                                      <LabelName
                                        sx={{
                                          marginTop: "14px",
                                          fontSize: "14px",
                                        }}
                                      >
                                        Allotment date:
                                      </LabelName>
                                    </Label>
                                    <input
                                      type="text"
                                      value={`1 Mar`}
                                      style={{
                                        width: "40%",
                                        fontSize: "14px",
                                        backgroundColor: "#EBF9F5",
                                        color: "#50B487",
                                      }}
                                    />
                                  </>
                                )}
                              </div>
                              {invtype === 0 && (
                                <Label
                                  style={{
                                    textAlign: "center",
                                  }}
                                  sx={{
                                    textAlign: "center",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginTop: "50px",
                                  }}
                                >
                                  <LabelName
                                    sx={{
                                      textAlign: "center",
                                      fontSize: "8px",
                                      color: "#7c7e8c",
                                      marginTop: "50px",
                                    }}
                                  >
                                    This 5% application fees is a reservation
                                    only. You will have to pay the whole amount
                                    on the date of allotment to know more
                                    checkout{" "}
                                    <a href="https://www.venq.in/investing">
                                      venq.in/investing
                                    </a>
                                  </LabelName>
                                </Label>
                              )}
                            </form>
                          </div>
                        )}
                      </StyledPopupinv>
                    </Box>
                    <div style={{}}>
                      <div
                        style={{
                          marginTop: "20px",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      ></div>
                    </div>
                    <ToastContainer />

                    <Typography
                      style={{
                        fontFamily: "Arial, sans-serif",
                        textAlign: "center",
                        fontSize: "14px",
                        marginTop: "16px",
                      }}
                    >
                      You won't be charged yet
                    </Typography>
                  </Box>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "20px",
                      color: "grey",
                      padding: "10px",
                    }}
                  >
                    <AutoAwesomeOutlinedIcon />
                    <Typography
                      style={{
                        fontFamily: "Arial, sans-serif",
                        paddingLeft: "10px",
                        fontSize: "14px",
                      }}
                    >
                      3,987 people viewed this property
                    </Typography>
                  </Box>
                </Pricing>
              </Grid>
            )}
          </Grid>
        </Box>
        {isSmallScreen && (
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "20px",
              color: "grey",
              padding: "10px",
            }}
          >
            <AutoAwesomeOutlinedIcon />
            <Typography
              style={{
                fontFamily: "Arial, sans-serif",
                paddingLeft: "10px",
                fontSize: "14px",
              }}
            >
              3,987 people viewed this property
            </Typography>
          </Box>

        )}





        {!isEditMode && isAdmin && (
          <button onClick={handleEditClick}>Edit</button>
        )}
        <Box>
          {isSmallScreen && (
            <Options style={{ marginTop: "30px" }}>
              <HelpIcon />
              <Heading>Help and Support</Heading>
            </Options>
          )}
        </Box>
        {isSmallScreen && (
          <div
            style={{
              position: "fixed",
              bottom: 0,
              left: 0,
              right: 0,
              width: "100%",
              paddingTop: "10px",
              paddingBottom: "10px",
              backgroundColor: "white", // Customize the background color
              borderTop: "1px solid grey",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Box
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <button
                onClick={() => {
                  window.location.href = "https://calendly.com/venqtech/15min";
                }}
                style={{
                  alignContent: "center",
                  alignItems: "center",
                  color: "#50B487",
                  backgroundColor: "#EBF9F5",
                  borderRadius: "5px",
                }}
              >
                Schedule an E-meet
              </button>
              {listing.islive === 2 && (
                <button
                  onClick={() => setOpen((o) => !o)}
                  style={{
                    alignContent: "center",
                    alignItems: "center",
                    backgroundColor: "#00b386",
                    borderRadius: "5px",
                    padding: "10px",
                  }}
                >
                  I'm Interested
                </button>
              )}

              {listing.islive === 1 && (
                <button
                  onClick={() => setOpenInv((o) => !o)}
                  style={{
                    alignContent: "center",
                    alignItems: "center",
                    backgroundColor: "#00b386",
                    borderRadius: "5px",
                    paddingTop: "8px",
                    paddingBottom: "8px",
                    paddingLeft: "11%",
                    paddingRight: "11%",
                  }}
                >
                  Invest{" "}
                </button>
              )}
              <StyledPopup
                open={open}
                closeOnDocumentClick
                onClose={closeModal}
              >
                <div className="modal">
                  <div>
                    <div className="close" onClick={closeModal} style={{
                      cursor: "pointer",
                    }}>
                      &times;
                    </div>
                  </div>

                  <form style={{ padding: "10px 20px" }} onSubmit={handleInterest}>
                    <Box style={{ padding: "10px 40px" }}>
                      <Label>
                        <LabelName>Select Amount to invest:</LabelName>
                      </Label>
                      <Label>
                        <LabelAmount>INR {listing.minAmountToInvest}</LabelAmount>
                      </Label>

                      <LabelSlider
                        type="range"
                        min="50000"
                        max="300000"
                        step="500"
                        value={interestamount}
                        onChange={handleInterestChange}
                      />
                    </Box>
                    <Button
                      type="submit"
                      variant="contained"
                      style={{ margin: "8px 0" }}
                      color="primary"
                      fullWidth
                    >
                      Show Interest
                    </Button>
                  </form>
                </div>
              </StyledPopup>

              {/* chota version */}
              <StyledPopupinvSmall
                open={openinv}
                closeOnDocumentClick
                onClose={closeModalinv}
              >
                <div
                  className="modal"
                  style={{
                    height: "100%",
                    // backgroundColor:'red',1

                    margin: "0px",
                    marginTop: "-10px",
                    paddingLeft: "18px",
                    paddingRight: "18px",
                  }}
                >
                  <div
                    className="close"
                    onClick={closeModalinv}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    &times;
                  </div>

                  <form
                    style={{
                      height: "450px",
                    }}
                    onSubmit={handleInterest}
                  >
                    <Box>
                      {!showInvestComponent ? (
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-evenly",
                          }}
                        >
                          <nav
                            style={{
                              width: "100%",
                            }}
                          >
                            <ul
                              style={{
                                display: "flex",
                                listStyle: "none",
                                paddingInlineStart: "0px",
                                borderBottom: "1px solid #e9e9eb",
                                gap: "20px",
                              }}
                            >
                              <li
                                style={{
                                  fontWeight: "bold",
                                  borderBottom:
                                    invtype === 0 ? "2px solid #00b386" : "none",
                                  marginRight: "12px",
                                  color: invtype === 0 ? "#00b386" : "gray",
                                  cursor: "pointer",
                                  fontSize: "16px",
                                  fontFamily: "Arial, sans-serif",
                                }}
                                onClick={() => { }}
                              >
                                Allotment
                              </li>
                              <li
                                style={{
                                  fontWeight: "bold",
                                  borderBottom:
                                    invtype === 1 ? "2px solid #00b386" : "none",
                                  color: invtype === 1 ? "#00b386" : "gray",
                                  marginRight: "12px",
                                  cursor: "pointer",
                                  fontSize: "16px",
                                  fontFamily: "Arial, sans-serif",
                                }}
                                onClick={() => {
                                  setinvtype(1);
                                }}
                              >
                                Invest
                              </li>
                            </ul>
                          </nav>
                        </div>
                      ) : (
                        <></>
                      )}

                      {showInvestComponent ? (
                        <Terms userinvestone={totalAmount} />
                      ) : (
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Label>
                            <LabelName
                              sx={{
                                fontSize: "14px",
                                marginTop: "14px",
                              }}
                            ></LabelName>
                          </Label>
                          {invtype === 0 && (
                            <input
                              type="text"
                              value={userinvest}
                              onChange={(event) => {
                                setUserInvest(event.target.value);
                              }}
                              style={{
                                width: "40%",
                                fontSize: "14px",
                                backgroundColor: "#EBF9F5",
                                color: "#50B487",
                              }}
                            />
                          )}
                          {invtype === 1 && (
                            <>
                              <div class="invest-main-container">
                                <div className="top-heading gray s-mb-10">
                                  No. of units
                                </div>
                                <div
                                  style={{
                                    width: "100%",
                                  }}
                                  className="input-button-container"
                                >
                                  <button
                                    className="des"
                                    onClick={stockHandlerDec}
                                  >
                                    -
                                  </button>
                                  <input
                                    style={{
                                      fontSize: "1.4rem",
                                      backgroundColor: "#EBF9F5",
                                      marginTop: "0",
                                      maxWidth: "120px",
                                      fontWeight: "600",
                                    }}
                                    className="stk-quantity"
                                    type="text"
                                    value={totalStock.stockQun}
                                    id="stock-quantity"
                                  />
                                  <button
                                    className="asc"
                                    onClick={stockHandlerInc}
                                  >
                                    +
                                  </button>
                                </div>
                                <div className="unit-value">
                                  <div className="gray">Unit Value</div>
                                  <div className="price-input-container">
                                    <input
                                      style={{
                                        outline: "none",
                                        border: "none",
                                      }}
                                      className="unit-value-in"
                                      type="text"
                                      value={unitPrice}
                                    />
                                  </div>
                                </div>
                                <div className="unit-value">
                                  <div className="gray">Subscription Value</div>
                                  <div className="price-input-container">
                                    <input
                                      style={{
                                        outline: "none",
                                        border: "none",
                                      }}
                                      className="unit-value-in"
                                      type="text"
                                      value={totalStock.totalCurrency}
                                    />
                                  </div>
                                </div>
                                <div className="unit-value transaction-fee">
                                  <div className="gray">Transaction Fees</div>
                                  <div className="price-input-container">
                                    <input
                                      style={{
                                        outline: "none",
                                        border: "none",
                                      }}
                                      className="unit-value-in"
                                      type="text"
                                      value={totalStock.transPer}
                                    />
                                  </div>
                                </div>
                                <div
                                  className="couponInput"
                                  style={{
                                    width: "99%",
                                    margin: "auto",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    borderRadius: "5px",
                                    marginBottom: "15px",
                                  }}
                                >
                                  <input
                                    style={{
                                      width: "50%",
                                      height: "15px",
                                      marginLeft: "-3px",
                                      border: "1px solid rgb(0, 179, 134)",
                                    }}
                                    type="text"
                                    placeholder="Enter Coupon Code"
                                    value={couponInput}
                                    onChange={handleCouponChange}
                                  />

                                  <button
                                    style={{
                                      backgroundColor: "rgb(0, 179, 134)",
                                      display: "flex",
                                      width: "30%",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      cursor: "pointer",
                                    }}
                                    onClick={applyCoupon}
                                  >
                                    Apply
                                  </button>
                                </div>
                                <div className="unit-value total-fee">
                                  <div>Total</div>
                                  <div className="price-input-container">
                                    <input
                                      style={{
                                        outline: "none",
                                        border: "none",
                                      }}
                                      className="unit-value-in"
                                      type="text"
                                      value={"₹" + totalAmount + ".00"}
                                    // value={totalStock.totalAmt}
                                    // value="9999"
                                    />
                                  </div>
                                </div>
                                <div
                                  style={{
                                    display: "flex",
                                    gap: "30px",
                                  }}
                                >
                                  <Button
                                    type="submit"
                                    variant="contained"
                                    style={{
                                      margin: "8px 0",
                                      width: "70%",
                                      height: "5vh",
                                      backgroundColor: "#EBF9F5",
                                      borderRadius: "8px",
                                      color: "#50B487",
                                    }}
                                    color="primary"
                                    fullWidth
                                    onClick={() => {
                                      handleRequest(0);
                                    }}
                                  // disabled={selectedValue==""}
                                  >
                                    ADD TO CART
                                  </Button>
                                  <Button
                                    type="submit"
                                    variant="contained"
                                    style={{
                                      margin: "8px 0",
                                      width: "50%",
                                      height: "5vh",
                                      backgroundColor: "#00b386",
                                      borderRadius: "8px",
                                    }}
                                    color="primary"
                                    fullWidth
                                    onClick={handlePopopRequest}
                                  // disabled={selectedValue==""}
                                  >
                                    INVEST
                                  </Button>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      )}
                      {invtype === 0 && !showInvestComponent && (
                        <>
                          <Box
                            sx={{
                              width: "90%",
                              alignItems: "center",
                              justifyContent: "center",
                              marginLeft: "16px",
                            }}
                          >
                            <Slider
                              aria-label="Temperature"
                              defaultValue={5000}
                              getAriaValueText={valuetext}
                              min={5000}
                              max={305000}
                              step={30000}
                              marks={marks}
                              onChange={handleUserInvestChange}
                            />
                          </Box>
                        </>
                      )}
                    </Box>
                  </form>
                </div>
              </StyledPopupinvSmall>
            </Box>
          </div>
        )}
      </Box>
    </div>
  );
};

export default PropertyItem;
