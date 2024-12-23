import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./IncomeSlider.css";
import { Pagination, Scrollbar, Mousewheel } from "swiper";
import { Typography, styled, useMediaQuery } from "@mui/material";
<script
  type="text/javascript"
  id="hs-script-loader"
  async
  defer
  src="//js.hs-scripts.com/45720526.js"
></script>;
const IncomeSlider = () => {
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
      >
        <SwiperSlide
          className={`swiper-slide slider ${
            activeIndex === 0 ? "active" : "inactive"
          }`}
        >
          <div className="income-small-card">
            <img className="image-svg-1" src="images/coins-solid.svg" />
            <h1>Monthly Rental Revenue </h1>
            <p>Consistent passive income from monthly rental payments.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className={`swiper-slide slider ${
            activeIndex === 1 ? "active" : "inactive"
          }`}
        >
          <div className="income-small-card second">
            <img className="image-svg-2" src="images/card_in_hand.svg" />
            <h1>Long-Term Capital Growth </h1>
            <p>
              Witness your investment thrive as the value of the property
              appreciates over time.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default IncomeSlider;
