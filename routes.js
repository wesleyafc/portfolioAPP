const express = require('express')
const router = express.Router()
const portfolioController = require('./src/controllers/portfolioController')


router.get('/', portfolioController.index)

module.exports = router
