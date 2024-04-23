import React from "react";
import { useNavigate } from "react-router-dom";
<script
  type="text/javascript"
  id="hs-script-loader"
  async
  defer
  src="//js.hs-scripts.com/45720526.js"
></script>;
const KycVerification = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        position: "absolute",
        height: "100%",
        width: "100%",
        border: "10px solid rgba(255, 255, 255)",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)", // Adding box shadow
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          position: "absolute",
          height: "max-content",
          width: "60%",
          padding: "2rem",
          top: "50%",
          left: "43%",
          transform: "translate(-50%, -50%)",
          fontFamily: "sans-serif"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h4>Personal information</h4>
        <p style={{ color: "gray" }}>
          Required by Indian banking laws. This information is{" "}
          <span style={{ color: "blue" }}> kept secure </span>. It will never be
          used for any purpose beyond executing your investment.
        </p>
        <button
          onClick={() => {
            // nextStep();
            navigate("/dashboard/profile");
          }}
        >
          Verify my Identity
        </button>
      </div>
    </div>
  );
};

export default KycVerification;
