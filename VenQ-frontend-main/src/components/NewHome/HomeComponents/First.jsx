import "./first.css";
import property from "./images/property.png";
import ReturnCalculator from "./ReturnCalculator";
const First = () => {

  return (
    <div className="hero-new-container">
      <div className="hero-heading heading--primary main-heading">
        <h3>INVEST IN REAL ESTATE</h3>
        <h3>WITH JUST RS. 5000</h3>
        <button className="main-button">GET STARTED</button>
      </div>
      <div className="live-property">
        <div className="inner-box">
          <div className="left-div">
            <h3>If you had invested</h3>
            <ReturnCalculator />
          </div>
          <div className="right-div">
            <h3>Dont worry its not too late</h3>
            <img src={property} className="property-image"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
