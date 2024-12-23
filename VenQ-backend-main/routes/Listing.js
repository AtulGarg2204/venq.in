const express = require("express");
const router = express.Router();
const Listing = require("../model/Listing");
// const { verifyAdmin, verifyUser } = require("../middleware/verifyJWT"); // Uncomment if you need JWT verification

// Get all listings
router.get("/", async (req, res) => {
  try {
    const listings = await Listing.find({
      $or: [{ islive: 1 }, { islive: 2 }, { islive: 3 }],
    }).sort({ islive: 1, _id: 1 });
    res.json(listings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error while fetching listings" });
  }
});

// GET a particular listing by ID
router.get("/:id", async (req, res) => {
  try {
    const listingId = req.params.id;
    const listing = await Listing.findById(listingId);
    if (!listing) {
      return res.status(404).json({ error: "Listing not found" });
    }
    res.json(listing);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error while fetching the listing" });
  }
});

// GET a particular listing by property name
router.get("/byName/:name", async (req, res) => {
  try {
    const propertyName = req.params.name;
    const listing = await Listing.findOne({
      properyheading: propertyName,
    });
    if (!listing) {
      return res.status(404).json({ error: "Listing not found" });
    }
    res.json(listing);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error while fetching the listing by name" });
  }
});

// Route to create a new listing
// Route to create a new listing
router.post("/add", async (req, res) => {
  try {
    const newListingData = {
      images: req.body.images,
      tourlink: req.body.tourlink,
      properyheading: req.body.properyheading,
      propertydescription: req.body.propertydescription,
      specs: req.body.specs,
      propertyprice: req.body.propertyprice,
      annualizedreturn: req.body.annualizedreturn,
      annualappreciation: req.body.annualappreciation,
      grossyield: req.body.grossyield,
      netyield: req.body.netyield,
      propertyoverview: req.body.propertyoverview,
      propertypricen: req.body.propertypricen,
      transactioncost: req.body.transactioncost,
      venqfee: req.body.venqfee,
      projectedgrossrent: req.body.projectedgrossrent,
      maintainencefee: req.body.maintainencefee,
      servicecharges: req.body.servicecharges,
      annualnetincome: req.body.annualnetincome,
      fundtimeline: req.body.fundtimeline,
      locationlink: req.body.locationlink,
      locationdescription: req.body.locationdescription,
      amenities: req.body.amenities,
      documents: req.body.documents,
      propertyType: req.body.propertyType,  // New field for property type
      chartData: req.body.chartData,        // New field for chart data
      minAmountToInvest: req.body.minAmountToInvest, // New field for minAmountToInvest
      monthlyChange: req.body.monthlyChange, // Ensure you include monthlyChange
      islive: req.body.islive || 0  // Default to 0 if not provided
    };

    const result = await Listing.create(newListingData);
    res.status(201).json(result);
  } catch (error) {
    console.error("Error while adding listing:", error);
    res.status(500).json({ message: "Internal Server Error while adding listing", error: error.message });
  }
});


// Update a particular listing by ID
router.patch("/:id", async (req, res) => {
  try {
    const listingId = req.params.id;

    // Check if the listing exists
    const existingListing = await Listing.findById(listingId);
    if (!existingListing) {
      return res.status(404).json({ error: "Listing not found" });
    }

    // Update the existing listing with the new data
    const updatedListing = await Listing.findByIdAndUpdate(
      listingId,
      { $set: { ...req.body } }, // Spread the request body to update all fields including new ones
      { new: true } // This option ensures that the updated document is returned
    );

    res.json(updatedListing);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error during update" });
  }
});

// Route to add funding timeline to an existing listing by ID
// Route to add new timelines to an existing listing
router.patch("/:id/timelines", async (req, res) => {
  try {
    const listingId = req.params.id;

    // Check if the listing exists
    const existingListing = await Listing.findById(listingId);
    if (!existingListing) {
      return res.status(404).json({ error: "Listing not found" });
    }

    // Add new timelines from the request body
    const newTimelines = req.body.fundtimeline;

    // Push new timelines to the existing fundtimeline array
    existingListing.fundtimeline.push(...newTimelines);

    // Save the updated listing
    const updatedListing = await existingListing.save();

    res.json(updatedListing);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});



module.exports = router;
