const mongoose = require('mongoose')

const Schema = mongoose.Schema

const coporateTraineeSchema = new Schema({
    Country: {
        type: String,
        required: true
    },
    Username: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Fname: {
        type: String,
        required: true
    },
    Lname: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Coporate_trainee',coporateTraineeSchema)