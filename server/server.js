const express = require('express')
const path = require('path')
const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
    // res.status(200).send("Hello Backend")
})

app.get('/api', (req, res) => {
    res.status(200).json({"users": ["user1", "user2", "user3", "user4"]})
})

let server = app.listen(5000, () => console.log("App listening on Port 5000"))

module.exports = {
    server : server,
    app : app
}