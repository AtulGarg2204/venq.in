import React, { useState } from 'react';

const AddContentPopup = ({ onAddContent, onClose }) => {
  const [heading, setHeading] = useState('');
  const [paragraph, setParagraph] = useState('');
  const [logoLink, setLogoLink] = useState('');

  const handleAddContent = () => {
    onAddContent({ heading, paragraph, logoLink });
    setHeading('');
    setParagraph('');
    setLogoLink('');
    onClose();
    alert('Content Added Successfully');
  };
<script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/45720526.js"></script>
  return (
    <div className="popup" style={styles.popup}>
      <div className="popup-content" style={styles.popupContent}>
        <span className="close" style={styles.close} onClick={onClose}>&times;</span>
        <h2>Add Content</h2>
        <label>
          Heading:
          <input
            type="text"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            className="input"
            style={styles.input_data}
          />
        </label>
        <label>
          Paragraph:
          <textarea
            value={paragraph}
            onChange={(e) => setParagraph(e.target.value)}
            className="textarea"
            style={styles.textarea_data}
          />
        </label>
        <label>
          Logo Link:
          <input
            type="text"
            value={logoLink}
            onChange={(e) => setLogoLink(e.target.value)}
            className="input"
            style={styles.input_data}
          />
        </label>
        <button
          className="popup-button"
          style={styles.popupButton}
          onClick={handleAddContent}
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
    width: '300px', // Adjust the width as needed
  },
  close: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer',
    fontSize: '20px',
    color: '#555',
  },
  input_data: {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
  },
  textarea_data: {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
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

export default AddContentPopup;
