import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Worktimeline.css';
import img1 from '../../src/assets/images/new look/1.png'
import img2 from '../../src/assets/images/new look/2.png'
import img3 from '../../src/assets/images/new look/3.png'
import img4 from '../../src/assets/images/new look/4.png'
import img5 from '../../src/assets/images/new look/5.png'


const WorkTimeline = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionsRef = useRef([]);
  const leftNavRef = useRef(null);
  const marqueeRef = useRef(null);
  const [linePosition, setLinePosition] = useState('6.4rem'); // Initial position for 'Timeshare'

  const handleSectionClick = (index) => {
    setActiveSection(index);

    // Update the radial gradient line position based on index and screen size
    const positionsMd = ['6.2rem', '8.4rem', '11rem', '13rem', '15.5rem']; // For md
    const positions2xl = ['6.4rem', '8.9rem', '11.4rem', '13.9rem', '16.3rem']; // For 2xl

    const is2xl = window.matchMedia('(min-width: 1536px)').matches; // Tailwind 2xl breakpoint
    setLinePosition(is2xl ? positions2xl[index] : positionsMd[index]);

    // Scroll to the selected section with smooth scrolling
    sectionsRef.current[index].scrollIntoView({
      behavior: 'smooth',
      block: 'start', // Align the section to the top
    });
  };

  const observerOptions = {
    threshold: 0.5,
  };

  useEffect(() => {
    const marqueeElement = marqueeRef.current;

    gsap.fromTo(
      marqueeElement,
      { x: '100%' },
      {
        x: '-100%',
        scrollTrigger: {
          trigger: marqueeElement,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true,
          toggleActions: "play reverse play reverse",
        },
        ease: 'none',
      }
    );
    gsap.registerPlugin(ScrollTrigger);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(Number(entry.target.dataset.index));
        }
      });
    }, observerOptions);

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    // ScrollTrigger for the left navigation to stay fixed
    gsap.to(leftNavRef.current, {
      scrollTrigger: {
        trigger: '.right', // When the right section starts scrolling
        start: 'top top', // When the top of the right section hits the top of the viewport
        end: 'bottom bottom', // When the bottom of the right section hits the bottom of the viewport
        pin: true, // Pin the left navigation
        scrub: true, // Smoothly scroll the left navigation
        pinSpacing: false, // Avoid extra space after the pinned element
      },
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      {/* Marquee Section */}
      <div className="flex font-cambay overflow-hidden h-full w-full items-center flex-col">
        <h1 ref={marqueeRef} className="md:text-[80px] text-[60px] 2xl:text-[100px] flex py-[2vw] whitespace-nowrap font-raleway text-[#2b2828] font-bold uppercase">
          Welcome to India’s top{" "}
          <span className="ml-4 mr-4 text-[#2ab589]">fractional investment</span> platform.
        </h1>
      </div>

      <div className="flex flex-col md:flex-row mt-[1vw] md:px-[5vw] 2xl:px-[15vw] w-full bg-white font-raleway">
        {/* Left Navigation - Desktop View */}
        <div
          ref={leftNavRef}
          className="left hidden md:block border-l relative p-10 w-1/4 h-full">
          <div
            className="w-[2px] h-[30px] md:-left-[2px] 2xl:-left-[1.4px] rounded-full absolute"
            style={{
              top: linePosition,
              background: "radial-gradient(circle, black, rgba(0, 0, 0, 0.5), transparent)"
            }}
          ></div>
          <h1 className="text-[30px] mb-5 font-semibold">Products</h1>
          {['Blockchain', 'Fractional Investment Group', 'TimeShare.', 'List, Tokenize, Profit', 'BrokerConnect'].map((text, index) => (
            <h1
              key={index}
              className={`mt-4 md:text-[14px] 2xl:text-[16px] cursor-pointer ${activeSection === index ? 'text-black font-bold' : 'text-zinc-400'}`}
              onClick={() => handleSectionClick(index)}
            >
              {text}
            </h1>
          ))}
        </div>

        {/* Right Side Sections - Desktop View */}
        <div className="right hidden md:block w-4/5 overflow-y-auto h-screen scrollbar-hide">
          {['Real Estate Meets the Digital Age', 'F.I.G. Your Property, Your Investors, Our Support', 'TimeShare. Invest, Stay, Earn', 'List, Tokenize, Profit', 'BrokerConnect | Join the Broker Network, Tap the Retail Investors'].map((title, index) => (
            <div
              key={index}
              ref={(el) => (sectionsRef.current[index] = el)}
              data-index={index}
              className={`Multicurrency_Accounts p-[60px] rounded-3xl bg-zinc-100 ${activeSection === index ? 'block' : 'hidden'}`}
            >
              <div className="flex justify-start gap-5 items-center">
                <div className="w-10 h-10 rounded-full bg-[#D8DAE3]"></div>
                <h1 className="2xl:text-[30px] md:text-[25px] font-bold">{title}</h1>
              </div>
              <div className="w-full relative h-[450px] flex justify-center items-center bg-white rounded-3xl mt-6">
                <img
                  src={
                    index === 0
                      ? img1
                      : index === 1
                        ? img2
                        : index === 2
                          ? img3
                          : index === 3
                            ? img4
                            : img5
                  }
                  alt={`Section ${index + 1}`}
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
              <h1 className="mt-[1.5rem] md:text-[16px] 2xl:text-[20px] font-medium text-black">
                {index === 0 && 'Blockchain-backed equity tokens unlock access to premium properties.'}
                {index === 1 && 'Add your assets and investors, we’ll manage everything.'}
                {index === 2 && 'Enjoy a villa getaway or earn rental income.'}
                {index === 3 && 'Sell or trade your tokenized property units.'}
                {index === 4 && 'Reach a broader market through our broker network.'}
              </h1>
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden px-4 py-2">
          <h1 className="text-[32px] text-center font-semibold mb-8">Products</h1>
          {['Real Estate Meets the Digital Age', 'Fractional Investment Group', 'TimeShare. Invest, Stay, Earn', 'List, Tokenize, Profit', 'BrokerConnect'].map((title, index) => (
            <div
              key={index}
              className={`Multicurrency_Accounts mb-6 p-4 rounded-3xl bg-zinc-100`}
            >
              <div className="flex gap-[5vw] justify-between items-center">
                <div className="flex justify-start md:gap-4 gap-[5vw] items-center">
                  <div className="w-4 h-8 rounded-full bg-[#D8DAE3]"></div>
                  <h1 className="text-[16px] font-semibold">{title}</h1>
                </div>
                <button
                  onClick={() => setActiveSection(activeSection === index ? null : index)}
                  className="text-[20px] rounded-full bg-black h-[30px] flex justify-center items-center font-medium text-white"
                >
                  {activeSection === index ? '-' : '+'}
                </button>
              </div>
              {activeSection === index && (
                <div className="mt-4">
                  <div className="w-full relative  h-[250px] flex justify-center items-center bg-white rounded-3xl">
                    <img
                      src={
                        index === 0
                          ? img1
                          : index === 1
                            ? img2
                            : index === 2
                              ? img3
                              : index === 3
                                ? img4
                                : img5
                      }
                      alt={`Section ${index + 1}`}
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                  <h1 className="mt-3 text-center">{`Content for ${title} goes here`}</h1>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WorkTimeline;
