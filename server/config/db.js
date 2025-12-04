const mongoose = require('mongoose');
require('dotenv').config;

const connectDB = async () => {
    try{
    await mongoose.connect(process.env.DATABASE_URI);
    console.log("MongoDB is Connected!");
    } catch (error){
        console.error(error.message)
        process.exit(1)
    }
}

module.exports = connectDB;