const express= require('express')
const router = express.Router()
const { 
    getExperiences, 
    setExperience, 
    updateExperience, 
    deleteExperience
} = require('../controllers/experienceController')

router.route('/').get(getExperiences).post(setExperience)
router.route('/:id').put(updateExperience).delete(deleteExperience)

module.exports = router