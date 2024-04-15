import React, { useState, useEffect } from "react";
import "./Income.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faL, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

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
} from "@mui/material";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import config from "../config";
import IncomeSlider from "./IncomeSlider";

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
  // align-items: flex-start;
  font-weight: 600;
  // align-content: start;
  font-family: "Inter";
  margin: 10px 120px 10px 0px;
  width: 100%;
`;

const Income = () => {
  const [listings, setListings] = useState([]);

  const URL = config.URL;
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`${URL}/listing/`, {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("details")}`,
  //         },
  //       });
  //       setListings(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, [URL]);

  // const listing = listings.length > 0 ? listings[0] : null;

  // if (!listing) {
  //   // return <p>Loading...</p>;

  //   return (
  //     <div className="income-bottom-div-small">
  //       <div className="income-small-card">
  //         <img className="image-svg-1" src="images/coins-solid.svg" />
  //         <h1>Monthly Rental Revenue </h1>
  //         <p>Consistent passive income from monthly rental payments.</p>
  //       </div>
  //       <div className="income-small-card second">
  //         <img className="image-svg-2" src="images/card_in_hand.svg" />
  //         <h1>Long-Term Capital Growth </h1>
  //         <p>Witness your investment thrive as the value of the property appreciates over time. </p>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className={`income-main ${isSmallScreen ? "small-screen" : ""}`}>
      <div className="income-section">
        <div className="income-up-div">
          <h2>How do you make money?</h2>
          <p
            style={{
              textAlign: "center",
              fontSize: "20px",
            }}
          >
            VenQ's mission is democratizing real estate investment.
          </p>
        </div>
        {!isSmallScreen ? (
          <div className="income-bottom-div">
            {!isSmallScreen && (
              <div className="income-small-card1">
                <img className="image-svg-1" src="images/coins-solid.svg" />
                <h1>Monthly Rental Revenue </h1>
                <p>Consistent passive income from monthly rental payments.</p>
              </div>
            )}

            <div
              className={`income-big-card ${
                isSmallScreen ? "small-screen" : ""
              }`}
            >
              {!isSmallScreen && (
                <div className="RentedBox">
                  <p>CCD</p>
                </div>
              )}
              <div className="midbox">
                <Grid item xs={2} sm={4} md={4}>
                  <Link
                    to={`/dashboard/properties`}
                    style={{ textDecoration: "none" }}
                  >
                    <Property sx={{ maxWidth: 345 }}>
                      <CardActionArea>
                        <CardMedia>
                          <Category>Luxury Property</Category>
                          <Carousel showThumbs={false}>
                            <div>
                              <img src="/images/signup_page.jpg" alt="first" />
                            </div>
                            <div>
                              <img src="/images/signup_page.jpg" alt="second" />
                            </div>
                            <div>
                              <img src="/images/signup_page.jpg" alt="third" />
                            </div>
                          </Carousel>
                        </CardMedia>

                        <CardContent>
                          <Subheader>
                            <Box>India</Box>
                            <Box>Rented</Box>
                          </Subheader>

                          <Header gutterBottom variant="h5" component="div">
                            3BHK in Whiteland Aspen, Gurgaon
                          </Header>

                          <PriceBox>
                            <Box
                              style={{
                                color: "#0170dc",
                                fontSize: "18px",
                                fontWeight: 600,
                                fontFamily: "Inter",
                              }}
                            >
                              Rup 3,30,00,000
                            </Box>
                            {/* <Box>523 Investors</Box> */}
                          </PriceBox>

                          <ReturnsBox>
                            <Box>
                              <Box>Min. Ticket Size</Box>
                              <Box
                                style={{ color: "black", fontWeight: "bold" }}
                              >
                                2,00,000
                              </Box>
                            </Box>

                            <Box>
                              <Box>Fundraising Starts</Box>
                              <Box
                                style={{ color: "black", fontWeight: "bold" }}
                              >
                                20 Feb 2024
                              </Box>
                            </Box>

                            <Box>
                              <Box>Current Valuation</Box>
                              <Box
                                style={{ color: "black", fontWeight: "bold" }}
                              >
                                Rup 3,30,00,000
                              </Box>
                            </Box>
                          </ReturnsBox>
                        </CardContent>
                      </CardActionArea>
                    </Property>
                  </Link>
                </Grid>
              </div>
            </div>

            {!isSmallScreen && (
              <div className="income-small-card">
                <img className="image-svg-2" src="images/card_in_hand.svg" />
                <h1>Long-Term Capital Growth </h1>
                <p>
                  Witness your investment thrive as the value of the property
                  appreciates over time.{" "}
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="income-bottom-div-small">
            <div className="income-small-card">
              <img className="image-svg-1" src="images/coins-solid.svg" />
              <h1>Monthly Rental Revenue </h1>
              <p>Consistent passive income from monthly rental payments.</p>
            </div>
            <div className="income-small-card second">
              <img className="image-svg-2" src="images/card_in_hand.svg" />
              <h1>Long-Term Capital Growth </h1>
              <p>
                Witness your investment thrive as the value of the property
                appreciates over time.
              </p>
            </div>
            {/* <IncomeSlider/> */}
          </div>
        )}
      </div>
      <>
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/45720526.js"
        ></script>
        ;
        
      </>
    </div>
  );
};

export default Income;
