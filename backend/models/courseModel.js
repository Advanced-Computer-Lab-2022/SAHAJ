const mongoose = require('mongoose')

const Schema = mongoose.Schema

const courseSchema = new Schema({
    Currency: {
        type: String
    },
    Course_subject: {
        type: String,
        required: true
    },
    Course_excrcise: {
        type: String,
        required: true
    },
    Course_title: {
        type: String,
        required: true
    },
    Course_duration: {
        type: String,
        required: true
    },
    Course_rating: {
        type: Number,
       required:true
    },
    Course_price: {
        type: Number,
        required:true
    },
    Course_instructor: {
        type: String,
        required: true
    },
    Course_subtitle: {
        type: Array ,
        required:true,
        items:{
           key: "subtitle", type:String,
            key : "hours",type:Number
        }
    },
    Course_Exams: {
        type: Array ,
        required:false,
       
    }
}, {timestamps:true})

module.exports = mongoose.model('Course',courseSchema)