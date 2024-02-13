const express = require('express')
const {
  getJobs, 
  getJob, 
  createJob, 
  deleteJob, 
  updateJob
} = require('../controllers/jobController')

const router = express.Router()

// GET all jobs
router.get('/', getJobs)

// GET a single Job
router.get('/:id', getJob)

// POST a new Job
router.post('/', createJob)

// DELETE a Job
router.delete('/:id', deleteJob)

// UPDATE a Job
router.patch('/:id', updateJob)

module.exports = router