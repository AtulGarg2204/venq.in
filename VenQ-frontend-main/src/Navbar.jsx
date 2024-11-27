import React, { useState } from 'react';
import logo from './assets/images/clogo.png';
import { SlArrowDown } from "react-icons/sl";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Navbar = ({ navbarLinksRef, navbarLogoRef, workTimelineRef }) => {
  const token = JSON.parse(localStorage.getItem("userinfo")); // Check user token
  const navigate = useNavigate();

  const options = {
    personal: [
      { name: "Properties", link: "/properties" },
      // { name: "F.I.G.", link: "#work-timeline", comingSoon: true },
      // { name: "TimeShare.", link: "#work-timeline", comingSoon: true },
      // { name: "BrokerConnect+", link: "#work-timeline", comingSoon: true },
    ],
    company: [
      { name: "Contact us", link: "/contactUs" },
      { name: "WhatsApp", link: "#whatsapp" },
      { name: "Terms", link: "/terms" },
      { name: "Learn", link: "/learn" },
    ],
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  // const handleComingSoonClick = (event) => {
  //   event.preventDefault();
  //   if (workTimelineRef?.current) {
  //     workTimelineRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   }
  // };

  return (
    <div className="relative h-auto top-0 left-0 w-full z-50 bg-white/50 backdrop-blur-lg">
      <div className="flex w-full h-full">
        <div className="flex font-latoBold py-[3px] px-5 md:px-[7rem] justify-between items-center w-full h-full">
          {/* Left-side links */}
          <div className="hidden md:flex overflow-visible font-medium font-raleway h-[4rem] lg:gap-6 xl:gap-10 justify-center items-center">
            <div className="relative group">
              <a
                className="flex 2xl:text-[16px] md:text-[14px] gap-[10px] justify-center items-center"
                href=""
                // ref={(el) => (navbarLinksRef.current[0] = el)}
              >
                Invest <SlArrowDown size={13} className="text-black" />
              </a>
              <DropdownMenu options={options.personal}  />
            </div>
            <div className="relative group">
              <a
                className="flex 2xl:text-[16px] md:text-[14px] gap-[10px] justify-center items-center"
                href="#"
                // ref={(el) => (navbarLinksRef.current[1] = el)}
              >
                List Property
              </a>
            </div>
            <div className="relative group">
              <h1
                className="flex cursor-pointer 2xl:text-[16px] md:text-[14px] gap-[10px] justify-center items-center"
                // ref={(el) => (navbarLinksRef.current[2] = el)}
              >
                Company <SlArrowDown size={13} className="text-black" />
              </h1>
              <DropdownMenu options={options.company} />
            </div>
          </div>

          {/* Center Logo */}
          <div className="flex cursor-pointer overflow-hidden h-[3rem] md:h-full justify-center 2xl:scale-[.8] md:scale-[.7] 2xl:h-[4rem] 2xl:mr-[1.5vw] mr-0 text-lg gap-10 md:justify-center items-center">
            <img
              onClick={() => navigate("/")} // Redirect to the home page
              className="scale-[.8] ml-[3rem] md:scale-[1]"
              // ref={navbarLogoRef}
              src={logo}
              alt="logo"
            />
          </div>

          {/* Right-side links */}
          <div className="hidden lg:text-sm md:flex lg:gap-6 xl:gap-10 font-medium font-raleway overflow-hidden md:text-base xl:text-lg justify-center items-center">
            <a
              className="2xl:text-[16px] lg:text-[14px] md:text-[14px]"
              href="#help"
              // ref={(el) => (navbarLinksRef.current[3] = el)}
            >
              Help
            </a>
            <a
              className="2xl:text-[16px] lg:text-[14px] md:text-[14px]"
              href="/blog"
              // ref={(el) => (navbarLinksRef.current[4] = el)}
            >
              Blog
            </a>

            {/* Conditionally render login/signup or dashboard/profile */}
            {!token ? (
              <>
                <a
                  className="2xl:text-[16px] lg:text-[14px] md:text-[14px]"
                  href="/login"
                  // ref={(el) => (navbarLinksRef.current[6] = el)}
                >
                  Log In
                </a>
                <a
                  className="py-[10px] text-white 2xl:text-[18px] md:text-[16px] text-lg px-5 bg-black rounded-full hover:text-black hover:bg-zinc-200 transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-y-[-3px]"
                  href="/signup"
                  // ref={(el) => (navbarLinksRef.current[7] = el)}
                >
                  Sign up
                </a>
              </>
            ) : (
              <>
                <Link
                  className="2xl:text-[16px] font-bold text-[#2AB589] justify-center items-center flex gap-2 lg:text-[14px] md:text-[14px]"
                  to="/dashboard/profile"
                  // ref={(el) => (navbarLinksRef.current[6] = el)}
                >
                  {/* <div className="text-white p-2 bg-green-600 rounded-full">
                    <CiUser size={24}/>
                  </div> */}
                  Profile
                </Link>
                <Link
                  className="2xl:text-[16px] bg-black px-5 py-2 rounded-full text-white font-semibold lg:text-[14px] md:text-[14px]"
                  to="/dashboard/properties"
                  // ref={(el) => (navbarLinksRef.current[5] = el)}
                >
                  Dashboard
                </Link>

              </>
            )}
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <FiMenu size={24} onClick={toggleMobileMenu} className="cursor-pointer text-black" />
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-lg overflow-y-auto max-h-screen">
          <div className="h-full block left-0">
            <div className="flex flex-col px-10 justify-start items-start p-4">
              {/* Mobile Menu Sections */}
              <div className="w-full mt-4 justify-center items-center flex gap-5">
                {!token ? (
                  <>
                    <a
                      className="py-[10px] text-black font-semibold text-sm sm:text-base md:text-lg px-10 sm:px-12 border border-black rounded-2xl hover:bg-black hover:text-white duration-300 active:scale-95 active:bg-black"
                      href="/signup"
                    >
                      Sign Up
                    </a>
                    <a
                      className="py-[10px] text-white font-semibold text-sm sm:text-base md:text-lg px-10 sm:px-12 bg-black rounded-2xl hover:bg-white hover:text-black duration-300 active:scale-95 active:bg-black"
                      href="/login"
                    >
                      Log In
                    </a>
                  </>
                ) : (
                  <>
                    <a
                      className="py-[10px] text-black font-semibold text-sm sm:text-base md:text-lg px-10 sm:px-12 border border-black rounded-2xl hover:bg-black hover:text-white duration-300 active:scale-95 active:bg-black"
                      href="/dashboard/profile"
                    >
                      Profile
                    </a>
                    <a
                      className="py-[10px] text-white font-semibold text-sm sm:text-base md:text-lg px-10 sm:px-12 bg-black rounded-2xl hover:bg-white hover:text-black duration-300 active:scale-95 active:bg-black"
                      href="/dashboard/properties"
                    >
                      Dashboard
                    </a>
                  </>
                )}
              </div>
              <h1 className="py-2 mt-8 text-xs sm:text-sm md:text-base text-gray-700">Invest</h1>
              {options.personal.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="py-1 font-bold text-sm sm:text-base md:text-lg text-gray-700"
                  // onClick={(e) => {
                  //   if (item.comingSoon) {
                  //     e.preventDefault();
                  //     handleComingSoonClick(e);
                  //     setIsMobileMenuOpen(false);
                  //   } else {
                  //     setIsMobileMenuOpen(false);
                  //   }
                  // }}
                >
                  {item.name}
                  {item.comingSoon && (
                    <span className="ml-2 px-2 py-1 text-[8px] sm:text-[10px] bg-green-300 text-black rounded">
                      Coming Soon
                    </span>
                  )}
                </a>
              ))}

              <h1 className="py-2 mt-5 text-xs sm:text-sm md:text-base text-gray-700">Property</h1>
              <a
                href="#business"
                className="py-1 font-bold text-sm sm:text-base md:text-lg text-gray-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                List Property
              </a>

              <h1 className="py-2 mt-5 text-xs sm:text-sm md:text-base text-gray-700">Company</h1>
              {options.company.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  className="py-1 font-bold text-sm sm:text-base md:text-lg text-gray-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <h1 className="py-2 mt-5 text-xs sm:text-sm md:text-base text-gray-700">Help</h1>
              <a
                href="#whatsapp"
                className="py-1 font-bold text-sm sm:text-base md:text-lg text-gray-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}



    </div>
  );
};

// Dropdown menu for personal/company links
const DropdownMenu = ({ options, onComingSoonClick }) => (
  <div className="absolute top-full px-[2vw] py-[2vw] left-0 mt-2 w-auto bg-zinc-50 font-medium font-raleway shadow-lg rounded-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
    {options.map((option, index) => {
      const isExternal = option.link.startsWith("#");

      return isExternal ? (
        <a
          key={index}
          href={option.link}
          className={`block px-2 w-full text-nowrap py-2 md:text-xs 2xl:text-base text-zinc-900 hover:bg-gray-100 ${option.name === "Properties" ? "font-bold 2xl:text-lg mb-4 md:text-sm border-b border-zinc-400" : ""
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
      ) : (
        <Link
          key={index}
          to={option.link}
          className={`block px-2 w-full text-nowrap py-2 md:text-xs 2xl:text-base text-zinc-900 hover:bg-gray-100 ${option.name === "Properties" ? "font-bold 2xl:text-lg mb-4 md:text-sm border-b border-zinc-400" : ""
            }`}
        >
          {option.name}
        </Link>
      );
    })}
  </div>
);

export default Navbar;
