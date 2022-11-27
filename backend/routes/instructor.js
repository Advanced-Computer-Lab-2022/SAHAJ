const express = require('express')
const {
    getallinstructors ,
    getinstructor ,
    deleteinstructor,
    createinstructor,
    updateinstructor
   
} = require('../controllers/instructorController')
 

const router = express.Router()
 
//GET requests
router.get('/home',(req,res) => {
    res.json({mssg:'GET home page'})
})
router.get('/instructor', getallinstructors)
 
router.get('/instructor/:id', getinstructor)
 
//POST requests
router.post('/instructor', createinstructor)
 
//DELETE
router.delete('/instructor/:id', deleteinstructor )
 
//PATCH
router.patch('/instructor/:id', updateinstructor)




module.exports = router