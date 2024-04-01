import React, { useEffect, useState } from "react";
import "./Login.css";
import { Box, Divider, Typography, styled, useMediaQuery } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/user";
import { margin } from "@mui/system";
import LoadingSpinnerComponent from 'react-spinners-components';

const Back = styled(Box)`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;
const LoginCard = styled(Box)(({ theme }) => ({
  marginTop: "1%",
  width: "40%",
  height: "80%",
  zIndex: 8,
  boxShadow: "0px 2px 10px 0px black",
  backgroundColor: "white",
  borderRadius: "10px",
  [theme.breakpoints.down("sm")]: {
    marginTop:"10%",
    width: "80%", // Adjust the width for small screens
    height: "auto"
  },
}));
const LowerPart = styled(Box)(({ theme }) => ({
  width: "100%",
  textAlign: "center",
  position: "absolute",
  top: "60%",
  left: " 0%",
  height: "40%",
  backgroundColor: "#121c30",
  color: "white",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    marginBottom:  "20px"
    
  },
}));
const Line = styled(Divider)`
  background-color: #121c30;
  width: 105%;
  transform: rotate(-5deg);
  height: 20%;
  position: absolute;
  top: 50%;
  left: 0%;
`;
const SubText = styled(Typography)`
  font-size: 22px;
  font-weight: 500;
  line-height: 24px;
  font-family: "Bebes Neue";
  font-style: normal;
`;
const SmallText = styled(Typography)`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  font-family: "Bebes Neue";
  font-style: normal;
  padding: 10px;
`;
const Forgotpassword = styled(Typography)`
  font-size: 22px;
  color: #0170dc;
  padding-bottom:30px;
  ${(props) => props.theme.breakpoints.down("sm")} {
    padding-top: 0px; // Use margin-bottom instead of marginBottom
  }
`;
const Terms = styled(Typography)`
  font-size: 13px;
  color: #bbb3bc;
  padding: 10px;

  & a {
    color: #bbb3bc;
  }
  & a:hover {
    color: #0170dc;
  }
`;

const Login = () => {
  useEffect(() => {
    window.otpless = (otplessUser) => {
     alert(JSON.stringify(otplessUser));
    };
   }, []);
              
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { loginMessage, userToken, error } = useSelector((state) => state.auth);
  const [loggedInState, setloggedInState] = useState(false)
  const { localStorage } = window;

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "") {
      toast.error("Enter your email!!");
    } else if (!email.includes("@")) {
      toast.error("Enter valid email !");
    } else if (password === "") {
      toast.error("Enter your password!!");
    } else if (password.length < 6) {
      toast.error("Enter correct password!!");
    } else {
      setloggedInState(true);
      dispatch(login(email, password));
    }
  };

  // const userDetails = ["kagithasri@iitbhilai.ac.in","kagitha"]
  useEffect(() => {
    if (error) {
      toast.error("Please enter registered email or password");
      setEmail("");
      setPassword("");
      navigate("/login");
      toast.dismiss(); // Clear all toasts when component unmounts
    } else if (loginMessage) {
      localStorage.setItem("details", userToken);
      navigate("/dashboard/properties");
      toast.dismiss(); // Clear all toasts when component unmounts
    }
  }, [error, loginMessage, navigate, userToken]);

  const isSmallScreen = useMediaQuery("(max-width:600px)");
  return (
    <div>

          {loggedInState===true?      <LoadingSpinnerComponent type={ 'Infinity' } color={ 'blue' } size={ '200px' } marginTop={'500px'} />:
          <>
                <Back>
              <LoginCard>
              <div className="imageLogo">
              <img src="images\VENQ_BOLD_Big.png" alt="logo" />
            </div>
            <form className="form">
              <div className="email">
                <label htmlFor="email">Email Address</label>
                <br></br>
                <input
                  type="email"
                  name="email"
                  className="login-details"
                  placeholder="E.g: yourname@company.com"
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
  
              <div className="password">
                <label htmlFor="password">Password</label>
                <br></br>
                <input
                  type="password"
                  name="password"
                  className="login-details"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
  
              <button
                type="submit"
                className="login-button"
                onClick={handleLogin}
              >
                Login
              </button>
            </form>
  
            <div className="terms">
              {/* <Forgotpassword>Forgot Password</Forgotpassword> */}
              <Terms>
                By clicking Log In you agree to VenQ's{" "}
                <Link to="/">Terms & Conditions</Link> and{" "}
                <Link to="/">Key Risks</Link>{" "}
              </Terms>
            </div>
          </LoginCard>
  
          <div className="container">
            {/* <Line /> */}
            <LowerPart>
              <SubText>
                Don't have an account ?{" "}
                <Link to="/signup" className="subtext">
                  Join us today
                </Link>
              </SubText>
            </LowerPart>
          </div>
        </Back>
        <ToastContainer />
      </>
          }
      </div>
          
  );
};

export default Login;
