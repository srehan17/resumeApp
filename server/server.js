const express = require('express')
const dotenv = require('dotenv')
const errorHandler = require('./middleware/errorHandler')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000
require('dotenv').config()

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extnded: false}))

app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, 'index.html'))
    res.status(200).send("Hello Backend")
})

app.get('/api', (req, res) => {
    res.status(200).json({"users": ["user1", "user2", "user3", "user4"]})
})

app.use(errorHandler)

let server = app.listen(port, () => console.log(`App listening on Port ${port}`))

module.exports = {
    server : server,
    app : app
}