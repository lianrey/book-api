import makeGetBooks from './list-books'
import makeGetBook from './retrieve-book'
import makeAddBook from './add-book'
import makeUpdateBook from './update-book'
import makeRemoveBook from './remove-book'
import booksDb from '../data-access'

const listBooks = makeGetBooks({ booksDb })
const retrieveBook = makeGetBook({ booksDb })
const addBook = makeAddBook({ booksDb })
const updateBook = makeUpdateBook({ booksDb })
const removeBook = makeRemoveBook({ booksDb })

const BookService = Object.freeze({
  listBooks,
  retrieveBook,
  addBook,
  updateBook,
  removeBook
})

export default BookService
export { listBooks, retrieveBook, addBook, updateBook, removeBook }
