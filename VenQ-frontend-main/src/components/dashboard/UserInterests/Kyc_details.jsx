import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Toaster } from "react-hot-toast";
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
      console.log(response.data);
      setAdharName(response.data.data.full_name);
      setShowData(true);
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
        if (response.status !== 201) {
          throw new Error("Network response was not ok");
        }
        console.log("Email sent successfully:", response.data);
        toast.success("EOI send successfully");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        toast.error("EOI  not send");
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
      <Button variant="contained" color="primary" onClick={handleShowDetails}>
        Show Details
      </Button>
      {showData ? (
        <div>
          <p>Aadhar number: {userData.data.data.aadhaar_number}</p>
          <p>Full name: {userData.data.data.full_name}</p>
          <p>Gender: {userData.data.data.gender}</p>
          <p>Category: {userData.data.data.category}</p>
          <p>Date of birth: {userData.data.data.dob}</p>
          <p>Bank Name: {userData.data.data.bankName}</p>
          <p>Account number: {userData.data.data.ac_no}</p>
          <p>IFSC CODE: {userData.data.data.ifsc_code}</p>
          <p>PAN NUMBER: {userData.data.data.pan_number}</p>
          <p>Phone Number: {userData.data.data.phone}</p>
          <Button variant="contained" color="primary" onClick={handleSendEmail}>
            SEND EOI
          </Button>
        </div>
      ) : (
        <div>Can't Fetch the verified details of user</div>
      )}
    </div>
  );
};

export default Kyc_details;
