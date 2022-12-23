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
            UserId:{
                type:String
            } ,
            UserType:{
                type:Number
            },
            Amount:{
                type:Number
            }
        }
    },
    Reports:{
        type:Array,
        Refunds:{
            UserId:{
                type:String
            } ,
            UserType:{
                type:Number
            },
            Report_title:{
                type:String
            },
            Report_content:{
                type:String
            },
            IsSeen:{
                type:String
            }
        }
    },
    Course_requests:{
        type:Array,
        Refunds:{
            UserId:{
                type:String
            } ,
          
            Course_id:{
                type:String
            },
           
          
        }
    }
   
})

module.exports = mongoose.model('admin',adminSchema)