const Admin = require('../models/admin')
const mongoose = require('mongoose')
const admin = require('../models/admin')

const addAdmin = async (req,res) => {
    const{username,password} = req.body
    console.log(req.body)
    console.log('hello')
    //add admin to db
    try{
        const admin = await Admin.create({username,password})
        res.status(200).json(admin)
    }catch(error){
        res.status(400).json({error: error.message})
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
const getalladmin = async(req,res) =>{
    const corp = await Admin.find({}).sort({createdAt: -1})
    res.status(200).json(corp)
}

module.exports= {addAdmin,updateAllAdmin,getalladmin}