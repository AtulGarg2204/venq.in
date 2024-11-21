// Body.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Navbar from './Navbar';
import './Body.css'; // Import the CSS file
import { FaCalendarAlt } from "react-icons/fa";
import bg from '../../src/assets/images/new look/Frame 38.png'

const Body = () => {
  const textRef = useRef([]);
  const navbarLinksRef = useRef([]);
  const blackBgRef = useRef(null);
  const navbarLogoRef = useRef(null);

  // // // useEffect(() => {
  // // //   // Create a timeline
  // // //   const tl = gsap.timeline();

  // // //    // Set initial hidden states
  // // //    tl.set(navbarLogoRef.current, { y: 200, opacity: 0 });
  // // //    tl.set(navbarLinksRef.current, { y: -200, opacity: 0 });
  // // //    tl.set(textRef.current, { y: 200, opacity: 0 });
  // // //    tl.set(blackBgRef.current, { y: 900 });

  // // //    // VENQ text animation (after logo)
  // // //    tl.to(textRef.current, {
  // // //      y: 0,
  // // //      opacity: 1,
  // // //      duration: 0.6,
  // // //      stagger: 0.2,
  // // //      ease: 'power2.out',
  // // //    });

  // // //    // Navbar links animation (after VENQ)
  // // //    tl.to(navbarLinksRef.current, {
  // // //      y: 0,
  // // //      opacity: 1,
  // // //      duration: 1,
  // // //      stagger: 0.1,
  // // //      ease: 'power2.out',
  // // //    });

  // // //    // Logo animation
  // // //    tl.to(navbarLogoRef.current, {
  // // //      y: 0,
  // // //      opacity: 1,
  // // //      duration: 0.8,
  // // //      ease: 'power2.out',
  // // //      delay: -0.5,
  // // //    });

  // // //    // Black background div animation to cover the VENQ text
  // // //    tl.to(blackBgRef.current, {
  // // //      y: 0,
  // // //      duration: 2,
  // // //      ease: 'power2.out',
  // // //      delay: -2.5,
  // // //    });
  // // //  }, []);

  return (
    <>
      <div className="body-container">
        <Navbar navbarLinksRef={navbarLinksRef} navbarLogoRef={navbarLogoRef} />
        <div className="venq-container">
          <div className="text-overflow">
            <h1 className="venq-text">
              {Array.from("VENQ").map((letter, index) => (
                <span
                  key={index}
                  ref={(el) => (textRef.current[index] = el)}
                  className="venq-letter"
                >
                  {letter}
                </span>
              ))}
            </h1>
          </div>
          <div ref={blackBgRef} className="black-bg md:mt-[1px] mt-[15vw] 2xl:mt-[1px]]">
            <div className="black-bg-inner overflow-hidden">
              <img className='z-0 relative flex justify-center items-center' src={bg} alt="" srcset="" />
              <div className='w-full h-full z-10 top-0 left-0 absolute'>
                <div className="w-full font-raleway p-[2vw] h-full ">
                  <div className="flex font-raleway overflow-hidden w-full items-center flex-col">
                    {/* <h1 className='px-4 2xl:text-[16px] md:text-[14px] py-2 bg-zinc-400 font-semibold justify-center items-center gap-3 flex text-[#2ab589] rounded-xl'>
                      <span><FaCalendarAlt /></span> <span >Investments</span>
                    </h1> */}
                    <h1 className='2xl:text-[90px] pt-[7vw] md:mt-[2vw] text-[35px] 2xl:mt-[2vw] md:text-[45px] tracking md:leading-[45px] text-zinc-50 2xl:leading-[85px] font-bold text-center font-raleway'>Invest in Real Estate <br /> Smarter & Simpler</h1>
                    <h1 className='2xl:mt-8 mt-2 md:mt-8 text-center text-zinc-400 2xl:text-xl font-medium'>Your Gateway to property ownership-start with just RS 5000</h1>
                    <div className="flex mt-10 justify-center items-center gap-5">
                      <button className='2xl:py-2.5 2xl:px-10 md:py-2.5 md:px-10 rounded-full bg-white text-black font-semibold
                        hover:text-white hover:bg-zinc-800
               transition-all duration-300 ease-in-out 
               transform hover:scale-105 hover:translate-y-[-3px]
                      '>Invest Now</button>
                      <button className='2xl:py-2.5 2xl:px-10 md:py-2.5 md:px-10 rounded-full bg-black text-white font-semibold
                      hover:text-black hover:bg-white
               transition-all duration-300 ease-in-out 
               transform hover:scale-105 hover:translate-y-[-3px]'>Learn More </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
