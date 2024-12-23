const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  brokerCommissionPercentage: {
    type: Number,
    default: 2  // Default 2% or whatever default you want
  },
  email: {
    type: String,
    unique: true,
    trim: true,
  },
  phone: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isBroker: {
    type: Boolean,
    default: false,
  },
  brokerDetails: {
    type: {
      brokerCode: {
        type: String,
        unique: true,
        sparse: true  // Allows null/undefined values and only creates unique index for non-null values
      },
      referralLink: {
        type: String,
        unique: true,
        sparse: true
      },
      referralStats: {
        signups: [{
          userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Customer'
          },
          signupDate: {
            type: Date,
            default: Date.now
          },
        }]
      }
    },
    default: null
  },
referredBy: {
    type: {
      brokerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
      },
      brokerCode: String,
      referralDate: Date
    },
    default: null,
    required: false
  },
  isVerified: {
    type: Number,
    default: 0,
  },
  pdfUploaded: {
    type: Boolean,
    default: false, // Default is false, indicating the PDF has not been uploaded yet
  },
  pdfLink: {
    type: String,
    default: "", // Default is an empty string, indicating no link yet
  },
});

module.exports = mongoose.model("Customer", customerSchema);
