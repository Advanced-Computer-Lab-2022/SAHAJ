const Admin = require('../models/admin')
const mongoose = require('mongoose')
const admin = require('../models/admin')
const validator = require('validator')
const bcrypt = require('bcrypt')

const addAdmin = async (req,res) => {
    const { Fname, Lname, Email, Password} = req.body;
    // console.log(req.body)
    try {
       
        if (!Email || !Password || !Fname || !Lname ) {
            throw Error('All fields must be filled')
          }
          if (!validator.isEmail(Email)) {
            throw Error('Email not valid')
          }
          if (!validator.isStrongPassword(Password)) {
            throw Error('Password not strong enough')
          }
        
          else{

          
       await admin.findOne({ Email: req.body.Email }).then (async(user)=> {
            console.log(user)
          
            if (user) {
                throw Error('User already exist')
                // return res.status(400).json({ msg: "User already exist" })
               
                //  return res.status(400).json({ msg: "User not exist" })

            }
            else {
                const salt = await bcrypt.genSalt();
                const hashedPassword = await bcrypt.hash(Password, salt);
                const user = await admin.create({ Fname: Fname, Lname: Lname, Email: Email, Password: hashedPassword });
               

               
               
                
               
            }

        })
    }


    } catch (error) {
        console.log(error)
        res.status(400).json({ error: error.message })
    }
    
}

const updateAllAdmin = async (req,res) =>{
    // const {id} = req.params
    
    try {
     
        const coorp = await Admin.updateMany({_v:0},{
             ...req.body
             
           // $set:{Currency:"usd"}
        })
        res.status(200).json(coorp)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    
}
const updateAdmin = async (req,res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such Admin'})
    }
    const adm = await Admin.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if(!Admin){
        return res.status(400).json({error:'No such Admin'})
    }
    res.status(200).json(adm)
}

const getalladmin = async(req,res) =>{
    const corp = await Admin.find({}).sort({createdAt: -1})
    res.status(200).json(corp)
}

module.exports= {addAdmin,updateAllAdmin,getalladmin,updateAdmin}