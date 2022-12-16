const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const Indiv = require('../models/individualTrainee')
//function to get all instructors
const getallindiv = async(req,res) =>{
    const indiv = await Indiv.find({}).sort({createdAt: -1})
    res.status(200).json(indiv)
}
//function to get an instructor
const getindiv = async(req,res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such indivdual'})
    }
   const indiv = await Indiv.findById(id)

   if(!indiv){
    return res.status(404).json({error: 'No such instructor'})
   }
   res.status(200).json(indiv)
}
//function to delete a instructor
const deleteindiv = async (req,res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such indiv'})
    }
    const indiv = await Indiv.findOneAndDelete({_id: id})
    if(!Indiv){
        return res.status(400).json({error:'No such indivuctor'})
    }
    res.status(200).json(indiv)
}
//function to create a instructor
const createindiv = async (req,res) => {
    const{ Country ,  Username ,  Password  ,Fname , Lname } = req.body
    //add course to db
    try{
        const indiv = await Indiv.create({Country ,  Username ,  Password  ,Fname , Lname})
        res.status(200).json(indiv)
    }catch(error){
        res.status(400).json({error: error.message})
    }

}

//function to update a instructor
const updateindiv = async (req,res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such instructor'})
    }
    const indiv = await Indiv.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if(!Indiv){
        return res.status(400).json({error:'No such instructor'})
    }
    res.status(200).json(indiv)
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
        const user = await Indiv.create({ Fname: Fname, Lname: Lname ,Email:Email,Password: hashedPassword});
        const token = createToken(user.Username);

        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: error.message })
    }
}

const login = async (req, res) => {
    // TODO: Login the user
    const {Email,Password} = req.body
    console.log(req.body)
    const user = await Indiv.findOne({Email:Email})
    if(user ==null){
        return res.status(400)
      console.log("dd")
    }
   try{
    if( await bcrypt.compare(Password,user.Password)){
        const token = createToken(user.Username);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(200).json({user})
    }
   }
   catch (error) {
    console.log("dd")
    res.status(400).json({ error: error.message })
}
}

const logout = async (req, res) => {
    // TODO Logout the user
    res.cookie('jwt', token, { httpOnly: true, maxAge: 1 });
}

module.exports = {
    getallindiv ,
    getindiv ,
    deleteindiv,
    createindiv,
    updateindiv,
    logout,
    login,
    signUp
}