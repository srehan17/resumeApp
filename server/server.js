const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("Hello Frontend")
})

app.get('/api', (req, res) => {
    res.json({"users": ["user1", "user2", "user3", "user4"]})
})

app.listen(5000, () => console.log("App listening on Port 5000"))