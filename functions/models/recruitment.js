const mongoose = require('mongoose')

const Recruitment = mongoose.model('Recruitment',{
    regno: {
        type: String,
        trim: true
    },
    sewing: {
        type: Number,
        default: 0
    },
    welding: {
        type: Number,
        default: 0
    },
    carpentry: {
        type: Number,
        default: 0
    },
    painter: {
        type: Number,
        default: 0
    },
    mason: {
        type: Number,
        default: 0
    }
})

module.exports = Recruitment

