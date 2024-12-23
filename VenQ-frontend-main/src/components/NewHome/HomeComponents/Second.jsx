import React from "react";
import "./second.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import card_image_1 from "../assets/venq_card_1_img.jpeg";
import card_image_2 from "../assets/venq_card_2_img.jpeg";
import card_image_3 from "../assets/venq_card_3_img.jpeg";
import card_image_4 from "../assets/venq_card_4_img.jpeg";
import PartnerSlider from "../../Partners/PartnerSlider";
import AsSeenIn from "./AsSeenIn";

export default function TextDiv({ sliderContainerClassName = "" }) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 100,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesPerRow: 1,
          rows: 1,
          speed: 1000,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="content-div" style={{}}>
      <div className="sticky-div">
        <h5
          style={{
            color: "rgba(82, 191, 131, 1)",
            fontSize: "24px",
            fontWeight: "600",
            fontFamily: "Plus Jakarta Sans",
            paddingTop: "20px",
            marginTop: "20px",
          }}
        >
          Why VENQ? 
        </h5>
        <h1
          style={{
            fontSize: "40px",
            fontWeight: "700",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          The Leader in digital real estate investing
        </h1>
        <p style={{ color: "grey" }}>
          Invest in high growth, income generating properties in the world's
          most lucrative real estate market
        </p>
        <p style={{ marginTop: "20px", backgroundColor: "white" }}>
          As seen in
        </p>
        {/* <div
          className={`slider-container  ${sliderContainerClassName}`}
        >
          <Slider {...settings}>
            <img
              src={
                "https://m.dailyhunt.in/assets/img/desktop/logo.svg?mode=pwa&ver=4.0.130"
              }
              alt="logo1"
            />
            <img
              src="https://republicnewsindia.com/wp-content/uploads/2023/07/Republic-News-India-New-Logo-PNG-300x100.png"
              alt="logo2"
            />
            <img
              src="https://indiansentinel.in/wp-content/uploads/2021/04/cropped-Indian-Sentinel-Copy-scaled-1.jpg"
              alt="logo3"
            />
          </Slider>
        </div> */}
        <AsSeenIn />
      </div>

      <div style={{ marginTop: "40px", height: "fit-content" }}>
        <div
          style={{
            border: "1px solid #CFCFCF",
            borderRadius: "12px",
            // height: "40vh",
            padding: "1rem",
            marginTop: "2rem",
            // marginLeft: "20px",
            display: "flex",
            flexDirection: "column",
            alighItems: "center",
            maxWidth: "300px",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        >
          <img
            style={{
              width: "90%",
              height: "auto",
              marginRight: "auto",
              marginLeft: "auto",
            }}
            src={card_image_1}
            alt="icon"
          />
          <h5>Low Ticket Size</h5>
          <p
            style={{
              marginTop: "10px",
            }}
          >
            Invest with ease starting from just Rs 5,000, making real estate
            accessible to all.
          </p>
        </div>
        <div
          style={{
            border: "1px solid #CFCFCF",
            borderRadius: "12px",
            // height: "40vh",
            padding: "1rem",
            marginTop: "2rem",
            display: "flex",
            flexDirection: "column",
            alighItems: "center",
            maxWidth: "300px",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        >
          <img
            style={{
              width: "80%",
              height: "auto",
              marginRight: "auto",
              marginLeft: "auto",
            }}
            src={card_image_2}
            alt="icon"
          />
          <h5>High Liquidity</h5>
          <p
            style={{
              marginTop: "10px",
            }}
          >
            Easily liquidate your investments through our platform, ensuring
            quick access to funds when needed.
          </p>
        </div>
        <div
          style={{
            border: "1px solid #CFCFCF",
            borderRadius: "12px",
            // height: "40vh",
            padding: "1rem",
            marginTop: "2rem",
            display: "flex",
            flexDirection: "column",
            alighItems: "center",
            maxWidth: "300px",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "auto",
              marginRight: "auto",
              marginLeft: "auto",
            }}
            src={card_image_3}
            alt="icon"
          />
          <h5>Consistent Passive Income</h5>
          <p
            style={{
              marginTop: "10px",
            }}
          >
            Earn regular income from rental yields and profit shares, providing
            a steady stream of passive income.
          </p>
        </div>
        <div
          style={{
            border: "1px solid #CFCFCF",
            borderRadius: "12px",
            // height: "40vh",
            padding: "1rem",
            marginTop: "2rem",
            display: "flex",
            flexDirection: "column",
            alighItems: "center",
            maxWidth: "300px",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "auto",
              marginRight: "auto",
              marginLeft: "auto",
            }}
            src={card_image_4}
            alt="icon"
          />
          <h5 style={{}}>Strong Annual Appreciation Potential</h5>
          <p
            style={{
              marginTop: "10px",
            }}
          >
            Benefit from the potential for capital growth and property value
            appreciation, enhancing your investment over time
          </p>
        </div>
      </div>
    </div>
  );
}
