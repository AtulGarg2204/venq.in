import React, { useEffect, useState } from 'react';
import { FaCalendarAlt } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import img1 from '../../src/assets/images/new look/plot.png';
import img2 from '../../src/assets/images/new look/hotel.png';
import img3 from '../../src/assets/images/new look/villa.png';
import img4 from '../../src/assets/images/new look/res.png';
import img5 from '../../src/assets/images/new look/comm.png';

const CryptoAssets = () => {
    const [activeSection, setActiveSection] = useState('Residential');

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in ms
            easing: 'ease-out-cubic', // Easing effect
            once: true, // Animation occurs only once
        });
    }, []);

    const handleSectionClick = (section) => {
        setActiveSection(section);
    };

    return (
        <div>
            <div className="w-full h-full">
                <div className="w-full font-raleway p-[5vw] md:p-[2vw] mt-[5vw] h-full bg-white">
                    <div className="flex font-raleway overflow-hidden w-full items-center flex-col">
                        <h1 className="px-4 py-2 flex text-[12px] bg-zinc-100 md:text-[14px] 2xl:text-[16px] font-semibold justify-center items-center gap-3 text-[#2ab589] rounded-xl">
                            <span><FaCalendarAlt /></span> <span>Where can you invest</span>
                        </h1>
                        <h1 
                            data-aos="fade-up"
                            className="md:text-[45px] text-[26px] 2xl:text-[60px] tracking-tight leading-[30px] md:leading-[50px] 2xl:leading-[70px] font-semibold md:font-medium text-center font-raleway mt-5"
                        >
                            Unlock opportunities in properties you never <br /> knew you could own.
                        </h1>
                        <h1 
                            data-aos="fade-up" 
                            data-aos-delay="300" 
                            className="mt-5 md:text-[16px] 2xl:text-[18px] text-[12px] text-center text-zinc-400 font-medium"
                        >
                            Diversify your portfolio with a range of investment opportunities through <span className="text-zinc-600 font-semibold">VENQ</span>
                        </h1>


                        {/* Section navigation */}
                        <div className="flex flex-wrap text-center justify-center items-center md:gap-[4vw] leading-[5px] gap-[6vw] px-4 md:mt-[3vw] mt-[12vw] text-[14px] md:text-[18px] 2xl:text-[20px] font-semibold">
                            <h1
                                className={`cursor-pointer ${activeSection === 'Residential' ? 'border-b-2 pb-2 leading-[15px] border-black' : 'text-zinc-400'}`}
                                onClick={() => handleSectionClick('Residential')}
                            >
                                Residential
                            </h1>
                            <h1
                                className={`cursor-pointer ${activeSection === 'Plots' ? 'border-b-2 pb-2 leading-[15px] border-black' : 'text-zinc-400'}`}
                                onClick={() => handleSectionClick('Plots')}
                            >
                                Plots
                            </h1>
                            <h1
                                className={`cursor-pointer ${activeSection === 'AirBnBs' ? 'border-b-2 pb-2 leading-[15px] border-black' : 'text-zinc-400'}`}
                                onClick={() => handleSectionClick('AirBnBs')}
                            >
                                AirBnBs
                            </h1>
                            <h1
                                className={`cursor-pointer ${activeSection === 'Commercial' ? 'border-b-2 pb-2 leading-[15px] border-black' : 'text-zinc-400'}`}
                                onClick={() => handleSectionClick('Commercial')}
                            >
                                Commercial
                            </h1>
                            <h1
                                className={`cursor-pointer ${activeSection === 'Hotels' ? 'border-b-2 pb-2 leading-[15px] border-black' : 'text-zinc-400'}`}
                                onClick={() => handleSectionClick('Hotels')}
                            >
                                Hotels & Resort
                            </h1>
                        </div>

                        {/* Section content */}
                        <div className="flex md:w-[800px] 2xl:w-[1050px] md:h-[24vw] 2xl:h-[20vw] md:mt-[3vw] mt-[8vw] justify-center items-center">
                            <div
                                className={`md:w-[900px] 2xl:w-[1230px] flex justify-center items-center h-full bg-zinc-100 rounded-3xl ${activeSection === 'Residential' ? '' : 'hidden'}`}
                            >
                                <img className="w-full h-full object-cover rounded-3xl" src={img4} alt="Residential" />
                            </div>
                            <div className={`md:w-[900px] 2xl:w-[1230px] h-full bg-zinc-100 rounded-3xl flex justify-center items-center ${activeSection === 'Plots' ? '' : 'hidden'}`}>
                                <img className="w-full h-full object-cover rounded-3xl" src={img1} alt="Plots" />
                            </div>
                            <div className={`md:w-[900px] 2xl:w-[1230px] h-full bg-zinc-100 rounded-3xl flex justify-center items-center ${activeSection === 'AirBnBs' ? '' : 'hidden'}`}>
                                <img className="w-full h-full object-cover rounded-3xl" src={img3} alt="AirBnBs" />
                            </div>
                            <div className={`md:w-[900px] 2xl:w-[1230px] h-full bg-zinc-100 rounded-3xl flex justify-center items-center ${activeSection === 'Commercial' ? '' : 'hidden'}`}>
                                <img className="w-full h-full object-cover rounded-3xl" src={img5} alt="Commercial" />
                            </div>
                            <div className={`md:w-[900px] 2xl:w-[1230px] h-full bg-zinc-100 rounded-3xl flex justify-center items-center ${activeSection === 'Hotels' ? '' : 'hidden'}`}>
                                <img className="w-full h-full object-cover rounded-3xl" src={img2} alt="Hotels" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CryptoAssets;
