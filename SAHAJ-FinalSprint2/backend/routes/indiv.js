const express = require('express')
const{
    getallindiv ,
    getindiv ,
    deleteindiv,
    createindiv,
    updateindiv,
    logout,
    login,
    signUp
}=require('../controllers/IndividualController')

const router = express.Router()

router.get('/indiv',getallindiv)

router.get('/indiv/:id',getindiv)

//POST requests
router.post('/indiv',createindiv)
router.post('/indiv/signup', signUp)
router.post('/indiv/login',login)
//DELETE
router.delete('/indiv/:id', deleteindiv)

//PATCH
router.patch('/indiv/:id',updateindiv)
// router.patch('/course',updateAllCourse)

module.exports = router