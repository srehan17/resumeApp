const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = async (req, res) => {
    res.json({message: 'Login user'})
}

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }
    res.json({message: 'Register new user'})
})

// @desc    Get user data
// @route   GET /api/users/user
// @access  Public
const getUser = asyncHandler(async (req, res) => {
    res.json({message: 'User data displayed'})
})

module.exports = {
    registerUser, 
    loginUser, 
    getUser
}