const express = require('express')
const router = express.Router()
const portfolioController = require('./src/controllers/portfolioController')


router.get('/', portfolioController.index)

router.get('/new-project', portfolioController.renderCreatePage)

router.post('/new-project', portfolioController.create)

router.get('/projects', portfolioController.all)

router.get('/project/:id', portfolioController.one)

router.get('/project-edit/:id', portfolioController.edit)

router.post('/project/:id', portfolioController.saveEdit)

module.exports = router
