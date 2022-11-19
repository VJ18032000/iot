const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    hp: {
        type: String,
        required: true
    },
    pressure: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('iot', userSchema)