const express = require('express')
const router = express.Router()
const portfolioController = require('./src/controllers/portfolioController')


router.get('/', portfolioController.index)

router.get('/new-project', portfolioController.renderCreatePage)

router.post('/new-project', portfolioController.create)

router.get('/projects', portfolioController.all)

module.exports = router
