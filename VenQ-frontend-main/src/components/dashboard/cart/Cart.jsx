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

// import axios from "axios";
// import config from "../../../config";
// // import { Box, Button, Typography, styled } from '@mui/material'
// import { ThemeProvider, Tooltip, createTheme } from "@mui/material";
// import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
// import RemoveIcon from "@mui/icons-material/Remove";
// // import {useNavigate} from 'react-router-dom'
// // import React, { useEffect, useState } from 'react'
// // import { Link } from 'react-router-dom'
// import AddIcon from "@mui/icons-material/Add";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import Terms from "../../common/terms";
// // import CartItem from './CartItem';
// // import config from '../../../config';
// // import axios from 'axios';
// const AddMoreLink = styled(Link)`
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
//   border: 2px solid lightgrey;
//   padding: 10px;
//   border-radius: 10px;
//   width: 13%;
//   text-decoration: none;
//   &:hover {
//     border: 2px solid #0170dc;
//     background-color: #0170dc;
//     color: white;
//   }
// `;
// const AddMoreLinkSmall = styled(Link)`
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
//   border: 2px solid lightgrey;
//   border-radius: 10px;
//   width: 30%;
//   text-decoration: none;
//   &:hover {
//     border: 2px solid #0170dc;
//     background-color: #0170dc;
//     color: white;
//   }
// `;
// const EmptyCart = styled(Box)`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   height: 80vh;
// `;
// const PropertyButton = styled(Button)`
//   color: white;
//   background-color: #0170dc;
//   text-transform: none;
//   border-radius: 10px;
//   padding: 10px 20px;
//   font-size: 20px;
//   margin: 10px;
//   &:hover {
//     background-color: #0170dc;
//   }
// `;
// // const Items = styled(Box)`
// //   margin: 20px 0;
// // `
// // // const cartItems = []

// const PropertyDetails = styled(Box)`
//   display: flex;
//   background-color: white;
//   width: 150%;
//   border-radius: 10px;
//   height: 40vh;
// `;
// const PropertyDetailsSmall = styled(Box)`
//   display: flex;
//   background-color: white;
//   width: 150%;
//   border-radius: 10px;
//   height: 20vh;
// `;
// const PaymentDetails = styled(Box)`
//   background-color: white;
//   position: sticky;
//   top: 20px;
//   width: 400px;
//   height: 500px;
//   // overflow-y:auto;
//   border-radius: 10px;
//   padding: 15px;
// `;
// const PaymentDetailsSmall = styled(Box)`
//   background-color: white;
//   position: sticky;
//   top: 20px;
//   // width:400px;
//   height: 45%;
//   // overflow-y:auto;
//   border-radius: 10px;
//   padding: 15px;
// `;
// const TermDetails = styled(Box)`
//   margin-top: 10px;
//   margin-bottom: 10px;
//   background-color: white;
//   width: 400px;
//   height: 300px;
//   overflow-y: scroll;
// `;
// const TermDetailsSmall = styled(Box)`
//   margin-top: 10px;
//   margin-bottom: 10px;
//   background-color: white;
//   // width:400px;
//   height: 300px;
//   overflow-y: scroll;
// `;
// const RemoveButton = styled(Button)`
//   color: black;
//   text-transform: none;
//   border-radius: 10px;
//   padding: 10px 20px;
//   font-size: 14px;
//   margin: 10px 0;
//   display: flex;
//   justify-content: space-around;
//   border: 1px solid lightgrey;
//   &:hover {
//     border: 1px solid red;
//     background-color: red;
//     color: white;
//   }
// `;
// const Decrease = styled(RemoveIcon)`
//   color: #0170dc;
//   border: 1px solid lightgrey;
//   padding: 10px;
//   border-radius: 10px;
//   font-size: 40px;
//   &:hover {
//     background-color: rgb(112, 111, 111);
//     color: white;
//   }
// `;
// const Increase = styled(AddIcon)`
//   color: #0170dc;
//   border: 1px solid lightgrey;
//   padding: 10px;
//   border-radius: 10px;
//   font-size: 40px;
//   &:hover {
//     background-color: rgb(112, 111, 111);
//     color: white;
//   }
// `;
// const AmountField = styled("input")`
//   outline: none;
//   font-family: "Gilroy-Bold";
//   font-weight: 600;
//   width: 30%;
//   align-items: center;
//   border-radius: 10px;
//   border: 1px solid lightgrey;
//   padding: 10px;
//   font-size: 16px;
// `;
// const Amount = styled(Typography)`
//   font-weight: 600;
//   font-family: "Gilroy-Bold";
//   font-size: 20px;
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

// const theme = createTheme({
//   components: {
//     MuiTooltip: {
//       styleOverrides: {
//         tooltip: {
//           fontSize: "14px",
//           fontFamily: "Inter",
//           backgroundColor: "black",
//           textAlign: "center",
//         },
//       },
//     },
//   },
// });

// const info = `The "Apply for Allotment" system is an alternative method allowing investors to secure shares in a property by paying 5% of the investment amount upfront, to know more click Apply for Allotment`;

// // const Cart = ({ handleBuyProperties }) => {

// //   const token = JSON.parse(localStorage.getItem("userinfo"));
// //   const [cartItems,setCartItems]=useState([]);
// //   const URL=config.URL;

// //   useEffect(() => {
// //     axios
// //       .get(`${URL}/investment/${token.email}`)
// //       .then((response) => {
// //         // console.log("Fetched data from server:", response.data);
// //         console.log(response.data);
// //         setCartItems(response.data);
// //       })
// //       .catch((error) => {
// //         console.error(error);
// //       });
// //   }, []);

// //   return (
// //     <div>
// //       <Box style={{ padding: '30px' }}>

// //         <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

// //           <Typography variant='h4' style={{ fontFamily: 'Inter', padding: '0 10px 10px 0px', fontWeight: 600 }}> this is my Cart {cartItems?.length === 0 ? '' : `(${cartItems.length})`}</Typography>

// //           {cartItems.length === 0 ?
// //             <Box></Box>
// //             :
// //             <AddMoreLink to='/dashboard/properties' onClick={handleBuyProperties}>
// //               <AddIcon />
// //               <Typography style={{ fontFamily: 'Inter', fontWeight: 600 }}>Add more</Typography>
// //             </AddMoreLink>
// //           }

// //         </Box>
// //         {
// //           cartItems?.length === 0 ?

// //             <EmptyCart>
// //               <Box style={{ border: '4px solid #cbe5ffb9', padding: '20px', borderRadius: '50%', margin: '20px' }}>
// //                 <ShoppingCartOutlinedIcon style={{ fontSize: '48px', color: '#0170dc' }} />
// //               </Box>
// //               <Typography variant='h4' style={{ fontWeight: '600', fontFamily: 'Inter', margin: '0 0 10px 0' }}>Your cart is empty</Typography>
// //               <Typography style={{ fontFamily: 'Inter', fontSize: '20px', margin: '10px' }}>Looks like you haven't added any properties in your cart</Typography>
// //               <PropertyButton onClick={handleBuyProperties}>View properties</PropertyButton>
// //             </EmptyCart>

// //             :
// //             <div>
// //               <h1>{cartItems[0].amount}</h1>
// //               {cartItems.map((elem)=>{
// //                 <div key={elem._id}>This is me</div>
// //               })}
// //               {cartItems.map((item)=>{
// //                <Grid key={item._id} container spacing={2}>

// //                  <Grid item xs={8}>

// //                    <PropertyDetails>

// //                      <Box style={{ display: 'flex', flexDirection: 'column', padding: '15px', justifyContent: 'space-between' }}>
// //                        <img src="/images/signup_page.jpg" alt="propertyImage" style={{ width: '150px', height: '130px', borderRadius: '10px' }} />

// //                        <RemoveButton>
// //                          <DeleteOutlineIcon />
// //                          Remove
// //                        </RemoveButton>
// //                      </Box>

// //                      <Box style={{ width: '40%', padding: '15px', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>

// //                        <Typography style={{ fontWeight: '600', fontSize: '16px' }}>Studio in Liberty House, DIFC</Typography>

// //                        <ThemeProvider theme={theme}>
// //                          <Box>
// //                            <Typography style={{ color: 'rgb(112,111,111)', fontSize: '14px', fontFamily: 'Inter', display: 'flex', alignItems: 'center' }}>
// //                              Monthly rent

// //                              <Tooltip title={info} placement="top">
// //                                <Typography style={{ border: '1px solid rgb(112,111,111)', color: 'rgb(112,111,111)', display: "inline", cursor: 'pointer', padding: '0px 6px', marginLeft: '5px', borderRadius: '50%', fontSize: '10px' }}>i</Typography>
// //                              </Tooltip>

// //                            </Typography>
// //                            <Typography style={{ fontWeight: '600', fontFamily: "Inter" }}>RUP {item.amount}</Typography>
// //                          </Box>
// //                        </ThemeProvider>

// //                        <ThemeProvider theme={theme}>
// //                          <Box>
// //                            <Typography style={{ color: 'rgb(112,111,111)', fontSize: '14px', fontFamily: 'Inter', display: 'flex', alignItems: 'center' }}>
// //                              Appreciation

// //                              <Tooltip title={info1} placement="top">
// //                                <Typography style={{ border: '1px solid rgb(112,111,111)', color: 'rgb(112,111,111)', display: "inline", cursor: 'pointer', padding: '0px 6px', marginLeft: '5px', borderRadius: '50%', fontSize: '10px' }}>i</Typography>
// //                              </Tooltip>

// //                            </Typography>
// //                            <Typography style={{ fontWeight: '600', fontFamily: "Inter" }}>RUP 161</Typography>
// //                          </Box>
// //                        </ThemeProvider>

// //                      </Box>

// //                      <Box style={{ display: 'flex', flexDirection: 'column', padding: '15px', justifyContent: 'space-evenly' }}>

// //                        <Box style={{ display: 'flex', alignItems: 'center' }}>
// //                          <Decrease onClick={() => decrease()} />
// //                          <AmountField
// //                            sx={{ m: 1, width: '20ch' }}
// //                            defaultValue='2000'
// //                            value={quantity}
// //                          />
// //                          <Increase onClick={() => increase()} />
// //                        </Box>

// //                        <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
// //                          <progress value={1500000} max={2000000} style={{ width: '40%' }} />
// //                          <Typography style={{ fontFamily: 'Inter', paddingLeft: '10px', fontWeight: 600 }}>75% funded</Typography>
// //                        </Box>

// //                      </Box>

// //                    </PropertyDetails>

// //                  </Grid>

// //                  <Grid item xs={4}>

// //                    <PaymentDetails>

// //                      <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0' }}>
// //                        <Amount>Total</Amount>
// //                        <Amount>RUP {quantity}</Amount>
// //                      </Box>

// //                      <Box>
// //                        <PaymentButton onClick={handlePayment}>Proceed to payment</PaymentButton>
// //                      </Box>

// //                    </PaymentDetails>

// //                  </Grid>

// //                </Grid>
// //               })}
// //             </div>

// //         }

// //       </Box>
// //     </div>
// //   )
// // }

// // export default Cart

// const Property = styled(Card)`
//   background-color: white;
//   border-radius: 10px;
//   &:hover {
//     transform: translateY(-10px);
//   }
// `;
// const Subheader = styled(Box)`
//   display: flex;
//   & div {
//     border: 1px solid lightgray;
//     padding: 4px 10px;
//     margin-right: 10px;
//     border-radius: 6px;
//   }
// `;
// const PriceBox = styled(Box)`
//   display: flex;
//   justify-content: space-between;
//   margin: 15px 0 10px 0;
//   align-items: center;
// `;
// const ReturnsBox = styled(Box)`
//   display: flex;
//   flex-direction: column;
//   padding: 10px;
//   border-radius: 10px;
//   background-color: #f6f7f9;
//   font-family: "Inter";
//   color: grey;
//   > div {
//     display: flex;
//     justify-content: space-between;
//     padding: 5px;
//     font-size: 15px;
//   }
// `;
// const Options = styled(Box)`
//   margin: 20px 10px 40px 0px;
//   background-color: white;
//   padding: 0 5x;
//   width: 100%;
//   border-radius: 10px;
//   display: flex;
// `;
// const OptionName = styled(Button)`
//   // border: 2px solid black;
//   padding: 10px 45px;
//   margin: 10px;
//   width: 150%;
//   border-radius: 10px;
//   background-color: ${(props) =>
//     props.active ? "#0170dc !important" : "white"};
//   color: ${(props) => (props.active ? "white !important" : "black")};
//   &:hover {
//     background-color: #0170dc;
//     color: white;
//     border: none;
//   }
//   &:focus {
//     background-color: #0170dc;
//     color: white;
//   }
// `;
// const Category = styled(Typography)`
//   position: absolute;
//   width: 100%;
//   text-align: center;
//   background-color: #0170dc;
//   color: white;
//   z-index: 2;
//   padding: 5px;
//   font-family: "Inter";
// `;
// const Header = styled(Typography)`
//   font-size: 20px;
//   font-weight: 600;
//   font-family: "Inter";
//   margin: 10px 0;
// `;

// const CartButton = styled(Button)`
//   /* background-color: #0170dc; */
//   color: white;
//   font-family: "Inter";
//   text-transform: none;
//   font-size: 14px;
//   padding: 7px;
//   border-radius: 10px;
//   &:hover {
//     background-color: #0170dc;
//     color: white;
//   }
// `;

// const Properties = () => {
//   //   const navigate=useNavigate();

//   const [activeButton, setActiveButton] = useState("available");
//   const handleButtonClick = (value) => {
//     setActiveButton(value);
//   };
//   const [quantity, setQuantity] = useState(0);

//   const [cartItems, setCartItems] = useState([]);
//   const [isAdmin, setAdmin] = useState(false);
//   const [currp, setcurrp] = useState("");
//   const [onbcomp, setonbcomp] = useState(0);
//   const token = JSON.parse(localStorage.getItem("userinfo"));
//   const URL = config.URL;

//   useEffect(() => {
//     axios
//       .get(`${URL}/investment/${token.email}`)
//       .then((response) => {
//         // console.log("Fetched data from server:", response.data);
//         // console.log(response.data);
//         setCartItems(response.data.all);
//         console.log(response.data);
//         setQuantity(response.data.allv);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//     setAdmin(token.isAdmin);
//     axios
//       .get(`${URL}/auth/user/checkverify/${token.email}`)
//       .then((response) => {
//         console.log(response.data.isVerified);
//         setonbcomp(response.data.isVerified);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   const increase = () => {
//     setQuantity(quantity + 1000);
//   };
//   const decrease = () => {
//     if (quantity <= 1000) {
//       setQuantity(500);
//     } else {
//       setQuantity(quantity - 1000);
//     }
//   };

//   const [formData, setFormData] = useState({});
//   const [step, setStep] = useState(0);

//   const nextStep = () => {
//     setStep(step + 1);
//   };
//   const handlePayment = () => {
//     console.log("clicked");
//     axios
//       .post(`${URL}/phonepe/payment`)
//       .then((response) => {
//         console.log(response.data);
//         window.location.href = response.data.url;
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const prevStep = () => {
//     setStep(step - 1);
//   };
//   const handleCartremove = async (val) => {
//     try {
//       console.log(val);
//       console.log(token.email);
//       const removeresult = await axios.post(
//         `${URL}/investment/remove/${token.email}`,
//         {
//           iid: val,
//         }
//       );
//       if (removeresult) {
//         console.log("remove sucess");
//         window.location.reload();
//       } else {
//         console.log("remove failed");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // const luxurycartItems = cartItems.filter(
//   //   (cartItem) => cartItem.main_heading === "Luxury Property"
//   // );
//   // console.log(luxurycartItems);

//   //handl

//   const navigate = useNavigate();
//   const isSmallScreen = useMediaQuery("(max-width:600px)");
//   const handleAddcartItemClick = () => {
//     // Navigate to the "Form" page
//     navigate("/form");
//   };
//   return (
//     <div>
//       {/* LARGE SCREEN CODE BELOW badi */}
//       {!isSmallScreen && (
//         <Box style={{ padding: "30px" }}>
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               justifyContent: "space-between",
//             }}
//           >
//             <Typography
//               variant="h4"
//               style={{
//                 fontFamily: "Inter",
//                 padding: "0 10px 10px 0px",
//                 fontWeight: 600,
//                 justifyContent: "space-between",
//                 display: "flex",
//                 alignItems: "center",
//               }}
//             >
//               My Cart
//               {/* {
//         isAdmin&&<CartButton onClick={handleAddcartItemClick} style={{
//             marginTop:"15px",
//           }}>Add cartItem</CartButton>
//       } */}
//             </Typography>

//             {cartItems.length === 0 ? (
//               <Box></Box>
//             ) : (
//               <AddMoreLink
//                 to="/dashboard/properties"
//                 onClick={() => {
//                   console.log("this is me");
//                 }}
//               >
//                 <AddIcon />
//                 <Typography style={{ fontFamily: "Inter", fontWeight: 600 }}>
//                   Add more
//                 </Typography>
//               </AddMoreLink>
//             )}
//           </div>

//           {cartItems?.length === 0 && (
//             <EmptyCart>
//               <Box
//                 style={{
//                   border: "4px solid #cbe5ffb9",
//                   padding: "20px",
//                   borderRadius: "50%",
//                   margin: "20px",
//                 }}
//               >
//                 <ShoppingCartOutlinedIcon
//                   style={{ fontSize: "48px", color: "#0170dc" }}
//                 />
//               </Box>
//               <Typography
//                 variant="h4"
//                 style={{
//                   fontWeight: "600",
//                   fontFamily: "Inter",
//                   margin: "0 0 10px 0",
//                 }}
//               >
//                 Your cart is empty
//               </Typography>
//               <Typography
//                 style={{
//                   fontFamily: "Inter",
//                   fontSize: "20px",
//                   margin: "10px",
//                 }}
//               >
//                 Looks like you haven't added any properties in your cart
//               </Typography>
//               <PropertyButton
//                 onClick={() => {
//                   navigate("/dashboard/properties");
//                 }}
//               >
//                 View properties
//               </PropertyButton>
//             </EmptyCart>
//           )}

//           {cartItems?.length != 0 && (
//             <div
//               style={{
//                 display: "flex",
//                 width: "100%",
//                 marginTop: "20px",
//               }}
//             >
//               <div
//                 style={{
//                   width: "70%",
//                   display: "flex",
//                 }}
//               >
//                 <Grid
//                   sx={{
//                     width: "100%",
//                   }}
//                 >
//                   {cartItems.map((cartItem) => (
//                     <div
//                       key={cartItem._id}
//                       style={{
//                         width: "100%",
//                       }}
//                     >
//                       <Grid
//                         container
//                         spacing={2}
//                         sx={{
//                           width: "100%",
//                         }}
//                       >
//                         <Grid
//                           item
//                           xs={8}
//                           sx={{
//                             width: "100%",
//                           }}
//                         >
//                           <PropertyDetails>
//                             <Box
//                               style={{
//                                 display: "flex",
//                                 flexDirection: "column",
//                                 padding: "15px",
//                                 justifyContent: "space-between",
//                               }}
//                             >
//                               <img
//                                 src={cartItem.image}
//                                 alt="propertyImage"
//                                 style={{
//                                   width: "150px",
//                                   height: "130px",
//                                   borderRadius: "10px",
//                                 }}
//                               />

//                               <RemoveButton
//                                 onClick={() => {
//                                   handleCartremove(cartItem.property);
//                                 }}
//                               >
//                                 <DeleteOutlineIcon />
//                                 Remove
//                               </RemoveButton>
//                             </Box>

//                             <Box
//                               style={{
//                                 width: "100%",
//                                 padding: "15px",
//                                 height: "130px",
//                                 display: "flex",
//                                 flexDirection: "column",
//                                 justifyContent: "space-evenly",
//                               }}
//                             >
//                               <Typography
//                                 style={{ fontWeight: "600", fontSize: "16px" }}
//                               >
//                                 {cartItem.property}
//                               </Typography>

//                               <ThemeProvider theme={theme}>
//                                 <Box>
//                                   <Typography
//                                     style={{
//                                       color: "rgb(112,111,111)",
//                                       fontSize: "14px",
//                                       fontFamily: "Inter",
//                                       display: "flex",
//                                       alignItems: "center",
//                                     }}
//                                   >
//                                     Apply for{" "}
//                                     {cartItem.type == 0
//                                       ? "Allotment"
//                                       : "Investement"}
//                                     <Tooltip title={info} placement="top">
//                                       <Typography
//                                         style={{
//                                           border: "1px solid rgb(112,111,111)",
//                                           color: "rgb(112,111,111)",
//                                           display: "inline",
//                                           cursor: "pointer",
//                                           padding: "0px 6px",
//                                           marginLeft: "5px",
//                                           borderRadius: "50%",
//                                           fontSize: "10px",
//                                         }}
//                                       >
//                                         i
//                                       </Typography>
//                                     </Tooltip>
//                                   </Typography>
//                                   <Typography
//                                     style={{
//                                       fontWeight: "600",
//                                       fontFamily: "Inter",
//                                     }}
//                                   >
//                                     RUP {cartItem.amount}{" "}
//                                   </Typography>
//                                 </Box>
//                               </ThemeProvider>

//                               {/* <ThemeProvider theme={theme}>
//               <Box>
//                 <Typography style={{ color: 'rgb(112,111,111)', fontSize: '14px', fontFamily: 'Inter', display: 'flex', alignItems: 'center' }}>
//                   Appreciation

//                   <Tooltip title={info1} placement="top">
//                     <Typography style={{ border: '1px solid rgb(112,111,111)', color: 'rgb(112,111,111)', display: "inline", cursor: 'pointer', padding: '0px 6px', marginLeft: '5px', borderRadius: '50%', fontSize: '10px' }}>i</Typography>
//                   </Tooltip>

//                 </Typography>
//                 <Typography style={{ fontWeight: '600', fontFamily: "Inter" }}>RUP 161</Typography>
//               </Box>
//             </ThemeProvider> */}
//                             </Box>

//                             {/* <Box style={{ display: 'flex', flexDirection: 'column', padding: '15px', justifyContent: 'space-evenly' }}> */}

//                             {/* <Box style={{ display: 'flex', alignItems: 'center' }}>
//               <Decrease onClick={() => decrease()} />
//               <AmountField
//                 sx={{ m: 1, width: '20ch' }}
//                 defaultValue={cartItem.amount}
//                 value={quantity}
//               />
//               <Increase onClick={() => increase()} />
//             </Box> */}

//                             {/* <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
//               <progress value={1500000} max={2000000} style={{ width: '40%' }} />
//               <Typography style={{ fontFamily: 'Inter', paddingLeft: '10px', fontWeight: 600 }}>75% funded</Typography>
//             </Box> */}

//                             {/* </Box> */}
//                           </PropertyDetails>
//                         </Grid>

//                         <Divider
//                           sx={{ my: 1 }}
//                           style={{ height: "2px", width: "100%" }}
//                         />
//                       </Grid>
//                     </div>
//                   ))}
//                 </Grid>
//               </div>

//               <Grid>
//                 <PaymentDetails>
//                   {step == 0 && (
//                     <>
//                       <Box
//                         style={{
//                           display: "flex",
//                           flexDirection: "column",
//                           padding: "10px 0",
//                         }}
//                       >
//                         <Amount>Investment amount</Amount>
//                         <Typography
//                           variant="p"
//                           style={{
//                             fontFamily: "Gilroy-Medium",
//                             justifyContent: "space-between",
//                             display: "flex",
//                             color: "gray",
//                             alignItems: "center",
//                             marginTop: "10px",
//                           }}
//                         >
//                           Payments are processed immediately
//                         </Typography>
//                         <TextField
//                           required
//                           fullWidth
//                           name="name"
//                           value={`₹ ` + quantity}
//                           type="text"
//                           sx={{
//                             width: "100%",
//                             marginTop: "20px",
//                             border: "2px solid  #90EE90",
//                           }}
//                         />

//                         <Typography
//                           style={{
//                             color: "rgb(112,111,111)",
//                             fontSize: "14px",
//                             fontFamily: "Inter",
//                             display: "flex",
//                             alignItems: "center",
//                             marginTop: "20px",
//                           }}
//                         >
//                           <div
//                             style={{
//                               display: "flex",
//                               justifyContent: "space-between",
//                               width: "100%",
//                             }}
//                           >
//                             <Typography
//                               style={{
//                                 width: "300px",
//                               }}
//                             >
//                               VENQ Fee
//                               <Tooltip title={info} placement="top">
//                                 <Typography
//                                   style={{
//                                     border: "1px solid rgb(112,111,111)",
//                                     color: "rgb(112,111,111)",
//                                     display: "inline",
//                                     cursor: "pointer",
//                                     padding: "2px 6px",
//                                     marginLeft: "5px",
//                                     borderRadius: "50%",
//                                     fontSize: "10px",
//                                   }}
//                                 >
//                                   i
//                                 </Typography>
//                               </Tooltip>
//                             </Typography>

//                             <Typography>₹{0.05 * quantity}</Typography>
//                           </div>
//                         </Typography>
//                         <Typography
//                           style={{
//                             color: "rgb(112,111,111)",
//                             fontSize: "14px",
//                             fontFamily: "Inter",
//                             display: "flex",
//                             alignItems: "center",
//                             marginTop: "20px",
//                           }}
//                         >
//                           <div
//                             style={{
//                               display: "flex",
//                               justifyContent: "space-between",
//                               width: "100%",
//                             }}
//                           >
//                             <Typography
//                               style={{
//                                 width: "300px",
//                               }}
//                             >
//                               Amount Payable
//                               <Tooltip title={info} placement="top">
//                                 <Typography
//                                   style={{
//                                     border: "1px solid rgb(112,111,111)",
//                                     color: "rgb(112,111,111)",
//                                     display: "inline",
//                                     cursor: "pointer",
//                                     padding: "2px 6px",
//                                     marginLeft: "5px",
//                                     borderRadius: "50%",
//                                     fontSize: "10px",
//                                   }}
//                                 >
//                                   i
//                                 </Typography>
//                               </Tooltip>
//                             </Typography>

//                             <Typography>₹{1.05 * quantity}</Typography>
//                           </div>
//                         </Typography>
//                       </Box>
//                       {onbcomp == 2 && (
//                         <Box>
//                           <PaymentButton
//                             onClick={() => {
//                               setStep(step + 2);
//                             }}
//                           >
//                             Proceed
//                           </PaymentButton>
//                         </Box>
//                       )}
//                       {onbcomp != 2 && (
//                         <Box>
//                           <PaymentButton
//                             onClick={() => {
//                               nextStep();
//                             }}
//                           >
//                             Proceed
//                           </PaymentButton>
//                         </Box>
//                       )}
//                     </>
//                   )}
//                   {step == 1 && (
//                     <>
//                       <Box
//                         style={{
//                           display: "flex",
//                           flexDirection: "column",
//                           padding: "10px 0",
//                         }}
//                       >
//                         <Amount>Personal Information</Amount>
//                         <Typography
//                           variant="p"
//                           style={{
//                             fontFamily: "Inter",
//                             justifyContent: "space-between",
//                             display: "flex",
//                             marginTop: "20px",
//                             marginBottom: "20px",
//                             color: "gray",
//                             alignItems: "center",
//                           }}
//                         >
//                           Required by Indian banking laws. This information is
//                           kept secure. It will never be used for any purpose
//                           beyond executing your transaction
//                         </Typography>
//                         {!onbcomp && (
//                           <button
//                             onClick={() => {
//                               // nextStep();
//                               navigate("/dashboard/profile");
//                             }}
//                           >
//                             VERIFY MY IDENTITY
//                           </button>
//                         )}
//                       </Box>
//                       {/* <Box>
// <PaymentButton onClick={}>Next</PaymentButton>
// </Box> */}
//                     </>
//                   )}
//                   {step == 2 && (
//                     <>
//                     <Terms/>

//                     </>
//                   )}

//                   {/* <Box>
// <PaymentButton onClick={handlePayment}>Proceed to payment</PaymentButton>
// </Box> */}
//                 </PaymentDetails>
//               </Grid>
//             </div>
//           )}
//         </Box>
//       )}

//       {/* SMALL SCREEN CODE BELOW choti  */}
//       {isSmallScreen && (
//         <Box style={{ padding: "15px" }}>
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               justifyContent: "space-between",
//             }}
//           >
//             <Typography
//               variant="h4"
//               style={{
//                 fontFamily: "Inter",
//                 padding: "0 10px 10px 0px",
//                 fontWeight: 600,
//                 justifyContent: "space-between",
//                 display: "flex",
//                 alignItems: "center",
//               }}
//             >
//               My Cart
//               {/* {
//         isAdmin&&<CartButton onClick={handleAddcartItemClick} style={{
//             marginTop:"15px",
//           }}>Add cartItem</CartButton>
//       } */}
//             </Typography>

//             {cartItems.length === 0 ? (
//               <Box></Box>
//             ) : (
//               <AddMoreLinkSmall
//                 to="/dashboard/properties"
//                 onClick={() => {
//                   console.log("this is me");
//                 }}
//               >
//                 <AddIcon />
//                 <Typography style={{ fontFamily: "Inter", fontWeight: 600 }}>
//                   Add more
//                 </Typography>
//               </AddMoreLinkSmall>
//             )}
//           </div>
//           {cartItems?.length === 0 && (
//             <EmptyCart>
//               <Box
//                 style={{
//                   border: "4px solid #cbe5ffb9",
//                   padding: "20px",
//                   borderRadius: "50%",
//                   margin: "20px",
//                 }}
//               >
//                 <ShoppingCartOutlinedIcon
//                   style={{ fontSize: "48px", color: "#0170dc" }}
//                 />
//               </Box>
//               <Typography
//                 variant="h4"
//                 style={{
//                   fontWeight: "600",
//                   fontFamily: "Inter",
//                   margin: "0 0 10px 0",
//                 }}
//               >
//                 Your cart is empty
//               </Typography>
//               <Typography
//                 style={{
//                   fontFamily: "Inter",
//                   fontSize: "20px",
//                   margin: "10px",
//                 }}
//               >
//                 Looks like you haven't added any properties in your cart
//               </Typography>
//               <PropertyButton
//                 onClick={() => {
//                   navigate("/dashboard/properties");
//                 }}
//               >
//                 View properties
//               </PropertyButton>
//             </EmptyCart>
//           )}
//           {cartItems?.length != 0 && (
//             <>
//               <div
//                 style={{
//                   width: "100%",
//                   display: "flex",
//                   marginTop: "20px",
//                   marginLeft: "3%",
//                 }}
//               >
//                 <Grid
//                   sx={{
//                     width: "100%",
//                   }}
//                 >
//                   {cartItems.map((cartItem) => (
//                     <div
//                       key={cartItem._id}
//                       style={{
//                         width: "100%",
//                       }}
//                     >
//                       <Grid
//                         container
//                         spacing={2}
//                         sx={{
//                           width: "100%",
//                         }}
//                       >
//                         <Grid
//                           item
//                           xs={8}
//                           sx={{
//                             width: "100%",
//                           }}
//                         >
//                           <PropertyDetailsSmall>
//                             <Box
//                               style={{
//                                 display: "flex",
//                                 flexDirection: "column",
//                                 padding: "15px",
//                                 justifyContent: "space-between",
//                               }}
//                             >
//                               <img
//                                 src={cartItem.image}
//                                 alt="propertyImage"
//                                 style={{
//                                   width: "150px",
//                                   height: "130px",
//                                   borderRadius: "10px",
//                                 }}
//                               />

//                               <RemoveButton
//                                 onClick={() => {
//                                   handleCartremove(cartItem.property);
//                                 }}
//                               >
//                                 <DeleteOutlineIcon />
//                                 Remove
//                               </RemoveButton>
//                             </Box>

//                             <Box
//                               style={{
//                                 width: "100%",
//                                 padding: "15px",
//                                 display: "flex",
//                                 flexDirection: "column",
//                                 justifyContent: "space-evenly",
//                               }}
//                             >
//                               <Typography
//                                 style={{ fontWeight: "600", fontSize: "16px" }}
//                               >
//                                 {cartItem.property}
//                               </Typography>

//                               <ThemeProvider theme={theme}>
//                                 <Box>
//                                   <Typography
//                                     style={{
//                                       color: "rgb(112,111,111)",
//                                       fontSize: "14px",
//                                       fontFamily: "Inter",
//                                       display: "flex",
//                                       alignItems: "center",
//                                     }}
//                                   >
//                                     Apply for{" "}
//                                     {cartItem.type == 0
//                                       ? "Allotment"
//                                       : "Investement"}
//                                     <Tooltip title={info} placement="top">
//                                       <Typography
//                                         style={{
//                                           border: "1px solid rgb(112,111,111)",
//                                           color: "rgb(112,111,111)",
//                                           display: "inline",
//                                           cursor: "pointer",
//                                           padding: "0px 6px",
//                                           marginLeft: "5px",
//                                           borderRadius: "50%",
//                                           fontSize: "10px",
//                                         }}
//                                       >
//                                         i
//                                       </Typography>
//                                     </Tooltip>
//                                   </Typography>
//                                   <Typography
//                                     style={{
//                                       fontWeight: "600",
//                                       fontFamily: "Inter",
//                                     }}
//                                   >
//                                     RUP {cartItem.amount}{" "}
//                                   </Typography>
//                                 </Box>
//                               </ThemeProvider>

//                               {/* <ThemeProvider theme={theme}>
//                           <Box>
//                             <Typography style={{ color: 'rgb(112,111,111)', fontSize: '14px', fontFamily: 'Inter', display: 'flex', alignItems: 'center' }}>
//                               Appreciation

//                               <Tooltip title={info1} placement="top">
//                                 <Typography style={{ border: '1px solid rgb(112,111,111)', color: 'rgb(112,111,111)', display: "inline", cursor: 'pointer', padding: '0px 6px', marginLeft: '5px', borderRadius: '50%', fontSize: '10px' }}>i</Typography>
//                               </Tooltip>

//                             </Typography>
//                             <Typography style={{ fontWeight: '600', fontFamily: "Inter" }}>RUP 161</Typography>
//                           </Box>
//                         </ThemeProvider> */}
//                             </Box>

//                             {/* <Box style={{ display: 'flex', flexDirection: 'column', padding: '15px', justifyContent: 'space-evenly' }}> */}

//                             {/* <Box style={{ display: 'flex', alignItems: 'center' }}>
//                           <Decrease onClick={() => decrease()} />
//                           <AmountField
//                             sx={{ m: 1, width: '20ch' }}
//                             defaultValue={cartItem.amount}
//                             value={quantity}
//                           />
//                           <Increase onClick={() => increase()} />
//                         </Box> */}

//                             {/* <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
//                           <progress value={1500000} max={2000000} style={{ width: '40%' }} />
//                           <Typography style={{ fontFamily: 'Inter', paddingLeft: '10px', fontWeight: 600 }}>75% funded</Typography>
//                         </Box> */}

//                             {/* </Box> */}
//                           </PropertyDetailsSmall>
//                         </Grid>

//                         <Divider
//                           sx={{ my: 1 }}
//                           style={{ height: "2px", width: "100%" }}
//                         />
//                       </Grid>
//                     </div>
//                   ))}
//                 </Grid>
//               </div>
//               <Grid>
//                 <PaymentDetailsSmall>
//                   {step == 0 && (
//                     <>
//                       <Box
//                         style={{
//                           display: "flex",
//                           flexDirection: "column",
//                           padding: "10px 0",
//                         }}
//                       >
//                         <Amount>Investment amount</Amount>
//                         <Typography
//                           variant="p"
//                           style={{
//                             fontFamily: "Gilroy-Medium",
//                             justifyContent: "space-between",
//                             display: "flex",
//                             color: "gray",
//                             alignItems: "center",
//                             marginTop: "10px",
//                           }}
//                         >
//                           Payments are processed immediately
//                         </Typography>
//                         <TextField
//                           required
//                           fullWidth
//                           name="name"
//                           value={`₹ ` + quantity}
//                           type="text"
//                           sx={{
//                             width: "100%",
//                             marginTop: "20px",
//                             border: "2px solid  #90EE90",
//                           }}
//                         />

//                         <Typography
//                           style={{
//                             color: "rgb(112,111,111)",
//                             fontSize: "14px",
//                             fontFamily: "Inter",
//                             display: "flex",
//                             alignItems: "center",
//                             marginTop: "20px",
//                           }}
//                         >
//                           <div
//                             style={{
//                               display: "flex",
//                               justifyContent: "space-between",
//                               width: "100%",
//                             }}
//                           >
//                             <Typography
//                               style={{
//                                 width: "300px",
//                               }}
//                             >
//                               VENQ Fee
//                               <Tooltip title={info} placement="top">
//                                 <Typography
//                                   style={{
//                                     border: "1px solid rgb(112,111,111)",
//                                     color: "rgb(112,111,111)",
//                                     display: "inline",
//                                     cursor: "pointer",
//                                     padding: "0px 6px",
//                                     marginLeft: "5px",
//                                     borderRadius: "50%",
//                                     fontSize: "10px",
//                                   }}
//                                 >
//                                   i
//                                 </Typography>
//                               </Tooltip>
//                             </Typography>

//                             <Typography>₹{0.05 * quantity}</Typography>
//                           </div>
//                         </Typography>
//                         <Typography
//                           style={{
//                             color: "rgb(112,111,111)",
//                             fontSize: "14px",
//                             fontFamily: "Inter",
//                             display: "flex",
//                             alignItems: "center",
//                             marginTop: "20px",
//                           }}
//                         >
//                           <div
//                             style={{
//                               display: "flex",
//                               justifyContent: "space-between",
//                               width: "100%",
//                             }}
//                           >
//                             <Typography
//                               style={{
//                                 width: "300px",
//                               }}
//                             >
//                               Amount Payable
//                               <Tooltip title={info} placement="top">
//                                 <Typography
//                                   style={{
//                                     border: "1px solid rgb(112,111,111)",
//                                     color: "rgb(112,111,111)",
//                                     display: "inline",
//                                     cursor: "pointer",
//                                     padding: "0px 6px",
//                                     marginLeft: "5px",
//                                     borderRadius: "50%",
//                                     fontSize: "10px",
//                                   }}
//                                 >
//                                   i
//                                 </Typography>
//                               </Tooltip>
//                             </Typography>

//                             <Typography>₹{1.05 * quantity}</Typography>
//                           </div>
//                         </Typography>
//                       </Box>
//                       {onbcomp == 2 && (
//                         <Box>
//                           <PaymentButton
//                             onClick={() => {
//                               setStep(step + 2);
//                             }}
//                           >
//                             Proceed
//                           </PaymentButton>
//                         </Box>
//                       )}
//                       {onbcomp != 2 && (
//                         <Box>
//                           <PaymentButton
//                             onClick={() => {
//                               nextStep();
//                             }}
//                           >
//                             Proceed
//                           </PaymentButton>
//                         </Box>
//                       )}
//                     </>
//                   )}
//                   {step == 1 && (
//                     <>
//                       <Box
//                         style={{
//                           display: "flex",
//                           flexDirection: "column",
//                           padding: "10px 0",
//                         }}
//                       >
//                         <Amount>Personal Information</Amount>
//                         <Typography
//                           variant="p"
//                           style={{
//                             fontFamily: "Inter",
//                             justifyContent: "space-between",
//                             display: "flex",
//                             marginTop: "20px",
//                             marginBottom: "20px",
//                             color: "gray",
//                             alignItems: "center",
//                           }}
//                         >
//                           Required by Indian banking laws. This information is
//                           kept secure. It will never be used for any purpose
//                           beyond executing your transaction
//                         </Typography>

//                         <button
//                           onClick={() => {
//                             // nextStep();
//                             navigate("/dashboard/profile");
//                           }}
//                         >
//                           verify my identity
//                         </button>
//                       </Box>
//                       {/* <Box>
//                     <PaymentButton onClick={}>Next</PaymentButton>
//                   </Box> */}
//                     </>
//                   )}
//                   {step == 2 && (
//                     <>
//                       <Box
//                         style={{
//                           display: "flex",
//                           flexDirection: "column",
//                           padding: "10px 0",
//                           fontSize: "12px",
//                         }}
//                       >
//                         <Amount>Terms</Amount>
//                         <TermDetailsSmall>
//                           <Typography
//                             variant="p"
//                             style={{
//                               fontFamily: "Inter",
//                               justifyContent: "space-between",
//                               display: "flex",
//                               // marginTop:'5px',
//                               // marginBottom:'5px',
//                               color: "gray",
//                               alignItems: "center",
//                             }}
//                           >
//                             I understand that VENQ will receive a cash and
//                             securities commission as further detailed in the
//                             offering documens
//                           </Typography>
//                           <Divider
//                             sx={{ my: 1 }}
//                             style={{ height: "2px", width: "100%" }}
//                           />
//                           <Typography
//                             variant="p"
//                             style={{
//                               fontFamily: "Inter",
//                               justifyContent: "space-between",
//                               display: "flex",
//                               // marginTop:'5px',
//                               // marginBottom:'5px',
//                               color: "gray",
//                               alignItems: "center",
//                             }}
//                           >
//                             I understand I will have voting rights just for
//                             selling of my own share or selling the property
//                             after the holding period is over and will grant a
//                             third-party nominee broad authority to act on my
//                             behalf.
//                           </Typography>
//                           <Divider
//                             sx={{ my: 1 }}
//                             style={{ height: "2px", width: "100%" }}
//                           />
//                           <Typography
//                             variant="p"
//                             style={{
//                               fontFamily: "Inter",
//                               justifyContent: "space-between",
//                               display: "flex",
//                               // marginTop:'5px',
//                               // marginBottom:'5px',
//                               color: "gray",
//                               alignItems: "center",
//                             }}
//                           >
//                             I understand I will become a beneficial owner of
//                             equity interest in the Company.
//                           </Typography>
//                           <Divider
//                             sx={{ my: 1 }}
//                             style={{ height: "2px", width: "100%" }}
//                           />
//                           <Typography
//                             variant="p"
//                             style={{
//                               fontFamily: "Inter",
//                               justifyContent: "space-between",
//                               display: "flex",
//                               // marginTop:'5px',
//                               // marginBottom:'5px',
//                               color: "gray",
//                               alignItems: "center",
//                             }}
//                           >
//                             I understand that investing this amount into several
//                             deals would better diversify my risk
//                           </Typography>
//                           <Divider
//                             sx={{ my: 1 }}
//                             style={{ height: "2px", width: "100%" }}
//                           />
//                           <Typography
//                             variant="p"
//                             style={{
//                               fontFamily: "Inter",
//                               justifyContent: "space-between",
//                               display: "flex",
//                               // marginTop:'5px',
//                               // marginBottom:'5px',
//                               color: "gray",
//                               alignItems: "center",
//                             }}
//                           >
//                             I understand that there is no guarantee of a
//                             relationship between VENQ and the Developer
//                             post-offering
//                           </Typography>
//                           <Divider
//                             sx={{ my: 1 }}
//                             style={{ height: "2px", width: "100%" }}
//                           />
//                           <Typography
//                             variant="p"
//                             style={{
//                               fontFamily: "Inter",
//                               justifyContent: "space-between",
//                               display: "flex",
//                               // marginTop:'5px',
//                               // marginBottom:'5px',
//                               color: "gray",
//                               alignItems: "center",
//                             }}
//                           >
//                             I consent to electronic delivery of all documents,
//                             notices and agreements as related to my investment
//                           </Typography>
//                           <Divider
//                             sx={{ my: 1 }}
//                             style={{ height: "2px", width: "100%" }}
//                           />
//                           <Typography
//                             variant="p"
//                             style={{
//                               fontFamily: "Inter",
//                               justifyContent: "space-between",
//                               display: "flex",
//                               // marginTop:'5px',
//                               // marginBottom:'5px',
//                               color: "gray",
//                               alignItems: "center",
//                             }}
//                           >
//                             I understand my investment won't be transferable for
//                             next 2 months and may not have a market for resale
//                           </Typography>
//                           <Divider
//                             sx={{ my: 1 }}
//                             style={{ height: "2px", width: "100%" }}
//                           />
//                           <Typography
//                             variant="p"
//                             style={{
//                               fontFamily: "Inter",
//                               justifyContent: "space-between",
//                               display: "flex",
//                               // marginTop:'5px',
//                               // marginBottom:'5px',
//                               color: "gray",
//                               alignItems: "center",
//                             }}
//                           >
//                             I have read the educational materials and agree to
//                             the Terms of Service, including arbitration
//                             provisions
//                           </Typography>
//                           <Divider
//                             sx={{ my: 1 }}
//                             style={{ height: "2px", width: "100%" }}
//                           />
//                           <Typography
//                             variant="p"
//                             style={{
//                               fontFamily: "Inter",
//                               justifyContent: "space-between",
//                               display: "flex",
//                               // marginTop:'5px',
//                               // marginBottom:'5px',
//                               color: "gray",
//                               alignItems: "center",
//                             }}
//                           >
//                             I understand this investment is risky and that I
//                             shouldn't invest unless I can afford to lose all
//                             invested funds
//                           </Typography>
//                           <Divider
//                             sx={{ my: 1 }}
//                             style={{ height: "2px", width: "100%" }}
//                           />
//                           <Typography
//                             variant="p"
//                             style={{
//                               fontFamily: "Inter",
//                               justifyContent: "space-between",
//                               display: "flex",
//                               // marginTop:'5px',
//                               marginBottom: "5px",
//                               color: "gray",
//                               alignItems: "center",
//                             }}
//                           >
//                             I understand I am responsible for all fees and
//                             charges associated with the use of my payment method
//                           </Typography>
//                         </TermDetailsSmall>

//                         {/* <FormControlLabel control={<Checkbox defaultChecked />} label="Label" /> */}
//                         <div
//                           style={{
//                             display: "flex",
//                           }}
//                         >
//                           <Checkbox />
//                           <Typography
//                             sx={{
//                               fontFamily: "Gilroy-Medium",
//                               alignItems: "center",
//                               marginTop: "12px",
//                               fontSize: "14px",
//                             }}
//                           >
//                             I have read and agree to the e sign disclosure
//                           </Typography>
//                         </div>
//                         <div
//                           style={{
//                             display: "flex",
//                             alignItems: "center",
//                           }}
//                         >
//                           <Checkbox />
//                           <Typography
//                             sx={{
//                               fontFamily: "Gilroy-Medium",
//                               alignItems: "center",
//                               fontSize: "14px",
//                             }}
//                           >
//                             I have read and accept the terms of the agreement
//                           </Typography>
//                         </div>

//                         {/* <FormControlLabel sx={{
//                   fontFamily:'Gilroy-Medium'
//                   }} required control={<Checkbox />} label="I have read and agree to the e sign disclosure" /> */}

//                         <Box>
//                           <PaymentButton onClick={handlePayment}>
//                             Proceed to Payment
//                           </PaymentButton>
//                         </Box>
//                         {/* <Divider sx={{ my: 1 }} style={{ height: "2px", width: "100%" }} />
//                   <Typography
//                   variant="p"
//                   style={{
//                   fontFamily: "Inter",
//                   justifyContent: "space-between",
//                   display: "flex",
//                   // marginTop:'5px',
//                   // marginBottom:'5px',
//                   color:'gray',
//                   alignItems:"center",
//                   }}
//                   >
//                   I understand that VENQ will receive a cash and securities commission as further detailed in the offering documens
//                   </Typography>
//                   <Divider sx={{ my: 1 }} style={{ height: "2px", width: "100%" }} /> */}

//                         {/* <button onClick={()=>{
//                   navigate('/dashboard/profile');
//                   }}>verify my identity</button>          */}
//                       </Box>
//                     </>
//                   )}

//                   {/* <Box>
//                     <PaymentButton onClick={handlePayment}>Proceed to payment</PaymentButton>
//                   </Box> */}
//                 </PaymentDetailsSmall>
//               </Grid>
//             </>
//           )}
//         </Box>
//       )}
//     </div>
//   );
// };

// export default Properties;

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
import { ToastContainer, toast } from "react-toastify";

import axios from "axios";
import config from "../../../config";
// import { Box, Button, Typography, styled } from '@mui/material'
import { ThemeProvider, Tooltip, createTheme } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RemoveIcon from "@mui/icons-material/Remove";

// import {useNavigate} from 'react-router-dom'
// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import AddIcon from "@mui/icons-material/Add";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Terms from "../../common/terms";

import Kyc_popup from "./kyc_popup.jsx";
// import CartItem from './CartItem';
// import config from '../../../config';
// import axios from 'axios';
const AddMoreLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 2px solid lightgrey;
  padding: 10px;
  border-radius: 10px;
  width: 13%;
  text-decoration: none;
  &:hover {
    border: 2px solid #0170dc;
    background-color: #0170dc;
    color: white;
  }
`;
const AddMoreLinkSmall = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 2px solid lightgrey;
  border-radius: 10px;
  width: 30%;
  text-decoration: none;
  &:hover {
    border: 2px solid #0170dc;
    background-color: #0170dc;
    color: white;
  }
`;
const EmptyCart = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 80vh;
`;
const PropertyButton = styled(Button)`
  color: white;
  background-color: #0170dc;
  text-transform: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 20px;
  margin: 10px;
  &:hover {
    background-color: #0170dc;
  }
`;
// const Items = styled(Box)`
//   margin: 20px 0;
// `
// // const cartItems = []

const PropertyDetails = styled(Box)`
  display: flex;
  background-color: white;
  width: 150%;
  border-radius: 10px;
  height: 40vh;
`;
const PropertyDetailsSmall = styled(Box)`
  display: flex;
  background-color: white;
  width: 150%;
  border-radius: 10px;
  height: 20vh;
`;
const PaymentDetails = styled(Box)`
  background-color: white;
  position: sticky;
  top: 20px;
  width: 400px;
  height: 500px;
  // overflow-y:auto;
  border-radius: 10px;
  padding: 15px;
`;
const PaymentDetailsSmall = styled(Box)`
  background-color: white;
  position: sticky;
  top: 20px;
  // width:400px;
  height: 45%;
  // overflow-y:auto;
  border-radius: 10px;
  padding: 15px;
`;
const TermDetails = styled(Box)`
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: white;
  width: 400px;
  height: 300px;
  overflow-y: scroll;
`;
const TermDetailsSmall = styled(Box)`
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: white;
  // width:400px;
  height: 300px;
  overflow-y: scroll;
`;
const RemoveButton = styled(Button)`
  color: black;
  text-transform: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 14px;
  margin: 10px 0;
  display: flex;
  justify-content: space-around;
  border: 1px solid lightgrey;
  &:hover {
    border: 1px solid red;
    background-color: red;
    color: white;
  }
`;
const Decrease = styled(RemoveIcon)`
  color: #0170dc;
  border: 1px solid lightgrey;
  padding: 10px;
  border-radius: 10px;
  font-size: 40px;
  &:hover {
    background-color: rgb(112, 111, 111);
    color: white;
  }
`;
const Increase = styled(AddIcon)`
  color: #0170dc;
  border: 1px solid lightgrey;
  padding: 10px;
  border-radius: 10px;
  font-size: 40px;
  &:hover {
    background-color: rgb(112, 111, 111);
    color: white;
  }
`;
const AmountField = styled("input")`
  outline: none;
  font-family: "Gilroy-Bold";
  font-weight: 600;
  width: 30%;
  align-items: center;
  border-radius: 10px;
  border: 1px solid lightgrey;
  padding: 10px;
  font-size: 16px;
`;
const Amount = styled(Typography)`
  font-weight: 600;
  font-family: "Gilroy-Bold";
  font-size: 20px;
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

const theme = createTheme({
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: "14px",
          fontFamily: "Inter",
          backgroundColor: "black",
          textAlign: "center",
        },
      },
    },
  },
});

const info = `The "Apply for Allotment" system is an alternative method allowing investors to secure shares in a property by paying 5% of the investment amount upfront, to know more click Apply for Allotment`;

// const Cart = ({ handleBuyProperties }) => {

//   const token = JSON.parse(localStorage.getItem("userinfo"));
//   const [cartItems,setCartItems]=useState([]);
//   const URL=config.URL;

//   useEffect(() => {
//     axios
//       .get(`${URL}/investment/${token.email}`)
//       .then((response) => {
//         // console.log("Fetched data from server:", response.data);
//         console.log(response.data);
//         setCartItems(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   return (
//     <div>
//       <Box style={{ padding: '30px' }}>

//         <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

//           <Typography variant='h4' style={{ fontFamily: 'Inter', padding: '0 10px 10px 0px', fontWeight: 600 }}> this is my Cart {cartItems?.length === 0 ? '' : `(${cartItems.length})`}</Typography>

//           {cartItems.length === 0 ?
//             <Box></Box>
//             :
//             <AddMoreLink to='/dashboard/properties' onClick={handleBuyProperties}>
//               <AddIcon />
//               <Typography style={{ fontFamily: 'Inter', fontWeight: 600 }}>Add more</Typography>
//             </AddMoreLink>
//           }

//         </Box>
//         {
//           cartItems?.length === 0 ?

//             <EmptyCart>
//               <Box style={{ border: '4px solid #cbe5ffb9', padding: '20px', borderRadius: '50%', margin: '20px' }}>
//                 <ShoppingCartOutlinedIcon style={{ fontSize: '48px', color: '#0170dc' }} />
//               </Box>
//               <Typography variant='h4' style={{ fontWeight: '600', fontFamily: 'Inter', margin: '0 0 10px 0' }}>Your cart is empty</Typography>
//               <Typography style={{ fontFamily: 'Inter', fontSize: '20px', margin: '10px' }}>Looks like you haven't added any properties in your cart</Typography>
//               <PropertyButton onClick={handleBuyProperties}>View properties</PropertyButton>
//             </EmptyCart>

//             :
//             <div>
//               <h1>{cartItems[0].amount}</h1>
//               {cartItems.map((elem)=>{
//                 <div key={elem._id}>This is me</div>
//               })}
//               {cartItems.map((item)=>{
//                <Grid key={item._id} container spacing={2}>

//                  <Grid item xs={8}>

//                    <PropertyDetails>

//                      <Box style={{ display: 'flex', flexDirection: 'column', padding: '15px', justifyContent: 'space-between' }}>
//                        <img src="/images/signup_page.jpg" alt="propertyImage" style={{ width: '150px', height: '130px', borderRadius: '10px' }} />

//                        <RemoveButton>
//                          <DeleteOutlineIcon />
//                          Remove
//                        </RemoveButton>
//                      </Box>

//                      <Box style={{ width: '40%', padding: '15px', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>

//                        <Typography style={{ fontWeight: '600', fontSize: '16px' }}>Studio in Liberty House, DIFC</Typography>

//                        <ThemeProvider theme={theme}>
//                          <Box>
//                            <Typography style={{ color: 'rgb(112,111,111)', fontSize: '14px', fontFamily: 'Inter', display: 'flex', alignItems: 'center' }}>
//                              Monthly rent

//                              <Tooltip title={info} placement="top">
//                                <Typography style={{ border: '1px solid rgb(112,111,111)', color: 'rgb(112,111,111)', display: "inline", cursor: 'pointer', padding: '0px 6px', marginLeft: '5px', borderRadius: '50%', fontSize: '10px' }}>i</Typography>
//                              </Tooltip>

//                            </Typography>
//                            <Typography style={{ fontWeight: '600', fontFamily: "Inter" }}>RUP {item.amount}</Typography>
//                          </Box>
//                        </ThemeProvider>

//                        <ThemeProvider theme={theme}>
//                          <Box>
//                            <Typography style={{ color: 'rgb(112,111,111)', fontSize: '14px', fontFamily: 'Inter', display: 'flex', alignItems: 'center' }}>
//                              Appreciation

//                              <Tooltip title={info1} placement="top">
//                                <Typography style={{ border: '1px solid rgb(112,111,111)', color: 'rgb(112,111,111)', display: "inline", cursor: 'pointer', padding: '0px 6px', marginLeft: '5px', borderRadius: '50%', fontSize: '10px' }}>i</Typography>
//                              </Tooltip>

//                            </Typography>
//                            <Typography style={{ fontWeight: '600', fontFamily: "Inter" }}>RUP 161</Typography>
//                          </Box>
//                        </ThemeProvider>

//                      </Box>

//                      <Box style={{ display: 'flex', flexDirection: 'column', padding: '15px', justifyContent: 'space-evenly' }}>

//                        <Box style={{ display: 'flex', alignItems: 'center' }}>
//                          <Decrease onClick={() => decrease()} />
//                          <AmountField
//                            sx={{ m: 1, width: '20ch' }}
//                            defaultValue='2000'
//                            value={quantity}
//                          />
//                          <Increase onClick={() => increase()} />
//                        </Box>

//                        <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
//                          <progress value={1500000} max={2000000} style={{ width: '40%' }} />
//                          <Typography style={{ fontFamily: 'Inter', paddingLeft: '10px', fontWeight: 600 }}>75% funded</Typography>
//                        </Box>

//                      </Box>

//                    </PropertyDetails>

//                  </Grid>

//                  <Grid item xs={4}>

//                    <PaymentDetails>

//                      <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0' }}>
//                        <Amount>Total</Amount>
//                        <Amount>RUP {quantity}</Amount>
//                      </Box>

//                      <Box>
//                        <PaymentButton onClick={handlePayment}>Proceed to payment</PaymentButton>
//                      </Box>

//                    </PaymentDetails>

//                  </Grid>

//                </Grid>
//               })}
//             </div>

//         }

//       </Box>
//     </div>
//   )
// }

// export default Cart
<script
  type="text/javascript"
  id="hs-script-loader"
  async
  defer
  src="//js.hs-scripts.com/45720526.js"
></script>;
const Property = styled(Card)`
  background-color: white;
  border-radius: 10px;
  &:hover {
    transform: translateY(-10px);
  }
`;
const Subheader = styled(Box)`
  display: flex;
  & div {
    border: 1px solid lightgray;
    padding: 4px 10px;
    margin-right: 10px;
    border-radius: 6px;
  }
`;
const PriceBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin: 15px 0 10px 0;
  align-items: center;
`;
const ReturnsBox = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  background-color: #f6f7f9;
  font-family: "Inter";
  color: grey;
  > div {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    font-size: 15px;
  }
`;
const Options = styled(Box)`
  margin: 20px 10px 40px 0px;
  background-color: white;
  padding: 0 5x;
  width: 100%;
  border-radius: 10px;
  display: flex;
`;
const OptionName = styled(Button)`
  // border: 2px solid black;
  padding: 10px 45px;
  margin: 10px;
  width: 150%;
  border-radius: 10px;
  background-color: ${(props) =>
    props.active ? "#0170dc !important" : "white"};
  color: ${(props) => (props.active ? "white !important" : "black")};
  &:hover {
    background-color: #0170dc;
    color: white;
    border: none;
  }
  &:focus {
    background-color: #0170dc;
    color: white;
  }
`;
const Category = styled(Typography)`
  position: absolute;
  width: 100%;
  text-align: center;
  background-color: #0170dc;
  color: white;
  z-index: 2;
  padding: 5px;
  font-family: "Inter";
`;
const Header = styled(Typography)`
  font-size: 20px;
  font-weight: 600;
  font-family: "Inter";
  margin: 10px 0;
`;

const CartButton = styled(Button)`
  /* background-color: #0170dc; */
  color: white;
  font-family: "Inter";
  text-transform: none;
  font-size: 14px;
  padding: 7px;
  border-radius: 10px;
  &:hover {
    background-color: #0170dc;
    color: white;
  }
`;

const Properties = () => {
  //   const navigate=useNavigate();

  const [activeButton, setActiveButton] = useState("available");
  const handleButtonClick = (value) => {
    setActiveButton(value);
  };
  const [quantity, setQuantity] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [isAdmin, setAdmin] = useState(false);
  const [currp, setcurrp] = useState("");
  const [onbcomp, setonbcomp] = useState(0);
  const token = JSON.parse(localStorage.getItem("userinfo"));
  const URL = config.URL;

  useEffect(() => {
    axios
      .get(`${URL}/investment/${token.email}`)
      .then((response) => {
        // console.log("Fetched data from server:", response.data);
        // console.log(response.data);
        setCartItems(response.data.all);
        console.log(response.data);
        setQuantity(response.data.allv);
      })
      .catch((error) => {
        console.error(error);
      });
    setAdmin(token.isAdmin);
    axios
      .get(`${URL}/auth/user/checkverify/${token.email}`)
      .then((response) => {
        console.log(response.data.isVerified);
        setonbcomp(response.data.isVerified);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const increase = () => {
    setQuantity(quantity + 1000);
  };
  const decrease = () => {
    if (quantity <= 1000) {
      setQuantity(500);
    } else {
      setQuantity(quantity - 1000);
    }
  };

  const [formData, setFormData] = useState({});
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep(step + 2);
  };
  const handlePayment = () => {
    toast.success("payment verified successfully");

    console.log("clicked");
    // axios
    //   .post(`${URL}/phonepe/payment`)
    //   .then((response) => {
    //     console.log(response.data);
    //     // window.location.href = response.data.url;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  const prevStep = () => {
    setStep(step - 1);
  };
  const handleCartremove = async (val) => {
    try {
      console.log(val);
      console.log(token.email);
      const removeresult = await axios.post(
        `${URL}/investment/remove/${token.email}`,
        {
          iid: val,
        }
      );
      if (removeresult) {
        console.log("remove sucess");
        window.location.reload();
      } else {
        console.log("remove failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const luxurycartItems = cartItems.filter(
  //   (cartItem) => cartItem.main_heading === "Luxury Property"
  // );
  // console.log(luxurycartItems);

  //handl

  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const handleAddcartItemClick = () => {
    // Navigate to the "Form" page
    navigate("/form");
  };
  return (
    <div>
      {/* LARGE SCREEN CODE BELOW badi */}
      {!isSmallScreen && (
        <Box style={{ padding: "30px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h4"
              style={{
                fontFamily: "Inter",
                padding: "0 10px 10px 0px",
                fontWeight: 600,
                justifyContent: "space-between",
                display: "flex",
                alignItems: "center",
              }}
            >
              My Cart
              {/* {
        isAdmin&&<CartButton onClick={handleAddcartItemClick} style={{
            marginTop:"15px",
          }}>Add cartItem</CartButton> 
      } */}
            </Typography>

            {cartItems.length === 0 ? (
              <Box></Box>
            ) : (
              <AddMoreLink
                to="/dashboard/properties"
                onClick={() => {
                  console.log("this is me");
                }}
              >
                <AddIcon />
                <Typography style={{ fontFamily: "Inter", fontWeight: 600 }}>
                  Add more
                </Typography>
              </AddMoreLink>
            )}
          </div>

          {cartItems?.length === 0 && (
            <EmptyCart>
              <Box
                style={{
                  border: "4px solid #cbe5ffb9",
                  padding: "20px",
                  borderRadius: "50%",
                  margin: "20px",
                }}
              >
                <ShoppingCartOutlinedIcon
                  style={{ fontSize: "48px", color: "#0170dc" }}
                />
              </Box>
              <Typography
                variant="h4"
                style={{
                  fontWeight: "600",
                  fontFamily: "Inter",
                  margin: "0 0 10px 0",
                }}
              >
                Your cart is empty
              </Typography>
              <Typography
                style={{
                  fontFamily: "Inter",
                  fontSize: "20px",
                  margin: "10px",
                }}
              >
                Looks like you haven't added any properties in your cart
              </Typography>
              <PropertyButton
                onClick={() => {
                  navigate("/dashboard/properties");
                }}
              >
                View properties
              </PropertyButton>
            </EmptyCart>
          )}

          {cartItems?.length != 0 && (
            <div
              style={{
                display: "flex",
                width: "100%",
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  width: "70%",
                  display: "flex",
                }}
              >
                <Grid
                  sx={{
                    width: "100%",
                  }}
                >
                  {cartItems.map((cartItem) => (
                    <div
                      key={cartItem._id}
                      style={{
                        width: "100%",
                      }}
                    >
                      <Grid
                        container
                        spacing={2}
                        sx={{
                          width: "100%",
                        }}
                      >
                        <Grid
                          item
                          xs={8}
                          sx={{
                            width: "100%",
                          }}
                        >
                          <PropertyDetails>
                            <Box
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                padding: "15px",
                                justifyContent: "space-between",
                              }}
                            >
                              <img
                                src={cartItem.image}
                                alt="propertyImage"
                                style={{
                                  width: "150px",
                                  height: "130px",
                                  borderRadius: "10px",
                                }}
                              />

                              <RemoveButton
                                onClick={() => {
                                  handleCartremove(cartItem.property);
                                }}
                              >
                                <DeleteOutlineIcon />
                                Remove
                              </RemoveButton>
                            </Box>

                            <Box
                              style={{
                                width: "100%",
                                padding: "15px",
                                height: "130px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-evenly",
                              }}
                            >
                              <Typography
                                style={{ fontWeight: "600", fontSize: "16px" }}
                              >
                                {cartItem.property}
                              </Typography>

                              <ThemeProvider theme={theme}>
                                <Box>
                                  <Typography
                                    style={{
                                      color: "rgb(112,111,111)",
                                      fontSize: "14px",
                                      fontFamily: "Inter",
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    Apply for{" "}
                                    {cartItem.type == 0
                                      ? "Allotment"
                                      : "Investement"}
                                    <Tooltip title={info} placement="top">
                                      <Typography
                                        style={{
                                          border: "1px solid rgb(112,111,111)",
                                          color: "rgb(112,111,111)",
                                          display: "inline",
                                          cursor: "pointer",
                                          padding: "0px 6px",
                                          marginLeft: "5px",
                                          borderRadius: "50%",
                                          fontSize: "10px",
                                        }}
                                      >
                                        i
                                      </Typography>
                                    </Tooltip>
                                  </Typography>
                                  <Typography
                                    style={{
                                      fontWeight: "600",
                                      fontFamily: "Inter",
                                    }}
                                  >
                                    RUP {cartItem.amount}{" "}
                                  </Typography>
                                </Box>
                              </ThemeProvider>

                              {/* <ThemeProvider theme={theme}>
              <Box>
                <Typography style={{ color: 'rgb(112,111,111)', fontSize: '14px', fontFamily: 'Inter', display: 'flex', alignItems: 'center' }}>
                  Appreciation

                  <Tooltip title={info1} placement="top">
                    <Typography style={{ border: '1px solid rgb(112,111,111)', color: 'rgb(112,111,111)', display: "inline", cursor: 'pointer', padding: '0px 6px', marginLeft: '5px', borderRadius: '50%', fontSize: '10px' }}>i</Typography>
                  </Tooltip>

                </Typography>
                <Typography style={{ fontWeight: '600', fontFamily: "Inter" }}>RUP 161</Typography>
              </Box>
            </ThemeProvider> */}
                            </Box>

                            {/* <Box style={{ display: 'flex', flexDirection: 'column', padding: '15px', justifyContent: 'space-evenly' }}> */}

                            {/* <Box style={{ display: 'flex', alignItems: 'center' }}>
              <Decrease onClick={() => decrease()} />
              <AmountField
                sx={{ m: 1, width: '20ch' }}
                defaultValue={cartItem.amount}
                value={quantity}
              />
              <Increase onClick={() => increase()} />
            </Box> */}

                            {/* <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
              <progress value={1500000} max={2000000} style={{ width: '40%' }} />
              <Typography style={{ fontFamily: 'Inter', paddingLeft: '10px', fontWeight: 600 }}>75% funded</Typography>
            </Box> */}

                            {/* </Box> */}
                          </PropertyDetails>
                        </Grid>

                        <Divider
                          sx={{ my: 1 }}
                          style={{ height: "2px", width: "100%" }}
                        />
                      </Grid>
                    </div>
                  ))}
                </Grid>
              </div>

              <Grid>
                <PaymentDetails>
                  {step == 0 && (
                    <>
                      <Box
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          padding: "10px 0",
                        }}
                      >
                        <Amount>Investment amount</Amount>
                        <Typography
                          variant="p"
                          style={{
                            fontFamily: "Gilroy-Medium",
                            justifyContent: "space-between",
                            display: "flex",
                            color: "gray",
                            alignItems: "center",
                            marginTop: "10px",
                          }}
                        >
                          Payments are processed immediately
                        </Typography>
                        <TextField
                          required
                          fullWidth
                          name="name"
                          value={`₹ ` + quantity}
                          type="text"
                          sx={{
                            width: "100%",
                            marginTop: "20px",
                            border: "2px solid  #90EE90",
                          }}
                        />

                        <Typography
                          style={{
                            color: "rgb(112,111,111)",
                            fontSize: "14px",
                            fontFamily: "Inter",
                            display: "flex",
                            alignItems: "center",
                            marginTop: "20px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              width: "100%",
                            }}
                          >
                            <Typography
                              style={{
                                width: "300px",
                              }}
                            >
                              VENQ Fee
                              <Tooltip title={info} placement="top">
                                <Typography
                                  style={{
                                    border: "1px solid rgb(112,111,111)",
                                    color: "rgb(112,111,111)",
                                    display: "inline",
                                    cursor: "pointer",
                                    padding: "2px 6px",
                                    marginLeft: "5px",
                                    borderRadius: "50%",
                                    fontSize: "10px",
                                  }}
                                >
                                  i
                                </Typography>
                              </Tooltip>
                            </Typography>

                            <Typography>₹{0.05 * quantity}</Typography>
                          </div>
                        </Typography>
                        <Typography
                          style={{
                            color: "rgb(112,111,111)",
                            fontSize: "14px",
                            fontFamily: "Inter",
                            display: "flex",
                            alignItems: "center",
                            marginTop: "20px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              width: "100%",
                            }}
                          >
                            <Typography
                              style={{
                                width: "300px",
                              }}
                            >
                              Amount Payable
                              <Tooltip title={info} placement="top">
                                <Typography
                                  style={{
                                    border: "1px solid rgb(112,111,111)",
                                    color: "rgb(112,111,111)",
                                    display: "inline",
                                    cursor: "pointer",
                                    padding: "2px 6px",
                                    marginLeft: "5px",
                                    borderRadius: "50%",
                                    fontSize: "10px",
                                  }}
                                >
                                  i
                                </Typography>
                              </Tooltip>
                            </Typography>

                            <Typography>₹{1.05 * quantity}</Typography>
                          </div>
                        </Typography>
                      </Box>
                      {onbcomp == 2 && (
                        <Box>
                          <PaymentButton
                            onClick={() => {
                              setStep(step + 2);
                            }}
                          >
                            Proceed
                          </PaymentButton>
                        </Box>
                      )}
                      {onbcomp != 2 && (
                        <Box>
                          <PaymentButton
                            onClick={() => {
                              nextStep();
                            }}
                          >
                            Proceed to payment
                          </PaymentButton>
                        </Box>
                      )}
                    </>
                  )}
                  {step == 1 && (
                    <>
                      <Box
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          padding: "10px 0",
                        }}
                      >
                        <Amount>Personal Information</Amount>
                        <Typography
                          variant="p"
                          style={{
                            fontFamily: "Inter",
                            justifyContent: "space-between",
                            display: "flex",
                            marginTop: "20px",
                            marginBottom: "20px",
                            color: "gray",
                            alignItems: "center",
                          }}
                        >
                          Required by Indian banking laws. This information is
                          kept secure. It will never be used for any purpose
                          beyond executing your transaction
                        </Typography>
                        {!onbcomp && (
                          <button
                            onClick={() => {
                              // nextStep();
                              navigate("/dashboard/profile");
                            }}
                          >
                            VERIFY MY IDENTITY
                          </button>
                        )}
                      </Box>
                      {/* <Box>
<PaymentButton onClick={}>Next</PaymentButton>
</Box> */}
                    </>
                  )}
                  {step == 2 && (
                    <>
                      <Terms />
                    </>
                  )}

                  {/* <Box>
<PaymentButton onClick={handlePayment}>Proceed to payment</PaymentButton>
</Box> */}
                </PaymentDetails>
              </Grid>
            </div>
          )}
        </Box>
      )}

      {/* SMALL SCREEN CODE BELOW choti  */}
      {isSmallScreen && (
        <Box style={{ padding: "15px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h4"
              style={{
                fontFamily: "Inter",
                padding: "0 10px 10px 0px",
                fontWeight: 600,
                justifyContent: "space-between",
                display: "flex",
                alignItems: "center",
              }}
            >
              My Cart
              {/* {
        isAdmin&&<CartButton onClick={handleAddcartItemClick} style={{
            marginTop:"15px",
          }}>Add cartItem</CartButton> 
      } */}
            </Typography>

            {cartItems.length === 0 ? (
              <Box></Box>
            ) : (
              <AddMoreLinkSmall
                to="/dashboard/properties"
                onClick={() => {
                  console.log("this is me");
                }}
              >
                <AddIcon />
                <Typography style={{ fontFamily: "Inter", fontWeight: 600 }}>
                  Add more
                </Typography>
              </AddMoreLinkSmall>
            )}
          </div>
          {cartItems?.length === 0 && (
            <EmptyCart>
              <Box
                style={{
                  border: "4px solid #cbe5ffb9",
                  padding: "20px",
                  borderRadius: "50%",
                  margin: "20px",
                }}
              >
                <ShoppingCartOutlinedIcon
                  style={{ fontSize: "48px", color: "#0170dc" }}
                />
              </Box>
              <Typography
                variant="h4"
                style={{
                  fontWeight: "600",
                  fontFamily: "Inter",
                  margin: "0 0 10px 0",
                }}
              >
                Your cart is empty
              </Typography>
              <Typography
                style={{
                  fontFamily: "Inter",
                  fontSize: "20px",
                  margin: "10px",
                }}
              >
                Looks like you haven't added any properties in your cart
              </Typography>
              <PropertyButton
                onClick={() => {
                  navigate("/dashboard/properties");
                }}
              >
                View properties
              </PropertyButton>
            </EmptyCart>
          )}
          {cartItems?.length != 0 && (
            <>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  marginTop: "20px",
                  marginLeft: "3%",
                }}
              >
                <Grid
                  sx={{
                    width: "100%",
                  }}
                >
                  {cartItems.map((cartItem) => (
                    <div
                      key={cartItem._id}
                      style={{
                        width: "100%",
                      }}
                    >
                      <Grid
                        container
                        spacing={2}
                        sx={{
                          width: "100%",
                        }}
                      >
                        <Grid
                          item
                          xs={8}
                          sx={{
                            width: "100%",
                          }}
                        >
                          <PropertyDetailsSmall>
                            <Box
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                padding: "15px",
                                justifyContent: "space-between",
                              }}
                            >
                              <img
                                src={cartItem.image}
                                alt="propertyImage"
                                style={{
                                  width: "150px",
                                  height: "130px",
                                  borderRadius: "10px",
                                }}
                              />

                              <RemoveButton
                                onClick={() => {
                                  handleCartremove(cartItem.property);
                                }}
                              >
                                <DeleteOutlineIcon />
                                Remove
                              </RemoveButton>
                            </Box>

                            <Box
                              style={{
                                width: "100%",
                                padding: "15px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-evenly",
                              }}
                            >
                              <Typography
                                style={{ fontWeight: "600", fontSize: "16px" }}
                              >
                                {cartItem.property}
                              </Typography>

                              <ThemeProvider theme={theme}>
                                <Box>
                                  <Typography
                                    style={{
                                      color: "rgb(112,111,111)",
                                      fontSize: "14px",
                                      fontFamily: "Inter",
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    Apply for{" "}
                                    {cartItem.type == 0
                                      ? "Allotment"
                                      : "Investement"}
                                    <Tooltip title={info} placement="top">
                                      <Typography
                                        style={{
                                          border: "1px solid rgb(112,111,111)",
                                          color: "rgb(112,111,111)",
                                          display: "inline",
                                          cursor: "pointer",
                                          padding: "0px 6px",
                                          marginLeft: "5px",
                                          borderRadius: "50%",
                                          fontSize: "10px",
                                        }}
                                      >
                                        i
                                      </Typography>
                                    </Tooltip>
                                  </Typography>
                                  <Typography
                                    style={{
                                      fontWeight: "600",
                                      fontFamily: "Inter",
                                    }}
                                  >
                                    RUP {cartItem.amount}{" "}
                                  </Typography>
                                </Box>
                              </ThemeProvider>

                              {/* <ThemeProvider theme={theme}>
                          <Box>
                            <Typography style={{ color: 'rgb(112,111,111)', fontSize: '14px', fontFamily: 'Inter', display: 'flex', alignItems: 'center' }}>
                              Appreciation
          
                              <Tooltip title={info1} placement="top">
                                <Typography style={{ border: '1px solid rgb(112,111,111)', color: 'rgb(112,111,111)', display: "inline", cursor: 'pointer', padding: '0px 6px', marginLeft: '5px', borderRadius: '50%', fontSize: '10px' }}>i</Typography>
                              </Tooltip>
          
                            </Typography>
                            <Typography style={{ fontWeight: '600', fontFamily: "Inter" }}>RUP 161</Typography>
                          </Box>
                        </ThemeProvider> */}
                            </Box>

                            {/* <Box style={{ display: 'flex', flexDirection: 'column', padding: '15px', justifyContent: 'space-evenly' }}> */}

                            {/* <Box style={{ display: 'flex', alignItems: 'center' }}>
                          <Decrease onClick={() => decrease()} />
                          <AmountField
                            sx={{ m: 1, width: '20ch' }}
                            defaultValue={cartItem.amount}
                            value={quantity}
                          />
                          <Increase onClick={() => increase()} />
                        </Box> */}

                            {/* <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                          <progress value={1500000} max={2000000} style={{ width: '40%' }} />
                          <Typography style={{ fontFamily: 'Inter', paddingLeft: '10px', fontWeight: 600 }}>75% funded</Typography>
                        </Box> */}

                            {/* </Box> */}
                          </PropertyDetailsSmall>
                        </Grid>

                        <Divider
                          sx={{ my: 1 }}
                          style={{ height: "2px", width: "100%" }}
                        />
                      </Grid>
                    </div>
                  ))}
                </Grid>
              </div>
              <Grid>
                <PaymentDetailsSmall>
                  {step == 0 && (
                    <>
                      <Box
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          padding: "10px 0",
                        }}
                      >
                        <Amount>Investment amount</Amount>
                        <Typography
                          variant="p"
                          style={{
                            fontFamily: "Gilroy-Medium",
                            justifyContent: "space-between",
                            display: "flex",
                            color: "gray",
                            alignItems: "center",
                            marginTop: "10px",
                          }}
                        >
                          Payments are processed immediately
                        </Typography>
                        <TextField
                          required
                          fullWidth
                          name="name"
                          value={`₹ ` + quantity}
                          type="text"
                          sx={{
                            width: "100%",
                            marginTop: "20px",
                            border: "2px solid  #90EE90",
                          }}
                        />

                        <Typography
                          style={{
                            color: "rgb(112,111,111)",
                            fontSize: "14px",
                            fontFamily: "Inter",
                            display: "flex",
                            alignItems: "center",
                            marginTop: "20px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              width: "100%",
                            }}
                          >
                            <Typography
                              style={{
                                width: "300px",
                              }}
                            >
                              VENQ Fee
                              <Tooltip title={info} placement="top">
                                <Typography
                                  style={{
                                    border: "1px solid rgb(112,111,111)",
                                    color: "rgb(112,111,111)",
                                    display: "inline",
                                    cursor: "pointer",
                                    padding: "0px 6px",
                                    marginLeft: "5px",
                                    borderRadius: "50%",
                                    fontSize: "10px",
                                  }}
                                >
                                  i
                                </Typography>
                              </Tooltip>
                            </Typography>

                            <Typography>₹{0.05 * quantity}</Typography>
                          </div>
                        </Typography>
                        <Typography
                          style={{
                            color: "rgb(112,111,111)",
                            fontSize: "14px",
                            fontFamily: "Inter",
                            display: "flex",
                            alignItems: "center",
                            marginTop: "20px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              width: "100%",
                            }}
                          >
                            <Typography
                              style={{
                                width: "300px",
                              }}
                            >
                              Amount Payable
                              <Tooltip title={info} placement="top">
                                <Typography
                                  style={{
                                    border: "1px solid rgb(112,111,111)",
                                    color: "rgb(112,111,111)",
                                    display: "inline",
                                    cursor: "pointer",
                                    padding: "0px 6px",
                                    marginLeft: "5px",
                                    borderRadius: "50%",
                                    fontSize: "10px",
                                  }}
                                >
                                  i
                                </Typography>
                              </Tooltip>
                            </Typography>

                            <Typography>₹{1.05 * quantity}</Typography>
                          </div>
                        </Typography>
                      </Box>
                      {onbcomp == 2 && (
                        <Box>
                          <PaymentButton
                            onClick={() => {
                              setStep(step + 2);
                            }}
                          >
                            Proceed
                          </PaymentButton>
                        </Box>
                      )}
                      {onbcomp != 2 && (
                        <Box>
                          <PaymentButton
                            onClick={() => {
                              nextStep();
                            }}
                          >
                            Proceed
                          </PaymentButton>
                        </Box>
                      )}
                    </>
                  )}
                  {step == 1 && (
                    <>
                      <Box
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          padding: "10px 0",
                        }}
                      >
                        <Amount>Personal Information</Amount>
                        <Typography
                          variant="p"
                          style={{
                            fontFamily: "Inter",
                            justifyContent: "space-between",
                            display: "flex",
                            marginTop: "20px",
                            marginBottom: "20px",
                            color: "gray",
                            alignItems: "center",
                          }}
                        >
                          Required by Indian banking laws. This information is
                          kept secure. It will never be used for any purpose
                          beyond executing your transaction
                        </Typography>

                        <button
                          onClick={() => {
                            // nextStep();
                            navigate("/dashboard/profile");
                          }}
                        >
                          verify my identity
                        </button>
                      </Box>
                      {/* <Box>
                    <PaymentButton onClick={}>Next</PaymentButton>
                  </Box> */}
                    </>
                  )}
                  {step == 2 && (
                    <>
                      <Box
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          padding: "10px 0",
                          fontSize: "12px",
                        }}
                      >
                        <Amount>Terms</Amount>
                        <TermDetailsSmall>
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
                            }}
                          >
                            I understand that VENQ will receive a cash and
                            securities commission as further detailed in the
                            offering documens
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
                            }}
                          >
                            I understand I will have voting rights just for
                            selling of my own share or selling the property
                            after the holding period is over and will grant a
                            third-party nominee broad authority to act on my
                            behalf.
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
                            }}
                          >
                            I understand I will become a beneficial owner of
                            equity interest in the Company.
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
                            }}
                          >
                            I understand that investing this amount into several
                            deals would better diversify my risk
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
                            }}
                          >
                            I understand that there is no guarantee of a
                            relationship between VENQ and the Developer
                            post-offering
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
                            }}
                          >
                            I consent to electronic delivery of all documents,
                            notices and agreements as related to my investment
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
                            }}
                          >
                            I understand my investment won't be transferable for
                            next 2 months and may not have a market for resale
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
                            }}
                          >
                            I have read the educational materials and agree to
                            the Terms of Service, including arbitration
                            provisions
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
                            }}
                          >
                            I understand this investment is risky and that I
                            shouldn't invest unless I can afford to lose all
                            invested funds
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
                            }}
                          >
                            I understand I am responsible for all fees and
                            charges associated with the use of my payment method
                          </Typography>
                        </TermDetailsSmall>

                        {/* <FormControlLabel control={<Checkbox defaultChecked />} label="Label" /> */}
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
                            Proceed to Payment
                          </PaymentButton>
                        </Box>
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
                    </>
                  )}

                  {/* <Box>
                    <PaymentButton onClick={handlePayment}>Proceed to payment</PaymentButton>
                  </Box> */}
                </PaymentDetailsSmall>
              </Grid>
            </>
          )}
        </Box>
      )}
    </div>
  );
};

export default Properties;
