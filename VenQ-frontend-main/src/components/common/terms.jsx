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
import payment_logo from "./payment-logo.png";
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "./terms.css";
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

const URL = config.URL;

const Amount = styled(Typography)`
  font-weight: 600;
  font-family: "Gilroy-Bold";
  font-size: 20px;
  backgroundcolor: "red";
`;
const TermDetails = styled(Box)`
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: white;
  height: 240px;
  overflow-y: scroll;
  @media (max-width: 800px) {
    width: 70%;
    margin-left: -15px;
    margin-top: 0px;
  }
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
  @media (max-width: 800px) {
    width: 70%;
    height: 30px;
    margin-left: -15px;
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
        setUserDetail(response.data.all);
        console.log(response.data, "hello ok");
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handlePayment = async () => {
    try {
      if (userDetail && userDetail.length > 0) {
        const user = userDetail[userDetail.length - 1];
        setUserName(user.name);
        setUserEmailId(user.email);
        setUserMobNumber(user.phone);
        setPropertyName(user.property);

        const {
          data: { order },
        } = await axios.post(`${URL}/payment/checkout`, {
          name: propertyName,
          amount: props.userinvestone,
        });

        const options = {
          key: "rzp_live_gHZIY3vAzSxfGR", // Test key, replace with live key when going to production
          amount: order.amount,
          currency: order.currency,
          name: "Venq",
          description: "Test Transaction",
          image: { payment_logo },
          order_id: order.id,
          prefill: {
            name: userName,
            email: userEmailId,
            contact: userMobNumber,
          },
          notes: {
            name: user.name,
            propertyName: user.property,
          },
          theme: {
            color: "#3399cc",
          },
          handler: async function (response) {
            try {
              // Check if payment is successful
              if (response.razorpay_payment_id) {
                // Verify the payment
                const verificationResponse = await axios.post(
                  `${URL}/payment/paymentVerification`,
                  {
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_order_id: response.razorpay_order_id,
                    razorpay_signature: response.razorpay_signature,
                  }
                );

                if (verificationResponse.data.success) {
                  // Payment verified successfully, now create the transfer
                  const transferResponse = await axios.post(
                    `${URL}/payment/createTransfer`,
                    {
                      amount: props.userinvestone * 0.95,
                      paymentId: response.razorpay_payment_id,
                      recipientAccountId: "acc_NzJ7ixN968wfiB", // Replace with recipient's account ID
                      notes: {
                        name: user.name,
                        propertyName: user.property,
                      },
                    }
                  );

                  console.log("Transfer created:", transferResponse.data);
                  window.location.href = `/success?name=${encodeURIComponent(
                    user.name
                  )}&propertyName=${encodeURIComponent(user.property)}`;
                } else {
                  // Payment verification failed
                  console.error("Payment verification failed");
                  window.location.href = "/failed"; // Redirect or handle verification failure
                }
              } else {
                // Payment failed or was cancelled
                console.error("Payment failed or cancelled:", response.error);
                window.location.href = "/failed"; // Redirect or handle payment failure
              }
            } catch (error) {
              console.error("Error handling payment:", error);
              window.location.href = "/failed"; // Redirect or handle error
            }
          },
        };

        const rzp1 = new Razorpay(options);
        rzp1.open();
      }
    } catch (error) {
      console.error("Error handling payment:", error);
      // Provide user feedback or redirect
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
              className="first-checkbox"
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
                  fontSize: "12px",
                }}
              >
                I have read and agree to the e sign disclosure
              </Typography>
            </div>
            <div
              className="first-checkbox"
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
                  fontSize: "12px",
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
