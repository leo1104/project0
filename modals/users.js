const mongoose = require('../config/db');

const userSchema = new mongoose.Schema({
    fullname: {
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
     post:{
        type: String,
        required: true,
    },
    isLeader:{
        type:Boolean,
        required:true
    }
});

module.exports = mongoose.model('user', userSchema);