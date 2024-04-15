import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../../../config";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const Allinvestorslist = () => {
  const [investments, setInvestments] = useState([]);
  const [displayType, setDisplayType] = useState("completed");
  const URL = config.URL;

  useEffect(() => {
    axios
      .get(`${URL}/investment`)
      .then((response) => {
        console.log(response.data);
        setInvestments(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const completedInvestors = investments.filter(
    (investor) => investor.isCompleted
  );
  const interestedInvestors = investments.filter(
    (investor) => !investor.isCompleted
  );

  const handleDisplayTypeChange = (type) => {
    setDisplayType(type);
  };

  const renderInvestorRows = (investors) => {
    return (
      <TableBody>
        {investors.map((investor) => (
          <TableRow key={investor._id}>
            <TableCell>{investor.name}</TableCell>
            <TableCell>{investor.phone}</TableCell>
            <TableCell>{investor.email}</TableCell>
            <TableCell>{investor.property}</TableCell>
            <TableCell>{investor.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    );
  };

  return (
    <div style={{ maxWidth: "100%", overflowX: "auto" }}>
      <h1 style={{ textAlign: "center", fontFamily: "Gilroy-Bold" }}>
        Investors Data
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <button
          onClick={() => handleDisplayTypeChange("completed")}
          style={{
            marginRight: "10px",
            padding: "8px 16px",
            fontFamily: "Work Sans",
            fontWeight: displayType === "completed" ? "bold" : "normal",
          }}
        >
          Investors
        </button>
        <button
          onClick={() => handleDisplayTypeChange("interested")}
          style={{
            padding: "8px 16px",
            fontFamily: "Work Sans",
            fontWeight: displayType === "interested" ? "bold" : "normal",
          }}
        >
          Interested Investors
        </button>
      </div>
      <Table style={{ fontFamily: "Work Sans", minWidth: 300 }}>
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bold" }}>Name</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Contact</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Email</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Property Name</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>
              Investment Amount
            </TableCell>
          </TableRow>
        </TableHead>
        {displayType === "completed" && renderInvestorRows(completedInvestors)}
        {displayType === "interested" &&
          renderInvestorRows(interestedInvestors)}
      </Table>
    </div>
  );
};

export default Allinvestorslist;
