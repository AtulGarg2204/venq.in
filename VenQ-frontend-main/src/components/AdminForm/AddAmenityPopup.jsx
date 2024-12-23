import React, { useState } from 'react';
<script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/45720526.js"></script>
const AddAmenityPopup = ({ onAddAmenity, onClose }) => {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  const handleAddAmenity = () => {
    onAddAmenity({ name, link });
    setName('');
    setLink('');
    onClose();
    alert('Amenity Added Successfully');
  };

  return (
    <div className="custom-popup" style={styles.popup}>
      <div className="custom-popup-content" style={styles.popupContent}>
        <span className="custom-close" style={styles.close} onClick={onClose}>&times;</span>
        <h2 className="custom-heading" style={styles.heading}>Add Amenity</h2>
        <label className="custom-label" style={styles.label}>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="custom-input"
            style={styles.input_data}
          />
        </label>
        <label className="custom-label" style={styles.label}>
          Link:
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="custom-input"
            style={styles.input_data}
          />
        </label>
        <button
          className="custom-popup-button"
          style={styles.popupButton}
          onClick={handleAddAmenity}
        >
          Add
        </button>
      </div>
    </div>
  );
};

const styles = {
  popup: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  },
  popupContent: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    width: '300px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  },
  close: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer',
    fontSize: '20px',
    color: '#555',
  },
  heading: {
    fontSize: '1.5rem',
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '15px',
  },
  input_data: {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
    boxSizing: 'border-box',
  },
  popupButton: {
    backgroundColor: '#4caf50',
    color: '#fff',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default AddAmenityPopup;
