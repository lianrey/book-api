export default function makeGetBooks ({ listBooks }) {
  return async function getBooks (httpRequest) {
    try {
      const books = await listBooks()
      return {
        headers: {
          'Content-Type': 'application/json',
          'Last-Modified': new Date(books.modifiedOn).toUTCString()
        },
        statusCode: 200,
        body: { books }
      }
    } catch (e) {
      console.log(e)

      return {
        headers: {
          'Content-Type': 'application/json'
        },
        statusCode: 400,
        body: {
          error: e.message
        }
      }
    }
  }
}
