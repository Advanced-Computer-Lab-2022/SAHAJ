require('dotenv').config()
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const express = require('express')
const coursesRoute = require('./routes/courses')
const adminssRoute = require('./routes/admin')
const instRoute = require('./routes/instructor')
const coorpRoute = require('./routes/coorp')
const examR = require('./routes/Exams')
const subR = require('./routes/subtitle')

// express app
const app = express()

// middleware
// app.use(express.json)
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api',coursesRoute) // attaches all routes found in courses
app.use('/api',adminssRoute)
app.use('/api',instRoute)
app.use('/api',coorpRoute)
app.use('/api',examR)

app.use('/api',subR)
// listen for requests
mongoose.connect(process.env.DB_URI)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 