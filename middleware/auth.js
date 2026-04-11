const jwt = require('jsonwebtoken');

const protect = async (req, res, next) => {
  let token;

  // Check if JWT_SECRET is set
  if (!process.env.JWT_SECRET) {
    return res.status(500).json({
      message: 'Server configuration error: JWT_SECRET not set'
    });
  }

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Try to import User model, fail gracefully
      try {
        const User = require('../models/User');
        req.user = await User.findById(decoded.id).select('-password');
      } catch (dbError) {
        // If DB not available, attach decoded info but without DB lookup
        req.user = decoded;
      }

      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

module.exports = { protect };
