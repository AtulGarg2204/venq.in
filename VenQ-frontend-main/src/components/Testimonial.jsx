
import React, { useState, useEffect } from "react";
import "./Testimonial.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const updateMatches = () => setMatches(mediaQuery.matches);

    mediaQuery.addEventListener("change", updateMatches);
    updateMatches();

    return () => mediaQuery.removeEventListener("change", updateMatches);
  }, [query]);

  return matches;
};
<script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/45720526.js"></script>
const testimonials = [
  // Testimonial 1
  {
    name: "John Doe",
    location: "New York, USA",
    quote:
      "VenQ has transformed my investment journey. ",
    image: "images/man2.jpeg",
  },
  // Testimonial 2
  {
    name: "Jane Smith",
    location: "Los Angeles, USA",
    quote:
      "I can't express how satisfied I am with VenQ.",
    image: "images/woman.jpeg",
  },
  // Testimonial 3
  {
    name: "Bob Johnson",
    location: "London, UK",
    quote:
      "VenQ stands out in the world of property investment.",
    image: "images/man2.jpeg",
  },
  // Testimonial 4
  {
    name: "Alice Williams",
    location: "Toronto, Canada",
    quote:
      "I discovered VenQ at a crucial point in my investment journey.",
    image: "images/woman.jpeg",
  },
  // Testimonial 5
  {
    name: "Charlie Brown",
    location: "Sydney, Australia",
    quote:
      "VenQ exceeded my expectations with its comprehensive insights and ease of use.",
    image: "images/man2.jpeg",
  },
  // Testimonial 6
  {
    name: "Eva Rodriguez",
    location: "Barcelona, Spain",
    quote:
      "I've been using VenQ for a while now, and it has become an indispensable tool in my investment strategy.",
    image: "images/woman.jpeg",
  },
];

const Testi = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const [startIndex, setStartIndex] = useState(0);

  const visibleTestimonials = isSmallScreen
    ? [testimonials[startIndex]]
    : getCyclicTestimonials(startIndex, 3);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  function getCyclicTestimonials(startIndex, count) {
    const testimonialsCount = testimonials.length;
    const end = startIndex + count;

    if (end <= testimonialsCount) {
      return testimonials.slice(startIndex, end);
    } else {
      const firstSlice = testimonials.slice(startIndex);
      const remainingCount = count - firstSlice.length;
      const secondSlice = testimonials.slice(0, remainingCount);
      return [...firstSlice, ...secondSlice];
    }
  }

  return (
    <div className="new-test-container">
      <div className="new-content">
        <h1 className="new-heading">DONT JUST TAKE OUR WORD FOR IT</h1>
        <h1 className="new-heading-two">SEE WHAT OUR INVESTORS HAVE TO SAY</h1>
      </div>
      <div className="new-testimonials-section">
        {/* <img
            src="images/chevron-left-solid.svg"
            className="button-clicked"
            onClick={handlePrev}
          /> */}
        {visibleTestimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-container">
            <div className={`new-testimonial ${index === 1 ? 'large center' : (index === 0 ? 'small left' : 'small right')}`}>
              <div>
                <FontAwesomeIcon icon={faQuoteLeft} className={index === 0 ? 'side-quote' : 'left-quote'} />
              </div>
              <div>
                <p className={`new-quote${index === 1 ? 'Center' : ''}`}>
                  {testimonial.quote}
                </p>
              </div>
              <div className="new-pic">
                <img
                  src={testimonial.image}
                  alt={`User ${index + 1}`}
                  className="new-user-img"
                />
              </div>
            </div>
            <div className={`user-info${index === 1 ? 'Center' : (index === 0 ? 'left' : 'right')}`}>
              <h2 className="user-name">{testimonial.name}</h2>
              <p className="user-location">{testimonial.location}</p>
            </div>
          </div>
        ))}
        {/* <img
            src="images/chevron-right-solid.svg"
            className="button-clicked"
            onClick={handleNext}
          /> */}
      </div>
    </div>
  );
};

export default Testi;

