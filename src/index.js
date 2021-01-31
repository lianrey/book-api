import express from 'express'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())
const booksRouter = require('./routes/books')
app.use('/books', booksRouter)

app.listen(3000, () => { console.log('Server is listening on port 3000') })
