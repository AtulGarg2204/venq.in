import React, { useEffect } from 'react';
import { FaCalendarAlt } from "react-icons/fa";
import img4 from '../../src/assets/images/new look/Frame 21.png';
import img3 from '../../src/assets/images/new look/paperwork.png';
import img2 from '../../src/assets/images/new look/regulations.png';
import img1 from '../../src/assets/images/new look/shield.png';
import './investment.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Investment = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Adjust duration as needed
      easing: 'ease-in-out',
      once: true, // Animation will only happen once
    });
  }, []);

  return (
    <div className='w-full h-full'>
      <div className="w-full font-raleway p-[2vw] h-full bg-white">
        <div className="flex font-raleway overflow-hidden w-full items-center flex-col">
          <h1 data-aos="fade-up" className='px-4 md:mt-[0vw] mt-[15vw] 2xl:text-[16px] py-2 bg-zinc-100 font-semibold justify-center items-center gap-3 text-[12px] md:text-[16px] flex text-[#2ab589] rounded-xl'>
            <span><FaCalendarAlt /></span> <span>Security</span>
          </h1>
          <h1 data-aos="fade-up" className='2xl:text-[60px] text-[24px] md:text-[45px] tracking-tight leading-[28px] md:leading-[45px] 2xl:leading-[70px] font-semibold md:font-medium text-center font-raleway mt-5'>
            Secure and Regulated Investments <br /> You Can Trust
          </h1>
          <h1 data-aos="fade-up" className='md:mt-5 text-center mt-5 text-zinc-400 md:text-lg text-xs font-medium'>
            Your assets are safe with VENQ, backed by top-tier security and strict regulatory compliance.
          </h1>
        </div>
        <div className="hidden md:flex w-full h-[35vw] gap-[1vw] mt-6 md:mt-[5vw] justify-center items-center">
          <div data-aos="fade-up" className="md:w-[450px] 2xl:w-[600px] h-full bg-zinc-100 rounded-3xl p-[2vw]">
            <h1 className='2xl:text-[38px] md:text-[28px] mt-5 font-medium tracking-tight'>
              Security that never <br /> sleeps.
            </h1>
            <p className='mt-2 font-medium 2xl:text-[17px] md:text-[14px] text-zinc-400'>
              Rest easy knowing your investments are protected with blockchain security and our 24/7 monitoring systems.
            </p>
            <button id='hover' className='px-[1.5vw] py-3 2xl:text-[16px] md:text-[14px] bg-black rounded-2xl mt-5 text-zinc-100
            hover:text-black hover:bg-zinc-200 
            transition-all duration-300 ease-in-out 
            transform hover:scale-105 hover:translate-y-[-3px]'>Security Layer 1</button>
            <div className="w-full h-[20vw] object-cover flex relative justify-end items-start p-2">
              <img className='w-full absolute md:-top-[2rem] 2xl:-top-5 h-full right-0 object-contain md:scale-[.8] 2xl:scale-[1]' src={img1} alt="" />
            </div>
          </div>
          <div data-aos="fade-up" className="md:w-[450px] 2xl:w-[600px] h-full bg-zinc-100 rounded-3xl p-[2vw]">
            <h1 className='2xl:text-[38px] md:text-[28px] mt-5 font-medium tracking-tight'>
              Built on trust, secured by regulations.
            </h1>
            <p className='mt-2 font-medium 2xl:text-[17px] md:text-[14px] text-zinc-400'>
              Regulated by multiple trusted authorities, ensuring every investment is secure, transparent, and fully compliant.
            </p>
            <button id='hover' className='px-[1.5vw] z-20 2xl:text-[16px] md:text-[14px] py-3 bg-black rounded-2xl mt-5 text-zinc-100
            hover:text-black hover:bg-zinc-200 
            transition-all duration-300 ease-in-out 
            transform hover:scale-105 hover:translate-y-[-3px]'>Security Layer 2</button>
            <div className="w-full z-0 overflow-hidden h-[20vw] object-cover flex relative justify-end items-start p-2">
              <img className='w-full absolute md:-top-[3rem] 2xl:-top-8 h-full right-0 object-contain md:scale-[.8] 2xl:scale-[1.1]' src={img2} alt="" />
            </div>
          </div>
        </div>
        <div className="hidden md:flex w-full relative h-[20vw] gap-[2vw] mt-[1vw] justify-center items-center">
          <div data-aos="fade-up" className="md:w-[920px] 2xl:w-[1230px] h-full bg-zinc-100 rounded-3xl p-[2vw]">
            <h1 className='2xl:text-[38px] md:text-[28px] mt-5 font-medium tracking-tight'>
              You call the shots
            </h1>
            <p className='mt-2 font-medium 2xl:text-[17px] md:text-[14px] text-zinc-400'>
              Top-tier security empowers you to invest in real estate that fits your needs—your choices, fully protected.
            </p>
            <button className='px-[1.5vw] cursor-pointer z-50 py-3 2xl:text-[16px] md:text-[14px] bg-black rounded-2xl mt-5 text-zinc-100
            hover:text-black hover:bg-zinc-200 
            transition-all duration-300 ease-in-out 
            transform hover:scale-105 hover:translate-y-[-3px]'>Security Layer 3</button>
            <div className="w-full z-0 absolute top-0 md:left-[14.5rem] 2xl:left-[17rem] h-[20vw] object-cover flex justify-end items-start p-2">
              <div className="relative overflow-hidden w-full h-full">
                {/* Image */}
                <img
                  className="w-full h-full right-0 object-contain scale-[1.1] mask-image"
                  src={img3}
                  alt=""
                />
                {/* Gradient overlay */}
                <div className="absolute md:hidden bottom-0 left-0 w-full h-full bg-gradient-to-t from-white via-transparent to-transparent"></div>
              </div>
            </div>

            <div className="w-full z-0 absolute md:top-[4rem] 2xl:top-[5rem] h-[20vw] md:-right-[14rem] 2xl:-right-[17rem] object-cover flex justify-end items-start p-2">
              <img className='w-full h-full right-0 object-contain md:scale-[.4] 2xl:scale-[.5]' src={img4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investment;
