const { UserDetail } = require("otpless-node-js-auth-sdk");
const customers = require("../model/Customer");
const token = "..."; // Replace with your token
const clientId = "FQ3UEAGZLL712ZVU3CE49BQ2H0E65ONU"; // Replace with your client ID
const clientSecret = "4hph3uqpqy9i2zfpvgrtnog81o68m4f5"; // Replace with your client secret

/**
 * * Send OTP
 */

const sendOTP = async (req, res) => {
  console.log("in send otp funtion");

  const { mobile, email, channel } = req.body;
  //? Validate the request
  if (!mobile && !email) {
    return res.status(400).send({
      success: false,
      error: "Either mobile or email is required",
    });
  }
  // if (!channel) {
  // 	return res.status(400).send({
  // 		success: false,
  // 		error: 'Channel is required',
  // 	})
  // }
  var ch = null;
  var mob = mobile;
  if (channel == 1) {
    mob = null;
    ch = "EMAIL";
  }
  try {
    //? Send an OTP to the user via Email or SMS or WhatsApp or both SMS and WhatsApp.
    const response = await UserDetail.sendOTP(
      mob,
      email,
      ch,
      null,
      null,
      null,
      null,
      clientId,
      clientSecret
    );
    console.log(response);
    // ? Handle the error if any
    if (response?.errorMessage) {
      return res.status(500).send(response);
    }
    // ? Return the success response
    res.status(200).send({
      success: true,
      data: response,
    });
  } catch (err) {
    console.log("Error", err);
    res.status(500).send({
      success: false,
      error: err,
    });
  }
};

/**
 * * Resend OTP
 * @request { orderId } @body  [orderID-mandatory]
 * @response {success: Boolean, data: { orderId: String }}
 */

const resendotp = async (req, res) => {
  const { orderId } = req.body;
  //? Validate the request
  if (!orderId) {
    return res.status(400).send({
      success: false,
      error: "Order ID is required",
    });
  }
  try {
    // ? Resend the OTP
    const response = await UserDetail.resendOTP(
      orderId,
      clientId,
      clientSecret
    );
    console.log("Success", response);
    // ? Handle the error if any
    if (response?.errorMessage) {
      return res.status(500).send(response);
    }
    // ? Return the success response
    res.status(200).send({ success: true, ...response });
  } catch (error) {
    // ? Handle the error
    console.log("Error", error);
    res.status(500).send({
      success: false,
      error: error,
    });
  }
};

/**
 * * Verify OTP
 * @request { orderId, otp, mobile, email } @body  [orderID-mandatory, otp-mandatory, either mobile or email mandatory]
 * @response {success: Boolean, data: { isOTPVerified: Boolean }}
 */

const verifyOtp = async (req, res) => {
  // ? Extract data from the request body
  const { orderId, otp, mobile, email } = req.body;
  console.log(req.body);
  // ? Validate the request
  if (!orderId || !otp) {
    return res.status(400).send({
      success: false,
      error: "Invalid request - orderId and otp is required",
    });
  }
  if (!mobile && !email) {
    return res.status(400).send({
      success: false,
      error: "Invalid request - mobile or email is required",
    });
  }

  // ? Verify the OTP
  try {
    const response = await UserDetail.verifyOTP(
      email,
      mobile,
      orderId,
      otp,
      clientId,
      clientSecret
    );
    console.log("Success", response);
    // ? Handle the error if any
    if (response?.errorMessage) {
      return res.status(500).send(response);
    }
    // ? Return the success response
    res.status(200).send({
      success: true,
      ...response,
    });
  } catch (err) {
    // ? Handle the error
    console.log("Error", err);
    res.status(500).send({
      success: false,
      error: err,
    });
  }
};

// const signup = async (req, res) => {
//   try {
//     console.log(req.body);
//     const duplicate = await customers.findOne({ "email": req.body.email, "phone": req.body.phone }).lean().exec();
//     console.log(duplicate);
//     console.log("WHATT THE HELLL");
//     if (!duplicate) {
//       // Check if the referral link exists in the request query parameters
//       console.log("IS IT REALLY CORRECT");
//       console.log("Request query:", req.query);
//       console.log("Request URL:", req.url);
//       const brokerCode1 = req.query.ref;
//       console.log(brokerCode1);
//       if (brokerCode1) {
//         console.log("CHECKKK");
//         // Search for the broker using the referral link in the customers collection
//         const broker = await customers.findOne({ "brokerDetails.brokerCode": brokerCode1, "isBroker": true }).lean().exec();
//         console.log("foudn brokerrrr");
//         if (broker) {
//           // If the broker is found, update the brokerDetails object in the customer schema
//           req.body.brokerDetails = {
//             brokerCode: broker.brokerDetails.brokerCode,
//             referralLink: broker.brokerDetails.referralLink,
//             referralStats: broker.brokerDetails.referralStats
//           };
//           console.log("EXACTLYY YEAHH");
//           // Add the signed-up user's information to the broker's referralStats.signups array
//           const signupData = {
//             userId: result._id,
//             signupDate: new Date(),
//             status: 'pending'
//           };
//           console.log("HIII SIGNUPPP UPDATEE ");
//           console.log(signupData);
//           await customers.updateOne(
//             { _id: broker._id },
//             { $push: { 'brokerDetails.referralStats.signups': signupData } }
//           );
//         }
//       }
      
//       const result = await customers.create(req.body);
//       console.log("saved data-->", result);
      
//       if (result) {
//         console.log("saved in db");
//         return res
//           .status(201)
//           .json({ message: "All user details saved", userinfo: result, created: true });
//       }
//     } else {
//       return res
//         .status(201)
//         .json({ message: "User already exists with this Email and phone number", created: false, userAvailable: true, userinfo: duplicate });
//     }
//   } catch (error) {
//     console.log("Error in making db change", error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// };
const signup = async (req, res) => {
  try {
    console.log(req.body);
    const duplicate = await customers.findOne({ 
      "email": req.body.email, 
      "phone": req.body.phone 
    }).lean().exec();
    
    if (!duplicate) {
      const brokerCode = req.query.ref;
      let newUserData = { ...req.body };

      // Only process broker referral if a code was provided
      if (brokerCode) {
        const broker = await customers.findOne({ 
          "brokerDetails.brokerCode": brokerCode, 
          "isBroker": true 
        }).lean().exec();
        
        if (broker) {
          newUserData.referredBy = {
            brokerId: broker._id,
            brokerCode: brokerCode,
            referralDate: new Date()
          };
        }
      }

      const result = await customers.create(newUserData);
      
      // Update broker's stats if referral exists
      if (result.referredBy) {
        await customers.updateOne(
          { _id: result.referredBy.brokerId },
          { 
            $push: { 
              'brokerDetails.referralStats.signups': {
                userId: result._id,
                signupDate: new Date(),
                status: 'pending'
              }
            }
          }
        );
      }

      return res.status(201).json({ 
        message: "All user details saved", 
        userinfo: result, 
        created: true 
      });
      
    } else {
      return res.status(201).json({ 
        message: "User already exists with this Email and phone number", 
        created: false, 
        userAvailable: true, 
        userinfo: duplicate 
      });
    }
  } catch (error) {
    console.error("Error in making db change", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
const login = async (req, res) => {
  const { token } = req.body;
  console.log(req.body);
  if (req.body.identities[0].identityType === "EMAIL") {
    const username = req.body.identities[0].name;
    const useremail = req.body.identities[0].identityValue;
    const duplicate = await customers
      .findOne({ email: useremail })
      .lean()
      .exec();
    let reqd = [];
    if (!duplicate) {
      console.log("user created  by email");
      reqd.push("phone");
      return res.status(201).json({
        message: "user-signup-done-email",
        token: token,
        moreinfoneeded: true,
        reqd: reqd,
        tbs: { name: username, email: useremail },
      });
    } else {
      return res.status(201).json({
        message: "user-login-done-email",
        token: token,
        moreinfoneeded: false,
        userinfo: duplicate,
      });
    }
  } else if (req.body.identities[0].identityType === "MOBILE") {
    const number = req.body.identities[0].identityValue;
    const duplicate = await customers.findOne({ phone: number }).lean().exec();
    let reqd = [];
    if (!duplicate) {
      console.log("user created  by phone");
      reqd.push("name");
      reqd.push("email");
      return res.status(201).json({
        message: "user-signup-done-phone",
        token: token,
        moreinfoneeded: true,
        reqd: reqd,
        tbs: { phone: number },
      });
    } else {
      return res.status(201).json({
        message: "user-login-done-phone",
        token: token,
        moreinfoneeded: false,
        userinfo: duplicate,
      });
    }
  }
};
module.exports = { login, signup, sendOTP, resendotp, verifyOtp };
