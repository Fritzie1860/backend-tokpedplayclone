const mongoose = require('mongoose');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/final_db";
console.log("LIAT SINI" + MONGODB_URI);


async function connectDB() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndexes: true, // Updated option name
      // useFindAndModify: false, // Updated option name
    });
    console.log('MongoDB connected!');
  } catch (err) {
    console.error('MongoDB connection failed:', err);
    process.exit(1);
  }
}

module.exports = connectDB;
