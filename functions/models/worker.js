const mongoose = require('mongoose')

const Worker = mongoose.model('Worker',{
    name: {
        type: String,
        trim: true
    },
    phno: {
        type: Number,
        trim: true
    },
    skill: {      
        type: String,
        trim: true
    },
    pincode: {
        type: Number,
        trim: true
    },
    available:{
        type: Number,
        trim: true,
        default: 0
    }
})

module.exports = Worker

