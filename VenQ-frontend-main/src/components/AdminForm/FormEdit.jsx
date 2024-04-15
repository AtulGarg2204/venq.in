import { Link } from "react-router-dom";
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
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import VerticalBarGraph from "../dashboard/property/VerticalBarGraph";
import Period from "../dashboard/property/Period";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import PoolIcon from "@mui/icons-material/Pool";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AddContentPopup from "./Popup";
import AddAmenityPopup from "./AddAmenityPopup";
import AddDocumentPopup from "./AddDocumentPopup";
import config from "../../config";
<script
  type="text/javascript"
  id="hs-script-loader"
  async
  defer
  src="//js.hs-scripts.com/45720526.js"
></script>;
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

const documents = ["hello", "bye", "noob", "player"];

const FormEdit = ({
  handleCart,
  clicked,
  setClicked,
  mode,
  listingId,
  onSubmitSuccess,
}) => {
  console.log("hello");

  const [quantity, setQuantity] = useState(2000);
  const [investment, setInvestment] = useState(50000);
  const [propertyValueGrowth, setPropertyValueGrowth] = useState(13975);
  const [rentalYield, setRentalYield] = useState(15000);
  const [showFullContent, setShowFullContent] = useState(false);

  const { id } = useParams(); // Access the ID from the URL params
  //   const [listing, setListing] = useState({});

  //   useEffect(() => {
  //     const fetchListing = async () => {
  //       try {
  //         const response = await axios.get(`http://localhost:4000/listing/${id}`);
  //         setListing(response.data);
  //       } catch (error) {
  //         console.error("Error fetching listing:", error);
  //       }
  //     };

  //     fetchListing();
  //   }, [id]);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };
  const content = `Stake is offering an opportunity to invest in a 1-bedroom apartment in The Pad, a sought-after complex in Business Bay.Business Bay has confirmed Dubai's stature as the region's business capital since its first towers were handed over in 2008. Built around the Dubai Water Canal, the district now consists of 160+ towers from commercial and residential towers, to 4- and 5-star hotels.The Pad is located in the heart of Business Bay, on the Burj Khalifa side of the Dubai Water Canal. The development was handed over in 2021 by Omniyat and features smart-home and automation systems.`;
  const maxWords = 50;
  const truncatedContent = content.split(" ").slice(0, maxWords).join(" ");
  const shouldTruncate = content.split(" ").length > maxWords;

  const URL = config.URL;

  const handleInvestmentChange = (event) => {
    setInvestment(Number(event.target.value));
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

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    specs: [],
    content: [
      {
        heading: "",
        paragraph: "",
        logoLink: "",
      },
    ],
    property_price: "",
    transaction_cost: "",
    venq_fee: "",
    inv_cost: "",
    mgmt_maintenance: "",
    projected_gross_rent: "",
    service_charges: "",
    annual_net_income: "",
    main_heading: "",
    images: ["img1.jpg", "img2.jpg"],
    box_headings: ["India", "Dubai"],
    sub_heading: "",
    price: "4,56,789",
    fund: "4567",
    annualized_return: "",
    annual_appreciation: "",
    gross_yield: "",
    net_yield: "",
    amenities: [{ name: "", link: "" }],
    documents: [
      {
        name: "",
        link: "",
      },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const response = await axios.get(`${URL}/listing/${id}`);
        const listingData = response.data;

        // Assuming that listingData follows the same structure as formData
        setFormData(listingData);

        // If the structure is different, you may need to map the data accordingly
        // setFormData({
        //   ...formData,
        //   field1: listingData.field1,
        //   field2: listingData.field2,
        //   // Add other fields as needed
        // });
      } catch (error) {
        console.error("Error fetching listing:", error);
      }
    };

    fetchListing();
  }, [id]);

  const handleArrayChange = (e, fieldName) => {
    const { value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value.split(",").map((item) => item.trim()),
    }));
  };

  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleAddContent = ({ heading, paragraph, logoLink }) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      content: [...prevFormData.content, { heading, paragraph, logoLink }],
    }));
  };

  const [isAmenityPopupOpen, setAmenityPopupOpen] = useState(false);

  const handleAddAmenity = ({ name, link }) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      amenities: [...prevFormData.amenities, { name, link }],
    }));
  };

  const [isDocumentPopupOpen, setDocumentPopupOpen] = useState(false);

  const handleAddDocument = ({ name, link }) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      documents: [...prevFormData.documents, { name, link }],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    console.log(JSON.stringify(formData));
    try {
      const response = await fetch(`${URL}/listing/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("details")}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const newListing = await response.json();
        console.log("Listing created successfully:", newListing);
        // Handle success, e.g., redirect to a success pages
        navigate("/dashboard/properties");
      } else {
        console.error("Error creating listing:", await response.json());
        // Handle error, e.g., display an error message
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleUpdateClick = async () => {
    try {
      // Make an API call to update the listing
      const response = await axios.put(`${URL}/listing/${id}`, formData, {
        headers: {
          // Include any headers needed, e.g., authorization
          Authorization: `Bearer ${localStorage.getItem("details")}`,
        },
      });

      // Optionally, you can handle the updated data or navigate to another page
      console.log("Updated listing:", response.data);
    } catch (error) {
      console.error("Error updating listing:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box style={{ padding: "30px" }}>
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
                  fontFamily: "Inter",
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
                fontFamily: "Inter",
                fontSize: "15px",
              }}
            >
              <input
                type="text"
                name="main_heading"
                value={formData.main_heading}
                onChange={handleChange}
              />
            </Typography>
          </Box>

          <Box>
            <Bookmark onClick={() => setClicked(!clicked)}>
              {clicked === true ? (
                <BookmarkIcon style={{ color: "#0170dc" }} />
              ) : (
                <BookmarkBorderIcon />
              )}
              <Typography
                style={{
                  paddingLeft: "10px",
                  fontFamily: "Inter",
                  fontSize: "18px",
                }}
              >
                Bookmark
              </Typography>
            </Bookmark>
          </Box>
        </Box>

        <Box
          style={{
            padding: "10px 0",
            margin: "20px 0",
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <ImageList
            sx={{ width: "100%", height: 500 }}
            variant="quilted"
            cols={4}
          >
            <ImageListItem cols="2" rows="4">
              <img
                src="/images/signup_page.jpg"
                alt="PropertyImages"
                loading="lazy"
                style={{ borderRadius: "10px" }}
              />
            </ImageListItem>

            <ImageListItem cols="1" rows="2">
              <img
                src="/images/signup_page.jpg"
                alt="PropertyImages"
                loading="lazy"
                style={{ borderRadius: "10px" }}
              />
            </ImageListItem>

            <ImageListItem cols="1" rows="2">
              <img
                src="/images/signup_page.jpg"
                alt="PropertyImages"
                loading="lazy"
                style={{ borderRadius: "10px" }}
              />
            </ImageListItem>

            <ImageListItem cols="1" rows="2">
              <img
                src="/images/signup_page.jpg"
                alt="PropertyImages"
                loading="lazy"
                style={{ borderRadius: "10px" }}
              />
            </ImageListItem>

            <ImageListItem cols="1" rows="2">
              <img
                src="/images/signup_page.jpg"
                alt="PropertyImages"
                loading="lazy"
                style={{ borderRadius: "10px" }}
              />
            </ImageListItem>
          </ImageList>

          <Box
            style={{
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              margin: "10px 0",
              borderRadius: "50px",
              position: "absolute",
              bottom: -23,
              right: 20,
            }}
          >
            <PhotoLink to="/dashboard/properties/view/101/photos">
              <SmallBoxes style={{ margin: "0 15px" }}>
                <Box style={{ width: "40px", height: "40px", padding: "7px" }}>
                  <svg
                    viewBox="0 0 24 24"
                    focusable="false"
                    class="chakra-icon css-pawapt"
                    aria-label="gallery"
                  >
                    <g
                      fill="none"
                      fill-rule="nonzero"
                      stroke="#0170dc"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M19.9969 21H4.00293C2.89793 21 2.00293 20.105 2.00293 19V5C2.00293 3.895 2.89793 3 4.00293 3H19.9969C21.1019 3 21.9969 3.895 21.9969 5V19C21.9969 20.105 21.1009 21 19.9969 21Z M9.41422 7.58579C10.1953 8.36684 10.1953 9.63317 9.41422 10.4142C8.63317 11.1953 7.36684 11.1953 6.58579 10.4142C5.80474 9.63317 5.80474 8.36684 6.58579 7.58579C7.36684 6.80474 8.63317 6.80474 9.41422 7.58579 M22 15.9999L17.781 12.6249C17.35 12.2799 16.72 12.3499 16.375 12.7809L13.039 16.9509C12.694 17.3819 12.065 17.4519 11.633 17.1069L9.765 15.6119C9.34 15.2719 8.721 15.3339 8.372 15.7529L4 20.9999"></path>
                    </g>
                  </svg>
                </Box>

                <Extra>8 photos</Extra>
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
                  class="chakra-icon css-pawapt"
                  aria-label="virtual-tour"
                >
                  <g
                    fill="none"
                    fill-rule="nonzero"
                    stroke="#0170dc"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M21 16.0412V7.95921C21 7.24421 20.619 6.58421 20 6.22721L13 2.18621C12.381 1.82921 11.619 1.82921 11 2.18621L4 6.22621C3.381 6.58421 3 7.24421 3 7.95921V16.0422C3 16.7572 3.381 17.4172 4 17.7742L11 21.8152C11.619 22.1722 12.381 22.1722 13 21.8152L20 17.7742C20.619 17.4162 21 16.7562 21 16.0412Z M12 22.08V12 M12 12L20.73 6.95996 M3.26953 6.95996L11.9995 12"></path>
                  </g>
                </svg>
              </Box>

              <Extra>Virtual tour</Extra>
            </SmallBoxes>
          </Box>
        </Box>

        <Box style={{ padding: "10px 0", margin: "40px 0" }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Details>
                <Box>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 800,
                      paddingBottom: "10px",
                    }}
                    variant="h4"
                  >
                    <input
                      type="text"
                      name="sub_heading"
                      value={formData.sub_heading}
                      onChange={handleChange}
                    />
                  </Typography>

                  <Box style={{ display: "flex", paddingBottom: "30px" }}>
                    <SubTitle>
                      <input
                        type="text"
                        value={formData.specs.join(", ")}
                        onChange={(e) => handleArrayChange(e, "specs")}
                      />
                    </SubTitle>

                    <Divider
                      orientation="vertical"
                      variant="middle"
                      flexItem
                      style={{ backgroundColor: "darkgrey" }}
                    />
                    <SubTitle>
                      <input
                        type="text"
                        value={formData.specs.join(", ")}
                        onChange={(e) => handleArrayChange(e, "specs")}
                      />
                    </SubTitle>

                    <Divider
                      orientation="vertical"
                      variant="middle"
                      flexItem
                      style={{ backgroundColor: "darkgrey" }}
                    />
                    <SubTitle>
                      <input
                        type="text"
                        value={formData.specs.join(", ")}
                        onChange={(e) => handleArrayChange(e, "specs")}
                      />
                    </SubTitle>

                    <Divider
                      orientation="vertical"
                      variant="middle"
                      flexItem
                      style={{ backgroundColor: "darkgrey" }}
                    />
                    <SubTitle>
                      <input
                        type="text"
                        value={formData.specs.join(", ")}
                        onChange={(e) => handleArrayChange(e, "specs")}
                      />
                    </SubTitle>
                  </Box>
                </Box>

                <Divider />

                <div>
                  <button type="button" onClick={() => setPopupOpen(true)}>
                    Add Content
                  </button>

                  {isPopupOpen && (
                    <AddContentPopup
                      onAddContent={handleAddContent}
                      onClose={() => setPopupOpen(false)}
                    />
                  )}
                </div>

                {formData.content
                  .filter(
                    (item) => item.heading !== "" && item.paragraph !== ""
                  )
                  .map((item) => (
                    <Box style={{ padding: "20px 0" }}>
                      <PropertyDetails>
                        <Logo style={{}}>
                          <img
                            src={item.logoLink}
                            alt=""
                            style={{
                              width: "35px",
                              height: "35px",
                              borderRadius: "50%",
                            }}
                          />
                        </Logo>

                        <Box>
                          <PropertyHeading>
                            <input
                              type="text"
                              name="place"
                              value={item.heading}
                              onChange={handleChange}
                            />
                          </PropertyHeading>
                          <PropertySubHeading>
                            <input
                              type="text"
                              name="place_p"
                              value={item.paragraph}
                              onChange={handleChange}
                            />
                          </PropertySubHeading>
                        </Box>
                      </PropertyDetails>
                    </Box>
                  ))}

                <Divider />

                <Box style={{ padding: "20px 0 " }}>
                  <Typography
                    style={{
                      fontSize: "24px",
                      fontWeight: 600,
                      fontFamily: "Inter",
                    }}
                  >
                    Investment calculator
                  </Typography>

                  <Box style={{ textAlign: "center", padding: "20px 0" }}>
                    <Typography
                      style={{
                        color: "grey",
                        fontSize: "28px",
                        fontFamily: "Inter",
                      }}
                    >
                      Projected investment return of
                    </Typography>

                    <ThemeProvider theme={theme}>
                      <Typography
                        style={{
                          fontSize: "24px",
                          fontFamily: "Inter",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "grey",
                        }}
                      >
                        <b
                          style={{
                            fontSize: "24px",
                            padding: "5px",
                            color: "black",
                          }}
                        >
                          RUP 81,475{" "}
                        </b>{" "}
                        in{" "}
                        <b
                          style={{
                            fontSize: "24px",
                            padding: "5px",
                            color: "black",
                          }}
                        >
                          5 years
                        </b>
                        <Tooltip title={info} placement="bottom">
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

                    <Box
                      style={{
                        display: "flex",
                        border: "1px solid grey",
                        borderRadius: "20px",
                        padding: "20px",
                        margin: "20px 0",
                        justifyContent: "space-around",
                      }}
                    >
                      <GraphInfo>
                        <Box
                          style={{
                            backgroundColor: "rgb(18, 28, 48)",
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            margin: "7px 5px",
                          }}
                        ></Box>
                        <Box style={{ textAlign: "left", padding: "0 10px" }}>
                          <GraphHeading>Investment</GraphHeading>
                          <GraphSubHeading>RUP {investment}</GraphSubHeading>
                        </Box>
                      </GraphInfo>

                      <GraphInfo>
                        <Box
                          style={{
                            backgroundColor: "rgb(255, 209, 71)",
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            margin: "7px 5px",
                          }}
                        ></Box>
                        <Box style={{ textAlign: "left", padding: "0 10px" }}>
                          <GraphHeading>Total rental income</GraphHeading>
                          <GraphSubHeading>
                            RUP {propertyValueGrowth}
                          </GraphSubHeading>
                        </Box>
                      </GraphInfo>

                      <GraphInfo>
                        <Box
                          style={{
                            backgroundColor: "rgb(65, 206, 142)",
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            margin: "7px 5px",
                          }}
                        ></Box>
                        <Box style={{ textAlign: "left", padding: "0 10px" }}>
                          <GraphHeading>Value appreciation</GraphHeading>
                          <GraphSubHeading>RUP {rentalYield}</GraphSubHeading>
                        </Box>
                      </GraphInfo>
                    </Box>
                  </Box>

                  <Box>
                    <VerticalBarGraph
                      investment={investment}
                      propertyValueGrowth={propertyValueGrowth}
                      rentalYield={rentalYield}
                      handleInvestmentChange={handleInvestmentChange}
                      handlePropertyValueGrowthChange={
                        handlePropertyValueGrowthChange
                      }
                      handleRentalYieldChange={handleRentalYieldChange}
                    />

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
                            fontFamily: "Inter",
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
                </Box>

                <Box style={{ paddingBottom: "20px" }}>
                  <Typography
                    style={{
                      fontSize: "24px",
                      fontWeight: 600,
                      fontFamily: "Inter",
                      paddingBottom: "20px",
                    }}
                  >
                    Property Overview
                  </Typography>

                  <Typography style={{ fontFamily: "Inter", fontSize: "16px" }}>
                    {showFullContent
                      ? content
                      : shouldTruncate
                      ? truncatedContent + "..."
                      : content}
                  </Typography>

                  {shouldTruncate && (
                    <MoreButton onClick={toggleContent}>
                      {showFullContent ? "Show less" : "Show more"}
                    </MoreButton>
                  )}
                </Box>

                <Box style={{ paddingBottom: "20px" }}>
                  <Typography
                    style={{
                      fontSize: "24px",
                      fontWeight: 600,
                      fontFamily: "Inter",
                      padding: "20px 0",
                    }}
                  >
                    Financials
                  </Typography>

                  <Grid container spacing={5}>
                    <Grid item xs={6}>
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
                              RUP{" "}
                              <input
                                type="text"
                                name="property_price"
                                value={formData.property_price}
                                onChange={handleChange}
                              />
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
                              Transaction costs
                            </FinanceSubHeading>
                            <FinanceAmount>
                              RUP{" "}
                              <input
                                type="text"
                                name="transaction_cost"
                                value={formData.transaction_cost}
                                onChange={handleChange}
                              />
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
                            <FinanceSubHeading>VenQ fee</FinanceSubHeading>
                            <FinanceAmount>
                              <input
                                type="text"
                                name="venq_fee"
                                value={formData.venq_fee}
                                onChange={handleChange}
                              />
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
                              Investment cost
                            </FinanceSubHeading>
                            <FinanceAmount style={{ color: "#0170dc" }}>
                              RUP{" "}
                              <input
                                type="text"
                                name="inv_cost"
                                value={formData.inv_cost}
                                onChange={handleChange}
                              />
                            </FinanceAmount>
                          </Box>
                        </Box>
                      </Box>
                    </Grid>

                    <Grid item xs={6}>
                      <Box style={{ padding: "10px 0" }}>
                        <FinanceHeading>Rental income (Year 1)</FinanceHeading>

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
                              RUP{" "}
                              <input
                                type="text"
                                name="projected_gross_rent"
                                value={formData.projected_gross_rent}
                                onChange={handleChange}
                              />
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
                              RUP{" "}
                              <input
                                type="text"
                                name="service_charges"
                                value={formData.service_charges}
                                onChange={handleChange}
                              />
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
                              RUP{" "}
                              <input
                                type="text"
                                name="mgmt_maintenance"
                                value={formData.mgmt_maintenance}
                                onChange={handleChange}
                              />
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
                              RUP{" "}
                              <input
                                type="text"
                                name="annual_net_income"
                                value={formData.annual_net_income}
                                onChange={handleChange}
                              />
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
                                fontFamily: "Inter",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              This is an estimate for the 1st year of ownership
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

                <Box style={{ paddingBottom: "20px" }}>
                  <Typography
                    style={{
                      fontSize: "24px",
                      fontWeight: 600,
                      fontFamily: "Inter",
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
                      width: "max-content",
                    }}
                  >
                    <Typography
                      style={{ fontSize: "12px", fontFamily: "Inter" }}
                    >
                      Each step may occur earlier than the dates below
                    </Typography>
                  </Box>

                  <Period />
                </Box>

                <Box style={{ paddingBottom: "20px" }}>
                  <Typography
                    style={{
                      fontSize: "24px",
                      fontWeight: 600,
                      fontFamily: "Inter",
                      padding: "20px 0",
                    }}
                  >
                    Location
                  </Typography>

                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      padding: "0 0 10px 0",
                    }}
                  >
                    <PlaceOutlinedIcon style={{ color: "#0170dc" }} />
                    <LocationName
                      style={{
                        fontFamily: "Inter",
                        fontSize: "18px",
                        fontWeight: 600,
                      }}
                      onClick={handleLocation}
                    >
                      Business Bay, Dubai, United Arab Emirates
                    </LocationName>
                  </Box>

                  <Box>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28884.310132673814!2d55.253752219664115!3d25.18504726028989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682def25f457%3A0x3dd4c4097970950e!2sBusiness%20Bay%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1688711980325!5m2!1sen!2sin"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                      style={{
                        border: 0,
                        width: "100%",
                        height: "450px",
                        borderRadius: "20px",
                        backgroundColor: "black",
                      }}
                    ></iframe>
                  </Box>

                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontSize: "16px",
                      padding: "20px 0",
                    }}
                  >
                    Business Bay is touted to be the new heart of trade and
                    commerce in Dubai, and caters best to young expatriate
                    professionals. The multicultural residents lead a very
                    fast-paced, cosmopolitan lifestyle, right in the centre of
                    Dubai and next to Downtown. There is an array of top-notch
                    amenities just a stone's throw away from Business Bay, while
                    the area is continuing to benefit from a burgeoning
                    nightlife scene.
                  </Typography>
                </Box>

                <Box style={{ paddingBottom: "40px" }}>
                  <Typography
                    style={{
                      fontSize: "24px",
                      fontWeight: 600,
                      fontFamily: "Inter",
                      padding: "20px 0",
                    }}
                  >
                    Amenities
                  </Typography>
                  <button
                    type="button"
                    onClick={() => setAmenityPopupOpen(true)}
                  >
                    Add Amenity
                  </button>

                  {isAmenityPopupOpen && (
                    <AddAmenityPopup
                      onAddAmenity={handleAddAmenity}
                      onClose={() => setAmenityPopupOpen(false)}
                    />
                  )}
                  <Box style={{ display: "flex" }}>
                    {formData.amenities
                      .filter((item) => item.name !== "" && item.link !== "")
                      .map((item) => (
                        <Box
                          style={{
                            display: "flex",
                            padding: "10px 20px 10px 0px",
                            marginRight: "20px",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Box>
                            <FitnessCenterIcon
                              style={{ width: "50px", height: "35px" }}
                            />
                          </Box>
                          <Typography
                            style={{
                              fontFamily: "Inter",
                              fontSize: "18px",
                              paddingLeft: "5px",
                            }}
                          >
                            {item.name}
                          </Typography>
                        </Box>
                      ))}

                    {/* <Box
                      style={{
                        display: "flex",
                        padding: "10px 20px",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Box>
                        <PoolIcon style={{ width: "50px", height: "35px" }} />
                      </Box>
                      <Typography
                        style={{
                          fontFamily: "Inter",
                          fontSize: "18px",
                          paddingLeft: "5px",
                        }}
                      >
                        Pool
                      </Typography>
                    </Box> */}
                  </Box>
                </Box>

                <Box style={{ paddingBottom: "40px" }}>
                  <Typography
                    style={{
                      fontSize: "24px",
                      fontWeight: 600,
                      fontFamily: "Inter",
                      padding: "10px 0",
                    }}
                  >
                    Documents ({documents?.length})
                  </Typography>

                  <button
                    type="button"
                    onClick={() => setDocumentPopupOpen(true)}
                  >
                    Add Document
                  </button>

                  {isDocumentPopupOpen && (
                    <AddDocumentPopup
                      onAddDocument={handleAddDocument}
                      onClose={() => setDocumentPopupOpen(false)}
                    />
                  )}

                  <Box>
                    {formData.documents
                      .filter((item) => item.name !== "" && item.link !== "")
                      .map((item) => (
                        <DownloadBox
                          onClick={() => handleDownload(item.link, item.name)}
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

                            <Typography>{item.name}</Typography>
                          </TitleBox>

                          <DownloadIcon>
                            <FileDownloadOutlinedIcon
                              style={{ color: "#0170dc" }}
                            />
                          </DownloadIcon>
                        </DownloadBox>
                      ))}
                  </Box>
                </Box>

                <Box style={{ paddingBottom: "30px" }}>
                  <Typography
                    style={{
                      fontSize: "24px",
                      fontWeight: 600,
                      fontFamily: "Inter",
                      padding: "20px 0",
                    }}
                  >
                    Have more questions about this property?
                  </Typography>

                  <Box style={{ display: "flex", height: "15vh" }}>
                    <Box style={{ width: "15%", marginRight: "20px" }}>
                      <img
                        src="/images/man.jpg"
                        alt="Estate Agent"
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "10px",
                        }}
                      />
                    </Box>

                    <Box
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around",
                      }}
                    >
                      <Typography
                        style={{ fontFamily: "Inter", fontSize: "17px" }}
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
                            fontFamily: "Inter",
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
              </Details>
            </Grid>

            <Grid item xs={4} style={{ position: "relative" }}>
              <Pricing>
                <Box
                  style={{
                    backgroundColor: "white",
                    borderRadius: "20px",
                    padding: "20px",
                  }}
                >
                  <Box style={{ textAlign: "center", paddingBottom: "10px" }}>
                    <Typography
                      style={{
                        fontSize: "18px",
                        color: "rgb(112,111,111)",
                        fontFamily: "Inter",
                      }}
                    >
                      Property price
                    </Typography>
                    <Typography
                      style={{
                        fontSize: "24px",
                        color: "#0170dc",
                        fontFamily: "Inter",
                      }}
                    >
                      RUP{" "}
                      <b style={{ fontSize: "32px" }}>
                        <input
                          type="text"
                          name="property_price"
                          value={formData.property_price}
                          onChange={handleChange}
                        />
                      </b>
                    </Typography>
                  </Box>

                  <progress
                    value={1634600}
                    max={2059765}
                    style={{ width: "100%" }}
                  />
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingBottom: "20px",
                    }}
                  >
                    <Typography
                      style={{
                        fontSize: "14px",
                        color: "rgb(112,111,111)",
                        fontFamily: "Inter",
                      }}
                    >
                      {" "}
                      funded
                    </Typography>
                    <Typography
                      style={{
                        fontSize: "14px",
                        color: "rgb(112,111,111)",
                        fontFamily: "Inter",
                      }}
                    >
                      RUP 4,25,165 available
                    </Typography>
                  </Box>

                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingBottom: "10px",
                    }}
                  >
                    <Typography
                      style={{ color: "rgb(112,111,111)", fontFamily: "Inter" }}
                    >
                      <b style={{ paddingRight: "5px", color: "#0170dc" }}>
                        493
                      </b>
                      investors
                    </Typography>
                    <Typography
                      style={{
                        alignItems: "center",
                        display: "flex",
                        color: "red",
                        fontFamily: "Inter",
                      }}
                    >
                      <AccessTimeIcon style={{ paddingRight: "5px" }} /> 56 days
                      left
                    </Typography>
                  </Box>

                  <Box
                    style={{
                      backgroundColor: "#f6f7f9",
                      padding: "0px 20px",
                      borderRadius: "20px",
                    }}
                  >
                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        margin: "20px 0",
                        paddingTop: "10px",
                      }}
                    >
                      <Typography
                        style={{ fontSize: "14px", fontFamily: "Inter" }}
                      >
                        Annualised return
                      </Typography>
                      <Typography
                        style={{
                          fontWeight: 600,
                          fontFamily: "Inter",
                          fontSize: "14px",
                        }}
                      >
                        <input
                          type="text"
                          name="annualized_return"
                          value={formData.annualized_return}
                          onChange={handleChange}
                        />
                      </Typography>
                    </Box>

                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        margin: "20px 0",
                      }}
                    >
                      <Typography
                        style={{ fontSize: "14px", fontFamily: "Inter" }}
                      >
                        Annual appreciation
                      </Typography>
                      <Typography
                        style={{
                          fontWeight: 600,
                          fontFamily: "Inter",
                          fontSize: "14px",
                        }}
                      >
                        <input
                          type="text"
                          name="annual_appreciation"
                          value={formData.annual_appreciation}
                          onChange={handleChange}
                        />
                      </Typography>
                    </Box>

                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        margin: "20px 0",
                      }}
                    >
                      <Typography
                        style={{ fontSize: "14px", fontFamily: "Inter" }}
                      >
                        Projected gross yield
                      </Typography>
                      <Typography
                        style={{
                          fontWeight: 600,
                          fontFamily: "Inter",
                          fontSize: "14px",
                        }}
                      >
                        <input
                          type="text"
                          name="gross_yield"
                          value={formData.gross_yield}
                          onChange={handleChange}
                        />
                      </Typography>
                    </Box>

                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        margin: "20px 0",
                        paddingBottom: "10px",
                      }}
                    >
                      <Typography
                        style={{ fontSize: "14px", fontFamily: "Inter" }}
                      >
                        Projected net yield
                      </Typography>
                      <Typography
                        style={{
                          fontWeight: 600,
                          fontFamily: "Inter",
                          fontSize: "14px",
                        }}
                      >
                        <input
                          type="text"
                          name="net_yield"
                          value={formData.net_yield}
                          onChange={handleChange}
                        />
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="text"
                      defaultValue={2000}
                      style={{
                        padding: "10px",
                        outline: "none",
                        border: "1px solid grey",
                        borderRadius: "10px",
                        width: "65%",
                      }}
                      value={quantity}
                    />
                    <CartButton onClick={handleCart}>Add to cart</CartButton>
                  </Box>

                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "20px 0",
                    }}
                  >
                    <PriceAddButton onClick={handleTwo}>
                      + RUP 2000
                    </PriceAddButton>
                    <PriceAddButton onClick={handleFive}>
                      + RUP 5000
                    </PriceAddButton>
                    <PriceAddButton onClick={handleTen}>
                      + RUP 10000
                    </PriceAddButton>
                  </Box>

                  <Typography
                    style={{
                      fontFamily: "Inter",
                      textAlign: "center",
                      fontSize: "14px",
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
                      fontFamily: "Inter",
                      paddingLeft: "10px",
                      fontSize: "14px",
                    }}
                  >
                    3,987 people viewed this property
                  </Typography>
                </Box>
              </Pricing>
            </Grid>
          </Grid>
        </Box>

        <CartButton type="submit" onClick={handleUpdateClick}>
          Update
        </CartButton>

        <Box style={{ padding: "10px 0", margin: "40px 0" }}>
          <Typography
            style={{
              fontSize: "24px",
              fontWeight: 600,
              fontFamily: "Inter",
              padding: "0px 0 30px 0",
            }}
          >
            Similar properties
          </Typography>

          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Grid item xs={2} sm={4} md={4}>
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
                        1 Bed in Blakely Tower, Dubai Marina
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
                          Rup 1,239,000
                        </Box>
                        <Box>523 Investors</Box>
                      </PriceBox>

                      <ReturnsBox>
                        <Box>
                          <Box>Annualised Return</Box>
                          <Box style={{ color: "black", fontWeight: "bold" }}>
                            9.72%
                          </Box>
                        </Box>

                        <Box>
                          <Box>Funded Date</Box>
                          <Box style={{ color: "black", fontWeight: "bold" }}>
                            23 May 2023
                          </Box>
                        </Box>

                        <Box>
                          <Box>Current Valuation</Box>
                          <Box style={{ color: "black", fontWeight: "bold" }}>
                            Rup 1,745,000
                          </Box>
                        </Box>
                      </ReturnsBox>
                    </CardContent>
                  </CardActionArea>
                </Property>
              </Grid>

              <Grid item xs={2} sm={4} md={4}>
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
                        1 Bed in Blakely Tower, Dubai Marina
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
                          Rup 1,239,000
                        </Box>
                        <Box>523 Investors</Box>
                      </PriceBox>

                      <ReturnsBox>
                        <Box>
                          <Box>Annualised Return</Box>
                          <Box style={{ color: "black", fontWeight: "bold" }}>
                            9.72%
                          </Box>
                        </Box>

                        <Box>
                          <Box>Funded Date</Box>
                          <Box style={{ color: "black", fontWeight: "bold" }}>
                            23 May 2023
                          </Box>
                        </Box>

                        <Box>
                          <Box>Current Valuation</Box>
                          <Box style={{ color: "black", fontWeight: "bold" }}>
                            Rup 1,745,000
                          </Box>
                        </Box>
                      </ReturnsBox>
                    </CardContent>
                  </CardActionArea>
                </Property>
              </Grid>

              <Grid item xs={2} sm={4} md={4}>
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
                        1 Bed in Blakely Tower, Dubai Marina
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
                          Rup 1,239,000
                        </Box>
                        <Box>523 Investors</Box>
                      </PriceBox>

                      <ReturnsBox>
                        <Box>
                          <Box>Annualised Return</Box>
                          <Box style={{ color: "black", fontWeight: "bold" }}>
                            9.72%
                          </Box>
                        </Box>

                        <Box>
                          <Box>Funded Date</Box>
                          <Box style={{ color: "black", fontWeight: "bold" }}>
                            23 May 2023
                          </Box>
                        </Box>

                        <Box>
                          <Box>Current Valuation</Box>
                          <Box style={{ color: "black", fontWeight: "bold" }}>
                            Rup 1,745,000
                          </Box>
                        </Box>
                      </ReturnsBox>
                    </CardContent>
                  </CardActionArea>
                </Property>
              </Grid>

              <Grid item xs={2} sm={4} md={4}>
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
                        1 Bed in Blakely Tower, Dubai Marina
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
                          Rup 1,239,000
                        </Box>
                        <Box>523 Investors</Box>
                      </PriceBox>

                      <ReturnsBox>
                        <Box>
                          <Box>Annualised Return</Box>
                          <Box style={{ color: "black", fontWeight: "bold" }}>
                            9.72%
                          </Box>
                        </Box>

                        <Box>
                          <Box>Funded Date</Box>
                          <Box style={{ color: "black", fontWeight: "bold" }}>
                            23 May 2023
                          </Box>
                        </Box>

                        <Box>
                          <Box>Current Valuation</Box>
                          <Box style={{ color: "black", fontWeight: "bold" }}>
                            Rup 1,745,000
                          </Box>
                        </Box>
                      </ReturnsBox>
                    </CardContent>
                  </CardActionArea>
                </Property>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </form>
  );
};

export default FormEdit;

{
  /* <PropertyDetails>
                    <Logo>
                      <svg
                        viewBox="0 0 24 24"
                        focusable="false"
                        class="chakra-icon css-1dlsnza"
                        aria-label="house-rented"
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
                            <path d="M9 20V15C9 14.4477 9.44772 14 10 14H12 M18.5 16.45C18.4724 16.45 18.45 16.4724 18.45 16.5C18.45 16.5276 18.4724 16.55 18.5 16.55C18.5276 16.55 18.55 16.5276 18.55 16.5C18.55 16.4724 18.5276 16.45 18.5 16.45V16.45 M15.1976 17.615L13.2922 19.5243C13.1051 19.7118 13 19.9658 13 20.2306V21C13 21.5523 13.4477 22 14 22H14.7711C15.0367 22 15.2914 21.8944 15.479 21.7064L17.3814 19.8001 M3 10.5803L10.6984 3.9815C11.4474 3.3395 12.5526 3.3395 13.3016 3.9815L21 10.5803 M10 20H3 M15.6235 5.97182V3.75C15.6235 3.33579 15.9593 3 16.3735 3H18.9644C19.3787 3 19.7144 3.33579 19.7144 3.75V9.47839 M4.2854 9.47852V20.0001 M15.1985 17.6159C15.0715 17.2574 15.0045 16.8804 15 16.5001C15 15.0845 15.8527 13.8083 17.1606 13.2665C18.4685 12.7248 19.9739 13.0242 20.9749 14.0252C21.9759 15.0262 22.2753 16.5316 21.7336 17.8395C21.1918 19.1474 19.9156 20.0001 18.5 20.0001C18.119 19.9956 17.7413 19.9284 17.3821 19.8009"></path>
                          </g>
                        </g>
                      </svg>
                    </Logo>

                    <Box>
                      <PropertyHeading>
                        <input type="text" name="type" value={formData.type} onChange={handleChange} />
                      </PropertyHeading>
                      <PropertySubHeading>
                        <input type="text" name="type_p" value={formData.type_p} onChange={handleChange} />
                      </PropertySubHeading>
                    </Box>
                  </PropertyDetails>

                  <PropertyDetails>
                    <Logo>
                      <svg
                        viewBox="0 0 24 24"
                        focusable="false"
                        class="chakra-icon css-1dlsnza"
                        aria-label="shield-check-mark-1"
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
                            <path d="M3 10.767C3 15.1925 5.7472 19.1532 9.89228 20.7036L9.92235 20.7148C10.9399 21.0954 12.0607 21.095 13.078 20.7138L13.1024 20.7047C17.2512 19.1499 20 15.1842 20 10.7536V7.03023C20 6.15536 19.4314 5.38202 18.5963 5.12118L12.0963 3.09095C11.708 2.96968 11.292 2.96968 10.9037 3.09095L4.40374 5.12112C3.56864 5.38195 3 6.15529 3 7.03017V10.767Z"></path>
                            <path
                              d="M11.2857 15.6518V10.0357H10V9H12.5V15.6518H11.2857Z"
                              fill="#121C30"
                              stroke="none"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </Logo>

                    <Box>
                      <PropertyHeading>
                        <input type="text" name="rent" value={formData.rent} onChange={handleChange} />
                      </PropertyHeading>
                      <PropertySubHeading>
                        <input type="text" name="rent_p" value={formData.rent_p} onChange={handleChange} />
                      </PropertySubHeading>
                    </Box>
                  </PropertyDetails>

                  <PropertyDetails>
                    <Logo>
                      <svg
                        viewBox="0 0 24 24"
                        focusable="false"
                        class="chakra-icon css-1dlsnza"
                        aria-label="money"
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
                            <path d="M13.999 5C14 3.895 11.76 3 9 3C6.24 3 4.002 3.896 4 5C4 6.105 6.238 7 9 7C11.762 7 14 6.105 14 5 M14 5V12.76 M4.00098 9C4.00098 10.105 6.23898 11 9.00098 11C11.763 11 14.001 10.105 14.001 9 M19.6822 13.318C21.4392 15.075 21.4392 17.925 19.6822 19.682C17.9252 21.439 15.0752 21.439 13.3182 19.682C11.5612 17.925 11.5612 15.075 13.3182 13.318C15.0752 11.561 17.9252 11.561 19.6822 13.318 M12.505 14.425C11.603 14.78 10.366 15 8.99998 15C6.23898 15 4.00098 14.105 4.00098 13 M12.445 18.444C11.548 18.787 10.339 19 9 19C6.239 19 4.001 18.105 4 17V5"></path>
                          </g>
                        </g>
                      </svg>
                    </Logo>

                    <Box>
                      <PropertyHeading>
                        <input type="text" name="curr_rent" value={formData.curr_rent} onChange={handleChange} />
                      </PropertyHeading>
                      <PropertySubHeading>
                        <input type="text" name="curr_rent_p" value={formData.curr_rent_p} onChange={handleChange} />
                      </PropertySubHeading>
                    </Box>
                  </PropertyDetails>

                  <PropertyDetails>
                    <Logo>
                      <svg
                        viewBox="0 0 24 24"
                        focusable="false"
                        class="chakra-icon css-1dlsnza"
                        aria-label="graph-up"
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
                            <path d="M5.00098 15.8891L10.072 10.8181C10.4629 10.4271 11.0959 10.4271 11.4859 10.8181L13.627 12.9591C14.0179 13.3501 14.6509 13.3501 15.0409 12.9591L21.001 7.00012"></path>
                            <path d="M18.334 7.00012H21.001V9.66712"></path>
                            <path d="M20.9998 20.9292H1.9248V3.22119"></path>
                          </g>
                        </g>
                      </svg>
                    </Logo>

                    <Box>
                      <PropertyHeading>
                        <input type="text" name="agy" value={formData.agy} onChange={handleChange} />

                      </PropertyHeading>
                      <PropertySubHeading>
                        <input type="text" name="agy_p" value={formData.agy_p} onChange={handleChange} />
                      </PropertySubHeading>
                    </Box>
                  </PropertyDetails>
                </Box> */
}

{
  /* <DownloadBox
                      onClick={() =>
                        handleDownload(
                          "/files/CP2A-Data.xlsx",
                          "CP2A-Data.xlsx"
                        )
                      }
                    >
                      <TitleBox>
                        <IconBox>
                          <svg
                            viewBox="0 0 24 24"
                            focusable="false"
                            class="chakra-icon css-768dc"
                            aria-label="file-pdf"
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
                                <path d="M18.414 6.414L15.586 3.586C15.211 3.211 14.702 3 14.172 3H7C5.895 3 5 3.895 5 5V19C5 20.105 5.895 21 7 21H17C18.105 21 19 20.105 19 19V7.828C19 7.298 18.789 6.789 18.414 6.414V6.414Z M19 8H15C14.448 8 14 7.552 14 7V3 M10.34 16.55H13.66"></path>
                                <path d="M10.833 12.751V11.583C10.833 11.261 11.094 11 11.416 11H12.584C12.906 11 13.167 11.261 13.167 11.583V12.751C13.167 13.073 12.906 13.334 12.584 13.334H11.416C11.094 13.333 10.833 13.072 10.833 12.751Z"></path>
                                <path d="M8 17.417V16.249C8 15.927 8.261 15.666 8.583 15.666H9.751C10.073 15.666 10.334 15.927 10.334 16.249V17.417C10.334 17.739 10.073 18 9.751 18H8.583C8.261 18 8 17.739 8 17.417Z"></path>
                                <path d="M13.667 17.417V16.249C13.667 15.927 13.928 15.666 14.25 15.666H15.418C15.74 15.666 16.001 15.927 16.001 16.249V17.417C16 17.739 15.739 18 15.417 18H14.249C13.928 18 13.667 17.739 13.667 17.417H13.667Z M14.24 15.67L12.73 13.31 M9.76001 15.67L11.27 13.31"></path>
                              </g>
                            </g>
                          </svg>
                        </IconBox>

                        <Typography>
                          Valuation Report - Liberty House 1617
                        </Typography>
                      </TitleBox>

                      <DownloadIcon>
                        <FileDownloadOutlinedIcon
                          style={{ color: "#0170dc" }}
                        />
                      </DownloadIcon>
                    </DownloadBox>

                    <DownloadBox
                      onClick={() =>
                        handleDownload("/files/SahejT.pdf", "SahejT.pdf")
                      }
                    >
                      <TitleBox>
                        <IconBox>
                          <svg
                            viewBox="0 0 24 24"
                            focusable="false"
                            class="chakra-icon css-768dc"
                            aria-label="file-pdf"
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
                                <path d="M18.414 6.414L15.586 3.586C15.211 3.211 14.702 3 14.172 3H7C5.895 3 5 3.895 5 5V19C5 20.105 5.895 21 7 21H17C18.105 21 19 20.105 19 19V7.828C19 7.298 18.789 6.789 18.414 6.414V6.414Z M19 8H15C14.448 8 14 7.552 14 7V3 M10.34 16.55H13.66"></path>
                                <path d="M10.833 12.751V11.583C10.833 11.261 11.094 11 11.416 11H12.584C12.906 11 13.167 11.261 13.167 11.583V12.751C13.167 13.073 12.906 13.334 12.584 13.334H11.416C11.094 13.333 10.833 13.072 10.833 12.751Z"></path>
                                <path d="M8 17.417V16.249C8 15.927 8.261 15.666 8.583 15.666H9.751C10.073 15.666 10.334 15.927 10.334 16.249V17.417C10.334 17.739 10.073 18 9.751 18H8.583C8.261 18 8 17.739 8 17.417Z"></path>
                                <path d="M13.667 17.417V16.249C13.667 15.927 13.928 15.666 14.25 15.666H15.418C15.74 15.666 16.001 15.927 16.001 16.249V17.417C16 17.739 15.739 18 15.417 18H14.249C13.928 18 13.667 17.739 13.667 17.417H13.667Z M14.24 15.67L12.73 13.31 M9.76001 15.67L11.27 13.31"></path>
                              </g>
                            </g>
                          </svg>
                        </IconBox>

                        <Typography>
                          Investor Memo - Liberty House 1617 EN
                        </Typography>
                      </TitleBox>

                      <DownloadIcon>
                        <FileDownloadOutlinedIcon
                          style={{ color: "#0170dc" }}
                        />
                      </DownloadIcon>
                    </DownloadBox>

                    <DownloadBox
                      onClick={() =>
                        handleDownload(
                          "/files/SHRUSHTI JAIN-1.docx",
                          "SHRUSHTI JAIN-1.docx"
                        )
                      }
                    >
                      <TitleBox>
                        <IconBox>
                          <svg
                            viewBox="0 0 24 24"
                            focusable="false"
                            class="chakra-icon css-768dc"
                            aria-label="file-pdf"
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
                                <path d="M18.414 6.414L15.586 3.586C15.211 3.211 14.702 3 14.172 3H7C5.895 3 5 3.895 5 5V19C5 20.105 5.895 21 7 21H17C18.105 21 19 20.105 19 19V7.828C19 7.298 18.789 6.789 18.414 6.414V6.414Z M19 8H15C14.448 8 14 7.552 14 7V3 M10.34 16.55H13.66"></path>
                                <path d="M10.833 12.751V11.583C10.833 11.261 11.094 11 11.416 11H12.584C12.906 11 13.167 11.261 13.167 11.583V12.751C13.167 13.073 12.906 13.334 12.584 13.334H11.416C11.094 13.333 10.833 13.072 10.833 12.751Z"></path>
                                <path d="M8 17.417V16.249C8 15.927 8.261 15.666 8.583 15.666H9.751C10.073 15.666 10.334 15.927 10.334 16.249V17.417C10.334 17.739 10.073 18 9.751 18H8.583C8.261 18 8 17.739 8 17.417Z"></path>
                                <path d="M13.667 17.417V16.249C13.667 15.927 13.928 15.666 14.25 15.666H15.418C15.74 15.666 16.001 15.927 16.001 16.249V17.417C16 17.739 15.739 18 15.417 18H14.249C13.928 18 13.667 17.739 13.667 17.417H13.667Z M14.24 15.67L12.73 13.31 M9.76001 15.67L11.27 13.31"></path>
                              </g>
                            </g>
                          </svg>
                        </IconBox>

                        <Typography>
                          Investor Memo - Liberty House 1617 AR
                        </Typography>
                      </TitleBox>

                      <DownloadIcon>
                        <FileDownloadOutlinedIcon
                          style={{ color: "#0170dc" }}
                        />
                      </DownloadIcon>
                    </DownloadBox>
                   */
}
