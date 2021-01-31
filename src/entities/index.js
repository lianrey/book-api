import buildMakeBook from './book'
import Id from '../external-services/Id'
import ISBN from 'isbn-validate'

const makeBook = buildMakeBook({ Id, isIsbnValid })

export default makeBook

function isIsbnValid (text) {
  return ISBN.Validate(text)
}
