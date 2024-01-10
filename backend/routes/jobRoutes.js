const express = require('express')

const router = express.Router()

// GET all workouts
router.get('/', getJobs)

// GET a single workout
router.get('/:id', getJobs)

// POST a new workout
router.post('/', createWorkout)

// DELETE a workout
router.delete('/:id', deleteWorkout)

// UPDATE a workout
router.patch('/:id', updateWorkout)

module.exports = router