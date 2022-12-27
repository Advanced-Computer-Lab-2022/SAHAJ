const express = require('express')
const {
    addAdmin,updateAllAdmin, getalladmin,updateAdmin
} = require('../controllers/adminController')

const router = express.Router()

//POST requests
router.post('/admin',addAdmin)
//PATCH requests
router.patch('/admin',updateAllAdmin)

router.patch('/admin/:id',updateAllAdmin)
//GET requests
router.get('/admin',getalladmin)
module.exports = router