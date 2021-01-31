import makeBook from '../entities'
export default function makeAddBook ({ booksDb }) {
  return async function addBook (bookInfo) {
    const book = makeBook(bookInfo)
    const exists = await booksDb.findById({ id: book.getId() })
    if (exists) {
      return exists
    }

    return booksDb.insert(bookInfo)
  }
}
