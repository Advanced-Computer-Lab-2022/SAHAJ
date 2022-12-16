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
    Bio: {
        type: String,
        default: "My Bio",
        required: true
    },
    Registered_Course:{
        type: Array,
        Course_det:{
            Course_id:{
                type:String
            },
            Course_name:{
                type:String
            }
        }
    }
})

module.exports = mongoose.model('Coporate_trainee',coporateTraineeSchema)