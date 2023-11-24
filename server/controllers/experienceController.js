const asyncHandler = require('express-async-handler')
const Experience = require('../models/experienceModel')

// @desc    Get experiences
// @route   GET /api/experience
// @access  Private
const getExperiences = asyncHandler(async (req, res) => {

    const experience = await Experience.find({user: req.user.id})

    res.status(200).json(experience)
})

// @desc    Set experience
// @route   POST /api/experience
// @access  Private
const setExperience = asyncHandler(async (req, res) => {
    const {company, position, startYear} = req.body
    if(!company || !position || !startYear){
        res.status(400)
        throw Error('Please add all required text fields')
    }
    const experience = await Experience.create({
        company,
        position,
        startYear,
        user: req.user.id
    })
    res.status(200).json(experience)
})

// @desc    Update experience
// @route   PUT /api/experience/:id
// @access  Private
const updateExperience = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add text')
    }
    res.status(200).json({message: `Update experience ${req.params.id}`})
})

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
