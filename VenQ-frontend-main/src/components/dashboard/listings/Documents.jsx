import React, { useState } from "react";
import "./Documents.css";

const DocumentUpload = ({ fd, sfd }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    sfd({ ...fd, documentFile: file });
  };

  return (
    <div className="document-upload">
      <h2>Upload Document</h2>
      <form>
        <label>
          Choose a file:
          <input type="file" onChange={handleFileChange} />
        </label>
      </form>
    </div>
  );
};

export default DocumentUpload;
