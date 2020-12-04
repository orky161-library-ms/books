const bookDal = new (require('../dal/books'))()
const {upload} = require("../s3/upload")

class BooksLogic {
    async addBook({name, authorId}, image) {
        const imageUrl = await upload(image, name)
        return bookDal.addBook({name, image: imageUrl, authorId})
    }

    deleteBook(id) {
        return bookDal.deleteBookById(id)
    }

    getBook(id) {
        return bookDal.getBookById(id)
    }

    updateBook(id, book) {
        return bookDal.updateBook(id, book)
    }

    getBooks() {
        return bookDal.getBooks()
    }

}

module.exports = BooksLogic
