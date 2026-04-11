const jwt = require('jsonwebtoken');

const generateToken = (id) => {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET not configured');
  }
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// @desc    Auth user & get token
// @route   POST /api/auth/login
// @access  Public
const authUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const User = require('../models/User');
    const user = await User.findOne({ username });
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        username: user.username,
        role: user.role,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  } catch (error) {
    console.error('Auth error:', error);
    res.status(500).json({ message: 'Database connection required. Please configure MongoDB Atlas.' });
  }
};

// @desc    Create initial admin (Run once or secure this!)
// @route   POST /api/auth/setup
// @access  Public (Only allowed if no users exist)
const setupAdmin = async (req, res) => {
  try {
    const User = require('../models/User');
    const userCount = await User.countDocuments({});
    if (userCount > 0) {
      return res.status(400).json({ message: 'Admin already exists' });
    }

    const { username, password } = req.body;
    const user = await User.create({ username, password, role: 'admin' });

    res.status(201).json({
      _id: user._id,
      username: user.username,
      token: generateToken(user._id),
    });
  } catch (error) {
    console.error('Setup error:', error);
    res.status(500).json({ message: 'Database connection required. Please configure MongoDB Atlas.' });
  }
};

module.exports = { authUser, setupAdmin };
