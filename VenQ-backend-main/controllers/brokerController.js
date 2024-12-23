const Customer = require("../model/Customer");
const Purchased = require("../model/Purchased");
// brokerController.js

// Controller function to retrieve the broker code
exports.getBrokerCode = async (req, res) => {
    try {
      // Query the database to find the broker document
      const broker = await Customer.findOne({ isBroker: true, /* other criteria */ });
  
      if (broker && broker.brokerDetails && broker.brokerDetails.brokerCode) {
        // Return the broker code in the response
        res.json({ brokerCode: broker.brokerDetails.brokerCode });
      } else {
        res.status(404).json({ error: 'Broker not found or broker code not available' });
      }
    } catch (error) {
      console.error('Error retrieving broker code:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

exports.getSignedUsers = async (req, res) => {
    try {
        const { email } = req.params;

        // Find the broker by email
        const broker = await Customer.findOne({ email, isBroker: true });
        if (!broker) {
            return res.status(404).json({
                success: false,
                message: 'Broker not found'
            });
        }

        // Populate the signups array with user details
        const brokerWithSignups = await Customer.findOne({ email })
            .populate({
                path: 'brokerDetails.referralStats.signups.userId',
                select: 'name email phone isVerified'
            });

        // Get all referred user IDs
        const referredUserIds = brokerWithSignups.brokerDetails?.referralStats?.signups?.map(
            signup => signup.userId._id
        ) || [];

        // Fetch purchase data for all referred users
        const purchaseData = await Purchased.aggregate([
            {
                $match: {
                    customerId: { $in: referredUserIds }
                }
            },
            {
                $group: {
                    _id: '$customerId',
                    totalInvestment: { $sum: { $multiply: ['$amount', '$quantity'] } }
                }
            }
        ]);

        // Format the response data
        const formattedData = {
            brokerCode: broker.brokerDetails?.brokerCode || '',
            totalReferrals: broker.brokerDetails?.referralStats?.signups?.length || 0,
            commissionPercentage : broker.brokerCommissionPercentage || 2,
            referredUsers: brokerWithSignups.brokerDetails?.referralStats?.signups?.map(signup => {
                const userPurchases = purchaseData.find(
                    pd => pd._id.toString() === signup.userId._id.toString()
                );

                return {
                    user: signup.userId,
                    signupDate: signup.signupDate,
                    investment: userPurchases?.totalInvestment || 0
                };
            }) || []
        };

        return res.status(200).json({
            success: true,
            data: formattedData
        });

    } catch (error) {
        console.error('Error in getSignedUsers:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

exports.getBrokerStats = async (req, res) => {
    try {
        const email = req.params.email;
        
        // Find the broker and populate basic user details
        const customer = await Customer.findOne({ email: email })
            .populate('brokerDetails.referralStats.signups.userId', 'name email phone');

        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }

        if (!customer.isBroker) {
            return res.status(403).json({ message: 'User is not a broker' });
        }

        // Generate broker details if they don't exist
        if (!customer.brokerDetails || !customer.brokerDetails.brokerCode) {
            const brokerCode = 'BRK' + Math.random().toString(36).substring(2, 8).toUpperCase();
            const referralLink = `https://venq-frontend.vercel.app/signup?ref=${brokerCode}`;

            customer.brokerDetails = {
                brokerCode,
                referralLink,
            };

            await customer.save();
        }

        // Get all referred user IDs
        const referredUserIds = customer.brokerDetails.referralStats.signups.map(
            signup => signup.userId._id
        );

        // Fetch purchase data for referred users
        const checkData = await Purchased.find({
            customerId: { $in: referredUserIds }
        });
        console.log("Raw purchase data:", checkData);
        const purchaseData = await Purchased.aggregate([
            {
                $match: {
                    customerId: { $in: referredUserIds }
                }
            },
            {
                $group: {
                    _id: '$customerId',
                    totalInvestment: { $sum: { $multiply: ['$amount', '$quantity'] } },
                    properties: {
                        $push: {
                            propertyName: '$propertyName',
                            amount: '$amount',
                            quantity: '$quantity'
                        }
                    }
                }
            }
        ]);
        // Format the response data
        const brokerData = {
            brokerInfo: {
                name: customer.name,
                email: customer.email,
                phone: customer.phone,
                commissionPercentage: customer.brokerCommissionPercentage || 2
            },
            brokerCode: customer.brokerDetails.brokerCode,
            referralLink: customer.brokerDetails.referralLink,
            totalReferrals: customer.brokerDetails.referralStats.signups.length,
            referredUsers: customer.brokerDetails.referralStats.signups.map(signup => {
                const userPurchases = purchaseData.find(
                    pd => pd._id.toString() === signup.userId._id.toString()
                );
                console.log("User Purchases for:", signup.userId.name, userPurchases);
                return {
                    user: {
                        name: signup.userId.name,
                        email: signup.userId.email,
                        phone: signup.userId.phone
                    },
                    signupDate: signup.signupDate,
                    investment: userPurchases?.totalInvestment || 0,
                    properties: userPurchases?.properties || []
                };
            })
        };
        
        res.json({ success: true, data: brokerData });

    } catch (error) {
        console.error('Error fetching broker stats:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Error fetching broker stats',
            error: error.message 
        });
    }
};
exports.toggleBroker = async (req, res) => {
    const email = req.params.email;  
    try {
        // First find the current user to get their broker status
        const user = await Customer.findOne({ email:email });
        
        if (!user) {
            return res.status(404).json({ 
                success: false,
                message: "User not found" 
            });
        }

        // Toggle the isBroker status (if true make false, if false make true)
        const result = await Customer.updateOne(
            { email: email },
            { $set: { isBroker: !user.isBroker } }
        );

        if (result.modifiedCount > 0) {
            res.status(200).json({
                success: true,
                message: user.isBroker ? 'Broker status removed' : 'User made broker successfully',
                isBroker: !user.isBroker
            });
        } else {
            res.status(400).json({
                success: false,
                message: 'Failed to update broker status'
            });
        }

    } catch (error) {
        console.log("Error in toggleBroker:", error);
        res.status(500).json({
            success: false,
            message: 'Server error while updating broker status'
        });
    }
};
exports.updateBrokerCommission = async (req, res) => {
    try {
      const { email } = req.params;
      const { commission } = req.body;
  
      if (commission < 0 || commission > 100) {
        return res.status(400).json({
          success: false,
          message: 'Commission must be between 0 and 100'
        });
      }
  
      const updatedBroker = await Customer.findOneAndUpdate(
        { email, isBroker: true },
        { $set: { brokerCommissionPercentage: commission } },
        { new: true }
      );
  
      if (!updatedBroker) {
        return res.status(404).json({
          success: false,
          message: 'Broker not found'
        });
      }
  
      res.json({
        success: true,
        message: 'Commission updated successfully',
        broker: updatedBroker
      });
  
    } catch (error) {
      console.error('Error updating commission:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to update commission'
      });
    }
  };