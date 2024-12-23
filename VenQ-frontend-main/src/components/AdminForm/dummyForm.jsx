import React, { useState, useEffect } from 'react';
import axios from 'axios';
<script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/45720526.js"></script>
const Form = ({ mode, listingId, onSubmitSuccess }) => {

  const URL = "https://venq-imfs.onrender.com";
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    // Add other fields as needed
  });

  useEffect(() => {
    if (mode === 'edit' && listingId) {
      // Fetch the current listing data based on the listingId
      axios.get(`${URL}/listing/${listingId}`)
        .then((response) => {
          setFormData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching listing:", error);
        });
    }
  }, [mode, listingId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (mode === 'create') {
        // Call the function to create a new listing
        const response = await axios.post(
          `${URL}/listing/`,
          formData
        );
        console.log('Created listing:', response.data);
      } else if (mode === 'edit' && listingId) {
        // Call the function to update the existing listing
        const response = await axios.put(
          `${URL}/listing/${listingId}`,
          formData
        );
        console.log('Updated listing:', response.data);
      }

      // Optionally, you can handle the submission success in the parent component
      if (onSubmitSuccess) {
        onSubmitSuccess();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields for listing properties */}
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
      </label>
      <br />
      {/* Add other input fields for additional listing properties */}
      <button type="submit">{mode === 'create' ? 'Create Listing' : 'Update Listing'}</button>
    </form>
  );
};

export default Form;
