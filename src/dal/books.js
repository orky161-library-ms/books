const {pool} = require('../config/index')
const {addBookQuery, deleteBookByIdQuery, getBookByIdQuery, updateBookQuery, getBooksQuery} = require("../query_builder/queries")
class BooksDal {

    async addBook({name, image, authorId}) {
        const book = await pool.query(addBookQuery,
            [name, image, authorId])
        return book[0].insertId
    }

    async deleteBookById(id) {
        return pool.query(deleteBookByIdQuery,
            [id])
    }

    async getBookById(id) {
        const book = await pool.query(getBookByIdQuery,
            [id])
        return book[0][0]
    }

    async updateBook(id, {name}) {
        await pool.query(updateBookQuery [name, id])
    }

    async getBooks() {
        const books = await pool.query(getBooksQuery)
        return books[0]
    }

}

module.exports = BooksDal
