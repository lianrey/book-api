import makeGetBooks from './list-books'
import makeGetBook from './retrieve-book'
import makeAddBook from './add-book'
import booksDb from '../data-access'

const listBooks = makeGetBooks({ booksDb })
const retrieveBook = makeGetBook({ booksDb })
const addBook = makeAddBook({ booksDb })

const BookService = Object.freeze({
  listBooks,
  retrieveBook,
  addBook
})

export default BookService
export { listBooks, retrieveBook, addBook }
