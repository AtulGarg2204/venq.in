import React, { useState } from 'react';
import { FaCalendarAlt } from "react-icons/fa";
import img1 from '../../src/assets/images/new look/plot.png'
import img2 from '../../src/assets/images/new look/hotel.png'
import img3 from '../../src/assets/images/new look/villa.png'
import img4 from '../../src/assets/images/new look/res.png'
import img5 from '../../src/assets/images/new look/comm.png'

const CryptoAssets = () => {
    // Track the active section
    const [activeSection, setActiveSection] = useState('Residential');

    // Function to handle section click
    const handleSectionClick = (section) => {
        setActiveSection(section);
    };

    return (
        <div>
            <div className='w-full h-full'>
                <div className="w-full font-raleway p-[5vw] md:p-[2vw] mt-[5vw] h-full bg-white">
                    <div className="flex font-raleway overflow-hidden w-full items-center flex-col">
                        <h1 className='px-4 py-2 bg-zinc-100 md:text-[14px] 2xl:text-[16px] font-semibold justify-center items-center gap-3 flex text-[#2ab589] rounded-xl'>
                            <span><FaCalendarAlt /></span> <span >Where can you invest</span>
                        </h1>
                        <h1 className='md:text-[45px] text-[36px] 2xl:text-[60px] tracking-tight leading-[40px] md:leading-[50px] 2xl:leading-[70px] font-medium text-center font-raleway mt-5'>Unlock opportunities in properties you never <br /> knew you could own.</h1>
                        <h1 className='mt-5 md:text-[16px] 2xl:text-[18px] text-center text-zinc-400 font-medium'>Diversify your portfolio with a range of investment opportunities through <span className='text-zinc-600 font-semibold'>VENQ</span></h1>

                        <div className="flex gap-[5vw] mt-[4vw] text-[12px] md:text-[18px] 2xl:text-[20px] font-semibold">
                            <h1
                                className={`cursor-pointer ${activeSection === 'Residential' ? 'border-b-2 border-black' : 'text-zinc-400'}`}
                                onClick={() => handleSectionClick('Residential')}
                            >
                                Residential
                            </h1>
                            <h1
                                className={`cursor-pointer ${activeSection === 'Plots' ? 'border-b-2 border-black' : 'text-zinc-400'}`}
                                onClick={() => handleSectionClick('Plots')}
                            >
                                Plots
                            </h1>
                            <h1
                                className={`cursor-pointer ${activeSection === 'AirBnBs' ? 'border-b-2 border-black' : 'text-zinc-400'}`}
                                onClick={() => handleSectionClick('AirBnBs')}
                            >
                                AirBnBs
                            </h1>
                            <h1
                                className={`cursor-pointer ${activeSection === 'Commercial' ? 'border-b-2 border-black' : 'text-zinc-400'}`}
                                onClick={() => handleSectionClick('Commercial')}
                            >
                                Commercial
                            </h1>
                            <h1
                                className={`cursor-pointer ${activeSection === 'Hotels' ? 'border-b-2 border-black' : 'text-zinc-400'}`}
                                onClick={() => handleSectionClick('Hotels')}
                            >
                                Hotels & Resort
                            </h1>
                        </div>

                        <div className="flex md:w-[800px] 2xl:w-[1050px] md:h-[24vw] 2xl:h-[20vw] mt-[3vw] justify-center items-center">
                            <div
                                className={`md:w-[900px] 2xl:w-[1230px] flex justify-center items-center h-full bg-zinc-100 rounded-3xl ${activeSection === 'Residential' ? '' : 'hidden'}`}
                            >
                                {/* Content for Residential */}
                                <img className="w-full h-full object-cover rounded-3xl" src={img4} alt="" />
                            </div>

                            <div className={`md:w-[900px] 2xl:w-[1230px] h-full bg-zinc-100 rounded-3xl flex justify-center items-center ${activeSection === 'Plots' ? '' : 'hidden'}`}>
                                {/* Content for Plots */}
                                <img className='w-full h-full object-cover rounded-3xl' src={img1} alt="" srcset="" />
                            </div>
                            <div className={`md:w-[900px] 2xl:w-[1230px] h-full bg-zinc-100 rounded-3xl flex justify-center items-center ${activeSection === 'AirBnBs' ? '' : 'hidden'}`}>
                                {/* Content for AirBnBs */}
                                <img className='w-full h-full object-cover rounded-3xl' src={img3} alt="" srcset="" />
                            </div>
                            <div className={`md:w-[900px] 2xl:w-[1230px] h-full bg-zinc-100 rounded-3xl flex justify-center items-center ${activeSection === 'Commercial' ? '' : 'hidden'}`}>
                                {/* Content for Commercial */}
                                <img className='w-full h-full object-cover rounded-3xl' src={img5} alt="" srcset="" />
                            </div>
                            <div className={`md:w-[900px] 2xl:w-[1230px] h-full bg-zinc-100 rounded-3xl flex justify-center items-center ${activeSection === 'Hotels' ? '' : 'hidden'}`}>
                                {/* Content for Hotels */}
                                <img className='w-full h-full object-cover rounded-3xl' src={img2} alt="" srcset="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default CryptoAssets;
