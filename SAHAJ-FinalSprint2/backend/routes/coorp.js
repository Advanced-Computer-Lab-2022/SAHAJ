const express = require('express')
const{
    getallcorp ,
    getcorp ,
    deletecorp,
    createcorp,
    updateCorp,
    updateAllCoorp,signUp
}=require('../controllers/CoporateController')

const router = express.Router()

router.get('/coorp',getallcorp)

router.get('/coorp/:id',getcorp)

//POST requests
router.post('/coorp',createcorp)
router.post('/coorp/signup',signUp)

//DELETE
router.delete('/coorp/:id', deletecorp)

//PATCH
router.patch('/coorp/:id',updateCorp)
router.patch('/coorp/',updateAllCoorp)
// router.patch('/course',updateAllCourse)

module.exports = router