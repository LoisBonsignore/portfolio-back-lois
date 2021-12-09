const express = require('express');
const { model } = require('mongoose');
const router = express.Router();
const post = require('../controllers/message')

router.post('/contact', post.newContact)

module.exports = router;