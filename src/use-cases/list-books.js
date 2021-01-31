export default function makeGetBooks ({ booksDb }) {
  return async function listBook () {
    return booksDb.findAll()
  }
}
