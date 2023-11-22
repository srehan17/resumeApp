const Experience = require('../models/experienceModel')

// @desc    Get experiences
// @route   GET /api/experience
// @access  Private
const getExperiences = async (req, res) => {
    const experience = await Experience.find()

    res.status(200).json(experience)
}

// @desc    Set experience
// @route   POST /api/experience
// @access  Private
const setExperience = async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add text')
    }
    res.status(200).json({message: 'Set experience'})
}

// @desc    Update experience
// @route   PUT /api/experience/:id
// @access  Private
const updateExperience = async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add text')
    }
    res.status(200).json({message: `Update experience ${req.params.id}`})
}

// @desc    Delete experience
// @route   DELETE /api/experience/:id
// @access  Private
const deleteExperience = async (req, res) => {
    res.status(200).json({message: `Update experience ${req.params.id}`})
}

module.exports = {
    getExperiences,
    setExperience,
    updateExperience,
    deleteExperience
}
