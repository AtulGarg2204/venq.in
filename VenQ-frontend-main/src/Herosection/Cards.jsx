import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "../../src/assets/images/new look/Frame 18.png";
import img2 from "../../src/assets/images/new look/Frame 19.png";
import img3 from "../../src/assets/images/new look/Frame 20.png";

gsap.registerPlugin(ScrollTrigger);

const Cards = () => {
  const cardRefs = useRef([]); // Array of refs for cards

  useEffect(() => {
    gsap.set(cardRefs.current, { y: 200, opacity: 0 });

    gsap.timeline({
      scrollTrigger: {
        trigger: ".cards-container", // Add a class to the wrapper div
        start: "top 90%",
        toggleActions: "play none none none",
        // markers: true,
      },
    }).to(cardRefs.current, {
      y: 0,
      opacity: 1,
      duration: 2,
      ease: "power2.out",
      stagger: 0.5, // Stagger for sequential animation
    });
  }, []);

  return (
    <div className="cards-container w-full font-raleway md:h-[vw] 2xl:h-[30vw] mt-[8vw] p-[5vw] md:flex justify-center items-center gap-[4vw]">
      {[
        {
          title: "Sign Up & KYC",
          desc: "Create your free account and complete a quick KYC process to get access.",
          img: img1,
        },
        {
          title: "Select",
          desc: "Explore exclusive real estate listings and choose the property that fits your goals.",
          img: img2,
        },
        {
          title: "Invest",
          desc: "Secure your investment with ease and watch your portfolio grow.",
          img: img3,
        },
      ].map((card, index) => (
        <div
          key={index}
          ref={(el) => (cardRefs.current[index] = el)}
          className="2xl:w-[20vw] mb-[5vw] md:w-[25vw] md:h-[30vw] 2xl:h-[22vw] relative p-6 bg-zinc-100 rounded-3xl flex flex-col justify-center items-center"
        >
          <h1 className="absolute hidden md:block font-roboto md:text-[230px] 2xl:text-[250px] font-bold text-[#bec8c3] 2xl:-top-[10vw] 2xl:-left-[2vw] md:-top-[15vw] md:-left-[2vw]">
            {index + 1}
          </h1>
          <h1 className="2xl:text-[25px] md:text-[20px] text-[22px] font-semibold md:font-medium">
            {card.title}
          </h1>
          <h1 className="text-center font-medium text-zinc-400 mt-5 text-[15px]">
            {card.desc}
          </h1>
          <div className="w-full h-[200px] mt-6 bg-white rounded-[30px] flex justify-center items-center">
            <img className="scale-[.8]" src={card.img} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
