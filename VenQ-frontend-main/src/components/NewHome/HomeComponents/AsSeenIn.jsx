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
    dots: false, // Disable navigation dots
    infinite: true, // Enable infinite loop
    slidesToShow: 3, // Number of slides visible on desktop
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    speed: 3000, // Transition speed
    autoplaySpeed: 0, // Continuous autoplay
    cssEase: "linear", // Linear transition for smooth effect
    pauseOnHover: false, // Prevent pausing on hover
    responsive: [
      {
        breakpoint: 768, // For small screens (mobile)
        settings: {
          slidesToShow: 4, // Show one item at a time
          slidesToScroll: 1, // Scroll one at a time
          autoplay: true,
          speed: 2000,
        },
      },
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 2, // Show two items at a time
          slidesToScroll: 1, // Scroll one at a time
          autoplay: true,
          speed: 1000,
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
