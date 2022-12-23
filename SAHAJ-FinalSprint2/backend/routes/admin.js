const express = require('express')
const {
    addAdmin,updateAllAdmin, getalladmin
} = require('../controllers/adminController')

const router = express.Router()

//POST requests
router.post('/admin',addAdmin)
//PATCH requests
router.patch('/admin',updateAllAdmin)
//GET requests
router.get('/admin',getalladmin)
module.exports = router