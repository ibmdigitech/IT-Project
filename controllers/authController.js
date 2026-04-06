const jwt = require('jsonwebtoken');
const User = require('../models/User');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// @desc    Auth user & get token
// @route   POST /api/auth/login
// @access  Public
const authUser = async (req, res) => {
  const { username, password } = req.body;

  try {
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
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Create initial admin (Run once or secure this!)
// @route   POST /api/auth/setup
// @access  Public (Only allowed if no users exist)
const setupAdmin = async (req, res) => {
  try {
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
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { authUser, setupAdmin };
