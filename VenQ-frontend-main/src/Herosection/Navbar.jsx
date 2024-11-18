import React, { useState } from 'react';
import logo from '../assets/images/clogo.png';
import { SlArrowDown } from "react-icons/sl";
import { FiMenu } from "react-icons/fi"; // Importing hamburger icon for mobile

const Navbar = ({ navbarLinksRef, navbarLogoRef }) => {
  const options = {
    personal: ["Profile", "Settings", "Logout"],
    business: ["Dashboard", "Analytics", "Reports"],
    company: ["About Us", "Careers", "Contact"],
    en: ["English", "Spanish", "French"]
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu visibility

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState); // Toggle the mobile menu
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white/50 backdrop-blur-lg">
      <div className="flex w-full h-full">
        <div className="flex font-latoBold py-[3px] px-5 md:px-[7rem] justify-between w-full h-full">
          {/* Left-side links for large screens */}
          <div className="hidden md:flex overflow-hidden h-[4rem] gap-10 justify-center items-center">
            <div className="relative group">
              <a className="flex 2xl:text-[18px] md:text-[16px] gap-[10px] justify-center items-center" href="#" ref={(el) => (navbarLinksRef.current[0] = el)}>
                Personal <SlArrowDown size={13} className="text-black" />
              </a>
              <DropdownMenu options={options.personal} />
            </div>
            <div className="relative group">
              <a className="flex 2xl:text-[18px] md:text-[16px] gap-[10px] justify-center items-center" href="#" ref={(el) => (navbarLinksRef.current[1] = el)}>
                Business <SlArrowDown size={13} className="text-black" />
              </a>
              <DropdownMenu options={options.business} />
            </div>
            <div className="relative group">
              <a className="flex 2xl:text-[18px] md:text-[16px] gap-[10px] justify-center items-center" href="#" ref={(el) => (navbarLinksRef.current[2] = el)}>
                Company <SlArrowDown size={13} className="text-black" />
              </a>
              <DropdownMenu options={options.company} />
            </div>
          </div>

          {/* Center Logo */}
          <div className="flex overflow-hidden h-[3rem] md:h-[3rem] 2xl:h-[4rem] 2xl:mr-[1.5vw] mr-0 text-lg gap-10 md:justify-center items-center">
            <img className='scale-[.8] md:scale-[1]' ref={navbarLogoRef} src={logo} alt="logo" />
          </div>

          {/* Right-side Links for large screens */}
          <div className="hidden md:flex gap-10 overflow-hidden text-lg justify-center items-center">
            <a className='2xl:text-[18px] md:text-[16px]' href="#" ref={(el) => (navbarLinksRef.current[3] = el)}>Help</a>
            <a className='2xl:text-[18px] md:text-[16px]' href="#" ref={(el) => (navbarLinksRef.current[4] = el)}>Blog</a>
            <a className='2xl:text-[18px] md:text-[16px]' href="#" ref={(el) => (navbarLinksRef.current[6] = el)}>Log In</a>
            <a className="py-[10px] text-white 2xl:text-[18px] md:text-[16px] px-5 text-lg bg-black rounded-full" href="#" ref={(el) => (navbarLinksRef.current[7] = el)}>Sign up</a>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden flex items-center">
            <FiMenu size={24} onClick={toggleMobileMenu} className="cursor-pointer text-black" />
          </div>
        </div>
      </div>

      {/* Mobile Menu (Conditional rendering based on state) */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg">
          <div className="flex flex-col items-center p-4">
            <a href="#" className="py-2 text-lg text-gray-700">Personal</a>
            <a href="#" className="py-2 text-lg text-gray-700">Business</a>
            <a href="#" className="py-2 text-lg text-gray-700">Company</a>
            <a href="#" className="py-2 text-lg text-gray-700">Help</a>
            <a href="#" className="py-2 text-lg text-gray-700">Blog</a>
            <a href="#" className="py-2 text-lg text-gray-700">Log In</a>
            <a href="#" className="py-3 px-6 text-lg bg-black text-white rounded-full">Sign Up</a>
          </div>
        </div>
      )}
    </div>
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
