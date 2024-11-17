import React from 'react';
import logo from '../assets/images/clogo.png';
import { SlArrowDown } from "react-icons/sl";

const Navbar = ({ navbarLinksRef, navbarLogoRef }) => {
  const options = {
    personal: ["Profile", "Settings", "Logout"],
    business: ["Dashboard", "Analytics", "Reports"],
    company: ["About Us", "Careers", "Contact"],
    en: ["English", "Spanish", "French"]
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white/50 backdrop-blur-lg">
      <div className="flex w-full h-full">
        <div className="flex font-latoBold py-[3px] px-[7rem] justify-between w-full h-full">
          <div
            className="flex overflow-hidden h-[4rem] gap-10 justify-center items-center md:flex md:gap-10 hidden">
            {/* Personal dropdown */}
            <div className="relative group">
              <a className="flex 2xl:text-[18px] md:text-[16px] gap-[10px] justify-center items-center" href="#" ref={(el) => (navbarLinksRef.current[0] = el)}>
                Personal <SlArrowDown size={13} className="text-black" />
              </a>
              <DropdownMenu options={options.personal} />
            </div>
            {/* Business dropdown */}
            <div className="relative group">
              <a className="flex 2xl:text-[18px] md:text-[16px] gap-[10px] justify-center items-center" href="#" ref={(el) => (navbarLinksRef.current[1] = el)}>
                Business <SlArrowDown size={13} className="text-black" />
              </a>
              <DropdownMenu options={options.business} />
            </div>
            {/* Company dropdown */}
            <div className="relative group">
              <a className="flex 2xl:text-[18px] md:text-[16px] gap-[10px] justify-center items-center" href="#" ref={(el) => (navbarLinksRef.current[2] = el)}>
                Company <SlArrowDown size={13} className="text-black" />
              </a>
              <DropdownMenu options={options.company} />
            </div>
          </div>
          {/* Center Logo */}
          <div className="flex h-full overflow-hidden  md:h-[3rem] 2xl:h-[4rem] 2xl:mr-[1.5vw] text-lg gap-10 justify-center items-center">
            <img ref={navbarLogoRef} src={logo} alt="logo" />
          </div>

          {/* Right-side Links */}
          <div className="flex gap-10 overflow-hidden text-lg justify-center items-center md:flex md:gap-10 hidden">
            <a className='2xl:text-[18px] md:text-[16px]' href="#" ref={(el) => (navbarLinksRef.current[3] = el)}>Help</a>
            <a className='2xl:text-[18px] md:text-[16px]' href="#" ref={(el) => (navbarLinksRef.current[4] = el)}>Blog</a>
            <a className='2xl:text-[18px] md:text-[16px]' href="#" ref={(el) => (navbarLinksRef.current[6] = el)}>Log In</a>
            <a className="py-[10px] text-white 2xl:text-[18px] md:text-[16px] px-5 text-lg bg-black rounded-full" href="#" ref={(el) => (navbarLinksRef.current[7] = el)}>Sign up</a>
          </div>
        </div>
      </div>
    </div >
  );
};

const DropdownMenu = ({ options }) => (
  <div className="absolute top-full left-0 mt-2 w-32 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
    {options.map((option, index) => (
      <a key={index} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
        {option}
      </a>
    ))}
  </div>
);

export default Navbar;
