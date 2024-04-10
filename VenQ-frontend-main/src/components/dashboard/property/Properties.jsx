import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import Box from "@mui/material/Box";
import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import EventIcon from "@mui/icons-material/Event";
import { Link, useNavigate } from "react-router-dom";
import PropertyItem from "./PropertyItem";
import { useHistory } from "react-router-dom";
import star from "./star.png";
import axios from "axios";
import config from "../../../config";

const Property = styled(Card)`
  background-color: white;
  border-radius: 10px;
  &:hover {
    transform: translateY(-10px);
  }
`;
const Subheader = styled(Box)`
  display: flex;
  gap: 5px;
  & div {
    // height:20px;
    border: 1px solid lightgray;
    padding: 4px 5px;
    font-size: 12px;
    border-radius: 6px;
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
const PriceBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin: 10px 0 10px 0;
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
const Options = styled(Box)`
  margin: 20px 10px 40px 0px;
  background-color: white;
  padding: 0 5x;
  width: 100%;
  border-radius: 10px;
  display: flex;
`;
const OptionName = styled(Button)`
  // border: 2px solid black;
  padding: 10px 45px;
  margin: 10px;
  width: 150%;
  border-radius: 10px;
  background-color: ${(props) =>
    props.active ? "#0170dc !important" : "white"};
  color: ${(props) => (props.active ? "white !important" : "black")};
  &:hover {
    background-color: #0170dc;
    color: white;
    border: none;
  }
  &:focus {
    background-color: #0170dc;
    color: white;
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
  font-size: 16px;
  font-weight: 600;
  height: 30px;
  display: flex;
  align-items: center;
  font-family: "Gilroy-Bold";
  margin: 10px 0;
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

const CartButton = styled(Button)`
  /* background-color: #0170dc; */
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

const Properties = () => {
  const [activeButton, setActiveButton] = useState("available");
  const handleButtonClick = (value) => {
    setActiveButton(value);
  };

  const [listings, setListings] = useState([]);
  const [isAdmin, setAdmin] = useState(false);
  const token = JSON.parse(localStorage.getItem("userinfo"));
  const URL = config.URL;

  useEffect(() => {
    axios
      .get(`${URL}/listing`)
      .then((response) => {
        // console.log("Fetched data from server:", response.data);
        console.log(response.data);
        setListings(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    setAdmin(token.isAdmin);
  }, []);

  // const luxuryListings = listings.filter(
  //   (listing) => listing.main_heading === "Luxury Property"
  // );
  // console.log(luxuryListings);

  //handl

  const navigate = useNavigate();

  const handleAddListingClick = () => {
    // Navigate to the "Form" page
    navigate("/form");
  };
  return (
    <div>
      {/* <p>fkdsjkflj</p> */}
      <Box style={{ padding: "30px" }}>
        <Typography
          variant="h4"
          style={{
            fontFamily: "Inter",
            padding: "0 10px 10px 0px",
            fontWeight: 600,
            justifyContent: "space-between",
            display: "flex",
            alignItems: "center",
          }}
        >
          Properties
          {/* {
        isAdmin&&<CartButton onClick={handleAddListingClick} style={{
            marginTop:"15px",
          }}>Add Listing</CartButton> 
      } */}
        </Typography>

        <Options>
          <OptionName
            onClick={() => handleButtonClick("available")}
            active={activeButton === "available"}
          >
            Available
          </OptionName>

          <OptionName
            onClick={() => handleButtonClick("funded")}
            active={activeButton === "funded"}
          >
            Funded
          </OptionName>

          <OptionName
            onClick={() => handleButtonClick("exited")}
            active={activeButton === "exited"}
          >
            Exited
          </OptionName>
        </Options>

        {activeButton === "available" && (
          <Box sx={{ flexGrow: 1, height: "20px" }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 1, sm: 4, md: 12 }}
            >
              {/* .filter((listing) => listing.main_heading === "New Listing") */}

              {listings
                .filter(
                  (listing) => listing.islive === 1 || listing.islive === 2
                )
                .map((filteredListing) => (
                  <Grid key={filteredListing._id} item xs={2} sm={4} md={4}>
                    <Link
                      to={`/dashboard/properties/view/${filteredListing._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Property sx={{ maxWidth: 365 }}>
                        <CardActionArea>
                          {/* {listing.islive!=1 &&  <Category>Luxury Property</Category> } */}

                          <CardMedia>
                            <Carousel
                              showThumbs={false}
                              statusFormatter={() => {
                                return "";
                              }}
                            >
                              {filteredListing.images.map((image, index) => (
                                <div
                                  style={{
                                    // marginTop:listing.islive==1?'0px':'32px',
                                    height: "180px",
                                  }}
                                  key={index}
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
                                  {filteredListing.islive == 1 && (
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
                                  {/* {listing.islive==1 &&  
                              <div style={{
                                position:'fixed',
                                top:'5px',
                                right:'5px',
                              }}>
                                <img src={star} alt="this is me" height={25} width={25}  />
                              </div>
                            } */}

                                  <FixedBox>
                                    {filteredListing.properyheading.includes(
                                      "Plot"
                                    )
                                      ? "Plot"
                                      : "Luxury Property"}
                                  </FixedBox>
                                </div>
                              ))}
                            </Carousel>
                          </CardMedia>

                          <CardContent>
                            <Subheader>
                              <Box>
                                {
                                  filteredListing.propertydescription.split(
                                    " | "
                                  )[0]
                                }
                              </Box>
                              <Box>
                                {
                                  filteredListing.propertydescription.split(
                                    " | "
                                  )[1]
                                }
                              </Box>
                              <Box>
                                {
                                  filteredListing.propertydescription.split(
                                    " | "
                                  )[2]
                                }
                              </Box>
                            </Subheader>

                            <Header gutterBottom variant="p" component="div">
                              {filteredListing.properyheading}
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
                                RUP {filteredListing.propertyprice}
                              </Box>
                              <Box></Box>
                            </PriceBox>
                            {/* <progress
                              style={{
                                width: "100%",
                                margin: "5px 0 10px 0",
                                height: "20px",
                              }}
                              max={1500000}
                              value={1239000}
                            /> */}

                            <ReturnsBox>
                              <Box>
                                <Box>Investment starts</Box>
                                {/* {`${listing.annualizedreturn}`} */}
                                <Box
                                  style={{ color: "black", fontWeight: "bold" }}
                                >
                                  {filteredListing.fundingdate}
                                </Box>
                              </Box>
                              <Box>
                                <Box>Min. Investment</Box>
                                {/* {`${listing.annualizedreturn}`} */}
                                <Box
                                  style={{ color: "black", fontWeight: "bold" }}
                                >
                                  {filteredListing.mininvestment}
                                </Box>
                              </Box>

                              {/* <Box>
                                <Box>Annual Appreciation</Box>
                                <Box
                                  style={{ color: "black", fontWeight: "bold" }}
                                >{`${listing.annualappreciation}`}</Box>
                              </Box>

                              <Box>
                                <Box>Projected gross yield</Box>
                                <Box
                                  style={{ color: "black", fontWeight: "bold" }}
                                >{`${listing.grossyield}`}</Box>
                              </Box>

                              <Box>
                                <Box>Projected net yield</Box>
                                <Box
                                  style={{ color: "black", fontWeight: "bold" }}
                                >{`${listing.netyield}`}</Box>
                              </Box> */}
                            </ReturnsBox>
                          </CardContent>
                        </CardActionArea>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "flex-start",
                            marginBottom: "15px",
                          }}
                        >
                          {filteredListing.islive == 1 && (
                            <Button
                              sx={{
                                paddingLeft: "65px",
                                paddingRight: "65px",
                                backgroundColor: "#0170dc",
                                color: "white",
                              }}
                              onClick={() => {
                                navigate(
                                  `/dashboard/properties/view/${filteredListing._id}`,
                                  { state: 1 }
                                );
                              }}
                            >
                              Invest
                            </Button>
                          )}
                          {filteredListing.islive == 2 && (
                            <Button
                              sx={{
                                paddingLeft: "65px",
                                paddingRight: "65px",
                                backgroundColor: "#0170dc",
                                color: "white",
                              }}
                              onClick={() => {
                                navigate(
                                  `/dashboard/properties/view/${filteredListing._id}`,
                                  {
                                    state: {
                                      id: 1,
                                    },
                                  }
                                );
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
            </Grid>
          </Box>
        )}

        {activeButton === "funded" && (
          <Box sx={{ flexGrow: 1, height: "20px" }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 1, sm: 4, md: 12 }}
            >
              {/* .filter((listing) => listing.main_heading === "New Listing") */}
              {console.log(listings)}
              {listings
                .filter((listing) => listing.islive === 3)
                .map((filteredListing) => (
                  <Grid key={filteredListing._id} item xs={2} sm={4} md={4}>
                    <Link
                      to={`/dashboard/properties/view/${filteredListing._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Property sx={{ maxWidth: 365 }}>
                        <CardActionArea>
                          <CardMedia>
                            <Carousel
                              showThumbs={false}
                              statusFormatter={() => ""}
                            >
                              {filteredListing.images.map((image, index) => (
                                <div
                                  style={{
                                    height: "180px",
                                  }}
                                  key={index}
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
                                  {filteredListing.islive === 1 && (
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
                                    {filteredListing.properyheading.includes(
                                      "Plot"
                                    )
                                      ? "Plot"
                                      : "Luxury Property"}
                                  </FixedBox>
                                </div>
                              ))}
                            </Carousel>
                          </CardMedia>

                          <CardContent>
                            <Subheader>
                              <Box>
                                {
                                  filteredListing.propertydescription.split(
                                    " | "
                                  )[0]
                                }
                              </Box>
                              <Box>
                                {
                                  filteredListing.propertydescription.split(
                                    " | "
                                  )[1]
                                }
                              </Box>
                              <Box>
                                {
                                  filteredListing.propertydescription.split(
                                    " | "
                                  )[2]
                                }
                              </Box>
                            </Subheader>

                            <Header gutterBottom variant="p" component="div">
                              {filteredListing.properyheading}
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
                                RUP {filteredListing.propertyprice}
                              </Box>
                              <Box></Box>
                            </PriceBox>

                            <ReturnsBox>
                              <Box>
                                <Box>Investment Ends</Box>
                                <Box
                                  style={{ color: "black", fontWeight: "bold" }}
                                >
                                  {filteredListing.fundingdate}
                                </Box>
                              </Box>
                              <Box>
                                {/* <Box>Min. Investment</Box>
                                <Box
                                  style={{ color: "black", fontWeight: "bold" }}
                                >
                                  {filteredListing.mininvestment}
                                </Box> */}
                              </Box>
                            </ReturnsBox>
                          </CardContent>
                        </CardActionArea>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "flex-start",
                            marginBottom: "15px",
                          }}
                        >
                          {filteredListing.islive === 3 && (
                            <Button
                              sx={{
                                paddingLeft: "65px",
                                paddingRight: "65px",
                                width: "80%",
                                backgroundColor: "rgb(222, 154, 154)",
                                color: "red",
                              }}
                              onClick={() => {
                                navigate(
                                  `/dashboard/properties/view/${filteredListing._id}`,
                                  {
                                    state: 1,
                                  }
                                );
                              }}
                            >
                              Closed
                            </Button>
                          )}
                          {filteredListing.islive === 2 && (
                            <Button
                              sx={{
                                paddingLeft: "65px",
                                paddingRight: "65px",
                                backgroundColor: "#0170dc",
                                color: "white",
                              }}
                              onClick={() => {
                                navigate(
                                  `/dashboard/properties/view/${filteredListing._id}`,
                                  {
                                    state: {
                                      id: 1,
                                    },
                                  }
                                );
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
            </Grid>
          </Box>
        )}

        {/* {activeButton === "funded" && (
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
               columns={{ xs: 1, sm: 4, md: 12 }}
               // .filter((listing) => listing.main_heading === "Luxury Property")
            >
              {listings.map((listing) => (
                  <Grid key={listing._id} item xs={2} sm={4} md={4}>
                    <Link
                      to={`/dashboard/properties/view/${listing._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Property sx={{ maxWidth: 345 }}>
                      <CardActionArea>
                          <CardMedia>
                            <Category>Luxury Property</Category>

                            <Carousel showThumbs={false}>
                              {listing.images.map((image, index) => (
                                <div key={index}>
                                  <img src={image}  alt={`image-${index}`} />
                                </div>
                              ))}
                            </Carousel>
                          
                          </CardMedia>

                          <CardContent>
                            <Subheader>
                              <Box>India</Box>
                              <Box>Rented</Box>
                            </Subheader>

                            <Header gutterBottom variant="h5" component="div">
                              {listing.properyheading}
                              
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
                                RUP {listing.propertyprice}
                              </Box>
                              <Box>

                              </Box>
                            </PriceBox> */}
        {/* <progress
                              style={{
                                width: "100%",
                                margin: "5px 0 10px 0",
                                height: "20px",
                              }}
                              max={1500000}
                              value={1239000}
                            /> */}

        {/* <ReturnsBox>
                              <Box>
                                <Box>Fuding Date</Box> */}
        {/* {`${listing.annualizedreturn}`} */}
        {/* <Box
                                  style={{ color: "black", fontWeight: "bold" }}
                                >{listing.fundingdate}</Box>
                              </Box>
                              <Box>
                                <Box>Min. Investment</Box> */}
        {/* {`${listing.annualizedreturn}`} */}
        {/* <Box
                                  style={{ color: "black", fontWeight: "bold" }}
                                >{listing.mininvestment}</Box>
                              </Box> */}

        {/* <Box>
                                <Box>Annual Appreciation</Box>
                                <Box
                                  style={{ color: "black", fontWeight: "bold" }}
                                >{`${listing.annualappreciation}`}</Box>
                              </Box>

                              <Box>
                                <Box>Projected gross yield</Box>
                                <Box
                                  style={{ color: "black", fontWeight: "bold" }}
                                >{`${listing.grossyield}`}</Box>
                              </Box>

                              <Box>
                                <Box>Projected net yield</Box>
                                <Box
                                  style={{ color: "black", fontWeight: "bold" }}
                                >{`${listing.netyield}`}</Box>
                              </Box> */}
        {/* </ReturnsBox>
                          </CardContent>
                        </CardActionArea>
                      </Property>
                    </Link>
                  </Grid>
                ))}
            </Grid>
          </Box>
        )} */}

        {/* {activeButton === "exited" && (
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
               columns={{ xs: 1, sm: 4, md: 12 }}
              //  .filter((listing) => listing.main_heading === "Sold")
            > */}
        {/* {listings.map((listing) => (
                  <Grid key={listing._id} item xs={2} sm={4} md={4}>
                    <Link
                      to={`/dashboard/properties/view/${listing._id}`}
                      style={{ textDecoration: "none"}}
                    >
                      <Property sx={{ maxWidth: 345 }}>
                      <CardActionArea>
                          <CardMedia>
                            <Category>Luxury Property</Category>

                            <Carousel showThumbs={false}>
                              {listing.images.map((image, index) => (
                                <div key={index}>
                                  <img src={image}  alt={`image-${index}`} />
                                </div>
                              ))}
                            </Carousel>
                          
                          </CardMedia>

                          <CardContent>
                            <Subheader>
                              <Box>India</Box>
                              <Box>Rented</Box>
                            </Subheader>

                            <Header gutterBottom variant="h5" component="div">
                              {listing.properyheading}
                              
                            </Header>
                            <PriceBox> */}
        {/* <Box
                                style={{
                                  color: "#0170dc",
                                  fontSize: "18px",
                                  fontWeight: 600,
                                  fontFamily: "Inter",
                                }}
                              >
                                RUP {listing.propertyprice}
                              </Box>
                              <Box> */}

        {/* </Box>
                            </PriceBox> */}
        {/* <progress
                              style={{
                                width: "100%",
                                margin: "5px 0 10px 0",
                                height: "20px",
                              }}
                              max={1500000}
                              value={1239000}
                            /> */}

        {/* <ReturnsBox>
                              <Box>
                                <Box>Fuding Date</Box> */}
        {/* {`${listing.annualizedreturn}`} */}
        {/* <Box
                                  style={{ color: "black", fontWeight: "bold" }}
                                >{listing.fundingdate}</Box>
                              </Box>
                              <Box>
                                <Box>Min. Investment</Box> */}
        {/* {`${listing.annualizedreturn}`} */}
        {/* <Box
                                  style={{ color: "black", fontWeight: "bold" }}
                                >{listing.mininvestment}</Box>
                              </Box> */}

        {/* <Box>
                                <Box>Annual Appreciation</Box>
                                <Box
                                  style={{ color: "black", fontWeight: "bold" }}
                                >{`${listing.annualappreciation}`}</Box>
                              </Box>

                              <Box>
                                <Box>Projected gross yield</Box>
                                <Box
                                  style={{ color: "black", fontWeight: "bold" }}
                                >{`${listing.grossyield}`}</Box>
                              </Box>

                              <Box>
                                <Box>Projected net yield</Box>
                                <Box
                                  style={{ color: "black", fontWeight: "bold" }}
                                >{`${listing.netyield}`}</Box>
                              </Box> */}
        {/* </ReturnsBox>
                          </CardContent>
                        </CardActionArea>
                      </Property>
                    </Link> */}
        {/* </Grid>
                ))}
            </Grid>
          </Box>
        )} */}
      </Box>
    </div>
  );
};

export default Properties;
