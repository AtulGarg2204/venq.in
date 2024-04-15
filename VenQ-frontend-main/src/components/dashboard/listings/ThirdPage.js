import React from "react";
import "./ThirdPage.css";

function ThirdPage({ fd, sfd }) {
  return (
    <div className="other-info-container">
      <input
        type="url"
        placeholder="Enter url 1"
        value={fd.propertyImgUrlOne}
        onChange={(e) => {
          sfd({ ...fd, propertyImgUrlOne: e.target.value });
        }}
      />
      <input
        type="url"
        placeholder="Enter url 2"
        value={fd.propertyImgUrlTwo}
        onChange={(e) => {
          sfd({ ...fd, propertyImgUrlTwo: e.target.value });
        }}
      />
      <input
        type="url"
        placeholder="Enter url 3"
        value={fd.propertyImgUrlThree}
        onChange={(e) => {
          sfd({ ...fd, propertyImgUrlThree: e.target.value });
        }}
      />
      <input
        type="url"
        placeholder="Enter url 4"
        value={fd.propertyImgUrlFour}
        onChange={(e) => {
          sfd({ ...fd, propertyImgUrlFour: e.target.value });
        }}
      />
    </div>
  );
}

export default ThirdPage;
