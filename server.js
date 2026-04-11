const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

// Body parser
app.use(express.json());

// Enable CORS
app.use(cors());

// Health check endpoint (always works)
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'SmartIT API is running',
    timestamp: new Date().toISOString()
  });
});

// Safely load routes
try {
  const authRoutes = require('./routes/authRoutes');
  const contactRoutes = require('./routes/contactRoutes');

  app.use('/api/auth', authRoutes);
  app.use('/api/contacts', contactRoutes);
} catch (error) {
  console.warn('Routes loaded with warnings:', error.message);
}

// Fallback
app.use((req, res) => {
  res.status(404).json({ message: 'API Route Not Found' });
});

module.exports = app;
