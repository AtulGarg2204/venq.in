import React from "react";
import { Grid } from "@mui/material";
import "./About.css";
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer";
import img1 from "./images/Founders.jpg";
import png1 from "./images/diversified-investment-opportunities.png";
import png2 from "./images/innovative-technology-platform.png";
import png3 from "./images/fractionalized-investing.png";
import png4 from "./images/transparent-investment-process.png";
import png5 from "./images/professional-management.png";
import png6 from "./images/regular-updates-and-reporting.png";
import SplideSlider from "../components/SplideSlider/SplideSlider";
import PartnerSlider from "../components/Partners/PartnerSlider";

function About() {
  return (
    <>
      <div className="black">
        <div className="abt-navbar">
          <Navbar st={{ backgroundColor: "green" }} />
          <h2 className="about-heading">About Us</h2>
          {/* <p className="sub-heading">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quos harum aut
                    </p> */}
        </div>
      </div>
      <div className="container-about" style={{ marginBottom: "10%" }}>
        <section className="image-text">
          <img
            className="image-1"
            src={img1}
            alt="thum"
            width="500"
            height="auto"
          />
          <div className="text-content">
            <p className="content">
              Venq, established in 2023, is an innovative real estate investment
              platform founded by a team of visionary entrepreneurs committed to
              democratizing the real estate investment landscape. Led by
              Sakshamm R Cheema as CEO and Founder, Shivam Garg as CFO and
              Co-Founder, and Deveshvar Nanda as COO and Co-Founder, Venq
              simplifies real estate investing.
            </p>
            <p className="content">
              The founders' collective expertise spans product development,
              financial management, legal compliance, marketing, and sales,
              forming a solid foundation for Venq's success. Sakshamm's
              strategic leadership drives product development and sales growth,
              while Shivam's financial acumen ensures sustainability and legal
              compliance. Deveshvar's marketing and sales expertise promotes
              operational excellence and attracts new investors.
            </p>
            <p className="content">
              Venq's user-friendly platform allows individuals to start
              investing in real estate with as little as Rs 5000, breaking down
              traditional investment barriers and reaching a broader audience.
              The company's revenue model is built on real estate investments,
              with a strong focus on accessibility and ease of use.
            </p>
            <p className="content">
              With a dedicated team, strategic partnerships, and a mission to
              revolutionize real estate investing, Venq is poised to transform
              the industry and make real asset investing accessible and easy for
              everyone.
            </p>
            <button>Get in touch</button>
          </div>
        </section>

        <h2 className="about-heading choose">Feautured</h2>
        <section className="feautured">
          <SplideSlider />
        </section>

        <h2 className="about-heading choose">Why choose us</h2>
        {/* <p className="sub-heading choose">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quos harum aut Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, eum!.</p> */}
        <section className="choose-us">
          <div className="item-1">
            <div className="items-icon">
              <img src={png1} alt="png" width="50" />
            </div>
            <div className="choose-text-con">
              <h3 className="choose-heading">
                Diversified Investment Opportunities
              </h3>
              <p>
                {" "}
                Venq offers a range of real estate investment opportunities
                across various sectors and locations, providing investors with
                the flexibility to choose investments that align with their
                interests and risk appetite.
              </p>
            </div>
          </div>
          <div className="item-2">
            <div className="items-icon">
              <img src={png2} alt="png" width="50" />
            </div>
            <div className="choose-text-con">
              <h3 className="choose-heading">Innovative Technology Platform</h3>
              <p>
                Venq's technology platform provides investors with a
                user-friendly interface for managing their investments,
                accessing real-time data, and monitoring their investment
                performance.
              </p>
            </div>
          </div>
          <div className="item-3">
            <div className="items-icon">
              <img src={png3} alt="png" width="50" />
            </div>
            <div className="choose-text-con">
              <h3 className="choose-heading">Fractionalized Investing</h3>
              <p>
                Venq allows investors to start with as low as Rs. 5,000,
                enabling retail investors to participate in real estate
                opportunities that were previously out of reach.
              </p>
            </div>
          </div>
          <div className="item-6">
            <div className="items-icon">
              <img src={png6} alt="png" width="50" />
            </div>
            <div className="choose-text-con">
              <h3 className="choose-heading">Regular Updates and Reporting</h3>
              <p>
                Venq provides regular updates and reporting on the investment
                performance, enabling investors to monitor their investments and
                make informed investment decisions.
              </p>
            </div>
          </div>
          <div className="item-4">
            <div className="items-icon">
              <img src={png4} alt="png" width="50" />
            </div>
            <div className="choose-text-con">
              <h3 className="choose-heading">Transparent Investment Process</h3>
              <p>
                Venq's investment process is transparent and straightforward,
                providing investors with clear and concise information about the
                investment opportunities, risks, and returns. Venq ensures that
                all its real estate investments are compliant with relevant
                regulations and law
              </p>
            </div>
          </div>

          <div className="item-4">
            <div className="items-icon">
              <img src={png5} alt="png" width="50" />
            </div>
            <div className="choose-text-con">
              <h3 className="choose-heading">Professional Management</h3>
              <p>
                Venq's team of experienced real estate professionals manages the
                investment process from start to finish, ensuring that investors
                benefit from their expertise and knowledge in identifying and
                executing promising real estate investments.
              </p>
            </div>
          </div>
        </section>
        <section className="partner-slider-container">
          <PartnerSlider />
        </section>
        {/* You can add more sections with their respective stylings */}
      </div>
      <Footer />
    </>
  );
}

export default About;
