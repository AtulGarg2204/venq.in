const express = require('express');
const router = express.Router();
const Document = require('../model/Document');
const User = require('../model/User');

// Get user-specific documents
router.get('/documents/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const documents = await Document.find({ userId }).populate('userId', 'name email phone');
    if (!documents || documents.length === 0) {
      return res.status(404).json({ message: 'No documents found for this user' });
    }
    res.status(200).json(documents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create new document for user
router.post('/documents', async (req, res) => {
  const { userId, aadhaar_number, pan_number, pdf_url } = req.body;

  try {
    const newDocument = new Document({
      userId,
      aadhaar_number,
      pan_number,
      pdf_url,
    });

    await newDocument.save();
    res.status(201).json(newDocument);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create document' });
  }
});

module.exports = router;
