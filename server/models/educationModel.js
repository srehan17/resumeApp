const mongoose = require('mongoose')

const educationSchema = mongoose.Schema({
    institution: {
        type: String,
        required: [true, 'Please add a text value']
    },
    qualification: {
        type: String,
        required: [true, 'Please add a text value']
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

module.exports = mongoose.model('Education', educationSchema)