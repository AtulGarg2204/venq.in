import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  ImageList,
  ImageListItem,
  ThemeProvider,
  Tooltip,
  Typography,
  createTheme,
  styled,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  useMediaQuery,
  TextField,
} from "@mui/material";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import { Link, useLocation } from "react-router-dom";
import Popup from "reactjs-popup";
import config from "../../../config";
import Terms from "../../common/terms";
const Kyc_popup = () => {
  const [activeButton, setActiveButton] = useState("available");
  const handleButtonClick = (value) => {
    setActiveButton(value);
  };
  const [quantity, setQuantity] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [isAdmin, setAdmin] = useState(false);
  const [currp, setcurrp] = useState("");
  const [onbcomp, setonbcomp] = useState(0);
  const token = JSON.parse(localStorage.getItem("userinfo"));
  const URL = config.URL;
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
      width: 30%;
      margin-left: 33%;
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
      height: 550px;
      width: 35%;
      margin-left: 33%;
      margin-top: 5%;
      background-color: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(5px);
      border: 1px solid #e9e9eb;
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
  const Label = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;
  `;
  const LabelName = styled(Typography)`
    font-family: "Inter";
    font-size: 18px;
    color: black;
  `;
  const LabelAmount = styled(Typography)`
    text-align: "center";
    font-family: "Inter";
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
    font-family: Inter;
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
    font-family: "Inter";
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
    font-family: "Inter";
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
    font-family: "Inter";
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
            fontFamily: "Inter",
            backgroundColor: "#121c30",
            textAlign: "center",
          },
        },
      },
    },
  });

  const Logo = styled(Box)`
    width: 50px;
    height: 50px;
    padding: 4px 10px;
    margin-right: 10px;
  `;
  const SubTitle = styled(Typography)`
    color: black;
    font-size: 15px;
    font-family: "Inter";
    padding: 5px;
  `;
  const PropertyDetails = styled(Box)`
    display: flex;
    padding: 15px 0;
    align-items: center;
  `;
  const PropertyHeading = styled(Typography)`
    font-family: "Inter";
    font-weight: 600;
    font-size: 18px;
  `;
  const PropertyHeadingSmall = styled(Typography)`
    font-family: "Inter";
    font-weight: 600;
    font-size: 16px;
    width: 80%;
    word-wrap: break-word;
  `;
  const PropertySubHeading = styled(Typography)`
    font-family: "Inter";
    font-size: 16px;
    color: grey;
  `;
  const GraphInfo = styled(Box)`
    display: flex;
    align-items: flex-start;
  `;
  const GraphHeading = styled(Typography)`
    font-size: 15px;
    color: grey;
    font-family: "Inter";
  `;
  const GraphSubHeading = styled(Typography)`
    font-size: 15px;
    font-weight: 600;
    font-family: "Inter";
  `;
  const MoreButton = styled(Typography)`
    font-family: "Inter";
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
    font-family: "Inter";
    font-size: 17px;
    font-weight: 600;
  `;
  const FinanceSubHeading = styled(Typography)`
    color: grey;
    font-family: "Inter";
    font-size: 16px;
  `;
  const FinanceAmount = styled(Typography)`
    font-family: "Inter";
    font-size: 16px;
    font-weight: 600;
  `;
  const LocationName = styled(Typography)`
    font-family: "Inter";
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
      font-family: "Inter";
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
    font-family: "Inter";
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
    font-family: "Inter";
  `;
  const Header = styled(Typography)`
    font-size: 20px;
    font-weight: 600;
    font-family: "Inter";
    margin: 10px 0;
  `;
  useEffect(() => {
    axios
      .get(`${URL}/investment/${token.email}`)
      .then((response) => {
        // console.log("Fetched data from server:", response.data);
        // console.log(response.data);
        setCartItems(response.data.all);
        console.log(response.data);
        setQuantity(response.data.allv);
      })
      .catch((error) => {
        console.error(error);
      });
    setAdmin(token.isAdmin);
    axios
      .get(`${URL}/auth/user/checkverify/${token.email}`)
      .then((response) => {
        console.log(response.data.isVerified);
        setonbcomp(response.data.isVerified);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      {/* {!onbcomp && (
        <>
          <div>hello ji kya hal</div>
        </>
      )}
      {onbcomp && <div>thik hai bhai krdunga</div>} */}
      hello
    </div>
  );
};
export default Kyc_popup;
