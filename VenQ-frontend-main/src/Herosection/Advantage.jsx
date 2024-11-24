import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";


const Advantage = () => {
    return (
        <>
            <div className='w-full h-full p-10 hidden md:flex  justify-center items-center bg-white'>
                <div className="w-full h-[35vw] mt-[3vw]">
                    <div className="main w-full h-full px-[10vw] gap-[1vw] flex justify-center items-center">
                        <div className="left pr-[6vw] w-[40%] h-full flex flex-col justify-center items-start">
                            <h1 className='px-4 py-2 bg-zinc-100 font-medium justify-center items-center gap-3 flex text-[#2ab589] rounded-xl'><span><FaCalendarAlt /></span>Why Choose VENQ?</h1>
                            <h1 className='2xl:text-[40px] md:text-[30px] font-medium font-raleway mt-5 leading-[2.3vw]'>Discover the Benefits of Investing with VENQ</h1>
                            <h1 className='mt-4 text-zinc-400 font-regular '>Ease of access, secure investments, seamless wealth creation.</h1>
                            <Link
                                to="/Properties"
                                className="px-[2vw] py-3 bg-black rounded-full mt-5 text-zinc-100 
           hover:text-black hover:bg-zinc-200 
           transition-all duration-300 ease-in-out 
           transform hover:scale-105 hover:translate-y-[-3px] 
           active:scale-95 active:translate-y-[0px] active:bg-zinc-300">
                                Get Started
                            </Link>


                        </div>
                        <div className="right w-[45%] flex-col flex gap-[1vw] h-full">
                            <div className=" flex w-full h-1/2 gap-[1vw]">
                                <div className="w-1/2 h-full flex-col md:p-[20px] 2xl:p-[2vw] rounded-3xl bg-zinc-100 flex justify-center items-start">
                                    <FaApple size={46} className='2xl:mb-6 hidden 2xl:block md:mb-2 text-[#2ab589]' />
                                    <FaApple size={26} className='2xl:mb-6 2xl:hidden md:block md:mb-2 text-[#2ab589]' />

                                    <h1 className="2xl:text-xl md:text-[16px] font-semibold text-black">Accessibility for All</h1>
                                    <p className="text-left font-lato text-zinc-400 md:mt-2 2xl:mt-5 md:text-[14px] 2xl:text-[18px]">
                                        Start investing with as little as ₹5000. Build wealth without high entry barriers.                                    </p>

                                </div>
                                <div className="w-1/2 h-full flex-col md:p-[20px] 2xl:p-[2vw] rounded-3xl bg-zinc-100 flex justify-center items-start">
                                    <FaApple size={46} className='2xl:mb-6 hidden 2xl:block md:mb-2 text-[#2ab589]' />
                                    <FaApple size={26} className='2xl:mb-6 2xl:hidden md:block md:mb-2 text-[#2ab589]' />

                                    <h1 className="2xl:text-xl md:text-[16px] font-semibold text-black">Secure & Transparent</h1>
                                    <p className="text-left font-lato text-zinc-400 md:mt-2 2xl:mt-5 md:text-[14px] 2xl:text-[18px]">
                                        Trust in a platform designed for safety and clarity in every investment decision.                                    </p>

                                </div>
                            </div>
                            <div className=" flex w-full h-1/2 gap-[1vw]">
                                <div className="w-1/2 h-full flex-col md:p-[20px] 2xl:p-[2vw] rounded-3xl bg-zinc-100 flex justify-center items-start">
                                    <FaApple size={46} className='2xl:mb-6 hidden 2xl:block md:mb-2 text-[#2ab589]' />
                                    <FaApple size={26} className='2xl:mb-6 2xl:hidden md:block md:mb-2 text-[#2ab589]' />

                                    <h1 className="2xl:text-xl md:text-[16px] font-semibold text-black">Diverse Opportunities</h1>
                                    <p className="text-left font-lato text-zinc-400 md:mt-2 2xl:mt-5 md:text-[14px] 2xl:text-[18px]">
                                        Access a range of carefully selected real estate and growth ventures with measurable ROI.                                    </p>

                                </div>
                                <div className="w-1/2 h-full flex-col md:p-[20px] 2xl:p-[2vw] rounded-3xl bg-zinc-100 flex justify-center items-start">
                                    <FaApple size={46} className='2xl:mb-6 hidden 2xl:block md:mb-2 text-[#2ab589]' />
                                    <FaApple size={26} className='2xl:mb-6 2xl:hidden md:block md:mb-2 text-[#2ab589]' />

                                    <h1 className="2xl:text-xl md:text-[16px] font-semibold text-black">Simplified Process</h1>
                                    <p className="text-left font-lato text-zinc-400 md:mt-2 2xl:mt-5 md:text-[14px] 2xl:text-[18px]">
                                        Invest effortlessly with an intuitive platform built to guide you every step of the way.                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Advantage