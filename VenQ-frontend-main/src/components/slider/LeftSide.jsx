import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import './Slider.css'
import { Pagination, Scrollbar, Mousewheel } from "swiper";
import { Typography, styled, useMediaQuery } from "@mui/material";

const SliderHeading = styled(Typography)`
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 1.25rem;
`

const SliderSubHeading = styled(Typography)`
  text-align: left;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 1rem;
  }
`

const LeftSide = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    const swiper = swiperRef.current.swiper;

    swiper.on('slideChange', () => {
      const { activeIndex } = swiper;

      // Update the active index
      setActiveIndex(activeIndex);
    });
  }, []);

  return (
    <>
      <Swiper
        direction={isSmallScreen ? 'horizontal' : 'vertical'}
        ref={swiperRef}
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={30}
        scrollbar={true}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}

        modules={[Pagination, Scrollbar, Mousewheel]}
        className="mySwiper"
        onSlideChange={(swiper) => {
          const { activeIndex } = swiper;

          // Update the active index
          setActiveIndex(activeIndex);
        }}
      >
        <SwiperSlide className={`swiper-slide slider ${activeIndex === 0 ? 'active' : 'inactive'}`} style={{alignItems:"flex-start",width:"60%",marginBottom:'80px'}}>
          <div  className={activeIndex === 0 ? 'number-focused' : 'number'}>01</div>
          <SliderHeading variant="h5">Explore</SliderHeading>
          <SliderSubHeading variant="h6">
            Register within 3 minutes and delve into our handpicked property selection.
          </SliderSubHeading>
        </SwiperSlide>

        <SwiperSlide className={`swiper-slide slider ${activeIndex === 1 ? 'active' : 'inactive'}`} style={{alignItems:"flex-start",  width:"60%",marginBottom:'80px'}}>
          <div className={activeIndex === 1 ? 'number-focused' : 'number'}>02</div>
          <SliderHeading variant="h5" >Acquire</SliderHeading>
          <SliderSubHeading variant="h6" >
            Secure a share in properties that resonate with you.
          </SliderSubHeading>
        </SwiperSlide>

        <SwiperSlide className={`swiper-slide slider ${activeIndex === 2 ? 'active' : 'inactive'}`} style={{alignItems:"flex-start",width:"50%",marginBottom:'80px'}}>
          <div  className={activeIndex === 2 ? 'number-focused' : 'number'}>03</div>
          <SliderHeading variant="h5" >Manage</SliderHeading>
          <SliderSubHeading variant="h6" >
           Monitor your income and investments effortlessly through our online platform.
          </SliderSubHeading>
        </SwiperSlide>
        
        <SwiperSlide className={`swiper-slide slider ${activeIndex === 3 ? 'active' : 'inactive'}`} style={{alignItems:"flex-start",width:"60%",marginBottom:'80px'}}>
          <div  className={activeIndex === 3 ? 'number-focused' : 'number'}>04</div>
          <SliderHeading variant="h5" >Exit</SliderHeading>
          <SliderSubHeading variant="h6" >
          A flexible exit strategy, allowing investors to exit at the maturity of the CCDs.
          </SliderSubHeading>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default LeftSide