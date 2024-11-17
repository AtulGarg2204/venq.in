import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { FaApple } from "react-icons/fa";


const Crypto = () => {
    return (
        <>
            <div className='w-full h-full p-10 flex justify-center items-center bg-white'>
                <div className="w-full h-[35vw] mt-[3vw]">
                    <div className="main w-full h-full px-[10vw] gap-[1vw] flex justify-center items-center">
                        <div className="left pr-[6vw] w-[40%] h-full flex flex-col justify-center items-start">
                            <h1 className='px-4 py-2 bg-zinc-100 font-medium justify-center items-center gap-3 flex text-[#2ab589] rounded-xl'><span><FaCalendarAlt /></span> Cryptocurrency</h1>
                            <h1 className='text-[40px] font-medium font-raleway mt-5 leading-[2.3vw]'>Join the crypto revoltion with Moneliq</h1>
                            <h1 className='mt-4 text-zinc-400 font-regular '>Invest in the future safe and profitable crypto assets for everyone</h1>
                            <button className='px-[2vw] py-3 bg-black rounded-full mt-5 text-zinc-100'>Get Started</button>

                        </div>
                        <div className="right w-[40%] h-full">
                            <div className="w-full h-full rounded-3xl bg-zinc-100 flex justify-center items-center">
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Crypto