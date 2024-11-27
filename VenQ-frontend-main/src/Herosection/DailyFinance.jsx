import React, { useEffect, useState, useRef } from 'react';
import { FaCalendarAlt } from "react-icons/fa";
import { Grid, Button, Typography, Box, Card, styled, CardActionArea, CardContent, CardMedia } from '@mui/material';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Carousel } from 'react-responsive-carousel'; // Assuming you're using react-responsive-carousel
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { SiTrustpilot } from "react-icons/si";
import config from "../config";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel styles
import axios from "axios"; // Make sure axios is imported
import AsSeenIn from '../components/NewHome/HomeComponents/AsSeenIn';
const URL = config.URL;




gsap.registerPlugin(ScrollTrigger);

const Property = styled(Card)`
    background-color: white;
    border-radius: 10px;
    transition: transform 0.2s ease-in-out;
    &:hover {
      transform: translateY(-10px);
    }
  `;

const SubheaderFixed = styled(Box)`
    display: flex;
    position: fixed;
    top: 5px;
    left: 5px;
    font-size: 12px;
    gap: 10px;
  `;

const FixedBox = styled(Box)`
    background-color: white;
    color: black;
    position: fixed;
    bottom: 5px;
    right: 5px;
    font-family: "Inter";
    font-size: 12px;
    padding: 5px;
    border-radius: 5px;
  `;

const PriceBox = styled(Box)`
    display: flex;
    justify-content: space-between;
    margin: 5px 0 14px 0;
    margin-left: 4px;
    align-items: center;
  `;
const ReturnsBox = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 10px;
    background-color: #f6f7f9;
    font-family: "Inter";
    color: grey;
    > div {
      display: flex;
      justify-content: space-between;
      padding: 5px;
      font-size: 15px;
    }
  `;

const Subheader = styled(Box)`
    display: flex;
    gap: px;
    margin-top: 2px;
    margin-left: 16px;
    & div {
      // height:20px;
      border: 1px solid lightgray;
      padding: 4px 5px;
      font-size: 11px;
      font-weight: medium;
      border-radius: 6px;
    }
  `;

const Header = styled(Typography)`
    font-size: 16px;
    font-weight: 600;
    height: 30px;
    display: flex;
    align-items: center;
    font-family: "Gilroy-Bold";
    margin-top: 10px;
    margin-left: 20px;
  `;
const DailyFinance = () => {
    const [listings, setListings] = useState([]);
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0); // Track the current listing index
    const marqueeRef = useRef(null);
    const animationRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const marqueeElement = marqueeRef.current;
        gsap.set(textRef.current, { y: 200, opacity: 0 });

        // gsap.fromTo(
        //     marqueeElement,
        //     { x: '100%' },
        //     {
        //         x: '-100%',
        //         scrollTrigger: {
        //             trigger: marqueeElement,
        //             start: 'top 80%',
        //             end: 'bottom 20%',
        //             scrub: true,
        //             toggleActions: "play reverse play reverse",
        //         },
        //         ease: 'none',
        //     }
        // );

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: textRef.current,
                start: 'top 90%',
                toggleActions: "play none none none",
                // markers: true,
            },
        });

        tl.to(textRef.current, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.inOut', // Ensure a smooth easing curve
        });
        // ---------------------for live div home----------------
        if (JSON.parse(localStorage.getItem("userinfo"))) {
            setLoggedIn(true);
        }

        axios
            .get(`${URL}/listing`)
            .then((response) => {
                const filteredListings = response.data.filter((listing) => listing.islive === 1 || listing.islive === 2);
                setListings(filteredListings);
            })
            .catch((error) => {
                console.error(error);
            });
        // ---------------------for live div home----------------
    }, []);

    const renderPropertyCard = (listing) => (
        <Grid item key={listing._id} xs={12} sm={6} md={4} lg={3}>
            <Link
                to={isLoggedIn ? `/dashboard/properties/view/${listing._id}` : ""}
                style={{ textDecoration: "none" }}
            >
                <Card sx={{ width: { xs: "100%", sm: "300px", md: "320px", xl: "320px" } }} className='md:scale-[.8] xl:scale-[1]'>
                    <CardActionArea>
                        <CardMedia className=''>
                            <Carousel showThumbs={false} statusFormatter={() => ""}>
                                {listing.images.map((image, index) => (
                                    <div key={index} className="relative md:h-[140px] xl:h-[180px]">
                                        <img
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                            }}
                                            src={image}
                                            alt={`image-${index}`}
                                        />
                                        {listing.islive === 1 && (
                                            <Box
                                                sx={{
                                                    position: "absolute",
                                                    top: "10px",
                                                    left: "10px",
                                                    display: "flex",
                                                    gap: "8px",
                                                    flexWrap: { xs: "wrap", sm: "nowrap" },
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        backgroundColor: "#56C29C",
                                                        color: "white",
                                                        padding: "5px 10px",
                                                        borderRadius: "5px",
                                                        fontSize: { xs: "10px", sm: "12px" },
                                                    }}
                                                >
                                                    Live
                                                </Box>
                                                <Box
                                                    sx={{
                                                        backgroundColor: "white",
                                                        color: "black",
                                                        padding: "5px",
                                                        borderRadius: "5px",
                                                        fontSize: { xs: "10px", sm: "12px" },
                                                    }}
                                                >
                                                    Reduced Pricing
                                                </Box>
                                            </Box>
                                        )}
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                bottom: "10px",
                                                right: "10px",
                                                backgroundColor: "white",
                                                color: "black",
                                                padding: "5px",
                                                borderRadius: "2px",
                                                fontSize: { xs: "10px", sm: "12px" },
                                                zIndex: "10",
                                            }}
                                        >
                                            {listing.properyheading.includes("Plot")
                                                ? "Plot"
                                                : "Luxury Property"}
                                        </Box>
                                    </div>
                                ))}
                            </Carousel>
                        </CardMedia>

                        <CardContent>
                            <Subheader
                                sx={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    fontSize: { xs: "8px", sm: "10px" },
                                }}
                            >
                                {listing.propertydescription
                                    .split(" | ")
                                    .map((desc, index) => (
                                        <Box
                                            key={index}
                                            sx={{
                                                marginLeft: index > 0 ? "8px" : "-15px",
                                                fontSize: "8px",
                                            }}
                                        >
                                            {desc}
                                        </Box>
                                    ))}
                            </Subheader>

                            <Typography
                                gutterBottom
                                style={{
                                    fontSize: "15px",
                                    fontWeight: "bold",
                                    marginTop: "8px",
                                }}
                                sx={{
                                    textAlign: "start",
                                    fontSize: { xs: "12px", sm: "15px" },
                                    fontWeight: "800",
                                }}
                            >
                                {listing.properyheading}
                            </Typography>

                            {isLoggedIn ? (
                                <>
                                    <Box sx={{ marginTop: "4px" }}>
                                        <Typography
                                            color="primary"
                                            sx={{
                                                fontWeight: "600",
                                                fontSize: { xs: "16px", sm: "18px" },
                                            }}
                                        >
                                            Rs {listing.propertyprice}
                                        </Typography>
                                    </Box>
                                    <ReturnsBox style={{ marginTop: "1rem" }}>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                flexWrap: "wrap",
                                                justifyContent: "space-between",
                                                padding: "10px 0",
                                            }}
                                        >
                                            {/* Tokens */}
                                            <Box sx={{ flex: 1, textAlign: "center" }}>
                                                <Box
                                                    sx={{
                                                        fontFamily: "Inter",
                                                        fontSize: "10px",
                                                        color: "#44475B",
                                                    }}
                                                >
                                                    Tokens
                                                </Box>
                                                <Box
                                                    sx={{
                                                        color: "#00B386",
                                                        fontWeight: "bold",
                                                        fontSize: { xs: "14px", sm: "16px" },
                                                        marginTop: "4px",
                                                    }}
                                                >
                                                    {listing.tokens || "N/A"}
                                                </Box>
                                            </Box>

                                            {/* Vertical Divider */}
                                            <Box
                                                sx={{
                                                    width: "1px",
                                                    backgroundColor: "black",
                                                    height: "auto",
                                                    margin: "0 5px",
                                                }}
                                            />

                                            {/* Est. Yields */}
                                            <Box sx={{ flex: 1, textAlign: "center" }}>
                                                <Box
                                                    sx={{
                                                        fontFamily: "Inter",
                                                        fontSize: "10px",
                                                        color: "#44475B",
                                                    }}
                                                >
                                                    Est. Yields
                                                </Box>
                                                <Box
                                                    sx={{
                                                        color: "#00B386",
                                                        fontWeight: "bold",
                                                        fontSize: { xs: "14px", sm: "16px" },
                                                        marginTop: "4px",
                                                    }}
                                                >
                                                    {listing.estimatedYields || "N/A"}
                                                </Box>
                                            </Box>

                                            {/* Vertical Divider */}
                                            <Box
                                                sx={{
                                                    width: "1px",
                                                    backgroundColor: "black",
                                                    height: "auto",
                                                    margin: "0 5px",
                                                }}
                                            />

                                            {/* Target ARR */}
                                            <Box sx={{ flex: 1, textAlign: "center" }}>
                                                <Box
                                                    sx={{
                                                        fontFamily: "Inter",
                                                        fontSize: "10px",
                                                        color: "#44475B",
                                                    }}
                                                >
                                                    Target ARR
                                                </Box>
                                                <Box
                                                    sx={{
                                                        color: "#00B386",
                                                        fontWeight: "bold",
                                                        fontSize: { xs: "14px", sm: "16px" },
                                                        marginTop: "4px",
                                                    }}
                                                >
                                                    {listing.targetAPR || "N/A"}
                                                </Box>
                                            </Box>

                                            {/* Vertical Divider */}
                                            <Box
                                                sx={{
                                                    width: "1px",
                                                    backgroundColor: "black",
                                                    height: "auto",
                                                    margin: "0 5px",
                                                }}
                                            />

                                            {/* New Box - Example Data */}
                                            <Box sx={{ flex: 1, textAlign: "center" }}>
                                                <Box
                                                    sx={{
                                                        fontFamily: "Inter",
                                                        fontSize: "10px",
                                                        color: "#44475B",
                                                    }}
                                                >
                                                    Est. Gain
                                                </Box>
                                                <Box
                                                    sx={{
                                                        color: "#00B386",
                                                        fontWeight: "bold",
                                                        fontSize: { xs: "14px", sm: "16px" },
                                                        marginTop: "4px",
                                                    }}
                                                >
                                                    {listing.potentialGain || "N/A"}
                                                </Box>
                                            </Box>
                                        </Box>
                                    </ReturnsBox>

                                </>
                            ) : (
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        height: "60px",
                                        
                                    }}
                                >
                                    <Link to="/login" style={{ color: "#2ab589", fontWeight: "bold" }}>
                                        Login {" "}
                                    </Link>{"  "}
                                     <h1 className='ml-1'>{" "} to view the property.</h1>
                                </Box>
                            )}
                        </CardContent>
                    </CardActionArea>
                    {isLoggedIn && listing.islive === 1 && (
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginBottom: "15px",
                            }}
                        >
                            <Button
                                sx={{
                                    padding: { xs: "8px 20px", sm: "10px 30px" }, // Adjust padding for mobile and larger screens
                                    backgroundColor: "#0170dc",
                                    color: "white",
                                    fontSize: { xs: "14px", sm: "16px" }, // Adjust font size for mobile and larger screens
                                }}
                            >
                                Invest
                            </Button>
                        </Box>
                    )}

                    {isLoggedIn && listing.islive === 2 && (
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginBottom: { xs: "20px", sm: "25px" }, // Adjust margin for mobile and larger screens
                            }}
                        >
                            <Button
                                sx={{
                                    padding: { xs: "6px 15px", sm: "8px 25px" }, // Adjust padding for mobile and larger screens
                                    backgroundColor: "#2AB589",
                                    color: "white",
                                    fontSize: { xs: "12px", sm: "13px" }, // Adjust font size for mobile and larger screens
                                }}
                            >
                                I'm Interested
                            </Button>
                        </Box>
                    )}

                </Card>
            </Link>
        </Grid>
    );


    const handleNext = () => {
        if (listings.length > 0) {
            const nextIndex = (currentIndex + 1) % listings.length;

            // Animate out
            gsap.to(animationRef.current, {
                x: "-100%",
                duration: 0.5,
                onComplete: () => {
                    setCurrentIndex(nextIndex);

                    // Animate in
                    gsap.fromTo(
                        animationRef.current,
                        { x: "100%" },
                        { x: "0%", duration: 0.5 }
                    );
                },
            });
        }
    };

    const handleBack = () => {
        if (listings.length > 0) {
            const prevIndex = (currentIndex - 1 + listings.length) % listings.length;

            // Animate out
            gsap.to(animationRef.current, {
                x: "100%",
                duration: 0.5,
                onComplete: () => {
                    setCurrentIndex(prevIndex);

                    // Animate in
                    gsap.fromTo(
                        animationRef.current,
                        { x: "-100%" },
                        { x: "0%", duration: 0.5 }
                    );
                },
            });
        }
    };

    const getPreviousIndex = (index) => (index - 1 + listings.length) % listings.length;
    const getNextIndex = (index) => (index + 1) % listings.length;

    return (
        <div className="w-full h-full bg-white md:mt-[12vw] 2xl:mt-[12vw]">

            <div className="w-full font-raleway mt-[5vw] text-black h-full">
                <div className="flex flex-col h-full justify-center items-center">
                    <h1 className='2xl:text-xl md:text-[16px] font-medium text-zinc-400'>We've been featured in</h1>
                    <div className="max-w-screen-sm overflow-hidden h-full">
                        <div className="w-full max-w-screen-sm md:w-[50vw] 2xl:w-[40vw] md:mt-[1vw] 2xl:mt-[2vw] h-[6vw] md:h-[4.5vw]">
                            <AsSeenIn />
                        </div>
                    </div>


                    <div className="flex gap-[1vw] mt-[7vw] md:mt-[2vw] 2xl:mt-[1vw] text-[13px] font-lato justify-center items-center w-full h-full">
                        <h1>4.7 Excellent</h1>
                        <div className='flex md:gap-[8px] 2xl:gap-[2px]'>
                            <div className="2xl:w-[1.1vw] md:w-[1.5vw] 2xl:h-[1.1vw] md:h-[1.5vw] text-white flex justify-center items-center bg-[#219653]">
                                <SiTrustpilot />
                            </div>
                            <div className="2xl:w-[1.1vw] md:w-[1.5vw] 2xl:h-[1.1vw] md:h-[1.5vw] text-white flex justify-center items-center bg-[#219653]">
                                <SiTrustpilot />
                            </div>
                            <div className="2xl:w-[1.1vw] md:w-[1.5vw] 2xl:h-[1.1vw] md:h-[1.5vw] text-white flex justify-center items-center bg-[#219653]">
                                <SiTrustpilot />
                            </div>
                            <div className="2xl:w-[1.1vw] md:w-[1.5vw] 2xl:h-[1.1vw] md:h-[1.5vw] text-white flex justify-center items-center bg-[#219653]">
                                <SiTrustpilot />
                            </div>
                            <div className="2xl:w-[1.1vw] md:w-[1.5vw] 2xl:h-[1.1vw] md:h-[1.5vw] text-white flex justify-center items-center bg-[#219653]">
                                <SiTrustpilot />
                            </div>
                        </div>
                        <div className="flex gap-2 justify-center items-center text-[#219653]">
                            <SiTrustpilot size={14} />
                            <h1 className='text-black'>Trustpilot</h1>
                        </div>

                    </div>
                </div>
            </div>

            {/* Property Section */}
            <div className="w-full hidden md:block md:h-[40vw] 2xl:h-[35vw] mt-[5vw]">
                <div className="main w-full h-full px-[10vw] gap-[1vw] flex justify-center items-center">
                    <div className="left pr-[4vw] w-[40%] h-full flex flex-col justify-center items-start">
                        <h1 className="px-4 py-2 bg-zinc-100 md:text-[16px] font-medium justify-center items-center gap-3 flex text-[#2ab589] rounded-xl">
                            <FaCalendarAlt /> Secure
                        </h1>
                        <h1 ref={textRef} className="2xl:text-[40px] overflow-hidden md:text-[32px] font-medium font-raleway mt-5 leading-[2.4vw]">
                            Real Estate Meets the <br /> Digital Age
                        </h1>
                        <h1 className="mt-4 text-zinc-400 font-regular">
                            Blockchain-backed <span className="font-medium text-[#2ab589]">Tokens + Equity</span> unlock access to premium properties.
                        </h1>
                    </div>

                    {/* Red and Green Cards with Listings */}
                    <div className="right hidden w-[40%] h-full md:flex flex-col justify-center items-center">
                        <div className="w-full relative h-full rounded-3xl bg-zinc-100 flex justify-center items-start py-[2vw]">
                            {/* Previous Card */}
                            <div className="2xl:w-[65%] md:w-[70%] md:scale-[.7] mt-[4vw] p-[2.5vw] flex justify-start items-center 2xl:scale-100 opacity-40 absolute h-[60%] md:left-[7vw] 2xl:left-[2vw] rounded-3xl">
                                {listings.length > 0 && renderPropertyCard(listings[getPreviousIndex(currentIndex)])}
                            </div>

                            {/* Next Card */}
                            <div className="2xl:w-[65%] md:w-[70%] md:scale-[.7] mt-[4vw] p-[2.5vw] flex justify-end items-center 2xl:scale-100 opacity-40 absolute h-[60%] md:right-[7vw] 2xl:right-[2vw] rounded-3xl">
                                {listings.length > 0 && renderPropertyCard(listings[getNextIndex(currentIndex)])}
                            </div>

                            {/* Main Content */}
                            <div className="2xl:w-[65%] md:w-[77%] md:mt-[0vw] 2xl:mt-[2vw] p-[2.5vw] flex justify-center bg- items-center absolute md:h-[83%] 2xl:h-[70%] z-10 md:rounded-lg 2xl:rounded-3xl overflow-hidden md:scale-[.9] 2xl:scale-110 transition-transform duration-300 ease-in-out">
                                <div className="w-[100%] flex justify-center items-center h-[80%]">
                                    {listings.length > 0 && renderPropertyCard(listings[currentIndex])}
                                </div>
                            </div>

                            {/* Navigation Buttons */}
                            <div className="flex absolute justify-between items-center bottom-5 px-[4vw] w-full">
                                <button className="px-[2vw] py-3 bg-black text-zinc-300 rounded-full
                                hover:text-black hover:bg-zinc-200 
               transition-all duration-300 ease-in-out 
               transform hover:scale-105 hover:translate-y-[-3px]
                                " onClick={handleBack} variant="contained">
                                    Back
                                </button>
                                <button className="px-[2vw] py-3 bg-black text-zinc-300 rounded-full
                                hover:text-black hover:bg-zinc-200 
               transition-all duration-300 ease-in-out 
               transform hover:scale-105 hover:translate-y-[-3px]
                                " onClick={handleNext}>
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full font-raleway h-auto px-6 mt-10 md:hidden flex flex-col justify-center items-center">
                {/* Title and Description */}
                <div className="w-full flex flex-col justify-center items-center mb-6">
                    {/* <h1 className='px-4 py-2 bg-zinc-100 md:text-[14px] 2xl:text-[16px] font-semibold justify-center items-center gap-3 flex text-[#2ab589] rounded-xl'>
                        <FaCalendarAlt /> Secure
                    </h1> */}
                    <h1 className="text-[26px] text-center font-semibold w-full font-raleway mt-4 leading-[1.1]">
                        Real Estate Meets the <br /> Digital Age
                    </h1>
                    <h1 className="mt-3 px-[2rem] text-center text-zinc-400 text-[12px]">
                        Blockchain-backed <span className="font-medium text-[#2ab589]">Equity-Tokens</span> unlock access to premium properties.
                    </h1>
                </div>

                {/* Card Carousel */}
                <div className="w-full relative flex flex-col justify-center items-center">
                    {/* Current Card */}
                    <div className="w-full p-4 rounded-2xl bg-zinc-100 flex justify-center items-center overflow-hidden">
                        {listings.length > 0 && renderPropertyCard(listings[currentIndex])}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-around px-5 items-center w-full mt-4">
                        <button
                            className="w-[15%] flex justify-center items-center py-2 bg-black text-zinc-300 rounded-full text-center *:hover:text-black hover:bg-zinc-200 
               transition-all duration-300 ease-in-out 
               transform hover:scale-105 hover:translate-y-[-3px]"
                            onClick={handleBack}
                            variant="contained"
                        >
                            <FaArrowLeft size={14} />
                        </button>
                        <Link to="/properties" className='2xl:py-2.5 2xl:px-10 py-2.5 text-xs md:text-lg px-[1.5rem] md:py-2.5 md:px-10 rounded-full bg-black text-white font-semibold
                      hover:text-black hover:bg-white
               transition-all duration-300 ease-in-out 
               transform hover:scale-105 hover:translate-y-[-3px]'>Browse Properties</Link>
                        <button
                            className="w-[15%] flex justify-center items-center text-right py-2 bg-black text-zinc-300 rounded-full 
                            hover:text-black hover:bg-zinc-200 
               transition-all duration-300 ease-in-out 
               transform hover:scale-105 hover:translate-y-[-3px]"
                            onClick={handleNext}
                        >
                            <FaArrowRight size={14} />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DailyFinance;
