export default function makeGetBook ({ booksDb }) {
  return async function retrieveBook (id) {
    return booksDb.findById({ id })
  }
}
