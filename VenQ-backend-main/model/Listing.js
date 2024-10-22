const mongoose = require('mongoose');

// Define the Funding Timeline Schema
const FundingTimelineSchema = new mongoose.Schema({
    date: {
        type: String, // Example: 'June 15, 2024'
    },
    description: {
        type: String, // Example: 'Expected closing date'
    },
    details: {
        type: String, // Further information about this step
    }
});
const timeShareSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true, // Required field for the description
    },
    offers: [
        {
            title: {
                type: String,
                required: true, // Required field for offer title
            },
            details: {
                type: String,
                required: true, // Required field for offer details
            },
        },
    ],
    limitedAvailability: {
        type: String,
        required: true, // Required field for limited availability
    },
    investmentAmount: {
        type: Number,
        required: true, // Required field for investment amount
    },
});

const DealTermsSchema = new mongoose.Schema({
    label: {
        type: String, // Example: 'Investment Amount'
        required: true,
    },
    description: {
        type: String, // Example: 'Minimum investment amount required'
        required: true,
    },
});

// Define other schemas
const SpecsSchema = new mongoose.Schema({
    specsimage: {
        type: String,
        trim: true,
    },
    specstitle: {
        type: String,
        trim: true,
    },
    specssubtitle: {
        type: String,
        trim: true,
    }
});

const DocumentSchema = new mongoose.Schema({
    dname: {
        type: String,
        trim: true,
    },
    dlink: {
        type: String,
        trim: true,
    },
});

const AmenitySchema = new mongoose.Schema({
    aname: {
        type: String,
        trim: true,
    },
    alink: {
        type: String,
        trim: true,
    },
});

const ChartDataSchema = new mongoose.Schema({
    data: {
        type: [Number], // Array for chart data values
    },
    labels: {
        type: [String], // Array for chart data labels
    }
});

// Define the Listing Schema
const ListingSchema = new mongoose.Schema({
    images: {
        type: [String], // Changed to an array of strings for image URLs
    },
    dealTerms: {
        type: [DealTermsSchema], // New field for deal terms
    },
    timeShare:{
        type:[timeShareSchema],
    },
    tourlink: {
        type: String,
    },
    properyheading: {
        type: String,
    },
    propertydescription: {
        type: String,
    },
    specs: {
        type: [SpecsSchema],
    },
    propertyprice: {
        type: String,
    },
    annualizedreturn: {
        type: String,
        trim: true,
    },
    annualappreciation: {
        type: String,
        trim: true,
    },
    grossyield: {
        type: String,
        trim: true,
    },
    netyield: {
        type: String,
        trim: true,
    },
    propertyoverview: {
        type: String,
        trim: true,
    },
    propertypricen: {
        type: String,
    },
    transactioncost: {
        type: String,
    },
    venqfee: {
        type: String,
    },
    projectedgrossrent: {
        type: String,
    },
    maintainencefee: {
        type: String,
    },
    servicecharges: {
        type: String,
    },
    annualnetincome: {
        type: String,
    },
    fundtimeline: {
        type: [FundingTimelineSchema], // Array of funding timeline objects
        default: [
            {
                date: 'June 15, 2024',
                description: 'Expected closing date',
                details: 'This is a conservative estimate for the closing date of the property funding.'
            },
            {
                date: 'July 22nd, 2024',
                description: 'SPV formation and title deed distribution',
                details: 'The SPV will be created and all investors will receive their title deeds within 2-3 weeks of the funding closing, to prove their ownership of the property.'
            },
            {
                date: 'September 28th, 2024',
                description: 'Expected first rental payment',
                details: 'The first rental payment for this property is projected to be paid to investors by this date.'
            }
        ]
    },
    locationlink: {
        type: String,
        trim: true,
    },
    locationdescription: {
        type: String,
        trim: true,
    },
    amenities: {
        type: [AmenitySchema],
    },
    documents: {
        type: [DocumentSchema],
    },
    fundingdate: {
        type: String,
    },
    mininvestment: {
        type: String,
    },
    islive: {
        type: Number,
        default: 0,
    },
    propertyType: {
        type: String, // New field for property type
    },
    chartData: {
        type: ChartDataSchema, // New field for chart data with data and labels
    },
    minAmountToInvest: {
        type: String, // New field for minimum amount to invest
    },
    monthlyChange: {
        type: String, // Field for monthly change percentage
    }
});

// Export the Listing model
module.exports = mongoose.model('Listing', ListingSchema);
