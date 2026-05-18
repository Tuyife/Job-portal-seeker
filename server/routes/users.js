const express = require('express');
const router = express.Router();

// Register user
router.post('/register', (req, res) => {
  res.json({ message: 'User registered successfully!' });
});

// Login user
router.post('/login', (req, res) => {
  res.json({ message: 'User logged in successfully!' });
});

module.exports = router;