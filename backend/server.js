require('dotenv').config()

const express = require('express')
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
app.listen(process.env.PORT, () => {
  console.log('listening on port', process.env.PORT)
})

process.env