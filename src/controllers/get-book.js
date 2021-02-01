export default function makeGetBook ({ retrieveBook }) {
  return async function getBook (httpRequest) {
    try {
      const book = await retrieveBook(httpRequest.params.id)
      return {
        headers: {
          'Content-Type': 'application/json',
          'Last-Modified': new Date(book.modifiedOn).toUTCString()
        },
        statusCode: 200,
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
