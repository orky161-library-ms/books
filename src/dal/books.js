const pool = require('../db')

class BooksDal {

    async addBook({name, image, authorId}) {
        const book = await pool.query('INSERT INTO books (name, image, authorId) VALUES (?,?,?)',
            [name, image, authorId])
        return book[0].insertId
    }

    async deleteBook(id) {
        return pool.query('DELETE FROM authors WHERE id = (?)',
            [id])
    }

    async getBook(id) {
        const book = await pool.query('SELECT * FROM books WHERE id = (?)',
            [id])
        return book[0][0]
    }

    async updateBook(id, {name}) {
        await pool.query('UPDATE books SET ' +
            'name = (?), image = (?), authorId = (?)' +
            'WHERE id = (?)',
            [name, id])
    }

    async getBooks() {
        const books = await pool.query('SELECT * FROM books')
        return books[0]
    }

}

module.exports = BooksDal
