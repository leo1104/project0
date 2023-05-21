const mongoose = require('../config/db');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    }
    , desc:{
        type: String,
        required: true,

    }, 
    mainImage:{
        type: String,
        required: true,
    },
    fullDesc:{
        type: String,
        required: true,
    },
     images:{
        type:Array,
     }
});

module.exports = mongoose.model('blog', blogSchema);