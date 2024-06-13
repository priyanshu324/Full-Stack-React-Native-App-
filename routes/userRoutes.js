const express = require('express');
const { registerController, loginController, updateUserController, requireSignIn } = require('../controllers/userControllers');

// router object
const router = express.Router()

// route
// Register || Post 
router.post('/register', registerController)

// Login || Get
router.post('/login', loginController)

// update || put
router.put('/update-user', requireSignIn, updateUserController)

// exports
module.exports = router 