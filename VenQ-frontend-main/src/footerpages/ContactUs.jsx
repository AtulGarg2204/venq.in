import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import "./ContactUs.css";

import Footer from "../components/footer/Footer";
import CountryCode from "./CountryCode";

const FORM_ENDPOINT = "http://localhost:4000/contactUs/post";

function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    const inputs = e.target.elements;
    const data = {};
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }
    fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Form response was not ok");
        }
        setSubmitted(true);
      })
      .catch((err) => {
        e.target.submit();
      });
  };
  if (submitted) {
    console.log("Aman");
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <>
      <div className="black">
        <div className="abt-navbar">
          <Navbar st={{ backgroundColor: "green" }} />
          <h2 className="about-heading">Contact Us</h2>
        </div>
      </div>
      <div className="contact">
        <form
          className="contact-form"
          // action={FORM_ENDPOINT}
          method="post"
          onSubmit={handleSubmit}
        >
          <h2 className="heading-touch">Get in touch</h2>
          <p class="sub-heading-form">
            We are here to help. Chat to our friendly team 24/7 and get set up
            and ready to go in just 5 minutes.
          </p>
          <div className="contact-source">
            <div className="whatsapp">
              <a href="https://api.whatsapp.com/send?phone=9205553696&text=Hi%2C%0AI%27d%20like%20to%20know%20more%20about%20VENQ">
                <i class="bx bxl-whatsapp"></i>
                <span>Start a live chat</span>
              </a>
            </div>
            <div className="contact-email">
              <a href="mailto:team@venq.in" target="_blank" rel="related">
                <i class="bx bx-mail-send"></i> <span>Send a mail</span>
              </a>
            </div>
            <div className="instagram">
              <a
                href="https://www.instagram.com/venq.in/"
                target="_blank"
                rel="related"
              >
                <i class="bx bxl-instagram"></i>{" "}
                <span>Message us on Instagram</span>
              </a>
            </div>
          </div>
          <div className="contact-name">
            <label htmlFor="name">
              <div>First Name</div>
              <input
                type="text"
                name="firstName"
                id="name"
                className="contact-name"
                placeholder="First name"
              />
            </label>
            <label htmlFor="name">
              <div>Last Name</div>
              <input
                type="text"
                name="lastName"
                id="name"
                className="contact-name"
                placeholder="Last name"
              />
            </label>
          </div>
          <label htmlFor="email">
            <div>Email</div>
            <input
              type="email"
              name="email"
              id="email"
              className="contact-email"
              placeholder="example@mail.com"
            />
          </label>
          <label htmlFor="mobile">
            <div>Mobile No.</div>
            <div className="code-mobile">
              <CountryCode />
              <input
                type="number"
                name="mobile"
                id="mobile"
                className="contact-mobile"
                placeholder="Mobile No."
              />
            </div>
          </label>
          <div>Services</div>
          <div className="service">
            <div className="service-pair">
              <label htmlFor="individual">
                <input type="checkbox" name="individual" id="individiual" />
                <span>Individual</span>
              </label>
              <label htmlFor="firm">
                <input type="checkbox" name="firm" id="firm" />
                <span>Firm</span>
              </label>
              <label htmlFor="broker">
                <input type="checkbox" name="broker" id="broker" />
                <span>Broker</span>
              </label>
            </div>
            <div className="service-pair">
              <label htmlFor="developer">
                <input type="checkbox" name="developer" id="developer" />
                <span>Developer</span>
              </label>
              <label htmlFor="builder">
                <input type="checkbox" name="builder" id="builder" />
                <span>Builder</span>
              </label>
              <label htmlFor="investor">
                <input type="checkbox" name="investor" id="investor" />
                <span>Investor</span>
              </label>
            </div>
          </div>
          <button className="contact-btn">Send Message</button>
        </form>
        <div className="location-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224568.15030524903!2d76.9897491!3d28.42295755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1712147282425!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="map"
          ></iframe>
        </div>
      </div>
      <Footer></Footer>
      {/* You can add more sections with their respective stylings */}
    </>
  );
}

export default ContactUs;
