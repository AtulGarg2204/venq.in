// customerRoutes.js

const express = require('express');
const router = express.Router();
const brokerController=require('../controllers/brokerController');

// Route for retrieving the broker code
router.get('/brokercode', brokerController.getBrokerCode);

module.exports = router;