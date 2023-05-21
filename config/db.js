require('dotenv').config();

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URI, () => {
    console.log('connected to db');
});

module.exports = mongoose;