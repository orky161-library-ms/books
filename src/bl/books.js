const bookDal = new (require('../dal/books'))()
const AWS = require('aws-sdk');

class BooksLogic{
    async addBook({name, authorId}, image) {
        const imageUrl = await this.upload(image, name)
        return bookDal.addBook({name, image: imageUrl, authorId})
    }

    deleteBook(id) {
        return bookDal.deleteBook(id)
    }

    getBook(id) {
        return bookDal.getBook(id)
    }

    updateBook(id, book) {
        return bookDal.updateBook(id, book)
    }

    getBooks() {
        return bookDal.getBooks()
    }

    async upload(file, fileName) {
        const s3 = new AWS.S3({
            accessKeyId: process.env.ACCESS_KEY_ID,
            secretAccessKey: process.env.SECRET_ACCESS_KEY
        });
        const params = {
            Bucket: process.env.BUCKET,
            Key: fileName + '.jpg',
            Body: file.buffer,
            ACL:'public-read'
        };

        const res = await s3.upload(params).promise()
        return res.Location
    };
}

module.exports = BooksLogic
