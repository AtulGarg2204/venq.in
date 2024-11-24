import React, { useState } from 'react';
import { FaCalendarAlt } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { FaApple } from "react-icons/fa";
import { FaPlus, FaMinus } from 'react-icons/fa';


const FAQ = () => {
    // State to manage the visibility of answers
    const [openIndex, setOpenIndex] = useState(null);

    // Toggle function to show/hide answers
    const toggleAnswer = (index) => {
        if (openIndex === index) {
            setOpenIndex(null); // Close if the same question is clicked again
        } else {
            setOpenIndex(index); // Open the clicked question
        }
    };
    const faqData = [
        {
            question: "How does VenQ stand out in real estate investing?",
            answer: "VenQ distinguishes itself by being India's first platform enabling real estate investments with a low entry of ₹5,000."
        },
        {
            question: "What property options are on VenQ, and can I choose my investments?",
            answer: "VenQ offers various property options, including residential, plots, and rental-focused properties. You have the freedom to choose investments that align with your preferences."
        },
        {
            question: "What is the minimum investment to start on VenQ?",
            answer: "The minimum investment to start on VenQ is just ₹5,000, making real estate accessible to a broader audience."
        },
        {
            question: "How does VenQ ensure investment security and transparency?",
            answer: "VenQ ensures investment security and transparency through Compulsory Convertible Debentures (CCDs), aligning investor interests with the property's success."
        },
        {
            question: "Can I sell or exit my investment before property sale on VenQ?",
            answer: "Yes, you can sell or exit your investment before the property sale by listing and trading your CCDs on the VenQ platform, providing flexibility and liquidity."
        },
    ];
    return (
        <>
            <div>
                <div className='w-full hidden h-screen md:flex justify-center items-center'>
                    <div className="w-[90%] md:h-[100%] 2xl:h-[90%] bg-black rounded-3xl">
                        <div className="flex font-raleway h-full w-full text-white items-center flex-col">
                            <h1 className='px-4 py-2 mt-[5vw] font-semibold justify-center items-center gap-3 flex text-[#2ab589] rounded-xl'
                                style={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.8 )',
                                    boxShadow: '0 4px 20px rgba(255, 255, 255, 0.2)',
                                    backdropFilter: 'blur(5px)',
                                    color: 'green'
                                }}>
                                <span className='text-[#2ab589]'><FaCalendarAlt /></span> <span className='text-[#2ab589]'>Have a question?</span>
                            </h1>
                            <h1 className='md:text-[40px] 2xl:text-[50px] leading-[60px] text-center font-raleway mt-5'>We have answers ?</h1>
                            {/* <h1 className='mt-5 md:text-[16px] 2xl:text-[18px] text-zinc-400 font-medium '>Discover multiple avenues to grow your wealth with VENQ’s fractional investments.</h1> */}
                            <div className="w-full font-raleway h-auto mt-[2vw] flex flex-col items-center gap-[1.5vw] p-6">
                                {faqData.map((item, index) => (
                                    <div
                                        key={index}
                                        className="w-full 2xl:w-[40vw] md:w-[50vw] p-5 rounded-2xl flex flex-col justify-center items-start bg-[#2d2b2b] relative shadow-lg overflow-hidden"
                                    >
                                        {/* FAQ Question */}
                                        <div
                                            onClick={() => toggleAnswer(index)}
                                            className="flex justify-between w-full cursor-pointer"
                                        >
                                            <h1 className="2xl:text-base md:text-sm font-medium text-white">{item.question}</h1>
                                            <span className="text-white text-2xl">
                                                {openIndex === index ? <FaMinus size={16} /> : <FaPlus size={16} />}
                                            </span>
                                        </div>

                                        {/* FAQ Answer (Visible when the question is clicked) */}
                                        {openIndex === index && (
                                            <p className="text-left font-medium text-zinc-400 mt-5 text-[15px]">
                                                {item.answer}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="w-full md:hidden mt-[1.8rem] h-full md:h-screen flex justify-center items-center">
                    <div className="w-[90%] md:w-[80%] 2xl:w-[70%] md:h-auto bg-black rounded-3xl">
                        <div className="flex font-raleway h-full w-full text-white items-center flex-col">
                            {/* <h1
                                className="px-4 py-2 mt-[8vw] font-semibold justify-center items-center gap-3 flex text-[#2ab589] rounded-xl"
                                style={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                    boxShadow: '0 4px 20px rgba(255, 255, 255, 0.2)',
                                    backdropFilter: 'blur(5px)',
                                    color: 'green'
                                }}
                            >
                                <span className='text-[#2ab589]'><FaCalendarAlt /></span>
                                <span className='text-[#2ab589]'>Have a question?</span>
                            </h1> */}
                            <h1 className="md:text-[40px] 2xl:text-[50px] text-[24px] leading-[50px] text-center font-raleway mt-5">
                                We have answers ?
                            </h1>
                            <div className="w-full font-raleway h-auto mt-[2vw] flex flex-col items-center gap-[1.5vw] p-6">
                                {faqData.map((item, index) => (
                                    <div
                                        key={index}
                                        className="w-full sm:w-[80%] md:w-[50%] 2xl:w-[40vw] p-5 rounded-2xl flex flex-col justify-center items-start bg-[#2d2b2b] relative shadow-lg overflow-hidden"
                                    >
                                        {/* FAQ Question */}
                                        <div
                                            onClick={() => toggleAnswer(index)}
                                            className="flex justify-between w-full cursor-pointer"
                                        >
                                            <h1 className="2xl:text-base md:text-sm text-[12px] font-medium text-white">
                                                {item.question}
                                            </h1>
                                            <span className="text-white text-xl">
                                                {openIndex === index ? <FaMinus size={16} /> : <FaPlus size={16} />}
                                            </span>
                                        </div>

                                        {/* FAQ Answer (Visible when the question is clicked) */}
                                        {openIndex === index && (
                                            <p className="text-left font-medium text-zinc-400 mt-5 text-[12px]">
                                                {item.answer}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default FAQ;
