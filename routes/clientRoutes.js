const express = require('express')
const { clientPage, descPage } = require('../controller/clientController.js')
const router = express.Router()

router.get('/', clientPage)
router.get('/desc/:id', descPage)

module.exports = router