import React from "react";
import "./fundraising.css";

const FundraisingCard = ({ instrument }) => {
  return (
    <div className="fundraising-card">
      <div className="card-header">
        <span className="label">{instrument.label}</span>
        <span className="type">{instrument.type}</span>
      </div>
      <h3>{instrument.name}</h3>
      <p>{instrument.description}</p>
      <a href={instrument.link}>Learn more ›</a>
    </div>
  );
};

export default FundraisingCard;
