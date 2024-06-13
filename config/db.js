const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL_LOCAL);
        console.log(`connected in DB ${mongoose.connection.host}`.bgCyan.white);
    } catch (error) {
        console.log(`error in DB ${error}`.bgRed.white);
    }
};

module.exports = connectDB;