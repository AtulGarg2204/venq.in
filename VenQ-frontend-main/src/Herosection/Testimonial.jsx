import React from 'react'
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

    return (
        <div>
            <div className='w-full h-full px-[8vw]'>
                <div className="w-full font-raleway p-[2vw] mt-[1vw] h-full bg-white">
                    <div className="flex font-raleway overflow-hidden w-full items-center flex-col">
                        <h1 className='px-4 py-2 bg-zinc-100 font-semibold justify-center items-center gap-3 flex text-[#2ab589] rounded-xl'>
                            <span>Testimonials</span>
                        </h1>
                        <h1 className='2xl:text-[60px] md:text-[45px] tracking-tight md:leading-[45px] 2xl:leading-[70px] font-medium text-center font-raleway mt-5'>Public cheers for us </h1>
                        <h1 className='mt-5 text-zinc-400 font-medium'>Find out how our users are spreading the word!</h1>
                    </div>

                    <div className="w-full h-full flex flex-wrap mt-[2vw] gap-[2vw] justify-center items-start">
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
                                <div className="w-full font-medium p-5 h-full">
                                    <p>{testimonial.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
