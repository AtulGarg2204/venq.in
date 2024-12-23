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
const Allinterests = () => {
	const [rows,setRows]=useState([]);
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
	useEffect(function () {
		function getCruds() {
			try {
				let arr=JSON.parse(localStorage.getItem("interestusers"));
				arr.map((elem)=>{
					rows.push(createData(elem.name,elem.contactnumber,elem.email,elem.amount,<Button onClick={()=>{
						navigate(`/dashboard/properties/view/${elem.property}`)
					}} sx={{
						backgroundColor:'blue',
						color:'white'
					}}>View Property</Button>));
				});
				setCruds(rows);
			} catch (error) {
				console.log("error", error);
			}
		}
		getCruds();
	}, []);
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

export default Allinterests