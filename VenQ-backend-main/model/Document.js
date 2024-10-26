const mongoose = require('mongoose');

// Define the Document Schema
const DocumentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user', // Reference to the User model
    required: true,
  },
  aadhaar_number: {
    type: String,
    required: true,
  },
  pan_number: {
    type: String,
    required: true,
  },
  document_title: {
    type: String,
    default: 'Property Management Agreement',
  },
  pdf_url: {
    type: String,
    required: true, // Assuming you store the PDF file URL for e-signature
  },
  isSigned: {
    type: Boolean,
    default: false, // Track whether the document is signed or not
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Document', DocumentSchema);
