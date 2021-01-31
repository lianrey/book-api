import { postBook, getBooks } from '../controllers'
import makeCallback from '../external-services/express-callback'
const express = require('express')
const router = express.Router()

router.get('/', makeCallback(getBooks))
router.post('/', makeCallback(postBook))

module.exports = router
