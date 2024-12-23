import React from "react";

import "./LocationPage.css";

function FinalPage({ fd, sfd, am, sam, dc, sdc, dl, sdl }) {
  return (
    <div className="other-info-container">
      <input
        type="text"
        placeholder="Enter country name..."
        value={fd.locationCountryName}
        onChange={(e) => {
          sfd({ ...fd, locationCountryName: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Enter city name..."
        value={fd.locationCityName}
        onChange={(e) => {
          sfd({ ...fd, locationCityName: e.target.value });
        }}
      />

      <input
        type="text"
        placeholder="Enter street..."
        value={fd.locationStreet}
        onChange={(e) => {
          sfd({ ...fd, locationStreet: e.target.value });
        }}
      />
    </div>
  );
}

export default FinalPage;
