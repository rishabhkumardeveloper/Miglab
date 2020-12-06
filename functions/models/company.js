const mongoose = require('mongoose')

const Company = mongoose.model('Company',{
    email: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        trim: true
    },
    companyname: {
        type: String,
        trim: true
    },
    location: {
        type: String,
        trim: true
    },
    pincode: {
        type: Number,
        trim: true
    },
    regno: {
        type: String,
        trim: true
    },
    employee: {
        name:{
            type: String,
            trim: true
        },
        phno:{
            type: Number,
            trim: true
        },
        designation:{
            type: String,
            trim: true
        },
        id:{
            type: String,
            trim: true
        }
    }
})

module.exports = Company


// sealofapproval: {
//     data: Buffer,
//     contentType: String 
// },