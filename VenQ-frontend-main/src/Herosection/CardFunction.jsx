import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { FaApple } from "react-icons/fa";


const CardFunction = () => {
    return (
        <>
            <div className='w-full h-screen flex justify-center items-center'>
                <div className="w-[90%] h-[100%] md:h-[86%] p-[5vw] md:p-[0vw] bg-black rounded-3xl">
                    <div className="flex font-raleway h-full w-full text-white items-center flex-col">
                        <h1 className='px-4 py-2 mt-[5vw] font-semibold justify-center items-center gap-3 flex text-[#2ab589] rounded-xl'
                            style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.8 )', // Semi-transparent black for a glossy effect
                                boxShadow: '0 4px 20px rgba(255, 255, 255, 0.2)', // Soft white shadow
                                backdropFilter: 'blur(5px)', // Optional: adds a glass-like blur effect
                                color: 'green'
                            }}>
                            <span className='text-[#2ab589]'><FaCalendarAlt /></span> <span className='text-[#2ab589]'>Daily Finances</span>
                        </h1>
                        <h1 className='md:text-[40px] text-[40px] 2xl:text-[50px] leading-[45px] md:leading-[60px] text-center font-raleway mt-5'>How will you make money ?</h1>
                        <h1 className='mt-5 md:text-[16px] text-center 2xl:text-[18px] text-zinc-400 font-medium '>Discover multiple avenues to grow your wealth with VENQ’s fractional investments.</h1>
                        <div className='w-full font-raleway h-[18vw] mt-[4.5vw] md:flex justify-center items-center  md:gap-[1.5vw]'>
                            <div className="2xl:w-[20vw] mb-5 md:mb-0 md:w-[24vw] p-6 2xl:h-[16vw] md:h-[20vw] rounded-2xl flex flex-col justify-center items-start bg-[#2d2b2b] relative shadow-lg overflow-hidden">
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
                                <h1 className="text-xl font-semibold text-white">Rental Income</h1>
                                <p className="text-left font-medium text-zinc-400 mt-5 text-[15px]">
                                Earn passive income as your property generates consistent rental returns.
                                </p>
                                <button className="group flex items-center gap-4 justify-center mt-5 border rounded-full px-4 py-1 text-white hover:text-red-300">
                                    Learn More
                                    <span className="w-5 h-5 flex justify-center items-center bg-white rounded-full group-hover:bg-zinc-400">
                                        <GoArrowRight className="text-black group-hover:text-zinc-900" />
                                    </span>
                                </button>

                            </div>
                            <div className="2xl:w-[20vw] mb-5 md:mb-0 md:w-[24vw] p-6 2xl:h-[16vw] md:h-[20vw] rounded-2xl flex flex-col justify-center items-start bg-[#2d2b2b] relative shadow-lg overflow-hidden">
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

                                <h1 className="text-xl font-semibold text-white">Secondary Market</h1>
                                <p className="text-left font-medium text-zinc-400 mt-5 text-[15px]">
                                Sell your tokens on our platform anytime, unlocking liquidity with ease.
                                </p>
                                <button className="flex items-center gap-4 justify-center mt-5 border rounded-full px-4 py-1 text-white">
                                    Learn More
                                    <span className="w-5 h-5 flex justify-center items-center bg-white rounded-full">
                                        <GoArrowRight className="text-black" />
                                    </span>
                                </button>
                            </div>
                            <div className="2xl:w-[20vw] md:w-[24vw] p-6 2xl:h-[16vw] md:h-[20vw] rounded-2xl flex flex-col justify-center items-start bg-[#2d2b2b] relative shadow-lg overflow-hidden">
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

                                <h1 className="text-xl font-semibold text-white">Capital Appreciation</h1>
                                <p className="text-left font-medium text-zinc-400 mt-5 text-[15px]">
                                Benefit from the long-term value growth of your real estate assets.
                                </p>
                                <button className="flex items-center gap-4 justify-center mt-5 border rounded-full px-4 py-1 text-white">
                                    Learn More
                                    <span className="w-5 h-5 flex justify-center items-center bg-white rounded-full">
                                        <GoArrowRight className="text-black" />
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