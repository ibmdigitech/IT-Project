const express = require('express');
const router = express.Router();
const { authUser, setupAdmin } = require('../controllers/authController');

router.post('/login', authUser);
router.post('/setup', setupAdmin); // Temporary endpoint for first admin setup

module.exports = router;
