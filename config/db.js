const mongoose = require('mongoose');

// Use MONGODB_URI from Vercel environment variables
const MONGO_URI = process.env.MONGODB_URI || process.env.MONGO_URI;

let isConnected = false;

const connectDB = async () => {
    if (isConnected) {
        return;
    }

    if (!MONGO_URI) {
        throw new Error('MONGODB_URI environment variable is required. Add it in Vercel → Settings → Environment Variables');
    }

    try {
        const conn = await mongoose.connect(MONGO_URI, {
            serverSelectionTimeoutMS: 10000,
            socketTimeoutMS: 45000,
        });
        isConnected = true;
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`❌ MongoDB Connection Error: ${error.message}`);
        isConnected = false;
        throw error;
    }
};

module.exports = connectDB;
