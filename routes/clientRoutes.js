const express = require('express')
const { clientPage } = require('../controller/clientController.js')
const router = express.Router()

router.get('/', clientPage)

module.exports = router