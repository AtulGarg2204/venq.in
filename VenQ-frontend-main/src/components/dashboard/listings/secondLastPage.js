import React from "react";

function SecondLastPage({ fd, sfd ,fo,sfo}) {
  
  return (
    <div className="other-info-container">
         <h5>Funding Title</h5>
         <input
        type="text"
        placeholder="Enter funding title..."
        value={fd.timelineFundingTitle}
        onChange={(e) => {
          sfd({ ...fd, timelineFundingTitle: e.target.value });
        }}
      />
      <h5>Funding Description</h5>
      <input
        type="text"
        placeholder="Enter funding description..."
        value={fd.timelineFundingDescription}
        onChange={(e) => {
          sfd({ ...fd, timelineFundingDescription: e.target.value });
        }}
        />
        <br/>
       

      </div>
   
  );
}

export default SecondLastPage;