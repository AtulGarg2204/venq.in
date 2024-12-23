import React, { useState } from "react";
import "./ReturnCalculator.css";
const ReturnCalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState(20000);
  const [finalInvestment, setFinalInvestment] = useState(
    initialInvestment + initialInvestment * 0.3
  );
  const [year, setYear] = useState(3);
  return (
    <div className="cal-image">
      <p
        style={{
          fontSize: "16px",
          fontWeight: "600",
        }}
      >
        ₹{initialInvestment} One Time
      </p>
      <input
        className="cal-radio-input"
        type="range"
        min="20000"
        max="250000"
        step="500"
        value={initialInvestment}
        onChange={(e) => setInitialInvestment(parseInt(e.target.value))}
        style={{
          marginTop: "30px",
          marginBottom: "30px",
        }}
      />
      <p
        style={{
          fontSize: "16px",
          fontWeight: "600",
        }}
      >
        Over the Past
      </p>
      <div className="cal-button-container">
        <button
          style={{
            border: "none",
            background: year === 3 ? "#E8FAF5" : "none",
            color: year === 3 ? "#00B368" : "black",
            height: "30px",
            borderRadius: "20px",
            marginRight: "10px",
            marginLeft: "-10px",
          }}
          onClick={() => {
            setYear(3);
            setFinalInvestment(initialInvestment + initialInvestment * 0.9);
          }}
        >
          3 year
        </button>
        <button
          style={{
            border: "none",
            background: year === 5 ? "#E8FAF5" : "none",
            color: year === 5 ? "#00B368" : "black",
            height: "30px",
            borderRadius: "20px",
            marginRight: "10px",
          }}
          onClick={() => {
            setYear(5);
            setFinalInvestment(initialInvestment + initialInvestment * 1.5);
          }}
        >
          5 years{" "}
        </button>
        <button
          style={{
            height: "30px",
            borderRadius: "20px",
            marginRight: "1px",
            marginLeft: "5px",
            border: "none",
            background: year === 7 ? "#E8FAF5" : "none",
            color: year === 7 ? "#00B368" : "black",
          }}
          onClick={() => {
            setYear(7);
            setFinalInvestment(initialInvestment + initialInvestment * 2.1);
          }}
        >
          7 years
        </button>
      </div>
      <hr />
      <p style={{ marginTop: "20px", marginBottom: "20px", fontSize: "1rem" }}>
        Total investment of ₹ {initialInvestment}
      </p>
      <p className="would_have_become">
        Would have become ₹
        <span
          style={{
            fontSize: "1.125rem",
            fontWeight: "600",
            color: "#00B368",
          }}
        >
          {year === 3 && initialInvestment + initialInvestment * 0.9}
          {year === 5 && initialInvestment + initialInvestment * 1.5}
          {year === 7 && initialInvestment + initialInvestment * 2.1}{" "}
        </span>
      </p>
    </div>
  );
};

export default ReturnCalculator;
