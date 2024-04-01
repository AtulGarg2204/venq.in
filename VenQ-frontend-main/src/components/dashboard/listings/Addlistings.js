import React, { useState, useSyncExternalStore } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../Dashboard";
import Axios from 'axios';
import "./Addlistings.css";
import PhotoUploader from "./PhotoUploader";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import FourthPage from './FourthPage';
// import LastPage from "./LastPage";
import ThirdPage from './ThirdPage';
import SecondLastPage from './secondLastPage';
import FinalPage from "./FinalPage";
//material ui imports
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Link,
  Typography,
  Alert
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import Sucess from './Success';
import Confirm from './Confirm'
import axios from "axios";
import config from '../../../config'

const Addlisting = () => {
  const URL = config.URL;
  const btnstyle = { margin: "8px 0" };
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  // const [specs,setSpecs]=useState([]);
  // const [step,setStep]=useState(1);
  // const [propertyprice,setPropertyPrice]=useState("");
  // const [propertydescription,setPropertyDescription]=useState("");
  // const [propertyoverview,setPropertyOverview]=useState("");
  // const [locationdescription,setLocationDescription]=useState("");
  // const [propertyheading,setPropertyHeading]=useState("");
  // const [transactioncost,setTransactionCost]=useState("");
  // const [propertylogolink,setPropertyLogoLink]=useState("");
  // const [invcost,setInvCost]=useState("");
  // const [venqfee,setVenqFee]=useState("");
  // const [maintainencefee,setMaintainenceFee]=useState("");
  // const [projectedgrossrent,setProjectedGrossRent]=useState("");
  // const [servicecharges,setServiceCharges]=useState("");
  // const [annualnetincome,setAnnualNetIncome]=useState("");
  // const [mainheading,setMainHeading]=useState("");
  // const [photos,setPhotos]=useState([]);
  // const [boxheadings,setBoxHeadings]=useState("");
  // const [subheading,setSubHeading]=useState("");
  // const [price,setPrice]=useState("");
  // const [fund,setFund]=useState("");
  // const [annualizedreturn,setAnnualizedReturn]=useState("");
  // const [annualappreciation,setAnnualAppreciation]=useState("");
  // const [grossyield,setGrossYield]=useState("");
  // const [netyield,setNetYield]=useState("");
  // const [amenityname,setAmenityName]=useState("");
  // const [amenitylink,setAmenityLink]=useState("");
  // const [locationlink,setLocationLink]=useState("");
  // const [documentName,setDocumentName]=useState("");
  // const [documentlink,setDocumentLink]=useState("");
  // const [tourlink,setTourlink]=useState("");
  // const [specsimage,setSpecsImage]=useState("");
  // const [specstitle,setSpecsTitle]=useState("");
  // const [specssubtitle,setSpecsSubTitle]=useState("");
  const [im,setIm]=useState([]);
  const [sim,setSim]=useState([]);
  const [spo,setSpo]=useState([]);
  const [fundt,setFundt]=useState([]);
  const [amneties,setAmenities]=useState([]);
  const [docs,setDocs]=useState([]);
  const [dlink,setDlink]=useState("");
  const [formData,setformData]=useState({
      specs:[],
      specsimage:"",
      propertyoverview:"",
      specstitle:"",
      specssubtitle:"",
      propertyprice:"",
      propertypricen:"",
      propertyheading:"",
      propertydescription:"",
      transactioncost:"",
      propertylogolink:"",
      invcost:"",
      venqfee:"",
      maintainencefee:"",
      projectedgrossrent:"",
      servicecharges:"",
      annualnetincome:"",
      mainheading:"",
      boxheadings:"",
      subheading:"",
      price:"",
      fund:"",
      annualizedreturn:"",
      annualappreciation:"",
      grossyield:"",
      netyield:"",
      amenityname:"",
      amenitylink:"",
      documentName:"",
      documentlink:"",
      locationlink:"",
      locationdescription:"",
      tourlink:"",
      fundingtitle:"",
      fundingsubtitle:"",
      fundingdescription:""

  })
  
  const FormTitles = ["First Page", "Second Page", "ThirdPage","FourthPage","Fifth Page","Sixth Page"];
  const PageDisplay = () => {
    if (page === 0) {
      return <FormUserDetails fd={formData} sfd={setformData} si={setIm} i={im} />;
    } else if (page === 1) {
      return <FormPersonalDetails fd={formData} sfd={setformData} spi={setSim} sp={sim} fsp={spo} sfsp={setSpo} />;
    } else if (page === 2) {
      return  <ThirdPage fd={formData} sfd={setformData} />;;
    } else if (page === 3) {
      return  <FourthPage fd={formData} sfd={setformData} />;;
    }else if (page === 4) {
      return  <SecondLastPage fd={formData} sfd={setformData} fo={fundt} sfo={setFundt} />;;
    }  else {
      return <FinalPage fd={formData} sfd={setformData} am={amneties} sam={setAmenities} dc={docs} sdc={setDocs} dl={dlink} sdl={setDlink} />;
    }
  };
 
  const handleSubmit=async ()=>{
    try{
      const sobj={
        images:im,
        tourlink:formData.tourlink,
        properyheading:formData.propertyheading,
        propertydescription:formData.propertydescription,
        specs:spo,
        propertyprice:formData.propertyprice,
        annualizedreturn:formData.annualizedreturn,
        annualappreciation:formData.annualappreciation,
        grossyield:formData.grossyield,
        netyield:formData.netyield,
        propertyoverview:formData.propertyoverview,
        propertypricen:formData.propertypricen,
        transactioncost:formData.transactioncost,
        venqfee:formData.venqfee,
        projectedgrossrent:formData.projectedgrossrent,
        maintainencefee:formData.maintainencefee,
        servicecharges:formData.servicecharges,
        annualnetincome:formData.annualnetincome,
        fundtimeline:fundt,
        locationlink:formData.locationlink,
        locationdescription:formData.locationdescription,
        amenities:amneties,
        documents:docs
      }
      // console.log(sobj);
      const result=await axios.post(`${URL}/listing/add`,sobj);
      if(result){
        console.log('submit ho gaya');
      }else{
        console.log('nahi hua submit');
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
   
        
        <div className="myform">
      <div className="progressbar">
        <div
          style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page==0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                  handleSubmit();
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
    
  );
};

export default Addlisting;
