const mongoose = require('mongoose');
const docSchema = new mongoose.Schema({
    Subject: {
        type: 'String',
        required: true,
    },
    LastStatus: {
        type: 'String',
        required: true,
    },
    WriteUserName: {
        type: 'String',
        required: true,
    },
    BodyDesc: {
        type: 'String',
        required: true,
    },
    Thumbnail: {
        type: 'String',
        required: true,
    },
    RegDate: {
        type: 'Date',
        required: false,
        default: Date.now()
    }
})

module.exports = mongoose.model("Doc", docSchema);