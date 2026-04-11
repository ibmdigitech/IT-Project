const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load env variables
dotenv.config();

const app = express();

// Set MONGO_URI from Vercel's MONGODB_URI if available
if (!process.env.MONGO_URI && process.env.MONGODB_URI) {
  process.env.MONGO_URI = process.env.MONGODB_URI;
}

// Connect to Database
if (process.env.MONGO_URI) {
  connectDB();
  console.log('MongoDB URI found - attempting connection');
} else if (!process.env.VERCEL) {
  // Only use local MongoDB in development, never in Vercel
  process.env.MONGO_URI = 'mongodb://127.0.0.1:27017/it_business_app';
  console.log('Using local MongoDB for development');
  connectDB();
} else {
  console.warn('⚠️  Running without database on Vercel - add MONGODB_URI in settings');
}

// Body parser
app.use(express.json());

// Enable CORS
app.use(cors());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'SmartIT API is running',
    timestamp: new Date().toISOString()
  });
});

// Safely load routes - prevent crash if dependencies fail
try {
  const authRoutes = require('./routes/authRoutes');
  const contactRoutes = require('./routes/contactRoutes');

  app.use('/api/auth', authRoutes);
  app.use('/api/contacts', contactRoutes);
} catch (error) {
  console.warn('Warning: Could not load some routes:', error.message);
}

// Fallback error handling (basic)
app.use((req, res, next) => {
  res.status(404).json({ message: 'API Route Not Found' });
});

// Only start listening if NOT on Vercel (Vercel handles this automatically)
const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
  });
}

// Export for Vercel serverless
module.exports = app;
