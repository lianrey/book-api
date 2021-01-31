import makeGetBooks from './list-books'
import makeAddBook from './add-book'
import booksDb from '../data-access'

const listBooks = makeGetBooks({ booksDb })
const addBook = makeAddBook({ booksDb })

const BookService = Object.freeze({
  listBooks,
  addBook
})

export default BookService
export { listBooks, addBook }
