import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { FaApple } from "react-icons/fa";
import { TiTickOutline } from "react-icons/ti";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { BiTransfer } from "react-icons/bi";
import "./Worktimeline.css"



const Prices = () => {
    return (
        <>
            <div className='w-full h-screen flex justify-center items-center'>
                <div className="w-[90%] overflow-hidden h-[86%] bg-black rounded-3xl">
                    <div className="flex font-raleway h-full w-full text-white items-center flex-col">
                        <h1 className='px-4 sticky py-2 mt-[5vw] font-semibold justify-center items-center gap-3 flex text-[#2ab589] rounded-xl'
                            style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.8 )', // Semi-transparent black for a glossy effect
                                boxShadow: '0 4px 20px rgba(255, 255, 255, 0.2)', // Soft white shadow
                                backdropFilter: 'blur(5px)', // Optional: adds a glass-like blur effect
                                color: 'green'
                            }}>
                            <span className='text-[#2ab589]'><FaCalendarAlt /></span> <span className='text-[#2ab589]'>Prices</span>
                        </h1>
                        <div className="flex font-raleway h-full w-full text-white items-center flex-col">
                            <h1 className='text-[50px] sticky leading-[60px] font- text-center font-raleway mt-5'>Property Tokenization Process                  </h1>
                            <h1 className='mt-5 sticky text-zinc-400 font-medium '>Understanding how real estate becomes digital tokens on the blockchain</h1>
                            <div className="flex pb-[6vw] w-full overflow-y-auto scrollbar-hide  gap-[4vw] h-full justify-center mt-[4vw] text-white items-center">
                                <div className="left relative md:mt-[10rem] w-[30%] h-full">
                                    <div className="absolute top-[2vw]">
                                        <h1 className='text-right text-[16px] font-medium'>Property Evaluation</h1>
                                        <h1 className='text-right mt-2 text-zinc-400'>Our experts conduct thorough due diligence, including legal, financial, and physical property assessments to ensure investment quality.</h1>
                                    </div>
                                    <div className="border absolute top-[16vw] text-zinc-300 gap-1 border-zinc-700 flex justify-center  flex-col items-center bg-[#0C0C0C] w-full h-[10vw] py-1 rounded-3xl">
                                        <div className="w-[90%]  font-mono flex justify-center flex-col h-[80%] text-sm text-blue-500 px-[30px] py-3 rounded-3xl bg-[#171717]">
                                            <h1>contract PropertyToken {"{"}</h1>
                                            <h1 className='ml-[20px]'> string public propertyId;</h1>
                                            <h1 className='ml-[20px]'>  uint256 public totalSupply;</h1>
                                            <h1 className='ml-[20px]'>  // Smart contract logic...</h1>
                                            <h1 className='ml-[px]'>{"}"}</h1>
                                        </div>
                                    </div>
                                    <div className="absolute top-[32vw]">
                                        <h1 className='text-right text-[16px] font-medium'>Token Distribution</h1>
                                        <h1 className='text-right mt-2 text-zinc-400'>Property tokens are made available to investors through our platform, with automated compliance and KYC verification.</h1>
                                    </div>
                                    <div className="border absolute top-[45vw]  gap-[1vw] border-zinc-700 flex justify-center  flex-col items-start pl-[2vw] bg-[#0C0C0C] w-full h-[12vw] py-1 rounded-3xl">
                                        <div className='flex justify-center items-center gap-[1vw]'>
                                            <div className="w-[2.5vw] flex justify-center items-center h-[2.5vw] bg-[#0B181F] rounded-2xl">
                                            <HiOutlineCurrencyRupee size={24} className='text-blue-500' />
                                            </div>
                                            <h1 className='text-zinc-400'>Automated Rent Distribution</h1>
                                        </div>
                                        <div className='flex justify-center items-center gap-[1vw]'>
                                            <div className="w-[2.5vw] h-[2.5vw] flex justify-center items-center bg-[#0B181F] rounded-2xl">
                                            <HiOutlineCurrencyRupee size={24} className='text-blue-500' />

                                            </div>
                                            <h1 className='text-zinc-400'>24/7 Trading</h1>
                                        </div>
                                        <div className='flex justify-center items-center gap-[1vw]'>
                                            <div className="w-[2.5vw] h-[2.5vw] flex justify-center items-center bg-[#0B181F] rounded-2xl">
                                            <HiOutlineCurrencyRupee size={24} className='text-blue-500' />

                                            </div>
                                            <h1 className='text-zinc-400'>Real-time Analytics</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="middle w-[1px] mt-[45vw] flex flex-col justify-center relative h-[60vw] border border-zinc-900">
                                    <div className="w-[3vw] h-[3vw] border border-blue-500 md:top-2 2xl:top-1 md:-left-[21px] 2xl:-left-7 rounded-full -mt-[2vw] flex justify-center items-center absolute">
                                        <h1 className='text-white text-[20px] font-medium'>1</h1>
                                    </div>
                                    <div className="w-[3vw] h-[3vw] border border-blue-500 md:-left-[21px] 2xl:-left-7 top-[14vw]  rounded-full -mt-[2vw] flex justify-center items-center absolute">
                                        <h1 className='text-white text-[20px] font-medium'>2</h1>
                                    </div>
                                    <div className="w-[3vw] h-[3vw] border border-blue-500 md:-left-[21px] 2xl:-left-7 top-[29vw]  rounded-full -mt-[2vw] flex justify-center items-center absolute">
                                        <h1 className='text-white text-[20px] font-medium'>3</h1>
                                    </div>
                                    <div className="w-[3vw] h-[3vw] border border-blue-500 md:-left-[21px] 2xl:-left-7 top-[44vw]  rounded-full -mt-[2vw] flex justify-center items-center absolute">
                                        <h1 className='text-white text-[20px] font-medium'>4</h1>
                                    </div>
                                </div>
                                <div className="right relative md:mt-[11rem] w-[30%] h-full">
                                    <div className="border absolute top-[1vw] text-zinc-300 gap-1 border-zinc-700 flex justify-center p-[2vw] flex-col items-start bg-[#0C0C0C] w-full h-[8vw] rounded-3xl">
                                        <h1 className='flex gap-2 justify-centers items-center'><span><TiTickOutline className='text-blue-500' /></span> Market Analysis</h1>
                                        <h1 className='flex gap-2 justify-centers items-center'><span><TiTickOutline className='text-blue-500' /></span> Legal Due Diligence</h1>
                                        <h1 className='flex gap-2 justify-centers items-center'><span><TiTickOutline className='text-blue-500' /></span> Financial Assessment</h1>
                                    </div>
                                    <div className="absolute top-[18vw]">
                                        <h1 className='text-left text-[16px] font-medium'>Smart Contract Creation</h1>
                                        <h1 className='text-left mt-2 text-zinc-400'>Property ownership is encoded into smart contracts on the blockchain, defining token economics and governance rules.</h1>
                                    </div>
                                    <div className="border absolute top-[31vw] text-zinc-300 gap-1 border-zinc-700 flex justify-center p-[2vw] flex-col items-start bg-[#0C0C0C] w-full h-[8vw] rounded-3xl">
                                        <div className="flex w-full justify-between items-center">
                                            <h1 className='text-zinc-400'>Total Tokens</h1>
                                            <h1 className='text-blue-500'>1,000,000</h1>
                                        </div>
                                        <div className="flex w-full justify-between items-center">
                                            <h1 className='text-zinc-400'>Token Price</h1>
                                            <h1 className='text-blue-500'>$100</h1>
                                        </div>
                                        <div className="flex w-full justify-between items-center">
                                            <h1 className='text-zinc-400'>Min Investment</h1>
                                            <h1 className='text-blue-500'>1 Token</h1>
                                        </div>
                                    </div>
                                    <div className="absolute top-[48.5vw]">
                                        <h1 className='text-left text-[16px] font-medium'>Automated Management</h1>
                                        <h1 className='text-left mt-2 text-zinc-400'>Smart contracts handle rental income distribution, property expenses, and secondary market trading automatically.</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Prices