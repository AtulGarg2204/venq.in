const express = require("express");
const router = express.Router();
const brokerController=require('../controllers/brokerController');

router.put('/toggleBroker/:email',brokerController.toggleBroker);
router.put('/update-commission/:email', brokerController.updateBrokerCommission);
router.get('/stats/:email', brokerController.getBrokerStats);
router.get('/showStats/:email', brokerController.getSignedUsers);
module.exports = router;