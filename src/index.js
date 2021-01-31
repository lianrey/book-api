import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import { postBook } from './controllers'
import makeCallback from './express-callback'

dotenv.config()

const app = express()
app.use(bodyParser.json())
app.post('/books', makeCallback(postBook))

app.listen(3000, () => {
  console.log('Server is listening on port 3000')
})

export default app
