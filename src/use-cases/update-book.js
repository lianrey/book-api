import makeBook from '../entities'
export default function makeUpdateBook ({ booksDb }) {
  return async function updateBook ({ id, ...changes } = {}) {
    if (!id) {
      throw new Error('You must supply an id.')
    }
    const existing = await booksDb.findById({ id })

    if (!existing) {
      throw new Error('Book not found.')
    }

    const book = makeBook({ ...existing, ...changes, modifiedOn: null })

    const updated = await booksDb.update({
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
    return { ...existing, ...updated }
  }
}
