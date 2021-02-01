export default function makeGetBook ({ retrieveBook }) {
  return async function getBook (httpRequest) {
    try {
      const response = await retrieveBook(httpRequest.params.id)
      const book = response.book

      return {
        headers: {
          'Content-Type': 'application/json',
          'Last-Modified': new Date(book.modifiedOn).toUTCString()
        },
        statusCode: response.count === 0 ? 404 : 200,
        body: { book }
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
