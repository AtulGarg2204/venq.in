import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PartnerSlider.css";
import razorpayimg from "./razorpay.png";
import aisensy from "./aisensy.png";
const PartnerSlider = ({
  ourPartnersClassName = "",
  sliderContainerClassName = "",
}) => {
  const partnerArray = [
    { name: "Partner 1", imageSrc: aisensy },
    { name: "Partner 2", imageSrc: "images/landmark.png" },
    { name: "Partner 3", imageSrc: "images/whiteland.png" },
    { name: "Partner 4", imageSrc: "images/smartHomenew.png" },
    { name: "Partner 5", imageSrc: "images/phonepe.png" },
    { name: "Partner 6", imageSrc: "images/otpless.png" },
    { name: "Partner 7", imageSrc: "images/surepass.png" },
    { name: "Partner 8", imageSrc: razorpayimg },
  ];
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
    <div className="partnerMain">
      <div className="partners-container">
        <div className={`partners-text`}>
          <h2 className={`partners-heading ${ourPartnersClassName}`}>
            OUR PARTNERS
          </h2> 
        </div>
        <div className={`slider-container  ${sliderContainerClassName}`}>
          <Slider {...settings}>
            {partnerArray.map((partner, index) => (
              <img key={index} src={partner.imageSrc} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default PartnerSlider;
