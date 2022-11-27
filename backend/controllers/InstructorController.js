const mongoose = require('mongoose')
 
const Inst = require('../models/instructor')
//function to get all instructors
const getallinstructors = async(req,res) =>{
    const instructors = await Inst.find({}).sort({createdAt: -1})
    res.status(200).json(instructors)
}
//function to get an instructor
const getinstructor = async(req,res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such instructor'})
    }
   const instr = await Inst.findById(id)
 
   if(!instr){
    return res.status(404).json({error: 'No such instructor'})
   }
   res.status(200).json(instr)
}
//function to delete a instructor
const deleteinstructor = async (req,res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such instructor'})
    }
    const instr = await Inst.findOneAndDelete({_id: id})
    if(!Inst){
        return res.status(400).json({error:'No such instructor'})
    }
    res.status(200).json(instr)
}
//function to create a instructor
const createinstructor = async (req,res) => {
    const{ Country ,  Username ,  Password  ,Fname , Lname } = req.body
    //add course to db
    try{
        const instructor = await Inst.create({Country ,  Username ,  Password  ,Fname , Lname})
        res.status(200).json(instructor)
    }catch(error){
        res.status(400).json({error: error.message})
    }
 
}
 
//function to update a instructor
const updateinstructor = async (req,res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such instructor'})
    }
    const instructor = await Inst.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if(!Inst){
        return res.status(400).json({error:'No such instructor'})
    }
    res.status(200).json(instructor)
}
 
module.exports = {
    getallinstructors ,
    getinstructor ,
    deleteinstructor,
    createinstructor,
    updateinstructor
 
}