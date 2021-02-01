import {
  addBook,
  listBooks,
  retrieveBook
} from '../use-cases'
import makeGetBooks from './get-books'
import makeGetBook from './get-book'
import makePostBook from './post-book'

const getBooks = makeGetBooks({ listBooks })
const getBook = makeGetBook({ retrieveBook })
const postBook = makePostBook({ addBook })

const bookController = Object.freeze({
  getBooks,
  getBook,
  postBook
})

export default bookController
export { getBooks, getBook, postBook }
