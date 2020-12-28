const {pool} = require('../config/index')
const {addBookQuery, deleteBookByIdQuery, getBookByIdQuery, updateBookQuery, getBooksQuery, checkConnectionQuery} = require("./query_builder/queries")

async function addBook({name, image, authorId}) {
    const book = await pool.query(addBookQuery,
        [name, image, authorId])
    return book[0].insertId
}

async function deleteBookById(id) {
    return pool.query(deleteBookByIdQuery,
        [id])
}

async function getBookById(id) {
    const book = await pool.query(getBookByIdQuery,
        [id])
    return book[0][0]
}

async function updateBook(id, {name}) {
    await pool.query(updateBookQuery [name, id])
}

async function getBooks() {
    const books = await pool.query(getBooksQuery)
    return books[0]
}

function checkConnection() {
    return pool.query(checkConnectionQuery)
}


module.exports = {
    addBook,
    deleteBookById,
    getBookById,
    updateBook,
    getBooks,
    checkConnection
}
