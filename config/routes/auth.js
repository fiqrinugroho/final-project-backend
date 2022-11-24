const router = require('express').Router()

// controller
const auth = require('../../app/controllers/authController');

// middleware
// const Authentication = require('../../middlewares/authenticate');


// API auth
// router.post('/register', auth.register)
router.post('/login', auth.login)

module.exports = router