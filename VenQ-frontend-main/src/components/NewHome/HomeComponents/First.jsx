import "./first.css";
// import './First.module.css'
import property from "./images/property.png";
import ReturnCalculator from "./ReturnCalculator";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import Box from "@mui/material/Box";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import circle from "./interestgraphassets/Framecircle.png";
import apartment from "./interestgraphassets/apartment.png";
import building from "./interestgraphassets/building.png";
import plotting from "./interestgraphassets/plotting.png";
import villa from "./interestgraphassets/villa.png";
import React, { useState, useEffect } from "react";
import MoneyOutlinedIcon from "@mui/icons-material/MoneyOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "./Interstgraph.css";
import config from "../../../config";

import { border, fontSize, height } from "@mui/system";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const First = () => {
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(5000);
  const [lengthOfTime, setLengthOfTime] = useState("3");
  const [interestRate, setInterestRate] = useState("6.00");
  const [compoundFrequency, setCompoundFrequency] = useState("annually");
  const [finalAmount, setFinalAmount] = useState(null);
  const [rentalAmount, setRentalAmount] = useState(null);
  const [interestRateData, setInterestRateData] = useState([]);
  // ---------------------for live div home----------------
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [listings, setListings] = useState([]);
  const URL = config.URL;
  const navigate = useNavigate();

  useEffect(() => {
    // ---------------------for live div home----------------
    if (JSON.parse(localStorage.getItem("userinfo"))) {
      setLoggedIn(true);
    }
    axios
      .get(`${URL}/listing`)

      .then((response) => {
        setListings(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    // ---------------------for live div home----------------
    // handleCalculate();
  }, []);

  const Property = styled(Card)`
    background-color: white;
    border-radius: 10px;
    transition: transform 0.2s ease-in-out;
    &:hover {
      transform: translateY(-10px);
    }
  `;

  const SubheaderFixed = styled(Box)`
    display: flex;
    position: fixed;
    top: 5px;
    left: 5px;
    font-size: 12px;
    gap: 10px;
  `;

  const FixedBox = styled(Box)`
    background-color: white;
    color: black;
    position: fixed;
    bottom: 5px;
    right: 5px;
    font-family: "Inter";
    font-size: 12px;
    padding: 5px;
    border-radius: 5px;
  `;

  const PriceBox = styled(Box)`
    display: flex;
    justify-content: space-between;
    margin: 5px 0 14px 0;
    margin-left: 4px;
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

  const Subheader = styled(Box)`
    display: flex;
    gap: 5px;
    margin-top: 10px;
    margin-left: 16px;
    & div {
      // height:20px;
      border: 1px solid lightgray;
      padding: 4px 5px;
      font-size: 14px;
      border-radius: 6px;
    }
  `;

  const Header = styled(Typography)`
    font-size: 16px;
    font-weight: 600;
    height: 30px;
    display: flex;
    align-items: center;
    font-family: "Gilroy-Bold";
    margin-top: 10px;
    margin-left: 20px;
  `;
  const handleInvestment = () => {
    const userinfo = JSON.parse(localStorage.getItem("userinfo"));

    if (!userinfo || !userinfo._id) {
      console.error("Customer ID not found in localStorage");
      return;
    }
    const customerId = userinfo._id;
    const requestBody = {
      propertyName: "fifth  entry property",
      amount: 450,
      quantity: 7,
    };
    axios
      .post(`http://localhost:4000/purchased/${customerId}`, requestBody)
      .then((response) => {
        console.log(response.data, "responseeeee");
        // Check if response is OK
        if (!response.status === 201) {
          throw new Error("Network response was not ok");
        }
        console.log("Investment added successfully:", response.data);
        // Optionally, you can perform any actions after successful addition of investment
      })
      .catch((error) => {
        console.error("Error adding investment:", error);
        // Handle errors or display error message to the user
      });
  };

  return (
    <div className="hero-new-container">
      <div className="hero-heading heading--primary main-heading">
        <h3 className="invest_in_real_estate_parent">
          <h2 className="invest_in">INVEST IN</h2>
          <h2 style={{ marginRight: "9px" }} className="space"></h2>
          <h2 className="invest_in_real_estate"> REAL ESTATE</h2>
        </h3>
        <h2 className="with_just">WITH JUST RS. 5000</h2>
        {/* <button onClick={handleInvestment}>post check</button> */}
        <button onClick={() => navigate("/properties")} className="main-button">
          GET STARTED
        </button>
      </div>
      <div className="live-property">
        <div className="inner-box">
          <div className="left-div">
            <h3>If you had invested</h3>
            <ReturnCalculator />
          </div>

          <div className="property_card_container">
          
            <div className="blue_container">
              <h3 className="property_heading_label">
                Dont worry its not too late
              </h3>
              <div className="property_card">
                {listings
                  .filter((listing) => listing.islive === 1)
                  .map((listing) => (
                    <Grid
                    // key={listing._id}
                    // item
                    // xs={1}
                    // sm={4}
                    // md={4}
                    // sx={{
                    //   display: "flex",
                    //   justifyContent: "center",
                    //   alignItems: "center",
                    // }}
                    >
                      <Link
                        to={
                          isLoggedIn
                            ? `/dashboard/properties/view/${listing._id}`
                            : ``
                        }
                        style={{ textDecoration: "none" }}
                      >
                        <Property sx={{ maxWidth: 365 }}>
                          <CardActionArea>
                            <CardMedia>
                              <Carousel
                                showThumbs={false}
                                statusFormatter={() => {
                                  return "";
                                }}
                              >
                                {listing.images.map((image, index) => (
                                  <div
                                    key={index}
                                    style={{
                                      height: "100px",
                                    }}
                                  >
                                    <img
                                      style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                      }}
                                      src={image}
                                      alt={`image-${index}`}
                                    />

                                    {listing.islive == 1 && (
                                      <SubheaderFixed>
                                        <Box
                                          sx={{
                                            backgroundColor: "#56C29C",
                                            color: "white",
                                            borderRadius: "5px",
                                            padding: "5px 10px",
                                          }}
                                        >
                                          Live
                                        </Box>
                                        <Box
                                          sx={{
                                            backgroundColor: "white",
                                            fontFamily: "Inter",
                                            color: "black",
                                            borderRadius: "5px",
                                            padding: "5px",
                                          }}
                                        >
                                          Reduced Pricing
                                        </Box>
                                      </SubheaderFixed>
                                    )}

                                    <FixedBox>
                                      {listing.properyheading.includes("Plot")
                                        ? "Plot"
                                        : "Luxury Property"}
                                    </FixedBox>
                                  </div>
                                ))}
                              </Carousel>
                            </CardMedia>
                            <Subheader
                              sx={{
                                display: "flex",
                                justifyContent: "space-around",
                              }}
                            >
                              <Box
                                style={{
                                  marginLeft: "-8px",
                                  fontSize: "9px",
                                  height: "fit-content",
                                }}
                              >
                                {listing.propertydescription.split(" | ")[0]}
                              </Box>
                              <Box
                                style={{
                                  marginLeft: "20px",
                                  fontSize: "9px",
                                  height: "fit-content",
                                }}
                              >
                                {listing.propertydescription.split(" | ")[1]}
                              </Box>
                              <Box
                                style={{
                                  marginLeft: "20px",
                                  fontSize: "9px",
                                  height: "fit-content",
                                }}
                              >
                                {listing.propertydescription.split(" | ")[2]}
                              </Box>
                            </Subheader>

                            <Header
                              gutterBottom
                              variant="p"
                              sx={{ textAlign: "start" }}
                              component="div"
                            >
                              {listing.properyheading}
                            </Header>
                            {isLoggedIn && (
                              <CardContent
                                sx={{
                                  marginTop: "0px",
                                  paddingTop: "2px",
                                }}
                              >
                                <PriceBox>
                                  <Box
                                    style={{
                                      color: "#0170dc",
                                      fontSize: "18px",
                                      fontWeight: 600,
                                      fontFamily: "Inter",
                                    }}
                                  >
                                    RUP {listing.propertyprice}
                                  </Box>
                                </PriceBox>

                                <ReturnsBox>
                                  <Box sx={{ fontSize: "0.8rem" }}>
                                    <Typography
                                      noWrap
                                      sx={{ fontSize: "0.8rem" }}
                                    >
                                      Funding Date
                                    </Typography>
                                    <Box
                                      style={{
                                        color: "black",
                                        fontWeight: "bold",
                                        fontSize: "0.8rem",
                                      }}
                                    >
                                      {listing.fundingdate}
                                    </Box>
                                  </Box>
                                  <Box>
                                    <Typography
                                      noWrap
                                      sx={{ fontSize: "0.8rem" }}
                                    >
                                      Min. Investment
                                    </Typography>
                                    <Box
                                      style={{
                                        color: "black",
                                        fontWeight: "bold",
                                        fontSize: "0.8rem",
                                      }}
                                    >
                                      {listing.mininvestment}
                                    </Box>
                                  </Box>
                                </ReturnsBox>
                              </CardContent>
                            )}
                            {!isLoggedIn && (
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    width: "90%",
                                    backgroundColor: "#eee15",
                                    display: "flex",
                                    flexDirection: "column",
                                    height: "100px",
                                    alignItems: "center",
                                  }}
                                >
                                  <Link
                                    to="/login"
                                    style={{
                                      textDecoration: "none",
                                    }}
                                  >
                                    <div
                                      style={{
                                        padding: "10px",
                                        borderRadius: "10px",
                                        display: "flex",
                                        flexDirection: "column",
                                        backgroundImage: "images/blurimg.png",
                                      }}
                                    >
                                      <div
                                        style={{
                                          display: "flex",
                                          justifyContent: "center",
                                          marginTop: "5%",
                                        }}
                                      >
                                        <img
                                          src="images/lock.png"
                                          alt="lock"
                                          height={30}
                                          width={30}
                                        />
                                      </div>

                                      <div
                                        style={{
                                          marginTop: "10px",
                                          textAlign: "center",
                                        }}
                                      >
                                        <Link
                                          to="/login"
                                          style={{
                                            textDecoration: "none",
                                            color: "#41CE8E",
                                            fontWeight: "600",
                                          }}
                                        >
                                          Signup
                                        </Link>{" "}
                                        or{" "}
                                        <Link
                                          to="/login"
                                          style={{
                                            textDecoration: "none",
                                            color: "#41CE8E",
                                            fontWeight: "600",
                                          }}
                                        >
                                          Login
                                        </Link>{" "}
                                        to view the property
                                      </div>
                                    </div>
                                  </Link>

                                  <div></div>
                                </div>
                              </div>
                            )}
                          </CardActionArea>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "flex-start",
                              marginBottom: "15px",
                            }}
                          >
                            {isLoggedIn && listing.islive == 1 && (
                              <Button
                                sx={{
                                  paddingLeft: "65px",
                                  paddingRight: "65px",
                                  backgroundColor: "#0170dc",
                                  color: "white",
                                }}
                              >
                                Invest
                              </Button>
                            )}
                            {isLoggedIn && listing.islive == 2 && (
                              <Button
                                sx={{
                                  paddingLeft: "65px",
                                  paddingRight: "65px",
                                  backgroundColor: "#0170dc",
                                  color: "white",
                                }}
                              >
                                I'm Interested
                              </Button>
                            )}
                          </div>
                        </Property>
                      </Link>
                    </Grid>
                  ))}
              </div>
            </div>

            {/* <div className='home_live_property_container_three'></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
