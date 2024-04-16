import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
// import toast, { Toaster } from 'react-hot-toast';
// import { PhoneInput } from 'react-international-phone';
import {
  BaseTextFieldProps,
  InputAdornment,
  MenuItem,
  Select
 } from "@mui/material";
 import {
  CountryIso2,
  defaultCountries,
  FlagImage,
  parseCountry,
  usePhoneInput
 } from "react-international-phone";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './Otp.css';
import Link from '@mui/material/Link';
import toast, { Toaster } from 'react-hot-toast';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import config from '../../config';
import Otp from "./Otp"
const defaultTheme = createTheme();
export default function SignUp() {
  const URL=config.URL;
  const navigate=useNavigate();
  const [mf,setmf]=useState(false);
  const [ef,setef]=useState(false);
    const [visible, setVisible] = useState(false)
    const [visibleone, setVisibleone] = useState(false)
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    // toggle for popup
    const togglePopup = () => {
        setVisible(!visible)
      }
    const togglePopupone = () => {
        setVisibleone(!visibleone);
      }
      
      const handleSubmit = () => {
        let data=sd.tbs;
    // const data = new FormData(event.currentTarget);
    if(name){
      data={...data,name:name};
    }
    if(phoneval){
      data={...data,phone:phoneval.substring(1)};
      
    }
    if(email){
      data={...data,email:email};
    }
    // console.log(data);
    axios.post(`${URL}/otpless/signup`,data).then((result)=>{
      // console.log(result.data.userinfo);
        localStorage.setItem("userinfo", JSON.stringify(result.data.userinfo));
        navigate('/dashboard/properties');
      }).catch((error)=>{
        console.log('error in post');
        console.log(error);
      })
    };
    const handleOtpsendmail=()=>{
      let data=sd.tbs;
      const ds={
        mobile:data.phone,
        email:email,
        channel:1
      }
      const isValidEmail = emailRegex.test(email);
    // console.log(ds);
    if(!isValidEmail){
      notifyMail();
      return;
    }
    axios.post(`${URL}/otpless/otp/send`,ds).then((result)=>{
      console.log(result.data);
      setoid(result.data.data.orderId);
      console.log('otpsentsucessfully');
      togglePopupone();
    }).catch((error)=>{
      console.log('error in sending sms otp');
      console.log(error);
    })
  }
  const handleOtpsend=()=>{
    let data=sd.tbs;
    const ds={
      mobile:phoneval.substring(1),
      email:data.email,
      channel:0
    }
    // console.log(ds);
    if(phoneval.substring(1).length!=12){
      notifyMobile();
      return;
    }
    axios.post(`${URL}/otpless/otp/send`,ds).then((result)=>{
      console.log(result.data);
      setoid(result.data.data.orderId);
      console.log('otpsentsucessfully');
      togglePopup();
    }).catch((error)=>{
      console.log('error in sending sms otp');
      console.log(error);
    })
  }
  const handleOtpresend=()=>{
    let data=sd.tbs;
    axios.post(`${URL}/otpless/otp/resend`,{
      orderId:oid,
    }).then((result)=>{
      console.log(result.data);
      console.log('otpresentsucessfully');
      notifyResend();
    }).catch((error)=>{
      console.log('error in sending sms otp');
      console.log(error);
    })
  }
  const handleOtpverify=()=>{
    let data=sd.tbs;
    const fotp=otp.join('');
    const datatosend={
      email:data.email,
      mobile:phoneval.substring(1),
      orderId:oid,
      otp:fotp,
    };
    if(otp.join('').split('').length != otp.length) {                      
      notifyOtp();
      return;
    } 
    // console.log(datatosend);
    axios.post(`${URL}/otpless/otp/verify`,datatosend).then((result)=>{
      if(result.data.isOTPVerified){
        console.log('verified sucessfully');
        setmf(true);
        notifyFullOtp();
        handleSubmit();
      }else{
        console.log('invalid otp');
        notifyWrongotp();
        // togglePopup();
        navigate('/login');
      }
      // console.log(result.data);

    }).catch((error)=>{
      console.log('error in sending sms otp');
      console.log(error);
    })
  }
  const handleOtpverifymail=()=>{
    let data=sd.tbs;
    const fotp=otp.join('');
    const datatosend={
      email:email,
      mobile:data.phone,
      orderId:oid,
      otp:fotp,
    };
    if(otp.join('').split('').length != otp.length) {                      
      notifyOtp();
      return;
    } 
    // console.log(datatosend);
    axios.post(`${URL}/otpless/otp/verify`,datatosend).then((result)=>{
      if(result.data.isOTPVerified){
        console.log('verified sucessfully');
        setef(true);
        notifyFullOtp();
        handleSubmit();
      }else{
        console.log('invalid otp');
        notifyWrongotp();
        // togglePopup();
        navigate('/login');
      }
    }).catch((error)=>{
      console.log('error in sending sms otp');
      console.log(error);
    })
  }
   // toast notification for incorrect phone number
   const notifyMobile = () => toast.error(`please enter a valid Mobile number`)
   const notifyMail = () => toast.error(`please enter a valid Email id`)
  const location = useLocation();
  const sd = location.state;
  const [name,setName]=useState('');
  const [phoneval,setPhone]=useState('');
  // const [otp,setOtp]=useState('');
  const [oid,setoid]=useState('');
  const [email,setEmail]=useState('');
  const phonereq=sd.reqd.includes("phone");
  const namereq=sd.reqd.includes("name");
  const emailreq=sd.reqd.includes("email");
  
  const [otp, setOtp] = useState(["", "", "", "", "", ""])

  const newOtp = [...otp];



  const proceed=()=>{

    if(emailreq && email!=''){
      if(namereq && name!=''){

        handleSubmit();
      }
      else if(!namereq){
        handleSubmit();
      }
      // navigate('/dashboard/properties');
    }
  }



  // handle changes while entering OTP
   const handleChange = (index, value) => {
      if (value.length > 1) {
        value = value.charAt(0);
      }

      if(isNaN(value)) return false;
  
      newOtp[index] = value;
      setOtp(newOtp);

      if (value.length === 1 && index < otp.length - 1) {
          const nextInput = document.getElementById(`otp-${index + 1}`);
          if (nextInput) {
            nextInput.focus();
          }
        }
    };
  
    // handle changes while pressing backspace and arrow key
    const handleKeyDown = (index, event) => {
      if (event.key === 'Backspace' && index > 0 && otp[index] === '') {
          newOtp[index] = "";
        const previousInput = document.getElementById(`otp-${index - 1}`)
        if (previousInput) {
          previousInput.focus();
        }
      } else if (event.key === 'ArrowLeft') {
        
          const currentInput = document.getElementById(`otp-${index}`)
          if(currentInput.selectionStart === 0) {
              const previousInput = document.getElementById(`otp-${index - 1}`);
              if (previousInput) {
              previousInput.focus();
          }
        }
      } else if (event.key === 'ArrowRight' && index < otp.length - 1) {
          
          const currentInput = document.getElementById(`otp-${index}`)
          if(currentInput.selectionStart === currentInput.value.length) {
              const nextInput = document.getElementById(`otp-${index + 1}`)
              if (nextInput) {
              nextInput.focus();
              }
          }
      
      }
    };

    // handle changes while pasting inside the otp input field
    const handlePaste = (event) => {
      event.preventDefault();
      const clipboardData = event.clipboardData || window.clipboardData;
      const pastedData = clipboardData.getData("text");
      if(/^\d+$/.test(pastedData)) {
          const digits = pastedData.split("").slice(0, otp.length);
  
      digits.forEach((digit, index) => {
        newOtp[index] = digit;
      });
      
      setOtp(newOtp);
      }
    };



    // toast notifications
    const notifyResend = () => toast.success(`OTP sent to ${phoneval}`);
  //   console.log(otp);

    const notifyFullOtp = () => toast.success(`OTP ${otp.join('')} verified`)
    const notifyWrongotp = () => toast.error(`invalid OTP entered`)
    const notifyOtp = () => toast.error(`Kindly write all 6 digits of OTP`)



    const {
      phone,
      handlePhoneValueChange,
      inputRef,
      country,
      setCountry
   } = usePhoneInput({
      defaultCountry: "in",
      value:"+91",
      countries: defaultCountries,
      onChange: (data) => {
        setPhone(data.phone);
      }
   });


   const [cc,setCC]=useState("");
  //  console.log(phoneval);
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {visible &&  <>
            <div className="main-otp-div popup">
              <div className='backarrow'>
                  <div style={{
                    paddingLeft:'10px',
                    paddingRight:'10px',
                    paddingBottom:'5px',
                    paddingTop:'5px'
                  }}>
              <img src="images/backarrow.png" height={32} width={32} alt="" onClick={togglePopup} style={{
                cursor:'pointer'
              }} />
                  </div>
              </div>
                {/* <div style={{
                  backgroundColor:'green'
                }}>
                    <button className="close" onClick={togglePopup}>
                    </button>
                </div> */}
                <div>
                  <img src="images/otpicon.png" height={72} width={72} alt="" />
                </div>
                <div>
                    <p style={
                      {
                        fontSize:'1rem'
                      }
                    }>Enter OTP sent to mobile number </p>
                    <p style={
                       {
                        fontSize:'14px',
                        textAlign:'center'
                      }
                    }>#{phoneval}</p>
                </div>  
                <div className="otp-div">
                    {
                      otp.map((digit, index) => (
                        <div className="otp-child-div" key={index}>
                                <input
                                    key={index}
                                    type="text"
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    onPaste={handlePaste}
                                    id={`otp-${index}`}
                                    className="otp-input"
                                    />
                            </div>
                        ))
                    }
                </div>
                <div className="otp-links">
                    {/* <div onClick={togglePopup} style={{cursor: "pointer", color: "rgb(39, 89, 205)", fontWeight: "bold"}}>
                        Change Number
                    </div> */}
                    <div onClick={handleOtpresend} style={{cursor: "pointer", color: "rgb(39, 89, 205)", fontWeight: "bold"}}>
                        Re-send OTP
                    </div>
                </div>
                <div>
                    <button className="otp-btn" onClick={handleOtpverify}>Verify Phone Number</button>
                </div>
                <Toaster />
            </div>
        </>}
        {visibleone &&  <>
            <div className="main-otp-div popup">
                <div className='backarrow'>
                  <div style={{
                    paddingLeft:'10px',
                    paddingRight:'10px',
                    paddingBottom:'5px',
                    paddingTop:'5px'
                  }}>
              <img src="images/backarrow.png" height={32} width={32} alt="" onClick={togglePopup} style={{
                cursor:'pointer'
              }} />
                  </div>
              </div>
                <div>
                  <img src="images/otpiconmail.png" height={72} width={72} alt="" />
                </div>
                {/* <div>
                    <h1>Phone Verification</h1>
                </div> */}
                <div>
                    <p style={
                      {
                        fontSize:'1rem'
                      }
                    }>Enter the OTP sent to mail </p>
                </div>
                <div className="otp-div">
                    {
                      otp.map((digit, index) => (
                        <div className="otp-child-div" key={index}>
                                <input
                                    key={index}
                                    type="text"
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    onPaste={handlePaste}
                                    id={`otp-${index}`}
                                    className="otp-input"
                                    />
                            </div>
                        ))
                    }
                </div>
                <div className="otp-links">
                    {/* <div onClick={togglePopup} style={{cursor: "pointer", color: "rgb(39, 89, 205)", fontWeight: "bold"}}>
                        Change Email
                    </div> */}
                    <div onClick={handleOtpresend} style={{cursor: "pointer", color: "rgb(39, 89, 205)", fontWeight: "bold"}}>
                        Re-send OTP
                    </div>
                </div>
                <div>
                    <button className="otp-btn" onClick={handleOtpverifymail}>Verify Email id</button>
                </div>
                <Toaster />
            </div>
        </>}
        <Box
          sx={{
            marginTop: 8,
            padding:'20px',
            
            visibility:visible||visibleone?'hidden':'visible',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow:'0 1px 2px 0 rgba(65,69,73,.3), 0 3px 6px 2px rgba(65,69,73,.15)',
          }}
        >
            <img src="images/loginlogo.png" alt="" style={{
              height:'70px',
              maxHeight:'70px',
              width:'100px',
              objectFit:'contain'
            }} />
          <Typography component="h1" variant="h5" style={{
            fontSize:'1.5rem',
            textAlign:'center',
            fontWeight:'bold',
            marginTop:'10px',
            marginBottom:'10px'
          }}>
            VENQ
          </Typography>
          <Typography component="h1" variant="h5" sx={{
            fontSize:'18px',
            fontWeight:'400',
            textAlign:'center',
            marginBottom:'20px',
            width:'100%'
          }}>
            Sign up
          </Typography>
          
          <Box  noValidate  sx={{ mt: 3 ,
          width:'100%'}}>
            <Grid container spacing={2}>
            {namereq &&
                     <Grid item xs={12}>
                     <TextField
                       required
                       fullWidth
                       name="name"
                       value={name}
                       onChange={(event)=>{
                        setName(event.target.value);
                       }}
                       label="Enter your name"
                       type="text"
                       sx={{
                        width:'100%'
                       }}
                     />
                   </Grid>
                }
                 {emailreq &&
                     <Grid item xs={12}>
                     <TextField
                       required
                       fullWidth
                       name="email"
                       value={email}
                       onChange={(event)=>{
                        setEmail(event.target.value);
                       }}
                       label="Enter your email"
                       type="text"
                       sx={{
                        width:'100%'
                       }}
                     />
                      <Button
              fullWidth
              variant="contained"
              onClick={proceed}
              // disabled={!ef}
              sx={
                { mt: 3, mb: 2,
            cursor:'pointer ',
            visibility:ef || visibleone?"hidden":"visible",
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            padding:'16px',
            borderRadius:'12px',
            position:'relative',
            flexWrap:'nowrap',
            gap:'8px',
            opacity:'1',
            transition:' all 0.25s ease-in-out 0s',
            fontSize:'1rem',
            color:'white'
        }}
        >
              Proceed
            </Button>
                   </Grid>
                }
                {/* {phonereq && 
                <PhoneInput
                defaultCountry="ua"
                value={phone}
                onChange={(phone) => setPhone(phone)}
              />
        } */}
        {phonereq && 
          <Grid item xs={12}>
         <TextField
         variant="outlined" 
         label='Phone number'
         placeholder='Enter your phone number'
         color="primary"
         value={phone}
         onChange={handlePhoneValueChange}
         type="tel"
         sx={
          {
            width:'100%'
          }
         }
         inputRef={inputRef}
         InputProps={{
           startAdornment: (
             <InputAdornment
               position="start"
               style={{ marginRight: "2px", marginLeft: "-8px" }}
             >
               <Select
                 MenuProps={{
                   style: {
                    height: "200px",
                    width: "300px",
                    top: "10px",
                    left: "-34px"
                   },
                   transformOrigin: {
                    vertical: "top",
                    horizontal: "left"
                   }
                 }}
                 sx={{
                   width: "max-content",
                   fieldset: {
                    display: "none"
                   },
                   '&.Mui-focused:has(div[aria-expanded="false"])': {
                    fieldset: {
                       display: "block"
                    }
                   },
                   ".MuiSelect-select": {
                    padding: "8px",
                    paddingRight: "24px !important"
                   },
                   svg: {
                    right: 0
                   }
                 }}
                 value={country}
                 onChange={(e) => setCountry(e.target.value)}
                 renderValue={(value) => (
                   country.name
                 )}
               >
                 {defaultCountries.map((c) => {
                   const country = parseCountry(c);
                   return (
                    <MenuItem key={country.iso2} value={country.iso2}>
                       <FlagImage
                       height={30}
                       width={30}
                         iso2={country.iso2}
                         style={{ marginRight: "8px" }}
                       />
                       <Typography marginRight="8px">{country.name}</Typography>
                       <Typography color="gray">+{country.dialCode}</Typography>
                    </MenuItem>
                   );
                 })}
               </Select>
             </InputAdornment>
           )
         }}
       />
       <Button
              fullWidth
              variant="contained"
              onClick={handleOtpsend}
              // disabled={!mf}
              sx={
                { mt: 3, mb: 2,
            cursor:'pointer ',
            display:'flex',
            alignItems:'center',
            visibility:mf||visible?"hidden":"visible",
            justifyContent:'center',
            padding:'16px',
            borderRadius:'12px',
            position:'relative',
            flexWrap:'nowrap',
            gap:'8px',
            opacity:'1',
            transition:' all 0.25s ease-in-out 0s',
            fontSize:'1rem',
            color:'white'
        }}
        >
              Send OTP
            </Button>
             
                <Toaster />
                </Grid>
        }
                {/* {phonereq &&
                     <Grid item xs={12}>
                     <TextField
                       required
                       fullWidth
                       name="phone"
                       value={phoneval}
                       onChange={(event)=>{
                        setPhone(event.target.value);
                       }}
                       label="Enter your phone"
                       type="text"
                       sx={{
                        width:'100%'
                       }}
                     />
                      <Button
              fullWidth
              variant="contained"
              onClick={handleOtpsend}
              // disabled={!mf}
              sx={
                { mt: 3, mb: 2,
            cursor:'pointer ',
            display:'flex',
            alignItems:'center',
            visibility:mf||visible?"hidden":"visible",
            justifyContent:'center',
            padding:'16px',
            borderRadius:'12px',
            position:'relative',
            flexWrap:'nowrap',
            gap:'8px',
            opacity:'1',
            transition:' all 0.25s ease-in-out 0s',
            fontSize:'1rem',
            color:'white'
        }}
        >
              Send OTP
            </Button>
             
                <Toaster />
                     {/* <button onClick={handleOtpresend}>Resend otp</button>
                     <TextField
                       required
                       fullWidth
                       name="otp"
                       value={otp}
                       onChange={(event)=>{
                        setOtp(event.target.value);
                       }}
                       label="Enter recieved otp"
                       type="text"
                       sx={{
                        width:'100%'
                       }}
                     />
                     <button onClick={handleOtpverify}>Verify otp</button> */}
                   {/* </Grid>
                } */} 
               
                
              {/* <Grid item xs={12} sm={6}>
                
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid> */}
            </Grid>
            {/* <Button
              disabled={(namereq && name.length==0 )|| (emailreq && email.length==0 )||(phonereq && phone.length==0)}
              fullWidth
              variant="contained"
              onClick={handleSubmit}
              sx={
                { mt: 3, mb: 2,
            cursor:'pointer ',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            padding:'16px',
            borderRadius:'12px',
            position:'relative',
            visibility:!mf||visible?"hidden":"visible",
            flexWrap:'nowrap',
            gap:'8px',
            opacity:'1',
            transition:' all 0.25s ease-in-out 0s',
            fontSize:'1rem',
            color:'white'
        }}
            >
              Sign Up
            </Button> */}
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
  );
}