import makeBook from '../entities'
export default function makeAddBook ({ booksDb }) {
  return async function addBook (bookInfo) {
    const book = makeBook(bookInfo)
    const exists = await booksDb.findById({ id: book.getId() })
    if (exists) {
      return exists
    }

    return booksDb.insert({
      id: book.getId(),
      name: book.getName(),
      createdOn: book.getCreatedOn(),
      author: book.getAuthor(),
      isbn: book.getIsbn(),
      modifiedOn: book.getModifiedOn(),
      numberOfPages: book.getNumberOfpages(),
      bookEdition: book.getBookEdition(),
      bookFormat: book.getBookFormat()
    })
  }
}
