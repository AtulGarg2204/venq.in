import React, { useState } from 'react';
import { FaCalendarAlt } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const Testimonials = () => {
    const testimonials = [
        { name: 'John Doe', username: '@john.doe', text: 'Great platform for fractional investments!' },
        { name: 'Jane Smith', username: '@jane.smith', text: 'I love the seamless experience with Moneliq.' },
        { name: 'Alex Johnson', username: '@alex.johnson', text: 'Highly recommend it for real estate investments.' },
        { name: 'Emily Davis', username: '@emily.davis', text: 'The interface is user-friendly and intuitive.' },
        { name: 'Michael Brown', username: '@michael.brown', text: 'I appreciate the transparency in all dealings.' },
        { name: 'Sarah Wilson', username: '@sarah.wilson', text: 'Fantastic service and great support team!' },
    ];
    const [showAll, setShowAll] = useState(false);

    const handleToggle = () => {
        setShowAll(!showAll);
    };

    return (
        <div>
            <div className='w-full min-h-[165vw] md:min-h-full px-[8vw]'>
                <div className="w-full font-raleway p-[2vw] mt-[1vw] h-[full] bg-white">
                    <div className="flex font-raleway overflow-hidden w-full items-center flex-col">
                        <h1 className='px-4 py-2 bg-zinc-100 font-semibold justify-center items-center gap-3 flex text-[#2ab589] rounded-xl'>
                            <span>Testimonials</span>
                        </h1>
                        <h1 className='2xl:text-[60px] text-[35px] md:text-[45px] tracking-tight md:leading-[45px] 2xl:leading-[70px] font-medium text-center font-raleway mt-5'>Public cheers for us </h1>
                        <h1 className='mt-5 text-center text-zinc-400 font-medium'>Find out how our users are spreading the word!</h1>
                    </div>

                    <div className="w-full h-full hidden md:flex flex-wrap mt-[2vw] gap-[2vw] justify-center items-start">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="w-1/4  h-full rounded-2xl bg-zinc-100 p-5">
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-5 items-center">
                                        <div className="w-[3vw] h-[3vw] bg-zinc-500 rounded-full">
                                            {/* Placeholder for profile image */}
                                        </div>
                                        <div className="text-sm h-full">
                                            <h1 className="font-semibold">{testimonial.name}</h1>
                                            <h1 className="text-zinc-400">{testimonial.username}</h1>
                                        </div>
                                    </div>
                                    <div className="flex items-center mr-[.4vw]">
                                        <RiTwitterXLine size={30} />
                                    </div>
                                </div>
                                <div className="w-full 2xl:text-xl md:text-base font-medium p-5 h-full">
                                    <p>{testimonial.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/*mobile section*/}
                    <div className="w-full h-[full] md:hidden flex flex-wrap mt-[2vw] gap-[2vw] justify-center items-start">
                        {testimonials.slice(0, showAll ? testimonials.length : 2).map((testimonial, index) => (
                            <div
                                key={index}
                                className="w-full sm:w-1/2 md:w-1/4 h-full rounded-2xl bg-zinc-100 p-5 mb-4 sm:mb-0">
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3">
                                    <div className="flex gap-5 items-center mb-3 sm:mb-0">
                                        <div className="w-[6vw] h-[6vw] sm:w-[3vw] sm:h-[3vw] bg-zinc-500 rounded-full">
                                            {/* Placeholder for profile image */}
                                        </div>
                                        <div className="text-sm">
                                            <h1 className="font-semibold">{testimonial.name}</h1>
                                            <h1 className="text-zinc-400">{testimonial.username}</h1>
                                        </div>
                                        <div className="flex items-center ml-[30vw] sm:mr-[.4vw] mb-2 sm:mb-0">
                                        <RiTwitterXLine size={30} />
                                    </div>
                                    </div>
                                    
                                </div>
                                <div className="w-full font-medium p-2 h-full">
                                    <p>{testimonial.text}</p>
                                </div>
                            </div>
                        ))}
                        {/* "Show All" button */}
                        <div className="w-full flex justify-center mt-4">
                            <button
                                onClick={handleToggle}
                                className="px-[1.5vw] py-3 bg-black rounded-2xl text-zinc-100">
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
