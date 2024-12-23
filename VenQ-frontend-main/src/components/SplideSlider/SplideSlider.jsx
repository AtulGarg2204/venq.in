import React, { useRef, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Options } from '@splidejs/splide';
import "./SplideSlider.css"
import '@splidejs/react-splide/css';
import mokup1 from "./images/abhyuday.jpg"
import mokup2 from "./images/indianBulletin.jpg"
import mokup3 from "./images/indiaSenial.jpg"
import mokup4 from "./images/RDTimes.jpg"
import mokup5 from "./images/republic.jpg"

import thum1 from "./images/thumAbhyuday.png"
import thum2 from "./images/thumIndianBulletin.png"
import thum3 from "./images/thumIndianSentinel.png"
import thum4 from "./images/thumRdtimes.png"
import thum5 from "./images/thumRepublic.png"
const mokup1TextLink = "https://republicnewsindia.com/young-entrepreneurs-disrupting-real-estate-with-venq-making-investment-accessible-to-all/"
const mokup4TextLink = "https://indiansentinel.in/young-entrepreneurs-disrupting-real-estate-with-venq-making-investment-accessible-to-all/"
const mokup2TextLink = "https://abhyudaytimes.com/young-entrepreneurs-disrupting-real-estate-with-venq-making-investment-accessible-to-all/"
const mokup3TextLink = "https://theindianbulletin.com/young-entrepreneurs-disrupting-real-estate-with-venq-making-investment-accessible-to-all/"
const mokup5TextLink = "https://rdtimes.in/young-entrepreneurs-disrupting-real-estate-with-venq-making-investment-accessible-to-all/"

const text1 = "Three young minds with ambitious visions are waking up India’s real estate investing industry. Sakshamm R..."
const text2 = "Sakshamm and Deveshvar first met at university, where their entrepreneurial spirit evolved into a friendship. Determined to chase their goals, they took a leap of faith and left college at the ages of 19 and 18 years..."
const text3 = "The trio founded VENQ to address a major hurdle in the Indian market – the high investment required for real estate. VENQ removes this hurdle by allowing individuals..."
const text4 = "VENQ has been built on the pillars of innovation, accessibility, and transparency. Its team is passionate about empowering people to..."
const text5 = "With its user-friendly platform and commitment to customer success, VENQ is positioned to become a leading force in real estate investment..."

const generateSlides = [
    { img: mokup1, link: mokup2TextLink, text: text1 },
    { img: mokup2, link: mokup3TextLink, text: text2 },
    { img: mokup3, link: mokup4TextLink, text: text3 },
    { img: mokup4, link: mokup5TextLink, text: text4 },
    { img: mokup5, link: mokup1TextLink, text: text5 }
]

const generateSlidesThum = [thum1, thum2, thum3, thum4, thum5]


function SplideSlider() {
    const mainRef = useRef(null);
    const thumbsRef = useRef(null);
    useEffect(() => {
        if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
            mainRef.current.sync(thumbsRef.current.splide);
        }
    }, []);

    const renderSlides = () => {
        return generateSlides.map((slide, index) => (
            <SplideSlide key={index} className="main splide-img-container ">
                <img src={slide.img} alt="my-img" />
                <div className="slide-text">
                    <h3>{slide.text} </h3>
                    <a href={slide.link} target='_blank' rel='reference'>Read More</a>
                </div>
            </SplideSlide>
        ));
    };

    const renderSlidesThum = () => {
        return generateSlidesThum.map((slide, index) => (
            <SplideSlide key={index} className="thumSlide image-container">
                <img src={slide} alt="my-img" />
            </SplideSlide>
        ));
    };

    const mainOptions = {
        perPage: 1,
        perMove: 1,
        gap: '1rem',
        pagination: false,
        type: "fade",
        arrows: false
    };

    const thumbsOptions = {
        type: 'slide',
        rewind: true,
        gap: '3rem',
        pagination: false,
        cover: true,
        focus: 'center',
        isNavigation: true,
        arrows: true,
        perPage: 1,
        arrowPath: "M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
    };


    return (
        <div className="wrapper">
            <Splide
                options={mainOptions} ref={mainRef} aria-labelledby="thumbnail-slider-example"
            >
                {renderSlides()}
            </Splide>

            <div className='top-thum-container'>
                <Splide
                    className="thum-container"
                    options={thumbsOptions}
                    ref={thumbsRef}
                    aria-label="The carousel with thumbnails. Selecting a thumbnail will change the main carousel"
                >
                    {renderSlidesThum()}
                </Splide>
            </div>
        </div>
    );
}
export default SplideSlider;