const express = require('express');
const cors = require('cors');

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

// Database connection - lazy loaded only when needed
let dbConnected = false;
let dbConnecting = false;

async function ensureDBConnection() {
  if (dbConnected) return true;
  if (dbConnecting) {
    // Wait for existing connection attempt
    await new Promise(resolve => setTimeout(resolve, 1000));
    return dbConnected;
  }

  dbConnecting = true;

  try {
    // Load env first
    const dotenv = require('dotenv');
    dotenv.config();

    // Set MONGO_URI from Vercel's MONGODB_URI
    if (!process.env.MONGO_URI && process.env.MONGODB_URI) {
      process.env.MONGO_URI = process.env.MONGODB_URI;
    }

    if (process.env.MONGO_URI) {
      const connectDB = require('./config/db');
      await connectDB();
      dbConnected = true;
      return true;
    }
  } catch (error) {
    console.warn('⚠️  DB connection failed, continuing without database:', error.message);
  } finally {
    dbConnecting = false;
  }

  return dbConnected;
}

// Safely load routes
try {
  const authRoutes = require('./routes/authRoutes');
  const contactRoutes = require('./routes/contactRoutes');

  // Wrap route handlers to ensure DB connection
  app.use('/api/auth', (req, res, next) => {
    ensureDBConnection().then(() => next());
  }, authRoutes);

  app.use('/api/contacts', (req, res, next) => {
    ensureDBConnection().then(() => next());
  }, contactRoutes);
} catch (error) {
  console.warn('Warning: Could not load routes:', error.message);
}

// Fallback error handling
app.use((req, res) => {
  res.status(404).json({ message: 'API Route Not Found' });
});

// Export for Vercel serverless (DO NOT call app.listen)
module.exports = app;
