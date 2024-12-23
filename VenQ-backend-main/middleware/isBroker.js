
const isBroker = (req, res, next) => {
   
    const { isBroker } = req.user;
  
    if (!isBroker) {
      return res.status(403).json({ message: 'Forbidden - Broker access required' });
    }
  
    // If the user is an Broker, proceed to the next middleware
    next();
  };
  
  module.exports = isBroker;
  