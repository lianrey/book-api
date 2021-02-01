export default function makeGetBook ({ booksDb }) {
  return async function retrieveBook (id) {
    const bookToRetrieve = await booksDb.findById({ id })
    if (!bookToRetrieve) {
      return retrieveNothing()
    }

    return {
      count: 1,
      book: bookToRetrieve
    }
  }
}

function retrieveNothing () {
  return {
    count: 0,
    message: 'Book not found, nothing to retrieve.',
    book: { modifiedOn: Date.now() }
  }
}
