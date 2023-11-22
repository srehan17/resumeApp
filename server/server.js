const express = require('express')
require('dotenv').config()
const {errorHandler} = require('./middleware/errorHandler')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/experience', require('./routes/experienceRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

let server = app.listen(port, () => console.log(`App listening on Port ${port}`))

module.exports = {
    server : server,
    app : app
}