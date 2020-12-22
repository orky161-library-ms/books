const BookDal = require('../dal/books')
const {upload} = require("../s3/upload")

async function addBook({name, authorId}, image) {
    const imageUrl = await upload(image, name)
    return BookDal.addBook({name, image: imageUrl, authorId})
}

function deleteBook(id) {
    return BookDal.deleteBookById(id)
}

function getBook(id) {
    return BookDal.getBookById(id)
}

function updateBook(id, book) {
    return BookDal.updateBook(id, book)
}

function getBooks() {
    return BookDal.getBooks()
}


module.exports = {
    addBook,
    deleteBook,
    getBook,
    updateBook,
    getBooks,
}
