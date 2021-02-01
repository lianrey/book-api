export default function makeDeleteBook ({ removeBook }) {
  return async function deleteBook (httpRequest) {
    try {
      const deleted = await removeBook(httpRequest.params.id)
      return {
        headers: {
          'Content-Type': 'application/json'
        },
        statusCode: deleted.deletedCount === 0 ? 404 : 200,
        body: { deleted }
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
