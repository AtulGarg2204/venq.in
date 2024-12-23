import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material';
import { Link, useNavigate, useParams } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import config from '../../../config';
const UserInterests = () => {
    const [listings, setListings] = useState([]);
	const [rows,setRows]=useState([]);
    const URL=config.URL;
	function createData(name, contactnumber, email, amount,view) {
		return {
		  name,
		  contactnumber,
		  email,
		  amount,
		  view
		};
	}
    const [cruds, setCruds] = useState([]);
	const navigate = useNavigate();
	useEffect(() => {
    axios
      .get(`${URL}/listing`)
      .then((response) => {
        console.log("Fetched data from server:", response.data);
        setListings(response.data);
      })
      .catch((error) => {
        console.error("Error fetching listings:", error);
      });

    function getCruds() {
      try {
        // Get data from localStorage
        let arr = JSON.parse(localStorage.getItem("interestusers"));
        
        // Log the retrieved array to check its value
        console.log("Retrieved data from localStorage:", arr);

        // Check if 'arr' is null or undefined before using map()
        if (arr && Array.isArray(arr)) {
          const tempRows = arr.map((elem) => 
            createData(
              elem.name,
              elem.contactnumber,
              elem.email,
              elem.amount,
              <Button 
                onClick={() => {
                  navigate(`/dashboard/properties/view/${elem.property}`);
                }} 
                sx={{ backgroundColor: 'blue', color: 'white' }}
              >
                View Property
              </Button>
            )
          );
          setCruds(tempRows);  // Set the rows
        } else {
          console.log("No valid data found in localStorage, setting cruds to empty array");
          setCruds([]);  // Set cruds as empty array if no data found
        }
      } catch (error) {
        console.log("Error parsing data from localStorage:", error);
        setCruds([]);  // Handle the case of invalid JSON parsing
      }
    }

    getCruds();
}, [navigate, URL]);

	// console.log(rows.length)


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Contact</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">View</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
			
          {cruds.map((row) => (
            <TableRow
              key={row.name}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.contactnumber}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.view}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UserInterests