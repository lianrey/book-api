import {
  addBook,
  listBooks,
  retrieveBook,
  updateBook,
  removeBook
} from '../use-cases'
import makeGetBooks from './get-books'
import makeGetBook from './get-book'
import makePostBook from './post-book'
import makePutBook from './put-book'
import makeDeleteBook from './delete-book'

const getBooks = makeGetBooks({ listBooks })
const getBook = makeGetBook({ retrieveBook })
const postBook = makePostBook({ addBook })
const putBook = makePutBook({ updateBook })
const deleteBook = makeDeleteBook({ removeBook })

const bookController = Object.freeze({
  getBooks,
  getBook,
  postBook,
  putBook,
  deleteBook
})

export default bookController
export { getBooks, getBook, postBook, putBook, deleteBook }
