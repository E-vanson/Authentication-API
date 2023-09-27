const express = require('express')
const router = express.Router()

const authenticaWare = require('../middleware/auth')

const {login, dashboard} = require('../controllers/main')

router.route('/dashboard').get(authenticaWare, dashboard)
router.route('/login').post(login)

module.exports = router