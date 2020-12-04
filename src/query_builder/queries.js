
const checkConnectionQuery = "DO 1"

const addBookQuery = 'INSERT INTO books (name, image, authorId) VALUES (?,?,?)'
const deleteBookByIdQuery = 'DELETE FROM books WHERE id = (?)'
const getBookByIdQuery = 'SELECT * FROM books WHERE id = (?)'
const updateBookQuery = "UPDATE books SET " +
                        "name = (?), image = (?), authorId = (?) " +
                        "WHERE id = (?)"
const getBooksQuery = 'SELECT * FROM books'


module.exports ={
    checkConnectionQuery,
    addBookQuery,
    deleteBookByIdQuery,
    getBookByIdQuery,
    updateBookQuery,
    getBooksQuery,
}
