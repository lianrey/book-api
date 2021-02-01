import { postBook, getBooks, getBook } from '../controllers'
import makeCallback from '../external-services/express-callback'
const express = require('express')
const router = express.Router()

router.get('/', makeCallback(getBooks))
router.get('/:id', makeCallback(getBook))
router.post('/', makeCallback(postBook))

module.exports = router
