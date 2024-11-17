import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { FaApple } from "react-icons/fa";

const Advantage = () => {
    return (
        <>
            <div className='w-full h-full p-10 flex justify-center items-center bg-white'>
                <div className="w-full h-[35vw] mt-[3vw]">
                    <div className="main w-full h-full px-[10vw] gap-[1vw] flex justify-center items-center">
                        <div className="left pr-[6vw] w-[40%] h-full flex flex-col justify-center items-start">
                            <h1 className='px-4 py-2 bg-zinc-100 font-medium justify-center items-center gap-3 flex text-[#2ab589] rounded-xl'><span><FaCalendarAlt /></span>Advantages of Crypto</h1>
                            <h1 className='text-[40px] font-medium font-raleway mt-5 leading-[2.3vw]'>Discover the Advantages of crypto</h1>
                            <h1 className='mt-4 text-zinc-400 font-regular '>Ease of use, secure storage, effortless buying and selling</h1>
                            <button className='px-[2vw] py-3 bg-black rounded-full mt-5 text-zinc-100'>Get Started</button>

                        </div>
                        <div className="right w-[45%] flex-col flex gap-[1vw] h-full">
                            <div className=" flex w-full h-1/2 gap-[1vw]">
                                <div className="w-1/2 h-full flex-col p-[2vw] rounded-3xl bg-zinc-100 flex justify-center items-start">
                                    <FaApple size={46} className='mb-6 text-[#2ab589]' />

                                    <h1 className="text-xl font-semibold text-black">Analytics</h1>
                                    <p className="text-left font-lato text-zinc-400 mt-5 text-[18px]">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum esse animi impedit ad quod enim ullam inventore.
                                    </p>

                                </div>
                                <div className="w-1/2 h-full flex-col p-[2vw] rounded-3xl bg-zinc-100 flex justify-center items-start">
                                    <FaApple size={46} className='mb-6 text-[#2ab589]' />

                                    <h1 className="text-xl font-semibold text-black">Analytics</h1>
                                    <p className="text-left font-lato text-zinc-400 mt-5 text-[18px]">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum esse animi impedit ad quod enim ullam inventore.
                                    </p>
                                </div>
                            </div>
                            <div className=" flex w-full h-1/2 gap-[1vw]">
                                <div className="w-1/2 h-full flex-col p-[2vw] rounded-3xl bg-zinc-100 flex justify-center items-start">
                                    <FaApple size={46} className='mb-6 text-[#2ab589]' />

                                    <h1 className="text-xl font-semibold text-black">Analytics</h1>
                                    <p className="text-left font-lato text-zinc-400 mt-5 text-[18px]">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum esse animi impedit ad quod enim ullam inventore.
                                    </p>

                                </div>
                                <div className="w-1/2 h-full flex-col p-[2vw] rounded-3xl bg-zinc-100 flex justify-center items-start">
                                    <FaApple size={46} className='mb-6 text-[#2ab589]' />

                                    <h1 className="text-xl font-semibold text-black">Analytics</h1>
                                    <p className="text-left font-lato text-zinc-400 mt-5 text-[18px]">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum esse animi impedit ad quod enim ullam inventore.
                                    </p>
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