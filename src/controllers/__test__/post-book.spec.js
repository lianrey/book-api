/* eslint-disable no-undef */
import makePostBook from '../post-book'
import makeMockBook from '../../../__test__/mocks/mockBook'

describe('post book controller', () => {
  it('successfully posts a book', async () => {
    const postBook = makePostBook({ addBook: b => b })
    const book = makeMockBook()
    const request = {
      headers: {
        'Content-Type': 'application/json'
      },
      body: book
    }
    const expected = {
      headers: {
        'Content-Type': 'application/json',
        'Last-Modified': new Date(request.body.modifiedOn).toUTCString()
      },
      statusCode: 201,
      body: { posted: request.body }
    }
    const actual = await postBook(request)
    expect(actual).toEqual(expected)
  })
  it('reports errors', async () => {
    const postBook = makePostBook({
      addBook: () => {
        throw Error('Invalid Request')
      }
    })
    const fakeBook = makeMockBook()
    const request = {
      headers: {
        'Content-Type': 'application/json'
      },
      body: fakeBook
    }
    const expected = {
      headers: {
        'Content-Type': 'application/json'
      },
      statusCode: 400,
      body: { error: 'Invalid Request' }
    }
    const actual = await postBook(request)
    expect(actual).toEqual(expected)
  })
})
