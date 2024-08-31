import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  ImageList,
  ImageListItem,
  ThemeProvider,
  Tooltip,
  Typography,
  createTheme,
  styled,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  useMediaQuery,
  TextField,
} from "@mui/material";
import "./NewHome.css";
import config from "../../config";
import FaQ from "./HomeComponents/FaQ";
import OurCommitment from "./HomeComponents/OurCommitment";
import TextYoutube from "./HomeComponents/TextYoutube";
import WhyInvest from "./HomeComponents/WhyInvest";
// import NewHeroSection from './HomeComponents/NewHeroSection';
import First from "./HomeComponents/First";
import Second from "./HomeComponents/Second";
import Signupstep from "./HomeComponents/Signupstep";
import Interstgraph from "./HomeComponents/Interstgraph";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import PartnerSlider from "../Partners/PartnerSlider";
function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const URL = config.URL;
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("userinfo"));
  const addAisensyWidget = () => {
    const head = document.querySelector("head");
    const script = document.createElement("script");

    script.setAttribute("type", "text/javascript");
    script.setAttribute(
      "src",
      "https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js"
    );
    script.setAttribute("id", "aisensy-wa-widget");
    script.setAttribute("widget-id", "LKoMcZ");
    head.appendChild(script);
    console.log("Aisensy widget script added:", script);
  };

  // Call the function at the start of the component if the screen is not small
  if (!isSmallScreen) {
    addAisensyWidget();
  }
  useEffect(() => {
    if (token) {
      setLoggedIn(true);
    }

    // Only add the widget if not on a small screen
  }, [token]);
  return (
    <div >
      <Navbar isLoggedIn={isLoggedIn} />
      <div className="new-home">
        <First />
        <Second />
        <Signupstep />
        <Interstgraph />
        <TextYoutube />
        <OurCommitment />
        <WhyInvest />
        <PartnerSlider />
        <FaQ />
        <Footer />
        {/* <First />
        <Second />
        <Signupstep />

        <Interstgraph />

        <TextYoutube />
        <OurCommitment />
        <WhyInvest />
        <PartnerSlider
          ourPartnersClassName="our_partners_heading"
          sliderContainerClassName="slider_container_for_try"
        />
        <FaQ />
        */}
      </div>
    </div>
  );
}

export default App;
