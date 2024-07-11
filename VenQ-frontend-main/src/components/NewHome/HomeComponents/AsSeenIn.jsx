import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AsSeenIn.css";
import invetopedia from "./articleImages/investopedia.png";
import et from "./articleImages/et.png";
import forbes from "./articleImages/forbes.png";
import geekwire from "./articleImages/geekwire.png";
import entrepreneur from "./articleImages/entrepreneur.png";
import cnbc from "./articleImages/cnbc.png";
const AsSeenIn = ({
  ourPartnersClassName = "",
  sliderContainerClassName = "",
}) => {
  const partnerArray = [
    {
      name: "Partner 2",
      imageSrc:
        "https://m.dailyhunt.in/assets/img/desktop/logo.svg?mode=pwa&ver=4.0.130",
    },
    {
      name: "Partner 3",
      imageSrc: invetopedia,
    },
    {
      name: "Partner 4",
      imageSrc:
        "https://indiansentinel.in/wp-content/uploads/2021/04/cropped-Indian-Sentinel-Copy-scaled-1.jpg",
    },
    {
      name: "Partner 5",
      imageSrc: cnbc,
    },
    {
      name: "Partner 6",
      imageSrc: geekwire,
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 800,
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
      <div className={`slider-container  ${sliderContainerClassName}`}>
        <Slider {...settings}>
          {partnerArray.map((partner, index) => (
            <img
              key={index}
              src={partner.imageSrc}
              style={{
                marginRight: "20px",
              }}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AsSeenIn;
