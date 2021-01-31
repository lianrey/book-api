import {
  addBook
} from '../use-cases'
import makePostBook from './post-book'

const postBook = makePostBook({ addBook })

const bookController = Object.freeze({
  postBook
})

export default bookController
export { postBook }
