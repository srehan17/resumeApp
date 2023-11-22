const mongoose = require('mongoose')

const profileSchema = mongoose.Schema({
        firstName: {
            type: String,
            required: [true, 'Please add your first name']
        },
        lastName: {
            type: String,
            required: [true, 'Please add your last name']
        },
        location: {
            type: String,
            required: [true, 'Please add your location']
        },
        email: {
            type: email,
            required: [true, 'Please add an email']
        },
        phone: {
            type: String,
            required: [true, 'Please add a phone number']
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Experience', experienceSchema)