const mongoose = require('mongoose')

const CorporateTrainee = require('../models/coporateTrainee')
//function to get all coorp
const getallcorp = async(req,res) =>{
    const corp = await CorporateTrainee.find({}).sort({createdAt: -1})
    res.status(200).json(corp)
}
//function to get an coorp
const getcorp = async(req,res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such coorprate'})
    }
   const corp = await CorporateTrainee.findById(id)

   if(!CorporateTrainee){
    return res.status(404).json({error: 'No such coorprate'})
   }
   res.status(200).json(corp)
}
//function to delete a coorpart
const deletecorp = async (req,res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such cooprate'})
    }
    const corp = await CorporateTrainee.findOneAndDelete({_id: id})
    if(!CorporateTrainee){
        return res.status(400).json({error:'No such coorprate'})
    }
    res.status(200).json(corp)
}
//function to create a cooraprate
const createcorp = async (req,res) => {
    const{ Country ,  Username ,  Password  ,Fname , Lname } = req.body
    //add course to db
    try{
        const corp = await CorporateTrainee.create({Country ,  Username ,  Password  ,Fname , Lname})
        res.status(200).json(corp)
    }catch(error){
        res.status(400).json({error: error.message})
    }

}

//function to update a instructor
const updateCorp = async (req,res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such coorprate'})
    }
    const corp = await Inst.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if(!CorporateTrainee){
        return res.status(400).json({error:'No such coorprate'})
    }
    res.status(200).json(corp)
}

module.exports = {
    getallcorp ,
    getcorp ,
    deletecorp,
    createcorp,
    updateCorp

}