const jwt = require("jsonwebtoken");

const verifyAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  // console.log("unique ", authHeader);

  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Forbidden" });

    req.user = decoded.UserInfo.name;
    req.email = decoded.UserInfo.email;
    req.isAdmin = decoded.UserInfo.isAdmin;

    // Check if the user is an admin
    if (!req.isAdmin) {
      return res
        .status(403)
        .json({ message: "Forbidden - Admin access required" });
    }
    next();
  });
};
const verifyBroker = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  // console.log("unique ", authHeader);

  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Forbidden" });

    req.user = decoded.UserInfo.name;
    req.email = decoded.UserInfo.email;
    req.isBroker = decoded.UserInfo.isBroker;

    // Check if the user is an Broker
    if (!req.isBroker) {
      return res
        .status(403)
        .json({ message: "Forbidden - Broker access required" });
    }
    next();
  });
};

const verifyUser = (req, res, next) => {
  verifyAdmin(req, res, next); // Reusing the same logic for user verification
  verifyBroker(req, res, next); // Reusing the same logic for user verification
};

module.exports = { verifyAdmin, verifyBroker, verifyUser };
