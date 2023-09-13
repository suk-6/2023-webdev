const mongoose = require('mongoose');
const Schema = mongoose.Schema({
    Subject: {
        type: String,
        required: true
    },
    LastStatus: {
        type: String,
        required: true
    },
    WriteUserName: {
        type: Date,
    },
    BodyDesc: {
        type: Date,
    },
    Thumbnail: {
        type: Date,
    }
})