import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  ThemeProvider,
  Tooltip,
  Typography,
  createTheme,
  styled,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useMediaQuery } from "@mui/material";
import config from "../../../config";
import axios from "axios";
import KycVerification from "../portfolio/KycVerification";
const token = JSON.parse(localStorage.getItem("userinfo"));
const URL = config.URL;

const Header = styled(Typography)`
  padding: 10px 0;
  font-size: 20px;
  font-weight: 600;
  font-family: "Inter";
`;
const theme = createTheme({
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: "14px",
          fontFamily: "Inter",
          backgroundColor: "white",
          color: "black",
          textAlign: "center",
          borderRadius: "20px",
          padding: "20px",
          boxShadow: "0px 0px 3px 0px black",
        },
      },
    },
  },
});
const info = (
  <>
    <h3 style={{ margin: "0 10px 10px 10px" }}>Portfolio value</h3>
    <p>
      The total value of your pending investments, cash balance, and all of your
      Stakes (based on the latest valuation of the properties)
    </p>
  </>
);

const theme1 = createTheme({
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: "14px",
          fontFamily: "Inter",
          backgroundColor: "white",
          color: "black",
          textAlign: "center",
          borderRadius: "20px",
          padding: "10px",
          boxShadow: "0px 0px 3px 0px black",
        },
      },
    },
  },
});

const info1 = (
  <p>
    This displays the most recent rental income deposited into your VenQ wallet.
    Please note that this figure may vary due to various factors such as
    occupancy levels, temporary rental pauses for maintenance or vacancy,
    changes in rental agreements, etc.
  </p>
);
const info2 = (
  <p>
    The total amount of income paid into your VenQ wallet from monthly rent
    received and any realised gains from properties sold
  </p>
);
const info3 = (
  <p>
    Unrealised gains or losses from the latest valuations of the owned
    properties in your portfolio
  </p>
);

const theme2 = createTheme({
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: "14px",
          fontFamily: "Inter",
          backgroundColor: "white",
          color: "black",
          textAlign: "flex-start",
          borderRadius: "20px",
          padding: "20px",
          boxShadow: "0px 0px 3px 0px black",
        },
      },
    },
  },
});
const info4 = (
  <>
    <h4 style={{ margin: "15px 0" }}>When does my investment limit reset?</h4>
    <p style={{ fontSize: "13px" }}>
      Your annual investment limit will reset on 1 January 2024
    </p>

    <h4 style={{ margin: "15px 0" }}>Why do we have limits?</h4>
    <p style={{ fontSize: "13px" }}>
      Local regulations limit retail investors to a maximum od USD 50,000 (RUP
      183,500) invested on the VenQ platform per calendar year
    </p>

    <h4 style={{ margin: "15px 0" }}>
      How do I become a professional investor?
    </h4>
    <p style={{ fontSize: "13px" }}>
      If you have assets worth over USD 1 million then please reach out to our
      client support team who will help you classify as a professional investor,
      which removes all investment limits and allows you to deposit or invest
      with credit cards
    </p>
  </>
);
const info5 = (
  <>
    <p>
      This is the percentage of your Properties that are currently generating
      income. In some cases a property will temporarily stop generating income,
      and the reason will be detailed on the property page in your VenQ
      portfolio
    </p>
  </>
);
const info6 = (
  <>
    <p>
      Your portfolio's annualised rental yield % is based on the realised rental
      income that you've received from all of your properties over the past 12
      months.
    </p>
  </>
);

const SubHeader = styled(Typography)`
  color: rgb(112, 111, 111);
  font-size: 15px;
  font-family: "Inter";
`;
const Insights = styled(Typography)`
  color: black;
  font-family: "Inter";
  font-weight: 600;
`;

const TransactionTable = styled(Table)`
  background-color: white;
  border-radius: 20px;
  height: 40vh;
`;
const Head = styled(TableCell)`
  color: black;
  font-size: 18px;
  padding-top: 20px;
  padding-bottom: 10px;
  padding-left: 30px;
  font-family: "Inter";
`;

// function createData(id, property, location, investmentValue, rentEarned) {
//   return { id, property, location, investmentValue, rentEarned };
// }
const rows = [];

// function createData1(id, property, location, investmentAmount, expectedRent) {
//   return { id, property, location, investmentAmount, expectedRent };
// }
const rows1 = [];

const Portfolio = ({ handleBuyProperties }) => {
  const id = localStorage.getItem("selectedId");
  console.log(id, "selectedId");
  const [data, setData] = useState([]);
  const [propertyArray, setPropertyArray] = useState([]); // Use state for propertyArray
  const [investmentAmount, setInvestmentAmount] = useState(0);
  const [showKycVerification, setShowKycVerification] = useState(false);
  const [onbcomp, setonbcomp] = useState(0);
  const [isAdmin, setAdmin] = useState(false);
  const handleRequest = () => {
    setShowKycVerification(true);
  };

  const closeModal = () => {
    setShowKycVerification(false);
  };
  useEffect(() => {
    const fetchListing = async () => {
      try {
        const response = await axios.get(`${URL}/listing/${id}`);
        const listingData = response.data;

        setData(listingData);
        // Create an object with dynamic properties
        const propertyObject = {
          propertyName: listingData?.properyheading,
          tickerCode: "2",
          investmentAmount: localStorage.getItem("investmentAmount"),
          noOfUnits: 2, // Example of adding another property
        };
        setInvestmentAmount(localStorage.getItem("investmentAmount"));

        // Update the state with the new object
        setPropertyArray((prevArray) => [...prevArray, propertyObject]);
      } catch (error) {
        console.error("Error fetching listing:", error);
      }
    };

    fetchListing();
  }, [id]); // Depend on id to refetch data when it changes
  useEffect(() => {
    axios
      .get(`${URL}/investment/${token.email}`)
      .then((response) => {
        // console.log("Fetched data from server:", response.data);
        // console.log(response.data);

        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    setAdmin(token.isAdmin);
    axios
      .get(`${URL}/auth/user/checkverify/${token.email}`)
      .then((response) => {
        setonbcomp(response.data.isVerified);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(propertyArray, "data");
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const Container = styled(Box)`
    background-color: white;
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    border-radius: 20px;
    padding: 30px;
    height: ${isMobile ? "none" : "70vh"};
  `;
  <script
    type="text/javascript"
    id="hs-script-loader"
    async
    defer
    src="//js.hs-scripts.com/45720526.js"
  ></script>;
  return (
    <>
      {!onbcomp ? (
        <>
          <KycVerification />
          <div>
            <Box style={{ padding: isMobile ? "10px" : "30px" }}>
              <Typography
                variant="h4"
                style={{
                  fontFamily: "Inter",
                  padding: "0 10px 10px 0px",
                  fontWeight: 600,
                  backgroundColor: "blurred",
                }}
              >
                Portfolio
              </Typography>

              <Container>
                <Box style={{ padding: "10px 0" }}>
                  <ThemeProvider theme={theme}>
                    <Typography
                      style={{
                        fontSize: "16px",
                        fontFamily: "Inter",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      Portfolio value
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

                  <Typography
                    style={{
                      fontWeight: 700,
                      fontSize: "34px",
                      fontFamily: "Inter",
                    }}
                  >
                    RUP {investmentAmount}
                  </Typography>
                </Box>

                {/* <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <Typography style={{ fontFamily: "Inter" }}>
              Invest in properties
            </Typography>
            <Typography style={{ fontFamily: "Inter" }}>
              to start building your
            </Typography>
            <Typography style={{ fontFamily: "Inter" }}>wealth</Typography>
            <Link
              to="/dashboard/properties"
              onClick={handleBuyProperties}
              style={{
                fontFamily: "Inter",
                margin: "20px",
                border: "2px solid #0170dc",
                padding: "10px 20px",
                color: "white",
                backgroundColor: "#0170dc",
                borderRadius: "10px",
                textDecoration: "none",
              }}
            >
              Buy Properties
            </Link>
          </Box> */}
                <Box style={{ margin: "20px 0" }}>
                  <TransactionTable size="small">
                    {!isMobile && (
                      <TableHead>
                        <TableRow>
                          <Head>Property Name</Head>
                          <Head>Ticker Code</Head>
                          <Head>Investment amount</Head>
                          <Head>No. of Units</Head>
                        </TableRow>
                      </TableHead>
                    )}

                    {propertyArray.length === 0 ? (
                      <TableBody>
                        <TableRow>
                          <TableCell colSpan={5}>
                            <Box
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                height: "100%",
                                flexDirection: "column",
                              }}
                            >
                              <AccessTimeIcon style={{ fontSize: "40px" }} />
                              <Typography
                                style={{
                                  fontFamily: "Inter",
                                  fontSize: "18px",
                                  margin: "10px",
                                }}
                              >
                                No investments found
                              </Typography>
                            </Box>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    ) : (
                      propertyArray.map((row) => (
                        <TableBody>
                          <TableRow key={row.id}>
                            <TableCell>{row.propertyName}</TableCell>
                            <TableCell>{row.tickerCode}</TableCell>
                            <TableCell>{row.investmentAmount}</TableCell>
                            <TableCell>{row.noOfUnits}</TableCell>
                            {/* <TableCell>{`$${row.amount}`}</TableCell> */}
                          </TableRow>
                        </TableBody>
                      ))
                    )}
                  </TransactionTable>
                </Box>
              </Container>

              <Box style={{ margin: "20px 0" }}>
                <Header>Key financials</Header>

                <Grid
                  container
                  spacing={{ xs: 2, md: 3 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  <Grid item xs={12} sm={4} md={4}>
                    <Box
                      style={{
                        padding: "20px",
                        backgroundColor: "white",
                        borderRadius: "10px",
                      }}
                    >
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Box style={{ width: "40px", height: "40px" }}>
                          <svg
                            viewBox="0 0 24 24"
                            focusable="false"
                            class="chakra-icon css-pawapt"
                            aria-label="money"
                          >
                            <g
                              fill="none"
                              fill-rule="nonzero"
                              stroke="#0170dc"
                              stroke-width="1.2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <g>
                                <path d="M13.999 5C14 3.895 11.76 3 9 3C6.24 3 4.002 3.896 4 5C4 6.105 6.238 7 9 7C11.762 7 14 6.105 14 5 M14 5V12.76 M4.00098 9C4.00098 10.105 6.23898 11 9.00098 11C11.763 11 14.001 10.105 14.001 9 M19.6822 13.318C21.4392 15.075 21.4392 17.925 19.6822 19.682C17.9252 21.439 15.0752 21.439 13.3182 19.682C11.5612 17.925 11.5612 15.075 13.3182 13.318C15.0752 11.561 17.9252 11.561 19.6822 13.318 M12.505 14.425C11.603 14.78 10.366 15 8.99998 15C6.23898 15 4.00098 14.105 4.00098 13 M12.445 18.444C11.548 18.787 10.339 19 9 19C6.239 19 4.001 18.105 4 17V5"></path>
                              </g>
                            </g>
                          </svg>
                        </Box>
                      </Box>

                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          margin: "10px 0",
                        }}
                      >
                        <ThemeProvider theme={theme1}>
                          <SubHeader>
                            Monthly Income
                            <Tooltip title={info1} placement="bottom">
                              <Typography
                                style={{
                                  border: "1px solid rgb(112,111,111)",
                                  color: "rgb(112,111,111)",
                                  display: "inline",
                                  cursor: "pointer",
                                  padding: "0px 4px",
                                  marginLeft: "5px",
                                  borderRadius: "50%",
                                  fontSize: "10px",
                                }}
                              >
                                i
                              </Typography>
                            </Tooltip>
                          </SubHeader>
                        </ThemeProvider>
                        <SubHeader>May 2023</SubHeader>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={4} md={4}>
                    <Box
                      style={{
                        padding: "20px",
                        backgroundColor: "white",
                        borderRadius: "10px",
                      }}
                    >
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Box style={{ width: "40px", height: "40px" }}>
                          <svg
                            viewBox="0 0 24 24"
                            focusable="false"
                            aria-label="money-up"
                          >
                            <g
                              fill="none"
                              fill-rule="nonzero"
                              stroke="#0170dc"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <g>
                                <path d="M11.7927 9.2052L15.2069 5.79105"></path>
                                <path d="M11.5748 5.65456C11.575 5.60903 11.612 5.57224 11.6575 5.57232C11.703 5.5724 11.7399 5.60933 11.7399 5.65486C11.7399 5.70038 11.703 5.73731 11.6575 5.73739C11.612 5.73747 11.575 5.70068 11.5748 5.65516V5.65456"></path>
                                <path d="M7.99833 6.99792V5.29721C7.99833 3.47391 9.47641 1.99583 11.2997 1.99583H15.7015C17.5248 1.99583 19.0029 3.47391 19.0029 5.29721V9.69904C19.0029 11.5223 17.5248 13.0004 15.7015 13.0004H15.0012"></path>
                                <path d="M15.4264 9.3417C15.4263 9.38722 15.3893 9.42401 15.3437 9.42393C15.2982 9.42385 15.2614 9.38692 15.2614 9.34139C15.2614 9.29587 15.2982 9.25894 15.3437 9.25886C15.3893 9.25878 15.4263 9.29557 15.4264 9.34109V9.3417"></path>
                                <path d="M19.0029 16.0017V21.0037"></path>
                                <path d="M17.0021 18.0025L19.0029 16.0017"></path>
                                <path d="M21.0037 18.0025L19.0029 16.0017"></path>
                                <path d="M2.99625 12.6003V19.4031C2.99739 20.2869 4.78785 21.0037 6.99791 21.0037C9.20797 21.0037 10.9984 20.2869 10.9996 19.4031V12.6003"></path>
                                <path d="M10.9984 12.6002C10.9984 13.484 9.20683 14.2009 6.99677 14.2009C4.78671 14.2009 2.99625 13.484 2.99625 12.6002C2.99625 11.7153 4.78899 10.9996 6.99791 10.9996C9.20683 10.9996 10.9984 11.7164 10.9996 12.6002"></path>
                                <path d="M2.99682 16.0017C2.99682 16.8855 4.78728 17.6023 6.99734 17.6023C9.20741 17.6023 10.999 16.8855 10.999 16.0017"></path>
                              </g>
                            </g>
                          </svg>
                        </Box>
                        <Typography
                          style={{
                            fontSize: "24px",
                            fontWeight: 600,
                            fontFamily: "Inter",
                          }}
                        >
                          RUP 0
                        </Typography>
                      </Box>

                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          margin: "10px 0",
                        }}
                      >
                        <ThemeProvider theme={theme1}>
                          <SubHeader>
                            Total income
                            <Tooltip title={info2} placement="bottom">
                              <Typography
                                style={{
                                  border: "1px solid rgb(112,111,111)",
                                  color: "rgb(112,111,111)",
                                  display: "inline",
                                  cursor: "pointer",
                                  padding: "0px 4px",
                                  marginLeft: "5px",
                                  borderRadius: "50%",
                                  fontSize: "10px",
                                }}
                              >
                                i
                              </Typography>
                            </Tooltip>
                          </SubHeader>
                        </ThemeProvider>
                        <SubHeader>as of May 2023</SubHeader>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={4} md={4}>
                    <Box
                      style={{
                        padding: "20px",
                        backgroundColor: "white",
                        borderRadius: "10px",
                      }}
                    >
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Box style={{ width: "40px", height: "40px" }}>
                          <svg
                            viewBox="0 0 24 24"
                            focusable="false"
                            class="chakra-icon css-pawapt"
                            aria-label="graph-up"
                          >
                            <g
                              fill="none"
                              fill-rule="nonzero"
                              stroke="#0170dc"
                              stroke-width="1.2"
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
                        </Box>
                        <Typography
                          style={{
                            fontSize: "24px",
                            fontWeight: 600,
                            fontFamily: "Inter",
                          }}
                        >
                          RUP 0
                        </Typography>
                      </Box>

                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          margin: "10px 0",
                        }}
                      >
                        <ThemeProvider theme={theme1}>
                          <SubHeader>
                            Value appreciation
                            <Tooltip title={info3} placement="bottom">
                              <Typography
                                style={{
                                  border: "1px solid rgb(112,111,111)",
                                  color: "rgb(112,111,111)",
                                  display: "inline",
                                  cursor: "pointer",
                                  padding: "0px 4px",
                                  marginLeft: "5px",
                                  borderRadius: "50%",
                                  fontSize: "10px",
                                }}
                              >
                                i
                              </Typography>
                            </Tooltip>
                          </SubHeader>
                        </ThemeProvider>
                        <SubHeader>as of May 2023</SubHeader>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>

              <Box style={{ margin: "20px 0" }}>
                <Grid container spacing={isMobile ? 2 : 3}>
                  <Grid item xs={12} md={7}>
                    <Header>Quick insights</Header>

                    <Grid
                      container
                      spacing={isMobile ? 2 : 3}
                      columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                      <Grid item xs={12} sm={4} md={4}>
                        <Box
                          style={{
                            padding: "20px",
                            backgroundColor: "white",
                            borderRadius: "10px",
                          }}
                        >
                          <Box style={{ width: "30px", height: "30px" }}>
                            <svg
                              viewBox="0 0 24 24"
                              focusable="false"
                              class="chakra-icon css-pawapt"
                              aria-label="house"
                            >
                              <g
                                fill="none"
                                fill-rule="nonzero"
                                stroke="#0170dc"
                                stroke-width="1.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <g>
                                  <path d="M2.99625 11.6955L10.9346 4.89104C11.5477 4.36554 12.4523 4.36554 13.0654 4.89104L21.0037 11.6955"></path>
                                  <path d="M20.0033 21.0037V4.49687C20.0033 4.22062 19.7794 3.99667 19.5031 3.99667H16.5019C16.2256 3.99667 16.0017 4.22062 16.0017 4.49687V7.10396"></path>
                                  <path d="M9.54443 21.0037V15.5015C9.54443 14.9489 9.99233 14.501 10.5448 14.501H13.4552C14.0077 14.501 14.4556 14.9489 14.4556 15.5015V21.0037"></path>
                                  <path d="M4.28229 10.5931V21.0037 M21.0037 21.0037H2.99625"></path>
                                </g>
                              </g>
                            </svg>
                          </Box>

                          <Box
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              margin: "10px 0",
                            }}
                          >
                            <SubHeader>Number of properties</SubHeader>
                          </Box>
                          <Insights>0</Insights>
                        </Box>
                      </Grid>

                      <Grid item xs={12} sm={4} md={4}>
                        <Box
                          style={{
                            padding: "20px",
                            backgroundColor: "white",
                            borderRadius: "10px",
                          }}
                        >
                          <Box style={{ width: "30px", height: "30px" }}>
                            <svg
                              viewBox="0 0 24 24"
                              focusable="false"
                              class="chakra-icon css-pawapt"
                              aria-label="calendar"
                            >
                              <g
                                fill="none"
                                fill-rule="nonzero"
                                stroke="#0170dc"
                                stroke-width="1.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M16 3V5.25 M8 3V5.25 M3 9H21 M18 21H6C4.343 21 3 19.657 3 18V7C3 5.343 4.343 4 6 4H18C19.657 4 21 5.343 21 7V18C21 19.657 19.657 21 18 21Z M9.89893 17.0999L14.0989 12.8999 M14.2901 16.9531C14.3841 17.0471 14.3841 17.1991 14.2901 17.2921C14.1961 17.3861 14.0441 17.3861 13.9511 17.2921C13.8571 17.1981 13.8571 17.0461 13.9511 16.9531C14.0441 16.8591 14.1961 16.8591 14.2901 16.9531 M10.0499 12.7071C10.1439 12.8011 10.1439 12.9531 10.0499 13.0461C9.95587 13.1401 9.80387 13.1401 9.71087 13.0461C9.61687 12.9521 9.61687 12.8001 9.71087 12.7071C9.80487 12.6141 9.95587 12.6141 10.0499 12.7071"></path>
                              </g>
                            </svg>
                          </Box>

                          <Box
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              margin: "10px 0",
                            }}
                          >
                            <ThemeProvider theme={theme}>
                              <SubHeader>
                                Portfolio occupancy
                                <Tooltip title={info5} placement="bottom">
                                  <Typography
                                    style={{
                                      border: "1px solid rgb(112,111,111)",
                                      color: "rgb(112,111,111)",
                                      display: "inline",
                                      cursor: "pointer",
                                      padding: "0px 4px",
                                      marginLeft: "5px",
                                      borderRadius: "50%",
                                      fontSize: "10px",
                                    }}
                                  >
                                    i
                                  </Typography>
                                </Tooltip>
                              </SubHeader>
                            </ThemeProvider>
                          </Box>
                          <Insights>0%</Insights>
                        </Box>
                      </Grid>

                      <Grid item xs={12} sm={4} md={4}>
                        <Box
                          style={{
                            padding: "20px",
                            backgroundColor: "white",
                            borderRadius: "10px",
                          }}
                        >
                          <Box style={{ width: "30px", height: "30px" }}>
                            <svg
                              viewBox="0 0 24 24"
                              focusable="false"
                              class="chakra-icon css-pawapt"
                              aria-label="graph-up"
                            >
                              <g
                                fill="none"
                                fill-rule="nonzero"
                                stroke="#0170dc"
                                stroke-width="1.2"
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
                          </Box>

                          <Box
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              margin: "10px 0",
                            }}
                          >
                            <ThemeProvider theme={theme}>
                              <SubHeader>
                                Annualised rental yield
                                <Tooltip title={info6} placement="bottom">
                                  <Typography
                                    style={{
                                      border: "1px solid rgb(112,111,111)",
                                      color: "rgb(112,111,111)",
                                      display: "inline",
                                      cursor: "pointer",
                                      padding: "0px 4px",
                                      marginLeft: "5px",
                                      borderRadius: "50%",
                                      fontSize: "10px",
                                    }}
                                  >
                                    i
                                  </Typography>
                                </Tooltip>
                              </SubHeader>
                            </ThemeProvider>
                          </Box>
                          <Insights>0%</Insights>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} md={5}>
                    <ThemeProvider theme={theme2}>
                      <Header>
                        Annual investment limit
                        <Tooltip title={info4} placement="bottom">
                          <Typography
                            style={{
                              border: "1px solid rgb(112,111,111)",
                              color: "rgb(112,111,111)",
                              display: "inline",
                              cursor: "pointer",
                              padding: "0px 4px",
                              marginLeft: "5px",
                              borderRadius: "50%",
                              fontSize: "10px",
                            }}
                          >
                            i
                          </Typography>
                        </Tooltip>
                      </Header>
                    </ThemeProvider>

                    <Grid item>
                      <Box
                        style={{
                          padding: "20px",
                          backgroundColor: "white",
                          borderRadius: "10px",
                        }}
                      >
                        <p
                          style={{ textAlign: "center", marginBottom: "10px" }}
                        >
                          <b>0%</b> of limit used
                        </p>
                        <progress
                          value={0}
                          max={2000000}
                          style={{ width: "100%" }}
                        />

                        <Box style={{ margin: "5px 0 0 0" }}>
                          <Box
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <SubHeader>Annual limit</SubHeader>
                            <Typography
                              style={{ fontWeight: "600", fontSize: "15px" }}
                            >
                              RUP 183,500
                            </Typography>
                          </Box>

                          <Box
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <Box
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <div
                                style={{
                                  width: "7px",
                                  height: "7px",
                                  backgroundColor: "#0170dc",
                                  borderRadius: "50%",
                                  marginRight: "10px",
                                }}
                              ></div>
                              <SubHeader>Invested YTD</SubHeader>
                            </Box>
                            <Typography
                              style={{ fontWeight: "600", fontSize: "15px" }}
                            >
                              RUP 0
                            </Typography>
                          </Box>

                          <Box
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <Box
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <div
                                style={{
                                  width: "7px",
                                  height: "7px",
                                  backgroundColor: "lightgrey",
                                  borderRadius: "50%",
                                  marginRight: "10px",
                                }}
                              ></div>
                              <SubHeader>Available to invest</SubHeader>
                            </Box>
                            <Typography
                              style={{ fontWeight: "600", fontSize: "15px" }}
                            >
                              RUP 183,500
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>

              <Box style={{ margin: "20px 0" }}>
                <Header>Owned Stacks (0)</Header>
                <TransactionTable size="small">
                  {!isMobile && (
                    <TableHead>
                      <TableRow>
                        <Head>Property</Head>
                        <Head>Location</Head>
                        <Head>Investment value</Head>
                        <Head>Rent Earned</Head>
                      </TableRow>
                    </TableHead>
                  )}

                  {rows.length === 0 ? (
                    <TableBody>
                      <TableRow>
                        <TableCell colSpan={5}>
                          <Box
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              height: "100%",
                              flexDirection: "column",
                            }}
                          >
                            <AccessTimeIcon style={{ fontSize: "40px" }} />
                            <Typography
                              style={{
                                fontFamily: "Inter",
                                fontSize: "18px",
                                margin: "10px",
                              }}
                            >
                              No investments found
                            </Typography>
                          </Box>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  ) : (
                    rows.map((row) => (
                      <TableBody>
                        <TableRow key={row.id}>
                          <TableCell>{row.type}</TableCell>
                          <TableCell>{row.status}</TableCell>
                          <TableCell>{row.date}</TableCell>
                          <TableCell>{row.wallet}</TableCell>
                          <TableCell>{`$${row.amount}`}</TableCell>
                        </TableRow>
                      </TableBody>
                    ))
                  )}
                </TransactionTable>
              </Box>

              <Box style={{ margin: "20px 0" }}>
                <Header>Pending investments (0)</Header>

                <TransactionTable size="small">
                  {!isMobile && (
                    <TableHead>
                      <TableRow>
                        <Head>Property</Head>
                        <Head>Location</Head>
                        <Head>Investment amount</Head>
                        <Head>Expected rent</Head>
                      </TableRow>
                    </TableHead>
                  )}

                  {rows1.length === 0 ? (
                    <TableBody>
                      <TableRow>
                        <TableCell colSpan={5}>
                          <Box
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              height: "100%",
                              flexDirection: "column",
                            }}
                          >
                            <AccessTimeIcon style={{ fontSize: "40px" }} />
                            <Typography
                              style={{
                                fontFamily: "Inter",
                                fontSize: "18px",
                                margin: "10px",
                              }}
                            >
                              No investments found
                            </Typography>
                          </Box>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  ) : (
                    rows1.map((row) => (
                      <TableBody>
                        <TableRow key={row.id}>
                          <TableCell>{row.type}</TableCell>
                          <TableCell>{row.status}</TableCell>
                          <TableCell>{row.date}</TableCell>
                          <TableCell>{row.wallet}</TableCell>
                          <TableCell>{`$${row.amount}`}</TableCell>
                        </TableRow>
                      </TableBody>
                    ))
                  )}
                </TransactionTable>
              </Box>
            </Box>
          </div>
        </>
      ) : (
        <div>
          <Box style={{ padding: isMobile ? "10px" : "30px" }}>
            <Typography
              variant="h4"
              style={{
                fontFamily: "Inter",
                padding: "0 10px 10px 0px",
                fontWeight: 600,
              }}
            >
              Portfolio
            </Typography>

            <Container>
              <Box style={{ padding: "10px 0" }}>
                <ThemeProvider theme={theme}>
                  <Typography
                    style={{
                      fontSize: "16px",
                      fontFamily: "Inter",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Portfolio value
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

                <Typography
                  style={{
                    fontWeight: 700,
                    fontSize: "34px",
                    fontFamily: "Inter",
                  }}
                >
                  RUP {investmentAmount}
                </Typography>
              </Box>

              {/* <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <Typography style={{ fontFamily: "Inter" }}>
              Invest in properties
            </Typography>
            <Typography style={{ fontFamily: "Inter" }}>
              to start building your
            </Typography>
            <Typography style={{ fontFamily: "Inter" }}>wealth</Typography>
            <Link
              to="/dashboard/properties"
              onClick={handleBuyProperties}
              style={{
                fontFamily: "Inter",
                margin: "20px",
                border: "2px solid #0170dc",
                padding: "10px 20px",
                color: "white",
                backgroundColor: "#0170dc",
                borderRadius: "10px",
                textDecoration: "none",
              }}
            >
              Buy Properties
            </Link>
          </Box> */}
              <Box style={{ margin: "20px 0" }}>
                <TransactionTable size="small">
                  {!isMobile && (
                    <TableHead>
                      <TableRow>
                        <Head>Property Name</Head>
                        <Head>Ticker Code</Head>
                        <Head>Investment amount</Head>
                        <Head>No. of Units</Head>
                      </TableRow>
                    </TableHead>
                  )}

                  {propertyArray.length === 0 ? (
                    <TableBody>
                      <TableRow>
                        <TableCell colSpan={5}>
                          <Box
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              height: "100%",
                              flexDirection: "column",
                            }}
                          >
                            <AccessTimeIcon style={{ fontSize: "40px" }} />
                            <Typography
                              style={{
                                fontFamily: "Inter",
                                fontSize: "18px",
                                margin: "10px",
                              }}
                            >
                              No investments found
                            </Typography>
                          </Box>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  ) : (
                    propertyArray.map((row) => (
                      <TableBody>
                        <TableRow key={row.id}>
                          <TableCell>{row.propertyName}</TableCell>
                          <TableCell>{row.tickerCode}</TableCell>
                          <TableCell>{row.investmentAmount}</TableCell>
                          <TableCell>{row.noOfUnits}</TableCell>
                          {/* <TableCell>{`$${row.amount}`}</TableCell> */}
                        </TableRow>
                      </TableBody>
                    ))
                  )}
                </TransactionTable>
              </Box>
            </Container>

            <Box style={{ margin: "20px 0" }}>
              <Header>Key financials</Header>

              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                <Grid item xs={12} sm={4} md={4}>
                  <Box
                    style={{
                      padding: "20px",
                      backgroundColor: "white",
                      borderRadius: "10px",
                    }}
                  >
                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Box style={{ width: "40px", height: "40px" }}>
                        <svg
                          viewBox="0 0 24 24"
                          focusable="false"
                          class="chakra-icon css-pawapt"
                          aria-label="money"
                        >
                          <g
                            fill="none"
                            fill-rule="nonzero"
                            stroke="#0170dc"
                            stroke-width="1.2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <g>
                              <path d="M13.999 5C14 3.895 11.76 3 9 3C6.24 3 4.002 3.896 4 5C4 6.105 6.238 7 9 7C11.762 7 14 6.105 14 5 M14 5V12.76 M4.00098 9C4.00098 10.105 6.23898 11 9.00098 11C11.763 11 14.001 10.105 14.001 9 M19.6822 13.318C21.4392 15.075 21.4392 17.925 19.6822 19.682C17.9252 21.439 15.0752 21.439 13.3182 19.682C11.5612 17.925 11.5612 15.075 13.3182 13.318C15.0752 11.561 17.9252 11.561 19.6822 13.318 M12.505 14.425C11.603 14.78 10.366 15 8.99998 15C6.23898 15 4.00098 14.105 4.00098 13 M12.445 18.444C11.548 18.787 10.339 19 9 19C6.239 19 4.001 18.105 4 17V5"></path>
                            </g>
                          </g>
                        </svg>
                      </Box>
                    </Box>

                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        margin: "10px 0",
                      }}
                    >
                      <ThemeProvider theme={theme1}>
                        <SubHeader>
                          Monthly Income
                          <Tooltip title={info1} placement="bottom">
                            <Typography
                              style={{
                                border: "1px solid rgb(112,111,111)",
                                color: "rgb(112,111,111)",
                                display: "inline",
                                cursor: "pointer",
                                padding: "0px 4px",
                                marginLeft: "5px",
                                borderRadius: "50%",
                                fontSize: "10px",
                              }}
                            >
                              i
                            </Typography>
                          </Tooltip>
                        </SubHeader>
                      </ThemeProvider>
                      <SubHeader>May 2023</SubHeader>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={4} md={4}>
                  <Box
                    style={{
                      padding: "20px",
                      backgroundColor: "white",
                      borderRadius: "10px",
                    }}
                  >
                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Box style={{ width: "40px", height: "40px" }}>
                        <svg
                          viewBox="0 0 24 24"
                          focusable="false"
                          aria-label="money-up"
                        >
                          <g
                            fill="none"
                            fill-rule="nonzero"
                            stroke="#0170dc"
                            stroke-width="1"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <g>
                              <path d="M11.7927 9.2052L15.2069 5.79105"></path>
                              <path d="M11.5748 5.65456C11.575 5.60903 11.612 5.57224 11.6575 5.57232C11.703 5.5724 11.7399 5.60933 11.7399 5.65486C11.7399 5.70038 11.703 5.73731 11.6575 5.73739C11.612 5.73747 11.575 5.70068 11.5748 5.65516V5.65456"></path>
                              <path d="M7.99833 6.99792V5.29721C7.99833 3.47391 9.47641 1.99583 11.2997 1.99583H15.7015C17.5248 1.99583 19.0029 3.47391 19.0029 5.29721V9.69904C19.0029 11.5223 17.5248 13.0004 15.7015 13.0004H15.0012"></path>
                              <path d="M15.4264 9.3417C15.4263 9.38722 15.3893 9.42401 15.3437 9.42393C15.2982 9.42385 15.2614 9.38692 15.2614 9.34139C15.2614 9.29587 15.2982 9.25894 15.3437 9.25886C15.3893 9.25878 15.4263 9.29557 15.4264 9.34109V9.3417"></path>
                              <path d="M19.0029 16.0017V21.0037"></path>
                              <path d="M17.0021 18.0025L19.0029 16.0017"></path>
                              <path d="M21.0037 18.0025L19.0029 16.0017"></path>
                              <path d="M2.99625 12.6003V19.4031C2.99739 20.2869 4.78785 21.0037 6.99791 21.0037C9.20797 21.0037 10.9984 20.2869 10.9996 19.4031V12.6003"></path>
                              <path d="M10.9984 12.6002C10.9984 13.484 9.20683 14.2009 6.99677 14.2009C4.78671 14.2009 2.99625 13.484 2.99625 12.6002C2.99625 11.7153 4.78899 10.9996 6.99791 10.9996C9.20683 10.9996 10.9984 11.7164 10.9996 12.6002"></path>
                              <path d="M2.99682 16.0017C2.99682 16.8855 4.78728 17.6023 6.99734 17.6023C9.20741 17.6023 10.999 16.8855 10.999 16.0017"></path>
                            </g>
                          </g>
                        </svg>
                      </Box>
                      <Typography
                        style={{
                          fontSize: "24px",
                          fontWeight: 600,
                          fontFamily: "Inter",
                        }}
                      >
                        RUP 0
                      </Typography>
                    </Box>

                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        margin: "10px 0",
                      }}
                    >
                      <ThemeProvider theme={theme1}>
                        <SubHeader>
                          Total income
                          <Tooltip title={info2} placement="bottom">
                            <Typography
                              style={{
                                border: "1px solid rgb(112,111,111)",
                                color: "rgb(112,111,111)",
                                display: "inline",
                                cursor: "pointer",
                                padding: "0px 4px",
                                marginLeft: "5px",
                                borderRadius: "50%",
                                fontSize: "10px",
                              }}
                            >
                              i
                            </Typography>
                          </Tooltip>
                        </SubHeader>
                      </ThemeProvider>
                      <SubHeader>as of May 2023</SubHeader>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={4} md={4}>
                  <Box
                    style={{
                      padding: "20px",
                      backgroundColor: "white",
                      borderRadius: "10px",
                    }}
                  >
                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Box style={{ width: "40px", height: "40px" }}>
                        <svg
                          viewBox="0 0 24 24"
                          focusable="false"
                          class="chakra-icon css-pawapt"
                          aria-label="graph-up"
                        >
                          <g
                            fill="none"
                            fill-rule="nonzero"
                            stroke="#0170dc"
                            stroke-width="1.2"
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
                      </Box>
                      <Typography
                        style={{
                          fontSize: "24px",
                          fontWeight: 600,
                          fontFamily: "Inter",
                        }}
                      >
                        RUP 0
                      </Typography>
                    </Box>

                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        margin: "10px 0",
                      }}
                    >
                      <ThemeProvider theme={theme1}>
                        <SubHeader>
                          Value appreciation
                          <Tooltip title={info3} placement="bottom">
                            <Typography
                              style={{
                                border: "1px solid rgb(112,111,111)",
                                color: "rgb(112,111,111)",
                                display: "inline",
                                cursor: "pointer",
                                padding: "0px 4px",
                                marginLeft: "5px",
                                borderRadius: "50%",
                                fontSize: "10px",
                              }}
                            >
                              i
                            </Typography>
                          </Tooltip>
                        </SubHeader>
                      </ThemeProvider>
                      <SubHeader>as of May 2023</SubHeader>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>

            <Box style={{ margin: "20px 0" }}>
              <Grid container spacing={isMobile ? 2 : 3}>
                <Grid item xs={12} md={7}>
                  <Header>Quick insights</Header>

                  <Grid
                    container
                    spacing={isMobile ? 2 : 3}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                  >
                    <Grid item xs={12} sm={4} md={4}>
                      <Box
                        style={{
                          padding: "20px",
                          backgroundColor: "white",
                          borderRadius: "10px",
                        }}
                      >
                        <Box style={{ width: "30px", height: "30px" }}>
                          <svg
                            viewBox="0 0 24 24"
                            focusable="false"
                            class="chakra-icon css-pawapt"
                            aria-label="house"
                          >
                            <g
                              fill="none"
                              fill-rule="nonzero"
                              stroke="#0170dc"
                              stroke-width="1.2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <g>
                                <path d="M2.99625 11.6955L10.9346 4.89104C11.5477 4.36554 12.4523 4.36554 13.0654 4.89104L21.0037 11.6955"></path>
                                <path d="M20.0033 21.0037V4.49687C20.0033 4.22062 19.7794 3.99667 19.5031 3.99667H16.5019C16.2256 3.99667 16.0017 4.22062 16.0017 4.49687V7.10396"></path>
                                <path d="M9.54443 21.0037V15.5015C9.54443 14.9489 9.99233 14.501 10.5448 14.501H13.4552C14.0077 14.501 14.4556 14.9489 14.4556 15.5015V21.0037"></path>
                                <path d="M4.28229 10.5931V21.0037 M21.0037 21.0037H2.99625"></path>
                              </g>
                            </g>
                          </svg>
                        </Box>

                        <Box
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            margin: "10px 0",
                          }}
                        >
                          <SubHeader>Number of properties</SubHeader>
                        </Box>
                        <Insights>0</Insights>
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={4} md={4}>
                      <Box
                        style={{
                          padding: "20px",
                          backgroundColor: "white",
                          borderRadius: "10px",
                        }}
                      >
                        <Box style={{ width: "30px", height: "30px" }}>
                          <svg
                            viewBox="0 0 24 24"
                            focusable="false"
                            class="chakra-icon css-pawapt"
                            aria-label="calendar"
                          >
                            <g
                              fill="none"
                              fill-rule="nonzero"
                              stroke="#0170dc"
                              stroke-width="1.2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M16 3V5.25 M8 3V5.25 M3 9H21 M18 21H6C4.343 21 3 19.657 3 18V7C3 5.343 4.343 4 6 4H18C19.657 4 21 5.343 21 7V18C21 19.657 19.657 21 18 21Z M9.89893 17.0999L14.0989 12.8999 M14.2901 16.9531C14.3841 17.0471 14.3841 17.1991 14.2901 17.2921C14.1961 17.3861 14.0441 17.3861 13.9511 17.2921C13.8571 17.1981 13.8571 17.0461 13.9511 16.9531C14.0441 16.8591 14.1961 16.8591 14.2901 16.9531 M10.0499 12.7071C10.1439 12.8011 10.1439 12.9531 10.0499 13.0461C9.95587 13.1401 9.80387 13.1401 9.71087 13.0461C9.61687 12.9521 9.61687 12.8001 9.71087 12.7071C9.80487 12.6141 9.95587 12.6141 10.0499 12.7071"></path>
                            </g>
                          </svg>
                        </Box>

                        <Box
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            margin: "10px 0",
                          }}
                        >
                          <ThemeProvider theme={theme}>
                            <SubHeader>
                              Portfolio occupancy
                              <Tooltip title={info5} placement="bottom">
                                <Typography
                                  style={{
                                    border: "1px solid rgb(112,111,111)",
                                    color: "rgb(112,111,111)",
                                    display: "inline",
                                    cursor: "pointer",
                                    padding: "0px 4px",
                                    marginLeft: "5px",
                                    borderRadius: "50%",
                                    fontSize: "10px",
                                  }}
                                >
                                  i
                                </Typography>
                              </Tooltip>
                            </SubHeader>
                          </ThemeProvider>
                        </Box>
                        <Insights>0%</Insights>
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={4} md={4}>
                      <Box
                        style={{
                          padding: "20px",
                          backgroundColor: "white",
                          borderRadius: "10px",
                        }}
                      >
                        <Box style={{ width: "30px", height: "30px" }}>
                          <svg
                            viewBox="0 0 24 24"
                            focusable="false"
                            class="chakra-icon css-pawapt"
                            aria-label="graph-up"
                          >
                            <g
                              fill="none"
                              fill-rule="nonzero"
                              stroke="#0170dc"
                              stroke-width="1.2"
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
                        </Box>

                        <Box
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            margin: "10px 0",
                          }}
                        >
                          <ThemeProvider theme={theme}>
                            <SubHeader>
                              Annualised rental yield
                              <Tooltip title={info6} placement="bottom">
                                <Typography
                                  style={{
                                    border: "1px solid rgb(112,111,111)",
                                    color: "rgb(112,111,111)",
                                    display: "inline",
                                    cursor: "pointer",
                                    padding: "0px 4px",
                                    marginLeft: "5px",
                                    borderRadius: "50%",
                                    fontSize: "10px",
                                  }}
                                >
                                  i
                                </Typography>
                              </Tooltip>
                            </SubHeader>
                          </ThemeProvider>
                        </Box>
                        <Insights>0%</Insights>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} md={5}>
                  <ThemeProvider theme={theme2}>
                    <Header>
                      Annual investment limit
                      <Tooltip title={info4} placement="bottom">
                        <Typography
                          style={{
                            border: "1px solid rgb(112,111,111)",
                            color: "rgb(112,111,111)",
                            display: "inline",
                            cursor: "pointer",
                            padding: "0px 4px",
                            marginLeft: "5px",
                            borderRadius: "50%",
                            fontSize: "10px",
                          }}
                        >
                          i
                        </Typography>
                      </Tooltip>
                    </Header>
                  </ThemeProvider>

                  <Grid item>
                    <Box
                      style={{
                        padding: "20px",
                        backgroundColor: "white",
                        borderRadius: "10px",
                      }}
                    >
                      <p style={{ textAlign: "center", marginBottom: "10px" }}>
                        <b>0%</b> of limit used
                      </p>
                      <progress
                        value={0}
                        max={2000000}
                        style={{ width: "100%" }}
                      />

                      <Box style={{ margin: "5px 0 0 0" }}>
                        <Box
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <SubHeader>Annual limit</SubHeader>
                          <Typography
                            style={{ fontWeight: "600", fontSize: "15px" }}
                          >
                            RUP 183,500
                          </Typography>
                        </Box>

                        <Box
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <div
                              style={{
                                width: "7px",
                                height: "7px",
                                backgroundColor: "#0170dc",
                                borderRadius: "50%",
                                marginRight: "10px",
                              }}
                            ></div>
                            <SubHeader>Invested YTD</SubHeader>
                          </Box>
                          <Typography
                            style={{ fontWeight: "600", fontSize: "15px" }}
                          >
                            RUP 0
                          </Typography>
                        </Box>

                        <Box
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <div
                              style={{
                                width: "7px",
                                height: "7px",
                                backgroundColor: "lightgrey",
                                borderRadius: "50%",
                                marginRight: "10px",
                              }}
                            ></div>
                            <SubHeader>Available to invest</SubHeader>
                          </Box>
                          <Typography
                            style={{ fontWeight: "600", fontSize: "15px" }}
                          >
                            RUP 183,500
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Box>

            <Box style={{ margin: "20px 0" }}>
              <Header>Owned Stacks (0)</Header>
              <TransactionTable size="small">
                {!isMobile && (
                  <TableHead>
                    <TableRow>
                      <Head>Property</Head>
                      <Head>Location</Head>
                      <Head>Investment value</Head>
                      <Head>Rent Earned</Head>
                    </TableRow>
                  </TableHead>
                )}

                {rows.length === 0 ? (
                  <TableBody>
                    <TableRow>
                      <TableCell colSpan={5}>
                        <Box
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "100%",
                            flexDirection: "column",
                          }}
                        >
                          <AccessTimeIcon style={{ fontSize: "40px" }} />
                          <Typography
                            style={{
                              fontFamily: "Inter",
                              fontSize: "18px",
                              margin: "10px",
                            }}
                          >
                            No investments found
                          </Typography>
                        </Box>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                ) : (
                  rows.map((row) => (
                    <TableBody>
                      <TableRow key={row.id}>
                        <TableCell>{row.type}</TableCell>
                        <TableCell>{row.status}</TableCell>
                        <TableCell>{row.date}</TableCell>
                        <TableCell>{row.wallet}</TableCell>
                        <TableCell>{`$${row.amount}`}</TableCell>
                      </TableRow>
                    </TableBody>
                  ))
                )}
              </TransactionTable>
            </Box>

            <Box style={{ margin: "20px 0" }}>
              <Header>Pending investments (0)</Header>
              <button onClick={handleRequest}>Click Me</button>

              <TransactionTable size="small">
                {!isMobile && (
                  <TableHead>
                    <TableRow>
                      <Head>Property</Head>
                      <Head>Location</Head>
                      <Head>Investment amount</Head>
                      <Head>Expected rent</Head>
                    </TableRow>
                  </TableHead>
                )}

                {rows1.length === 0 ? (
                  <TableBody>
                    <TableRow>
                      <TableCell colSpan={5}>
                        <Box
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "100%",
                            flexDirection: "column",
                          }}
                        >
                          <AccessTimeIcon style={{ fontSize: "40px" }} />
                          <Typography
                            style={{
                              fontFamily: "Inter",
                              fontSize: "18px",
                              margin: "10px",
                            }}
                          >
                            No investments found
                          </Typography>
                        </Box>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                ) : (
                  rows1.map((row) => (
                    <TableBody>
                      <TableRow key={row.id}>
                        <TableCell>{row.type}</TableCell>
                        <TableCell>{row.status}</TableCell>
                        <TableCell>{row.date}</TableCell>
                        <TableCell>{row.wallet}</TableCell>
                        <TableCell>{`$${row.amount}`}</TableCell>
                      </TableRow>
                    </TableBody>
                  ))
                )}
              </TransactionTable>
            </Box>
          </Box>
        </div>
      )}
    </>
  );
};

export default Portfolio;
