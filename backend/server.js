require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const jobRoutes = require('./routes/jobRoutes')
// express app
const app = express()

// middleware
app.use(express.json()) // parses json payload in an incoming request and adds to req.body

//logs each request
app.use((req, res, next) => {  
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/jobs', jobRoutes)

app.get('/', (req, res) => {
  res.json({mssg: 'Welcome to the app'})
})

// listen for requests
// connects to db -> async function returns promise
mongoose.connect(process.env.MONGO_URI)
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
process.env
