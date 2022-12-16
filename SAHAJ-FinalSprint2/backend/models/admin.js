const mongoose = require('mongoose')

const Schema = mongoose.Schema

const adminSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    Refund_Requests:{
        type:Array,
        Refunds:{
            Name:{
                type:String
            } ,
            Amount:{
                type:Number
            }
        }
    }
   
})

module.exports = mongoose.model('admin',adminSchema)