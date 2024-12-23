import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
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

const UserInterests = () => {
  const { propertyid } = useParams();
  const [investments, setInvestments] = useState([]);
  const [displayType, setDisplayType] = useState("completed");
  const [completedInvestorsCount, setCompletedInvestorsCount] = useState(0);
  const [interestedInvestorsCount, setInterestedInvestorsCount] = useState(0);
  const [totalCompletedAmount, setTotalCompletedAmount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [completedData, setcompletedData] = useState([]);
  const [verificationStatus, setVerificationStatus] = useState({});
  const URL = config.URL;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInvestments = async () => {
      try {
        const response = await axios.get(`${URL}/investment`);

        const filteredInvestments = response.data.filter(
          (investment) => investment.property === propertyid
        );
        setInvestments(filteredInvestments);
        const responseCompleted = await axios.get(`${URL}/purchased/all/`);
        console.log(
          "purchased data retreive succefully",
          responseCompleted.data
        );
        const completedData = responseCompleted.data.filter(
          (investment) => investment.propertyName === propertyid
        );
        console.log("completedData", completedData);
        setcompletedData(completedData);
        const completedCount = completedData.length;
        const initialVerificationStatus = {};
        completedData.forEach((investment) => {
          initialVerificationStatus[investment._id] = false;
        });
        setVerificationStatus(initialVerificationStatus);
        const interestedCount = filteredInvestments.filter(
          (investment) => !investment.isCompleted
        ).length;
        const totalAmount = completedData.reduce((total, investment) => {
          return total + investment.amount;
        }, 0);

        setCompletedInvestorsCount(completedCount);
        setInterestedInvestorsCount(interestedCount);
        setTotalCompletedAmount(totalAmount);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchInvestments();
  }, [propertyid, URL]);

  const handleDisplayTypeChange = (type) => {
    setDisplayType(type);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredInvestments = investments.filter((investment) => {
    return displayType === "interested" && !investment.isCompleted;
  });

  const filteredResults = filteredInvestments.filter((investment) =>
    investment.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleViewDetails = (investment) => {
    navigate(`/investorDetails/${investment._id}`, { state: { investment } });
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", fontFamily: "Gilroy-Bold" }}>
        Investments for Property : {propertyid}
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "30px",
          marginTop: "30px",
        }}
      >
        <Paper
          elevation={3}
          style={{ padding: "10px", textAlign: "center", borderRadius: "5px" }}
        >
          <h3 style={{ fontFamily: "Gilroy-Bold" }}>Completed Investors</h3>
          <p style={{ fontSize: "20px" }}>{completedInvestorsCount}</p>
        </Paper>
        <Paper
          elevation={3}
          style={{ padding: "10px", textAlign: "center", borderRadius: "5px" }}
        >
          <h3 style={{ fontFamily: "Gilroy-Bold" }}>Interested Investors</h3>
          <p style={{ fontSize: "20px" }}>{interestedInvestorsCount}</p>
        </Paper>
        <Paper
          elevation={3}
          style={{ padding: "10px", textAlign: "center", borderRadius: "5px" }}
        >
          <h3 style={{ fontFamily: "Gilroy-Bold" }}>Apply for Allotment</h3>
          <p style={{ fontSize: "20px" }}>0</p>
        </Paper>
        <Paper
          elevation={3}
          style={{ padding: "10px", textAlign: "center", borderRadius: "5px" }}
        >
          <h3 style={{ fontFamily: "Gilroy-Bold" }}>Total Amount (Invested)</h3>
          <p style={{ fontSize: "20px" }}>₹ {totalCompletedAmount}</p>
        </Paper>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <Button
          variant={displayType === "completed" ? "contained" : "outlined"}
          onClick={() => handleDisplayTypeChange("completed")}
          style={{ marginRight: "10px" }}
        >
          Investors
        </Button>
        <Button
          variant={displayType === "interested" ? "contained" : "outlined"}
          onClick={() => handleDisplayTypeChange("interested")}
        >
          Interested Investors
        </Button>
      </div>
      <TextField
        label="Search by Name"
        variant="outlined"
        value={searchQuery}
        onChange={handleSearchChange}
        style={{ marginBottom: "20px", width: "100%" }}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }}>Name</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Contact</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Email</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>
                Property Name
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }}>
                Investment Amount
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayType === "interested" &&
              filteredResults.map((investment) => (
                <TableRow key={investment._id}>
                  <TableCell>{investment.name}</TableCell>
                  <TableCell>{investment.phone}</TableCell>
                  <TableCell>{investment.email}</TableCell>
                  <TableCell>{investment.property}</TableCell>
                  <TableCell>{investment.amount}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleViewDetails(investment)}
                    >
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            {displayType === "completed" &&
              completedData.map((investment) => (
                <TableRow key={investment._id}>
                  <TableCell>{investment.customerId.name}</TableCell>
                  <TableCell>{investment.customerId.phone}</TableCell>
                  <TableCell>{investment.customerId.email}</TableCell>
                  <TableCell>{investment.propertyName}</TableCell>
                  <TableCell>{investment.amount}</TableCell>
                  <TableCell>
                    {/* <Button
                      variant="contained"
                      color="primary"
                      disabled={!verificationStatus[investment._id]} // Disable the button if isVerified is false
                      onClick={() =>
                        handleSendMail(
                          investment.customerId.name,
                          investment.customerId.email,
                          investment.propertyName,
                          investment.amount,
                          investment.quantity
                        )
                      }
                    >
                      Send EOI
                    </Button> */}

                    <Button
                      variant="contained"
                      color="primary"
                      // onClick={() => handleViewDetails(investment)}
                      onClick={() =>
                        navigate("dashboard/kyc-details", {
                          state: {
                            email: investment.customerId.email,
                            property: investment.propertyName,
                            amount: investment.amount,
                            quantity: investment.quantity,
                            name: investment.customerId.name,
                            id: investment._id,
                          },
                        })
                      }
                    >
                      Show Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

// }

export default UserInterests;
