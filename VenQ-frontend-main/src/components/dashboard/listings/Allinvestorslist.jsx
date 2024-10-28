import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import React, { useEffect, useState } from "react";
import config from "../../../config";

const Allinvestorslist = () => {
  const [investments, setInvestments] = useState([]);
  const [displayType, setDisplayType] = useState("completed");
  const [purchased, setPurchased] = useState([]);
  const [checkboxes, setCheckboxes] = useState({});
  const URL = config.URL;

  useEffect(() => {
    // Fetch all investments
    axios
      .get(`${URL}/investment`)
      .then((response) => {
        setInvestments(response.data);
      })
      .catch((error) => {
        console.error("Error fetching investments:", error);
      });

    // Fetch purchased investments with initial checkbox states
    axios
      .get(`${URL}/purchased/all/`)
      .then((response) => {
        const purchasedData = response.data;
        setPurchased(purchasedData);

        // Initialize checkbox state based on the purchased data
        const initialCheckboxes = {};
        purchasedData.forEach((investor) => {
          initialCheckboxes[investor._id] = {
            esign1: investor.surepassStatus === "Completed",
            esign2: investor.surepassProsStatus === "Completed",
          };
        });
        setCheckboxes(initialCheckboxes);
      })
      .catch((error) => {
        console.error("Error fetching purchased data:", error);
      });
  }, [URL]);

  const handleDisplayTypeChange = (type) => {
    setDisplayType(type);
  };

  const handleCheckboxChange = (id, esignType) => {
    const currentStatus = checkboxes[id]?.[esignType];
    const newStatus = !currentStatus;

    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [id]: {
        ...prevCheckboxes[id],
        [esignType]: newStatus,
      },
    }));

    updateCheckboxStatus(id, esignType, newStatus);
  };

  const updateCheckboxStatus = (id, esignType, newStatus) => {
    const statusField = esignType === "esign1" ? "surepassStatus" : "surepassProsStatus";
    const updatedStatus = newStatus ? "Completed" : "Not Completed";

    axios
      .put(`${URL}/purchased/update-status`, { id, statusType: statusField, status: updatedStatus })
      .then((response) => {
        console.log("Purchase status updated:", response.data);
      })
      .catch((error) => {
        console.error("Error updating purchase status:", error);
      });
  };

  const renderCompletedRows = () => {
    return (
      <TableBody>
        {purchased.map((investor) => (
          <TableRow key={investor._id}>
            <TableCell>{investor.customerId.name}</TableCell>
            <TableCell>{investor.customerId.phone}</TableCell>
            <TableCell>{investor.customerId.email}</TableCell>
            <TableCell>
              <input
                type="checkbox"
                checked={checkboxes[investor._id]?.esign1 || false}
                onChange={() => handleCheckboxChange(investor._id, "esign1")}
              />
            </TableCell>
            <TableCell>
              <input
                type="checkbox"
                checked={checkboxes[investor._id]?.esign2 || false}
                onChange={() => handleCheckboxChange(investor._id, "esign2")}
              />
            </TableCell>
            <TableCell>{investor.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    );
  };

  const renderInterestedRows = () => {
    return (
      <TableBody>
        {investments
          .filter((investor) => !investor.isCompleted)
          .map((investor) => (
            <TableRow key={investor._id}>
              <TableCell>{investor.name}</TableCell>
              <TableCell>{investor.phone}</TableCell>
              <TableCell>{investor.email}</TableCell>
              <TableCell>
                <input
                  type="checkbox"
                  checked={checkboxes[investor._id]?.esign1 || false}
                  onChange={() => handleCheckboxChange(investor._id, "esign1")}
                />
              </TableCell>
              <TableCell>
                <input
                  type="checkbox"
                  checked={checkboxes[investor._id]?.esign2 || false}
                  onChange={() => handleCheckboxChange(investor._id, "esign2")}
                />
              </TableCell>
              <TableCell>{investor.amount}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    );
  };

  return (
    <div style={{ maxWidth: "100%", overflowX: "auto" }}>
      <h1 style={{ textAlign: "center", fontFamily: "Gilroy-Bold" }}>Investors Data</h1>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        <button
          onClick={() => handleDisplayTypeChange("completed")}
          style={{
            marginRight: "10px",
            padding: "8px 16px",
            fontFamily: "Work Sans",
            fontWeight: displayType === "completed" ? "bold" : "normal",
          }}
        >
          Completed Investors
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
            <TableCell style={{ fontWeight: "bold" }}>Esign 1</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Esign 2</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Investment Amount</TableCell>
          </TableRow>
        </TableHead>
        {displayType === "completed" ? renderCompletedRows() : renderInterestedRows()}
      </Table>
    </div>
  );
};

export default Allinvestorslist;
