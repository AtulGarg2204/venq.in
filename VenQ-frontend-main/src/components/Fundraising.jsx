import React from "react";
import "./fundraising.css";

const Fundraising = () => {
  const instruments = [
    {
      id: 1,
      type: "Equity TYPE",
      name: "CCDs (Compulsory Convertible Debentures)",
      description:
        "With this instrument “CCDs”, investors purchase a fraction of a real estate property by subscribing to CCDs issued by an #SPV (Special Purpose Vehicle)#. This structure allows the property to be legally held under the SPV, ensuring that the investor has secure ownership. The CCDs offer a fixed return, and at the end of the investment term or upon the sale of the property, the CCDs are converted into equity, meaning the investor realizes the capital appreciation of the property",
      link: "#",
      label: "C.SAFE",
    },
    {
      id: 2,
      type: "Equity",
      name: "SAFE (Simple Agreement for Future Equity)",
      description:
        "A SAFE is a agreement made by Y-Combinator(link), where the investor provides capital now in exchange for a Contract called S.A.F.E (simple agreemnet for future equity) which represents your stake in the property till certain milestones are reached (such as the property’s sale) and then automatically the S.A.F.E. converts into equity. This allows investors to enter at an earlier stage and get an equity stake once the property meets the condition- Sale of the Property",
      link: "#",
      label: "SAFE",
    },
    {
      id: 3,
      type: "Debt",
      name: "Smart Contracts",
      description:
        "Smart contracts use blockchain technology to automate and secure the investment process. These digital contracts ensure transparency. Investors hold their share in a property through blockchain-based smart contracts, which automatically execute returns every month, ownership transfers in case of selling of shares and final return when the #SPV# sells the property.The decentralized nature of smart contracts provides a secure, transparent, and efficient way of tracking investments",
      link: "#",
      label: "SDA",
    },
    {
      id: 4,
      type: "Crypto",
      name: "Timeshare",
      description:
        "Through the timeshare model, investors buy a fractional ownership of a property for a specific period of time.\n\n" +
        "30 QOIN = 30 Days\n\n" +
        "During this time, they can personally use the property, and when they aren’t using it, the property is rented out, generating income.\n\n" +
        "The investment is held under an SPV, ensuring that the property is under the investor’s name. This option allows for both personal enjoyment and financial gain from the rental income.",
      link: "#",
      label: "DPA",
    },
  ];

  return (
    <div className="fundraising-container">
      <h1 className="heading">Fundraising Instruments</h1>
      <hr className="divider" />

      <div className="grid-container">
        {instruments.map((instrument) => (
          <div key={instrument.id} className="instrument-box">
            <p className="type">{instrument.type}</p>
            <h3 className="name">{instrument.name}</h3>
            <hr className="box-divider" />
            <p className="description">{instrument.description}</p>
            <a href={instrument.link} className="learn-more">
              Learn more ›
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fundraising;
