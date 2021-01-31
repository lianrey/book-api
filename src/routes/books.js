import { postBook } from '../controllers'
import makeCallback from '../external-services/express-callback'
const express = require('express')
const router = express.Router()

router.post('/', makeCallback(postBook))

module.exports = router
