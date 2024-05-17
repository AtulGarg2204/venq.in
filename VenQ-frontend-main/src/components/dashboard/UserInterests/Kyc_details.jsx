import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import config from "../../../config";
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
const Kyc_details = () => {
  const location = useLocation();
  const { email, id, property, amount, quantity, name } = location.state;
  const [verified, setVerified] = useState(false);
  const [userData, setUserData] = useState();
  const [showData, setShowData] = useState(false);
  const [Adharname, setAdharName] = useState(name);
  const URL = config.URL;
  const handleShowDetails = async () => {
    try {
      const response = await axios.get(`${URL}/kyc/${email}`);
      setUserData(response);
      setShowData(true);
      setAdharName(userData.data.data.full_name);
      console.log("user data adhar", userData);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSendEmail = () => {
    const requestBodyMail = {
      investorName: Adharname,
      investorEmail: email,
      propertyName: property,
      paymentAmount: amount,
      numberOfUnits: quantity,
    };
    axios
      .post(`${URL}/sendmail/`, requestBodyMail)
      .then((response) => {
        console.log(response.data, "responseeeee");
        if (!response.status === 201) {
          throw new Error("Network response was not ok");
        }
        console.log("Email sent successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };
  useEffect(() => {
    const checkVerification = async () => {
      try {
        const response = await axios.get(
          `${URL}/auth/user/checkverify/${email}`
        );
        if (response.data.isVerified === 2) {
          setVerified(true);
        } else {
          alert("User is not verified.");
        }
      } catch (err) {
        console.log("error in fetch verification", err);
      }
    };

    checkVerification();
  }, [email]);
  return !verified ? (
    <div>User not verified</div>
  ) : (
    <div>
      <p>Verified user</p>
      <Button
        variant="contained"
        color="primary"
        // onClick={() => handleViewDetails(investment)}
        onClick={() => handleShowDetails()}
      >
        Show Details
      </Button>
      {showData ? (
        <div>
          {" "}
          details fetch successfully
          <p>Aadhar number : {userData.data.data.aadhaar_number}</p>
          <p>Full name : {userData.data.data.full_name}</p>
          <Button onClick={handleSendEmail()}>SEND EOI</Button>
        </div>
      ) : (
        <div>Cant Fetch the verified details of user</div>
      )}
    </div>
  );
};

export default Kyc_details;
