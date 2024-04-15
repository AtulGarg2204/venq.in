// import {
//   Button,
//   Card,
//   CardActionArea,
//   CardContent,
//   CardMedia,
//   Grid,
//   Typography,
//   TextField,
//   Divider,
//   styled,
//   useMediaQuery,
// } from "@mui/material";
// import FormGroup from "@mui/material/FormGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Box from "@mui/material/Box";
// import React, { useState, useEffect } from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Link, useNavigate } from "react-router-dom";
// import config from "../../config";
// import axios from "axios";

// // import { Box, Button, Typography, styled } from '@mui/material'
// import { ThemeProvider, Tooltip, createTheme } from "@mui/material";
// import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
// import RemoveIcon from "@mui/icons-material/Remove";
// // import {useNavigate} from 'react-router-dom'
// // import React, { useEffect, useState } from 'react'
// // import { Link } from 'react-router-dom'
// import AddIcon from "@mui/icons-material/Add";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import { width } from "@mui/system";
// const URL = config.URL;
// const Amount = styled(Typography)`
//   font-weight: 600;
//   font-family: "Gilroy-Bold";
//   font-size: 20px;
// `;
// const TermDetails = styled(Box)`
//   margin-top: 10px;
//   margin-bottom: 10px;
//   background-color: white;
//   width: 400px;
//   height: 300px;
//   overflow-y: scroll;
// `;
// const PaymentButton = styled(Button)`
//   font-family: "Inter";
//   border: 2px solid #0170dc;
//   color: white;
//   background-color: #0170dc;
//   border-radius: 10px;
//   margin-top: 10px;
//   width: 100%;
//   text-decoration: none;
//   &:hover {
//     background-color: #0170dc;
//   }
// `;
// const handlePayment = () => {
//   console.log("clicked");
//   axios
//     .post(`${URL}/phonepe/payment`)
//     .then((response) => {
//       console.log(response.data);
//       window.location.href = response.data.url;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
// const Terms = () => {
//   return (
//     <>
//       <Box>
//         <Amount
//           style={{
//             color: "black",
//             fontSize: "26px",
//             marginTop: "10px",
//             marginLeft: "20px",
//             alignItems: "center",
//             direction: "flex",
//             justifyContent: "center",
//           }}
//         >
//           Terms
//         </Amount>
//         <div
//           className="termcontainer"
//           style={{
//             backgroundColor: "white",
//             marginRight: "150px",
//             width: "400px",
//             padding: "15px",
//             borderRadius: "10px",
//             height: "440px",
//           }}
//         >
//           <TermDetails>
//             <Typography
//               variant="p"
//               style={{
//                 fontFamily: "Inter",
//                 justifyContent: "space-between",
//                 display: "flex",
//                 // marginTop:'5px',
//                 // marginBottom:'5px',
//                 color: "gray",
//                 alignItems: "center",
//               }}
//             >
//               I understand that VENQ will receive a cash and securities
//               commission as further detailed in the offering documens
//             </Typography>
//             <Divider sx={{ my: 1 }} style={{ height: "2px", width: "100%" }} />
//             <Typography
//               variant="p"
//               style={{
//                 fontFamily: "Inter",
//                 justifyContent: "space-between",
//                 display: "flex",
//                 // marginTop:'5px',
//                 // marginBottom:'5px',
//                 color: "gray",
//                 alignItems: "center",
//               }}
//             >
//               I understand I will have voting rights just for selling of my own
//               share or selling the property after the holding period is over and
//               will grant a third-party nominee broad authority to act on my
//               behalf.
//             </Typography>
//             <Divider sx={{ my: 1 }} style={{ height: "2px", width: "100%" }} />
//             <Typography
//               variant="p"
//               style={{
//                 fontFamily: "Inter",
//                 justifyContent: "space-between",
//                 display: "flex",
//                 // marginTop:'5px',
//                 // marginBottom:'5px',
//                 color: "gray",
//                 alignItems: "center",
//               }}
//             >
//               I understand I will become a beneficial owner of equity interest
//               in the Company.
//             </Typography>
//             <Divider sx={{ my: 1 }} style={{ height: "2px", width: "100%" }} />
//             <Typography
//               variant="p"
//               style={{
//                 fontFamily: "Inter",
//                 justifyContent: "space-between",
//                 display: "flex",
//                 // marginTop:'5px',
//                 // marginBottom:'5px',
//                 color: "gray",
//                 alignItems: "center",
//               }}
//             >
//               I understand that investing this amount into several deals would
//               better diversify my risk
//             </Typography>
//             <Divider sx={{ my: 1 }} style={{ height: "2px", width: "100%" }} />
//             <Typography
//               variant="p"
//               style={{
//                 fontFamily: "Inter",
//                 justifyContent: "space-between",
//                 display: "flex",
//                 // marginTop:'5px',
//                 // marginBottom:'5px',
//                 color: "gray",
//                 alignItems: "center",
//               }}
//             >
//               I understand that there is no guarantee of a relationship between
//               VENQ and the Developer post-offering
//             </Typography>
//             <Divider sx={{ my: 1 }} style={{ height: "2px", width: "100%" }} />
//             <Typography
//               variant="p"
//               style={{
//                 fontFamily: "Inter",
//                 justifyContent: "space-between",
//                 display: "flex",
//                 // marginTop:'5px',
//                 // marginBottom:'5px',
//                 color: "gray",
//                 alignItems: "center",
//               }}
//             >
//               I consent to electronic delivery of all documents, notices and
//               agreements as related to my investment
//             </Typography>
//             <Divider sx={{ my: 1 }} style={{ height: "2px", width: "100%" }} />
//             <Typography
//               variant="p"
//               style={{
//                 fontFamily: "Inter",
//                 justifyContent: "space-between",
//                 display: "flex",
//                 // marginTop:'5px',
//                 // marginBottom:'5px',
//                 color: "gray",
//                 alignItems: "center",
//               }}
//             >
//               I understand my investment won't be transferable for next 2 months
//               and may not have a market for resale
//             </Typography>
//             <Divider sx={{ my: 1 }} style={{ height: "2px", width: "100%" }} />
//             <Typography
//               variant="p"
//               style={{
//                 fontFamily: "Inter",
//                 justifyContent: "space-between",
//                 display: "flex",
//                 // marginTop:'5px',
//                 // marginBottom:'5px',
//                 color: "gray",
//                 alignItems: "center",
//               }}
//             >
//               I have read the educational materials and agree to the Terms of
//               Service, including arbitration provisions
//             </Typography>
//             <Divider sx={{ my: 1 }} style={{ height: "2px", width: "100%" }} />
//             <Typography
//               variant="p"
//               style={{
//                 fontFamily: "Inter",
//                 justifyContent: "space-between",
//                 display: "flex",
//                 // marginTop:'5px',
//                 // marginBottom:'5px',
//                 color: "gray",
//                 alignItems: "center",
//               }}
//             >
//               I understand this investment is risky and that I shouldn't invest
//               unless I can afford to lose all invested funds
//             </Typography>
//             <Divider sx={{ my: 1 }} style={{ height: "2px", width: "100%" }} />
//             <Typography
//               variant="p"
//               style={{
//                 fontFamily: "Inter",
//                 justifyContent: "space-between",
//                 display: "flex",
//                 // marginTop:'5px',
//                 marginBottom: "5px",
//                 color: "gray",
//                 alignItems: "center",
//               }}
//             >
//               I understand I am responsible for all fees and charges associated
//               with the use of my payment method
//             </Typography>
//           </TermDetails>

//           <div
//             style={{
//               display: "flex",
//             }}
//           >
//             <Checkbox />
//             <Typography
//               sx={{
//                 fontFamily: "Gilroy-Medium",
//                 alignItems: "center",
//                 marginTop: "12px",
//                 color: "black",
//                 fontSize: "14px",
//               }}
//             >
//               I have read and agree to the e sign disclosure
//             </Typography>
//           </div>
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//             }}
//           >
//             <Checkbox />
//             <Typography
//               sx={{
//                 fontFamily: "Gilroy-Medium",
//                 alignItems: "center",
//                 color: "black",
//                 fontSize: "14px",
//               }}
//             >
//               I have read and accept the terms of the agreement
//             </Typography>
//           </div>

//           {/* <FormControlLabel sx={{
// fontFamily:'Gilroy-Medium'
// }} required control={<Checkbox />} label="I have read and agree to the e sign disclosure" /> */}

//           <Box>
//             <PaymentButton onClick={handlePayment}>
//               Proceed to payment
//             </PaymentButton>
//           </Box>
//         </div>

//         {/* <FormControlLabel control={<Checkbox defaultChecked />} label="Label" /> */}

//         {/* <Divider sx={{ my: 1 }} style={{ height: "2px", width: "100%" }} />
// <Typography
// variant="p"
// style={{
// fontFamily: "Inter",
// justifyContent: "space-between",
// display: "flex",
// // marginTop:'5px',
// // marginBottom:'5px',
// color:'gray',
// alignItems:"center",
// }}
// >
// I understand that VENQ will receive a cash and securities commission as further detailed in the offering documens
// </Typography>
// <Divider sx={{ my: 1 }} style={{ height: "2px", width: "100%" }} /> */}

//         {/* <button onClick={()=>{
// navigate('/dashboard/profile');
// }}>verify my identity</button>          */}
//       </Box>
//     </>
//   );
// };

// export default Terms;

import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  TextField,
  Divider,
  styled,
  useMediaQuery,
} from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link, useNavigate } from "react-router-dom";
import config from "../../config";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

// import { Box, Button, Typography, styled } from '@mui/material'
import { ThemeProvider, Tooltip, createTheme } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RemoveIcon from "@mui/icons-material/Remove";
// import {useNavigate} from 'react-router-dom'
// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import AddIcon from "@mui/icons-material/Add";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { width } from "@mui/system";
// import succesImg from '../../images/success.png'
const URL = config.URL;
const Amount = styled(Typography)`
  font-weight: 600;
  font-family: "Gilroy-Bold";
  font-size: 20px;
`;
const TermDetails = styled(Box)`
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: white;
  width: 400px;
  height: 240px;
  overflow-y: scroll;
`;
const PaymentButton = styled(Button)`
  font-family: "Inter";
  border: 2px solid #0170dc;
  color: white;
  background-color: #0170dc;
  border-radius: 10px;
  margin-top: 10px;
  width: 100%;
  text-decoration: none;
  &:hover {
    background-color: #0170dc;
  }
`;
// const handlePayment = () => {
//   toast.success("payment verified successfully");
//   console.log("clicked");
//   setOpenTerms(false)

//   // axios
//   //   .post(`${URL}/phonepe/payment`)
//   //   .then((response) => {
//   //     console.log(response.data);
//   //     // window.location.href = response.data.url;
//   //   })
//   //   .catch((error) => {
//   //     console.log(error);
//   //   });
// };

const Terms = (props) => {
  const [openTerms, setOpenTerms] = useState(true);
  const navigate = useNavigate();

  const handlePayment = () => {
    console.log("clicked");
    setOpenTerms(false); // Now it's correctly defined within the component
    const timer = setTimeout(() => {
      navigate("/dashboard/portfolio");
    }, 5000); // 5000 milliseconds = 5 seconds

    // Cleanup function to clear the timeout if the component unmounts before the timeout completes
    return () => clearTimeout(timer);
    // Your axios call or other logic here
  };
  console.log(props.userinvestone, "props");
  return (
    <>
      {openTerms ? (
        <Box>
          <Amount
            style={{
              color: "black",
              fontSize: "26px",
              marginTop: "10px",
              marginLeft: "20px",
              alignItems: "center",
              direction: "flex",
              justifyContent: "center",
            }}
          >
            Terms
          </Amount>
          <div
            className="termcontainer"
            style={{
              marginRight: "150px",
              width: "400px",
              padding: "15px",
              borderRadius: "10px",
              height: "440px",
            }}
          >
            <TermDetails>
              <Typography
                variant="p"
                style={{
                  fontFamily: "Inter",
                  justifyContent: "space-between",
                  display: "flex",
                  // marginTop:'5px',
                  // marginBottom:'5px',
                  fontSize: "12px",
                  color: "gray",
                  alignItems: "center",
                }}
              >
                I understand that VENQ will receive a cash and securities
                commission as further detailed in the offering documents.
              </Typography>
              <Divider
                sx={{ my: 1 }}
                style={{ height: "2px", width: "100%" }}
              />
              <Typography
                variant="p"
                style={{
                  fontFamily: "Inter",
                  justifyContent: "space-between",
                  display: "flex",
                  fontSize: "12px",
                  // marginTop:'5px',
                  // marginBottom:'5px',
                  color: "gray",
                  alignItems: "center",
                }}
              >
                I understand I will have voting rights just for selling of my
                own share or selling the property after the holding period is
                over and will grant a third-party nominee broad authority to act
                on my behalf.
              </Typography>
              <Divider
                sx={{ my: 1 }}
                style={{ height: "2px", width: "100%" }}
              />
              <Typography
                variant="p"
                style={{
                  fontFamily: "Inter",
                  justifyContent: "space-between",
                  display: "flex",
                  // marginTop:'5px',
                  // marginBottom:'5px',
                  fontSize: "12px",
                  color: "gray",
                  alignItems: "center",
                }}
              >
                I understand I will become a beneficial owner of equity interest
                in the Company.
              </Typography>
              <Divider
                sx={{ my: 1 }}
                style={{ height: "2px", width: "100%" }}
              />
              <Typography
                variant="p"
                style={{
                  fontFamily: "Inter",
                  justifyContent: "space-between",
                  display: "flex",
                  // marginTop:'5px',
                  // marginBottom:'5px',
                  color: "gray",
                  fontSize: "12px",
                  alignItems: "center",
                }}
              >
                I understand that investing this amount into several deals would
                better diversify my risk
              </Typography>
              <Divider
                sx={{ my: 1 }}
                style={{ height: "2px", width: "100%" }}
              />
              <Typography
                variant="p"
                style={{
                  fontFamily: "Inter",
                  justifyContent: "space-between",
                  display: "flex",
                  // marginTop:'5px',
                  // marginBottom:'5px',
                  color: "gray",
                  fontSize: "12px",
                  alignItems: "center",
                }}
              >
                I understand that there is no guarantee of a relationship
                between VENQ and the Developer post-offering
              </Typography>
              <Divider
                sx={{ my: 1 }}
                style={{ height: "2px", width: "100%" }}
              />
              <Typography
                variant="p"
                style={{
                  fontFamily: "Inter",
                  justifyContent: "space-between",
                  display: "flex",
                  // marginTop:'5px',
                  // marginBottom:'5px',
                  color: "gray",
                  alignItems: "center",
                  fontSize: "12px",
                }}
              >
                I consent to electronic delivery of all documents, notices and
                agreements as related to my investment
              </Typography>
              <Divider
                sx={{ my: 1 }}
                style={{ height: "2px", width: "100%" }}
              />
              <Typography
                variant="p"
                style={{
                  fontFamily: "Inter",
                  justifyContent: "space-between",
                  display: "flex",
                  // marginTop:'5px',
                  // marginBottom:'5px',
                  color: "gray",
                  alignItems: "center",
                  fontSize: "12px",
                }}
              >
                I understand my investment won't be transferable for next 2
                months and may not have a market for resale
              </Typography>
              <Divider
                sx={{ my: 1 }}
                style={{ height: "2px", width: "100%" }}
              />
              <Typography
                variant="p"
                style={{
                  fontFamily: "Inter",
                  justifyContent: "space-between",
                  display: "flex",
                  // marginTop:'5px',
                  // marginBottom:'5px',
                  color: "gray",
                  alignItems: "center",
                  fontSize: "12px",
                }}
              >
                I have read the educational materials and agree to the Terms of
                Service, including arbitration provisions
              </Typography>
              <Divider
                sx={{ my: 1 }}
                style={{ height: "2px", width: "100%" }}
              />
              <Typography
                variant="p"
                style={{
                  fontFamily: "Inter",
                  justifyContent: "space-between",
                  display: "flex",
                  // marginTop:'5px',
                  // marginBottom:'5px',
                  color: "gray",
                  alignItems: "center",
                  fontSize: "12px",
                }}
              >
                I understand this investment is risky and that I shouldn't
                invest unless I can afford to lose all invested funds
              </Typography>
              <Divider
                sx={{ my: 1 }}
                style={{ height: "2px", width: "100%" }}
              />
              <Typography
                variant="p"
                style={{
                  fontFamily: "Inter",
                  justifyContent: "space-between",
                  display: "flex",
                  // marginTop:'5px',
                  marginBottom: "5px",
                  color: "gray",
                  alignItems: "center",
                  fontSize: "12px",
                }}
              >
                I understand I am responsible for all fees and charges
                associated with the use of my payment method
              </Typography>
            </TermDetails>

            <div
              style={{
                display: "flex",
              }}
            >
              <Checkbox />
              <Typography
                sx={{
                  fontFamily: "Gilroy-Medium",
                  alignItems: "center",
                  marginTop: "12px",
                  color: "black",
                  fontSize: "14px",
                }}
              >
                I have read and agree to the e sign disclosure
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Checkbox />
              <Typography
                sx={{
                  fontFamily: "Gilroy-Medium",
                  alignItems: "center",
                  color: "black",
                  fontSize: "14px",
                }}
              >
                I have read and accept the terms of the agreement
              </Typography>
            </div>

            {/* <FormControlLabel sx={{
fontFamily:'Gilroy-Medium'
}} required control={<Checkbox />} label="I have read and agree to the e sign disclosure" /> */}

            <Box>
              <PaymentButton onClick={handlePayment}>
                Proceed to payment
              </PaymentButton>
            </Box>
          </div>

          {/* <FormControlLabel control={<Checkbox defaultChecked />} label="Label" /> */}

          {/* <Divider sx={{ my: 1 }} style={{ height: "2px", width: "100%" }} />
<Typography
variant="p"
style={{
fontFamily: "Inter",
justifyContent: "space-between",
display: "flex",
// marginTop:'5px',
// marginBottom:'5px',
color:'gray',
alignItems:"center",
}}
>
I understand that VENQ will receive a cash and securities commission as further detailed in the offering documens
</Typography>
<Divider sx={{ my: 1 }} style={{ height: "2px", width: "100%" }} /> */}

          {/* <button onClick={()=>{
navigate('/dashboard/profile');
}}>verify my identity</button>          */}
        </Box>
      ) : (
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"} marginTop={"80px"}>
          <FontAwesomeIcon icon={faCheckCircle} color="green" size="8x" />
          <h2 style={{ color: "black" }}>Payment verified Successfully</h2>
        </Box>
      )}
    </>
  );
};

export default Terms;
