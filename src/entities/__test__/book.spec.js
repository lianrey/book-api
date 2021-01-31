/* eslint-disable no-undef */
import makeMockBook from '../../../__test__/mocks/mockBook'
import makeBook from '..'

describe('book', () => {
  it('must have an id', () => {
    const book = makeMockBook({ id: null })
    expect(() => makeBook(book)).toThrow('Book must have a valid id.')
  })
  it('must have a name', () => {
    const book = makeMockBook({ name: null })
    expect(() => makeBook(book)).toThrow('Book has to have a name.')
  })
  it('must have an author', () => {
    const book = makeMockBook({ author: null })
    expect(() => makeBook(book)).toThrow('Book has to have an author')
  })
  it('must have an valid ispn', () => {
    const book = makeMockBook({ isbn: '048665088A' })
    expect(() => makeBook(book)).toThrow('Book has to have a valid isbn.')
  })
  it('must have pages', () => {
    const book = makeMockBook({ numberOfPages: 0 })
    expect(() => makeBook(book)).toThrow('Book has to have pages.')
  })
  it('must have an edition', () => {
    const book = makeMockBook({ bookEdition: null })
    expect(() => makeBook(book)).toThrow('Book needs an edition.')
  })
  it('must have a format', () => {
    const book = makeMockBook({ bookFormat: null })
    expect(() => makeBook(book)).toThrow('Book needs a format.')
  })
  it('can create an id', () => {
    const noId = makeMockBook({ id: undefined })
    const book = makeBook(noId)
    expect(book.getId()).toBeDefined()
  })
  it('can have a name', () => {
    const withName = makeMockBook()
    expect(makeBook(withName).getName()).toBe(withName.name)
  })
  it('is CreatedOn now in UTC', () => {
    const noCreationDate = makeMockBook({ createdOn: undefined })
    const book = makeBook(noCreationDate)
    expect(book.getCreatedOn()).toBeDefined()
    expect(new Date(book.getCreatedOn()).toUTCString().substring(26)).toBe('GMT')
  })
  it('can have an author', () => {
    const withAuthor = makeMockBook()
    expect(makeBook(withAuthor).getAuthor()).toBe(withAuthor.author)
  })
  it('can have isbn', () => {
    const withIsbn = makeMockBook()
    expect(makeBook(withIsbn).getIsbn()).toBe(withIsbn.isbn)
  })
  it('is ModifiedOn now in UTC', () => {
    const noModifiedDate = makeMockBook({ modifiedOn: undefined })
    const book = makeBook(noModifiedDate)
    expect(book.getModifiedOn()).toBeDefined()
    expect(new Date(book.getModifiedOn()).toUTCString().substring(26)).toBe('GMT')
  })
  it('can have pages', () => {
    const withPages = makeMockBook()
    expect(makeBook(withPages).getNumberOfpages()).toBe(withPages.numberOfPages)
  })
  it('can have edition', () => {
    const withEdition = makeMockBook()
    expect(makeBook(withEdition).getBookEdition()).toBe(withEdition.bookEdition)
  })
  it('can have format', () => {
    const withFormat = makeMockBook()
    expect(makeBook(withFormat).getBookFormat()).toBe(withFormat.bookFormat)
  })
})
