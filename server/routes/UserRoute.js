const express = require('express');
const registerUser = require('../controllers/User_control');

// Creating an instance of express router
const router = express.Router();
// Register user info
router.post('/verify', registerUser);
console.log
module.exports = router;