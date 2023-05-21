const mongoose = require('../config/db');

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    }
    , desc:{
        type: String,
        required: true,

    }, 
    image:{
        type: String,
        required: true,
    },
    fullDesc:{
        type: String,
        required: true,
    },
     eventDate:{
        type: String,
        required: true,
    },
    eventURL:{
        type:String
    }
});

module.exports = mongoose.model('event', eventSchema);