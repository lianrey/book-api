import { postBook, getBooks, getBook, putBook, deleteBook } from '../controllers'
import makeCallback from '../external-services/express-callback'
const express = require('express')
const router = express.Router()

router.get('/', makeCallback(getBooks))
router.get('/:id', makeCallback(getBook))
router.post('/', makeCallback(postBook))
router.put('/:id', makeCallback(putBook))
router.delete('/:id', makeCallback(deleteBook))

module.exports = router
