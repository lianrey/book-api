import Id from '../../src/external-services/Id'
const faker = require('faker')

export default function makeMockBook (overrides) {
  const book = {
    id: Id.makeId(),
    name: faker.random.words(),
    createdOn: Date.now(),
    author: faker.name.findName(),
    isbn: '048665088X',
    modifiedOn: Date.now(),
    numberOfPages: faker.random.number(),
    bookEdition: faker.random.word(),
    bookFormat: faker.random.word()
  }

  return {
    ...book,
    ...overrides
  }
}
