export default function makePutBook ({ updateBook }) {
  return async function putBook (httpRequest) {
    try {
      const { ...bookInfo } = httpRequest.body
      const posted = await updateBook({ id: httpRequest.params.id, ...bookInfo })
      return {
        headers: {
          'Content-Type': 'application/json',
          'Last-Modified': new Date(posted.modifiedOn).toUTCString()
        },
        statusCode: 200,
        body: { posted }
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
