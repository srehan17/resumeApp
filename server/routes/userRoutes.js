const express= require('express')
const router = express.Router()
const { getUsers,
        registerUser, 
        loginUser, 
        getUser, 
} = require('../controllers/userController')

router.get('/', getUsers)
router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/user', getUser)

module.exports = router