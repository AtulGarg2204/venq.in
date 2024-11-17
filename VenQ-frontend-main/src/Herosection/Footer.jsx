import React from 'react'
import logo from '../assets/images/clogo.png';
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn, FaFacebookF , FaInstagram   } from "react-icons/fa";


const Footer = () => {
  return (
    <div>
        <div className="w-full md:h-[28vw] 2xl:h-[25vw] flex justify-center items-center ">
            <div className="w-[90%] h-[80%] p-[2vw] bg-zinc-100 rounded-3xl">
                <div className="w-full md:text-[14px] 2xl:text-[17px] font-raleway font-medium gap-[5vw] flex justify-center items-center">
                    <div className="flex gap-4 flex-col">
                        <a className='' href="">Sections</a>
                        <a className='text-zinc-400' href=" ">Personal</a>
                        <a className='text-zinc-400' href=" ">Business</a>
                        <a className='text-zinc-400' href=" ">Company</a>
                    </div>
                    <div className="flex gap-4 flex-col">
                        <a href="">Help</a>
                        <a className='text-zinc-400' href="">Privacy</a>
                        <a className='text-zinc-400' href="">Complaints</a>
                        <a className='text-zinc-400' href="">Cookie Policy</a>
                    </div>
                    <div className="flex gap-4  flex-col">
                        <a href="">Company Policies</a>
                        <a className='text-zinc-400' href="">Website Terms</a>
                        <a className='text-zinc-400' href="">Legal Agreements</a>
                        <a className='text-zinc-400' href="">Modern slavary Policy</a>
                    </div>
                </div>
                <div className="w-full mt-[5vw] px-[2vw] text-[18px] font-raleway font-medium gap-[5vw] flex justify-between items-center">
                    <img src={logo} alt="" srcset="" />
                    <div className="flex gap-[1vw]">
                        <div className="w-[3vw] flex justify-center items-center h-[3vw] bg-white rounded-2xl">
                            <BsTwitterX/>
                        </div>
                        <div className="w-[3vw] flex justify-center items-center h-[3vw] bg-white rounded-2xl">
                            <FaLinkedinIn/>
                        </div>
                        <div className="w-[3vw] flex justify-center items-center h-[3vw] bg-white rounded-2xl">
                            <FaFacebookF/>
                        </div>
                        <div className="w-[3vw] flex justify-center items-center h-[3vw] bg-white rounded-2xl">
                            <FaInstagram/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer