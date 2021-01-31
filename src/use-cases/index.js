import makeAddBook from './add-book'
import booksDb from '../data-access'

const addBook = makeAddBook({ booksDb })

const BookService = Object.freeze({
  addBook
})

export default BookService
export { addBook }
