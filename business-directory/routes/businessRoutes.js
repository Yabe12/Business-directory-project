const express = require('express');
const router = express.Router();
const Business = require('../models/Business');

// Define your routes here
router.post('/', async (req, res) => {
  // Create business logic
});

router.get('/', async (req, res) => {
  // Get all businesses logic
});

module.exports = router;
