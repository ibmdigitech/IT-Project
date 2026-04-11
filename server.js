const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load env variables
dotenv.config();

const app = express();

// Connect to Database - make it non-blocking for serverless
// Use MongoDB Atlas in production, local MongoDB in development
if (!process.env.MONGO_URI) {
  if (process.env.NODE_ENV === 'production' || process.env.VERCEL) {
    console.warn('WARNING: MONGO_URI environment variable is not set');
    console.warn('Please add it in Vercel Environment Variables');
    // Don't crash, let the app run but DB won't work
  } else {
    process.env.MONGO_URI = 'mongodb://127.0.0.1:27017/it_business_app';
    console.log('Using local MongoDB for development');
    connectDB();
  }
} else {
  // Only connect if MONGO_URI is set
  connectDB();
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

// Route files
const authRoutes = require('./routes/authRoutes');
const contactRoutes = require('./routes/contactRoutes');

// Mount routes
app.use('/api/auth', authRoutes);
app.use('/api/contacts', contactRoutes);

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
