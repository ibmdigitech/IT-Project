const mongoose = require('mongoose');

let isConnected = false;

const connectDB = async () => {
    // Prevent multiple connections in serverless
    if (isConnected) {
        return;
    }

    if (!process.env.MONGO_URI && !process.env.MONGODB_URI) {
        console.warn('⚠️  MONGO_URI not defined - database connection skipped');
        return;
    }

    const uri = process.env.MONGO_URI || process.env.MONGODB_URI;

    try {
        const conn = await mongoose.connect(uri, {
            serverSelectionTimeoutMS: 5000, // Timeout after 5s
            socketTimeoutMS: 45000,
        });
        isConnected = true;
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`❌ MongoDB Connection Error: ${error.message}`);
        isConnected = false;
        // In serverless, just log the error - don't crash
    }
};

module.exports = connectDB;
