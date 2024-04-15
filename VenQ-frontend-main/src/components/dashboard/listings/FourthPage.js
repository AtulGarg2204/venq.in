import React, { useState } from "react";
import "./FourthPage.css";
import axios from "axios";
function FourthPage({ fd, sfd }) {
  return (
    <div style={{ paddingTop: "5px" }} className="other-info-container">
      <h5>Property Price</h5>
      <input
        type="text"
        placeholder="Enter property price"
        value={fd.financialInfoPropertyPrice}
        onChange={(e) => {
          sfd({ ...fd, financialInfoPropertyPrice: e.target.value });
        }}
      />
      <input
        style={{ marginTop: "10px" }}
        type="text"
        placeholder="Enter Transaction costs"
        value={fd.financialInfoPropertyTransactionCost}
        onChange={(e) => {
          sfd({ ...fd, financialInfoPropertyTransactionCost: e.target.value });
        }}
      />
      <input
        style={{ marginTop: "10px" }}
        type="text"
        placeholder="Enter Govt. Fees"
        value={fd.financialInfoPropertyGovtFess}
        onChange={(e) => {
          sfd({ ...fd, financialInfoPropertyGovtFess: e.target.value });
        }}
      />
      <input
        style={{ marginTop: "10px" }}
        type="text"
        placeholder="Enter total propetry cost"
        value={fd.financialInfoPropertyTotalCost}
        onChange={(e) => {
          sfd({ ...fd, financialInfoPropertyTotalCost: e.target.value });
        }}
      />
      <br />

      <br />
      <h5>Yearly Rental Price</h5>
      <input
        type="text"
        placeholder="Enter gross rent"
        value={fd.financialInfoPropertyGrossRent}
        onChange={(e) => {
          sfd({ ...fd, financialInfoPropertyGrossRent: e.target.value });
        }}
      />
      <input
        style={{ marginTop: "10px" }}
        type="text"
        placeholder="Enter service charges"
        value={fd.financialInfoPropertyRentServiceCharges}
        onChange={(e) => {
          sfd({
            ...fd,
            financialInfoPropertyRentServiceCharges: e.target.value,
          });
        }}
      />
      <input
        style={{ marginTop: "10px" }}
        type="text"
        placeholder="Enter maintenance cost"
        value={fd.financialInfoPropertyRentMaintenanceCost}
        onChange={(e) => {
          sfd({
            ...fd,
            financialInfoPropertyRentMaintenanceCost: e.target.value,
          });
        }}
      />
      <input
        style={{ marginTop: "10px" }}
        type="text"
        placeholder="Enter total annual income"
        value={fd.financialInfoPropertyTotalAnnualIncome}
        onChange={(e) => {
          sfd({
            ...fd,
            financialInfoPropertyTotalAnnualIncome: e.target.value,
          });
        }}
      />
      <br />
    </div>
  );
}

export default FourthPage;
