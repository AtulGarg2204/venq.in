import React, { useState } from 'react';
import logo from '../assets/images/clogo.png';
import { SlArrowDown } from "react-icons/sl";
import { FiMenu } from "react-icons/fi";

const Navbar = ({ navbarLinksRef, navbarLogoRef, workTimelineRef }) => {
  const options = {
    personal: [
      { name: "Properties", link: "#properties" },
      { name: "F.I.G.", link: "#work-timeline", comingSoon: true },
      { name: "TimeShare.", link: "#work-timeline", comingSoon: true },
      { name: "BrokerConnect+", link: "#work-timeline", comingSoon: true },
    ],
    company: [
      { name: "Contact us", link: "#contact" },
      { name: "WhatsApp", link: "#whatsapp" },
      { name: "Terms", link: "#footer" },
    ],
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  const handleComingSoonClick = (event) => {
    event.preventDefault();
    if (workTimelineRef?.current) {
      workTimelineRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white/50 backdrop-blur-lg">
      <div className="flex w-full h-full">
        <div className="flex font-latoBold py-[3px] px-5 md:px-[7rem] justify-between items-center w-full h-full">
          {/* Left-side links */}
          <div className="hidden md:flex overflow-visible font-medium font-raleway h-[4rem] lg:gap-6 xl:gap-10 justify-center items-center">
            <div className="relative group">
              <a
                className="flex 2xl:text-[16px] md:text-[14px] gap-[10px] justify-center items-center"
                href="#"
                ref={(el) => (navbarLinksRef.current[0] = el)}
              >
                Invest <SlArrowDown size={13} className="text-black" />
              </a>
              <DropdownMenu options={options.personal} onComingSoonClick={handleComingSoonClick} />
            </div>
            <div className="relative group">
              <a
                className="flex 2xl:text-[16px] md:text-[14px] gap-[10px] justify-center items-center"
                href="#"
                ref={(el) => (navbarLinksRef.current[1] = el)}
              >
                List Property
              </a>
            </div>
            <div className="relative group">
              <h1
                className="flex cursor-pointer 2xl:text-[16px] md:text-[14px] gap-[10px] justify-center items-center"
                ref={(el) => (navbarLinksRef.current[2] = el)}
              >
                Company <SlArrowDown size={13} className="text-black" />
              </h1>
              <DropdownMenu options={options.company} />
            </div>
          </div>

          {/* Center Logo */}
          <div className="flex overflow-hidden h-[3rem] md:h-full justify-center 2xl:scale-[.8] md:scale-[.7] 2xl:h-[4rem] 2xl:mr-[1.5vw] mr-0 text-lg gap-10 md:justify-center items-center">
            <img
              className="scale-[.8] md:scale-[1]"
              ref={navbarLogoRef}
              src={logo}
              alt="logo"
            />
          </div>

          {/* Right-side links */}
          <div className="hidden lg:text-sm md:flex lg:gap-6 xl:gap-10 font-medium font-raleway overflow-hidden md:text-base xl:text-lg justify-center items-center">
            <a
              className="2xl:text-[16px] lg:text-[14px] md:text-[14px]"
              href="#help"
              ref={(el) => (navbarLinksRef.current[3] = el)}
            >
              Help
            </a>
            <a
              className="2xl:text-[16px] lg:text-[14px] md:text-[14px]"
              href="#blog"
              ref={(el) => (navbarLinksRef.current[4] = el)}
            >
              Blog
            </a>
            <a
              className="2xl:text-[16px] lg:text-[14px] md:text-[14px]"
              href="#login"
              ref={(el) => (navbarLinksRef.current[6] = el)}
            >
              Log In
            </a>
            <a
              className="py-[10px] text-white 2xl:text-[18px] md:text-[16px] text-lg px-5 bg-black rounded-full hover:text-black hover:bg-zinc-200 transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-y-[-3px]"
              href="#signup"
              ref={(el) => (navbarLinksRef.current[7] = el)}
            >
              Sign up
            </a>
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <FiMenu size={24} onClick={toggleMobileMenu} className="cursor-pointer text-black" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg">
          <div className="flex flex-col items-center p-4">
            <a href="#personal" className="py-2 text-lg text-gray-700">
              Personal
            </a>
            <a href="#business" className="py-2 text-lg text-gray-700">
              Business
            </a>
            <a href="#company" className="py-2 text-lg text-gray-700">
              Company
            </a>
            <a href="#help" className="py-2 text-lg text-gray-700">
              Help
            </a>
            <a href="#blog" className="py-2 text-lg text-gray-700">
              Blog
            </a>
            <a href="#login" className="py-2 text-lg text-gray-700">
              Log In
            </a>
            <a href="#signup" className="py-3 px-6 text-lg bg-black text-white rounded-full">
              Sign Up
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

const DropdownMenu = ({ options, onComingSoonClick }) => (
  <div className="absolute top-full px-[2vw] py-[2vw] left-0 mt-2 w-auto bg-zinc-50 font-medium font-raleway shadow-lg rounded-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
    {options.map((option, index) => (
      <a
        key={index}
        href={option.link}
        className={`block px-2 w-full text-nowrap py-2 md:text-xs 2xl:text-base text-zinc-900 hover:bg-gray-100 ${
          option.name === "Properties" ? "font-bold 2xl:text-lg mb-4 md:text-sm border-b border-zinc-400" : ""
        }`}
        onClick={option.comingSoon ? onComingSoonClick : undefined}
      >
        {option.name}
        {option.comingSoon && (
          <span className="ml-2 px-2 py-1 text-[10px] bg-green-300 text-black rounded">
            Coming Soon
          </span>
        )}
      </a>
    ))}
  </div>
);

export default Navbar;
