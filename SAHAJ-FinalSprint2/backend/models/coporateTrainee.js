const mongoose = require('mongoose')

const Schema = mongoose.Schema

const coporateTraineeSchema = new Schema({
    Fname: {
        type: String,
        required: true
    },
    Lname: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Country: {
        type: String,
        required: false
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
            },
            Amount_paid:{
                type:Number
            },
            Progress:{
                type:Number,
                default:0,
                required: true
            }
        }
    }
})

module.exports = mongoose.model('Coporate_trainee',coporateTraineeSchema)