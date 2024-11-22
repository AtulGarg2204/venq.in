import React, { useEffect, useState } from "react";
import { Button, styled, Box } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import config from "../../../config";
import Popup from "reactjs-popup";

const StyledPopup = styled(Popup)`
  &-overlay {
    height: 50%;
    width: 30%;
    margin-left: 43%;
    margin-top: 15%;
    background-color: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(5px);
    border: 2px solid black;
    border-radius: 10px;

    @media (max-width: 600px) {
      width: 80%;
      margin-left: 10%;
      margin-top: 25%;
    }
  }

  &-content {
    color: white;
  }
`;

const PropertyInterests = () => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const URL = config.URL;
  const [rows, setRows] = useState([]);
  const [varr, setVarr] = useState([]);
  const [listings, setListings] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [count, setCount] = useState(0);
  const [sp, setSp] = useState("");
  const [currStatus, setCurrStatus] = useState(0);
  const [propertyName, setPropertyName] = useState("");

  const changelistingstatus = (lid, ns) => {
    axios
      .patch(`${URL}/listing/${lid}`, { status: ns })
      .then((response) => {
        console.log(response);
        console.log("Status change successful");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        console.log("Failed status change");
      });
  };

  function createData(name, contactNumber, email, amount, view) {
    return { name, contactNumber, email, amount, view };
  }

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${URL}/listing`)
      .then((response) => {
        console.log(response.data);
        setListings(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    try {
      let arr = JSON.parse(localStorage.getItem("interestusers1")) || [];
      setVarr(arr);
      console.log(arr);

      arr.forEach((elem) => {
        rows.push(
          createData(
            elem.contactnumber,
            elem.email,
            elem.amount,
            <Button
              onClick={() => {
                navigate(`/dashboard/properties/view/${elem.property}`);
              }}
              sx={{ backgroundColor: "blue", color: "white" }}
            >
              View Property
            </Button>
          )
        );
      });
      setRows(rows); // Update rows state after pushing elements
    } catch (error) {
      console.log("Error parsing interestusers1 from localStorage:", error);
    }
  }, []);

  return (
    <TableContainer
      component={Paper}
      sx={{ marginTop: "18%" }}
    >
      <StyledPopup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="modal">
          <a
            className="close"
            onClick={closeModal}
            style={{ cursor: "pointer" }}
          >
            &times;
          </a>
          <p style={{ color: "black" }}>
            {currStatus === 1
              ? "Live"
              : currStatus === 2
              ? "Show interest"
              : "Not live"}{" "}
            Property
          </p>
          {currStatus === 1 && (
            <>
              <button onClick={() => changelistingstatus(sp, 2)}>
                Make it for interest
              </button>
              <button onClick={() => changelistingstatus(sp, 0)}>
                Make it unlive
              </button>
            </>
          )}
          {currStatus === 2 && (
            <>
              <button onClick={() => changelistingstatus(sp, 1)}>
                Make it live
              </button>
              <button onClick={() => changelistingstatus(sp, 0)}>
                Make it unlive
              </button>
            </>
          )}
          {currStatus === 0 && (
            <>
              <button onClick={() => changelistingstatus(sp, 2)}>
                Make it for interest
              </button>
              <button onClick={() => changelistingstatus(sp, 1)}>
                Make it live
              </button>
            </>
          )}
          <p style={{ color: "black" }}>
            Number of investors: {count}
          </p>
          <p style={{ color: "black" }}>
            Total amount invested: {totalAmount}
          </p>
          <button onClick={() => navigate(`userinterests/${propertyName}`)}>
            View more details
          </button>
        </div>
      </StyledPopup>

      <Table sx={{ minWidth: 650, fontFamily: "Work Sans" }} aria-label="simple table">
        <TableHead sx={{ fontFamily: "Work Sans" }}>
          <TableRow>
            <TableCell sx={{ fontFamily: "Work Sans", fontWeight: "bold" }}>
              Property Name
            </TableCell>
            <TableCell sx={{ fontFamily: "Work Sans", fontWeight: "bold" }}>
              Appreciation
            </TableCell>
            <TableCell align="left" sx={{ fontFamily: "Work Sans", fontWeight: "bold" }}>
              Ticker Code
            </TableCell>
            <TableCell align="left" sx={{ fontFamily: "Work Sans", fontWeight: "bold" }}>
              Listing Date
            </TableCell>
            <TableCell align="left" sx={{ fontFamily: "Work Sans", fontWeight: "bold" }}>
              List Price
            </TableCell>
            <TableCell align="left" sx={{ fontFamily: "Work Sans", fontWeight: "bold" }}>
              Status
            </TableCell>
            <TableCell align="center" sx={{ fontFamily: "Work Sans", fontWeight: "bold" }}>
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listings.map((listing, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row" sx={{ fontFamily: "Work Sans" }}>
                {listing.properyheading}
              </TableCell>
              <TableCell component="th" scope="row" sx={{ fontFamily: "Work Sans" }}>
                {listing.appreciation || "NA"}
              </TableCell>
              <TableCell align="left" sx={{ fontFamily: "Work Sans" }}>
                <p>hello</p>
              </TableCell>
              <TableCell align="left" sx={{ fontFamily: "Work Sans" }}>
                <p>hello</p>
              </TableCell>
              <TableCell align="left" sx={{ fontFamily: "Work Sans" }}>
                <p>₹ {listing.propertyprice}</p>
              </TableCell>
              <TableCell align="left" sx={{ fontFamily: "Work Sans" }}>
                <p>hello</p>
              </TableCell>
              <TableCell align="right">
                <button
                  style={{
                    backgroundColor: "#BEEDB2",
                    color: "black",
                    fontWeight: "bold",
                    borderRadius: "999em",
                    padding: "10px 30px",
                  }}
                  onClick={() => {
                    console.log(varr);
                    let cnt = 0,
                      total = 0;
                    varr.forEach((elem) => {
                      if (elem.property === listing._id) {
                        cnt++;
                        total += elem.amount;
                      }
                    });
                    setCount(cnt);
                    setTotalAmount(total);
                    setSp(listing._id);
                    setCurrStatus(listing.islive);
                    setPropertyName(listing.properyheading);
                    setOpen(true);
                  }}
                >
                  Show Investment Details
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PropertyInterests;
