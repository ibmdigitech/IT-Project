const mongoose = require('mongoose');

const connectDB = async () => {
    if (!process.env.MONGO_URI) {
        console.warn('MONGO_URI not defined - database connection skipped');
        return;
    }
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        // Don't exit on Vercel - let the function handle the error
        if (process.env.VERCEL !== '1') {
            process.exit(1);
        }
    }
};

module.exports = connectDB;
