// const express = require("express");
// const router = express.Router();
// const fs = require("fs");
// const html_pdf = require("html-pdf");
// const path = require("path");
// const dotenv = require("dotenv");
// const cloudinary = require("cloudinary").v2;

// dotenv.config();

// // Log the environment variables to ensure they are loaded correctly
// console.log("CLOUDINARY_CLOUD_NAME:", process.env.CLOUDINARY_CLOUD_NAME);
// console.log("CLOUDINARY_API_KEY:", process.env.CLOUDINARY_API_KEY);
// console.log("CLOUDINARY_API_SECRET:", process.env.CLOUDINARY_API_SECRET);

// // Configure Cloudinary
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// router.post("/", async (req, res) => {
//   const {
//     investorName,
//     investorEmail,
//     propertyName,
//     paymentAmount,
//     numberOfUnits,
//   } = req.body;

//   const filePath = path.join(__dirname, "eoi-template.html");
//   console.log("File path:", filePath);
//   console.log("File exists:", fs.existsSync(filePath));

//   const htmlTemplate = fs.readFileSync(filePath, "utf8");
//   const html = htmlTemplate
//     .replace(/{{ investorEmail }}/g, investorEmail)
//     .replace(/{{ investorName }}/g, investorName)
//     .replace(/{{ propertyName }}/g, propertyName)
//     .replace(/{{ paymentAmount }}/g, paymentAmount)
//     .replace(/{{ numberOfUnits }}/g, numberOfUnits);

//   const pdfOptions = {
//     format: "A4",
//     border: {
//       top: "60px",
//       right: "60px",
//       bottom: "60px",
//       left: "60px",
//     },
//     footer: {
//       height: "28mm",
//       contents: {
//         default:
//           '<span style="color: #444; font-size: 10px;">{{page}}</span>/<span>{{pages}}</span>',
//       },
//     },
//   };

//   const pdfPath = path.join(__dirname, "output", "Expression_Of_Interest.pdf");

//   // Generate PDF and save it locally
//   html_pdf
//     .create(html, {
//       childProcessOptions: {
//         env: {
//           OPENSSL_CONF: "/dev/null",
//         },
//       },
//     })
//     .toFile(pdfPath, async (err, result) => {
//       if (err) {
//         console.log("Failed to generate PDF", err);
//         return res.status(500).json({ error: "Failed to generate PDF" });
//       }

//       console.log("PDF generated successfully", result);

//       // Upload to Cloudinary
//       try {
//         const uploadResult = await cloudinary.uploader.upload(pdfPath, {
//           resource_type: "raw", // Use 'raw' for non-image files like PDFs
//           folder: "pdfs", // Optional: specify a folder in Cloudinary
//         });

//         console.log("PDF uploaded to Cloudinary", uploadResult);

//         // Delete the local file after upload
//         fs.unlink(pdfPath, (unlinkErr) => {
//           if (unlinkErr) {
//             console.log("Failed to delete local PDF", unlinkErr);
//           } else {
//             console.log("Local PDF deleted successfully");
//           }
//         });

//         res.status(200).json({
//           message: "PDF generated, uploaded to Cloudinary, and deleted locally",
//           cloudinary_url: uploadResult.secure_url,
//         });
//       } catch (uploadErr) {
//         console.log("Failed to upload PDF to Cloudinary", uploadErr);
//         res.status(500).json({ error: "Failed to upload PDF to Cloudinary" });
//       }
//     });
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const fs = require("fs");
const html_pdf = require("html-pdf");
const path = require("path");
const dotenv = require("dotenv");
const cloudinary = require("cloudinary").v2;
const mongoose = require("mongoose");
const Customer = require("../model/Customer"); // Import the Customer model

dotenv.config();

// Log the environment variables to ensure they are loaded correctly
console.log("CLOUDINARY_CLOUD_NAME:", process.env.CLOUDINARY_CLOUD_NAME);
console.log("CLOUDINARY_API_KEY:", process.env.CLOUDINARY_API_KEY);
console.log("CLOUDINARY_API_SECRET:", process.env.CLOUDINARY_API_SECRET);

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

router.post("/", async (req, res) => {
  const {
    investorName,
    investorEmail,
    propertyName,
    paymentAmount,
    numberOfUnits,
  } = req.body;

  const filePath = path.join(__dirname, "eoi-template.html");
  console.log("File path:", filePath);
  console.log("File exists:", fs.existsSync(filePath));

  const htmlTemplate = fs.readFileSync(filePath, "utf8");
  const html = htmlTemplate
    .replace(/{{ investorEmail }}/g, investorEmail)
    .replace(/{{ investorName }}/g, investorName)
    .replace(/{{ propertyName }}/g, propertyName)
    .replace(/{{ paymentAmount }}/g, paymentAmount)
    .replace(/{{ numberOfUnits }}/g, numberOfUnits);

  const pdfOptions = {
    format: "A4",
    border: {
      top: "60px",
      right: "60px",
      bottom: "60px",
      left: "60px",
    },
    footer: {
      height: "28mm",
      contents: {
        default:
          '<span style="color: #444; font-size: 10px;">{{page}}</span>/<span>{{pages}}</span>',
      },
    },
  };

  const pdfPath = path.join(__dirname, "output", "Expression_Of_Interest.pdf");

  // Generate PDF and save it locally
  html_pdf
    .create(html, {
      childProcessOptions: {
        env: {
          OPENSSL_CONF: "/dev/null",
        },
      },
    })
    .toFile(pdfPath, async (err, result) => {
      if (err) {
        console.log("Failed to generate PDF", err);
        return res.status(500).json({ error: "Failed to generate PDF" });
      }

      console.log("PDF generated successfully", result);

      // Upload to Cloudinary
      try {
        const uploadResult = await cloudinary.uploader.upload(pdfPath, {
          resource_type: "raw", // Use 'raw' for non-image files like PDFs
          folder: "pdfs", // Optional: specify a folder in Cloudinary
        });

        console.log("PDF uploaded to Cloudinary", uploadResult);

        // Update the Customer document in MongoDB
        await Customer.findOneAndUpdate(
          { email: investorEmail }, // Find the customer by email
          {
            pdfUploaded: true, // Set pdfUploaded to true
            pdfLink: uploadResult.secure_url, // Set pdfLink to the Cloudinary URL
          },
          { new: true } // Return the updated document
        );

        // Delete the local file after upload
        fs.unlink(pdfPath, (unlinkErr) => {
          if (unlinkErr) {
            console.log("Failed to delete local PDF", unlinkErr);
          } else {
            console.log("Local PDF deleted successfully");
          }
        });

        res.status(200).json({
          message:
            "PDF generated, uploaded to Cloudinary, and customer updated",
          cloudinary_url: uploadResult.secure_url,
        });
      } catch (uploadErr) {
        console.log(
          "Failed to upload PDF to Cloudinary or update customer",
          uploadErr
        );
        res
          .status(500)
          .json({
            error: "Failed to upload PDF to Cloudinary or update customer",
          });
      }
    });
});

module.exports = router;
