export default function buildMakeBook ({ Id, isIsbnValid }) {
  return function makeBook ({
    id = Id.makeId(),
    name,
    createdOn = Date.now(),
    author,
    isbn,
    modifiedOn = Date.now(),
    numberOfPages,
    bookEdition,
    bookFormat
  } = {}) {
    if (!Id.isValidId(id)) {
      throw new Error('Book must have a valid id.')
    }
    if (!name) {
      throw new Error('Book has to have a name.')
    }
    if (!author) {
      throw new Error('Book has to have an author.')
    }
    if (!isbn || !isIsbnValid(isbn)) {
      throw new Error('Book has to have a valid isbn.')
    }
    if (Number.isInteger(numberOfPages) && numberOfPages === 0) {
      throw new Error('Book has to have pages.')
    }
    if (!bookEdition) {
      throw new Error('Book needs an edition.')
    }
    if (!bookFormat) {
      throw new Error('Book needs a format.')
    }

    return Object.freeze({
      getId: () => id,
      getName: () => name,
      getCreatedOn: () => createdOn,
      getAuthor: () => author,
      getIsbn: () => isbn,
      getModifiedOn: () => modifiedOn,
      getNumberOfpages: () => numberOfPages,
      getBookEdition: () => bookEdition,
      getBookFormat: () => bookFormat
    })
  }
}
