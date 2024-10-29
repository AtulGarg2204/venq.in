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
import "./profile.css";
import KycSteps from "./KycSteps";
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
  const [fatherName, setFatherName] = useState("");
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
  const [info, setInfo] = useState(false);
  const [infoPROS, setInfoPROS] = useState(false);
  const [showPdf, setShowPdf] = useState();
  const [showPdfPROS, setShowPdfPROS] = useState();
  const [currentStep, setCurrentStep] = useState(1);
  const [purchased, setPurchased] = useState([]);


  const updateSteps = (step) => {
    setCurrentStep(step);
  };
  const URL = config.URL;

  const handleButtonClick = (step) => {
    updateSteps(step);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  if (token && token.name) {
    arr = token.name.split(" ");
  }
  const theme = useTheme();

  useEffect(() => {
    console.log("Token Data", token._id);
    
    const fetchKYCStatus = async () => {
      try {
        const result = await axios.get(`${URL}/auth/user/checkverify/${token.email}`);
        if (result) {
          setonbcomp(result.data.isVerified);

          // If verified, fetch additional KYC details
          if (result.data.isVerified === 2) {
            try {
              const getdet = await axios.get(`${URL}/kyc/${token.email}`);
              if (getdet) {
                console.log("KYC Data:", getdet.data);
                setkycdata(getdet.data.data);
              }
            } catch (error) {
              console.error("Error fetching KYC details:", error);
            }
          }
        } else {
          console.log("No verification status received.");
        }
      } catch (error) {
        console.error("Error fetching KYC verification status:", error);
      }
    };

    const fetchPurchasedData = async () => {
      try {
        const customerId = token._id; // Ensure this is the correct ID
    
        if (!customerId) {
          console.error("Customer ID is not available.");
          return;
        }
    
        const purchasedResponse = await axios.get(`${URL}/purchased/${customerId}/getDetails`);
    
        if (purchasedResponse && purchasedResponse.data && purchasedResponse.data.purchased) {
          const purchasedData = purchasedResponse.data.purchased; // Get the purchased array
    
          console.log("Purchased Data:", purchasedData); // Log the entire purchased data
    
          // Ensure there is at least one purchase before accessing
          if (purchasedData.length > 0) {
            const firstPurchase = purchasedData[0]; // Access the first item
    
            // Set the state for surepassStatus and surepassProsStatus from the first item
            setSurepassStatus(firstPurchase.surepassStatus || "Completed");
            setSurepassProsStatus(firstPurchase.surepassProsStatus || "Completed");
    
            // Optionally set the purchased data
            setPurchased(purchasedData);
          } else {
            console.log("No purchases found in the response.");
          }
        } else {
          console.log("No purchased data received.");
        }
      } catch (error) {
        console.error("Error fetching purchased data:", error.response?.data || error.message);
      }
    };
    


    const fetchData = async () => {
      await fetchKYCStatus();
      await fetchPurchasedData();

    };

    fetchData();
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
  const [activeTab, setActiveTab] = useState("details");
  const newOtp = [...otp];


  // State variables to track the status
  const [surepassStatus, setSurepassStatus] = useState('');
  const [surepassProsStatus, setSurepassProsStatus] = useState('');
  const [purchasedId, setPurchasedId] = useState(''); // Set this to the actual purchase ID
  const updatePurchaseStatus = async () => {
    try {
      const response = await axios.put(`${URL}/purchased/${purchasedId}`, {
        surepassStatus,
        surepassProsStatus,
      });
      console.log('Purchase status updated:', response.data);
    } catch (error) {
      console.error('Error updating purchase status:', error);
    }
  };
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
  const handleEsign = () => {
    setInfo(!info);
  };
  const handleEsignPROS = () => {
    setInfoPROS(!infoPROS);
  };
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

   // States for user input
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');
   
   // States for API response and loading/error tracking
   const [clientId, setClientId] = useState(null);
   const [esignUrl, setEsignUrl] = useState(null);
   const [pdfLink, setPdfLink] = useState(null);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
  const handleSurepass = async (name, email, phone) => {
    setLoading(true);
    setError(null); // Reset errors on new request

    const trimmedPhone = phone.startsWith("91") ? phone.slice(2) : phone;
    const url = `${URL}/surepass/initializeEsign`;

    const payload = {
      name: name,
      email: email,
      phone: trimmedPhone,
    };

    try {
      const response = await axios.post(url, payload);

      if (response.data && response.data.data && response.data.data.data.url && response.data.data.data.client_id) {
        const clientId = response.data.data.data.client_id;
        const esignUrl = response.data.data.data.url;

        setClientId(clientId);
        setEsignUrl(esignUrl);
        console.log("eSign URL:", esignUrl);


        localStorage.setItem("client_id", clientId);

        window.open(esignUrl, "_blank");

        const fatherDetails = {
          clientId1: clientId,
          fatherName: fatherName,
          phoneNumber: trimmedPhone,
          pdfUrl: "default_pdf_link", // Change this if necessary
          email: email,
        };

        const url2 = `${URL}/esigndetails/surepassDetails`;
        await axios.post(url2, fatherDetails);

        const newPayload = {
          client_id: clientId,
          link: "https://res.cloudinary.com/duamtsgqf/raw/upload/v1729697301/pdfs/ck8henhu38qsqooaes8e.pdf",
        };

        const newUrl = `${URL}/surepass/uploadPdf`;
        const secondResponse = await axios.post(newUrl, newPayload);
        console.log("Response from the second API:", secondResponse.data);
      } else {
        throw new Error("URL or client_id not found in the response.");
      }
    } catch (error) {
      setError("Error occurred while calling initializeEsign: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  // State handler for Surepass PROS (second handler)
  const handleSurepassPROS = async (name, email, phone) => {
    setLoading(true);
    setError(null); // Reset errors on new request

    const trimmedPhone = phone.startsWith("91") ? phone.slice(2) : phone;
    const url = `${URL}/surepass/initializeEsignPROS`;

    const payload = {
      name: name,
      email: email,
      phone: trimmedPhone,
    };

    try {
      // Fetch the PDF link based on email
      const customerResponse = await axios.get(`${URL}/customers/byEmail`, {
        params: { email },
      });

      const pdfLink = customerResponse.data.pdfLink || "default_pdf_link";
      setPdfLink(pdfLink); // Save pdfLink in state

      const response = await axios.post(url, payload);

      if (response.data && response.data.data && response.data.data.data.url && response.data.data.data.client_id) {
        const clientId = response.data.data.data.client_id;
        const esignUrl = response.data.data.data.url;

        setClientId(clientId);
        setEsignUrl(esignUrl);
        console.log("eSign URL:", esignUrl);

        localStorage.setItem("client_id", clientId);

        window.open(esignUrl, "_blank");

        const fatherDetails = {
          clientId1: clientId,
          fatherName: fatherName,
          phoneNumber: trimmedPhone,
          pdfUrl: pdfLink,
          email: email,
        };

        const url2 = `${URL}/esigndetails/surepassDetails`;
        await axios.post(url2, fatherDetails);

        const newPayload = {
          client_id: clientId,
          link: pdfLink,
        };

        const newUrl = `${URL}/surepass/uploadPdf`;
        const secondResponse = await axios.post(newUrl, newPayload);
        console.log("Response from the second API:", secondResponse.data);
      } else {
        throw new Error("URL or client_id not found in the response.");
      }
    } catch (error) {
      setError("Error occurred while calling initializeEsign: " + error.message);
    } finally {
      setLoading(false);
    }
  };



  const [pdfCompletionStatus, setPdfCompletionStatus] = useState(''); // New state for completion status
  const [pdfCompletionStatusPROS, setPdfCompletionStatusPROS] = useState(''); // New state for PROS



   const handleCheckSignedPdfPROS = async () => {
     try {
       const clientId = localStorage.getItem("client_id");
       if (!clientId) {
         console.error("Client ID not found in localStorage.");
         return;
       }
       const getUrl = `${URL}/surepass/getsignedPdf/${clientId}`;
       const response = await axios.get(getUrl);
       console.log("Response from SurepassPROS:", response.data);
       if (response.data?.data?.success) {
         setShowPdfPROS(true);
         setPdfCompletionStatusPROS("Completed");

       } else {
         setShowPdfPROS(false);
         setPdfCompletionStatusPROS("Not Completed");
         console.error("Signed PDF not generated yet.");
       }
     } catch (error) {
       console.error(
         "Error occurred while checking for signed PDF:",
         error.response ? error.response.data : error.message
       );
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
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* {step==0 && <> */}
          <div
            className="main-otp-div popup"
            style={{
              // width: "60%",
              marginTop: 0,
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
                <div className="steps-containerone ">
                  {[1, 2, 3].map((stepNumber) => (
                    <div
                      key={stepNumber}
                      style={{
                        display: "flex",
                        // gap: "10px",
                      }}
                    >
                      <div className="progress-container">
                        <span>
                          {stepNumber > 1 && <div className="line"></div>}
                          <span
                            className={`step-circle ${stepNumber <= currentStep ? "active" : ""
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
                        width: `${((currentStep - 1) / 2) * 100}%`,
                      }}
                    ></span>
                  </div>
                </div>
              </div>
            </div>

            {step == 0 && (
              <>
                <div
                  className="aadhar_details_container"
                // style={{
                //   display: "flex",
                //   justifyContent: "flex-start",
                //   flexDirection: "column",
                //   width: "470px",
                // }}
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
                    />
                  </div>
                  <ToastContainer />

                  {!otpss && (
                    <button
                      className="next_button"
                      style={
                        {
                          // cursor: "pointer",
                          // marginTop: "8px",
                          // width: "100%",
                          // backgroundColor: "#626bea",
                        }
                      }
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
                            backgroundColor: "#5ece8f",
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
                  className="aadhar_details_container pan_details_container"
                // style={{
                //   display: "flex",
                //   justifyContent: "flex-start",
                //   flexDirection: "column",
                //   width: "470px",
                // }}
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
                    // style={{
                    //   width: "450px",
                    //   marginTop: "0px",
                    //   marginBottom: "10px",
                    // }}
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
                    // style={{
                    //   width: "450px",
                    //   marginTop: "0px",
                    //   marginBottom: "10px",
                    // }}
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
                    // style={{
                    //   width: "450px",
                    //   marginTop: "0px",
                    //   marginBottom: "10px",
                    // }}
                    />
                  </div>

                  <ToastContainer />

                  <div
                    className="next_button_container"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "8px",
                    }}
                  >
                    <Button
                      className="next_button"
                      style={
                        {
                          // cursor: "pointer",
                          // backgroundColor: "#626bea",
                          // color: "white",
                          // width: "100%",
                        }
                      }
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
                  className="aadhar_details_container pan_details_container"
                // style={{
                //   display: "flex",
                //   justifyContent: "flex-start",
                //   flexDirection: "column",
                //   width: "470px",
                // }}
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
                    // style={{
                    //   width: "450px",
                    // }}
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
                    // style={{
                    //   width: "450px",
                    // }}
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
                    // style={{
                    //   width: "450px",
                    // }}
                    />
                  </div>

                  <ToastContainer />

                  <div
                    style={
                      {
                        // display: "flex",
                        // justifyContent: "flex-end",
                        // marginTop: "8px",
                      }
                    }
                  >
                    <Button
                      className="next_button"
                      style={
                        {
                          // cursor: "pointer",
                          // backgroundColor: "grey",
                          // color: "white",
                          // width: "100%",
                        }
                      }
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
              padding: "0 20px 30px",

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
                    <div key={stepNumber}>
                      <div className="progress-container">
                        <div
                          style={{
                            display: "flex",
                            cursor: "pointer",
                          }}
                        >
                          {stepNumber > 1 && <div className="line"></div>}
                          <span
                            onClick={() => {
                              if (step > stepNumber - 1) {
                                setStep(stepNumber - 1);
                              }
                            }}
                            className={`step-circle ${stepNumber <= currentStep ? "active" : ""
                              }`}
                          >
                            {stepNumber}
                          </span>
                        </div>
                        <div
                          style={{
                            fontFamily: "Gilroy-Bold",
                          }}
                        >
                          {stepNumber == 1
                            ? "Aadhar"
                            : stepNumber == 2
                              ? "PAN"
                              : "Bank"}
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      ></div>
                      {/* <Divider style={{ backgroundColor:'blue',height:'5px',border:'3px solid red' }} /> */}
                    </div>
                  ))}
                  <div className="progress-bar-containerone">
                    <div
                      className="progress-indicator"
                      style={{
                        width: `${((currentStep - 1) / 2) * 100}%`,
                        height: "5px",
                        background: "#5ece8f",
                      }}
                    ></div>
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
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      fontSize: "24px",
                      fontFamily: "Gilroy-Medium",
                    }}
                  >
                    Aadhar Verification{" "}
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
                        width: "90%",
                        marginTop: "0px",
                        marginBottom: "10px",
                      }}
                    />
                  </div>

                  <ToastContainer />

                  {!otpss && (
                    <button
                      style={{
                        cursor: "pointer",
                        marginTop: "8px",
                        width: "100%",
                        backgroundColor: "#5ece8f",
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
                            backgroundColor: "#5ece8f",
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
                    width: "100%",
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
                        width: "90%",
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
                    style={
                      {
                        // display: "flex",
                        // justifyContent: "flex-end",
                        // marginTop: "8px",
                      }
                    }
                  >
                    <Button
                      style={{
                        cursor: "pointer",
                        backgroundColor: "#5ece8f",
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
                    width: "100%",
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
                        width: "90%",
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
                        width: "90%",
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
                        width: "90%",
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
                    style={
                      {
                        // display: "flex",
                        // justifyContent: "flex-end",
                        // marginTop: "8px",
                      }
                    }
                  >
                    <Button
                      style={{
                        cursor: "pointer",
                        backgroundColor: "#626bea",
                        color: "white",
                        width: "100%",
                        marginTop: "20px",
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
            // backgroundColor: "red",
            width: "100%",
            height: "100%",
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              paddingLeft: "20px",
              paddingRight: "20px",
              height: "100%",
            }}
          >
            <article className="main-content">
              <header className="user-header">
                <h1 className="user-name">Profile</h1>
              </header>
              <nav className="tab-navigation">
                <ul>
                  <li
                    className={`nav-item ${activeTab === "details" ? "active" : ""
                      }`}
                    onClick={() => setActiveTab("details")}
                  >
                    Details
                  </li>
                  <li
                    className={`nav-item ${activeTab === "transactions" ? "active" : ""
                      }`}
                    onClick={() => setActiveTab("transactions")}
                  >
                    Transactions
                  </li>
                  <li
                    className={`nav-item ${activeTab === "documents" ? "active" : ""
                      }`}
                    onClick={() => setActiveTab("documents")}
                  >
                    Documents
                  </li>
                </ul>
              </nav>
              {activeTab === "details" && (
                <>
                  <div className="contact-info">
                    <div className="info-block">
                      <p className="label">Name:</p>
                      <p className="value"> {token.name.split(" ")[0]}</p>
                    </div>
                    <div className="info-block">
                      <p className="label">Email:</p>
                      <p className="value"> {token.email}</p>
                    </div>
                    <div className="info-block">
                      <p className="label">Phone:</p>
                      <p className="value">{token.phone}</p>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <button
                      className="edit-btn"
                      style={{
                        backgroundColor: "#e9ecef",
                        marginBottom: "20px",
                      }}
                    >
                      Edit Profile
                    </button>
                  </div>
                  <div className="rectangle-box">
                    <div className="left-box">KYC</div>
                    <div className="progress-container">
                      <div className="step-labels">
                        <span
                          className={`step-label ${onbcomp === 0 ? "active-not-started" : ""
                            }`}
                        >
                          Not Started
                        </span>
                        <span
                          className={`step-label ${onbcomp === 1 ? "active-pending" : ""
                            }`}
                        >
                          Pending
                        </span>
                        <span
                          className={`step-label ${onbcomp === 2 ? "active-completed" : ""
                            }`}
                        >
                          Completed
                        </span>
                      </div>
                      <div className="step-progress-bar">
                        <div
                          className={`progress-bar progress-${onbcomp}`}
                        ></div>
                        <div className="step-circles">
                          <div
                            className={`circle ${onbcomp >= 0 ? "active" : ""}`}
                          ></div>
                          <div
                            className={`circle ${onbcomp >= 1 ? "active" : ""}`}
                          ></div>
                          <div
                            className={`circle ${onbcomp >= 2 ? "active" : ""}`}
                          ></div>
                        </div>
                      </div>
                    </div>
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

                      {/* <button
          className="edit-btn"
          style={{
            backgroundColor: "#e9ecef",
          }}
        >
          Edit Profile
        </button> */}
                    </div>
                  </div>
                  {onbcomp === 2 && purchased.length > 0 && purchased[0].surepassStatus !== "Completed" && (
  <div className="required-documents">
    <h2>E-Signing Portal</h2>
    {!info ? (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "30px" }}>
        <div>Property Management Agreement</div>
        <button onClick={handleEsign}>Start Process</button>
      </div>
    ) : (
      <>
        {showPdf ? (
          <div>Process already completed.</div>
        ) : (
          <div className="form-container">
            <form onSubmit={(event) => {
              event.preventDefault();
              handleSurepass(token.name, token.email, token.phone);
            }}>
              <button type="submit" className="proceed-btn">Proceed</button>
            </form>
          </div>
        )}
      </>
    )}
  </div>
)}

{onbcomp === 2 && purchased.length > 0 && purchased[0].surepassProsStatus !== "Completed" && (
  <div className="required-documents">
    <h2>E-Signing Portal</h2>
    {!infoPROS ? (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "30px" }}>
        <div>Private Placement Application</div>
        <button onClick={handleEsignPROS}>Start Process</button>
      </div>
    ) : (
      <>
        {showPdfPROS ? (
          <div>Process already completed.</div>
        ) : (
          <div className="form-container">
            <form onSubmit={(event) => {
              event.preventDefault();
              handleSurepassPROS(token.name, token.email, token.phone);
            }}>
              <button type="submit" className="proceed-btn">Proceed</button>
            </form>
          </div>
        )}
      </>
    )}
  </div>
)}




                </>
              )}
              {activeTab === "transactions" && (
                <div>There is no transactions yet</div>
              )}
              {activeTab === "documents" && (
                <div style={{ marginTop: "20px" }}>
                  {/* KYC Documents Box */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "15px",
                      border: "1px solid #d1d1d1",
                      borderRadius: "8px",
                      marginBottom: "15px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                      backgroundColor: "#f9f9f9",
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "#333",
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      KYC Documents
                    </p>
                    <button
                      style={{
                        padding: "8px 16px",
                        borderRadius: "5px",
                        backgroundColor: "#007bff",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "16px",
                        fontWeight: "bold",
                        fontFamily: "Arial, sans-serif",
                        transition: "background-color 0.3s ease",
                      }}
                      onMouseOver={(e) =>
                        (e.target.style.backgroundColor = "#0056b3")
                      }
                      onMouseOut={(e) =>
                        (e.target.style.backgroundColor = "#007bff")
                      }
                    >
                      View
                    </button>
                  </div>

                  {/* Property Documents Box */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "15px",
                      border: "1px solid #d1d1d1",
                      borderRadius: "8px",
                      marginBottom: "15px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                      backgroundColor: "#f9f9f9",
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "#333",
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      Property Documents
                    </p>
                    <button
                      style={{
                        padding: "8px 16px",
                        borderRadius: "5px",
                        backgroundColor: "#007bff",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "16px",
                        fontWeight: "bold",
                        fontFamily: "Arial, sans-serif",
                        transition: "background-color 0.3s ease",
                      }}
                      onMouseOver={(e) =>
                        (e.target.style.backgroundColor = "#0056b3")
                      }
                      onMouseOut={(e) =>
                        (e.target.style.backgroundColor = "#007bff")
                      }
                    >
                      View
                    </button>
                  </div>
                </div>
              )}
            </article>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
