const express = require('express')
const {
    addAdmin
} = require('../controllers/adminController')

const router = express.Router()

//POST requests
router.post('/admin',addAdmin)


module.exports = router