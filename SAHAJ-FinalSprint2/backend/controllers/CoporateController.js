const mongoose = require('mongoose')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
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

//function to update a CorporateTraineeructor
const updateCorp = async (req,res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such coorprate'})
    }
    const corp = await CorporateTrainee.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if(!CorporateTrainee){
        return res.status(400).json({error:'No such coorprate'})
    }
    res.status(200).json(corp)
}
const updateAllCoorp = async (req,res) =>{
    // const {id} = req.params
    
    try {
     
        const coorp = await CorporateTrainee.updateMany({_v:0},{
             ...req.body
             
           // $set:{Currency:"usd"}
        })
        res.status(200).json(coorp)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    
}
const maxAge = 3 * 24 * 60 * 60;
const createToken = (name) => {
    return jwt.sign({ name }, 'supersecret', {
        expiresIn: maxAge
    });
};
const signUp = async (req, res) => {
    const { Fname, Lname, Email ,Password } = req.body;
    console.log(req.body)
    try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(Password, salt);
        const user = await CorporateTrainee.create({ Fname: Fname, Lname: Lname ,Email:Email,Password: hashedPassword});
        const token = createToken(user.Email);

        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    getallcorp ,
    getcorp ,
    deletecorp,
    createcorp,
    updateAllCoorp,
    updateCorp,
    signUp

}