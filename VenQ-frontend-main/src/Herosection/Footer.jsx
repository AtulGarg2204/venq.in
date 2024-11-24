import React from 'react'
import logo from '../assets/images/clogo.png';
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            {/* Desktop Footer */}
            <div className="w-full md:h-[28vw] 2xl:h-[36vw] justify-center items-center hidden md:flex">
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
                        <img src={logo} className='scale-[1.2] ml-[1rem]' alt="Logo" />
                        <div className="flex gap-[1vw]">
                            <div className="w-[3vw] flex justify-center items-center h-[3vw] bg-white rounded-2xl">
                                <BsTwitterX />
                            </div>
                            <div className="w-[3vw] flex justify-center items-center h-[3vw] bg-white rounded-2xl">
                                <FaLinkedinIn />
                            </div>
                            <div className="w-[3vw] flex justify-center items-center h-[3vw] bg-white rounded-2xl">
                                <FaFacebookF />
                            </div>
                            <div className="w-[3vw] flex justify-center items-center h-[3vw] bg-white rounded-2xl">
                                <FaInstagram />
                            </div>
                        </div>
                    </div>
                    <div className="px-[2.2vw] mt-4 text-[16px] font-raleway font-medium gap-[5vw]">
                        <h1 className='font-bold text-lg text-left'>Disclaimer:</h1>
                        <p className='mt-4 text-left'>All trademarks and logos or registered trademarks and logos found on this site or mentioned herein belong to their respective owners and are solely being used for informational purposes. Information provided herein has been gathered from public sources. VENQ Technologies Pvt Ltd disclaims any and all responsibility in connection with veracity of this data. Information presented on this website is for educational purposes only and should not be treated as legal, financial , or any other form of advice. VENQ Technologies Pvt Ltd is not liable for financial or any other form of loss incurred by the user or any affiliated party on the basis of information provided herein. VENQ Technologies Pvt Ltd is neither a stock exchange nor does it intend to get recognized as a stock exchange under the Securities Contracts Regulation Act, 1956. VENQ Technologies Pvt Ltd has not been authorized by the capital markets regulator to solicit investments.</p>
                    </div>
                </div>
            </div>

            {/* Mobile Footer */}
            <div className="w-full h-auto flex justify-center items-center md:hidden">
                <div className="w-[90%] mt-[10vw] h-auto p-[4vw] bg-zinc-100 rounded-3xl">
                    <div className="w-full text-[14px] font-raleway font-medium gap-[2vw] flex flex-col justify-center items-center">
                        <div className="w-full px-[2vw] text-[16px] font-raleway font-medium gap-[5vw] flex flex-col justify-between items-center">
                            <img src={logo} alt="Logo" className="w-[30%] mx-auto" />
                            <div className="flex gap-[1vw]">
                                <div className="w-[6vw] h-[6vw] flex justify-center items-center bg-white rounded-2xl">
                                    <BsTwitterX />
                                </div>
                                <div className="w-[6vw] h-[6vw] flex justify-center items-center bg-white rounded-2xl">
                                    <FaLinkedinIn />
                                </div>
                                <div className="w-[6vw] h-[6vw] flex justify-center items-center bg-white rounded-2xl">
                                    <FaFacebookF />
                                </div>
                                <div className="w-[6vw] h-[6vw] flex justify-center items-center bg-white rounded-2xl">
                                    <FaInstagram />
                                </div>
                            </div>
                        </div>
                        <div className="flex mt-5 gap-2 flex-col items-center">
                            <a href="" className='text-zinc-400'>Sections</a>
                            <a href=" " className='text-zinc-400'>Personal</a>
                            <a href=" " className='text-zinc-400'>Business</a>
                            <a href=" " className='text-zinc-400'>Company</a>
                        </div>
                        <div className="flex gap-2 flex-col items-center">
                            <a href="" className='text-zinc-400'>Help</a>
                            <a href="" className='text-zinc-400'>Privacy</a>
                            <a href="" className='text-zinc-400'>Complaints</a>
                            <a href="" className='text-zinc-400'>Cookie Policy</a>
                        </div>
                        <div className="flex gap-2 flex-col items-center">
                            <a href="" className='text-zinc-400'>Company Policies</a>
                            <a href="" className='text-zinc-400'>Website Terms</a>
                            <a href="" className='text-zinc-400'>Legal Agreements</a>
                            <a href="" className='text-zinc-400'>Modern slavery Policy</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer;
