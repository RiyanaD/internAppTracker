const express = require('express')
const Job = require('../models/jobModel')

const router = express.Router()

// GET all workouts
router.get('/', (req, res) => {
    res.json({mssg: 'GET all workouts'})
  })

// GET a single workout
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single workout'})
  })

// POST a new workout
router.post('/', async (req, res) => {
    const {role, company, jobID, status} = req.body
    
    try {
      //create new Job document -> returns Job document and its id
      const job = await Job.create({role, company, jobID, status})
      res.status(200).json(job)
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  })

// DELETE a workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'GET a single workout'})
  })

// UPDATE a workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a single workout'})
  })

module.exports = router