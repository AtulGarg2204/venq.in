import React, { useEffect, useState } from "react";
import {
  useTheme,
  useMediaQuery,
  Button,
  Divider,
  TextField,
} from "@mui/material";
import jwtDecode from "jwt-decode";
import axios from "axios";
import config from "../../../config";
import { ToastContainer, toast } from "react-toastify";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Toaster } from "react-hot-toast";
import otpimage from "./otpicon.png";
import backimage from "./backarrow.png";
import MultiStep from "./Multistep";
import DocumentUploader from "../listings/DocumentUploader";

import "./multistep.css";
function UserInfoItem({ userName, lastSeen, role }) {
  return (
    <div className="user-info">
      <div className="user-info-text">
        <div className="user-name">{userName}</div>
        <div className="last-seen">{lastSeen}</div>
      </div>
      <div className="role">{role}</div>
    </div>
  );
}

// function SideBarItem({ imgSrc, imgAlt, text }) {
//   return (
//     <div className="sidebar-item">
//       <div className="icon-wrapper">
//         <img loading="lazy" src={imgSrc} alt={imgAlt} className="icon" />
//       </div>
//       <div className="sidebar-item-text">{text}</div>
//     </div>
//   );
// }
<script
  type="text/javascript"
  id="hs-script-loader"
  async
  defer
  src="//js.hs-scripts.com/45720526.js"
></script>;

function Dashboard() {
  const token = JSON.parse(localStorage.getItem("userinfo"));
  var arr;
  const [aad, setAad] = useState("");
  const [pan, setPan] = useState("");

  const acarr = ["Current", "Saving", "NRI", "Recurring Deposit"];

  const [visible, setVisible] = useState(false);
  const [visibleone, setVisibleone] = useState(false);
  const [otpss, setotpss] = useState(false);
  const [cid, setCid] = useState("");
  const [banknsme, setbankanme] = useState("");
  const [acno, setacno] = useState("");
  const [ifsccode, setifsccode] = useState("");
  const [dl, sdl] = useState("");
  const [actype, setactype] = useState(100);
  const [adata, setadata] = useState({});
  const [pdata, setpdata] = useState({});
  const [cfadd, setCfaad] = useState("");
  const [kycdata, setkycdata] = useState({});
  const [onbcomp, setonbcomp] = useState(0);
  const [step, setStep] = useState(0);

  const [currentStep, setCurrentStep] = useState(1);

  const updateSteps = (step) => {
    setCurrentStep(step);
  };

  const handleButtonClick = (step) => {
    updateSteps(step);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };
  const URL = config.URL;
  if (token && token.name) {
    arr = token.name.split(" ");
  }
  const theme = useTheme();

  useEffect(() => {
    const fetchkycstatus = async () => {
      try {
        const result = await axios.get(
          `${URL}/auth/user/checkverify/${token.email}`
        );
        if (result) {
          console.log(result);
          setonbcomp(result.data.isVerified);
          // console.log(onbcomp);
          if (result.data.isVerified == 2) {
            try {
              const getdet = await axios.get(`${URL}/kyc/${token.email}`);
              if (getdet) {
                console.log(getdet.data);
                setkycdata(getdet.data.data);
              }
            } catch (error) {
              console.log(error);
            }
          }
        } else {
          console.log("status hi nahi mila");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchkycstatus();
  }, []);

  const savekyc = async () => {
    try {
      const dts = {
        full_name: adata.full_name,
        email: token.email,
        phone: token.phone,
        aadhaar_number: adata.aadhaar_number,
        dob: adata.dob,
        pan_number: pdata.pan_number,
        gender: pdata.gender,
        category: pdata.category,
        bankName: banknsme,
        ac_type: actype,
        ac_no: acno,
        ifsc_code: ifsccode,
      };
      const result = await axios.post(`${URL}/kyc/add`, dts);
      if (result) {
        console.log("save sucessful");
        updatestatus();
      } else {
        console.log("save failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleotpsend = async () => {
    console.log("in otp send -----------------------");
    // console.log(aad);
    try {
      const result = await axios.post(`${URL}/surepass/sendaadharotp`, {
        aadharno: aad,
      });
      if (result) {
        console.log("here");
        console.log(result.data.data.data);
        setCid(result.data.data.data.client_id);
        setotpss(true);
        console.log("ye hai cid   " + result.data.data.data.client_id);
        toast.success("otp to mobile number sent sucessfully");
        // setVisible(true);
        console.log("sucessful");
      } else {
        console.log("api failed");
        // console.log('failed')
      }
    } catch (error) {
      toast.error("failed to verify");
      console.log(error);
    }
  };

  const handlepanverify = async () => {
    console.log("in pan verify -----------------------");
    // console.log(aad);
    try {
      const result = await axios.post(`${URL}/surepass/getpan`, {
        panno: pan,
      });
      if (result) {
        console.log("here");
        console.log(result.data.data.data);
        setpdata(result.data.data.data);
        // setCid(result.data.data.data.client_id);
        // setotpss(true);
        // console.log('ye hai cid   ' +result.data.data.data.client_id);
        toast.success("pan verified successfully");
        // setVisible(true);
        nextStep();
        setCurrentStep(currentStep + 1);
        console.log("sucessful");
      } else {
        toast.error("failed to verify pan pls try again");

        console.log("api failed");
        // console.log('failed')
      }
    } catch (error) {
      toast.error("failed to verify");
      console.log(error);
    }
  };

  const updatestatus = async () => {
    try {
      const result = await axios.post(
        `${URL}/auth/user/updateverify/${token.email}`,
        {
          newstatus: 1,
        }
      );
      if (result) {
        console.log(result);
        console.log("kyc pending");
        toast.success("KYC Pending");
        setTimeout(() => window.location.reload(), 5000);
      } else {
        console.log("failed kyc");
        toast.error("KYC failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleOtpverify = async () => {
    console.log("in otp verify  ----------------");
    const fotp = otp.join("");
    try {
      const dts = {
        cid: cid,
        otp: fotp,
      };
      console.log(dts);
      const result = await axios.post(`${URL}/surepass/checkaadharotp`, dts);
      if (result) {
        console.log("suceess in verify");
        console.log(result.data.data);
        const ud = result.data.data.data;
        // console.log(ud);
        // nextStep();
        setCfaad(ud.aadhaar_number);
        // axios.get(`${URL}/auth/user/updateverified/${token.email}`).then((response)=>{
        // })
        // alert(JSON.stringify(result.data.data.data));
        setadata(result.data.data.data);
        nextStep();
        setCurrentStep(currentStep + 1);
      } else {
        console.log("api failed");
        // console.log('failed')
      }
    } catch (error) {
      toast.error("failed to verify otp");
      console.log(error);
    }
  };

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  //otp related
  const togglePopup = () => {
    setVisible(!visible);
  };

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const newOtp = [...otp];

  // handle changes while entering OTP
  const handleChange = (index, value) => {
    if (value.length > 1) {
      value = value.charAt(0);
    }

    if (isNaN(value)) return false;

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
    if (event.key === "Backspace" && index > 0 && otp[index] === "") {
      newOtp[index] = "";
      const previousInput = document.getElementById(`otp-${index - 1}`);
      if (previousInput) {
        previousInput.focus();
      }
    } else if (event.key === "ArrowLeft") {
      const currentInput = document.getElementById(`otp-${index}`);
      if (currentInput.selectionStart === 0) {
        const previousInput = document.getElementById(`otp-${index - 1}`);
        if (previousInput) {
          previousInput.focus();
        }
      }
    } else if (event.key === "ArrowRight" && index < otp.length - 1) {
      const currentInput = document.getElementById(`otp-${index}`);
      if (currentInput.selectionStart === currentInput.value.length) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
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
    if (/^\d+$/.test(pastedData)) {
      const digits = pastedData.split("").slice(0, otp.length);

      digits.forEach((digit, index) => {
        newOtp[index] = digit;
      });

      setOtp(newOtp);
    }
  };

  // toast notifications
  const notifyResend = () => toast.success(`OTP sent`);
  //   console.log(otp);

  const notifyFullOtp = () => toast.success(`OTP ${otp.join("")} verified`);
  const notifyOtp = () => toast.error(`Kindly write all 6 digits of OTP`);

  return (
    <div className="profilepage">
      {visible && onbcomp == 2 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* {step==0 && <> */}
          <div
            className="main-otp-div popup"
            style={{
              width: "60%",
              marginTop: "100px",
            }}
          >
            <div className="backarrow">
              <div
                style={{
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  paddingBottom: "5px",
                  paddingTop: "5px",
                }}
              >
                <img
                  src={backimage}
                  height={32}
                  width={32}
                  alt=""
                  onClick={togglePopup}
                  style={{
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>

            {/* form chalu  */}

            <div>
              {/* progress bar chalu  */}

              <div className="containerone">
                <div className="steps-containerone">
                  {[1, 2, 3].map((stepNumber) => (
                    <div
                      key={stepNumber}
                      style={{
                        display: "flex",
                        gap: "10px",
                      }}
                    >
                      <div>
                        <span>
                          {stepNumber > 1 && <div className="line"></div>}
                          <span
                            className={`step-circle ${
                              stepNumber === currentStep ? "active" : ""
                            }`}
                          >
                            {stepNumber}
                          </span>
                        </span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "Gilroy-Bold",
                            width: "60px",
                          }}
                        >
                          {stepNumber == 1
                            ? "Aadhar"
                            : stepNumber == 2
                            ? "PAN"
                            : "Bank"}
                        </span>
                      </div>

                      {/* <Divider style={{ backgroundColor:'blue',height:'5px',border:'3px solid red' }} /> */}
                    </div>
                  ))}
                  <div className="progress-bar-containerone">
                    <span
                      className="progress-indicator"
                      style={{
                        width: `${((currentStep - 1) / 3) * 100}%`,
                      }}
                    ></span>
                  </div>
                </div>
              </div>
            </div>

            {step == 0 && (
              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    flexDirection: "column",
                    width: "470px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "24px",
                      fontFamily: "Gilroy-Medium",
                    }}
                  >
                    Aadhar Details
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <p
                      htmlFor="aadharverification"
                      className="form-label"
                      style={{
                        marginTop: "20px",
                        fontFamily: "Gilroy-Medium",
                      }}
                    >
                      Full Name
                    </p>

                    <input
                      type="text"
                      required
                      name="name"
                      value={kycdata.full_name}
                      autoFocus={true}
                      style={{
                        width: "450px",
                        marginTop: "0px",
                        marginBottom: "10px",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <p
                      htmlFor="aadharverification"
                      className="form-label"
                      style={{
                        marginTop: "20px",
                        fontFamily: "Gilroy-Medium",
                      }}
                    >
                      Aadhar Number
                    </p>

                    <input
                      type="text"
                      required
                      name="name"
                      value={kycdata.aadhaar_number}
                      autoFocus={true}
                      style={{
                        width: "450px",
                        marginTop: "0px",
                        marginBottom: "10px",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <p
                      htmlFor="aadharverification"
                      className="form-label"
                      style={{
                        marginTop: "20px",
                        fontFamily: "Gilroy-Medium",
                      }}
                    >
                      DOB
                    </p>

                    <input
                      type="text"
                      required
                      name="name"
                      value={kycdata.dob}
                      autoFocus={true}
                      style={{
                        width: "450px",
                        marginTop: "0px",
                        marginBottom: "10px",
                      }}
                    />
                  </div>

                  <ToastContainer />
                  {/* <div className="action-buttons">
        <button
          id="prev"
          disabled={currentStep === 1}
          onClick={() => handleButtonClick(currentStep - 1)}
        >
          Prev
        </button>
        <button
          id="next"
          disabled={currentStep === 4}
          onClick={() => handleButtonClick(currentStep + 1)}
        >
          Next
        </button>
      </div>   */}

                  {!otpss && (
                    <button
                      style={{
                        cursor: "pointer",
                        marginTop: "8px",
                        width: "100%",
                        backgroundColor: "#626bea",
                      }}
                      onClick={() => {
                        nextStep();
                        setCurrentStep(currentStep + 1);
                      }}
                    >
                      NEXT
                    </button>
                  )}

                  {otpss && (
                    <>
                      <div>
                        <p
                          style={{
                            fontSize: "1rem",
                            marginBlockEnd: "0rem",
                            textAlign: "center",
                            fontFamily: "Gilroy-Bold",
                          }}
                        >
                          Enter OTP sent to mobile number
                        </p>
                      </div>
                      <div className="otp-div">
                        {otp.map((digit, index) => (
                          <div className="otp-child-div" key={index}>
                            <input
                              key={index}
                              type="text"
                              maxLength={1}
                              value={digit}
                              onChange={(e) =>
                                handleChange(index, e.target.value)
                              }
                              onKeyDown={(e) => handleKeyDown(index, e)}
                              onPaste={handlePaste}
                              id={`otp-${index}`}
                              className="otp-input"
                            />
                          </div>
                        ))}
                      </div>

                      <div
                        style={{
                          marginTop: "30px",
                        }}
                      >
                        <button
                          style={{
                            backgroundColor: "#626bea",
                            width: "100%",
                          }}
                          onClick={() => {
                            handleOtpverify();
                          }}
                        >
                          Verify OTP
                        </button>
                      </div>
                      <Toaster />
                    </>
                  )}
                </div>
              </>
            )}

            {/* panuchalu */}
            {step == 1 && (
              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    flexDirection: "column",
                    width: "470px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "24px",
                      fontFamily: "Gilroy-Medium",
                    }}
                  >
                    PAN Details
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <p
                      htmlFor="panverification"
                      className="form-label"
                      style={{
                        marginTop: "20px",
                        fontFamily: "Gilroy-Medium",
                      }}
                    >
                      PAN Number
                    </p>

                    <input
                      type="text"
                      required
                      name="pan"
                      value={kycdata.pan_number}
                      autoFocus={true}
                      style={{
                        width: "450px",
                        marginTop: "0px",
                        marginBottom: "10px",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <p
                      htmlFor="panverification"
                      className="form-label"
                      style={{
                        marginTop: "20px",
                        fontFamily: "Gilroy-Medium",
                      }}
                    >
                      PAN Category
                    </p>

                    <input
                      type="text"
                      required
                      name="pan"
                      value={kycdata.category}
                      autoFocus={true}
                      style={{
                        width: "450px",
                        marginTop: "0px",
                        marginBottom: "10px",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <p
                      htmlFor="panverification"
                      className="form-label"
                      style={{
                        marginTop: "20px",
                        fontFamily: "Gilroy-Medium",
                      }}
                    >
                      Gender
                    </p>

                    <input
                      type="text"
                      required
                      name="pan"
                      value={kycdata.gender}
                      autoFocus={true}
                      style={{
                        width: "450px",
                        marginTop: "0px",
                        marginBottom: "10px",
                      }}
                    />
                  </div>

                  <ToastContainer />

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      marginTop: "8px",
                    }}
                  >
                    <Button
                      style={{
                        cursor: "pointer",
                        backgroundColor: "#626bea",
                        color: "white",
                        width: "100%",
                      }}
                      onClick={() => {
                        setCurrentStep(currentStep + 1);
                        nextStep();
                      }}
                    >
                      NEXT
                    </Button>
                  </div>
                </div>
              </>
            )}

            {step == 2 && (
              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    flexDirection: "column",
                    width: "470px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "24px",
                      fontFamily: "Gilroy-Medium",
                    }}
                  >
                    Bank Details
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <p
                      htmlFor="panverification"
                      className="form-label"
                      style={{
                        marginTop: "20px",
                        fontFamily: "Gilroy-Medium",
                        marginBlockEnd: "0rem",
                      }}
                    >
                      Bank Name
                    </p>
                    <input
                      type="text"
                      required
                      name="bankname"
                      value={kycdata.bankName}
                      autoFocus={true}
                      style={{
                        width: "450px",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <p
                      htmlFor="panverification"
                      className="form-label"
                      style={{
                        marginTop: "20px",
                        fontFamily: "Gilroy-Medium",
                        marginBlockEnd: "0rem",
                      }}
                    >
                      Account Type
                    </p>
                    <input
                      type="text"
                      required
                      name="bankname"
                      value={acarr[Number(kycdata.ac_type)]}
                      autoFocus={true}
                      style={{
                        width: "450px",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <p
                      htmlFor="panverification"
                      className="form-label"
                      style={{
                        marginTop: "20px",
                        marginBlockEnd: "0rem",
                        fontFamily: "Gilroy-Medium",
                      }}
                    >
                      IFSC code
                    </p>
                    <input
                      type="text"
                      required
                      name="ifsccode"
                      value={kycdata.ifsc_code}
                      autoFocus={true}
                      style={{
                        width: "450px",
                      }}
                    />
                  </div>

                  <ToastContainer />

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      marginTop: "8px",
                    }}
                  >
                    <Button
                      style={{
                        cursor: "pointer",
                        backgroundColor: "grey",
                        color: "white",
                        width: "100%",
                      }}
                      disabled={true}
                    >
                      NEXT
                    </Button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {visible && onbcomp != 2 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* {step==0 && <> */}
          <div
            className="main-otp-div popup"
            style={{
              width: "60%",
              marginTop: "100px",
            }}
          >
            <div className="backarrow">
              <div
                style={{
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  paddingBottom: "5px",
                  paddingTop: "5px",
                }}
              >
                <img
                  src={backimage}
                  height={32}
                  width={32}
                  alt=""
                  onClick={togglePopup}
                  style={{
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>

            {/* form chalu  */}

            <div>
              {/* progress bar chalu  */}

              <div className="containerone">
                <div className="steps-containerone">
                  {[1, 2, 3].map((stepNumber) => (
                    <div
                      key={stepNumber}
                      style={{
                        display: "flex",
                        gap: "10px",
                      }}
                    >
                      <div>
                        <span>
                          {stepNumber > 1 && <div className="line"></div>}
                          <span
                            className={`step-circle ${
                              stepNumber === currentStep ? "active" : ""
                            }`}
                          >
                            {stepNumber}
                          </span>
                        </span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "Gilroy-Bold",
                            width: "60px",
                          }}
                        >
                          {stepNumber == 1
                            ? "Aadhar"
                            : stepNumber == 2
                            ? "PAN"
                            : "Bank"}
                        </span>
                      </div>

                      {/* <Divider style={{ backgroundColor:'blue',height:'5px',border:'3px solid red' }} /> */}
                    </div>
                  ))}
                  <div className="progress-bar-containerone">
                    <span
                      className="progress-indicator"
                      style={{
                        width: `${((currentStep - 1) / 3) * 100}%`,
                      }}
                    ></span>
                  </div>
                </div>
              </div>
            </div>

            {step == 0 && (
              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    flexDirection: "column",
                    width: "470px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "24px",
                      fontFamily: "Gilroy-Medium",
                    }}
                  >
                    Aadhar Verification
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <p
                      htmlFor="aadharverification"
                      className="form-label"
                      style={{
                        marginTop: "20px",
                        fontFamily: "Gilroy-Medium",
                      }}
                    >
                      Aadhar Number
                    </p>

                    <input
                      type="text"
                      required
                      name="name"
                      value={aad}
                      autoFocus={true}
                      onChange={(event) => {
                        setAad(event.target.value);
                      }}
                      style={{
                        width: "450px",
                        marginTop: "0px",
                        marginBottom: "10px",
                      }}
                    />

                    {/* <input id="aadharverification" type='text' autoFocus value={aad}  style={{
                    border:'1.5px solid #F9C847',
                    backgroundColor:'#E1E7EA',
                    height:'8px',
                    fontSize:'14px',
                    width:isMobile?'40%':'40%'
                  }} placeholder='Aadhar number' /> */}
                  </div>

                  <ToastContainer />
                  {/* <div className="action-buttons">
        <button
          id="prev"
          disabled={currentStep === 1}
          onClick={() => handleButtonClick(currentStep - 1)}
        >
          Prev
        </button>
        <button
          id="next"
          disabled={currentStep === 4}
          onClick={() => handleButtonClick(currentStep + 1)}
        >
          Next
        </button>
      </div>   */}

                  {!otpss && (
                    <button
                      style={{
                        cursor: "pointer",
                        marginTop: "8px",
                        width: "100%",
                        backgroundColor: "#626bea",
                      }}
                      onClick={() => {
                        handleotpsend();
                      }}
                    >
                      Verify Now
                    </button>
                  )}

                  {otpss && (
                    <>
                      <div>
                        <p
                          style={{
                            fontSize: "1rem",
                            marginBlockEnd: "0rem",
                            textAlign: "center",
                            fontFamily: "Gilroy-Bold",
                          }}
                        >
                          Enter OTP sent to mobile number
                        </p>
                      </div>
                      <div className="otp-div">
                        {otp.map((digit, index) => (
                          <div className="otp-child-div" key={index}>
                            <input
                              key={index}
                              type="text"
                              maxLength={1}
                              value={digit}
                              onChange={(e) =>
                                handleChange(index, e.target.value)
                              }
                              onKeyDown={(e) => handleKeyDown(index, e)}
                              onPaste={handlePaste}
                              id={`otp-${index}`}
                              className="otp-input"
                            />
                          </div>
                        ))}
                      </div>

                      <div
                        style={{
                          marginTop: "30px",
                        }}
                      >
                        <button
                          style={{
                            backgroundColor: "#626bea",
                            width: "100%",
                          }}
                          onClick={() => {
                            handleOtpverify();
                          }}
                        >
                          Verify OTP
                        </button>
                      </div>
                      <Toaster />
                    </>
                  )}
                </div>
              </>
            )}

            {/* panuchalu */}
            {step == 1 && (
              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    flexDirection: "column",
                    width: "470px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "24px",
                      fontFamily: "Gilroy-Medium",
                    }}
                  >
                    PAN Verification
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <p
                      htmlFor="panverification"
                      className="form-label"
                      style={{
                        marginTop: "20px",
                        fontFamily: "Gilroy-Medium",
                      }}
                    >
                      PAN Number
                    </p>

                    <input
                      type="text"
                      required
                      name="pan"
                      value={pan}
                      autoFocus={true}
                      onChange={(event) => {
                        setPan(event.target.value);
                      }}
                      style={{
                        width: "450px",
                        marginTop: "0px",
                        marginBottom: "10px",
                      }}
                    />

                    {/* <input id="aadharverification" type='text' autoFocus value={aad}  style={{
                    border:'1.5px solid #F9C847',
                    backgroundColor:'#E1E7EA',
                    height:'8px',
                    fontSize:'14px',
                    width:isMobile?'40%':'40%'
                  }} placeholder='Aadhar number' /> */}
                  </div>

                  <ToastContainer />

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      marginTop: "8px",
                    }}
                  >
                    <Button
                      style={{
                        cursor: "pointer",
                        backgroundColor: "#626bea",
                        color: "white",
                        width: "100%",
                      }}
                      onClick={() => {
                        handlepanverify();
                      }}
                    >
                      Verify Now
                    </Button>
                  </div>
                </div>
              </>
            )}

            {step == 2 && (
              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    flexDirection: "column",
                    width: "470px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "24px",
                      fontFamily: "Gilroy-Medium",
                    }}
                  >
                    Bank Details
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <p
                      htmlFor="panverification"
                      className="form-label"
                      style={{
                        marginTop: "20px",
                        fontFamily: "Gilroy-Medium",
                        marginBlockEnd: "0rem",
                      }}
                    >
                      Bank Name
                    </p>
                    <input
                      type="text"
                      required
                      name="bankname"
                      value={banknsme}
                      autoFocus={true}
                      onChange={(event) => {
                        setbankanme(event.target.value);
                      }}
                      style={{
                        width: "450px",
                      }}
                    />
                  </div>
                  <FormControl
                    sx={{
                      marginTop: "20px",
                    }}
                    fullWidth
                  >
                    <InputLabel id="demo-simple-select-label">
                      Account type
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={actype}
                      label="Select Account Type"
                      onChange={(event) => {
                        setactype(event.target.value);
                      }}
                      sx={{
                        paddingTop: "0px",
                        paddingBottom: "0px",
                        marginTop: "0px",
                      }}
                    >
                      <MenuItem value={0}>Current</MenuItem>
                      <MenuItem value={1}>Saving</MenuItem>
                      <MenuItem value={2}>NRI</MenuItem>
                      <MenuItem value={3}>Recurring deposit</MenuItem>
                    </Select>
                  </FormControl>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <p
                      htmlFor="panverification"
                      className="form-label"
                      style={{
                        marginTop: "20px",
                        marginBlockEnd: "0em",
                        fontFamily: "Gilroy-Medium",
                      }}
                    >
                      Account Number
                    </p>
                    <input
                      type="text"
                      required
                      name="acno"
                      value={acno}
                      autoFocus={true}
                      onChange={(event) => {
                        setacno(event.target.value);
                      }}
                      style={{
                        width: "450px",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <p
                      htmlFor="panverification"
                      className="form-label"
                      style={{
                        marginTop: "20px",
                        marginBlockEnd: "0rem",
                        fontFamily: "Gilroy-Medium",
                      }}
                    >
                      IFSC code
                    </p>
                    <input
                      type="text"
                      required
                      name="ifsccode"
                      value={ifsccode}
                      autoFocus={true}
                      onChange={(event) => {
                        setifsccode(event.target.value);
                      }}
                      style={{
                        width: "450px",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <p
                      htmlFor="panverification"
                      className="form-label"
                      style={{
                        marginTop: "20px",
                        fontFamily: "Gilroy-Medium",
                        marginBlockEnd: "0rem",
                      }}
                    >
                      Upload cancelled check below
                    </p>

                    <DocumentUploader docl={dl} sdocl={sdl} />
                  </div>

                  <ToastContainer />

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      marginTop: "8px",
                    }}
                  >
                    <Button
                      style={{
                        cursor: "pointer",
                        backgroundColor: "#626bea",
                        color: "white",
                        width: "100%",
                      }}
                      onClick={() => {
                        savekyc();
                      }}
                    >
                      Complete KYC
                    </Button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
      {!visible && (
        <div
          style={{
            backgroundColor: "white",
            width: isMobile ? "350px" : "60%",
            height: "100%",
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              height: "100%",
            }}
          >
            <article className="main-content">
              <header className="user-header">
                <h1 className="user-name">{token.name}</h1>
                {/* <h2 className="user-last-seen">Last seen 3 hours ago</h2> */}
              </header>
              <nav className="tab-navigation">
                <ul>
                  <li className="nav-item">Profile</li>
                  <li className="nav-item1">Transactions</li>
                  <li className="nav-item1">Documents</li>
                </ul>
              </nav>
              <section className="personal-information">
                <h3 className="sub-heading">Personal Information</h3>
                <div className="form-item">
                  <label htmlFor="firstName" className="form-label">
                    First Name:{" "}
                  </label>
                  <p id="firstName" className="form-data">
                    {token.name.split(" ")[0]}
                  </p>
                </div>

                <div className="form-item">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <p id="lastName" className="form-data">
                    {token.name.split(" ")[arr.length - 1]}
                  </p>
                </div>

                <div className="form-item">
                  <label htmlFor="email" className="form-label">
                    Email:{" "}
                  </label>
                  <p id="email" className="form-data">
                    {token.email}
                  </p>
                </div>

                <div className="form-item">
                  <label htmlFor="phone" className="form-label">
                    Phone:{" "}
                  </label>
                  <p id="phone" className="form-data">
                    {token.phone}
                  </p>
                </div>
              </section>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {onbcomp == 0 && (
                  <button
                    style={{
                      fontWeight: "bold",
                      // font-weight:bold;
                      padding: "10px 20px",

                      // padding: 10px 20px;
                      borderRadius: "5px",
                      margin: "10px 0px",
                    }}
                    onClick={() => {
                      setVisible(true);
                    }}
                  >
                    Complete kyc
                  </button>
                )}
                {onbcomp == 1 && (
                  <button
                    style={{
                      backgroundColor: "yellow",
                      fontWeight: "bold",
                      // font-weight:bold;
                      padding: "10px 20px",

                      // padding: 10px 20px;
                      borderRadius: "5px",
                      margin: "10px 0px",
                    }}
                    onClick={() => {
                      setVisible(true);
                    }}
                  >
                    KYC Pending
                  </button>
                )}
                {onbcomp == 2 && (
                  <button
                    style={{
                      backgroundColor: "#5ECE8F",
                      fontWeight: "bold",
                      // font-weight:bold;
                      padding: "10px 20px",

                      // padding: 10px 20px;
                      borderRadius: "5px",
                      margin: "10px 0px",
                    }}
                    onClick={() => {
                      setVisible(true);
                    }}
                  >
                    View Details
                  </button>
                )}

                <button className="edit-btn">Edit Profile</button>
              </div>
            </article>
          </div>
          <style jsx>{`
            .profilepage {
              height: 100%;
              width: 100%;
              display: flex;

              align-items: flex-start;
              justify-content: center;
              font-family: "Work Sans", sans-serif;
            }
            .aadharbox {
              border: 1.5px solid #f9c847;
              background-color: #e1e7ea;
              height: 8px;
              width: 20%;
            }
            .upibox {
              border: 1.5px solid #52bf83;
              background-color: #e1e7ea;
              height: 8px;
              width: 20%;
            }

            aside {
              width: 250px;
              background-color: #f0f2f5;
              padding: 20px;
            }

            .sidebar {
              display: flex;
              flex-direction: column;
            }

            .icon-wrapper {
              width: 24px;
              height: 24px;
              margin-right: 10px;
            }
            .icon {
              width: 100%;
              height: auto;
            }

            .sidebar-item {
              display: flex;
              align-items: center;
              margin-bottom: 10px;
              cursor: pointer;
            }

            .sidebar-item-text {
              font-size: 14px;
            }

            .user-info {
              border-top: 1px solid #d1d1d1;
              padding-top: 10px;
            }

            .user-info-text,
            .role {
              margin-bottom: 5px;
            }
            .user-header {
              display: flex;
              flex-direction: column;
              justify-content: center;
            }
            .user-name {
              font-weight: bold;
              font-size: 36px;
            }
            .new-button {
              align-self: center;
              padding: 10px 20px;
              background-color: #007bff;
              color: white;
              border-radius: 5px;
              cursor: pointer;
              margin-top: 10px;
            }

            .tab-navigation ul {
              display: flex;
              list-style: none;
              padding: 0;
            }

            .nav-item {
              font-weight: bold;
              border-bottom: 2px solid black;
              margin-right: 12px;
              padding-bottom: 5px;
              cursor: pointer;
            }
            .nav-item1 {
              font-weight: bold;
              color: grey;
              padding-bottom: 5px;
              border-bottom: 2px solid grey;
              margin-right: 12px;
              cursor: pointer;
            }

            .tab-selected {
              background-color: #007bff;
              color: white;
            }
            .main-content {
              background-color: white;
              padding-left: 20px;
              padding-right: 20px;
              border: 5px solid white;
              flex: 1;
              padding: 20px;
            }

            .sub-heading {
              font-weight: bold;
              margin: 20px 0 10px;
            }

            .form-item {
              display: flex;
              justify-content: space-between;
            }

            .form-label {
              display: flex;
              align-items: center;
            }

            .form-data {
              // background-color: #e9ecef;
              padding: 10px;
              border-radius: 5px;
            }
            .edit-btn,
            .verify-btn {
              background-color: #e9ecef;
              color: black;
              font-weight: bold;
              padding: 15px 20px;
              border: none;
              border-radius: 5px;
              cursor: pointer;
              margin: 10px 0px;
            }

            .edit-btn {
              align-self: flex-start;
            }
          `}</style>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
