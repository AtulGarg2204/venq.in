import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./ServiceSlider.css";
import { Pagination, Scrollbar, Mousewheel } from "swiper";
import { Typography, styled, useMediaQuery } from "@mui/material";

const ServiceSlider = () => {
    const isSmallScreen = useMediaQuery("(max-width:600px)");
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const swiper = swiperRef.current.swiper;

    swiper.on("slideChange", () => {
      const { activeIndex } = swiper;

      // Update the active index
      setActiveIndex(activeIndex);
    });
  }, []);

  return (
    <>
      <Swiper
        direction={"horizontal"}
        ref={swiperRef}
        slidesPerView={1.3}
        centeredSlides={false}
        spaceBetween={"2%"}
        scrollbar={true}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Scrollbar, Mousewheel]}
        className="mySwiper"
        onSlideChange={(swiper) => {
          const { activeIndex } = swiper;
          setActiveIndex(activeIndex);
        }}
        style={{ background: "#f6f7f9" }}
      >
      
        <SwiperSlide
          className={`swiper-slide slider ${
            activeIndex === 0 ? "active" : "inactive"
          }`}
        >
          <div
            className={`custom-services-card card1 ${
              isSmallScreen ? "small-screen-card" : ""
            }`}
            // style={{
            //   marginLeft:'-5px',
            //   height:'250px',
            //   width:'90%',
            //   paddingLeft:'20px'
            // }}
          >
            <img
              src="https://getstake.com/assets/home/modernway/1.svg"
              alt="Card 1 Image"
              className="card-image"
            />
            <div className="card-details">
              <h3 className="card-title">Capital Appreciation</h3>
              <p className="card-paragraph">
                Experience long-term wealth creation as real estate values
                increase over time
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className={`swiper-slide slider ${
            activeIndex === 1 ? "active" : "inactive"
          }`}
        >
          <div
            className={`custom-services-card card2 ${
              isSmallScreen ? "small-screen-card" : ""
            }`}
          >
            <img
              src="https://getstake.com/assets/home/modernway/2.svg"
              alt="Card 2 Image"
              className="card-image"
            />
            <div className="card-details">
              <h3 className="card-title">Passive Income</h3>
              <p className="card-paragraph">
                Receive a steady and reliable monthly rental income from real
                estate
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={`swiper-slide slider ${
            activeIndex === 2 ? "active" : "inactive"
          }`}
        >
          <div
            className={`custom-services-card card3 ${
              isSmallScreen ? "small-screen-card" : ""
            }`}
          >
            <img
              src="https://getstake.com/assets/home/modernway/3.svg"
              alt="Card 3 Image"
              className="card-image"
            />
            <div className="card-details">
              <h3 className="card-title">Inflation Hedge</h3>
              <p className="card-paragraph">
                Real estate, like gold, serves as a historical and effective
                hedge against inflation.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={`swiper-slide slider ${
            activeIndex === 3 ? "active" : "inactive"
          }`}
        >
          <div
            className={`custom-services-card card4 ${
              isSmallScreen ? "small-screen-card" : ""
            }`} style={{
              marginLeft:'-32px',
              height:'210px',
              width:'270px',
              // marginBottom:'20px'
             
            }}
          >
            <img
              src="https://getstake.com/assets/home/modernway/4.svg"
              alt="Card 4 Image"
              className="card-image"
            />
            <div className="card-details">
              <h3 className="card-title">Wealth Storage</h3>
              <p className="card-paragraph">
                Real estate, being a tangible asset, serves as a valuable and universally desired store of wealth.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ServiceSlider;
