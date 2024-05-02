import "./NewHeroSection.css";
import property from "./images/property.png"
import ReturnCalculator from "./ReturnCalculator";
const NewHeroSection = () => {

    return (
        <div className="new-home-first new-hero-container page-width">
            <div className="hero-heading heading--primary main-heading">
                <h3>INVEST IN REAL ESTATE</h3>
                <h3>WITH JUST RS. 5000</h3>
                <button className="main-button">GET STARTED</button>
            </div>
            <div className="hero-main-section">
                <div className="hero-main-inner">
                    <div className="hero-cal-container">
                        <h3>If you had invested</h3>
                        <ReturnCalculator />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewHeroSection;
