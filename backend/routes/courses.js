const express = require('express')
const {
    createCourse,
    getCourses,
    getCourse,
    deleteCourse,
    updateCourse,
    updateAllCourse
} = require('../controllers/courseController')


const router = express.Router()

//GET requests
router.get('/home',(req,res) => {
    res.json({mssg:'GET home page'})
})
router.get('/course',getCourses)

router.get('/course/:id',getCourse)

//POST requests
router.post('/course',createCourse)

//DELETE
router.delete('/course/:id', deleteCourse)

//PATCH
router.patch('/course/:id',updateCourse)
router.patch('/course',updateAllCourse)




module.exports = router