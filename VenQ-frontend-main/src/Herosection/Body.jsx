import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Navbar from './Navbar';
import './Body.css';
import bg from '../../src/assets/images/new look/Frame 38.png';

const Body = ({ workTimelineRef }) => {
  const textRef = useRef([]);
  const navbarLinksRef = useRef([]);
  const blackBgRef = useRef(null);
  const navbarLogoRef = useRef(null);
  const Bodytext = useRef(null);
  const bodytextsmall = useRef(null);

  // useEffect(() => {
  //   const tl = gsap.timeline();

  //   tl.set(navbarLogoRef.current, { y: 200, opacity: 0 });
  //   tl.set(navbarLinksRef.current, { y: -200, opacity: 0 });
  //   tl.set(textRef.current, { y: 200, opacity: 0 });
  //   tl.set(blackBgRef.current, { y: 900 });
  //   tl.set(Bodytext.current, { y: 200, opacity: 0 });
  //   tl.set(bodytextsmall.current, { y: 100, opacity: 0 });

  //   tl.to(textRef.current, {
  //     y: 0,
  //     opacity: 1,
  //     duration: 0.6,
  //     stagger: 0.2,
  //     ease: 'power2.out',
  //   });

  //   tl.to(navbarLinksRef.current, {
  //     y: 0,
  //     opacity: 1,
  //     duration: 1,
  //     stagger: 0.1,
  //     ease: 'power2.out',
  //   });

  //   tl.to(navbarLogoRef.current, {
  //     y: 0,
  //     opacity: 1,
  //     duration: 0.8,
  //     ease: 'power2.out',
  //     delay: -0.5,
  //   });

  //   tl.to(blackBgRef.current, {
  //     y: 0,
  //     duration: 2,
  //     ease: 'power2.out',
  //     delay: -2.5,
  //   });

  //   tl.to(Bodytext.current, {
  //     y: 0,
  //     opacity: 1,
  //     duration: 2,
  //     ease: 'power4.inOut',
  //     delay: -2.5,
  //     stagger: {
  //       from: 'center',
  //       amount: 1.5,
  //     },
  //   });

  //   tl.to(bodytextsmall.current, {
  //     y: 0,
  //     opacity: 1,
  //     duration: 2,
  //     ease: 'power2.out',
  //     delay: -1.5,
  //   });
  // }, []);

  return (
    <>
      <div className="body-container">
        <Navbar
          navbarLinksRef={navbarLinksRef}
          navbarLogoRef={navbarLogoRef}
          workTimelineRef={workTimelineRef} // Pass the ref to Navbar
        />
        <div className="venq-container">
          <div className="text-overflow">
            <h1 className="venq-text">
              {Array.from('VENQ').map((letter, index) => (
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
              <img
                className="z-0 relative flex justify-center items-center"
                src={bg}
                alt=""
                srcSet=""
              />
              <div className="w-full h-full z-10 top-0 left-0 absolute">
                <div className="w-full font-raleway p-[4vw] md:p-[2vw] h-full ">
                  <div className="flex font-raleway overflow-hidden w-full items-center flex-col">
                    <h1
                      ref={Bodytext}
                      className="2xl:text-[90px] pt-[7vw] mt-[15vw] md:mt-[2vw] text-[30px] leading-[30px] 2xl:mt-[2vw] md:text-[60px] tracking md:leading-[60px] text-zinc-50 2xl:leading-[85px] font-bold text-center font-raleway"
                    >
                      Invest in Real Estate <br /> Smarter & Simpler
                    </h1>
                    <h1
                      ref={bodytextsmall}
                      className="2xl:mt-8 mt-5 md:px-[0rem] px-[2rem] md:mt-4 text-center text-zinc-400 text-sm md:text-sm 2xl:text-xl font-medium"
                    >
                      Your Gateway to property ownership-start with just RS
                      5000
                    </h1>
                    <div className="flex mt-6 justify-center items-center gap-5">
                      <button className="2xl:py-2.5 2xl:px-10 md:py-2.5 text-xs md:text-sm 2xl:text-base md:px-10 px-[1.5rem] rounded-full bg-white text-black font-semibold hover:text-white hover:bg-zinc-800 transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-y-[-3px]">
                        Invest Now
                      </button>
                      <button className="2xl:py-2.5 2xl:px-10 text-xs md:text-sm 2xl:text-base  md:py-2.5 md:px-10 rounded-full bg-black text-white font-semibold hover:text-black hover:bg-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-y-[-3px]">
                        Learn More{' '}
                      </button>
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
