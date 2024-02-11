const mongoose = require('mongoose')

const Schema = mongoose.Schema

const jobSchema = new Schema({
  role: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  jobID: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'rejected', 'interview','offer'],
    default: 'applied' // Optional: set a default value
  }
}, { timestamps: true })

//builds jobs collection 
//compiles schema into model -> model is used to interact with collection
module.exports = mongoose.model('Job', jobSchema)