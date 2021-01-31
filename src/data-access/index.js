/* eslint-disable node/no-path-concat */
import makeBooksDb from './Books-db'
import mongodb from 'mongodb'
require('dotenv').config({ path: __dirname + '/../../.env' })

const MongoClient = mongodb.MongoClient
const url = process.env.DM_BookS_DB_URL
const dbName = process.env.DM_BookS_DB_NAME
const client = new MongoClient(url, { useNewUrlParser: true })

export async function makeDb () {
  if (!client.isConnected()) {
    await client.connect()
  }
  return client.db(dbName)
}

const BooksDb = makeBooksDb({ makeDb })
export default BooksDb
