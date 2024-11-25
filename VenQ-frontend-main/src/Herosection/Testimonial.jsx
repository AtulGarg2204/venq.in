import React, { useState } from 'react';
import { FaCalendarAlt } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { SiTrustpilot } from "react-icons/si";

import img1 from '../assets/images/CA__1_-removebg-preview.png';
import img2 from '../assets/images/CA__2_-removebg-preview.png';
import img3 from '../assets/images/CA__3_-removebg-preview.png';

const Testimonials = () => {
    const testimonials = [
        { name: 'Vivan Figg', username: 'Investor', text: 'Nice support team', imageUrl: "https://user-images.trustpilot.com/6717ca39beb292ec159cddaf/73x73.png", platform: "Trustpilot" },
        { name: 'Catalina Saiaz', username: 'Investor', text: 'VENQ has completely changed how I approach investments. Starting with just ₹5000, I’ve been able to diversify and grow my portfolio effortlessly. Highly recommended!', imageUrl: img2, platform: "Trustpilot" },
        { name: 'Ronit Kumar', username: 'Investor', text: 'Amazing experience must invest in properties through VenQ. A trustworthy platform for smart investors.', imageUrl: "https://user-images.trustpilot.com/6609c0a8914b3700134648ed/73x73.png", platform: "Google" },
        { name: 'Ananya Verma', username: 'Investor', text: 'I love how clear and secure VENQ makes the investment process. The platform is user-friendly, and their focus on compliance gives me complete peace of mind.', imageUrl: img3, platform: "Google" },
        { name: 'Lakshya Bajaj', username: 'Investor', text: 'VenQ is super helpful and cooperative in their field, always there to assist and make your real estate experience smooth.', imageUrl: 'https://user-images.trustpilot.com/63f0aa55c6f557001360236d/73x73.png', platform: "Trustpilot" },
        { name: 'Karan Gupta', username: 'Investor', text: 'VENQ opened the doors for me to invest in opportunities I never thought possible. Their support and easy-to-use platform made my journey smooth and stress-free.', imageUrl: img1, platform: "Google" },
    ];

    const [showAll, setShowAll] = useState(false);

    const handleToggle = () => {
        setShowAll(!showAll);
    };

    // Function to render logo based on platform
    const renderPlatformLogo = (platform) => {
        switch (platform) {
            case "Trustpilot":
                return <SiTrustpilot size={30} className="text-green-500" />;
            case "Google":
                return <FcGoogle size={30} className="text-red-500" />;
            case "Twitter":
            default:
                return <RiTwitterXLine size={30} className="text-blue-500" />;
        }
    };

    return (
        <div>
            <div className='w-full md:min-h-full px-[8vw]'>
                <div className="w-full font-raleway p-[2vw] mt-[1vw] h-[full] bg-white">
                    <div className="flex font-raleway overflow-hidden w-full items-center flex-col">
                        <h1 className='px-4 py-2 bg-zinc-100 font-semibold justify-center items-center gap-3  text-[12px] md:text-[16px] flex text-[#2ab589] rounded-xl'>
                            <span>Testimonials</span>
                        </h1>
                        <h1 className='2xl:text-[60px] text-[28px] md:text-[45px] tracking-tight md:leading-[45px] 2xl:leading-[70px] font-semibold md:font-medium text-center font-raleway mt-2'>Public cheers for us </h1>
                        <h1 className='md:mt-5 text-zinc-400 md:text-lg text-xs font-medium'>Find out how our users are spreading the word!</h1>
                    </div>

                    <div className="w-full h-full hidden md:flex flex-wrap mt-[2vw] gap-[2vw] justify-center items-start">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="w-1/4 min-h-[10vw] rounded-2xl bg-zinc-100 p-5">
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-5 items-center">
                                        <div
                                            className="w-[3vw] h-[3vw] bg-zinc-500 rounded-full bg-cover bg-center"
                                            style={{ backgroundImage: `url(${testimonial.imageUrl})` }}
                                        ></div>
                                        <div className="text-sm h-full">
                                            <h1 className="font-bold text-14px 2xl:text-[16px] md:text-[12px]">{testimonial.name}</h1>
                                            <h1 className=" text-zinc-400">{testimonial.username}</h1>
                                        </div>
                                    </div>
                                    <div className="flex mr-5 items-center">
                                        {renderPlatformLogo(testimonial.platform)}
                                    </div>
                                </div>
                                <div className="w-full 2xl:text-base md:text-base font-medium p-5 h-full">
                                    <p>{testimonial.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-full h-full md:hidden flex flex-wrap mt-[10vw] gap-[2vw] justify-center items-start">
                        {testimonials.slice(0, showAll ? testimonials.length : 2).map((testimonial, index) => (
                            <div
                                key={index}
                                className="w-full sm:w-1/2 md:w-1/4 h-full rounded-2xl bg-zinc-100 p-5 mb-4 sm:mb-0 flex flex-col"
                            >
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3">
                                    <div className="flex w-[17rem] h-full justify-between items-center mb-3 sm:mb-0">
                                        <div className="flex gap-4 justify-center items-center">
                                            <div
                                                className="w-[6vw] h-[6vw] sm:w-[3vw] sm:h-[3vw] bg-zinc-500 rounded-full bg-cover bg-center"
                                                style={{
                                                    backgroundImage: `url(${testimonial.imageUrl})`,
                                                    backgroundSize: "cover", // Ensures the image covers the entire box
                                                    backgroundPosition: "center", // Centers the image within the box
                                                }}
                                            ></div>
                                            <div className="text-xs">
                                                <h1 className="font-semibold">{testimonial.name}</h1>
                                                <h1 className="text-zinc-400">{testimonial.username}</h1>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            {renderPlatformLogo(testimonial.platform)}
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full  p-2 h-full flex-grow">
                                    <p className='text-base md:text-base 2xl:text-lg font-medium'>{testimonial.text}</p>
                                </div>
                            </div>
                        ))}
                        <div className="w-full flex justify-center mt-1">
                            <button
                                onClick={handleToggle}
                                className="px-[4.5vw] text-sm py-3 bg-black rounded-2xl text-zinc-100"
                            >
                                {showAll ? "Show Less" : "View All"}
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Testimonials;
