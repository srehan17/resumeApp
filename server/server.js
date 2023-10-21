const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.status(200).send("Hello Frontend")
})

app.get('/api', (req, res) => {
    res.status(200).json({"users": ["user1", "user2", "user3", "user4"]})
})

let server = app.listen(5000, () => console.log("App listening on Port 5000"))

module.exports = {
    server : server,
    app : app
}