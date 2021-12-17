const express = require('express');
const router = express.Router();
const portfolio = require("../controllers/portfolio");

router.get('/projects', portfolio.getProjects)

module.exports = router;