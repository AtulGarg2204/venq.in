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
const UserInterests = () => {
	let {propertyid}=useParams();
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
			console.log(propertyid);
			try {
				let arr=JSON.parse(localStorage.getItem("interestusers1")).filter((uint)=>{
					return uint.property==propertyid;
				})
				// console.log(arr);
				arr.map((elem)=>{
					rows.push(createData(elem.name,elem.contactnumber,elem.email,elem.amount,<Button onClick={()=>{
						navigate(`/dashboard/properties/view/${elem.property}`)
					}} sx={{
						backgroundColor:'#BEEDB2',
						color:'black',
						fontWeight:'bold',
						borderRadius:'999em',
						padding:'5px 30px;',
					}}>Invested</Button>));
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
            <TableCell sx={{
            fontFamily:'Work Sans',
            fontWeight:'bold'
        }}>Name</TableCell>
            <TableCell align="right" sx={{
            fontFamily:'Work Sans',
            fontWeight:'bold'
        }}>Contact</TableCell>
            <TableCell align="right" sx={{
            fontFamily:'Work Sans',
            fontWeight:'bold'
        }}>Email</TableCell>
            <TableCell align="right" sx={{
            fontFamily:'Work Sans',
            fontWeight:'bold'
        }}>Amount</TableCell>
            <TableCell align="right" sx={{
            fontFamily:'Work Sans',
            fontWeight:'bold'
        }}>View</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
			
          {cruds.map((row) => (
            <TableRow
              key={row.name}
            >
              <TableCell component="th" scope="row"  sx={{
            fontFamily:'Work Sans'
        }}>
                {row.name}
              </TableCell>
              <TableCell align="right"  sx={{
            fontFamily:'Work Sans'
        }}>{row.contactnumber}</TableCell>
              <TableCell align="right"  sx={{
            fontFamily:'Work Sans'
        }}>{row.email}</TableCell>
              <TableCell align="right"  sx={{
            fontFamily:'Work Sans'
        }}>{row.amount}</TableCell>
              <TableCell align="right"  sx={{
            fontFamily:'Work Sans'
        }}>{row.view}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UserInterests