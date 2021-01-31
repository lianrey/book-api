import {
  addBook,
  listBooks
} from '../use-cases'
import makeGetBooks from './get-books'
import makePostBook from './post-book'

const getBooks = makeGetBooks({ listBooks })
const postBook = makePostBook({ addBook })

const bookController = Object.freeze({
  getBooks,
  postBook
})

export default bookController
export { getBooks, postBook }
