import Id from '../external-services/Id'

export default function makeBooksDb ({ makeDb }) {
  return Object.freeze({
    findAll,
    findById,
    insert,
    update,
    remove
  })
  async function findAll ({ publishedOnly = true } = {}) {
    const db = await makeDb()
    const query = publishedOnly ? { published: true } : {}
    const result = await db.collection(process.env.DM_BookS_DB_NAME).find(query)
    return (await result.toArray()).map(({ _id: id, ...found }) => ({
      id,
      ...found
    }))
  }
  async function findById ({ id: _id }) {
    const db = await makeDb()
    const result = await db.collection(process.env.DM_BookS_DB_NAME).find({ _id })
    const found = await result.toArray()
    if (found.length === 0) {
      return null
    }
    const { _id: id, ...info } = found[0]
    return { id, ...info }
  }
  async function insert ({ id: _id = Id.makeId(), ...BookInfo }) {
    const db = await makeDb()
    const result = await db
      .collection(process.env.DM_BookS_DB_NAME)
      .insertOne({ _id, ...BookInfo })
    const { _id: id, ...insertedInfo } = result.ops[0]
    return { id, ...insertedInfo }
  }

  async function update ({ id: _id, ...BookInfo }) {
    const db = await makeDb()
    const result = await db
      .collection(process.env.DM_BookS_DB_NAME)
      .updateOne({ _id }, { $set: { ...BookInfo } })
    return result.modifiedCount > 0 ? { id: _id, ...BookInfo } : null
  }
  async function remove ({ id: _id }) {
    const db = await makeDb()
    const result = await db.collection(process.env.DM_BookS_DB_NAME).deleteOne({ _id })
    return result.deletedCount
  }
}
