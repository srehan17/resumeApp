const mongoose = require('mongoose')

const experienceSchema = mongoose.Schema({
        company: {
            type: String,
            required: [true, 'Please add a text value']
        },
        position: {
            type: String,
            required: [true, 'Please add a text value']
        },
        responsibilities: {
            type: String,
        },
        startYear: {
            type: String,
            required: [true, 'Please add a value']
        },
        endYear: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Experience', experienceSchema)