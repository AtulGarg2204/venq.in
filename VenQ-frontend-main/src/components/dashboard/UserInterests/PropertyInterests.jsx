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
  const [varr, setvarr] = useState([]);
  const map1 = new Map();
  const [listings, setListings] = useState([]);
  const [totalamount, settotalamount] = useState(0);
  const [count, setcount] = useState(0);
  const [sp, setsp] = useState("");
  const [currstatus, setcurrstatus] = useState(0);
  const [propertyName, setPropertyName] = useState("");

  const changelistingstatus = (lid, ns) => {
    axios
      .patch(`${URL}/listing/${lid}`, {
        status: ns,
      })
      .then((response) => {
        console.log(response);
        console.log("status change sucess");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        console.log("failed status change");
      });
  };
  function createData(name, contactnumber, email, amount, view) {
    return {
      count,
      totalamount,
      view,
    };
  }
  const [cruds, setCruds] = useState([]);
  const navigate = useNavigate();
  useEffect(function () {
    axios
      .get(`${URL}/listing`)
      .then((response) => {
        // console.log("Fetched data from server:", response.data);
        console.log(response.data);
        setListings(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    try {
      let arr = JSON.parse(localStorage.getItem("interestusers1"));
      setvarr(arr);
      console.log(arr);
      // console.log(arr);
      // arr.map((elem)=>{
      // 	rows.push(createData(elem.contactnumber,elem.email,elem.amount,<Button onClick={()=>{
      // 		navigate(/dashboard/properties/view/${elem.property})
      // 	}} sx={{
      // 		backgroundColor:'blue',
      // 		color:'white'
      // 	}}>View Property</Button>));
      // });
      setCruds(arr);
    } catch (error) {
      console.log("error", error);
    }
  }, []);
  // console.log(rows.length)

  return (
    <TableContainer
      component={Paper}
      sx={{
        marginTop: "18%",
      }}
    >
      <StyledPopup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="modal">
          <a
            className="close"
            onClick={closeModal}
            style={{
              cursor: "pointer",
            }}
          >
            &times;
          </a>
          <p
            style={{
              color: "black",
            }}
          >
            {currstatus == 1
              ? "Live"
              : currstatus == 2
              ? "Show interest"
              : "Not live"}{" "}
            Property
          </p>
          {currstatus == 1 && (
            <>
              <button
                onClick={() => {
                  changelistingstatus(sp, 2);
                }}
              >
                Make it for interest
              </button>
              <button
                onClick={() => {
                  changelistingstatus(sp, 0);
                }}
              >
                Make it unlive
              </button>
            </>
          )}
          {currstatus == 2 && (
            <>
              <button
                onClick={() => {
                  changelistingstatus(sp, 1);
                }}
              >
                Make it live
              </button>
              <button
                onClick={() => {
                  changelistingstatus(sp, 0);
                }}
              >
                Make it unlive
              </button>
            </>
          )}
          {currstatus == 0 && (
            <>
              <button
                onClick={() => {
                  changelistingstatus(sp, 2);
                }}
              >
                Make it for interest
              </button>
              <button
                onClick={() => {
                  changelistingstatus(sp, 1);
                }}
              >
                Make it live
              </button>
            </>
          )}
          <p
            style={{
              color: "black",
            }}
          >
            Number of investors : {count}
          </p>
          <p
            style={{
              color: "black",
            }}
          >
            Total amount invested : {totalamount}
          </p>
          <button
            onClick={() => {
              navigate(`userinterests/${propertyName}`);
            }}
          >
            View more details
          </button>
        </div>
      </StyledPopup>

      <Table
        sx={{ minWidth: 650, fontFamily: "Work Sans" }}
        aria-label="simple table"
      >
        <TableHead
          sx={{
            fontFamily: "Work Sans",
          }}
        >
          <TableRow>
            <TableCell
              sx={{
                fontFamily: "Work Sans",
                fontWeight: "bold",
              }}
            >
              Property Name
            </TableCell>
            <TableCell
              align="left"
              sx={{
                fontFamily: "Work Sans",
                fontWeight: "bold",
              }}
            >
              Ticker Code
            </TableCell>
            <TableCell
              align="left"
              sx={{
                fontFamily: "Work Sans",
                fontWeight: "bold",
              }}
            >
              Listing Date
            </TableCell>
            <TableCell
              align="left"
              sx={{
                fontFamily: "Work Sans",
                fontWeight: "bold",
              }}
            >
              List price
            </TableCell>
            <TableCell
              align="left"
              sx={{
                fontFamily: "Work Sans",
                fontWeight: "bold",
              }}
            >
              Status
            </TableCell>
            <TableCell
              align="center"
              sx={{
                fontFamily: "Work Sans",
                fontWeight: "bold",
              }}
            >
              Action
            </TableCell>

            {/* <TableCell align="right">Amount</TableCell>
            <TableCell align="right">View</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {listings.map((listing, index) => (
            <TableRow key={index}>
              <TableCell
                component="th"
                scope="row"
                sx={{
                  fontFamily: "Work Sans",
                }}
              >
                {listing.properyheading}
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                sx={{
                  fontFamily: "Work Sans",
                }}
              >
                <p>helllo</p>
              </TableCell>

              <TableCell
                component="th"
                scope="row"
                sx={{
                  fontFamily: "Work Sans",
                }}
              >
                <p>hello</p>
              </TableCell>

              <TableCell
                component="th"
                scope="row"
                sx={{
                  fontFamily: "Work Sans",
                }}
              >
                <p>₹ {listing.propertyprice}</p>
              </TableCell>

              <TableCell
                component="th"
                scope="row"
                sx={{
                  fontFamily: "Work Sans",
                }}
              >
                <p>helllo</p>
              </TableCell>
              <TableCell align="right">
                <button
                  style={{
                    backgroundColor: "#BEEDB2",
                    color: "black",
                    fontWeight: "bold",
                    borderRadius: "999em",
                    padding: "0px 30px;",
                  }}
                  onClick={() => {
                    console.log(varr);
                    let cnt = 0,
                      total = 0;
                    {
                      varr.map((elem) => {
                        console.log(elem);
                        if (elem.property == listing._id) {
                          cnt++;
                          total += elem.amount;
                        }
                      });
                    }
                    setcount(cnt);
                    settotalamount(total);
                    setsp(listing._id);
                    setcurrstatus(listing.islive);
                    setPropertyName(listing.properyheading);
                    setOpen((o) => !o);
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
