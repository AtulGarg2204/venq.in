import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  TextField,
  Divider,
  styled,
  useMediaQuery,
} from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import React, { useState, useEffect } from "react";
import useRazorpay from "react-razorpay";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link, useNavigate } from "react-router-dom";
import config from "../../config";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

// import { Box, Button, Typography, styled } from '@mui/material'
import { ThemeProvider, Tooltip, createTheme } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RemoveIcon from "@mui/icons-material/Remove";
// import {useNavigate} from 'react-router-dom'
// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import AddIcon from "@mui/icons-material/Add";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { width } from "@mui/system";

// import succesImg from '../../images/success.png'

const URL = config.URL;

const Amount = styled(Typography)`
  font-weight: 600;
  font-family: "Gilroy-Bold";
  font-size: 20px;
`;
const TermDetails = styled(Box)`
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: white;
  height: 240px;
  overflow-y: scroll;
`;
const PaymentButton = styled(Button)`
  font-family: "Inter";
  border: 2px solid #0170dc;
  color: white;
  background-color: #0170dc;
  border-radius: 10px;
  margin-top: 10px;
  width: 100%;
  text-decoration: none;
  &:hover {
    background-color: #0170dc;
  }
`;

const Terms = (props) => {
  const [Razorpay] = useRazorpay();
  const [openTerms, setOpenTerms] = useState(true);
  const navigate = useNavigate();

  const [check1, setCheckFirst] = useState(false);
  const [check2, setCheckSecond] = useState(false);
  const [userDetail, setUserDetail] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmailId, setUserEmailId] = useState("");
  const [userMobNumber, setUserMobNumber] = useState("");
  const [propertyName, setPropertyName] = useState("");
  const [amount, setAmount] = useState(0);
  const token = JSON.parse(localStorage.getItem("userinfo"));
  useEffect(() => {
    axios
      .get(`${URL}/investment/${token.email}`)
      .then((response) => {
        // console.log("Fetched data from server:", response.data);
        // console.log(response.data);

        setUserDetail(response.data.all);
        console.log(response.data, "hello ok");
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  // const handlePayment = async () => {
  //   userDetail.map((e) => {
  //     setUserName(e.name);
  //     setUserEmailId(e.email);
  //     setUserMobNumber(e.phone);
  //     setPropertyName(e.property);
  //   });
  //   // const quantity = 5;
  //   // console.log(quantity);
  //   const {
  //     data: { order },
  //   } = await axios.post("http://localhost:4000/payment/checkout", {
  //     name: propertyName,
  //     amount: props.userinvestone,
  //   });
  //   var options = {
  //     key: "rzp_test_itc2N0mSqRXSwE",
  //     amount: order.amount,
  //     currency: order.currency,
  //     name: "Acme Corp",
  //     description: "Test Transaction",
  //     image: "https://example.com/your_logo",
  //     order_id: order.id,
  //     callback_url: "http://localhost:4000/payment/paymentVerification",
  //     prefill: {
  //       name: userName,
  //       email: userEmailId,
  //       contact: userMobNumber,
  //     },
  //     notes: {
  //       address: "Razorpay Corporate Office",
  //     },
  //     theme: {
  //       color: "#3399cc",
  //     },
  //   };
  //   var rzp1 = new Razorpay(options);
  //   rzp1.open();
  // };
  const handlePayment = async () => {
    try {
      // Map user details to state variables if needed
      userDetail.forEach((e) => {
        setUserName(e.name);
        setUserEmailId(e.email);
        setUserMobNumber(e.phone);
        setPropertyName(e.property);
      });

      // Create an order
      const {
        data: { order },
      } = await axios.post("https://venq-wo88.onrender.com/payment/checkout", {
        name: propertyName,
        amount: props.userinvestone,
      });

      // Configure Razorpay options
      const options = {
        key: "rzp_test_itc2N0mSqRXSwE",
        amount: order.amount,
        currency: order.currency,
        name: "Acme Corp",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: order.id,
        callback_url:
          "https://venq-wo88.onrender.com/payment/paymentVerification",
        prefill: {
          name: userName,
          email: userEmailId,
          contact: userMobNumber,
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
        handler: async function (response) {
          try {
            // Check if payment is successful
            if (response.razorpay_payment_id) {
              // Payment successful, now create the transfer
              const transferResponse = await axios.post(
                "https://venq-wo88.onrender.com/payment/createTransfer",
                {
                  amount: props.userinvestone * 0.8, // Amount to transfer (80% of payment amount)
                  paymentId: response.razorpay_payment_id,
                  recipientAccountId: "acc_NzJ7ixN968wfiB", // Replace with recipient's account ID
                  notes: {
                    description: "Transfer from your platform",
                  },
                }
              );

              // Optionally, handle the transfer creation response
              console.log("Transfer created:", transferResponse.data);
            } else {
              // Payment failed or was cancelled
              console.error("Payment failed or cancelled:", response.error);
              // Handle payment failure or cancellation
            }
          } catch (error) {
            console.error("Error creating transfer:", error);
            // Handle transfer creation error
          }
        },
      };

      // Initialize Razorpay and open payment dialog
      const rzp1 = new Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Error handling payment:", error);
      // Handle errors appropriately
    }
  };

  return (
    <>
      {openTerms ? (
        <Box>
          <Amount
            style={{
              color: "black",
              fontSize: "26px",
              marginTop: "10px",
              marginLeft: "20px",
              alignItems: "center",
              direction: "flex",
              justifyContent: "center",
            }}
          >
            Terms
          </Amount>
          <div
            className="termcontainer"
            style={{
              maxWidth: "400px",
              minWidth: "400px",
              padding: "15px",
              borderRadius: "10px",
              height: "440px",
            }}
          >
            <TermDetails>
              <Typography
                variant="p"
                style={{
                  fontFamily: "Inter",
                  justifyContent: "space-between",
                  display: "flex",
                  // marginTop:'5px',
                  // marginBottom:'5px',
                  fontSize: "12px",
                  color: "gray",
                  alignItems: "center",
                }}
              >
                I understand that VENQ will receive a cash and securities
                commission as further detailed in the offering documents.
              </Typography>
              <Divider
                sx={{ my: 1 }}
                style={{ height: "2px", width: "100%" }}
              />
              <Typography
                variant="p"
                style={{
                  fontFamily: "Inter",
                  justifyContent: "space-between",
                  display: "flex",
                  fontSize: "12px",
                  // marginTop:'5px',
                  // marginBottom:'5px',
                  color: "gray",
                  alignItems: "center",
                }}
              >
                I understand I will have voting rights just for selling of my
                own share or selling the property after the holding period is
                over and will grant a third-party nominee broad authority to act
                on my behalf.
              </Typography>
              <Divider
                sx={{ my: 1 }}
                style={{ height: "2px", width: "100%" }}
              />
              <Typography
                variant="p"
                style={{
                  fontFamily: "Inter",
                  justifyContent: "space-between",
                  display: "flex",
                  // marginTop:'5px',
                  // marginBottom:'5px',
                  fontSize: "12px",
                  color: "gray",
                  alignItems: "center",
                }}
              >
                I understand I will become a beneficial owner of equity interest
                in the Company.
              </Typography>
              <Divider
                sx={{ my: 1 }}
                style={{ height: "2px", width: "100%" }}
              />
              <Typography
                variant="p"
                style={{
                  fontFamily: "Inter",
                  justifyContent: "space-between",
                  display: "flex",
                  // marginTop:'5px',
                  // marginBottom:'5px',
                  color: "gray",
                  fontSize: "12px",
                  alignItems: "center",
                }}
              >
                I understand that investing this amount into several deals would
                better diversify my risk
              </Typography>
              <Divider
                sx={{ my: 1 }}
                style={{ height: "2px", width: "100%" }}
              />
              <Typography
                variant="p"
                style={{
                  fontFamily: "Inter",
                  justifyContent: "space-between",
                  display: "flex",
                  // marginTop:'5px',
                  // marginBottom:'5px',
                  color: "gray",
                  fontSize: "12px",
                  alignItems: "center",
                }}
              >
                I understand that there is no guarantee of a relationship
                between VENQ and the Developer post-offering
              </Typography>
              <Divider
                sx={{ my: 1 }}
                style={{ height: "2px", width: "100%" }}
              />
              <Typography
                variant="p"
                style={{
                  fontFamily: "Inter",
                  justifyContent: "space-between",
                  display: "flex",
                  // marginTop:'5px',
                  // marginBottom:'5px',
                  color: "gray",
                  alignItems: "center",
                  fontSize: "12px",
                }}
              >
                I consent to electronic delivery of all documents, notices and
                agreements as related to my investment
              </Typography>
              <Divider
                sx={{ my: 1 }}
                style={{ height: "2px", width: "100%" }}
              />
              <Typography
                variant="p"
                style={{
                  fontFamily: "Inter",
                  justifyContent: "space-between",
                  display: "flex",
                  // marginTop:'5px',
                  // marginBottom:'5px',
                  color: "gray",
                  alignItems: "center",
                  fontSize: "12px",
                }}
              >
                I understand my investment won't be transferable for next 2
                months and may not have a market for resale
              </Typography>
              <Divider
                sx={{ my: 1 }}
                style={{ height: "2px", width: "100%" }}
              />
              <Typography
                variant="p"
                style={{
                  fontFamily: "Inter",
                  justifyContent: "space-between",
                  display: "flex",
                  // marginTop:'5px',
                  // marginBottom:'5px',
                  color: "gray",
                  alignItems: "center",
                  fontSize: "12px",
                }}
              >
                I have read the educational materials and agree to the Terms of
                Service, including arbitration provisions
              </Typography>
              <Divider
                sx={{ my: 1 }}
                style={{ height: "2px", width: "100%" }}
              />
              <Typography
                variant="p"
                style={{
                  fontFamily: "Inter",
                  justifyContent: "space-between",
                  display: "flex",
                  // marginTop:'5px',
                  // marginBottom:'5px',
                  color: "gray",
                  alignItems: "center",
                  fontSize: "12px",
                }}
              >
                I understand this investment is risky and that I shouldn't
                invest unless I can afford to lose all invested funds
              </Typography>
              <Divider
                sx={{ my: 1 }}
                style={{ height: "2px", width: "100%" }}
              />
              <Typography
                variant="p"
                style={{
                  fontFamily: "Inter",
                  justifyContent: "space-between",
                  display: "flex",
                  // marginTop:'5px',
                  marginBottom: "5px",
                  color: "gray",
                  alignItems: "center",
                  fontSize: "12px",
                }}
              >
                I understand I am responsible for all fees and charges
                associated with the use of my payment method
              </Typography>
            </TermDetails>

            <div
              style={{
                display: "flex",
              }}
            >
              <Checkbox
                checked={check1}
                onChange={(e) => {
                  console.log(e.target.checked);
                  setCheckFirst((prev) => !prev);
                }}
              />
              <Typography
                sx={{
                  fontFamily: "Gilroy-Medium",
                  alignItems: "center",
                  marginTop: "12px",
                  color: "black",
                  fontSize: "14px",
                }}
              >
                I have read and agree to the e sign disclosure
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Checkbox
                checked={check2}
                onChange={(e) => {
                  console.log(e.target.checked);
                  setCheckSecond((prev) => !prev);
                }}
              />
              <Typography
                sx={{
                  fontFamily: "Gilroy-Medium",
                  alignItems: "center",
                  color: "black",
                  fontSize: "14px",
                }}
              >
                I have read and accept the terms of the agreement
              </Typography>
            </div>

            {/* <FormControlLabel sx={{
fontFamily:'Gilroy-Medium'
}} required control={<Checkbox />} label="I have read and agree to the e sign disclosure" /> */}

            <Box>
              <PaymentButton
                disabled={check1 && check2 ? false : true}
                onClick={handlePayment}
                sx={{
                  "&.Mui-disabled": {
                    background: "#eaeaea",
                    color: "#c0c0c0",
                  },
                }}
              >
                Proceed to payment
              </PaymentButton>
            </Box>
          </div>
        </Box>
      ) : (
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          marginTop={"80px"}
          minWidth={"400px"}
        >
          <FontAwesomeIcon icon={faCheckCircle} color="green" size="8x" />
          <h2 style={{ color: "black" }}>Payment verified Successfully</h2>
        </Box>
      )}
    </>
  );
};

export default Terms;
