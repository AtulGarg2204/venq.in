import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { FaApple } from "react-icons/fa";


const CardFunction = () => {
    return (
        <>
            <div className='w-full h-full md:h-full 2xl:h-screen flex md:p-0 2xl:p-[5vw] p-5 justify-center items-center'>
                <div className="md:w-[90%] h-auto md:h-auto 2xl:p-[5vw] md:p-[4vw] py-[8vw] px-[4vw] bg-black rounded-3xl">
                    <div className="flex font-raleway h-full w-full text-white items-center flex-col">
                        <h1 className='px-4 py-2 hidden md:flex mt-[2vw] font-semibold justify-center items-center gap-3 text-[#2ab589] rounded-xl'
                            style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.8 )', // Semi-transparent black for a glossy effect
                                boxShadow: '0 4px 20px rgba(255, 255, 255, 0.2)', // Soft white shadow
                                backdropFilter: 'blur(5px)', // Optional: adds a glass-like blur effect
                                color: 'green'
                            }}>
                            <span className='text-[#2ab589]'><FaCalendarAlt /></span> <span className='text-[#2ab589]'>Daily Finances</span>
                        </h1>
                        <h1 className='md:text-[40px] text-[26px] 2xl:text-[50px] leading-[30px] md:leading-[60px] text-center font-raleway mt-5'>How will you make money?</h1>
                        <h1 className='md:mt-5 mt-2 md:text-[16px] text-[12px] text-center md:px-0 px-5 2xl:text-[18px] text-zinc-400 font-medium '>Discover multiple avenues to grow your wealth with <span className='text-[#2ab589]'>VENQ’s</span> fractional investments.</h1>
                        <div className='w-full font-raleway md:px-0 px-4 h-auto mt-[4.5vw] md:flex justify-center items-center md:gap-[1.5vw]'>
                            <div className="2xl:w-[20vw] md:scale-[.92] 2xl:scale-[.95] mb-5 md:mb-0 md:w-[24vw] p-6 2xl:h-[16vw] md:h-[20vw] rounded-2xl flex flex-col justify-center items-start bg-[#2d2b2b] relative shadow-lg overflow-hidden md:transition-all duration-300 ease-in-out 
               transform md:hover:scale-[1] md:hover:translate-y-[-30px] md:hover:shadow-2xl md:hover:shadow-green-300">
                                {/* Glowing Faded Border Effect */}
                                <div className="absolute top-0 left-0 w-full h-full rounded-[20px] pointer-events-none"
                                    style={{
                                        borderTop: "3px solid transparent",
                                        borderLeft: "3px solid transparent",
                                        borderImage: "linear-gradient(135deg, #2ab589, transparent) 1",
                                        maskImage: "radial-gradient(circle at top left, transparent, black 50%)",
                                        WebkitMaskImage: "radial-gradient(circle at top left, transparent, black 50%)"
                                    }}>
                                </div>

                                {/* Light Effect */}
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-[#2ab589]/50 via-transparent to-transparent rounded-2xl pointer-events-none"></div>

                                {/* Content */}
                                {/* <FaApple size={46} className='mb-6 text-[#2ab589]' /> */}
                                <h1 className="md:text-xl text-lg font-semibold text-white">Rental Income</h1>
                                <p className="text-left md:text-lg text-sm font-medium text-zinc-400 mt-5 text-[15px]">
                                    Earn passive income as your property generates consistent rental returns.
                                </p>
                                <button className="group text-sm md:text-lg flex items-center gap-4 justify-center mt-5 border rounded-full px-4 py-2 text-white
                                hover:text-black hover:bg-zinc-200
               transition-all duration-300 ease-in-out 
               transform hover:scale-[1] hover:translate-y-[-3px]">
                                    Learn More
                                    <span className="w-5 h-5 flex justify-center items-center bg-white rounded-full group-hover:bg-zinc-400">
                                        <GoArrowRight className="text-black group-hover:text-zinc-900" />
                                    </span>
                                </button>

                            </div>
                            <div className="2xl:w-[20vw] md:scale-[.92] 2xl:scale-[.95] mb-5 md:mb-0 md:w-[24vw] p-6 2xl:h-[16vw] md:h-[20vw] rounded-2xl flex flex-col justify-center items-start bg-[#2d2b2b] relative shadow-lg overflow-hidden transition-all duration-300 ease-in-out 
               transform md:hover:scale-[1] md:hover:translate-y-[-30px] md:hover:shadow-2xl md:hover:shadow-green-300">
                                {/* Glowing Faded Border Effect */}
                                <div className="absolute top-0 left-0 w-full h-full rounded-[20px] pointer-events-none"
                                    style={{
                                        borderTop: "3px solid transparent",
                                        borderLeft: "3px solid transparent",
                                        borderImage: "linear-gradient(135deg, #2ab589, transparent) 1",
                                        maskImage: "radial-gradient(circle at top left, transparent, black 50%)",
                                        WebkitMaskImage: "radial-gradient(circle at top left, transparent, black 50%)"
                                    }}>
                                </div>

                                {/* Light Effect */}
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-[#2ab589]/50 via-transparent to-transparent rounded-2xl pointer-events-none"></div>

                                {/* Content */}
                                {/* <FaApple size={46} className='mb-6 text-[#2ab589]' /> */}

                                <h1 className="md:text-xl text-lg font-semibold text-white">Secondary Market</h1>
                                <p className="text-left md:text-lg text-sm font-medium text-zinc-400 mt-5 text-[15px]">
                                    Sell your tokens on our platform anytime, unlocking liquidity with ease.
                                </p>
                                <button className="group flex text-sm md:text-lg items-center gap-4 justify-center mt-5 border rounded-full px-4 py-2 text-white
                                hover:text-black hover:bg-zinc-200
               transition-all duration-300 ease-in-out 
               transform hover:scale-105 hover:translate-y-[-3px]">
                                    Learn More
                                    <span className="w-5 h-5 flex justify-center items-center bg-white rounded-full group-hover:bg-zinc-400">
                                        <GoArrowRight className="text-black group-hover:text-zinc-900" />
                                    </span>
                                </button>
                            </div>
                            <div className="2xl:w-[20vw] md:scale-[.92] 2xl:scale-[.95] md:w-[24vw] p-6 2xl:h-[16vw] md:h-[20vw] rounded-2xl flex flex-col justify-center items-start bg-[#2d2b2b] relative shadow-lg overflow-hidden transition-all duration-300 ease-in-out 
               transform md:hover:scale-[1] md:hover:translate-y-[-30px] md:hover:shadow-2xl md:hover:shadow-green-300">
                                {/* Glowing Faded Border Effect */}
                                <div className="absolute top-0 left-0 w-full h-full rounded-[20px] pointer-events-none"
                                    style={{
                                        borderTop: "3px solid transparent",
                                        borderLeft: "3px solid transparent",
                                        borderImage: "linear-gradient(135deg, #2ab589, transparent) 1",
                                        maskImage: "radial-gradient(circle at top left, transparent, black 50%)",
                                        WebkitMaskImage: "radial-gradient(circle at top left, transparent, black 50%)"
                                    }}>
                                </div>

                                {/* Light Effect */}
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-[#2ab589]/50 via-transparent to-transparent rounded-2xl pointer-events-none"></div>

                                {/* Content */}
                                {/* <FaApple size={46} className='mb-6 text-[#2ab589]' /> */}

                                <h1 className="md:text-xl text-lg font-semibold text-white">Capital Appreciation</h1>
                                <p className="text-left md:text-lg text-sm font-medium text-zinc-400 mt-5 text-[15px]">
                                    Benefit from the long-term value growth of your real estate assets.
                                </p>
                                <button className="group text-sm md:text-lg flex items-center gap-4 justify-center mt-5 border rounded-full px-4 py-2 text-white
                                hover:text-black hover:bg-zinc-200
               transition-all duration-300 ease-in-out 
               transform hover:scale-105 hover:translate-y-[-3px]">
                                    Learn More
                                    <span className="w-5 h-5 flex justify-center items-center bg-white rounded-full group-hover:bg-zinc-400">
                                        <GoArrowRight className="text-black group-hover:text-zinc-900" />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardFunction