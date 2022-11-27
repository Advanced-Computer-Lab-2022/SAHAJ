const Admin = require('../models/admin')
const mongoose = require('mongoose')

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

module.exports= {addAdmin}