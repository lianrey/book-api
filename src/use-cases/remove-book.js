export default function makeRemoveBook ({ booksDb }) {
  return async function removeBook (id) {
    if (!id) {
      throw new Error('You must supply a book id.')
    }

    const bookToDelete = await booksDb.findById({ id })

    if (!bookToDelete) {
      return deleteNothing()
    }

    await booksDb.remove(bookToDelete)
    return {
      deletedCount: 1,
      message: 'Book deleted.'
    }
  }
}

function deleteNothing () {
  return {
    deletedCount: 0,
    message: 'Book not found, nothing to delete.'
  }
}
