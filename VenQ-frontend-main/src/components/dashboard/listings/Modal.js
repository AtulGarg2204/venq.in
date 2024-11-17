// Modal.jsx
import React from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

// Styles for the modal content
const modalStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh', // Full height of the viewport
};

const contentStyle = {
  padding: '20px',
  backgroundColor: 'white',
  borderRadius: '8px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
  width: '90%', // Responsive width
  maxWidth: '500px', // Maximum width for larger screens
  textAlign: 'center', // Centered text
  overflow: 'hidden', // Prevent overflow
};

const urlStyle = {
  wordWrap: 'break-word', // Break long words
  overflowWrap: 'break-word', // Ensure long URLs break
  maxHeight: '25vw', // Maximum height for the URL area
  overflowY: 'auto', // Enable vertical scrolling
  marginTop: '10px',
};

const CustomModal = ({ open, onClose, esignUrl }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div style={modalStyle}>
        <div style={contentStyle}>
          <h2>eSign URL</h2>
          <div style={urlStyle}>
            <p>{esignUrl}</p>
          </div>
          <Button variant="contained" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </Modal>
  );
};

// Ensure to export as default
export default CustomModal;
