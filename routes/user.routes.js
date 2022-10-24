const express = require('express')
const router = express.Router()

const user = require('../controllers/user.controller')

router.post('/sign-up', user.signup)
router.post('/sign-in', user.signIn)

module.exports = router
