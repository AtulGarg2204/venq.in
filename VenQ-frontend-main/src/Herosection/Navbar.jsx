import React, { useState } from 'react';
import logo from '../assets/images/clogo.png';
import { SlArrowDown } from "react-icons/sl";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Navbar = ({ navbarLinksRef, navbarLogoRef, workTimelineRef }) => {
  const token = JSON.parse(localStorage.getItem("userinfo"));
  const navigate = useNavigate();

  const options = {
    personal: [
      { name: "Properties", link: "/properties" },
      { name: "F.I.G.", link: "#work-timeline", comingSoon: true },
      { name: "TimeShare.", link: "#work-timeline", comingSoon: true },
      { name: "BrokerConnect+", link: "#work-timeline", comingSoon: true },
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

  const handleComingSoonClick = (event) => {
    event.preventDefault();
    if (workTimelineRef?.current) {
      workTimelineRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white/50 backdrop-blur-lg">
      <div className="flex w-full h-full">
        <div className="flex font-latoBold py-2 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 justify-between items-center w-full h-full">
          {/* Left-side links */}
          <div className="hidden md:flex overflow-visible font-medium font-raleway h-16 gap-4 lg:gap-6 xl:gap-8 2xl:gap-10 justify-center items-center">
            <div className="relative group">
              <a
                className="flex text-sm lg:text-base xl:text-lg 2xl:text-xl gap-2 justify-center items-center"
                href=""
                ref={(el) => (navbarLinksRef.current[0] = el)}
              >
                Invest <SlArrowDown className="text-black w-3 h-3 lg:w-4 lg:h-4" />
              </a>
              <DropdownMenu options={options.personal} onComingSoonClick={handleComingSoonClick} />
            </div>
            <div className="relative group">
              <a
                className="flex text-sm lg:text-base xl:text-lg 2xl:text-xl gap-2 justify-center items-center"
                href="#"
                ref={(el) => (navbarLinksRef.current[1] = el)}
              >
                List Property
              </a>
            </div>
            <div className="relative group">
              <h1
                className="flex cursor-pointer text-sm lg:text-base xl:text-lg 2xl:text-xl gap-2 justify-center items-center"
                ref={(el) => (navbarLinksRef.current[2] = el)}
              >
                Company <SlArrowDown className="text-black w-3 h-3 lg:w-4 lg:h-4" />
              </h1>
              <DropdownMenu options={options.company} />
            </div>
          </div>

          {/* Center Logo */}
          <div className="flex cursor-pointer justify-center items-center">
            <img
              onClick={() => navigate("/")} 
              className="w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 h-6 sm:h-6 md:h-8 lg:h-10 xl:h-10 object-contain transition-all duration-300"
              ref={navbarLogoRef}
              src={logo}
              alt="logo"
            />
          </div>

          {/* Right-side links */}
          <div className="hidden md:flex gap-4 lg:gap-6 xl:gap-8 2xl:gap-10 font-medium font-raleway justify-center items-center">
            <a
              className="text-sm lg:text-base xl:text-lg 2xl:text-xl"
              href="#help"
              ref={(el) => (navbarLinksRef.current[3] = el)}
            >
              Help
            </a>
            <a
              className="text-sm lg:text-base xl:text-lg 2xl:text-xl"
              href="/blog"
              ref={(el) => (navbarLinksRef.current[4] = el)}
            >
              Blog
            </a>

            {!token ? (
              <>
                <a
                  className="text-sm lg:text-base xl:text-lg 2xl:text-xl"
                  href="/login"
                  ref={(el) => (navbarLinksRef.current[6] = el)}
                >
                  Log In
                </a>
                <a
                  className="py-2 px-4 lg:px-5 text-white text-sm lg:text-base xl:text-lg 2xl:text-xl bg-black rounded-full hover:text-black hover:bg-zinc-200 transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-y-1"
                  href="/signup"
                  ref={(el) => (navbarLinksRef.current[7] = el)}
                >
                  Sign up
                </a>
              </>
            ) : (
              <>
                <Link
                  className="text-sm lg:text-base xl:text-lg 2xl:text-xl font-bold text-[#2AB589] flex gap-2 items-center"
                  to="/dashboard/profile"
                  ref={(el) => (navbarLinksRef.current[6] = el)}
                >
                  Profile
                </Link>
                <Link
                  className="py-2 px-4 lg:px-5 text-white text-sm lg:text-base xl:text-lg 2xl:text-xl bg-black rounded-full font-semibold"
                  to="/dashboard/properties"
                  ref={(el) => (navbarLinksRef.current[5] = el)}
                >
                  Dashboard
                </Link>
              </>
            )}
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <FiMenu className="w-6 h-6 cursor-pointer text-black" onClick={toggleMobileMenu} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-white shadow-lg overflow-y-auto max-h-[calc(100vh-4rem)]">
          <div className="flex flex-col p-4 sm:p-6">
            {/* Mobile Menu Sections */}
            <div className="flex justify-center items-center gap-4 mb-6">
              {!token ? (
                <>
                  <a
                    className="py-2 px-4 sm:px-6 text-black font-semibold text-sm sm:text-base border border-black rounded-xl hover:bg-black hover:text-white duration-300 active:scale-95"
                    href="/signup"
                  >
                    Sign Up
                  </a>
                  <a
                    className="py-2 px-4 sm:px-6 text-white font-semibold text-sm sm:text-base bg-black rounded-xl hover:bg-white hover:text-black duration-300 active:scale-95"
                    href="/login"
                  >
                    Log In
                  </a>
                </>
              ) : (
                <>
                  <a
                    className="py-2 px-4 sm:px-6 text-black font-semibold text-sm sm:text-base border border-black rounded-xl hover:bg-black hover:text-white duration-300 active:scale-95"
                    href="/dashboard/profile"
                  >
                    Profile
                  </a>
                  <a
                    className="py-2 px-4 sm:px-6 text-white font-semibold text-sm sm:text-base bg-black rounded-xl hover:bg-white hover:text-black duration-300 active:scale-95"
                    href="/dashboard/properties"
                  >
                    Dashboard
                  </a>
                </>
              )}
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-xs sm:text-sm text-gray-700 mb-2">Invest</h2>
                <div className="space-y-2">
                  {options.personal.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      className="block font-bold text-sm sm:text-base text-gray-700"
                      onClick={(e) => {
                        if (item.comingSoon) {
                          e.preventDefault();
                          handleComingSoonClick(e);
                          setIsMobileMenuOpen(false);
                        } else {
                          setIsMobileMenuOpen(false);
                        }
                      }}
                    >
                      {item.name}
                      {item.comingSoon && (
                        <span className="ml-2 px-2 py-1 text-xs bg-green-300 text-black rounded">
                          Coming Soon
                        </span>
                      )}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xs sm:text-sm text-gray-700 mb-2">Property</h2>
                <a
                  href="#business"
                  className="block font-bold text-sm sm:text-base text-gray-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  List Property
                </a>
              </div>

              <div>
                <h2 className="text-xs sm:text-sm text-gray-700 mb-2">Company</h2>
                <div className="space-y-2">
                  {options.company.map((item, index) => (
                    <Link
                      key={index}
                      to={item.link}
                      className="block font-bold text-sm sm:text-base text-gray-700"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xs sm:text-sm text-gray-700 mb-2">Help</h2>
                <a
                  href="#whatsapp"
                  className="block font-bold text-sm sm:text-base text-gray-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const DropdownMenu = ({ options, onComingSoonClick }) => (
  <div className="absolute top-full left-0 mt-2 min-w-max bg-zinc-50 font-medium font-raleway shadow-lg rounded-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
    <div className="p-2 sm:p-3">
      {options.map((option, index) => {
        const isExternal = option.link.startsWith("#");
        const baseClasses = "block w-full whitespace-nowrap py-2 px-3 text-sm lg:text-base text-zinc-900 hover:bg-gray-100 rounded";
        const specialClasses = option.name === "Properties" ? "font-bold text-base lg:text-lg mb-2 border-b border-zinc-400" : "";

        return isExternal ? (
          <a
            key={index}
            href={option.link}
            className={`${baseClasses} ${specialClasses}`}
            onClick={option.comingSoon ? onComingSoonClick : undefined}
          >
            {option.name}
            {option.comingSoon && (
              <span className="ml-2 px-2 py-1 text-xs bg-green-300 text-black rounded">
                Coming Soon
              </span>
            )}
          </a>
        ) : (
          <Link
            key={index}
            to={option.link}
            className={`${baseClasses} ${specialClasses}`}
          >
            {option.name}
          </Link>
        );
      })}
    </div>
  </div>
);

export default Navbar;