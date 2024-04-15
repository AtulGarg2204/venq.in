import React, { useEffect, useState } from "react";
import "./Signup.css";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../redux/actions/user";
import { Box, Typography, styled } from "@mui/material";
import Verification from "./Verification";

const FormBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "80%",
  margin: "5px 0",
  [theme.breakpoints.down("sm")]: {
    width: "100%", // Adjust the width for smaller screens
    margin: "2px 0",
  },
}));
<script
  type="text/javascript"
  id="hs-script-loader"
  async
  defer
  src="//js.hs-scripts.com/45720526.js"
></script>;

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const { userDetails, signupError, userToken } = useSelector(
    (state) => state.auth
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      toast.error("Enter your Name");
    } else if (email === "") {
      toast.error("Enter your Email");
    } else if (!email.includes("@")) {
      toast.error("Enter a valid Email");
    } else if (password === "") {
      toast.error("Enter your Password");
    } else if (phone === "") {
      toast.error("Enter your Phone number");
    } else if (phone.length != 10) {
      toast.error("Phone number should be of 10 digits");
    } else if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
    } else {
      dispatch(signup(name, email, password, phone));
    }
  };

  useEffect(() => {
    if (signupError) {
      toast.error("User already exists in the database");
      setName("");
      setEmail("");
      setPassword("");
      setPhone("");
    } else if (userDetails) {
      toast.success("Verification code sent to the email!");
      localStorage.setItem("details", userToken);
      setTimeout(() => {
        navigate("/signup/verify");
      }, 3000);
      setStep(2);
    }
  }, [signupError, userDetails, navigate, userToken]);

  return (
    <div>
      <div className="signup-container">
        {step === 1 && (
          <>
            <div className="signup-form">
              <div className="signup-form-container">
                <Typography variant="h4">Join VENQ</Typography>

                <form onSubmit={handleSubmit}>
                  <FormBox>
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      className="signup-box"
                      placeholder="Enter your name"
                      autoComplete="off"
                      value={name}
                      name="name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </FormBox>

                  <FormBox>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="signup-box"
                      placeholder="Enter your email"
                      autoComplete="off"
                      value={email}
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormBox>

                  <FormBox>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="signup-box"
                      placeholder="Enter your password"
                      autoComplete="off"
                      value={password}
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormBox>
                  <FormBox>
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="text"
                      className="signup-box"
                      placeholder="Enter your phone number"
                      autoComplete="off"
                      value={phone}
                      name="phone"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </FormBox>

                  <button type="submit" className="signup-button">
                    Sign Up
                  </button>
                </form>

                <Typography variant="h6">
                  Already a member? <Link to="/login">Sign In</Link>
                </Typography>

                <div className="progressBar">
                  <progress value={step} max={2} />
                  <Typography variant="h6">
                    Step <p>{step}</p> of <p>2</p>
                  </Typography>
                </div>
              </div>
            </div>

            <div className="signup-image">
              <img src="/images/VENQ_BOLD_Big.png" alt="logo" />
              <div className="text">
                <Typography variant="h2">Say hello</Typography>
                <Typography variant="h2">to passive income</Typography>
              </div>
            </div>
          </>
        )}

        <ToastContainer />
        {step === 2 && (
          <Routes>
            <Route
              path="verify"
              element={<Verification step={step} setStep={setStep} />}
            />
          </Routes>
        )}
      </div>
    </div>
  );
};

export default Signup;
