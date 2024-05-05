import React, { useEffect, useState } from "react";
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

  const URL = config.URL;
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("userinfo"));
  useEffect(() => {
    if (token) {
      setLoggedIn(true);
    }
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
    console.log(script);

    return () => {
      head.removeChild(script);
    };
  }, []);
  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} />
      <div className="new-home">
        <First />
        <Second />
        <Signupstep />
        <Interstgraph />
        {/* <NewHeroSection /> */}
        <TextYoutube />
        <OurCommitment />
        <WhyInvest />
        <PartnerSlider ourPartnersClassName="our_partners_heading" sliderContainerClassName="slider_container_for_try" />
        <FaQ />
        <Footer />
      </div>
    </div>
  );
}

export default App;
