const mysql = require('mysql2');
const AWS = require('aws-sdk');
const LibraryAuth = require("library.io-libs/dist/authorization")

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});
const promisePool = pool.promise();

const s3 = new AWS.S3({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY
});

const libraryAuth = new LibraryAuth(process.env.TOKEN_PRIVATE_KEY)

module.exports = {
    pool: promisePool,
    s3,
    libraryAuth
}

