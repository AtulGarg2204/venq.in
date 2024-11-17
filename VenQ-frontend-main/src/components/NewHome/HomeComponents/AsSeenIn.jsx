import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AsSeenIn.css";

import one from "./articleImages/1.png";
import two from "./articleImages/2.png";
import three from "./articleImages/3.png";
import four from "./articleImages/4.png";
import five from "./articleImages/5.png";
import six from "./articleImages/6.png";

const AsSeenIn = ({
  ourPartnersClassName = "",
  sliderContainerClassName = "",
}) => {
  const partnerArray = [
    {
      name: "Partner 2",
      imageSrc: one,
    },
    {
      name: "Partner 3",
      imageSrc: two,
    },
    {
      name: "Partner 4",
      imageSrc: three,
    },
    {
      name: "Partner 5",
      imageSrc: four,
    },
    {
      name: "Partner 6",
      imageSrc: five,
    },
    {
      name: "Partner 7",
      imageSrc: six,
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
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
                marginRight: "5px",
              }}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AsSeenIn;
