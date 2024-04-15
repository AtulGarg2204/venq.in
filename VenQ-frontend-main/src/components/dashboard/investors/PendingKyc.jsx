import React, { useEffect, useState } from "react";
import { Button, styled, Box } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import backimage from "./backarrow.png";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Toaster } from "react-hot-toast";
import Paper from "@mui/material/Paper";
import { ToastContainer, toast } from "react-toastify";
import config from "../../../config";
import Popup from "reactjs-popup";

<script
  type="text/javascript"
  id="hs-script-loader"
  async
  defer
  src="//js.hs-scripts.com/45720526.js"
></script>;
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

const PendingKyc = () => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const URL = config.URL;
  const [rows, setRows] = useState([]);
  const [varr, setvarr] = useState([]);
  const map1 = new Map();
  const [users, setUsers] = useState([]);
  const [totalamount, settotalamount] = useState(0);
  const [cid, setCid] = useState("");
  const [adata, setadata] = useState({});
  const [pdata, setpdata] = useState({});
  const [cfadd, setCfaad] = useState("");
  const [count, setcount] = useState(0);
  const [kycdata, setkycdata] = useState({});
  const acarr = ["Current", "Saving", "NRI", "Recurring Deposit"];
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const newOtp = [...otp];
  const [otpss, setotpss] = useState(false);
  const [sp, setsp] = useState("");
  const [visible, setVisible] = useState(false);
  const [currstatus, setcurrstatus] = useState(0);
  const [step, setStep] = useState(0);

  const [currentStep, setCurrentStep] = useState(1);

  const updateSteps = (step) => {
    setCurrentStep(step);
  };

  const handleButtonClick = (step) => {
    updateSteps(step);
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

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  //otp related
  const togglePopup = () => {
    setVisible(!visible);
  };

  const showDetails = async (u) => {
    try {
      const getdet = await axios.get(`${URL}/kyc/${u}`);
      if (getdet) {
        console.log(getdet.data);
        setkycdata(getdet.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const approveuser = async (u) => {
    try {
      const result = await axios.post(`${URL}/auth//user/updateverify/${u}`, {
        newstatus: 2,
      });
      if (result) {
        console.log("kyc done");
        toast.success("KYC approved");
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      } else {
        toast.success("KYC approval failed");
        setTimeout(() => {
          setOpen((o) => !o);
        }, 5000);
        console.log("failed");
      }
    } catch (error) {
      console.log(error);
    }
  };
  function createData(name, contactnumber, email, amount, view) {
    return {
      count,
      totalamount,
      view,
    };
  }
  const [su, setsu] = useState({});
  const navigate = useNavigate();
  useEffect(function () {
    axios
      .get(`${URL}/auth/user/pendingkyc/all`)
      .then((response) => {
        // console.log("Fetched data from server:", response.data);
        console.log(response.data);
        setUsers(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  // console.log(rows.length)

  return (
    <>
      {visible && (
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
                    {su.isVerified == 2 && (
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
                    )}
                    {su.isVerified != 2 && (
                      <Button
                        style={{
                          cursor: "pointer",
                          backgroundColor: "#626bea",
                          color: "white",
                          width: "100%",
                        }}
                        onClick={() => {
                          approveuser(su.email);
                        }}
                      >
                        Approve KYC
                      </Button>
                    )}
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
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "0px",
                backgroundColor: "#00b386",
                width: "fit-content",
                padding: "20px",
                color: "white",
                fontFamily: "Gilroy-Bold",
              }}
            >
              Total investors: {users.length}
            </div>
          </div>

          <TableContainer component={Paper}>
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
                  Name : {su.name}
                </p>
                <p
                  style={{
                    color: "black",
                  }}
                >
                  Email : {su.email}
                </p>
                <p
                  style={{
                    color: "black",
                  }}
                >
                  Phone : {su.phone}
                </p>
                <button
                  onClick={() => {
                    approveuser(su.email);
                  }}
                >
                  Approve KYC
                </button>
              </div>
              <ToastContainer />
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
                    {" "}
                    Name
                  </TableCell>
                  <TableCell
                    sx={{
                      fontFamily: "Work Sans",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    Email
                  </TableCell>
                  <TableCell
                    sx={{
                      fontFamily: "Work Sans",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    Phone
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      fontFamily: "Work Sans",
                      fontWeight: "bold",
                    }}
                  >
                    KYC Status
                  </TableCell>
                  {/* <TableCell align="right">Amount</TableCell>
      <TableCell align="right">View</TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user, index) => (
                  <TableRow key={index}>
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{
                        fontFamily: "Work Sans",
                      }}
                    >
                      {user.name}
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{
                        fontFamily: "Work Sans",
                      }}
                    >
                      {user.email}
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{
                        fontFamily: "Work Sans",
                      }}
                    >
                      {user.phone}
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{
                        fontFamily: "Work Sans",
                      }}
                    >
                      {user.isVerified == 0 && <button>Not Completed</button>}
                      {user.isVerified == 1 && (
                        <button
                          onClick={() => {
                            setsu(user);
                            showDetails(user.email);
                            setVisible(true);
                          }}
                          style={{
                            backgroundColor: "yellow",
                          }}
                        >
                          Wating for Approval
                        </button>
                      )}
                      {user.isVerified == 2 && (
                        <button
                          style={{
                            backgroundColor: "green",
                          }}
                          onClick={() => {
                            setsu(user);
                            showDetails(user.email);
                            setVisible(true);
                          }}
                        >
                          Completed
                        </button>
                      )}
                    </TableCell>

                    {/* <TableCell align="right"><button style={
          {
              backgroundColor:'#BEEDB2',
              color:'black',
              fontWeight:'bold',
              borderRadius:'999em',
              padding:'0px 30px;'
          }
        }  onClick={()=>{
            let cnt=0,total=0;
            {varr.map((elem)=>{
                if(elem.property==user._id){
                    cnt++;
                    total+=elem.amount;
                  }
              })}
              setcount(cnt);
              settotalamount(total);
              setsp(user._id);
              setcurrstatus(user.islive)
              setOpen(o => !o)
                        }}>Show Investment Details</button></TableCell> */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </>
  );
};

export default PendingKyc;
